let code_c64 = require("./code_c64")
let yaos = require("./yaos")

// 乾兑离震巽坎艮坤
let gua_codes = [
  "111", "110", "101", "100", "011", "010", "001", "000"
]

function devineByRandomNumber() {
  let rand1 = Math.floor(Math.random() * 1000000);
  let rand2 = Math.floor(Math.random() * 1000000);
  let rand3 = Math.floor(Math.random() * 1000000);
  let n1 = rand1 % 8;
  let n2 = rand2 % 8;
  let n3 = rand3 % 6;
  let code = gua_codes[n1] + gua_codes[n2];
  let detail = code_c64.code_c64[code];
  console.log(code, detail);

  let goodbad = detail[(6 - n3).toString()];
  let manifest = detail["manifest"]; // 象
  let gua = detail["name"]; // 卦名
  let rank = detail["rank"]
  let yaoidx = (rank - 1) * 6 + n3;
  let yao = yaos.yaos[yaoidx]
  console.log("devine:", gua, manifest, goodbad, yao, rank, yaoidx);
  return {
    gua: gua,
    manifest: manifest,
    goodbad: goodbad,
    yaoi: yao.yaoi,
    yao: yao.text,
    code: code,
    y1: code[0],
    y2: code[1],
    y3: code[2],
    y4: code[3],
    y5: code[4],
    y6: code[5]
  }
}

module.exports = {
  devineByRandomNumber: devineByRandomNumber
}