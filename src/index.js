import Web3 from 'web3'
import leftPad from 'left-pad'
const web3 = new Web3()

// the size of a character in a hex string in bytes
const HEX_CHAR_SIZE = 4

// the size to hash an integer if not explicity provided
const DEFAULT_SIZE = 256

const isHex = val => val.toString().slice(0, 2) === '0x'

/** Encodes a values in hex and adds padding to the given size if needed. Curried args. */
const encodeWithPadding = size => value => {
  return typeof value === 'string' && !isHex(value)
    // non-hex string
    ? web3.toHex(value)
    // numbers, big numbers, and hex strings
    : leftPad(web3.toHex(value).slice(2), size / HEX_CHAR_SIZE, 0)
}

/** Hashes one or more arguments, using a default size for numbers. */
export default (...args) => {
  const paddedArgs = args.map(encodeWithPadding(DEFAULT_SIZE)).join('')
  return web3.sha3(paddedArgs, { encoding: 'hex' })
}

/** Hashes a single value at the given size. */
export const sha3withsize = (value, size) => {
  const paddedArgs = encodeWithPadding(size)(value)
  return web3.sha3(paddedArgs, { encoding: 'hex' })
}
