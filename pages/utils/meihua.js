const code_c64 = require("./code_c64");
const yaos = require("./yaos");

// 乾兑离震巽坎艮坤（从左到右表示由下到上）
const gua_codes = [
    "111", "110", "101", "100", "011", "010", "001", "000"
];

const gua_code_name = {
    "111": {
        name: "乾",
        wuxing: "金"
    },
    "110": {
        name: "兑",
        wuxing: "金"
    },
    "101": {
        name: "离",
        wuxing: "火"
    },
    "100": {
        name: "震",
        wuxing: "木"
    },
    "011": {
        name: "巽",
        wuxing: "木"
    },
    "010": {
        name: "坎",
        wuxing: "水"
    },
    "001": {
        name: "艮",
        wuxing: "土"
    },
    "000": {
        name: "坤",
        wuxing: "土"
    }
};

// code: （从左到右表示由下到上）
function getHuGua(code) {
    // 互卦：将主卦的初爻与上爻去掉，以中间四爻的上三爻为上卦，下三爻为下卦
    return code[1] + code[2] + code[3] + code[2] + code[3] + code[4];
}

function getBianGua(code, i) {
    let gua = code.split('');
    if (gua[i - 1] === '0') {
        gua[i - 1] = '1';
    } else {
        gua[i - 1] = '0';
    }
    return gua.join('');
}

function getWuxingShengke(wuxingLeft, wuxingRight) {
    const sk = {
        '金金': '合',
        '金木': '克',
        '金水': '生',
        '金火': '被克',
        '金土': '被生',

        '木金': '被克',
        '木木': '合',
        '木水': '被生',
        '木火': '生',
        '木土': '克',

        '水金': '被生',
        '水木': '生',
        '水水': '合',
        '水火': '克',
        '水土': '被克',

        '火金': '克',
        '火木': '被生',
        '火水': '被克',
        '火火': '合',
        '火土': '生',

        '土金': '生',
        '土木': '被克',
        '土水': '克',
        '土火': '被生',
        '土土': '合',
    };
    const shengke = sk[wuxingLeft + wuxingRight];
    if (shengke.startsWith('被')) {
        return {
            direction: -1,
            shengke: shengke.slice(1, 2)
        };
    } else {
        return {
            direction: shengke === '合' ? 0 : 1,
            shengke: shengke
        };
    }
}

// direction > 0 表示体用；direction < 0 表示用体
function getTiyongLuck(direction, shengke) {
    if (direction === 0) {
        return '平';
    } else if (direction > 0) {
        return shengke === '生' ? '小凶' : '小吉';
    } else {
        return shengke === '生' ? '大吉' : '凶';
    }
}

function getGuaDetail(code, dongYaoIndex) {
    let detail = code_c64.code_c64[code];
    const updpwn = splitUpDownCode8(code);
    let ret = {
        code: code, // 卦码（6位）
        up: {...gua_code_name[updpwn.up]}, // 上卦（外卦）
        down: {...gua_code_name[updpwn.down]}, // 下卦（内卦）
        name: detail.name, // 卦名
        manifest: detail.manifest, // 卦象
        codes: code.split('').reverse(), // 卦码，数组顺序为自上而下（6位）
        upCodes: updpwn.up.split('').reverse(), // 上卦码，数组顺序为自上而下（3位）
        downCodes: updpwn.down.split('').reverse(), // 下卦码，数组顺序为自上而下（3位）
    };

    if (dongYaoIndex != null && dongYaoIndex > 0) {
        ret.yaoLuck = detail[(7 - dongYaoIndex).toString()];
        let yaoidx = (detail.rank - 1) * 6 + (6 - dongYaoIndex);
        let yao = yaos.yaos[yaoidx];
        ret.dongYaoIndex = dongYaoIndex;
        ret.yaoText = yao.text;
        ret.yaoIndex = yao.yaoi;

        // 体用生克
        // 体卦：动爻所在的卦
        if (dongYaoIndex <= 3) { // 体卦为内挂
            const shengke = getWuxingShengke(ret.down.wuxing, ret.up.wuxing);
            ret.up.tiyong = '用';
            ret.down.tiyong = '体';
            ret.shengke = {
                direction: shengke.direction > 0 ? 'up' : (shengke.direction < 0 ? 'down' : 'between'),
                type: shengke.shengke,
                luck: getTiyongLuck(shengke.direction, shengke.shengke)
            };
        } else {
            const shengke = getWuxingShengke(ret.up.wuxing, ret.down.wuxing);
            ret.up.tiyong = '体';
            ret.down.tiyong = '用';
            ret.shengke = {
                direction: shengke.direction > 0 ? 'down' : (shengke.direction < 0 ? 'up' : 'between'),
                type: shengke.shengke,
                luck: getTiyongLuck(shengke.direction, shengke.shengke)
            };
        }
    }
    return ret;
}

// code 从左到右表示由下到上
function splitUpDownCode8(code64) {
    const bits = code64.split('');
    return {
        up: bits[3] + bits[4] + bits[5],
        down: bits[0] + bits[1] + bits[2]
    }
}

function divineByMeihuaNumbers(rand1, rand2, rand3) {
    let n1 = rand1 % 8;
    let n2 = rand2 % 8;
    let n3 = (rand1 + rand2 + rand3) % 6;
    n3 = n3 == 0 ? 6 : n3;
    let benCode = gua_codes[n1] + gua_codes[n2]; // 内卦 + 外卦
    let huCode = getHuGua(benCode);
    let bianCode = getBianGua(benCode, n3);

    let benGua = getGuaDetail(benCode, n3);
    let huGua = getGuaDetail(huCode, n3);
    let bianGua = getGuaDetail(bianCode, n3);

    let desc = `本卦为${benGua.name}${benGua.manifest}，互卦为${huGua.name}${huGua.manifest}，动爻为第${n3}爻，变卦为${bianGua.name}${bianGua.manifest}`;

    return {
        benGua: benGua,
        huGua: huGua,
        bianGua: bianGua,
        dongYao: n3,
        desc: desc
    };
}

module.exports = {
    divineByMeihuaNumbers: divineByMeihuaNumbers
}