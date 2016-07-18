import * as chai from 'chai'
import sha3 from '../src/index.js'
import { sha3withsize } from '../src/index.js'
import BigNumber from 'bignumber.js'
const should = chai.should()

describe('solidity-sha3', () => {
  it('should hash a string', () => {
    sha3('a').should.equal('0x3ac225168df54212a25c1c01fd35bebfea408fdac2e31ddd6f80a4bbf9a5f1cb')
  })

  it('should hash a hex string', () => {
    sha3('0x0a').should.equal('0xc65a7bb8d6351c1cf70c95a316cc6a92839c986682d98bc35f958f4883f9d2a8')
  })

  it('should hash a number as uint256', () => {
    sha3(1).should.equal('0xb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6')
  })

  it('should hash negative numbers as int256', () => {
    sha3(-1).should.equal('0xa9c584056064687e149968cbab758a3376d22aedc6a55823d1b3ecbee81b8fb9')
  })

  it('should hash negative BigNumbers', () => {
    sha3(new BigNumber('-1')).should.equal('0xa9c584056064687e149968cbab758a3376d22aedc6a55823d1b3ecbee81b8fb9')
  })

  it('should hash a BigNumber', () => {
    sha3(new BigNumber('100')).should.equal('0x26700e13983fefbd9cf16da2ed70fa5c6798ac55062a4803121a869731e308d2')
  })

  it('should hash multiple arguments', () => {
    sha3('a', 1).should.equal('0xb5cafab5b83d18303877bb912b2d66ca18ab7390cfd9be8a2e66cc5096e0ea02')
  })

  it('should hash a value of a specific size', () => {
    sha3withsize(1, 8).should.equal('0x5fe7f977e71dba2ea1a68e21057beebb9be2ac30c6410aa38d4f3fbe41dcffd2')
    sha3withsize(1, 32).should.equal('0x51f81bcdfc324a0dff2b5bec9d92e21cbebc4d5e29d3a3d30de3e03fbeab8d7f')
  })
})
