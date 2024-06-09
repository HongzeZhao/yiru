let code_c64 = require("./code_c64")
let yaos = require("./yaos")

// 乾兑离震巽坎艮坤（从左到右表示由下到上）
let gua_codes = [
  "111", "110", "101", "100", "011", "010", "001", "000"
]

function getHuGua(code) {
  // 互卦：第二三爻与四五爻整体互换
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
        let yaoidx = (rank - 1) * 6 + (5 - dongYaoIndex);
        let yao = yaos.yaos[yaoidx];
        ret["dongYaoIndex"] = dongYaoIndex;
        ret["yaoText"] = yao.text;
        ret["yaoIndex"] = yao.yaoi;
    }
    console.log(ret);
    return ret;
}

function divineByRandomNumbers(rand1, rand2, rand3) {
  let n1 = rand1 % 8;
  let n2 = rand2 % 8;
  let n3 = rand3 % 6;
  let benCode = gua_codes[n1] + gua_codes[n2]; // 内卦 + 外卦
  let huCode = getHuGua(benCode);
  let bianCode = getBianGua(benCode, n3);

  let benGua = getGuaDetail(benCode, n3);
  let huGua = getGuaDetail(huCode);
  let bianGua = getGuaDetail(bianCode);

  let desc = `本卦为${benGua.name}${benGua.manifest}，动爻为第${n3+1}爻，互卦为${huGua.name}${huGua.manifest}，变卦为${bianGua.name}${bianGua.manifest}`;

  return {
      benGua: benGua,
      huGua: huGua,
      bianGua: bianGua,
      desc: desc
  };
}

module.exports = {
  divineByRandomNumbers: divineByRandomNumbers
}