import { createHash } from "crypto";

const Generate = (site, username, password, counter, passLen, charmap) => {
  const data = [site, username, password, counter].join("&");
  const hash = createHash("sha256").update(data).digest();

  charmap = rangeToCharMap(charmap);
  return bytesToChar(charmap, hash.slice(0, passLen));
};

const rangeToCharMap = (charmap) => {
  charmap = charmap.replace("a-z", "abcdefghijklmnopqrstuvwxyz");
  charmap = charmap.replace("A-Z", "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  charmap = charmap.replace("0-9", "0123456789");
  return charmap;
};

export const bytesToChar = (charMap, bytes) => {
  let genPass = "";
  for (let i = 0; i < bytes.length; i++) {
    genPass += charMap[Math.floor(bytes[i] / (255 / (charMap.length - 1)))];
  }

  return genPass;
};

export default Generate;
