import Web3 from 'web3'
import leftPad from 'left-pad'
const web3 = new Web3()

// the size of a character in a hex string in bytes
const HEX_CHAR_SIZE = 4

const isHex = val => val.toString().slice(0, 2) === '0x'

export default (...args) => {
  const paddedArgs = args.map(arg => {
    // non-hex string
    if (typeof arg === 'string' && !isHex(arg)) {
      return web3.toHex(arg)
    }
    // numbers, big numbers, and hex strings
    else {
      const argString = typeof arg === 'number'
        ? arg.toString(16)
        : web3.toHex(arg).slice(2)
      return leftPad(argString, 64, 0)
    }
  }).join('')

  return web3.sha3(paddedArgs, { encoding: 'hex' })
}

export const sha3withsize = (value, size) => {

  const paddedArgs = (arg => {
    // non-hex string
    if (typeof arg === 'string' && !isHex(arg)) {
      return web3.toHex(arg)
    }
    // numbers, big numbers, and hex strings
    else {
      const argString = typeof arg === 'number'
        ? arg.toString(16)
        : web3.toHex(arg).slice(2)
      return leftPad(argString, size / HEX_CHAR_SIZE, 0)
    }
  })(value)

  return web3.sha3(paddedArgs, { encoding: 'hex' })
}
