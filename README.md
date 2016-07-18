# solidity-sha3
[![npm version](https://img.shields.io/npm/v/solidity-sha3.svg)](https://npmjs.org/package/solidity-sha3)
[![Build Status](https://travis-ci.org/raineorshine/solidity-sha3.svg?branch=master)](https://travis-ci.org/raineorshine/solidity-sha3)

`web3.sha3` doesn't always match the behavior of `sha3` in Solidity. This one does.

- Hashes integers (default size: `uint256`)
- Hashes tightly-packed arguments
- Supports hex strings and BigNumber instances

## Install

```sh
$ npm install --save solidity-sha3
```

## Usage

```js
import sha3 from 'solidity-sha3'

sha3('a') // 0x3ac225168df54212a25c1c01fd35bebfea408fdac2e31ddd6f80a4bbf9a5f1cb
sha3('0x0a') // 0xc65a7bb8d6351c1cf70c95a316cc6a92839c986682d98bc35f958f4883f9d2a8
sha3(1) // 0xb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6
sha3(-1) // 0xa9c584056064687e149968cbab758a3376d22aedc6a55823d1b3ecbee81b8fb9
sha3(new BigNumber('100')) // 0x26700e13983fefbd9cf16da2ed70fa5c6798ac55062a4803121a869731e308d2
sha3('a', 1) // 0xb5cafab5b83d18303877bb912b2d66ca18ab7390cfd9be8a2e66cc5096e0ea02
```

You can also hash a value at a specific size:

```js
import { sha3withsize } from 'solidity-sha3'

// same as sha3(uint32(1)) in Solidity
sha3withsize(1, 32) // 0x51f81bcdfc324a0dff2b5bec9d92e21cbebc4d5e29d3a3d30de3e03fbeab8d7f

// same as sha3(1) in Solidity
sha3withsize(1, 8) // 0x5fe7f977e71dba2ea1a68e21057beebb9be2ac30c6410aa38d4f3fbe41dcffd2
```

## License

ISC © [Raine Revere](https://github.com/raineorshine)
