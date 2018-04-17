// see: https://github.com/cilphex/ethereum-address/blob/cb4829371c4e0beb3f019b73c47c1ae5e85a100f/index.js
import CryptoJS from './sha3'

let ethAddress = '0xc94cd681477e6a70a4797a9Cbaa9F1E52366823c'
let SHA3 = CryptoJS.SHA3

let sha3 = (value) => {
  return SHA3(value, {
    outputLength: 256
  }).toString()
}

let isAddress = (address) => {
  if (!/^(0x)?[0-9a-f]{40}$/i.test(address)) {
    // Check if it has the basic requirements of an address
    return false
  } else if (/^(0x)?[0-9a-f]{40}$/.test(address) || /^(0x)?[0-9A-F]{40}$/.test(address)) {
    // If it's all small caps or all all caps, return true
    return true
  } else {
    // Otherwise check each case
    return isChecksumAddress(address)
  }
}

export let isChecksumAddress = function (address) {
  // Check each case
  address = address.replace('0x', '')
  let addressHash = sha3(address.toLowerCase())

  for (let i = 0; i < 40; i++) {
    // The nth letter should be uppercase if the nth digit of casemap is 1
    if ((parseInt(addressHash[i], 16) > 7 && address[i].toUpperCase() !== address[i]) ||
                    (parseInt(addressHash[i], 16) <= 7 && address[i].toLowerCase() !== address[i])) {
      return false
    }
  }
  return true
}
