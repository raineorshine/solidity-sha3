import * as chai from 'chai'
import sha3 from '../src/index.js'
import BigNumber from 'bignumber.js'
const should = chai.should()

describe('solidity-sha3', () => {
  it('should hash a string', () => {
    sha3('a').should.equal('0x3ac225168df54212a25c1c01fd35bebfea408fdac2e31ddd6f80a4bbf9a5f1cb')
  })

  it('should hash a number as uint256', () => {
    sha3(1).should.equal('0xb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6')
  })

  it('should hash a BigNumber', () => {
    sha3(new BigNumber('100')).should.equal('0x26700e13983fefbd9cf16da2ed70fa5c6798ac55062a4803121a869731e308d2')
  })

  it('should hash multiple arguments', () => {
    sha3('a', 1).should.equal('0xb5cafab5b83d18303877bb912b2d66ca18ab7390cfd9be8a2e66cc5096e0ea02')
  })
})
