# solidity-sha3
[![npm version](https://img.shields.io/npm/v/solidity-sha3.svg)](https://npmjs.org/package/solidity-sha3)
[![Build Status](https://travis-ci.org/raineorshine/solidity-sha3.svg?branch=master)](https://travis-ci.org/raineorshine/solidity-sha3)

Solidity sha3 in Javascript

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
sha3(new BigNumber('100')) // 0x26700e13983fefbd9cf16da2ed70fa5c6798ac55062a4803121a869731e308d2
sha3('a', 1) // 0xb5cafab5b83d18303877bb912b2d66ca18ab7390cfd9be8a2e66cc5096e0ea02
```

## License

ISC © [Raine Revere](https://github.com/raineorshine)
