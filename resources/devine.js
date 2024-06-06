let code_c64 = require("./code_c64")
let yaos = require("./yaos")

// 乾兑离震巽坎艮坤（从左到右表示由下到上）
let gua_codes = [
  "111", "110", "101", "100", "011", "010", "001", "000"
]

function getHuGua(code) {
    return code[0] + code[3] + code[4] + code[1] + code[2] + code[5];
}

function getBianGua(code, i) {
    let gua = code.split('');
    if (gua[i] === '0') {
        gua[i] = '1';
    } else {
        gua[i] = '0';
    }
    return gua.join('');
}

function getGuaDetail(code, dongYaoIndex) {
    let detail = code_c64.code_c64[code];
    let ret = {
        code: code,                          // 卦码
        name: detail["name"],                // 卦名
        manifest: detail["manifest"],        // 卦象
        codes: code.split('').reverse()      // 卦码，数组顺序为自上而下
    };
    if (dongYaoIndex != null && dongYaoIndex >= 0) {
        ret["yaoLuck"] = detail[(6 - dongYaoIndex).toString()];
        let rank = detail["rank"];
        let yaoidx = (rank - 1) * 6 + dongYaoIndex;
        let yao = yaos.yaos[yaoidx];
        ret["yaoText"] = yao.text;
        ret["yaoIndex"] = yao.i;
    }
    return ret;
}

function devineByRandomNumber() {
  let rand1 = Math.floor(Math.random() * 1000000);
  let rand2 = Math.floor(Math.random() * 1000000);
  let rand3 = Math.floor(Math.random() * 1000000);
  let n1 = rand1 % 8;
  let n2 = rand2 % 8;
  let n3 = rand3 % 6;
  let benCode = gua_codes[n1] + gua_codes[n2]; // 内卦 + 外卦
  let huCode = getHuGua(benCode);
  let bianCode = getBianGua(benCode, n3);

  return {
      benGua: getGuaDetail(benCode, n3),
      huGua: getGuaDetail(huCode),
      bianGua: getGuaDetail(bianCode)
  };
}

module.exports = {
  devineByRandomNumber: devineByRandomNumber
}