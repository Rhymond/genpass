import { createHash } from 'crypto';

const Generate = (site, username, password, counter, passLen) => {
  const charMap = "123456789"

  const data = [site, username, password, counter].join("&");
  const hash = createHash('sha256').update(data).digest()

  return bytesToChar(charMap, hash.slice(0, passLen))
}

export const bytesToChar = (charMap, bytes) => {
  let genPass = ""
  for (let i = 0; i < bytes.length; i++) {
    genPass += charMap[Math.floor(bytes[i]/(255/(charMap.length-1)))]
  }

  return genPass
}

export default Generate;
