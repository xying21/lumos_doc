---
id: querycapacity
title: Query on CKB Capacity
---



## Prerequisites

The following prerequisites apply for the examples of this guide:

- The development environment is set up. For more information, see [Set Up the Development Environment](http://localhost:3000/lumos_doc/docs/preparation/setupsystem).
- The CKB node is installed and started. For more information, see [Install a CKB Node](http://localhost:3000/lumos_doc/docs/preparation/installckb).
- The Lumos packages (`@ckb-lumos/base`, `@ckb-lumos/indexer`, `@ckb-lumos/helpers`) are installed.

## Environment

The following examples are verified on Ubuntu 20.04.2. Steps on the other platforms can be adjusted accordingly.

## Examples

### Get the Cell Minimal Capacity

The three fields of a CKB cell and the cell itself all take up CKB capacity. The cell must have the capacity that is equal to or more than the total size of information stored in the cell. For more information, see [Nervos Docs: Cell](https://nervosnetwork.github.io/docs-new/docs/reference/cell).

For example, the minimum CKB capacity requirement is 61 CKB (6,100,000,000 shannons) for a common transaction, and 102 CKB (10,200,000,000 shannons) for a DAO deposit transaction.

The [minimalCellCapacity](https://nervosnetwork.github.io/lumos/modules/helpers.html#minimalcellcapacity) function of the `@ckb-lumos/helpers` package can be used to get the minimal capacity for a cell.

Example:

```typescript title="hellolumos/src/querycells.ts/getMinimalCellCapacity" {4}
import { minimalCellCapacity } from "@ckb-lumos/helpers";

export async function getMinimalCellCapacity(fullcell: Cell) {
  const result = minimalCellCapacity(fullcell);
  console.log("The minimal cell capacity is", result);
}
```

Try the `getMinimalCellCapacity` function in the Node.js REPL mode:

<details><summary>CLICK ME</summary>
<p>

```shell {1,2,5,7-25}
$ cd hellolumos
$ node --experimental-repl-await
Welcome to Node.js v14.0.0.
Type ".help" for more information.
> const { querycells } = require(".");
The server is started.
> const cell = {
  cell_output: {
    capacity: '0x1247656167b4',
    lock: {
      code_hash: '0x9bd7e06f3ecf4be0f2fcd2188b23f1b9fcc88e5d4b65a8637b17723bbda3cce8',
      hash_type: 'type',
      args: '0x7e00660b8ab122bca3ba468c5b6eee71f40b7d8e'
    },
    type: undefined
  },
  out_point: {
    tx_hash: '0xdcd898c29a2d9dcbaca6c5112bb681d55acb5a557aaf2cbaa1ea2fe561ba3b36',
    index: '0x0'
  },
  block_hash: '0x8030e31e760905f4e2c220f45b653ed73d0bdea5962bd34ca96bc3ea50cbc725',
  block_number: '0x9a',
  data: '0x'
}
> await querycells.getMinimalCellCapacity(cell);
The minimal cell capacity is 6100000000n
```
</p>
</details>

### Get the Balance of an Account

The balance of an account means the total CKB capacity of the account. For more information, see [CKB Capacity of an Account](../preparation/createaccount#ckb-capacity-of-an-account).

The following example gathers the live (unspent) cells for a specific lock script (the lock script is the ID of an account) and then calculates the total capacity as the balance of the account. 

Example:

```typescript title="hellolumos/src/querycells.ts/getBalancebyLock"
import { INDEXER } from "./index";
import { Cell, Script } from "@ckb-lumos/base";

export async function getBalancebyLock(lockScript: Script) {
  let balance = BigInt(0);
  const collector = INDEXER.collector({ lock: lockScript });
  const cells: Cell[] = [];
  for await (const cell of collector.collect()) {
    cells.push(cell);
  }
  balance = cells
    .map((cell) => BigInt(cell.cell_output.capacity))
    .reduce((balance, capacity) => (balance = balance += capacity), BigInt(0));
  console.log("The balance of the account is", balance);
}
```

Try the `GetBalancebyLock` function in the Node.js REPL mode:

<details><summary>CLICK ME</summary>
<p>

```shell {1,2,5,7-10}
$ cd hellolumos
$ node --experimental-repl-await
Welcome to Node.js v14.0.0.
Type ".help" for more information.
> const { accounts, querycells } = require(".");
The server is started.
> const alice = accounts.ALICE;
> const { parseAddress } = require("@ckb-lumos/helpers");
> const script = parseAddress(alice.ADDRESS);
> await querycells.getBalancebyLock(script);
The balance of the account is 522545522203302n
```
</p>
</details>

### Get the SUDT Balance of an Account

The following example collects the cells for a lock script and an SUDT script, and then calculates the total amount of SUDT tokens for the account. 

Example:

```typescript title="hellolumos/src/querycells.ts/getSUDTBalance"
import { INDEXER } from "./index";
import { Cell, Script } from "@ckb-lumos/base";

export async function getSUDTBalance(lock: Script, sudtType: Script) {
  let balance = BigInt(0);
  const collector = INDEXER.collector({ lock, type: sudtType });
  const cells: Cell[] = [];
  for await (const cell of collector.collect()) {
    cells.push(cell);
  }

  balance = cells
    .map((cell) => utils.readBigUInt128LE(cell.data))
    .reduce((balance, amount) => (balance = balance += amount), BigInt(0));
  console.log("The SUDT balance of the account is", balance);
}
```

For more information about SUDT and SUDT operations, see [Issue SUDT Tokens](../tutorials/buildtransactions#issue-sudt-tokens) and [Transfer SUDT Tokens](../tutorials/buildtransactions#transfer-sudt-tokens).

### Find Cells for Sufficient Capacity

The following example collects a set of cells and the total amount of CKB capacity of the cells is sufficient for the required <var>amount</var>.

Example:

```typescript title="hellolumos/src/querycells.ts/getBalancebyLock"
import { INDEXER } from "./index";
import { Cell, Script } from "@ckb-lumos/base";

export const findCellsforSufficientAmount = async (
  lockScript: Script,
  amount: BigInt
): Promise<Cell[]> => {
  let foundCapacity = BigInt(0);
  const Cells = [] as Cell[];

  const collector = INDEXER.collector({ lock: lockScript });

  const cells: Cell[] = [];
  for await (const cell of collector.collect()) {
    // If the cell has a type script or data, ignore
    if (!cell.cell_output.type && cell.data === "0x") {
      cells.push(cell);
    }
  }

  for (const cell of cells) {
    if (foundCapacity < amount) {
      foundCapacity = foundCapacity + BigInt(cell.cell_output.capacity);
      Cells.push(cell);
    }
    if (foundCapacity > amount) break;
  }

  if (foundCapacity < amount)
    throw new Error(`Insufficient capacity cells found`);

  return Cells;
};
```

Try the `findCellsforSufficientAmount` function in the Node.js REPL mode:

<details><summary>CLICK ME</summary>
<p>


```shell {1,2,5,7-9,12,48}
$ cd hellolumos
$ node --experimental-repl-await
Welcome to Node.js v14.0.0.
Type ".help" for more information.
> const { accounts, querycells } = require(".");
The server is started.
> const bob = accounts.BOB;
> const { parseAddress } = require("@ckb-lumos/helpers");
> const script = parseAddress(bob.ADDRESS);
//Bob owns three cells, and each cell contains 200 CKB in the capacity field.
//This can be achieved by transferring 600 CKB from Alice to Bob in three times, and 200 CKB each time.
> await querycells.findCellsbyLock(script);
Find the cells by lock script:
[
  {
    cell_output: { capacity: '0x4a817c800', lock: [Object], type: undefined },
    out_point: {
      tx_hash: '0x32a717c2af9160b800805796c68803213060df782834486c72cfbacbb0868d62',
      index: '0x0'
    },
    block_hash: '0xc21b34b009d5e355357eb55d9ee3456c6a90632434cff8dc515b2f0a207f854c',
    block_number: '0x15',
    data: '0x'
  },
  {
    cell_output: { capacity: '0x4a817c800', lock: [Object], type: undefined },
    out_point: {
      tx_hash: '0x144ae79bc6064ae99e51b7105f4b61328dd4293d68d132b7a04d86409952ae2e',
      index: '0x0'
    },
    block_hash: '0x2d70e178be2447f784d9c8c1c52630d10b3b3b23575896e61ff15983a7e5ba59',
    block_number: '0xc9',
    data: '0x'
  },
  {
    cell_output: { capacity: '0x4a817c800', lock: [Object], type: undefined },
    out_point: {
      tx_hash: '0x10104ec6857fd99b818e7b401216268c067ce7fbc536b77c86f3565c108e958e',
      index: '0x0'
    },
    block_hash: '0x64623c86af1df458caac8a1433e50ae7ffc228aaa1975d60ed03dfe3ec4ca3fc',
    block_number: '0xea',
    data: '0x'
  }
]
//Run the findCellsforSufficientAmount function to collect the cells that have a total
//amount at least 300 CKB. The function returns two cells with the total amount of 400 CKB that is sufficient and more than 300 CKB.
> await querycells.findCellsforSufficientAmount(script, 30000000000n);
[
  {
    cell_output: { capacity: '0x4a817c800', lock: [Object], type: undefined },
    out_point: {
      tx_hash: '0x32a717c2af9160b800805796c68803213060df782834486c72cfbacbb0868d62',
      index: '0x0'
    },
    block_hash: '0xc21b34b009d5e355357eb55d9ee3456c6a90632434cff8dc515b2f0a207f854c',
    block_number: '0x15',
    data: '0x'
  },
  {
    cell_output: { capacity: '0x4a817c800', lock: [Object], type: undefined },
    out_point: {
      tx_hash: '0x144ae79bc6064ae99e51b7105f4b61328dd4293d68d132b7a04d86409952ae2e',
      index: '0x0'
    },
    block_hash: '0x2d70e178be2447f784d9c8c1c52630d10b3b3b23575896e61ff15983a7e5ba59',
    block_number: '0xc9',
    data: '0x'
  }
]
```

</p>
</details>

