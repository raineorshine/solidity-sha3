import Web3 from 'web3'
import leftPad from 'left-pad'
const web3 = new Web3()

const stripHex = val => val.slice(0, 2) === '0x' ? val.slice(2) : val

export default (...args) => {
  const paddedArgs = args.map(arg => {
    if (typeof arg === 'string') {
      const argString = stripHex(arg.toString())
      return web3.toHex(argString)
    }
    else {
      const argString = typeof arg === 'number'
        ? arg.toString(16)
        : web3.toHex(arg).slice(2)
      return leftPad(argString, 64, 0)
    }
  }).join('')

  return web3.sha3(paddedArgs, { encoding: 'hex' })
}
