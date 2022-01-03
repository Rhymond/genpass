import { createHash } from 'crypto';

const Generate = (site, username, password, counter, passLen) => {
  const charMap = "123456789"

  const data = [site, username, password, counter].join("&");
  const hash = createHash('sha256').update(data).digest()
  let genPass = ""
  for (let i = 0; i < passLen; i++) {
    genPass += charMap[Math.floor(hash[i]/(255/charMap.length))]
  }
  return genPass
}

export default Generate;
