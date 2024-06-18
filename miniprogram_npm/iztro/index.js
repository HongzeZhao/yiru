module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1718710892496, function(require, module, exports) {

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.astro = exports.util = exports.star = exports.data = void 0;
exports.data = __importStar(require("./data"));
exports.star = __importStar(require("./star"));
exports.util = __importStar(require("./utils"));
exports.astro = __importStar(require("./astro"));

}, function(modId) {var map = {"./data":1718710892497,"./star":1718710892502,"./utils":1718710892576,"./astro":1718710892504}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1718710892497, function(require, module, exports) {

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./constants"), exports);
__exportStar(require("./stars"), exports);
__exportStar(require("./heavenlyStems"), exports);
__exportStar(require("./earthlyBranches"), exports);

}, function(modId) { var map = {"./constants":1718710892498,"./stars":1718710892499,"./heavenlyStems":1718710892500,"./earthlyBranches":1718710892501}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1718710892498, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.RAT_RULE = exports.TIGER_RULE = exports.TIME_RANGE = exports.CHINESE_TIME = exports.FiveElementsClass = exports.GENDER = exports.PALACES = exports.ZODIAC = exports.EARTHLY_BRANCHES = exports.HEAVENLY_STEMS = exports.LANGUAGES = void 0;
/** 支持的语言 */
exports.LANGUAGES = ['en-US', 'ja-JP', 'ko-KR', 'zh-CN', 'zh-TW', 'vi-VN'];
/** 十天干 */
exports.HEAVENLY_STEMS = [
    'jiaHeavenly',
    'yiHeavenly',
    'bingHeavenly',
    'dingHeavenly',
    'wuHeavenly',
    'jiHeavenly',
    'gengHeavenly',
    'xinHeavenly',
    'renHeavenly',
    'guiHeavenly',
];
/** 十二地支 */
exports.EARTHLY_BRANCHES = [
    'ziEarthly',
    'chouEarthly',
    'yinEarthly',
    'maoEarthly',
    'chenEarthly',
    'siEarthly',
    'wuEarthly',
    'weiEarthly',
    'shenEarthly',
    'youEarthly',
    'xuEarthly',
    'haiEarthly',
];
/** 十二生肖（按地支顺序） */
exports.ZODIAC = [
    'rat',
    'ox',
    'tiger',
    'rabbit',
    'dragon',
    'snake',
    'horse',
    'sheep',
    'monkey',
    'rooster',
    'dog',
    'pig',
];
/** 紫微斗数十二宫名称 */
exports.PALACES = [
    'soulPalace',
    'parentsPalace',
    'spiritPalace',
    'propertyPalace',
    'careerPalace',
    'friendsPalace',
    'surfacePalace',
    'healthPalace',
    'wealthPalace',
    'childrenPalace',
    'spousePalace',
    'siblingsPalace',
];
/** 性别对应阴阳，男为阳，女为阴 */
exports.GENDER = {
    male: '阳',
    female: '阴',
};
/**
 * 五行局，用于定紫微星和算起运年龄
 * 几局就从几岁（虚岁）开始起运
 * 比如 木三局 就从3岁开始起运
 *
 * @enum
 *  - 2 水二局
 *  - 3 木三局
 *  - 4 金四局
 *  - 5 土五局
 *  - 6 火六局
 */
var FiveElementsClass;
(function (FiveElementsClass) {
    FiveElementsClass[FiveElementsClass["water2nd"] = 2] = "water2nd";
    FiveElementsClass[FiveElementsClass["wood3rd"] = 3] = "wood3rd";
    FiveElementsClass[FiveElementsClass["metal4th"] = 4] = "metal4th";
    FiveElementsClass[FiveElementsClass["earth5th"] = 5] = "earth5th";
    FiveElementsClass[FiveElementsClass["fire6th"] = 6] = "fire6th";
})(FiveElementsClass || (exports.FiveElementsClass = FiveElementsClass = {}));
/**
 * 时辰, 子时分早晚。
 * 其中 00:00-01:00 为早子时，23:00-00:00 为晚子时
 */
exports.CHINESE_TIME = [
    'earlyRatHour',
    'oxHour',
    'tigerHour',
    'rabbitHour',
    'dragonHour',
    'snakeHour',
    'horseHour',
    'goatHour',
    'monkeyHour',
    'roosterHour',
    'dogHour',
    'pigHour',
    'lateRatHour', // : '23:00~00:00',
];
/** 时辰序号所对应的时间段，与 `CHINESE_TIME` 一一对应 */
exports.TIME_RANGE = [
    '00:00~01:00',
    '01:00~03:00',
    '03:00~05:00',
    '05:00~07:00',
    '07:00~09:00',
    '09:00~11:00',
    '11:00~13:00',
    '13:00~15:00',
    '15:00~17:00',
    '17:00~19:00',
    '19:00~21:00',
    '21:00~23:00',
    '23:00~00:00',
];
/**
 * 五虎遁 从年干算月干。
 *
 * “五虎遁元”年上起月法，简称 `五虎遁`。
 * 因为正月建寅，所以正月的地支为寅，寅属虎，所以叫五虎盾。
 *
 * - 甲己之年丙作首
 * - 乙庚之岁戊为头
 * - 丙辛必定寻庚起
 * - 丁壬壬位顺行流
 * - 若问戊癸何方发
 * - 甲寅之上好追求
 */
exports.TIGER_RULE = {
    jiaHeavenly: 'bingHeavenly',
    yiHeavenly: 'wuHeavenly',
    bingHeavenly: 'gengHeavenly',
    dingHeavenly: 'renHeavenly',
    wuHeavenly: 'jiaHeavenly',
    jiHeavenly: 'bingHeavenly',
    gengHeavenly: 'wuHeavenly',
    xinHeavenly: 'gengHeavenly',
    renHeavenly: 'renHeavenly',
    guiHeavenly: 'jiaHeavenly',
};
/**
 * 五鼠遁 以日干算时干。
 *
 * “五鼠遁元”日上起时法，简称 `五鼠遁`。
 * 因为日支全部以“子”时打头来排列的，子为鼠，所以叫五鼠遁。
 *
 * - 甲己还加甲，乙庚丙作初。
 * - 丙辛从戊起，丁壬庚子居。
 * - 戊癸起壬子，周而复始求。
 */
exports.RAT_RULE = {
    jiaHeavenly: 'jiaHeavenly',
    yiHeavenly: 'bingHeavenly',
    bingHeavenly: 'wuHeavenly',
    dingHeavenly: 'gengHeavenly',
    wuHeavenly: 'renHeavenly',
    jiHeavenly: 'jiaHeavenly',
    gengHeavenly: 'bingHeavenly',
    xinHeavenly: 'wuHeavenly',
    renHeavenly: 'gengHeavenly',
    guiHeavenly: 'renHeavenly',
};

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1718710892499, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.STARS_INFO = exports.MUTAGEN = void 0;
/** 紫微斗数四化 */
exports.MUTAGEN = ['sihuaLu', 'sihuaQuan', 'sihuaKe', 'sihuaJi'];
/**
 * 星耀信息
 * 其中包含：
 * 1. 亮度（bright）, 按照宫位地支排序（从寅开始）
 * 2. 五行（fiveElements）
 * 3. 阴阳（yinYang）
 */
exports.STARS_INFO = {
    ziweiMaj: {
        brightness: ['wang', 'wang', 'de', 'wang', 'miao', 'miao', 'wang', 'wang', 'de', 'wang', 'ping', 'miao'],
        fiveElements: '土',
        yinYang: '阴',
    },
    tianjiMaj: {
        brightness: ['de', 'wang', 'li', 'ping', 'miao', 'xian', 'de', 'wang', 'li', 'ping', 'miao', 'xian'],
        fiveElements: '木',
        yinYang: '阴',
    },
    taiyangMaj: {
        brightness: ['wang', 'miao', 'wang', 'wang', 'wang', 'de', 'de', 'xian', 'bu', 'xian', 'xian', 'bu'],
        fiveElements: '',
        yinYang: '',
    },
    wuquMaj: {
        brightness: ['de', 'li', 'miao', 'ping', 'wang', 'miao', 'de', 'li', 'miao', 'ping', 'wang', 'miao'],
        fiveElements: '金',
        yinYang: '阴',
    },
    tiantongMaj: {
        brightness: ['li', 'ping', 'ping', 'miao', 'xian', 'bu', 'wang', 'ping', 'ping', 'miao', 'wang', 'bu'],
        fiveElements: '水',
        yinYang: '阳',
    },
    lianzhenMaj: {
        brightness: ['miao', 'ping', 'li', 'xian', 'ping', 'li', 'miao', 'ping', 'li', 'xian', 'ping', 'li'],
        fiveElements: '火',
        yinYang: '阴',
    },
    tianfuMaj: {
        brightness: ['miao', 'de', 'miao', 'de', 'wang', 'miao', 'de', 'wang', 'miao', 'de', 'miao', 'miao'],
        fiveElements: '土',
        yinYang: '阳',
    },
    taiyinMaj: {
        brightness: ['wang', 'xian', 'xian', 'xian', 'bu', 'bu', 'li', 'bu', 'wang', 'miao', 'miao', 'miao'],
        fiveElements: '水',
        yinYang: '阴',
    },
    tanlangMaj: {
        brightness: ['ping', 'li', 'miao', 'xian', 'wang', 'miao', 'ping', 'li', 'miao', 'xian', 'wang', 'miao'],
        fiveElements: '水',
        yinYang: '',
    },
    jumenMaj: {
        brightness: ['miao', 'miao', 'xian', 'wang', 'wang', 'bu', 'miao', 'miao', 'xian', 'wang', 'wang', 'bu'],
        fiveElements: '土',
        yinYang: '阴',
    },
    tianxiangMaj: {
        brightness: ['miao', 'xian', 'de', 'de', 'miao', 'de', 'miao', 'xian', 'de', 'de', 'miao', 'miao'],
        fiveElements: '水',
        yinYang: '',
    },
    tianliangMaj: {
        brightness: ['miao', 'miao', 'miao', 'xian', 'miao', 'wang', 'xian', 'de', 'miao', 'xian', 'miao', 'wang'],
        fiveElements: '土',
        yinYang: '',
    },
    qishaMaj: {
        brightness: ['miao', 'wang', 'miao', 'ping', 'wang', 'miao', 'miao', 'miao', 'miao', 'ping', 'wang', 'miao'],
        fiveElements: '',
        yinYang: '',
    },
    pojunMaj: {
        brightness: ['de', 'xian', 'wang', 'ping', 'miao', 'wang', 'de', 'xian', 'wang', 'ping', 'miao', 'wang'],
        fiveElements: '水',
        yinYang: '',
    },
    wenchangMin: {
        brightness: ['xian', 'li', 'de', 'miao', 'xian', 'li', 'de', 'miao', 'xian', 'li', 'de', 'miao'],
    },
    wenquMin: {
        brightness: ['ping', 'wang', 'de', 'miao', 'xian', 'wang', 'de', 'miao', 'xian', 'wang', 'de', 'miao'],
    },
    huoxingMin: {
        brightness: ['miao', 'li', 'xian', 'de', 'miao', 'li', 'xian', 'de', 'miao', 'li', 'xian', 'de'],
    },
    lingxingMin: {
        brightness: ['miao', 'li', 'xian', 'de', 'miao', 'li', 'xian', 'de', 'miao', 'li', 'xian', 'de'],
    },
    qingyangMin: {
        brightness: ['', 'xian', 'miao', '', 'xian', 'miao', '', 'xian', 'miao', '', 'xian', 'miao'],
    },
    tuoluoMin: {
        brightness: ['xian', '', 'miao', 'xian', '', 'miao', 'xian', '', 'miao', 'xian', '', 'miao'],
    },
};

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1718710892500, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.heavenlyStems = void 0;
/**
 * 十天干信息
 * 其中包含：
 * 1. 阴阳（yinYang）
 * 2. 五行（fiveElements）
 * 3. 天干相冲（crash）
 *    - 甲庚相冲
 *    - 乙辛相冲
 *    - 壬丙相冲
 *    - 癸丁相冲
 *    - 戊己土居中央，故无冲。
 * 4. 紫微斗数十天干四化(mutagen)
 *
 *    顺序为【禄，权，科，忌】
 *    - 甲:【廉，破，武，阳】
 *    - 乙:【机，梁，紫，月】
 *    - 丙:【同，机，昌，廉】
 *    - 丁:【阴，同，机，巨】
 *    - 戊:【贪，月，弼，机】
 *    - 己:【武，贪，梁，曲】
 *    - 庚:【阳，武，阴，同】
 *    - 辛:【巨，日，曲，昌】
 *    - 壬:【梁，紫，左，武】
 *    - 癸:【破，巨，阴，贪】
 */
exports.heavenlyStems = {
    jiaHeavenly: {
        yinYang: '阳',
        fiveElements: '木',
        crash: 'gengHeavenly',
        mutagen: ['lianzhenMaj', 'pojunMaj', 'wuquMaj', 'taiyangMaj'],
    },
    yiHeavenly: {
        yinYang: '阴',
        fiveElements: '木',
        crash: 'xinHeavenly',
        mutagen: ['tianjiMaj', 'tianliangMaj', 'ziweiMaj', 'taiyinMaj'],
    },
    bingHeavenly: {
        yinYang: '阳',
        fiveElements: '火',
        crash: 'renHeavenly',
        mutagen: ['tiantongMaj', 'tianjiMaj', 'wenchangMin', 'lianzhenMaj'],
    },
    dingHeavenly: {
        yinYang: '阴',
        fiveElements: '火',
        crash: 'guiHeavenly',
        mutagen: ['taiyinMaj', 'tiantongMaj', 'tianjiMaj', 'jumenMaj'],
    },
    wuHeavenly: {
        yinYang: '阳',
        fiveElements: '土',
        mutagen: ['tanlangMaj', 'taiyinMaj', 'youbiMin', 'tianjiMaj'],
    },
    jiHeavenly: {
        yinYang: '阴',
        fiveElements: '土',
        mutagen: ['wuquMaj', 'tanlangMaj', 'tianliangMaj', 'wenquMin'],
    },
    gengHeavenly: {
        yinYang: '阳',
        fiveElements: '金',
        crash: 'jiaHeavenly',
        mutagen: ['taiyangMaj', 'wuquMaj', 'taiyinMaj', 'tiantongMaj'],
    },
    xinHeavenly: {
        yinYang: '阴',
        fiveElements: '金',
        crash: 'yiHeavenly',
        mutagen: ['jumenMaj', 'taiyangMaj', 'wenquMin', 'wenchangMin'],
    },
    renHeavenly: {
        yinYang: '阳',
        fiveElements: '水',
        crash: 'bingHeavenly',
        mutagen: ['tianliangMaj', 'ziweiMaj', 'zuofuMin', 'wuquMaj'],
    },
    guiHeavenly: {
        yinYang: '阴',
        fiveElements: '水',
        crash: 'dingHeavenly',
        mutagen: ['pojunMaj', 'jumenMaj', 'taiyinMaj', 'tanlangMaj'],
    },
};

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1718710892501, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.earthlyBranches = void 0;
/**
 * 十二地支信息
 * 其中包含：
 * 1. 阴阳（yinYang）
 * 2. 五行（fiveElements）
 * 3. 六冲（crash）
 *    - 子午相冲
 *    - 丑未相冲
 *    - 寅申相冲
 *    - 卯酉相冲
 *    - 辰戌相冲
 *    - 巳亥相冲
 * 4. 紫微斗数命主（soul）
 *    - 命主以命宫所在宫位地支定之
 * 5. 紫微斗数身主（body）
 *    - 身主以生年年支定之
 * 6. 身体部位【内】（inside）
 * 7. 身体部位【外】（outside）
 * 8. 健康提示（healthTip）
 */
exports.earthlyBranches = {
    ziEarthly: {
        yinYang: '阳',
        fiveElements: '水',
        crash: 'wuEarthly',
        soul: 'tanlangMaj',
        body: 'huoxingMin',
        inside: '胆',
        outside: '下体',
        healthTip: '生殖系统、膀胱、尿道之疾病，听觉障碍',
    },
    chouEarthly: {
        yinYang: '阴',
        fiveElements: '土',
        crash: 'weiEarthly',
        soul: 'jumenMaj',
        body: 'tianxiangMaj',
        inside: '肝',
        outside: '小腿、脚（右）',
        healthTip: '胸部、肋膜炎、胃病、脚部',
    },
    yinEarthly: {
        yinYang: '阳',
        fiveElements: '木',
        crash: 'shenEarthly',
        soul: 'lucunMin',
        body: 'tianliangMaj',
        inside: '肺',
        outside: '大腿（右）',
        healthTip: '胆囊、关节、胫部、神经痛、风湿',
    },
    maoEarthly: {
        yinYang: '阴',
        fiveElements: '木',
        crash: 'youEarthly',
        soul: 'wenquMin',
        body: 'tiantongMaj',
        inside: '大肠',
        outside: '腰（右）、背',
        healthTip: '肝病、颜面神经、失眠、神经衰弱',
    },
    chenEarthly: {
        yinYang: '阳',
        fiveElements: '土',
        crash: 'xuEarthly',
        soul: 'lianzhenMaj',
        body: 'wenchangMin',
        inside: '胃',
        outside: '胸、胳膊（右）',
        healthTip: '消化系统、脊椎、皮肤疾病',
    },
    siEarthly: {
        yinYang: '阴',
        fiveElements: '火',
        crash: 'haiEarthly',
        soul: 'wuquMaj',
        body: 'tianjiMaj',
        inside: '脾',
        outside: '左肩',
        healthTip: '喉头、牙病、感冒',
    },
    wuEarthly: {
        yinYang: '阳',
        fiveElements: '火',
        crash: 'ziEarthly',
        soul: 'pojunMaj',
        body: 'huoxingMin',
        inside: '心',
        outside: '头',
        healthTip: '心脏、视觉、味觉障碍、火难',
    },
    weiEarthly: {
        yinYang: '阴',
        fiveElements: '土',
        crash: 'chouEarthly',
        soul: 'wuquMaj',
        body: 'tianxiangMaj',
        inside: '小肠',
        outside: '脸',
        healthTip: '消化系统、胰脏、健忘症、疲倦、手腕、嘴唇',
    },
    shenEarthly: {
        yinYang: '阳',
        fiveElements: '金',
        crash: 'yinEarthly',
        soul: 'lianzhenMaj',
        body: 'tianliangMaj',
        inside: '膀胱',
        outside: '胸、胳膊（左）',
        healthTip: '呼吸系统、肺部、消化系统、大肠',
    },
    youEarthly: {
        yinYang: '阴',
        fiveElements: '金',
        crash: 'maoEarthly',
        soul: 'wenquMin',
        body: 'tiantongMaj',
        inside: '肾',
        outside: '腰（左）、腹',
        healthTip: '吐血、痢血、小肠之疾、脑出血、头腕部',
    },
    xuEarthly: {
        yinYang: '阳',
        fiveElements: '土',
        crash: 'chenEarthly',
        soul: 'lucunMin',
        body: 'wenchangMin',
        inside: '心包',
        outside: '大腿（左）',
        healthTip: '下半身之疾、子宫、痔疮、脚部',
    },
    haiEarthly: {
        yinYang: '阴',
        fiveElements: '水',
        crash: 'siEarthly',
        soul: 'jumenMaj',
        body: 'tianjiMaj',
        inside: '三焦',
        outside: '小腿、脚（左）',
        healthTip: '排泄机能障碍、肾脏、尿道、偏头痛',
    },
};

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1718710892502, function(require, module, exports) {

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initStars = void 0;
var initStars = function () { return [[], [], [], [], [], [], [], [], [], [], [], []]; };
exports.initStars = initStars;
__exportStar(require("./location"), exports);
__exportStar(require("./majorStar"), exports);
__exportStar(require("./minorStar"), exports);
__exportStar(require("./adjectiveStar"), exports);
__exportStar(require("./decorativeStar"), exports);
__exportStar(require("./horoscopeStar"), exports);

}, function(modId) { var map = {"./location":1718710892503,"./majorStar":1718710892583,"./minorStar":1718710892585,"./adjectiveStar":1718710892586,"./decorativeStar":1718710892587,"./horoscopeStar":1718710892588}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1718710892503, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.getChangQuIndexByHeavenlyStem = exports.getMonthlyStarIndex = exports.getNianjieIndex = exports.getYearlyStarIndex = exports.getGuGuaIndex = exports.getHuagaiXianchiIndex = exports.getLuanXiIndex = exports.getHuoLingIndex = exports.getKongJieIndex = exports.getTimelyStarIndex = exports.getDailyStarIndex = exports.getChangQuIndex = exports.getZuoYouIndex = exports.getKuiYueIndex = exports.getLuYangTuoMaIndex = exports.getStartIndex = void 0;
var lunar_lite_1 = require("lunar-lite");
var astro_1 = require("../astro");
var data_1 = require("../data");
var i18n_1 = require("../i18n");
var utils_1 = require("../utils");
/**
 * 起紫微星诀算法
 *
 * - 六五四三二，酉午亥辰丑，
 * - 局数除日数，商数宫前走；
 * - 若见数无余，便要起虎口，
 * - 日数小於局，还直宫中守。
 *
 * 举例：
 * - 例一：27日出生木三局，以三除27，循环0次就可以整除，27➗3=9，从寅进9格，在戍安紫微。
 * - 例二：13日出生火六局，以六除13，最少需要加5才能整除， 18➗8=3，从寅进3格为辰，添加数为5（奇数），故要逆回五宫，在亥安紫微。
 * - 例三：6日出生土五局，以五除6，最少需要加4才能整除，10➗5=2，从寅进2格为卯，添加数为4（偶数），顺行4格为未，在未安紫微。
 *
 * @param solarDateStr 公历日期 YYYY-MM-DD
 * @param timeIndex 时辰索引【0～12】
 * @param fixLeap 是否调整农历闰月（若该月不是闰月则不会生效）
 * @returns 紫微和天府星所在宫位索引
 */
var getStartIndex = function (solarDateStr, timeIndex, fixLeap) {
    var _a = (0, astro_1.getSoulAndBody)(solarDateStr, timeIndex, fixLeap), heavenlyStemOfSoul = _a.heavenlyStemOfSoul, earthlyBranchOfSoul = _a.earthlyBranchOfSoul;
    var lunarDay = (0, lunar_lite_1.solar2lunar)(solarDateStr).lunarDay;
    var fiveElements = (0, i18n_1.kot)((0, astro_1.getFiveElementsClass)(heavenlyStemOfSoul, earthlyBranchOfSoul));
    var remainder = -1; // 余数
    var quotient; // 商
    var offset = -1; // 循环次数
    // 获取当月最大天数
    var maxDays = (0, lunar_lite_1.getTotalDaysOfLunarMonth)(solarDateStr);
    // 如果timeIndex等于12说明是晚子时，需要加一天
    var _day = timeIndex === 12 ? lunarDay + 1 : lunarDay;
    if (_day > maxDays) {
        // 假如日期超过当月最大天数，说明跨月了，需要处理为合法日期
        _day -= maxDays;
    }
    do {
        // 农历出生日（初一为1，以此类推）加上偏移量作为除数，以这个数处以五行局的数向下取整
        // 需要一直运算到余数为0为止
        offset++;
        var divisor = _day + offset;
        quotient = Math.floor(divisor / data_1.FiveElementsClass[fiveElements]);
        remainder = divisor % data_1.FiveElementsClass[fiveElements];
    } while (remainder !== 0);
    // 将商除以12取余数
    quotient %= 12;
    // 以商减一（因为需要从0开始）作为起始位置
    var ziweiIndex = quotient - 1;
    if (offset % 2 === 0) {
        // 若循环次数为偶数，则索引逆时针数到循环数
        ziweiIndex += offset;
    }
    else {
        // 若循环次数为偶数，则索引顺时针数到循环数
        ziweiIndex -= offset;
    }
    ziweiIndex = (0, utils_1.fixIndex)(ziweiIndex);
    // 天府星位置与紫微星相对
    var tianfuIndex = (0, utils_1.fixIndex)(12 - ziweiIndex);
    return { ziweiIndex: ziweiIndex, tianfuIndex: tianfuIndex };
};
exports.getStartIndex = getStartIndex;
/**
 * 按年干支计算禄存、擎羊，陀罗、天马的索引
 *
 * 定禄存、羊、陀诀（按年干）
 *
 * - 甲禄到寅宫，乙禄居卯府。
 * - 丙戊禄在巳，丁己禄在午。
 * - 庚禄定居申，辛禄酉上补。
 * - 壬禄亥中藏，癸禄居子户。
 * - 禄前羊刃当，禄后陀罗府。
 *
 * 安天马（按年支），天马只会出现在四马地【寅申巳亥】
 *
 * - 寅午戍流马在申，申子辰流马在寅。
 * - 巳酉丑流马在亥，亥卯未流马在巳。
 *
 * @param heavenlyStemName 天干
 * @param earthlyBranchName 地支
 * @returns 禄存、擎羊，陀罗、天马的索引
 */
var getLuYangTuoMaIndex = function (heavenlyStemName, earthlyBranchName) {
    var luIndex = -1; // 禄存索引
    var maIndex = 0; // 天马索引
    var heavenlyStem = (0, i18n_1.kot)(heavenlyStemName, 'Heavenly');
    var earthlyBranch = (0, i18n_1.kot)(earthlyBranchName, 'Earthly');
    switch (earthlyBranch) {
        case 'yinEarthly':
        case 'wuEarthly':
        case 'xuEarthly':
            maIndex = (0, utils_1.fixEarthlyBranchIndex)('shen');
            break;
        case 'shenEarthly':
        case 'ziEarthly':
        case 'chenEarthly':
            maIndex = (0, utils_1.fixEarthlyBranchIndex)('yin');
            break;
        case 'siEarthly':
        case 'youEarthly':
        case 'chouEarthly':
            maIndex = (0, utils_1.fixEarthlyBranchIndex)('hai');
            break;
        case 'haiEarthly':
        case 'maoEarthly':
        case 'weiEarthly':
            maIndex = (0, utils_1.fixEarthlyBranchIndex)('si');
            break;
    }
    switch (heavenlyStem) {
        case 'jiaHeavenly': {
            luIndex = (0, utils_1.fixEarthlyBranchIndex)('yin');
            break;
        }
        case 'yiHeavenly': {
            luIndex = (0, utils_1.fixEarthlyBranchIndex)('mao');
            break;
        }
        case 'bingHeavenly':
        case 'wuHeavenly': {
            luIndex = (0, utils_1.fixEarthlyBranchIndex)('si');
            break;
        }
        case 'dingHeavenly':
        case 'jiHeavenly': {
            luIndex = (0, utils_1.fixEarthlyBranchIndex)('woo');
            break;
        }
        case 'gengHeavenly': {
            luIndex = (0, utils_1.fixEarthlyBranchIndex)('shen');
            break;
        }
        case 'xinHeavenly': {
            luIndex = (0, utils_1.fixEarthlyBranchIndex)('you');
            break;
        }
        case 'renHeavenly': {
            luIndex = (0, utils_1.fixEarthlyBranchIndex)('hai');
            break;
        }
        case 'guiHeavenly': {
            luIndex = (0, utils_1.fixEarthlyBranchIndex)('zi');
            break;
        }
    }
    return {
        luIndex: luIndex,
        maIndex: maIndex,
        yangIndex: (0, utils_1.fixIndex)(luIndex + 1),
        tuoIndex: (0, utils_1.fixIndex)(luIndex - 1),
    };
};
exports.getLuYangTuoMaIndex = getLuYangTuoMaIndex;
/**
 * 获取天魁天钺所在宫位索引（按年干）
 *
 * - 甲戊庚之年丑未
 * - 乙己之年子申
 * - 辛年午寅
 * - 壬癸之年卯巳
 * - 丙丁之年亥酉
 *
 * @param heavenlyStemName 天干
 * @returns
 */
var getKuiYueIndex = function (heavenlyStemName) {
    var kuiIndex = -1;
    var yueIndex = -1;
    var heavenlyStem = (0, i18n_1.kot)(heavenlyStemName, 'Heavenly');
    switch (heavenlyStem) {
        case 'jiaHeavenly':
        case 'wuHeavenly':
        case 'gengHeavenly':
            kuiIndex = (0, utils_1.fixEarthlyBranchIndex)('chou');
            yueIndex = (0, utils_1.fixEarthlyBranchIndex)('wei');
            break;
        case 'yiHeavenly':
        case 'jiHeavenly':
            kuiIndex = (0, utils_1.fixEarthlyBranchIndex)('zi');
            yueIndex = (0, utils_1.fixEarthlyBranchIndex)('shen');
            break;
        case 'xinHeavenly':
            kuiIndex = (0, utils_1.fixEarthlyBranchIndex)('woo');
            yueIndex = (0, utils_1.fixEarthlyBranchIndex)('yin');
            break;
        case 'bingHeavenly':
        case 'dingHeavenly':
            kuiIndex = (0, utils_1.fixEarthlyBranchIndex)('hai');
            yueIndex = (0, utils_1.fixEarthlyBranchIndex)('you');
            break;
        case 'renHeavenly':
        case 'guiHeavenly':
            kuiIndex = (0, utils_1.fixEarthlyBranchIndex)('mao');
            yueIndex = (0, utils_1.fixEarthlyBranchIndex)('si');
            break;
    }
    return { kuiIndex: kuiIndex, yueIndex: yueIndex };
};
exports.getKuiYueIndex = getKuiYueIndex;
/**
 * 获取左辅右弼的索引（按生月）
 *
 * - 辰上顺正寻左辅
 * - 戌上逆正右弼当
 *
 * 解释：
 *
 * - 从辰顺数农历月份数是左辅的索引
 * - 从戌逆数农历月份数是右弼的索引
 *
 * @param lunarMonth 农历月份
 * @returns 左辅、右弼索引
 */
var getZuoYouIndex = function (lunarMonth) {
    var zuoIndex = (0, utils_1.fixIndex)((0, utils_1.fixEarthlyBranchIndex)('chen') + (lunarMonth - 1));
    var youIndex = (0, utils_1.fixIndex)((0, utils_1.fixEarthlyBranchIndex)('xu') - (lunarMonth - 1));
    return { zuoIndex: zuoIndex, youIndex: youIndex };
};
exports.getZuoYouIndex = getZuoYouIndex;
/**
 * 获取文昌文曲的索引（按时支）
 *
 * - 辰上顺时文曲位
 * - 戌上逆时觅文昌
 *
 * 解释：
 *
 * - 从辰顺数到时辰地支索引是文曲的索引
 * - 从戌逆数到时辰地支索引是文昌的索引
 *
 * 由于时辰地支的索引即是时辰的序号，所以可以直接使用时辰的序号
 *
 * @param timeIndex 时辰索引【0～12】
 * @returns 文昌、文曲索引
 */
var getChangQuIndex = function (timeIndex) {
    var changIndex = (0, utils_1.fixIndex)((0, utils_1.fixEarthlyBranchIndex)('xu') - (0, utils_1.fixIndex)(timeIndex));
    var quIndex = (0, utils_1.fixIndex)((0, utils_1.fixEarthlyBranchIndex)('chen') + (0, utils_1.fixIndex)(timeIndex));
    return { changIndex: changIndex, quIndex: quIndex };
};
exports.getChangQuIndex = getChangQuIndex;
/**
 * 获取日系星索引，包括
 *
 * 三台，八座，恩光，天贵
 *
 * - 安三台八座
 *   - 由左辅之宫位起初一，顺行至生日安三台。
 *   - 由右弼之宫位起初一，逆行至生日安八座。
 *
 * - 安恩光天贵
 *   - 由文昌之宫位起初一，顺行至生日再退一步起恩光。
 *   - 由文曲之宫位起初一，顺行至生日再退一步起天贵。
 *
 * @param solarDateStr 阳历日期
 * @param timeIndex 时辰索引【0～12】
 * @returns 三台，八座索引
 */
var getDailyStarIndex = function (solarDateStr, timeIndex) {
    var _a = (0, lunar_lite_1.solar2lunar)(solarDateStr), lunarMonth = _a.lunarMonth, lunarDay = _a.lunarDay;
    var _b = (0, exports.getZuoYouIndex)(lunarMonth), zuoIndex = _b.zuoIndex, youIndex = _b.youIndex;
    var _c = (0, exports.getChangQuIndex)(timeIndex), changIndex = _c.changIndex, quIndex = _c.quIndex;
    var dayIndex = (0, utils_1.fixLunarDayIndex)(lunarDay, timeIndex);
    var santaiIndex = (0, utils_1.fixIndex)((zuoIndex + dayIndex) % 12);
    var bazuoIndex = (0, utils_1.fixIndex)((youIndex - dayIndex) % 12);
    var enguangIndex = (0, utils_1.fixIndex)(((changIndex + dayIndex) % 12) - 1);
    var tianguiIndex = (0, utils_1.fixIndex)(((quIndex + dayIndex) % 12) - 1);
    return { santaiIndex: santaiIndex, bazuoIndex: bazuoIndex, enguangIndex: enguangIndex, tianguiIndex: tianguiIndex };
};
exports.getDailyStarIndex = getDailyStarIndex;
/**
 * 获取时系星耀索引，包括台辅，封诰
 *
 * @param timeIndex 时辰序号【0～12】
 * @returns 台辅，封诰索引
 */
var getTimelyStarIndex = function (timeIndex) {
    var taifuIndex = (0, utils_1.fixIndex)((0, utils_1.fixEarthlyBranchIndex)('woo') + (0, utils_1.fixIndex)(timeIndex));
    var fenggaoIndex = (0, utils_1.fixIndex)((0, utils_1.fixEarthlyBranchIndex)('yin') + (0, utils_1.fixIndex)(timeIndex));
    return { taifuIndex: taifuIndex, fenggaoIndex: fenggaoIndex };
};
exports.getTimelyStarIndex = getTimelyStarIndex;
/**
 * 获取地空地劫的索引（按时支）
 *
 * - 亥上子时顺安劫
 * - 逆回便是地空亡
 *
 * 解释：
 *
 * - 从亥顺数到时辰地支索引是地劫的索引
 * - 从亥逆数到时辰地支索引是地空的索引
 *
 * 由于时辰地支的索引即是时辰的序号，所以可以直接使用时辰的序号
 *
 * @param timeIndex 时辰索引【0～12】
 * @returns 地空、地劫索引
 */
var getKongJieIndex = function (timeIndex) {
    var fixedTimeIndex = (0, utils_1.fixIndex)(timeIndex);
    var haiIndex = (0, utils_1.fixEarthlyBranchIndex)('hai');
    var kongIndex = (0, utils_1.fixIndex)(haiIndex - fixedTimeIndex);
    var jieIndex = (0, utils_1.fixIndex)(haiIndex + fixedTimeIndex);
    return { kongIndex: kongIndex, jieIndex: jieIndex };
};
exports.getKongJieIndex = getKongJieIndex;
/**
 * 获取火星铃星索引（按年支以及时支）
 *
 * - 申子辰人寅戌扬
 * - 寅午戌人丑卯方
 * - 巳酉丑人卯戌位
 * - 亥卯未人酉戌房
 *
 * 起火铃二耀先据出生年支，依口诀定火铃起子时位。
 *
 * 例如壬辰年卯时生人，据[申子辰人寅戌扬]口诀，故火星在寅宫起子时，铃星在戌宫起子时，顺数至卯时，即火星在巳，铃星在丑。
 *
 * @param earthlyBranchName 地支
 * @param timeIndex 时辰序号
 * @returns 火星、铃星索引
 */
var getHuoLingIndex = function (earthlyBranchName, timeIndex) {
    var huoIndex = -1;
    var lingIndex = -1;
    var fixedTimeIndex = (0, utils_1.fixIndex)(timeIndex);
    var earthlyBranch = (0, i18n_1.kot)(earthlyBranchName, 'Earthly');
    switch (earthlyBranch) {
        case 'yinEarthly':
        case 'wuEarthly':
        case 'xuEarthly': {
            huoIndex = (0, utils_1.fixEarthlyBranchIndex)('chou') + fixedTimeIndex;
            lingIndex = (0, utils_1.fixEarthlyBranchIndex)('mao') + fixedTimeIndex;
            break;
        }
        case 'shenEarthly':
        case 'ziEarthly':
        case 'chenEarthly': {
            huoIndex = (0, utils_1.fixEarthlyBranchIndex)('yin') + fixedTimeIndex;
            lingIndex = (0, utils_1.fixEarthlyBranchIndex)('xu') + fixedTimeIndex;
            break;
        }
        case 'siEarthly':
        case 'youEarthly':
        case 'chouEarthly': {
            huoIndex = (0, utils_1.fixEarthlyBranchIndex)('mao') + fixedTimeIndex;
            lingIndex = (0, utils_1.fixEarthlyBranchIndex)('xu') + fixedTimeIndex;
            break;
        }
        case 'haiEarthly':
        case 'weiEarthly':
        case 'maoEarthly': {
            huoIndex = (0, utils_1.fixEarthlyBranchIndex)('you') + fixedTimeIndex;
            lingIndex = (0, utils_1.fixEarthlyBranchIndex)('xu') + fixedTimeIndex;
            break;
        }
    }
    return {
        huoIndex: (0, utils_1.fixIndex)(huoIndex),
        lingIndex: (0, utils_1.fixIndex)(lingIndex),
    };
};
exports.getHuoLingIndex = getHuoLingIndex;
/**
 * 获取红鸾天喜所在宫位索引
 *
 * - 卯上起子逆数之
 * - 数到当生太岁支
 * - 坐守此宫红鸾位
 * - 对宫天喜不差移
 *
 * @param earthlyBranchName 年支
 * @returns 红鸾、天喜索引
 */
var getLuanXiIndex = function (earthlyBranchName) {
    var earthlyBranch = (0, i18n_1.kot)(earthlyBranchName, 'Earthly');
    var hongluanIndex = (0, utils_1.fixIndex)((0, utils_1.fixEarthlyBranchIndex)('mao') - data_1.EARTHLY_BRANCHES.indexOf(earthlyBranch));
    var tianxiIndex = (0, utils_1.fixIndex)(hongluanIndex + 6);
    return { hongluanIndex: hongluanIndex, tianxiIndex: tianxiIndex };
};
exports.getLuanXiIndex = getLuanXiIndex;
/**
 * 安华盖
 * - 子辰申年在辰，丑巳酉年在丑
 * - 寅午戍年在戍，卯未亥年在未。
 *
 * 安咸池
 * - 子辰申年在酉，丑巳酉年在午
 * - 寅午戍年在卯，卯未亥年在子。
 *
 * @param earthlyBranchName 地支
 * @returns 华盖、咸池索引
 */
var getHuagaiXianchiIndex = function (earthlyBranchName) {
    var hgIdx = -1;
    var xcIdx = -1;
    var earthlyBranch = (0, i18n_1.kot)(earthlyBranchName, 'Earthly');
    switch (earthlyBranch) {
        case 'yinEarthly':
        case 'wuEarthly':
        case 'xuEarthly': {
            hgIdx = (0, utils_1.fixEarthlyBranchIndex)('xu');
            xcIdx = (0, utils_1.fixEarthlyBranchIndex)('mao');
            break;
        }
        case 'shenEarthly':
        case 'ziEarthly':
        case 'chenEarthly': {
            hgIdx = (0, utils_1.fixEarthlyBranchIndex)('chen');
            xcIdx = (0, utils_1.fixEarthlyBranchIndex)('you');
            break;
        }
        case 'siEarthly':
        case 'youEarthly':
        case 'chouEarthly': {
            hgIdx = (0, utils_1.fixEarthlyBranchIndex)('chou');
            xcIdx = (0, utils_1.fixEarthlyBranchIndex)('woo');
            break;
        }
        case 'haiEarthly':
        case 'weiEarthly':
        case 'maoEarthly': {
            hgIdx = (0, utils_1.fixEarthlyBranchIndex)('wei');
            xcIdx = (0, utils_1.fixEarthlyBranchIndex)('zi');
            break;
        }
    }
    return {
        huagaiIndex: (0, utils_1.fixIndex)(hgIdx),
        xianchiIndex: (0, utils_1.fixIndex)(xcIdx),
    };
};
exports.getHuagaiXianchiIndex = getHuagaiXianchiIndex;
/**
 * 安孤辰寡宿
 * - 寅卯辰年安巳丑
 * - 巳午未年安申辰
 * - 申酉戍年安亥未
 * - 亥子丑年安寅戍。
 *
 * @param earthlyBranchName 地支
 * @returns 孤辰、寡宿索引
 */
var getGuGuaIndex = function (earthlyBranchName) {
    var guIdx = -1;
    var guaIdx = -1;
    var earthlyBranch = (0, i18n_1.kot)(earthlyBranchName, 'Earthly');
    switch (earthlyBranch) {
        case 'yinEarthly':
        case 'maoEarthly':
        case 'chenEarthly': {
            guIdx = (0, utils_1.fixEarthlyBranchIndex)('si');
            guaIdx = (0, utils_1.fixEarthlyBranchIndex)('chou');
            break;
        }
        case 'siEarthly':
        case 'wuEarthly':
        case 'weiEarthly': {
            guIdx = (0, utils_1.fixEarthlyBranchIndex)('shen');
            guaIdx = (0, utils_1.fixEarthlyBranchIndex)('chen');
            break;
        }
        case 'shenEarthly':
        case 'youEarthly':
        case 'xuEarthly': {
            guIdx = (0, utils_1.fixEarthlyBranchIndex)('hai');
            guaIdx = (0, utils_1.fixEarthlyBranchIndex)('wei');
            break;
        }
        case 'haiEarthly':
        case 'ziEarthly':
        case 'chouEarthly': {
            guIdx = (0, utils_1.fixEarthlyBranchIndex)('yin');
            guaIdx = (0, utils_1.fixEarthlyBranchIndex)('xu');
            break;
        }
    }
    return {
        guchenIndex: (0, utils_1.fixIndex)(guIdx),
        guasuIndex: (0, utils_1.fixIndex)(guaIdx),
    };
};
exports.getGuGuaIndex = getGuGuaIndex;
/**
 * 获取年系星的索引，包括
 * 咸池，华盖，孤辰，寡宿, 天厨，破碎，天才，天寿，蜚蠊, 龙池，凤阁，天哭，天虚，
 * 天官，天福
 *
 * - 安天才天寿
 *   - 天才由命宫起子，顺行至本生年支安之。天寿由身宫起子，顺行至本生年支安之。
 *
 * - 安破碎
 *   - 子午卯酉年安巳宫，寅申巳亥年安酉宫，辰戍丑未年安丑宫。
 *
 * - 安天厨
 *   - 甲丁食蛇口，乙戊辛马方。丙从鼠口得，己食于猴房。庚食虎头上，壬鸡癸猪堂。
 *
 * - 安蜚蠊
 *   - 子丑寅年在申酉戍，卯辰巳年在巳午未，午未申年在寅卯辰，酉戍亥年在亥子丑。
 *
 * - 安龙池凤阁
 *   - 龙池从辰宫起子，顺至本生年支安之。凤阁从戍宫起子，逆行至本生年支安之。
 *
 * - 安天哭天虚
 *   - 天哭天虚起午宫，午宫起子两分踪，哭逆行兮虚顺转，数到生年便停留。
 *
 * - 安天官天福
 *   - 甲喜羊鸡乙龙猴，丙年蛇鼠一窝谋。丁虎擒猪戊玉兔，
 *   - 己鸡居然与虎俦。庚猪马辛鸡蛇走，壬犬马癸马蛇游。
 *
 * - 安截路空亡（截空）
 *   - 甲己之年申酉，乙庚之年午未，
 *   - 丙辛之年辰巳，丁壬之年寅卯，
 *   - 戊癸之年子丑。
 *
 * - 安天空
 *   - 生年支顺数的前一位就是。
 * @param solarDate 阳历日期
 * @param timeIndex 时辰序号
 * @param fixLeap 是否修复闰月，假如当月不是闰月则不生效
 */
var getYearlyStarIndex = function (solarDate, timeIndex, fixLeap) {
    var yearly = (0, lunar_lite_1.getHeavenlyStemAndEarthlyBranchBySolarDate)(solarDate, timeIndex, {
        // 流耀应该用立春为界，但为了满足不同流派的需求允许配置
        year: (0, astro_1.getConfig)().horoscopeDivide,
    }).yearly;
    var _a = (0, astro_1.getSoulAndBody)(solarDate, timeIndex, fixLeap), soulIndex = _a.soulIndex, bodyIndex = _a.bodyIndex;
    var heavenlyStem = (0, i18n_1.kot)(yearly[0], 'Heavenly');
    var earthlyBranch = (0, i18n_1.kot)(yearly[1], 'Earthly');
    var _b = (0, exports.getHuagaiXianchiIndex)(yearly[1]), huagaiIndex = _b.huagaiIndex, xianchiIndex = _b.xianchiIndex;
    var _c = (0, exports.getGuGuaIndex)(yearly[1]), guchenIndex = _c.guchenIndex, guasuIndex = _c.guasuIndex;
    var tiancaiIndex = (0, utils_1.fixIndex)(soulIndex + data_1.EARTHLY_BRANCHES.indexOf(earthlyBranch));
    var tianshouIndex = (0, utils_1.fixIndex)(bodyIndex + data_1.EARTHLY_BRANCHES.indexOf(earthlyBranch));
    var tianchuIndex = (0, utils_1.fixIndex)((0, utils_1.fixEarthlyBranchIndex)(['si', 'woo', 'zi', 'si', 'woo', 'shen', 'yin', 'woo', 'you', 'hai'][data_1.HEAVENLY_STEMS.indexOf(heavenlyStem)]));
    var posuiIndex = (0, utils_1.fixIndex)((0, utils_1.fixEarthlyBranchIndex)(['si', 'chou', 'you'][data_1.EARTHLY_BRANCHES.indexOf(earthlyBranch) % 3]));
    var feilianIndex = (0, utils_1.fixIndex)((0, utils_1.fixEarthlyBranchIndex)(['shen', 'you', 'xu', 'si', 'woo', 'wei', 'yin', 'mao', 'chen', 'hai', 'zi', 'chou'][data_1.EARTHLY_BRANCHES.indexOf(earthlyBranch)]));
    var longchiIndex = (0, utils_1.fixIndex)((0, utils_1.fixEarthlyBranchIndex)('chen') + data_1.EARTHLY_BRANCHES.indexOf(earthlyBranch));
    var fenggeIndex = (0, utils_1.fixIndex)((0, utils_1.fixEarthlyBranchIndex)('xu') - data_1.EARTHLY_BRANCHES.indexOf(earthlyBranch));
    var tiankuIndex = (0, utils_1.fixIndex)((0, utils_1.fixEarthlyBranchIndex)('woo') - data_1.EARTHLY_BRANCHES.indexOf(earthlyBranch));
    var tianxuIndex = (0, utils_1.fixIndex)((0, utils_1.fixEarthlyBranchIndex)('woo') + data_1.EARTHLY_BRANCHES.indexOf(earthlyBranch));
    var tianguanIndex = (0, utils_1.fixIndex)((0, utils_1.fixEarthlyBranchIndex)(['wei', 'chen', 'si', 'yin', 'mao', 'you', 'hai', 'you', 'xu', 'woo'][data_1.HEAVENLY_STEMS.indexOf(heavenlyStem)]));
    var tianfuIndex = (0, utils_1.fixIndex)((0, utils_1.fixEarthlyBranchIndex)(['you', 'shen', 'zi', 'hai', 'mao', 'yin', 'woo', 'si', 'woo', 'si'][data_1.HEAVENLY_STEMS.indexOf(heavenlyStem)]));
    var tiandeIndex = (0, utils_1.fixIndex)((0, utils_1.fixEarthlyBranchIndex)('you') + data_1.EARTHLY_BRANCHES.indexOf(earthlyBranch));
    var yuedeIndex = (0, utils_1.fixIndex)((0, utils_1.fixEarthlyBranchIndex)('si') + data_1.EARTHLY_BRANCHES.indexOf(earthlyBranch));
    var tiankongIndex = (0, utils_1.fixIndex)((0, utils_1.fixEarthlyBranchIndex)(yearly[1]) + 1);
    var jieluIndex = (0, utils_1.fixIndex)((0, utils_1.fixEarthlyBranchIndex)(['shen', 'woo', 'chen', 'yin', 'zi'][data_1.HEAVENLY_STEMS.indexOf(heavenlyStem) % 5]));
    var kongwangIndex = (0, utils_1.fixIndex)((0, utils_1.fixEarthlyBranchIndex)(['you', 'wei', 'si', 'mao', 'chou'][data_1.HEAVENLY_STEMS.indexOf(heavenlyStem) % 5]));
    var xunkongIndex = (0, utils_1.fixIndex)((0, utils_1.fixEarthlyBranchIndex)(yearly[1]) + data_1.HEAVENLY_STEMS.indexOf('guiHeavenly') - data_1.HEAVENLY_STEMS.indexOf(heavenlyStem) + 1);
    var tianshangIndex = (0, utils_1.fixIndex)(data_1.PALACES.indexOf('friendsPalace') + soulIndex);
    var tianshiIndex = (0, utils_1.fixIndex)(data_1.PALACES.indexOf('healthPalace') + soulIndex);
    return {
        xianchiIndex: xianchiIndex,
        huagaiIndex: huagaiIndex,
        guchenIndex: guchenIndex,
        guasuIndex: guasuIndex,
        tiancaiIndex: tiancaiIndex,
        tianshouIndex: tianshouIndex,
        tianchuIndex: tianchuIndex,
        posuiIndex: posuiIndex,
        feilianIndex: feilianIndex,
        longchiIndex: longchiIndex,
        fenggeIndex: fenggeIndex,
        tiankuIndex: tiankuIndex,
        tianxuIndex: tianxuIndex,
        tianguanIndex: tianguanIndex,
        tianfuIndex: tianfuIndex,
        tiandeIndex: tiandeIndex,
        yuedeIndex: yuedeIndex,
        tiankongIndex: tiankongIndex,
        jieluIndex: jieluIndex,
        kongwangIndex: kongwangIndex,
        xunkongIndex: xunkongIndex,
        tianshangIndex: tianshangIndex,
        tianshiIndex: tianshiIndex,
    };
};
exports.getYearlyStarIndex = getYearlyStarIndex;
/**
 * 获取年解的索引
 *
 * - 年解（按年支）
 *   - 解神从戌上起子，逆数至当生年太岁上是也
 *
 * @param earthlyBranch 地支（年）
 * @returns 年解索引
 */
var getNianjieIndex = function (earthlyBranchName) {
    var earthlyBranch = (0, i18n_1.kot)(earthlyBranchName, 'Earthly');
    return (0, utils_1.fixIndex)((0, utils_1.fixEarthlyBranchIndex)(['xu', 'you', 'shen', 'wei', 'woo', 'si', 'chen', 'mao', 'yin', 'chou', 'zi', 'hai'][data_1.EARTHLY_BRANCHES.indexOf(earthlyBranch)]));
};
exports.getNianjieIndex = getNianjieIndex;
/**
 * 获取以月份索引为基准的星耀索引，包括解神，天姚，天刑，阴煞，天月，天巫
 * 解神分为年解和月解，月解作用更加直接快速，年解稍迟钝，且作用力没有月解那么大
 *
 * - 月解（按生月）
 *   - 正二在申三四在戍，五六在子七八在寅，九十月坐於辰宫，十一十二在午宫。
 *
 * - 安天刑天姚（三合必见）
 *   - 天刑从酉起正月，顺至生月便安之。天姚丑宫起正月，顺到生月即停留。
 *
 * - 安阴煞
 *   - 正七月在寅，二八月在子，三九月在戍，四十月在申，五十一在午，六十二在辰。
 *
 * - 安天月
 *   - 一犬二蛇三在龙，四虎五羊六兔宫。七猪八羊九在虎，十马冬犬腊寅中。
 *
 * - 安天巫
 *   - 正五九月在巳，二六十月在申，三七十一在寅，四八十二在亥。
 *
 * @param solarDate 阳历日期
 * @param timeIndex 时辰序号
 * @param fixLeap 是否修复闰月，假如当月不是闰月则不生效
 * @returns
 */
var getMonthlyStarIndex = function (solarDate, timeIndex, fixLeap) {
    var monthIndex = (0, utils_1.fixLunarMonthIndex)(solarDate, timeIndex, fixLeap);
    var jieshenIndex = (0, utils_1.fixIndex)((0, utils_1.fixEarthlyBranchIndex)(['shen', 'xu', 'zi', 'yin', 'chen', 'woo'][Math.floor(monthIndex / 2)]));
    var tianyaoIndex = (0, utils_1.fixIndex)((0, utils_1.fixEarthlyBranchIndex)('chou') + monthIndex);
    var tianxingIndex = (0, utils_1.fixIndex)((0, utils_1.fixEarthlyBranchIndex)('you') + monthIndex);
    var yinshaIndex = (0, utils_1.fixIndex)((0, utils_1.fixEarthlyBranchIndex)(['yin', 'zi', 'xu', 'shen', 'woo', 'chen'][monthIndex % 6]));
    var tianyueIndex = (0, utils_1.fixIndex)((0, utils_1.fixEarthlyBranchIndex)(['xu', 'si', 'chen', 'yin', 'wei', 'mao', 'hai', 'wei', 'yin', 'woo', 'xu', 'yin'][monthIndex]));
    var tianwuIndex = (0, utils_1.fixIndex)((0, utils_1.fixEarthlyBranchIndex)(['si', 'shen', 'yin', 'hai'][monthIndex % 4]));
    return {
        yuejieIndex: jieshenIndex,
        tianyaoIndex: tianyaoIndex,
        tianxingIndex: tianxingIndex,
        yinshaIndex: yinshaIndex,
        tianyueIndex: tianyueIndex,
        tianwuIndex: tianwuIndex,
    };
};
exports.getMonthlyStarIndex = getMonthlyStarIndex;
/**
 * 通过 大限/流年 天干获取流昌流曲
 *
 * - 流昌起巳位	甲乙顺流去
 * - 不用四墓宫	日月同年岁
 * - 流曲起酉位	甲乙逆行踪
 * - 亦不用四墓	年日月相同
 *
 * @param heavenlyStemName 天干
 * @returns 文昌、文曲索引
 */
var getChangQuIndexByHeavenlyStem = function (heavenlyStemName) {
    var changIndex = -1;
    var quIndex = -1;
    var heavenlyStem = (0, i18n_1.kot)(heavenlyStemName, 'Heavenly');
    switch (heavenlyStem) {
        case 'jiaHeavenly':
            changIndex = (0, utils_1.fixIndex)((0, utils_1.fixEarthlyBranchIndex)('si'));
            quIndex = (0, utils_1.fixIndex)((0, utils_1.fixEarthlyBranchIndex)('you'));
            break;
        case 'yiHeavenly':
            changIndex = (0, utils_1.fixIndex)((0, utils_1.fixEarthlyBranchIndex)('woo'));
            quIndex = (0, utils_1.fixIndex)((0, utils_1.fixEarthlyBranchIndex)('shen'));
            break;
        case 'bingHeavenly':
        case 'wuHeavenly':
            changIndex = (0, utils_1.fixIndex)((0, utils_1.fixEarthlyBranchIndex)('shen'));
            quIndex = (0, utils_1.fixIndex)((0, utils_1.fixEarthlyBranchIndex)('woo'));
            break;
        case 'dingHeavenly':
        case 'jiHeavenly':
            changIndex = (0, utils_1.fixIndex)((0, utils_1.fixEarthlyBranchIndex)('you'));
            quIndex = (0, utils_1.fixIndex)((0, utils_1.fixEarthlyBranchIndex)('si'));
            break;
        case 'gengHeavenly':
            changIndex = (0, utils_1.fixIndex)((0, utils_1.fixEarthlyBranchIndex)('hai'));
            quIndex = (0, utils_1.fixIndex)((0, utils_1.fixEarthlyBranchIndex)('mao'));
            break;
        case 'xinHeavenly':
            changIndex = (0, utils_1.fixIndex)((0, utils_1.fixEarthlyBranchIndex)('zi'));
            quIndex = (0, utils_1.fixIndex)((0, utils_1.fixEarthlyBranchIndex)('yin'));
            break;
        case 'renHeavenly':
            changIndex = (0, utils_1.fixIndex)((0, utils_1.fixEarthlyBranchIndex)('yin'));
            quIndex = (0, utils_1.fixIndex)((0, utils_1.fixEarthlyBranchIndex)('zi'));
            break;
        case 'guiHeavenly':
            changIndex = (0, utils_1.fixIndex)((0, utils_1.fixEarthlyBranchIndex)('mao'));
            quIndex = (0, utils_1.fixIndex)((0, utils_1.fixEarthlyBranchIndex)('hai'));
            break;
    }
    return { changIndex: changIndex, quIndex: quIndex };
};
exports.getChangQuIndexByHeavenlyStem = getChangQuIndexByHeavenlyStem;

}, function(modId) { var map = {"../astro":1718710892504,"../data":1718710892497,"../i18n":1718710892506,"../utils":1718710892576}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1718710892504, function(require, module, exports) {

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./palace"), exports);
__exportStar(require("./astro"), exports);

}, function(modId) { var map = {"./palace":1718710892505,"./astro":1718710892577}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1718710892505, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.getHoroscope = exports.getPalaceNames = exports.getFiveElementsClass = exports.getSoulAndBody = void 0;
var lunar_lite_1 = require("lunar-lite");
var data_1 = require("../data");
var i18n_1 = require("../i18n");
var utils_1 = require("../utils");
var astro_1 = require("./astro");
/**
 * 获取命宫以及身宫数据
 *
 * 1. 定寅首
 * - 甲己年生起丙寅，乙庚年生起戊寅，
 * - 丙辛年生起庚寅，丁壬年生起壬寅，
 * - 戊癸年生起甲寅。
 *
 * 2. 安命身宫诀
 * - 寅起正月，顺数至生月，逆数生时为命宫。
 * - 寅起正月，顺数至生月，顺数生时为身宫。
 *
 * @param solarDate 公历日期，用公历日期比较方便，因为农历日期需要考虑闰月问题，如果得到的数据是农历，可以用 lunar2solar 方法得到公历日期
 * @param timeIndex 出生时索引
 * @param fixLeap 是否修正闰月，若修正，则闰月前15天按上月算，后15天按下月算
 * @returns SoulAndBody
 */
var getSoulAndBody = function (solarDate, timeIndex, fixLeap) {
    var _a = (0, lunar_lite_1.getHeavenlyStemAndEarthlyBranchBySolarDate)(solarDate, timeIndex, {
        year: (0, astro_1.getConfig)().yearDivide,
    }), yearly = _a.yearly, hourly = _a.hourly;
    var earthlyBranchOfTime = (0, i18n_1.kot)(hourly[1], 'Earthly');
    var heavenlyStemOfYear = (0, i18n_1.kot)(yearly[0], 'Heavenly');
    // 紫微斗数以`寅`宫为第一个宫位
    var firstIndex = data_1.EARTHLY_BRANCHES.indexOf('yinEarthly');
    var monthIndex = (0, utils_1.fixLunarMonthIndex)(solarDate, timeIndex, fixLeap);
    // 命宫索引，以寅宫为0，顺时针数到生月地支索引，再逆时针数到生时地支索引
    // 此处数到生月地支索引其实就是农历月份，所以不再计算生月地支索引
    var soulIndex = (0, utils_1.fixIndex)(monthIndex - data_1.EARTHLY_BRANCHES.indexOf(earthlyBranchOfTime));
    // 身宫索引，以寅宫为0，顺时针数到生月地支索引，再顺时针数到生时地支索引
    // 与命宫索引一样，不再赘述
    var bodyIndex = (0, utils_1.fixIndex)(monthIndex + data_1.EARTHLY_BRANCHES.indexOf(earthlyBranchOfTime));
    // 用五虎遁取得寅宫的天干
    var startHevenlyStem = data_1.TIGER_RULE[heavenlyStemOfYear];
    // 获取命宫天干索引，起始天干索引加上命宫的索引即是
    // 天干循环数为10
    var heavenlyStemOfSoulIndex = (0, utils_1.fixIndex)(data_1.HEAVENLY_STEMS.indexOf(startHevenlyStem) + soulIndex, 10);
    // 命宫的天干
    var heavenlyStemOfSoul = (0, i18n_1.t)(data_1.HEAVENLY_STEMS[heavenlyStemOfSoulIndex]);
    // 命宫地支，命宫索引 + `寅`的索引（因为紫微斗数里寅宫是第一个宫位）
    var earthlyBranchOfSoul = (0, i18n_1.t)(data_1.EARTHLY_BRANCHES[(0, utils_1.fixIndex)(soulIndex + firstIndex)]);
    return {
        soulIndex: soulIndex,
        bodyIndex: bodyIndex,
        heavenlyStemOfSoul: heavenlyStemOfSoul,
        earthlyBranchOfSoul: earthlyBranchOfSoul,
    };
};
exports.getSoulAndBody = getSoulAndBody;
/**
 * 定五行局法（以命宫天干地支而定）
 *
 * 纳音五行计算取数巧记口诀：
 *
 * - 甲乙丙丁一到五，子丑午未一来数，
 * - 寅卯申酉二上走，辰巳戌亥三为足。
 * - 干支相加多减五，五行木金水火土。
 *
 * 注解：
 *
 * 1、五行取数：木1 金2 水3 火4 土5
 *
 *  天干取数：
 *  - 甲乙 ——> 1
 *  - 丙丁 ——> 2
 *  - 戊己 ——> 3
 *  - 庚辛 ——> 4
 *  - 壬癸 ——> 5
 *
 *  地支取数：
 *  - 子午丑未 ——> 1
 *  - 寅申卯酉 ——> 2
 *  - 辰戌巳亥 ——> 3
 *
 * 2、计算方法：
 *
 *  干支数相加，超过5者减去5，以差论之。
 *  - 若差为1则五行属木
 *  - 若差为2则五行属金
 *  - 若差为3则五行属水
 *  - 若差为4则五行属火
 *  - 若差为5则五行属土
 *
 * 3、举例：
 *  - 丙子：丙2 子1=3 ——> 水 ——> 水二局
 *  - 辛未：辛4 未1=5 ——> 土 ——> 土五局
 *  - 庚申：庚4 申2=6 ——> 6-5=1 ——> 木 ——> 木三局
 *
 * @param heavenlyStemName 天干
 * @param earthlyBranchName 地支
 * @returns 水二局 ｜ 木三局 ｜ 金四局 ｜ 土五局 ｜ 火六局
 */
var getFiveElementsClass = function (heavenlyStemName, earthlyBranchName) {
    var fiveElementsTable = ['wood3rd', 'metal4th', 'water2nd', 'fire6th', 'earth5th'];
    var heavenlyStem = (0, i18n_1.kot)(heavenlyStemName, 'Heavenly');
    var earthlyBranch = (0, i18n_1.kot)(earthlyBranchName, 'Earthly');
    var heavenlyStemNumber = Math.floor(data_1.HEAVENLY_STEMS.indexOf(heavenlyStem) / 2) + 1;
    var earthlyBranchNumber = Math.floor((0, utils_1.fixIndex)(data_1.EARTHLY_BRANCHES.indexOf(earthlyBranch), 6) / 2) + 1;
    var index = heavenlyStemNumber + earthlyBranchNumber;
    while (index > 5) {
        index -= 5;
    }
    return (0, i18n_1.t)(fiveElementsTable[index - 1]);
};
exports.getFiveElementsClass = getFiveElementsClass;
/**
 * 获取从寅宫开始的各个宫名
 *
 * @param fromIndex 命宫索引
 * @returns 从寅宫开始的各个宫名
 */
var getPalaceNames = function (fromIndex) {
    var names = [];
    for (var i = 0; i < data_1.PALACES.length; i++) {
        var idx = (0, utils_1.fixIndex)(i - fromIndex);
        names[i] = (0, i18n_1.t)(data_1.PALACES[idx]);
    }
    return names;
};
exports.getPalaceNames = getPalaceNames;
/**
 * 起大限
 *
 * - 大限由命宫起，阳男阴女顺行；
 * - 阴男阳女逆行，每十年过一宫限。
 *
 * @param solarDateStr 公历日期
 * @param timeIndex 出生时索引
 * @param gender 性别
 * @param fixLeap 是否修正闰月，若修正，则闰月前15天按上月算，后15天按下月算
 * @returns 从寅宫开始的大限年龄段
 */
var getHoroscope = function (solarDateStr, timeIndex, gender, fixLeap) {
    var decadals = [];
    var genderKey = (0, i18n_1.kot)(gender);
    var yearly = (0, lunar_lite_1.getHeavenlyStemAndEarthlyBranchBySolarDate)(solarDateStr, timeIndex, {
        // 起大限应该与配置同步
        year: (0, astro_1.getConfig)().yearDivide,
    }).yearly;
    var heavenlyStem = (0, i18n_1.kot)(yearly[0], 'Heavenly');
    var earthlyBranch = (0, i18n_1.kot)(yearly[1], 'Earthly');
    var _a = (0, exports.getSoulAndBody)(solarDateStr, timeIndex, fixLeap), soulIndex = _a.soulIndex, heavenlyStemOfSoul = _a.heavenlyStemOfSoul, earthlyBranchOfSoul = _a.earthlyBranchOfSoul;
    var fiveElementsClass = (0, i18n_1.kot)((0, exports.getFiveElementsClass)(heavenlyStemOfSoul, earthlyBranchOfSoul));
    // 用五虎遁获取大限起始天干
    var startHeavenlyStem = data_1.TIGER_RULE[heavenlyStem];
    for (var i = 0; i < 12; i++) {
        var idx = data_1.GENDER[genderKey] === data_1.earthlyBranches[earthlyBranch].yinYang ? (0, utils_1.fixIndex)(soulIndex + i) : (0, utils_1.fixIndex)(soulIndex - i);
        var start = data_1.FiveElementsClass[fiveElementsClass] + 10 * i;
        var heavenlyStemIndex = (0, utils_1.fixIndex)(data_1.HEAVENLY_STEMS.indexOf(startHeavenlyStem) + idx, 10);
        var earthlyBranchIndex = (0, utils_1.fixIndex)(data_1.EARTHLY_BRANCHES.indexOf('yinEarthly') + idx);
        decadals[idx] = {
            range: [start, start + 9],
            heavenlyStem: (0, i18n_1.t)(data_1.HEAVENLY_STEMS[heavenlyStemIndex]),
            earthlyBranch: (0, i18n_1.t)(data_1.EARTHLY_BRANCHES[earthlyBranchIndex]),
        };
    }
    var ageIdx = (0, utils_1.getAgeIndex)(yearly[1]);
    var ages = [];
    for (var i = 0; i < 12; i++) {
        var age = [];
        for (var j = 0; j < 10; j++) {
            age.push(12 * j + i + 1);
        }
        var idx = (0, i18n_1.kot)(gender) === 'male' ? (0, utils_1.fixIndex)(ageIdx + i) : (0, utils_1.fixIndex)(ageIdx - i);
        ages[idx] = age;
    }
    return { decadals: decadals, ages: ages };
};
exports.getHoroscope = getHoroscope;

}, function(modId) { var map = {"../data":1718710892497,"../i18n":1718710892506,"../utils":1718710892576,"./astro":1718710892577}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1718710892506, function(require, module, exports) {

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.kot = exports.t = exports.setLanguage = void 0;
var i18next_1 = __importDefault(require("i18next"));
var zh_CN_1 = __importDefault(require("./locales/zh-CN"));
var zh_TW_1 = __importDefault(require("./locales/zh-TW"));
var ko_KR_1 = __importDefault(require("./locales/ko-KR"));
var ja_JP_1 = __importDefault(require("./locales/ja-JP"));
var en_US_1 = __importDefault(require("./locales/en-US"));
var vi_VN_1 = __importDefault(require("./locales/vi-VN"));
var resources = {
    'en-US': {
        translation: en_US_1.default,
    },
    'ja-JP': {
        translation: ja_JP_1.default,
    },
    'ko-KR': {
        translation: ko_KR_1.default,
    },
    'zh-CN': {
        translation: zh_CN_1.default,
    },
    'zh-TW': {
        translation: zh_TW_1.default,
    },
    'vi-VN': {
        translation: vi_VN_1.default,
    },
};
// 设置默认语言和加载翻译文件
i18next_1.default.init({ lng: 'zh-CN', resources: resources });
/**
 * 设置国际化语言。
 * 支持的语言见 type.ts -> Language
 *
 * @param language 需要设置的语言【默认为zh-CN】
 */
var setLanguage = function (language) {
    i18next_1.default.changeLanguage(language);
};
exports.setLanguage = setLanguage;
/**
 * 输出国际化文本。
 *
 * @param str 待翻译的字符串
 * @returns 翻译后的字符串
 */
var t = function (str) {
    if (!str) {
        return '';
    }
    return i18next_1.default.t(str);
};
exports.t = t;
/**
 * kot(Key of Translation).
 *
 * 通过翻译文本反查Key的值，用于各种计算。
 * 若没有找到则会返回Value本身。
 *
 * @param value 翻译后的字符串
 * @returns 翻译文本的Key值
 */
var kot = function (value, k) {
    var res = value;
    for (var _i = 0, _a = Object.entries(resources); _i < _a.length; _i++) {
        var _b = _a[_i], item = _b[1];
        for (var _c = 0, _d = Object.entries(item.translation); _c < _d.length; _c++) {
            var _e = _d[_c], transKey = _e[0], trans = _e[1];
            if (((k && transKey.includes(k)) || !k) && trans === value) {
                res = transKey;
                return res;
            }
        }
    }
    return res;
};
exports.kot = kot;
__exportStar(require("./types"), exports);
exports.default = i18next_1.default;

}, function(modId) { var map = {"./locales/zh-CN":1718710892507,"./locales/zh-TW":1718710892517,"./locales/ko-KR":1718710892527,"./locales/ja-JP":1718710892537,"./locales/en-US":1718710892547,"./locales/vi-VN":1718710892557,"./types":1718710892567}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1718710892507, function(require, module, exports) {

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var common_json_1 = __importDefault(require("./common.json"));
var brightness_1 = __importDefault(require("./brightness"));
var earthlyBranch_1 = __importDefault(require("./earthlyBranch"));
var fiveElementsClass_1 = __importDefault(require("./fiveElementsClass"));
var gender_1 = __importDefault(require("./gender"));
var heavenlyStem_1 = __importDefault(require("./heavenlyStem"));
var mutagen_1 = __importDefault(require("./mutagen"));
var palace_1 = __importDefault(require("./palace"));
var star_1 = __importDefault(require("./star"));
exports.default = __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, common_json_1.default), fiveElementsClass_1.default), heavenlyStem_1.default), earthlyBranch_1.default), brightness_1.default), mutagen_1.default), star_1.default), palace_1.default), gender_1.default);

}, function(modId) { var map = {"./common.json":1718710892508,"./brightness":1718710892509,"./earthlyBranch":1718710892510,"./fiveElementsClass":1718710892511,"./gender":1718710892512,"./heavenlyStem":1718710892513,"./mutagen":1718710892514,"./palace":1718710892515,"./star":1718710892516}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1718710892508, function(require, module, exports) {
module.exports = {
    "decadal": "大限",
    "childhood": "童限",
    "yearly": "流年",
    "monthly": "流月",
    "daily": "流日",
    "hourly": "流时",
    "turn": "小限",
    "rat": "鼠",
    "ox": "牛",
    "tiger": "虎",
    "rabbit": "兔",
    "dragon": "龙",
    "snake": "蛇",
    "horse": "马",
    "sheep": "羊",
    "monkey": "猴",
    "rooster": "鸡",
    "dog": "狗",
    "pig": "猪",
    "earlyRatHour": "早子时",
    "oxHour": "丑时",
    "tigerHour": "寅时",
    "rabbitHour": "卯时",
    "dragonHour": "辰时",
    "snakeHour": "巳时",
    "horseHour": "午时",
    "goatHour": "未时",
    "monkeyHour": "申时",
    "roosterHour": "酉时",
    "dogHour": "戌时",
    "pigHour": "亥时",
    "lateRatHour": "晚子时",
    "aries": "白羊座",
    "taurus": "金牛座",
    "gemini": "双子座",
    "cancer": "巨蟹座",
    "leo": "狮子座",
    "virgo": "处女座",
    "libra": "天秤座",
    "scorpio": "天蝎座",
    "sagittarius": "射手座",
    "capricorn": "摩羯座",
    "aquarius": "水瓶座",
    "pisces": "双鱼座"
}

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1718710892509, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    miao: '庙',
    wang: '旺',
    de: '得',
    li: '利',
    ping: '平',
    bu: '不',
    xian: '陷',
};

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1718710892510, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    ziEarthly: '子',
    chouEarthly: '丑',
    yinEarthly: '寅',
    maoEarthly: '卯',
    chenEarthly: '辰',
    siEarthly: '巳',
    wuEarthly: '午',
    weiEarthly: '未',
    shenEarthly: '申',
    youEarthly: '酉',
    xuEarthly: '戌',
    haiEarthly: '亥',
};

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1718710892511, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    water2nd: '水二局',
    wood3rd: '木三局',
    metal4th: '金四局',
    earth5th: '土五局',
    fire6th: '火六局',
};

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1718710892512, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    male: '男',
    female: '女',
};

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1718710892513, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    jiaHeavenly: '甲',
    yiHeavenly: '乙',
    bingHeavenly: '丙',
    dingHeavenly: '丁',
    wuHeavenly: '戊',
    jiHeavenly: '己',
    gengHeavenly: '庚',
    xinHeavenly: '辛',
    renHeavenly: '壬',
    guiHeavenly: '癸',
};

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1718710892514, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    sihuaLu: '禄',
    sihuaQuan: '权',
    sihuaKe: '科',
    sihuaJi: '忌',
};

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1718710892515, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    soulPalace: '命宫',
    bodyPalace: '身宫',
    siblingsPalace: '兄弟',
    spousePalace: '夫妻',
    childrenPalace: '子女',
    wealthPalace: '财帛',
    healthPalace: '疾厄',
    surfacePalace: '迁移',
    friendsPalace: '仆役',
    careerPalace: '官禄',
    propertyPalace: '田宅',
    spiritPalace: '福德',
    parentsPalace: '父母',
    originalPalace: '来因',
};

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1718710892516, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    ziweiMaj: '紫微',
    tianjiMaj: '天机',
    taiyangMaj: '太阳',
    wuquMaj: '武曲',
    tiantongMaj: '天同',
    lianzhenMaj: '廉贞',
    tianfuMaj: '天府',
    taiyinMaj: '太阴',
    tanlangMaj: '贪狼',
    jumenMaj: '巨门',
    tianxiangMaj: '天相',
    tianliangMaj: '天梁',
    qishaMaj: '七杀',
    pojunMaj: '破军',
    zuofuMin: '左辅',
    youbiMin: '右弼',
    wenchangMin: '文昌',
    wenquMin: '文曲',
    lucunMin: '禄存',
    tianmaMin: '天马',
    qingyangMin: '擎羊',
    tuoluoMin: '陀罗',
    huoxingMin: '火星',
    lingxingMin: '铃星',
    tiankuiMin: '天魁',
    tianyueMin: '天钺',
    dikongMin: '地空',
    dijieMin: '地劫',
    tiankong: '天空',
    tianxing: '天刑',
    tianyao: '天姚',
    jieshen: '解神',
    yinsha: '阴煞',
    tianxi: '天喜',
    tianguan: '天官',
    tianfu: '天福',
    tianku: '天哭',
    tianxu: '天虚',
    longchi: '龙池',
    fengge: '凤阁',
    hongluan: '红鸾',
    guchen: '孤辰',
    guasu: '寡宿',
    feilian: '蜚廉',
    posui: '破碎',
    taifu: '台辅',
    fenggao: '封诰',
    tianwu: '天巫',
    tianyue: '天月',
    santai: '三台',
    bazuo: '八座',
    engguang: '恩光',
    tiangui: '天贵',
    tiancai: '天才',
    tianshou: '天寿',
    jiekong: '截空',
    xunzhong: '旬中',
    xunkong: '旬空',
    kongwang: '空亡',
    jielu: '截空',
    yuede: '月德',
    tianshang: '天伤',
    tianshi: '天使',
    tianchu: '天厨',
    changsheng: '长生',
    muyu: '沐浴',
    guandai: '冠带',
    linguan: '临官',
    diwang: '帝旺',
    shuai: '衰',
    bing: '病',
    si: '死',
    mu: '墓',
    jue: '绝',
    tai: '胎',
    yang: '养',
    boshi: '博士',
    lishi: '力士',
    qinglong: '青龙',
    xiaohao: '小耗',
    jiangjun: '将军',
    zhoushu: '奏书',
    faylian: '飞廉',
    xishen: '喜神',
    bingfu: '病符',
    dahao: '大耗',
    fubing: '伏兵',
    guanfu: '官府',
    suijian: '岁建',
    huiqi: '晦气',
    sangmen: '丧门',
    guansuo: '贯索',
    gwanfu: '官符',
    longde: '龙德',
    baihu: '白虎',
    tiande: '天德',
    diaoke: '吊客',
    jiangxing: '将星',
    panan: '攀鞍',
    suiyi: '岁驿',
    xiishen: '息神',
    huagai: '华盖',
    jiesha: '劫煞',
    zhaisha: '灾煞',
    tiansha: '天煞',
    zhibei: '指背',
    xianchi: '咸池',
    yuesha: '月煞',
    wangshen: '亡神',
    yunkui: '运魁',
    yunyue: '运钺',
    yunchang: '运昌',
    yunqu: '运曲',
    yunluan: '运鸾',
    yunxi: '运喜',
    yunlu: '运禄',
    yunyang: '运羊',
    yuntuo: '运陀',
    yunma: '运马',
    liukui: '流魁',
    liuyue: '流钺',
    liuchang: '流昌',
    liuqu: '流曲',
    liuluan: '流鸾',
    liuxi: '流喜',
    liulu: '流禄',
    liuyang: '流羊',
    liutuo: '流陀',
    liuma: '流马',
    nianjie: '年解',
};

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1718710892517, function(require, module, exports) {

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var common_json_1 = __importDefault(require("./common.json"));
var brightness_1 = __importDefault(require("./brightness"));
var earthlyBranch_1 = __importDefault(require("./earthlyBranch"));
var fiveElementsClass_1 = __importDefault(require("./fiveElementsClass"));
var gender_1 = __importDefault(require("./gender"));
var heavenlyStem_1 = __importDefault(require("./heavenlyStem"));
var mutagen_1 = __importDefault(require("./mutagen"));
var palace_1 = __importDefault(require("./palace"));
var star_1 = __importDefault(require("./star"));
exports.default = __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, common_json_1.default), fiveElementsClass_1.default), heavenlyStem_1.default), earthlyBranch_1.default), brightness_1.default), mutagen_1.default), star_1.default), palace_1.default), gender_1.default);

}, function(modId) { var map = {"./common.json":1718710892518,"./brightness":1718710892519,"./earthlyBranch":1718710892520,"./fiveElementsClass":1718710892521,"./gender":1718710892522,"./heavenlyStem":1718710892523,"./mutagen":1718710892524,"./palace":1718710892525,"./star":1718710892526}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1718710892518, function(require, module, exports) {
module.exports = {
    "decadal": "大限",
    "childhood": "童限",
    "yearly": "流年",
    "monthly": "流月",
    "daily": "流日",
    "hourly": "流時",
    "turn": "小限",
    "rat": "鼠",
    "ox": "牛",
    "tiger": "虎",
    "rabbit": "兔",
    "dragon": "龍",
    "snake": "蛇",
    "horse": "馬",
    "sheep": "羊",
    "monkey": "猴",
    "rooster": "雞",
    "dog": "狗",
    "pig": "豬",
    "earlyRatHour": "早子時",
    "oxHour": "丑時",
    "tigerHour": "寅時",
    "rabbitHour": "卯時",
    "dragonHour": "辰時",
    "snakeHour": "巳時",
    "horseHour": "午時",
    "goatHour": "未時",
    "monkeyHour": "申時",
    "roosterHour": "酉時",
    "dogHour": "戌時",
    "pigHour": "亥時",
    "lateRatHour": "晚子時",
    "aries": "白羊座",
    "taurus": "金牛座",
    "gemini": "雙子座",
    "cancer": "巨蟹座",
    "leo": "獅子座",
    "virgo": "處女座",
    "libra": "天秤座",
    "scorpio": "天蠍座",
    "sagittarius": "射手座",
    "capricorn": "摩羯座",
    "aquarius": "水瓶座",
    "pisces": "雙魚座"
}

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1718710892519, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    miao: '廟',
    wang: '旺',
    de: '得',
    li: '利',
    ping: '平',
    bu: '不',
    xian: '陷',
};

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1718710892520, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    ziEarthly: '子',
    chouEarthly: '丑',
    yinEarthly: '寅',
    maoEarthly: '卯',
    chenEarthly: '辰',
    siEarthly: '巳',
    wuEarthly: '午',
    weiEarthly: '未',
    shenEarthly: '申',
    youEarthly: '酉',
    xuEarthly: '戌',
    haiEarthly: '亥',
};

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1718710892521, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    water2nd: '水二局',
    wood3rd: '木三局',
    metal4th: '金四局',
    earth5th: '土五局',
    fire6th: '火六局',
};

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1718710892522, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    male: '男',
    female: '女',
};

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1718710892523, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    jiaHeavenly: '甲',
    yiHeavenly: '乙',
    bingHeavenly: '丙',
    dingHeavenly: '丁',
    wuHeavenly: '戊',
    jiHeavenly: '己',
    gengHeavenly: '庚',
    xinHeavenly: '辛',
    renHeavenly: '壬',
    guiHeavenly: '癸',
};

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1718710892524, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    sihuaLu: '祿',
    sihuaQuan: '權',
    sihuaKe: '科',
    sihuaJi: '忌',
};

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1718710892525, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    soulPalace: '命宮',
    bodyPalace: '身宮',
    siblingsPalace: '兄弟',
    spousePalace: '夫妻',
    childrenPalace: '子女',
    wealthPalace: '財帛',
    healthPalace: '疾厄',
    surfacePalace: '遷移',
    friendsPalace: '僕役',
    careerPalace: '官祿',
    propertyPalace: '田宅',
    spiritPalace: '福德',
    parentsPalace: '父母',
    originalPalace: '来因',
};

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1718710892526, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    ziweiMaj: '紫微',
    tianjiMaj: '天機',
    taiyangMaj: '太陽',
    wuquMaj: '武曲',
    tiantongMaj: '天同',
    lianzhenMaj: '廉貞',
    tianfuMaj: '天府',
    taiyinMaj: '太陰',
    tanlangMaj: '貪狼',
    jumenMaj: '巨門',
    tianxiangMaj: '天相',
    tianliangMaj: '天梁',
    qishaMaj: '七殺',
    pojunMaj: '破軍',
    zuofuMin: '左輔',
    youbiMin: '右弼',
    wenchangMin: '文昌',
    wenquMin: '文曲',
    lucunMin: '祿存',
    tianmaMin: '天馬',
    qingyangMin: '擎羊',
    tuoluoMin: '陀羅',
    huoxingMin: '火星',
    lingxingMin: '鈴星',
    tiankuiMin: '天魁',
    tianyueMin: '天鉞',
    dikongMin: '地空',
    dijieMin: '地劫',
    tiankong: '天空',
    tianxing: '天刑',
    tianyao: '天姚',
    jieshen: '解神',
    yinsha: '陰煞',
    tianxi: '天喜',
    tianguan: '天官',
    tianfu: '天福',
    tianku: '天哭',
    tianxu: '天虛',
    longchi: '龍池',
    fengge: '鳳閣',
    hongluan: '紅鸞',
    guchen: '孤辰',
    guasu: '寡宿',
    feilian: '蜚廉',
    posui: '破碎',
    taifu: '台輔',
    fenggao: '封誥',
    tianwu: '天巫',
    tianyue: '天月',
    santai: '三台',
    bazuo: '八座',
    engguang: '恩光',
    tiangui: '天貴',
    tiancai: '天才',
    tianshou: '天壽',
    jiekong: '截空',
    xunzhong: '旬中',
    xunkong: '旬空',
    kongwang: '空亡',
    jielu: '截空',
    yuede: '月德',
    tianshang: '天傷',
    tianshi: '天使',
    tianchu: '天廚',
    changsheng: '長生',
    muyu: '沐浴',
    guandai: '冠帶',
    linguan: '臨官',
    diwang: '帝旺',
    shuai: '衰',
    bing: '病',
    si: '死',
    mu: '墓',
    jue: '絕',
    tai: '胎',
    yang: '養',
    boshi: '博士',
    lishi: '力士',
    qinglong: '青龍',
    xiaohao: '小耗',
    jiangjun: '將軍',
    zhoushu: '奏書',
    faylian: '飛廉',
    xishen: '喜神',
    bingfu: '病符',
    dahao: '大耗',
    fubing: '伏兵',
    guanfu: '官府',
    suijian: '歲建',
    huiqi: '晦氣',
    sangmen: '喪門',
    guansuo: '貫索',
    gwanfu: '官符',
    longde: '龍德',
    baihu: '白虎',
    tiande: '天德',
    diaoke: '弔客',
    jiangxing: '將星',
    panan: '攀鞍',
    suiyi: '歲驛',
    xiishen: '息神',
    huagai: '華蓋',
    jiesha: '劫煞',
    zhaisha: '災煞',
    tiansha: '天煞',
    zhibei: '指背',
    xianchi: '咸池',
    yuesha: '月煞',
    wangshen: '亡神',
    yunkui: '運魁',
    yunyue: '運鉞',
    yunchang: '運昌',
    yunqu: '運曲',
    yunluan: '運鸞',
    yunxi: '運喜',
    yunlu: '運祿',
    yunyang: '運羊',
    yuntuo: '運陀',
    yunma: '運馬',
    liukui: '流魁',
    liuyue: '流鉞',
    liuchang: '流昌',
    liuqu: '流曲',
    liuluan: '流鸞',
    liuxi: '流喜',
    liulu: '流祿',
    liuyang: '流羊',
    liutuo: '流陀',
    liuma: '流馬',
    nianjie: '年解',
};

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1718710892527, function(require, module, exports) {

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var common_json_1 = __importDefault(require("./common.json"));
var brightness_1 = __importDefault(require("./brightness"));
var earthlyBranch_1 = __importDefault(require("./earthlyBranch"));
var fiveElementsClass_1 = __importDefault(require("./fiveElementsClass"));
var gender_1 = __importDefault(require("./gender"));
var heavenlyStem_1 = __importDefault(require("./heavenlyStem"));
var mutagen_1 = __importDefault(require("./mutagen"));
var palace_1 = __importDefault(require("./palace"));
var star_1 = __importDefault(require("./star"));
exports.default = __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, common_json_1.default), fiveElementsClass_1.default), heavenlyStem_1.default), earthlyBranch_1.default), brightness_1.default), mutagen_1.default), star_1.default), palace_1.default), gender_1.default);

}, function(modId) { var map = {"./common.json":1718710892528,"./brightness":1718710892529,"./earthlyBranch":1718710892530,"./fiveElementsClass":1718710892531,"./gender":1718710892532,"./heavenlyStem":1718710892533,"./mutagen":1718710892534,"./palace":1718710892535,"./star":1718710892536}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1718710892528, function(require, module, exports) {
module.exports = {
    "decadal": "대한",
    "childhood": "어린",
    "yearly": "유년",
    "monthly": "유월",
    "daily": "유일",
    "hourly": "유시",
    "turn": "소한",
    "rat": "쥐",
    "ox": "소",
    "tiger": "호랑이",
    "rabbit": "토끼",
    "dragon": "용",
    "snake": "뱀",
    "horse": "말",
    "sheep": "양",
    "monkey": "원숭이",
    "rooster": "닭",
    "dog": "개",
    "pig": "돼지",
    "earlyRatHour": "아침 자시",
    "oxHour": "축시",
    "tigerHour": "인시",
    "rabbitHour": "묘시",
    "dragonHour": "진시",
    "snakeHour": "사시",
    "horseHour": "오시",
    "goatHour": "미시",
    "monkeyHour": "신시",
    "roosterHour": "유시",
    "dogHour": "술시",
    "pigHour": "해시",
    "lateRatHour": "밤에 자시",
    "aries": "백양궁",
    "taurus": "금우궁",
    "gemini": "쌍아궁",
    "cancer": "거해궁",
    "leo": "사자궁",
    "virgo": "처녀궁",
    "libra": "천칭궁",
    "scorpio": "천갈궁",
    "sagittarius": "인마궁",
    "capricorn": "마갈궁",
    "aquarius": "보병궁",
    "pisces": "쌍어궁"
}

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1718710892529, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    miao: '[+3]',
    wang: '[+2]',
    de: '[+1]',
    li: '[0]',
    ping: '[-1]',
    bu: '[-2]',
    xian: '[-3]',
};

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1718710892530, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    ziEarthly: '자',
    chouEarthly: '축',
    yinEarthly: '인',
    maoEarthly: '묘',
    chenEarthly: '진',
    siEarthly: '사',
    wuEarthly: '오',
    weiEarthly: '미',
    shenEarthly: '신',
    youEarthly: '유',
    xuEarthly: '술',
    haiEarthly: '해',
};

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1718710892531, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    water2nd: '수이국',
    wood3rd: '목삼국',
    metal4th: '금사국',
    earth5th: '토오국',
    fire6th: '화육국',
};

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1718710892532, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    male: '남성',
    female: '여자',
};

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1718710892533, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    jiaHeavenly: '갑',
    yiHeavenly: '을',
    bingHeavenly: '병',
    dingHeavenly: '정',
    wuHeavenly: '무',
    jiHeavenly: '기',
    gengHeavenly: '경',
    xinHeavenly: '신',
    renHeavenly: '임',
    guiHeavenly: '계',
};

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1718710892534, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    sihuaLu: '록',
    sihuaQuan: '권',
    sihuaKe: '과',
    sihuaJi: '기',
};

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1718710892535, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    soulPalace: '명궁',
    bodyPalace: '신궁',
    siblingsPalace: '형제',
    spousePalace: '부처',
    childrenPalace: '자녀',
    wealthPalace: '재백',
    healthPalace: '질액',
    surfacePalace: '천이',
    friendsPalace: '노복',
    careerPalace: '관록',
    propertyPalace: '전택',
    spiritPalace: '복덕',
    parentsPalace: '부모',
    originalPalace: '라인',
};

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1718710892536, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    ziweiMaj: '자미',
    tianjiMaj: '천기',
    taiyangMaj: '태양',
    wuquMaj: '무곡',
    tiantongMaj: '천동',
    lianzhenMaj: '염정',
    tianfuMaj: '천부',
    taiyinMaj: '태음',
    tanlangMaj: '탐랑',
    jumenMaj: '거문',
    tianxiangMaj: '천상',
    tianliangMaj: '천량',
    qishaMaj: '칠살',
    pojunMaj: '파군',
    zuofuMin: '좌보',
    youbiMin: '우필',
    wenchangMin: '문창',
    wenquMin: '문곡',
    lucunMin: '록존',
    tianmaMin: '천마',
    qingyangMin: '경양',
    tuoluoMin: '타라',
    huoxingMin: '화성',
    lingxingMin: '령성',
    tiankuiMin: '천괴',
    tianyueMin: '천월',
    dikongMin: '지공',
    dijieMin: '지겁',
    tiankong: '천공',
    tianxing: '천형',
    tianyao: '천요',
    jieshen: '해신',
    yinsha: '음살',
    tianxi: '천희',
    tianguan: '천관',
    tianfu: '천복',
    tianku: '천곡',
    tianxu: '천허',
    longchi: '용지',
    fengge: '봉각',
    hongluan: '홍란',
    guchen: '고진',
    guasu: '과숙',
    feilian: '비렴',
    posui: '파쇄',
    taifu: '태보',
    fenggao: '봉고',
    tianwu: '천무',
    tianyue: '천월',
    santai: '삼태',
    bazuo: '팔좌',
    engguang: '은광',
    tiangui: '천귀',
    tiancai: '천재',
    tianshou: '천수',
    jiekong: '절중',
    xunzhong: '순중',
    xunkong: '순공',
    kongwang: '공망',
    jielu: '절로',
    yuede: '월덕',
    tianshang: '천상',
    tianshi: '천사',
    tianchu: '천주',
    changsheng: '장생',
    muyu: '목욕',
    guandai: '관대',
    linguan: '임관',
    diwang: '제왕',
    shuai: '쇠',
    bing: '병',
    si: '사',
    mu: '묘',
    jue: '절',
    tai: '태',
    yang: '양',
    boshi: '박사',
    lishi: '역사',
    qinglong: '청룡',
    xiaohao: '소모',
    jiangjun: '장군',
    zhoushu: '주서',
    faylian: '비렴',
    xishen: '희신',
    bingfu: '병부',
    dahao: '대모',
    fubing: '복병',
    guanfu: '관부',
    suijian: '태세',
    huiqi: '회기',
    sangmen: '상문',
    guansuo: '관색',
    gwanfu: '관부',
    longde: '용덕',
    baihu: '백호',
    tiande: '복덕',
    diaoke: '조객',
    jiangxing: '장성',
    panan: '반안',
    suiyi: '세역',
    xiishen: '식신',
    huagai: '화개',
    jiesha: '겁살',
    zhaisha: '재살',
    tiansha: '천살',
    zhibei: '지배',
    xianchi: '함지',
    yuesha: '월살',
    wangshen: '망신',
    yunkui: '천괴(십년)',
    yunyue: '천월(십년)',
    yunchang: '문창(십년)',
    yunqu: '문곡(십년)',
    yunluan: '홍란(십년)',
    yunxi: '천희(십년)',
    yunlu: '록존(십년)',
    yunyang: '경양(십년)',
    yuntuo: '타라(십년)',
    yunma: '천마(십년)',
    liukui: '천괴(년)',
    liuyue: '천월(년)',
    liuchang: '문창(년)',
    liuqu: '문곡(년)',
    liuluan: '홍란(년)',
    liuxi: '천희(년)',
    liulu: '록존(년)',
    liuyang: '경양(년)',
    liutuo: '타라(년)',
    liuma: '천마(년)',
    nianjie: '해신(년)',
};

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1718710892537, function(require, module, exports) {

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var common_json_1 = __importDefault(require("./common.json"));
var brightness_1 = __importDefault(require("./brightness"));
var earthlyBranch_1 = __importDefault(require("./earthlyBranch"));
var fiveElementsClass_1 = __importDefault(require("./fiveElementsClass"));
var gender_1 = __importDefault(require("./gender"));
var heavenlyStem_1 = __importDefault(require("./heavenlyStem"));
var mutagen_1 = __importDefault(require("./mutagen"));
var palace_1 = __importDefault(require("./palace"));
var star_1 = __importDefault(require("./star"));
exports.default = __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, common_json_1.default), fiveElementsClass_1.default), heavenlyStem_1.default), earthlyBranch_1.default), brightness_1.default), mutagen_1.default), star_1.default), palace_1.default), gender_1.default);

}, function(modId) { var map = {"./common.json":1718710892538,"./brightness":1718710892539,"./earthlyBranch":1718710892540,"./fiveElementsClass":1718710892541,"./gender":1718710892542,"./heavenlyStem":1718710892543,"./mutagen":1718710892544,"./palace":1718710892545,"./star":1718710892546}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1718710892538, function(require, module, exports) {
module.exports = {
    "decadal": "大限",
    "childhood": "子供",
    "yearly": "流年",
    "monthly": "流月",
    "daily": "流日",
    "hourly": "流時",
    "turn": "小限",
    "rat": "鼠",
    "ox": "牛",
    "tiger": "虎",
    "rabbit": "兎",
    "dragon": "龍",
    "snake": "蛇",
    "horse": "馬",
    "sheep": "羊",
    "monkey": "猿",
    "rooster": "雞",
    "dog": "犬",
    "pig": "豚",
    "earlyRatHour": "早子時",
    "oxHour": "丑時",
    "tigerHour": "寅時",
    "rabbitHour": "卯時",
    "dragonHour": "辰時",
    "snakeHour": "巳時",
    "horseHour": "午時",
    "goatHour": "未時",
    "monkeyHour": "申時",
    "roosterHour": "酉時",
    "dogHour": "戌時",
    "pigHour": "亥時",
    "lateRatHour": "晚子時",
    "aries": "おひつじ座",
    "taurus": "おうし座",
    "gemini": "ふたご座",
    "cancer": "かに座",
    "leo": "しし座",
    "virgo": "おとめ座",
    "libra": "てんびん座",
    "scorpio": "さそり座",
    "sagittarius": "いて座",
    "capricorn": "やぎ座",
    "aquarius": "みずがめ座",
    "pisces": "うお座"
}

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1718710892539, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    miao: '廟',
    wang: '旺',
    de: '得',
    li: '利',
    ping: '平',
    bu: '不',
    xian: '陷',
};

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1718710892540, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    ziEarthly: '子',
    chouEarthly: '丑',
    yinEarthly: '寅',
    maoEarthly: '卯',
    chenEarthly: '辰',
    siEarthly: '巳',
    wuEarthly: '午',
    weiEarthly: '未',
    shenEarthly: '申',
    youEarthly: '酉',
    xuEarthly: '戌',
    haiEarthly: '亥',
};

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1718710892541, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    water2nd: '水の二局',
    wood3rd: '木の三局',
    metal4th: '金の四局',
    earth5th: '土の五局',
    fire6th: '火の六局',
};

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1718710892542, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    male: '男',
    female: '女',
};

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1718710892543, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    jiaHeavenly: '甲',
    yiHeavenly: '乙',
    bingHeavenly: '丙',
    dingHeavenly: '丁',
    wuHeavenly: '戊',
    jiHeavenly: '己',
    gengHeavenly: '庚',
    xinHeavenly: '辛',
    renHeavenly: '壬',
    guiHeavenly: '癸',
};

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1718710892544, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    sihuaLu: '祿',
    sihuaQuan: '權',
    sihuaKe: '科',
    sihuaJi: '忌',
};

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1718710892545, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    soulPalace: '命宮',
    bodyPalace: '身宮',
    siblingsPalace: '兄弟',
    spousePalace: '夫妻',
    childrenPalace: '子女',
    wealthPalace: '財帛',
    healthPalace: '疾厄',
    surfacePalace: '遷移',
    friendsPalace: '僕役',
    careerPalace: '官祿',
    propertyPalace: '田宅',
    spiritPalace: '福德',
    parentsPalace: '父母',
    originalPalace: '来因',
};

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1718710892546, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    ziweiMaj: '紫微',
    tianjiMaj: '天機',
    taiyangMaj: '太陽',
    wuquMaj: '武曲',
    tiantongMaj: '天同',
    lianzhenMaj: '廉貞',
    tianfuMaj: '天府',
    taiyinMaj: '太陰',
    tanlangMaj: '貪狼',
    jumenMaj: '巨門',
    tianxiangMaj: '天相',
    tianliangMaj: '天梁',
    qishaMaj: '七殺',
    pojunMaj: '破軍',
    zuofuMin: '左輔',
    youbiMin: '右弼',
    wenchangMin: '文昌',
    wenquMin: '文曲',
    lucunMin: '祿存',
    tianmaMin: '天馬',
    qingyangMin: '擎羊',
    tuoluoMin: '陀羅',
    huoxingMin: '火星',
    lingxingMin: '鈴星',
    tiankuiMin: '天魁',
    tianyueMin: '天鉞',
    dikongMin: '地空',
    dijieMin: '地劫',
    tiankong: '天空',
    tianxing: '天刑',
    tianyao: '天姚',
    jieshen: '解神',
    yinsha: '陰煞',
    tianxi: '天喜',
    tianguan: '天官',
    tianfu: '天福',
    tianku: '天哭',
    tianxu: '天虛',
    longchi: '龍池',
    fengge: '鳳閣',
    hongluan: '紅鸞',
    guchen: '孤辰',
    guasu: '寡宿',
    feilian: '蜚廉',
    posui: '破碎',
    taifu: '台輔',
    fenggao: '封誥',
    tianwu: '天巫',
    tianyue: '天月',
    santai: '三台',
    bazuo: '八座',
    engguang: '恩光',
    tiangui: '天貴',
    tiancai: '天才',
    tianshou: '天壽',
    jiekong: '截空',
    xunzhong: '旬中',
    xunkong: '旬空',
    kongwang: '空亡',
    jielu: '截空',
    yuede: '月德',
    tianshang: '天傷',
    tianshi: '天使',
    tianchu: '天廚',
    changsheng: '長生',
    muyu: '沐浴',
    guandai: '冠帶',
    linguan: '臨官',
    diwang: '帝旺',
    shuai: '衰',
    bing: '病',
    si: '死',
    mu: '墓',
    jue: '絕',
    tai: '胎',
    yang: '養',
    boshi: '博士',
    lishi: '力士',
    qinglong: '青龍',
    xiaohao: '小耗',
    jiangjun: '將軍',
    zhoushu: '奏書',
    faylian: '飛廉',
    xishen: '喜神',
    bingfu: '病符',
    dahao: '大耗',
    fubing: '伏兵',
    guanfu: '官府',
    suijian: '歲建',
    huiqi: '晦氣',
    sangmen: '喪門',
    guansuo: '貫索',
    gwanfu: '官符',
    longde: '龍德',
    baihu: '白虎',
    tiande: '天德',
    diaoke: '弔客',
    jiangxing: '將星',
    panan: '攀鞍',
    suiyi: '歲驛',
    xiishen: '息神',
    huagai: '華蓋',
    jiesha: '劫煞',
    zhaisha: '災煞',
    tiansha: '天煞',
    zhibei: '指背',
    xianchi: '咸池',
    yuesha: '月煞',
    wangshen: '亡神',
    yunkui: '限の魁',
    yunyue: '限の钺',
    yunchang: '限の昌',
    yunqu: '限の曲',
    yunluan: '限の鸾',
    yunxi: '限の喜',
    yunlu: '限の祿',
    yunyang: '限の羊',
    yuntuo: '限の陀',
    yunma: '限の馬',
    liukui: '年の魁',
    liuyue: '年の钺',
    liuchang: '年の昌',
    liuqu: '年の曲',
    liuluan: '年の鸾',
    liuxi: '年の喜',
    liulu: '年の祿',
    liuyang: '年の羊',
    liutuo: '年の陀',
    liuma: '年の馬',
    nianjie: '年の解',
};

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1718710892547, function(require, module, exports) {

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var common_json_1 = __importDefault(require("./common.json"));
var brightness_1 = __importDefault(require("./brightness"));
var earthlyBranch_1 = __importDefault(require("./earthlyBranch"));
var fiveElementsClass_1 = __importDefault(require("./fiveElementsClass"));
var gender_1 = __importDefault(require("./gender"));
var heavenlyStem_1 = __importDefault(require("./heavenlyStem"));
var mutagen_1 = __importDefault(require("./mutagen"));
var palace_1 = __importDefault(require("./palace"));
var star_1 = __importDefault(require("./star"));
exports.default = __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, common_json_1.default), fiveElementsClass_1.default), heavenlyStem_1.default), earthlyBranch_1.default), brightness_1.default), mutagen_1.default), star_1.default), palace_1.default), gender_1.default);

}, function(modId) { var map = {"./common.json":1718710892548,"./brightness":1718710892549,"./earthlyBranch":1718710892550,"./fiveElementsClass":1718710892551,"./gender":1718710892552,"./heavenlyStem":1718710892553,"./mutagen":1718710892554,"./palace":1718710892555,"./star":1718710892556}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1718710892548, function(require, module, exports) {
module.exports = {
    "decadal": "decadal",
    "yearly": "yearly",
    "monthly": "monthly",
    "daily": "daily",
    "hourly": "hourly",
    "turn": "age",
    "rat": "rat",
    "ox": "ox",
    "tiger": "tiger",
    "rabbit": "rabbit",
    "dragon": "dragon",
    "snake": "snake",
    "horse": "horse",
    "sheep": "sheep",
    "monkey": "monkey",
    "rooster": "rooster",
    "dog": "dog",
    "pig": "pig",
    "aries": "aries",
    "taurus": "taurus",
    "gemini": "gemini",
    "cancer": "cancer",
    "leo": "leo",
    "virgo": "virgo",
    "libra": "libra",
    "scorpio": "scorpio",
    "sagittarius": "sagittarius",
    "capricorn": "capricorn",
    "aquarius": "aquarius",
    "pisces": "pisces",
    "earlyRatHour": "early Rat hour",
    "oxHour": "Ox hour",
    "tigerHour": "Tiger hour",
    "rabbitHour": "Rabbit hour",
    "dragonHour": "Dragon hour",
    "snakeHour": "Snake hour",
    "horseHour": "Horse hour",
    "goatHour": "Goat hour",
    "monkeyHour": "Monkey hour",
    "roosterHour": "Rooster hour",
    "dogHour": "Dog hour",
    "pigHour": "Pig hour",
    "lateRatHour": "late Rat hour"
}

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1718710892549, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    miao: '[+3]',
    wang: '[+2]',
    de: '[+1]',
    li: '[0]',
    ping: '[-1]',
    bu: '[-2]',
    xian: '[-3]',
};

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1718710892550, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    ziEarthly: 'zi',
    chouEarthly: 'chou',
    yinEarthly: 'yin',
    maoEarthly: 'mao',
    chenEarthly: 'chen',
    siEarthly: 'si',
    wuEarthly: 'woo',
    weiEarthly: 'wei',
    shenEarthly: 'shen',
    youEarthly: 'you',
    xuEarthly: 'xu',
    haiEarthly: 'hai',
};

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1718710892551, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    water2nd: 'water 2nd',
    wood3rd: 'wood 3rd',
    metal4th: 'metal 4th',
    earth5th: 'earth 5th',
    fire6th: 'fire 6th',
};

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1718710892552, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    male: 'male',
    female: 'female',
};

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1718710892553, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    jiaHeavenly: 'jia',
    yiHeavenly: 'yi',
    bingHeavenly: 'bing',
    dingHeavenly: 'ding',
    wuHeavenly: 'wu',
    jiHeavenly: 'ji',
    gengHeavenly: 'geng',
    xinHeavenly: 'xin',
    renHeavenly: 'ren',
    guiHeavenly: 'gui',
};

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1718710892554, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    sihuaLu: 'A',
    sihuaQuan: 'B',
    sihuaKe: 'C',
    sihuaJi: 'D',
};

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1718710892555, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    soulPalace: 'soul',
    bodyPalace: 'body',
    siblingsPalace: 'siblings',
    spousePalace: 'spouse',
    childrenPalace: 'children',
    wealthPalace: 'wealth',
    healthPalace: 'health',
    surfacePalace: 'surface',
    friendsPalace: 'friends',
    careerPalace: 'career',
    propertyPalace: 'property',
    spiritPalace: 'spirit',
    parentsPalace: 'parents',
    originalPalace: 'origin',
};

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1718710892556, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    ziweiMaj: 'emperor',
    tianjiMaj: 'advisor',
    taiyangMaj: 'sun',
    wuquMaj: 'general',
    tiantongMaj: 'fortunate',
    lianzhenMaj: 'judge',
    tianfuMaj: 'empress',
    taiyinMaj: 'moon',
    tanlangMaj: 'wolf',
    jumenMaj: 'advocator',
    tianxiangMaj: 'minister',
    tianliangMaj: 'sage',
    qishaMaj: 'marshal',
    pojunMaj: 'rebel',
    zuofuMin: 'officer',
    youbiMin: 'helper',
    wenchangMin: 'scholar',
    wenquMin: 'artist',
    lucunMin: 'money',
    tianmaMin: 'horse',
    qingyangMin: 'driven',
    tuoluoMin: 'tangled',
    huoxingMin: 'impulsive',
    lingxingMin: 'spark',
    tiankuiMin: 'assistant',
    tianyueMin: 'aide',
    dikongMin: 'ideologue',
    dijieMin: 'fickle',
    tiankong: 'utopian',
    tianxing: 'serious',
    tianyao: 'social',
    jieshen: 'considery',
    yinsha: 'gloomy',
    tianxi: 'cheerful',
    tianguan: 'solemn',
    tianfu: 'lucky',
    tianku: 'upset',
    tianxu: 'frail',
    longchi: 'talented',
    fengge: 'refined',
    hongluan: 'attractive',
    guchen: 'alone',
    guasu: 'lonely',
    feilian: 'instigated',
    posui: 'broken',
    taifu: 'honorable',
    fenggao: 'awarded',
    tianwu: 'psychic',
    tianyue: 'sickly',
    santai: 'senior',
    bazuo: 'dignified',
    engguang: 'grateful',
    tiangui: 'noble',
    tiancai: 'gifted',
    tianshou: 'ageless',
    jiekong: 'interrupted',
    xunzhong: 'meditative',
    xunkong: 'fancied',
    kongwang: 'bottomless',
    jielu: 'intercepted',
    yuede: 'peaceful',
    tianshang: 'wounded',
    tianshi: 'heaven',
    tianchu: 'gourmet',
    changsheng: 'born',
    muyu: 'infancy',
    guandai: 'adolescence',
    linguan: 'adulthood',
    diwang: 'prime',
    shuai: 'weak',
    bing: 'sick',
    si: 'dead',
    mu: 'buried',
    jue: 'dissipated',
    tai: 'embryo',
    yang: 'molding',
    boshi: 'doctor',
    lishi: 'sumo',
    qinglong: 'dragon',
    xiaohao: 'consumer',
    jiangjun: 'general',
    zhoushu: 'book',
    faylian: 'gossip',
    xishen: 'happiness',
    bingfu: 'illness',
    dahao: 'wastrel',
    fubing: 'ambush',
    guanfu: 'government',
    suijian: 'initial',
    huiqi: 'unlucky',
    sangmen: 'downcast',
    guansuo: 'tied',
    gwanfu: 'official',
    longde: 'virtuous',
    baihu: 'sinister',
    tiande: 'blessed',
    diaoke: 'sorrowing',
    jiangxing: 'capable',
    panan: 'admired',
    suiyi: 'varied',
    xiishen: 'listless',
    huagai: 'religious',
    jiesha: 'robbed',
    zhaisha: 'disastery',
    tiansha: 'condemned',
    zhibei: 'insidious',
    xianchi: 'passionate',
    yuesha: 'hapless',
    wangshen: 'perished',
    yunkui: 'assistant(D)',
    yunyue: 'aide(D)',
    yunchang: 'scholar(D)',
    yunqu: 'artist(D)',
    yunluan: 'attractive(D)',
    yunxi: 'cheerful(D)',
    yunlu: 'money(D)',
    yunyang: 'driven(D)',
    yuntuo: 'tangled(D)',
    yunma: 'horse(D)',
    liukui: 'assistant(Y)',
    liuyue: 'aide(Y)',
    liuchang: 'scholar(Y)',
    liuqu: 'artist(Y)',
    liuluan: 'attractive(Y)',
    liuxi: 'cheerful(Y)',
    liulu: 'money(Y)',
    liuyang: 'driven(Y)',
    liutuo: 'tangled(Y)',
    liuma: 'horse(Y)',
    nianjie: 'considery(Y)',
};

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1718710892557, function(require, module, exports) {

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var common_json_1 = __importDefault(require("./common.json"));
var brightness_1 = __importDefault(require("./brightness"));
var earthlyBranch_1 = __importDefault(require("./earthlyBranch"));
var fiveElementsClass_1 = __importDefault(require("./fiveElementsClass"));
var gender_1 = __importDefault(require("./gender"));
var heavenlyStem_1 = __importDefault(require("./heavenlyStem"));
var mutagen_1 = __importDefault(require("./mutagen"));
var palace_1 = __importDefault(require("./palace"));
var star_1 = __importDefault(require("./star"));
exports.default = __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, common_json_1.default), fiveElementsClass_1.default), heavenlyStem_1.default), earthlyBranch_1.default), brightness_1.default), mutagen_1.default), star_1.default), palace_1.default), gender_1.default);

}, function(modId) { var map = {"./common.json":1718710892558,"./brightness":1718710892559,"./earthlyBranch":1718710892560,"./fiveElementsClass":1718710892561,"./gender":1718710892562,"./heavenlyStem":1718710892563,"./mutagen":1718710892564,"./palace":1718710892565,"./star":1718710892566}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1718710892558, function(require, module, exports) {
module.exports = {
    "decadal": "Đại Hạn",
    "childhood": "đứa trẻ Hạn",
    "yearly": "Lưu Niên",
    "monthly": "Lưu Nguyệt",
    "daily": "Lưu Nhật",
    "hourly": "Lưu Thì",
    "turn": "Tiểu Hạn",
    "rat": "Chuột",
    "ox": "Trâu",
    "tiger": "Hổ",
    "rabbit": "Mèo",
    "dragon": "Rồng",
    "snake": "Rắn",
    "horse": "Ngựa",
    "sheep": "Dê",
    "monkey": "Khỉ",
    "rooster": "Gà",
    "dog": "Chó",
    "pig": "Lợn",
    "earlyRatHour": "Giờ tý sớm",
    "oxHour": "Giờ sửu",
    "tigerHour": "Giờ dần",
    "rabbitHour": "Giờ mão",
    "dragonHour": "Giờ thìn",
    "snakeHour": "Giờ tỵ",
    "horseHour": "Giờ ngọ",
    "goatHour": "Giờ mùi",
    "monkeyHour": "Giờ thân",
    "roosterHour": "Giờ dậu",
    "dogHour": "Giờ tuất",
    "pigHour": "Giờ hợi",
    "lateRatHour": "Giờ tý muộn",
    "aries": "Cung Bạch Dương",
    "taurus": "Cung Kim Ngưu",
    "gemini": "Cung Song Tử",
    "cancer": "Cung Cự Giải",
    "leo": "Cung Sư Tử",
    "virgo": "Cung Xử Nữ",
    "libra": "Cung Thiên Bình",
    "scorpio": "Cung Thiên Yết",
    "sagittarius": "Cung Xạ Thủ",
    "capricorn": "Cung Ma Kết",
    "aquarius": "Cung Thủy Bình",
    "pisces": "Cung Song Ngư"
}

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1718710892559, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    miao: 'Miếu',
    wang: 'Vượng',
    de: 'Đắc',
    li: 'Lợi',
    ping: 'Bình',
    bu: 'Bất',
    xian: 'Hạn',
};

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1718710892560, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    ziEarthly: 'Tý',
    chouEarthly: 'Sửu',
    yinEarthly: 'Dần',
    maoEarthly: 'Mão',
    chenEarthly: 'Thìn',
    siEarthly: 'Tỵ',
    wuEarthly: 'Ngọ',
    weiEarthly: 'Mùi',
    shenEarthly: 'Thân',
    youEarthly: 'Dậu',
    xuEarthly: 'Tuất',
    haiEarthly: 'Hợi',
};

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1718710892561, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    water2nd: 'Thủy Nhị Cục',
    wood3rd: 'Mộc Tam Cục',
    metal4th: 'Kim Tứ Cục',
    earth5th: 'Thổ Ngũ Cục',
    fire6th: 'Hỏa Lục Cục',
};

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1718710892562, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    male: 'Nam',
    female: 'Nữ',
};

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1718710892563, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    jiaHeavenly: 'Giáp',
    yiHeavenly: 'Ất',
    bingHeavenly: 'Bính',
    dingHeavenly: 'Đinh',
    wuHeavenly: 'Mậu',
    jiHeavenly: 'Kỷ',
    gengHeavenly: 'Canh',
    xinHeavenly: 'Tân',
    renHeavenly: 'Nhâm',
    guiHeavenly: 'Quý',
};

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1718710892564, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    sihuaLu: 'Lộc',
    sihuaQuan: 'Quyền',
    sihuaKe: 'Khoa',
    sihuaJi: 'Kỵ',
};

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1718710892565, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    soulPalace: 'Mệnh',
    bodyPalace: 'Thân',
    siblingsPalace: 'Huynh Đệ',
    spousePalace: 'Phu Thê',
    childrenPalace: 'Tử Nữ',
    wealthPalace: 'Tài Bạch',
    healthPalace: 'Tật Ách',
    surfacePalace: 'Thiên Di',
    friendsPalace: 'Nô Bộc',
    careerPalace: 'Quan Lộc',
    propertyPalace: 'Điền Trạch',
    spiritPalace: 'Phúc Đức',
    parentsPalace: 'Phụ Mẫu',
    originalPalace: 'Lai Nhân',
};

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1718710892566, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    ziweiMaj: 'Tử Vi',
    tianjiMaj: 'Thiên Cơ',
    taiyangMaj: 'Thái Dương',
    wuquMaj: 'Vũ Khúc',
    tiantongMaj: 'Thiên Đồng',
    lianzhenMaj: 'Liêm Trinh',
    tianfuMaj: 'Thiên Phủ',
    taiyinMaj: 'Thái Âm',
    tanlangMaj: 'Tham Lang',
    jumenMaj: 'Cự Môn',
    tianxiangMaj: 'Thiên Tướng',
    tianliangMaj: 'Thiên Lương',
    qishaMaj: 'Thất Sát',
    pojunMaj: 'Phá Quân',
    zuofuMin: 'Tả Phù',
    youbiMin: 'Hữu Bật',
    wenchangMin: 'Văn Xương',
    wenquMin: 'Văn Khúc',
    lucunMin: 'Lộc Tồn',
    tianmaMin: 'Thiên Mã',
    qingyangMin: 'Kình Dương',
    tuoluoMin: 'Đà La',
    huoxingMin: 'Hỏa Tinh',
    lingxingMin: 'Linh Tinh',
    tiankuiMin: 'Thiên Khôi',
    tianyueMin: 'Thiên Việt',
    dikongMin: 'Địa Không',
    dijieMin: 'Địa Kiếp',
    tiankong: 'Thiên Không',
    tianxing: 'Thiên Hình',
    tianyao: 'Thiên Diêu',
    jieshen: 'Giải Thần',
    yinsha: 'Âm Sát',
    tianxi: 'Thiên Hỷ',
    tianguan: 'Thiên Quan',
    tianfu: 'Thiên Phúc',
    tianku: 'Thiên Khốc',
    tianxu: 'Thiên Hư',
    longchi: 'Long Trì',
    fengge: 'Phụng Các',
    hongluan: 'Hồng Loan',
    guchen: 'Cô Thần',
    guasu: 'Quả Tú',
    feilian: 'Phi Liêm',
    posui: 'Phá Toái',
    taifu: 'Đài Phụ',
    fenggao: 'Phong Cáo',
    tianwu: 'Thiên Vu',
    tianyue: 'Thiên Nguyệt',
    santai: 'Tam Thai',
    bazuo: 'Bát Tọa',
    engguang: 'Ân Quang',
    tiangui: 'Thiên Quý',
    tiancai: 'Thiên Tài',
    tianshou: 'Thiên Thọ',
    jiekong: 'Triệt Không',
    xunzhong: 'Tuần Trung',
    xunkong: 'Tuần Không',
    kongwang: 'Không Vong',
    jielu: 'Triệt Lộ',
    yuede: 'Nguyệt Đức',
    tianshang: 'Thiên Thương',
    tianshi: 'Thiên Sứ',
    tianchu: 'Thiên Trù',
    changsheng: 'Trường Sinh',
    muyu: 'Mục Dục',
    guandai: 'Quan Đới',
    linguan: 'Lâm Quan',
    diwang: 'Đế Vượng',
    shuai: 'Suy',
    bing: 'Bệnh',
    si: 'Tử',
    mu: 'Mộ',
    jue: 'Tuyệt',
    tai: 'Thai',
    yang: 'Dưỡng',
    boshi: 'Bác Sỹ',
    lishi: 'Lực Sỹ',
    qinglong: 'Thanh Long',
    xiaohao: 'Tiểu Hao',
    jiangjun: 'Tướng Quân',
    zhoushu: 'Tấu Thư',
    faylian: 'Phi Liêm',
    xishen: 'Hỷ Thần',
    bingfu: 'Bệnh Phù',
    dahao: 'Đại Hao',
    fubing: 'Phục Binh',
    guanfu: 'Quan Phủ',
    suijian: 'Tuế Kiện',
    huiqi: 'Hối Khí',
    sangmen: 'Tang Môn',
    guansuo: 'Quán Tác',
    gwanfu: 'Quan Phù',
    longde: 'Long Đức',
    baihu: 'Bạch Hổ',
    tiande: 'Thiên Đức',
    diaoke: 'Điếu Khách',
    jiangxing: 'Tướng Tinh',
    panan: 'Phan Án',
    suiyi: 'Tuế Dịch',
    xiishen: 'Tức Thần',
    huagai: 'Hoa Cái',
    jiesha: 'Kiếp Sát',
    zhaisha: 'Tai Sát',
    tiansha: 'Thiên Sát',
    zhibei: 'Chỉ Bối',
    xianchi: 'Hàm Trì',
    yuesha: 'Nguyệt Sát',
    wangshen: 'Vong Thần',
    yunkui: 'Vận Khôi',
    yunyue: 'Vận Việt',
    yunchang: 'Vận Xương',
    yunqu: 'Vận Khúc',
    yunluan: 'Vận Loan',
    yunxi: 'Vận Hỷ',
    yunlu: 'Vận Lộc',
    yunyang: 'Vận Dương',
    yuntuo: 'Vận Đà',
    yunma: 'Vận Mã',
    liukui: 'Lưu Khôi',
    liuyue: 'Lưu Việt',
    liuchang: 'Lưu Xương',
    liuqu: 'Lưu Khúc',
    liuluan: 'Lưu Loan',
    liuxi: 'Lưu Hỷ',
    liulu: 'Lưu Lộc',
    liuyang: 'Lưu Dương',
    liutuo: 'Lưu Đà',
    liuma: 'Lưu Mã',
    nianjie: 'Niên Giải',
};

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1718710892567, function(require, module, exports) {

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./Brightness"), exports);
__exportStar(require("./EarthlyBranch"), exports);
__exportStar(require("./FiveElementsClass"), exports);
__exportStar(require("./Gender"), exports);
__exportStar(require("./HeavenlyStem"), exports);
__exportStar(require("./Palace"), exports);
__exportStar(require("./Star"), exports);
__exportStar(require("./mutagen"), exports);

}, function(modId) { var map = {"./Brightness":1718710892568,"./EarthlyBranch":1718710892569,"./FiveElementsClass":1718710892570,"./Gender":1718710892571,"./HeavenlyStem":1718710892572,"./Palace":1718710892573,"./Star":1718710892574,"./mutagen":1718710892575}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1718710892568, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1718710892569, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1718710892570, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1718710892571, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1718710892572, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1718710892573, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1718710892574, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1718710892575, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1718710892576, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.translateChineseDate = exports.getAgeIndex = exports.timeToIndex = exports.mergeStars = exports.fixLunarDayIndex = exports.fixLunarMonthIndex = exports.fixEarthlyBranchIndex = exports.getMutagensByHeavenlyStem = exports.getMutagen = exports.getBrightness = exports.earthlyBranchIndexToPalaceIndex = exports.fixIndex = void 0;
var data_1 = require("../data");
var star_1 = require("../star");
var i18n_1 = require("../i18n");
var lunar_lite_1 = require("lunar-lite");
var astro_1 = require("../astro");
var getTargetMutagens = function (heavenlyStem) {
    var _a, _b;
    var mutagens = (0, astro_1.getConfig)().mutagens;
    var result;
    if (mutagens && mutagens[heavenlyStem]) {
        result = (_a = mutagens[heavenlyStem]) !== null && _a !== void 0 ? _a : [];
    }
    else {
        result = (_b = data_1.heavenlyStems[heavenlyStem].mutagen) !== null && _b !== void 0 ? _b : [];
    }
    return result;
};
/**
 * 用于处理索引，将索引锁定在 0~max 范围内
 *
 * @param index 当前索引
 * @param max 最大循环数，默认为12【因为12用得最多，宫位数量以及十二地支数量都为12，所以将12作为默认值】
 * @returns {number} 处理后的索引
 */
var fixIndex = function (index, max) {
    if (max === void 0) { max = 12; }
    if (index < 0) {
        return (0, exports.fixIndex)(index + max, max);
    }
    if (index > max - 1) {
        return (0, exports.fixIndex)(index - max, max);
    }
    var res = 1 / index === -Infinity ? 0 : index;
    return res;
};
exports.fixIndex = fixIndex;
/**
 * 因为宫位是从寅宫开始的排列的，所以需要将目标地支的序号减去寅的序号才能得到宫位的序号
 *
 * @param {EarthlyBranchName} earthlyBranch 地支
 * @returns {number} 该地支对应的宫位索引序号
 */
var earthlyBranchIndexToPalaceIndex = function (earthlyBranchName) {
    var earthlyBranch = (0, i18n_1.kot)(earthlyBranchName, 'Earthly');
    var yin = (0, i18n_1.kot)('yinEarthly', 'Earthly');
    return (0, exports.fixIndex)(data_1.EARTHLY_BRANCHES.indexOf(earthlyBranch) - data_1.EARTHLY_BRANCHES.indexOf(yin));
};
exports.earthlyBranchIndexToPalaceIndex = earthlyBranchIndexToPalaceIndex;
/**
 * 配置星耀亮度
 *
 * @param {StarName} starName 星耀名字
 * @param {number} index 所在宫位索引
 */
var getBrightness = function (starName, index) {
    var _a;
    var star = (0, i18n_1.kot)(starName);
    var brightness = (0, astro_1.getConfig)().brightness;
    var targetBrightness = brightness[star] ? brightness[star] : (_a = data_1.STARS_INFO[star]) === null || _a === void 0 ? void 0 : _a.brightness;
    if (!targetBrightness) {
        return '';
    }
    return (0, i18n_1.t)(targetBrightness[(0, exports.fixIndex)(index)]);
};
exports.getBrightness = getBrightness;
var getMutagen = function (starName, heavenlyStemName) {
    var heavenlyStem = (0, i18n_1.kot)(heavenlyStemName, 'Heavenly');
    var starKey = (0, i18n_1.kot)(starName);
    var target = getTargetMutagens(heavenlyStem);
    return (0, i18n_1.t)(data_1.MUTAGEN[target.indexOf(starKey)]);
};
exports.getMutagen = getMutagen;
var getMutagensByHeavenlyStem = function (heavenlyStemName) {
    var heavenlyStem = (0, i18n_1.kot)(heavenlyStemName, 'Heavenly');
    var target = getTargetMutagens(heavenlyStem);
    return target.map(function (star) { return (0, i18n_1.t)(star); });
};
exports.getMutagensByHeavenlyStem = getMutagensByHeavenlyStem;
/**
 * 处理地支相对于十二宫的索引，因为十二宫是以寅宫开始，所以下标需要减去地支寅的索引
 *
 * @param {EarthlyBranchName} earthlyBranch 地支
 * @returns {number} Number(0~11)
 */
var fixEarthlyBranchIndex = function (earthlyBranchName) {
    var earthlyBranch = (0, i18n_1.kot)(earthlyBranchName, 'Earthly');
    return (0, exports.fixIndex)(data_1.EARTHLY_BRANCHES.indexOf(earthlyBranch) - data_1.EARTHLY_BRANCHES.indexOf('yinEarthly'));
};
exports.fixEarthlyBranchIndex = fixEarthlyBranchIndex;
/**
 * 调整农历月份的索引
 *
 * 正月建寅（正月地支为寅），fixLeap为是否调整闰月情况
 * 若调整闰月，则闰月的前15天按上月算，后面天数按下月算
 * 比如 闰二月 时，fixLeap 为 true 时 闰二月十五(含)前
 * 的月份按二月算，之后的按三月算
 *
 * @param {string} solarDateStr 阳历日期
 * @param {number} timeIndex 时辰序号
 * @param {vboolean} fixLeap 是否调整闰月
 * @returns {number} 月份索引
 */
var fixLunarMonthIndex = function (solarDateStr, timeIndex, fixLeap) {
    var _a = (0, lunar_lite_1.solar2lunar)(solarDateStr), lunarMonth = _a.lunarMonth, lunarDay = _a.lunarDay, isLeap = _a.isLeap;
    // 紫微斗数以`寅`宫为第一个宫位
    var firstIndex = data_1.EARTHLY_BRANCHES.indexOf('yinEarthly');
    var needToAdd = isLeap && fixLeap && lunarDay > 15 && timeIndex !== 12;
    return (0, exports.fixIndex)(lunarMonth + 1 - firstIndex + (needToAdd ? 1 : 0));
};
exports.fixLunarMonthIndex = fixLunarMonthIndex;
/**
 * 获取农历日期【天】的索引，晚子时将加一天，所以如果是晚子时下标不需要减一
 *
 * @param lunarDay 农历日期【天】
 * @param timeIndex 时辰索引
 * @returns {number} 农历日期【天】
 */
var fixLunarDayIndex = function (lunarDay, timeIndex) { return (timeIndex >= 12 ? lunarDay : lunarDay - 1); };
exports.fixLunarDayIndex = fixLunarDayIndex;
/**
 * 将多个星耀数组合并到一起
 *
 * @param {FunctionalStar[][][]} stars 星耀数组
 * @returns {FunctionalStar[][]} 合并后的星耀
 */
var mergeStars = function () {
    var stars = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        stars[_i] = arguments[_i];
    }
    var finalStars = (0, star_1.initStars)();
    stars.forEach(function (item) {
        item.forEach(function (subItem, index) {
            Array.prototype.push.apply(finalStars[index], subItem);
        });
    });
    return finalStars;
};
exports.mergeStars = mergeStars;
/**
 * 将时间的小时转化为时辰的索引
 *
 * @param {number} hour 当前时间的小时数
 * @returns {number} 时辰的索引
 */
var timeToIndex = function (hour) {
    if (hour === 0) {
        // 00:00～01:00 为早子时
        return 0;
    }
    if (hour === 23) {
        // 23:00～00:00 为晚子时
        return 12;
    }
    return Math.floor((hour + 1) / 2);
};
exports.timeToIndex = timeToIndex;
/**
 * 起小限
 *
 * - 小限一年一度逢，男顺女逆不相同，
 * - 寅午戍人辰上起，申子辰人自戍宫，
 * - 巳酉丑人未宫始，亥卯未人起丑宫。
 *
 * @param {EarthlyBranchName} earthlyBranchName 地支
 * @returns {number} 小限开始的宫位索引
 */
var getAgeIndex = function (earthlyBranchName) {
    var earthlyBranch = (0, i18n_1.kot)(earthlyBranchName, 'Earthly');
    var ageIdx = -1;
    if (['yinEarthly', 'wuEarthly', 'xuEarthly'].includes(earthlyBranch)) {
        ageIdx = (0, exports.fixEarthlyBranchIndex)('chen');
    }
    else if (['shenEarthly', 'ziEarthly', 'chenEarthly'].includes(earthlyBranch)) {
        ageIdx = (0, exports.fixEarthlyBranchIndex)('xu');
    }
    else if (['siEarthly', 'youEarthly', 'chouEarthly'].includes(earthlyBranch)) {
        ageIdx = (0, exports.fixEarthlyBranchIndex)('wei');
    }
    else if (['haiEarthly', 'maoEarthly', 'weiEarthly'].includes(earthlyBranch)) {
        ageIdx = (0, exports.fixIndex)((0, exports.fixEarthlyBranchIndex)('chou'));
    }
    return ageIdx;
};
exports.getAgeIndex = getAgeIndex;
/**
 * 返回翻译后的干支纪年字符串
 *
 * @param chineseDate 干支纪年日期对象
 * @returns 干支纪年字符串
 */
var translateChineseDate = function (chineseDate) {
    var yearly = chineseDate.yearly, monthly = chineseDate.monthly, daily = chineseDate.daily, hourly = chineseDate.hourly;
    if (yearly.some(function (item) { return (0, i18n_1.t)((0, i18n_1.kot)(item)).length > 1; }) ||
        monthly.some(function (item) { return (0, i18n_1.t)((0, i18n_1.kot)(item)).length > 1; }) ||
        daily.some(function (item) { return (0, i18n_1.t)((0, i18n_1.kot)(item)).length > 1; }) ||
        hourly.some(function (item) { return (0, i18n_1.t)((0, i18n_1.kot)(item)).length > 1; })) {
        return "".concat(yearly.map(function (item) { return (0, i18n_1.t)((0, i18n_1.kot)(item)); }).join(' '), " - ").concat(monthly.map(function (item) { return (0, i18n_1.t)((0, i18n_1.kot)(item)); }).join(' '), " - ").concat(daily
            .map(function (item) { return (0, i18n_1.t)((0, i18n_1.kot)(item)); })
            .join(' '), " - ").concat(hourly.map(function (item) { return (0, i18n_1.t)((0, i18n_1.kot)(item)); }).join(' '));
    }
    return "".concat(yearly.map(function (item) { return (0, i18n_1.t)((0, i18n_1.kot)(item)); }).join(''), " ").concat(monthly.map(function (item) { return (0, i18n_1.t)((0, i18n_1.kot)(item)); }).join(''), " ").concat(daily
        .map(function (item) { return (0, i18n_1.t)((0, i18n_1.kot)(item)); })
        .join(''), " ").concat(hourly.map(function (item) { return (0, i18n_1.t)((0, i18n_1.kot)(item)); }).join(''));
};
exports.translateChineseDate = translateChineseDate;

}, function(modId) { var map = {"../data":1718710892497,"../star":1718710892502,"../i18n":1718710892506,"../astro":1718710892504}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1718710892577, function(require, module, exports) {

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMajorStarByLunarDate = exports.getMajorStarBySolarDate = exports.getSignByLunarDate = exports.getSignBySolarDate = exports.getZodiacBySolarDate = exports.withOptions = exports.byLunar = exports.astrolabeByLunarDate = exports.bySolar = exports.astrolabeBySolarDate = exports.getConfig = exports.config = exports.loadPlugin = exports.loadPlugins = void 0;
var lunar_lite_1 = require("lunar-lite");
var data_1 = require("../data");
var i18n_1 = require("../i18n");
var star_1 = require("../star");
var utils_1 = require("../utils");
var FunctionalAstrolabe_1 = __importDefault(require("./FunctionalAstrolabe"));
var FunctionalPalace_1 = __importDefault(require("./FunctionalPalace"));
var palace_1 = require("./palace");
var _plugins = [];
var _mutagens = {};
var _brightness = {};
/**
 * 年分界点参数，默认为立春分界。
 *
 * @version v2.4.0
 *
 * normal：正月初一分界
 * exact：立春分界
 */
var _yearDivide = 'exact';
var _horoscopeDivide = 'exact';
/**
 * 批量加载插件
 *
 * @version v2.3.0
 *
 * @param plugins 插件方法数组
 */
var loadPlugins = function (plugins) {
    Array.prototype.push.apply(_plugins, plugins);
};
exports.loadPlugins = loadPlugins;
/**
 * 加载单个插件
 *
 * @version v2.3.0
 *
 * @param plugin 插件方法
 */
var loadPlugin = function (plugin) {
    _plugins.push(plugin);
};
exports.loadPlugin = loadPlugin;
/**
 * 全局配置四化和亮度
 *
 * 由于key和value都有可能是不同语言传进来的，
 * 所以需会将key和value转化为对应的i18n key。
 *
 * @version 2.3.0
 *
 * @param {Config} param0 自定义配置
 */
var config = function (_a) {
    var mutagens = _a.mutagens, brightness = _a.brightness, yearDivide = _a.yearDivide, horoscopeDivide = _a.horoscopeDivide;
    if (mutagens) {
        Object.entries(mutagens).forEach(function (_a) {
            var _b;
            var key = _a[0], value = _a[1];
            _mutagens[(0, i18n_1.kot)(key)] = (_b = value.map(function (item) { return (0, i18n_1.kot)(item); })) !== null && _b !== void 0 ? _b : [];
        });
    }
    if (brightness) {
        Object.entries(brightness).forEach(function (_a) {
            var _b;
            var key = _a[0], value = _a[1];
            _brightness[(0, i18n_1.kot)(key)] = (_b = value.map(function (item) { return (0, i18n_1.kot)(item); })) !== null && _b !== void 0 ? _b : [];
        });
    }
    if (yearDivide) {
        _yearDivide = yearDivide;
    }
    if (horoscopeDivide) {
        _horoscopeDivide = horoscopeDivide;
    }
};
exports.config = config;
var getConfig = function () { return ({
    mutagens: _mutagens,
    brightness: _brightness,
    yearDivide: _yearDivide,
    horoscopeDivide: _horoscopeDivide,
}); };
exports.getConfig = getConfig;
/**
 * 通过阳历获取星盘信息
 *
 * @deprecated 此方法已在`v2.0.5`废弃，请用 `bySolar` 方法替换，参数不变
 *
 * @param solarDateStr 阳历日期【YYYY-M-D】
 * @param timeIndex 出生时辰序号【0~12】
 * @param gender 性别【男|女】
 * @param fixLeap 是否调整闰月情况【默认 true】，假入调整闰月，则闰月的前半个月算上个月，后半个月算下个月
 * @param language 输出语言
 * @returns 星盘信息
 */
var astrolabeBySolarDate = function (solarDateStr, timeIndex, gender, fixLeap, language) {
    if (fixLeap === void 0) { fixLeap = true; }
    return bySolar(solarDateStr, timeIndex, gender, fixLeap, language);
};
exports.astrolabeBySolarDate = astrolabeBySolarDate;
/**
 * 通过阳历获取星盘信息
 *
 * @param solarDateStr 阳历日期【YYYY-M-D】
 * @param timeIndex 出生时辰序号【0~12】
 * @param gender 性别【男|女】
 * @param fixLeap 是否调整闰月情况【默认 true】，假入调整闰月，则闰月的前半个月算上个月，后半个月算下个月
 * @param language 输出语言
 * @returns 星盘信息
 */
function bySolar(solarDateStr, timeIndex, gender, fixLeap, language) {
    if (fixLeap === void 0) { fixLeap = true; }
    language && (0, i18n_1.setLanguage)(language);
    var palaces = [];
    var yearly = (0, lunar_lite_1.getHeavenlyStemAndEarthlyBranchBySolarDate)(solarDateStr, timeIndex, {
        year: (0, exports.getConfig)().yearDivide,
    }).yearly;
    var earthlyBranchOfYear = (0, i18n_1.kot)(yearly[1], 'Earthly');
    var heavenlyStemOfYear = (0, i18n_1.kot)(yearly[0], 'Heavenly');
    var _a = (0, palace_1.getSoulAndBody)(solarDateStr, timeIndex, fixLeap), bodyIndex = _a.bodyIndex, soulIndex = _a.soulIndex, heavenlyStemOfSoul = _a.heavenlyStemOfSoul, earthlyBranchOfSoul = _a.earthlyBranchOfSoul;
    var palaceNames = (0, palace_1.getPalaceNames)(soulIndex);
    var majorStars = (0, star_1.getMajorStar)(solarDateStr, timeIndex, fixLeap);
    var minorStars = (0, star_1.getMinorStar)(solarDateStr, timeIndex, fixLeap);
    var adjectiveStars = (0, star_1.getAdjectiveStar)(solarDateStr, timeIndex, fixLeap);
    var changsheng12 = (0, star_1.getchangsheng12)(solarDateStr, timeIndex, gender, fixLeap);
    var boshi12 = (0, star_1.getBoShi12)(solarDateStr, gender);
    var _b = (0, star_1.getYearly12)(solarDateStr), jiangqian12 = _b.jiangqian12, suiqian12 = _b.suiqian12;
    var _c = (0, palace_1.getHoroscope)(solarDateStr, timeIndex, gender, fixLeap), decadals = _c.decadals, ages = _c.ages;
    for (var i = 0; i < 12; i++) {
        var heavenlyStemOfPalace = data_1.HEAVENLY_STEMS[(0, utils_1.fixIndex)(data_1.HEAVENLY_STEMS.indexOf((0, i18n_1.kot)(heavenlyStemOfSoul, 'Heavenly')) - soulIndex + i, 10)];
        var earthlyBranchOfPalace = data_1.EARTHLY_BRANCHES[(0, utils_1.fixIndex)(2 + i)];
        palaces.push(new FunctionalPalace_1.default({
            index: i,
            name: palaceNames[i],
            isBodyPalace: bodyIndex === i,
            isOriginalPalace: !['ziEarthly', 'chouEarthly'].includes(earthlyBranchOfPalace) && heavenlyStemOfPalace === heavenlyStemOfYear,
            heavenlyStem: (0, i18n_1.t)(heavenlyStemOfPalace),
            earthlyBranch: (0, i18n_1.t)(earthlyBranchOfPalace),
            majorStars: majorStars[i].concat(minorStars[i].filter(function (star) { return ['lucun', 'tianma'].includes(star.type); })),
            minorStars: minorStars[i].filter(function (star) { return !['lucun', 'tianma'].includes(star.type); }),
            adjectiveStars: adjectiveStars[i],
            changsheng12: changsheng12[i],
            boshi12: boshi12[i],
            jiangqian12: jiangqian12[i],
            suiqian12: suiqian12[i],
            decadal: decadals[i],
            ages: ages[i],
        }));
    }
    // 宫位是从寅宫开始，而寅的索引是2，所以需要+2
    var earthlyBranchOfSoulPalace = data_1.EARTHLY_BRANCHES[(0, utils_1.fixIndex)(soulIndex + 2)];
    var earthlyBranchOfBodyPalace = (0, i18n_1.t)(data_1.EARTHLY_BRANCHES[(0, utils_1.fixIndex)(bodyIndex + 2)]);
    var chineseDate = (0, lunar_lite_1.getHeavenlyStemAndEarthlyBranchBySolarDate)(solarDateStr, timeIndex, {
        year: (0, exports.getConfig)().yearDivide,
    });
    var lunarDate = (0, lunar_lite_1.solar2lunar)(solarDateStr);
    var result = new FunctionalAstrolabe_1.default({
        gender: (0, i18n_1.t)((0, i18n_1.kot)(gender)),
        solarDate: solarDateStr,
        lunarDate: lunarDate.toString(true),
        chineseDate: (0, utils_1.translateChineseDate)(chineseDate),
        rawDates: { lunarDate: lunarDate, chineseDate: chineseDate },
        time: (0, i18n_1.t)(data_1.CHINESE_TIME[timeIndex]),
        timeRange: data_1.TIME_RANGE[timeIndex],
        sign: (0, exports.getSignBySolarDate)(solarDateStr, language),
        zodiac: (0, exports.getZodiacBySolarDate)(solarDateStr, language),
        earthlyBranchOfSoulPalace: (0, i18n_1.t)(earthlyBranchOfSoulPalace),
        earthlyBranchOfBodyPalace: earthlyBranchOfBodyPalace,
        soul: (0, i18n_1.t)(data_1.earthlyBranches[earthlyBranchOfSoulPalace].soul),
        body: (0, i18n_1.t)(data_1.earthlyBranches[earthlyBranchOfYear].body),
        fiveElementsClass: (0, palace_1.getFiveElementsClass)(heavenlyStemOfSoul, earthlyBranchOfSoul),
        palaces: palaces,
        copyright: "copyright \u00A9 2023-".concat(new Date().getFullYear(), " iztro (https://github.com/SylarLong/iztro)"),
    });
    _plugins.map(function (plugin) { return result.use(plugin); });
    return result;
}
exports.bySolar = bySolar;
/**
 * 通过农历获取星盘信息
 *
 * @deprecated 此方法已在`v2.0.5`废弃，请用 `byLunar` 方法替换，参数不变
 *
 * @param lunarDateStr 农历日期【YYYY-M-D】，例如2000年七月十七则传入 2000-7-17
 * @param timeIndex 出生时辰序号【0~12】
 * @param gender 性别【男|女】
 * @param isLeapMonth 是否闰月【默认 false】，当实际月份没有闰月时该参数不生效
 * @param fixLeap 是否调整闰月情况【默认 true】，假入调整闰月，则闰月的前半个月算上个月，后半个月算下个月
 * @param language 输出语言
 * @returns 星盘数据
 */
var astrolabeByLunarDate = function (lunarDateStr, timeIndex, gender, isLeapMonth, fixLeap, language) {
    if (isLeapMonth === void 0) { isLeapMonth = false; }
    if (fixLeap === void 0) { fixLeap = true; }
    return (0, exports.byLunar)(lunarDateStr, timeIndex, gender, isLeapMonth, fixLeap, language);
};
exports.astrolabeByLunarDate = astrolabeByLunarDate;
/**
 * 通过农历获取星盘信息
 *
 * @param lunarDateStr 农历日期【YYYY-M-D】，例如2000年七月十七则传入 2000-7-17
 * @param timeIndex 出生时辰序号【0~12】
 * @param gender 性别【男|女】
 * @param isLeapMonth 是否闰月【默认 false】，当实际月份没有闰月时该参数不生效
 * @param fixLeap 是否调整闰月情况【默认 true】，假入调整闰月，则闰月的前半个月算上个月，后半个月算下个月
 * @param language 输出语言
 * @returns 星盘数据
 */
var byLunar = function (lunarDateStr, timeIndex, gender, isLeapMonth, fixLeap, language) {
    if (isLeapMonth === void 0) { isLeapMonth = false; }
    if (fixLeap === void 0) { fixLeap = true; }
    var solarDate = (0, lunar_lite_1.lunar2solar)(lunarDateStr, isLeapMonth);
    return bySolar(solarDate.toString(), timeIndex, gender, fixLeap, language);
};
exports.byLunar = byLunar;
/**
 * 获取排盘信息。
 *
 * @param param0 排盘参数
 * @returns 星盘信息
 */
var withOptions = function (_a) {
    var _b = _a.type, type = _b === void 0 ? 'solar' : _b, dateStr = _a.dateStr, timeIndex = _a.timeIndex, gender = _a.gender, isLeapMonth = _a.isLeapMonth, fixLeap = _a.fixLeap, language = _a.language, cfg = _a.config;
    if (cfg) {
        (0, exports.config)(cfg);
    }
    if (type === 'solar') {
        return bySolar(dateStr, timeIndex, gender, fixLeap, language);
    }
    return (0, exports.byLunar)(dateStr, timeIndex, gender, isLeapMonth, fixLeap, language);
};
exports.withOptions = withOptions;
/**
 * 通过公历获取十二生肖
 *
 * @version v1.2.1
 *
 * @param solarDateStr 阳历日期【YYYY-M-D】
 * @param language 输出语言，默认为中文
 * @returns 十二生肖
 */
var getZodiacBySolarDate = function (solarDateStr, language) {
    language && (0, i18n_1.setLanguage)(language);
    var yearly = (0, lunar_lite_1.getHeavenlyStemAndEarthlyBranchBySolarDate)(solarDateStr, 0, {
        year: (0, exports.getConfig)().yearDivide,
    }).yearly;
    return (0, i18n_1.t)((0, i18n_1.kot)((0, lunar_lite_1.getZodiac)(yearly[1])));
};
exports.getZodiacBySolarDate = getZodiacBySolarDate;
/**
 * 通过阳历获取星座
 *
 * @version v1.2.1
 *
 * @param solarDateStr 阳历日期【YYYY-M-D】
 * @param language 输出语言，默认为中文
 * @returns 星座
 */
var getSignBySolarDate = function (solarDateStr, language) {
    language && (0, i18n_1.setLanguage)(language);
    return (0, i18n_1.t)((0, i18n_1.kot)((0, lunar_lite_1.getSign)(solarDateStr)));
};
exports.getSignBySolarDate = getSignBySolarDate;
/**
 * 通过农历获取星座
 *
 * @version v1.2.1
 *
 * @param lunarDateStr 农历日期【YYYY-M-D】
 * @param isLeapMonth 是否闰月，如果该月没有闰月则此字段不生效
 * @param language 输出语言，默认为中文
 * @returns 星座
 */
var getSignByLunarDate = function (lunarDateStr, isLeapMonth, language) {
    language && (0, i18n_1.setLanguage)(language);
    var solarDate = (0, lunar_lite_1.lunar2solar)(lunarDateStr, isLeapMonth);
    return (0, exports.getSignBySolarDate)(solarDate.toString(), language);
};
exports.getSignByLunarDate = getSignByLunarDate;
/**
 * 通过阳历获取命宫主星
 *
 * @version v1.2.1
 *
 * @param solarDateStr 阳历日期【YYYY-M-D】
 * @param timeIndex 出生时辰序号【0~12】
 * @param fixLeap 是否调整闰月情况【默认 true】，假入调整闰月，则闰月的前半个月算上个月，后半个月算下个月
 * @param language 输出语言，默认为中文
 * @returns 命宫主星
 */
var getMajorStarBySolarDate = function (solarDateStr, timeIndex, fixLeap, language) {
    if (fixLeap === void 0) { fixLeap = true; }
    language && (0, i18n_1.setLanguage)(language);
    var bodyIndex = (0, palace_1.getSoulAndBody)(solarDateStr, timeIndex, fixLeap).bodyIndex;
    var majorStars = (0, star_1.getMajorStar)(solarDateStr, timeIndex, fixLeap);
    var stars = majorStars[bodyIndex].filter(function (star) { return star.type === 'major'; });
    if (stars.length) {
        return stars.map(function (star) { return (0, i18n_1.t)(star.name); }).join(',');
    }
    // 如果命宫为空宫，则借对宫主星
    return majorStars[(0, utils_1.fixIndex)(bodyIndex + 6)]
        .filter(function (star) { return star.type === 'major'; })
        .map(function (star) { return (0, i18n_1.t)(star.name); })
        .join(',');
};
exports.getMajorStarBySolarDate = getMajorStarBySolarDate;
/**
 * 通过农历获取命宫主星
 *
 * @version v1.2.1
 *
 * @param lunarDateStr 农历日期【YYYY-M-D】，例如2000年七月十七则传入 2000-7-17
 * @param timeIndex 出生时辰序号【0~12】
 * @param isLeapMonth 是否闰月，如果该月没有闰月则此字段不生效
 * @param fixLeap 是否调整闰月情况【默认 true】，假入调整闰月，则闰月的前半个月算上个月，后半个月算下个月
 * @param language 输出语言，默认为中文
 * @returns 命宫主星
 */
var getMajorStarByLunarDate = function (lunarDateStr, timeIndex, isLeapMonth, fixLeap, language) {
    if (isLeapMonth === void 0) { isLeapMonth = false; }
    if (fixLeap === void 0) { fixLeap = true; }
    var solarDate = (0, lunar_lite_1.lunar2solar)(lunarDateStr, isLeapMonth);
    return (0, exports.getMajorStarBySolarDate)(solarDate.toString(), timeIndex, fixLeap, language);
};
exports.getMajorStarByLunarDate = getMajorStarByLunarDate;

}, function(modId) { var map = {"../data":1718710892497,"../i18n":1718710892506,"../star":1718710892502,"../utils":1718710892576,"./FunctionalAstrolabe":1718710892578,"./FunctionalPalace":1718710892582,"./palace":1718710892505}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1718710892578, function(require, module, exports) {

var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dayjs_1 = __importDefault(require("dayjs"));
var lunar_lite_1 = require("lunar-lite");
var data_1 = require("../data");
var i18n_1 = require("../i18n");
var star_1 = require("../star");
var utils_1 = require("../utils");
var analyzer_1 = require("./analyzer");
var palace_1 = require("./palace");
var FunctionalHoroscope_1 = __importDefault(require("./FunctionalHoroscope"));
var astro_1 = require("./astro");
/**
 * 获取运限数据
 *
 * @version v0.2.1
 *
 * @private 私有方法
 *
 * @param $ 星盘对象
 * @param targetDate 阳历日期【可选】，默认为调用时日期
 * @param timeIndex 时辰序号【可选】，若不传会返回 `targetDate` 中时间所在的时辰
 * @returns 运限数据
 */
var _getHoroscopeBySolarDate = function ($, targetDate, timeIndex) {
    if (targetDate === void 0) { targetDate = new Date(); }
    var _birthday = (0, lunar_lite_1.solar2lunar)($.solarDate);
    var _date = (0, lunar_lite_1.solar2lunar)(targetDate);
    var convertTimeIndex = (0, utils_1.timeToIndex)((0, dayjs_1.default)(targetDate).hour());
    var _a = (0, lunar_lite_1.getHeavenlyStemAndEarthlyBranchBySolarDate)(targetDate, timeIndex || convertTimeIndex, {
        // 运限是以立春为界，但为了满足部分流派允许配置
        year: (0, astro_1.getConfig)().horoscopeDivide,
    }), yearly = _a.yearly, monthly = _a.monthly, daily = _a.daily, hourly = _a.hourly;
    // 虚岁
    var nominalAge = _date.lunarYear - _birthday.lunarYear;
    // 是否童限
    var isChildhood = false;
    // 假如目标日期已经过了生日，则需要加1岁
    // 比如 2022年九月初一 出生的人，在出生后虚岁为 1 岁
    // 但在 2023年九月初二 以后，虚岁则为 2 岁
    if ((_date.lunarYear === _birthday.lunarYear &&
        _date.lunarMonth === _birthday.lunarMonth &&
        _date.lunarDay > _birthday.lunarDay) ||
        _date.lunarMonth > _birthday.lunarMonth) {
        nominalAge += 1;
    }
    // 大限索引
    var decadalIndex = -1;
    // 大限天干
    var heavenlyStemOfDecade = 'jia';
    // 大限地支
    var earthlyBranchOfDecade = 'zi';
    // 小限索引
    var ageIndex = -1;
    // 流年索引
    var yearlyIndex = (0, utils_1.fixEarthlyBranchIndex)(yearly[1]);
    // 流月索引
    var monthlyIndex = -1;
    // 流日索引
    var dailyIndex = -1;
    // 流时索引
    var hourlyIndex = -1;
    // 小限天干
    var heavenlyStemOfAge = 'jia';
    // 小限地支
    var earthlyBranchOfAge = 'zi';
    // 查询大限索引
    $.palaces.some(function (_a, index) {
        var decadal = _a.decadal;
        if (nominalAge >= decadal.range[0] && nominalAge <= decadal.range[1]) {
            decadalIndex = index;
            heavenlyStemOfDecade = decadal.heavenlyStem;
            earthlyBranchOfDecade = decadal.earthlyBranch;
            return true;
        }
    });
    if (decadalIndex < 0) {
        // 如果大限索引小于0则证明还没有开始起运
        // 此时应该取小限运
        // 一命二财三疾厄	四岁夫妻五福德
        // 六岁事业为童限	专就宫垣视吉凶
        var palaces = ['命宫', '财帛', '疾厄', '夫妻', '福德', '官禄'];
        var targetIndex = palaces[nominalAge - 1];
        var targetPalace = $.palace(targetIndex);
        if (targetPalace) {
            isChildhood = true;
            decadalIndex = targetPalace.index;
            heavenlyStemOfDecade = targetPalace.heavenlyStem;
            earthlyBranchOfDecade = targetPalace.earthlyBranch;
        }
    }
    // 查询小限索引
    $.palaces.some(function (_a, index) {
        var ages = _a.ages, heavenlyStem = _a.heavenlyStem, earthlyBranch = _a.earthlyBranch;
        if (ages.includes(nominalAge)) {
            ageIndex = index;
            heavenlyStemOfAge = heavenlyStem;
            earthlyBranchOfAge = earthlyBranch;
            return true;
        }
    });
    // 获取流月索引, 流年地支逆数到生月所在宫位，再从该宫位顺数到生时，为正月所在宫位，之后每月一宫
    monthlyIndex = (0, utils_1.fixIndex)(yearlyIndex -
        (0, utils_1.fixEarthlyBranchIndex)($.rawDates.chineseDate.monthly[1]) +
        data_1.EARTHLY_BRANCHES.indexOf((0, i18n_1.kot)($.rawDates.chineseDate.hourly[1])) +
        (0, utils_1.fixEarthlyBranchIndex)(monthly[1]));
    // 获取流日索引
    dailyIndex = (0, utils_1.fixIndex)(monthlyIndex + _date.lunarDay - 1);
    // 获取流时索引
    hourlyIndex = (0, utils_1.fixIndex)(dailyIndex + data_1.EARTHLY_BRANCHES.indexOf((0, i18n_1.kot)(hourly[1], 'Earthly')));
    var scope = {
        solarDate: (0, lunar_lite_1.normalizeDateStr)(targetDate).slice(0, 3).join('-'),
        lunarDate: _date.toString(true),
        decadal: {
            index: decadalIndex,
            name: isChildhood ? (0, i18n_1.t)('childhood') : (0, i18n_1.t)('decadal'),
            heavenlyStem: (0, i18n_1.t)((0, i18n_1.kot)(heavenlyStemOfDecade, 'Heavnly')),
            earthlyBranch: (0, i18n_1.t)((0, i18n_1.kot)(earthlyBranchOfDecade, 'Earthly')),
            palaceNames: (0, palace_1.getPalaceNames)(decadalIndex),
            mutagen: (0, utils_1.getMutagensByHeavenlyStem)(heavenlyStemOfDecade),
            stars: (0, star_1.getHoroscopeStar)(heavenlyStemOfDecade, earthlyBranchOfDecade, 'decadal'),
        },
        age: {
            index: ageIndex,
            nominalAge: nominalAge,
            name: (0, i18n_1.t)('turn'),
            heavenlyStem: heavenlyStemOfAge,
            earthlyBranch: earthlyBranchOfAge,
            palaceNames: (0, palace_1.getPalaceNames)(ageIndex),
            mutagen: (0, utils_1.getMutagensByHeavenlyStem)(heavenlyStemOfAge),
        },
        yearly: {
            index: yearlyIndex,
            name: (0, i18n_1.t)('yearly'),
            heavenlyStem: (0, i18n_1.t)((0, i18n_1.kot)(yearly[0], 'Heavenly')),
            earthlyBranch: (0, i18n_1.t)((0, i18n_1.kot)(yearly[1], 'Earthly')),
            palaceNames: (0, palace_1.getPalaceNames)(yearlyIndex),
            mutagen: (0, utils_1.getMutagensByHeavenlyStem)(yearly[0]),
            stars: (0, star_1.getHoroscopeStar)(yearly[0], yearly[1], 'yearly'),
            yearlyDecStar: (0, star_1.getYearly12)(targetDate),
        },
        monthly: {
            index: monthlyIndex,
            name: (0, i18n_1.t)('monthly'),
            heavenlyStem: (0, i18n_1.t)((0, i18n_1.kot)(monthly[0], 'Heavenly')),
            earthlyBranch: (0, i18n_1.t)((0, i18n_1.kot)(monthly[1], 'Earthly')),
            palaceNames: (0, palace_1.getPalaceNames)(monthlyIndex),
            mutagen: (0, utils_1.getMutagensByHeavenlyStem)(monthly[0]),
        },
        daily: {
            index: dailyIndex,
            name: (0, i18n_1.t)('daily'),
            heavenlyStem: (0, i18n_1.t)((0, i18n_1.kot)(daily[0], 'Heavenly')),
            earthlyBranch: (0, i18n_1.t)((0, i18n_1.kot)(daily[1], 'Earthly')),
            palaceNames: (0, palace_1.getPalaceNames)(dailyIndex),
            mutagen: (0, utils_1.getMutagensByHeavenlyStem)(daily[0]),
        },
        hourly: {
            index: hourlyIndex,
            name: (0, i18n_1.t)('hourly'),
            heavenlyStem: (0, i18n_1.t)((0, i18n_1.kot)(hourly[0], 'Heavenly')),
            earthlyBranch: (0, i18n_1.t)((0, i18n_1.kot)(hourly[1], 'Earthly')),
            palaceNames: (0, palace_1.getPalaceNames)(hourlyIndex),
            mutagen: (0, utils_1.getMutagensByHeavenlyStem)(hourly[0]),
        },
    };
    return new FunctionalHoroscope_1.default(scope, $);
};
/**
 * 星盘类。
 *
 * 文档地址：https://docs.iztro.com/posts/astrolabe.html#functionalastrolabe
 */
var FunctionalAstrolabe = /** @class */ (function () {
    function FunctionalAstrolabe(data) {
        var _this = this;
        // 保存插件列表
        this.plugins = [];
        this.star = function (starName) {
            var targetStar;
            _this.palaces.some(function (p) {
                __spreadArray(__spreadArray(__spreadArray([], p.majorStars, true), p.minorStars, true), p.adjectiveStars, true).some(function (item) {
                    if ((0, i18n_1.kot)(item.name) === (0, i18n_1.kot)(starName)) {
                        targetStar = item;
                        targetStar.setPalace(p);
                        targetStar.setAstrolabe(_this);
                    }
                });
            });
            if (!targetStar) {
                throw new Error('invalid star name.');
            }
            return targetStar;
        };
        this.horoscope = function (targetDate, timeIndexOfTarget) {
            if (targetDate === void 0) { targetDate = new Date(); }
            return _getHoroscopeBySolarDate(_this, targetDate, timeIndexOfTarget);
        };
        this.palace = function (indexOrName) { return (0, analyzer_1.getPalace)(_this, indexOrName); };
        this.surroundedPalaces = function (indexOrName) {
            return (0, analyzer_1.getSurroundedPalaces)(_this, indexOrName);
        };
        /**
         * @deprecated 此方法已在`v1.2.0`废弃，请用下列方法替换
         *
         * @example
         *  // AS IS
         *  astrolabe.isSurrounded(0, ["紫微"]);
         *
         *  // TO BE
         *  astrolabe.surroundedPalaces(0).have(["紫微"]);
         */
        this.isSurrounded = function (indexOrName, stars) {
            return _this.surroundedPalaces(indexOrName).have(stars);
        };
        /**
         * @deprecated 此方法已在`v1.2.0`废弃，请用下列方法替换
         *
         * @example
         *  // AS IS
         *  astrolabe.isSurroundedOneOf(0, ["紫微"]);
         *
         *  // TO BE
         *  astrolabe.surroundedPalaces(0).haveOneOf(["紫微"]);
         */
        this.isSurroundedOneOf = function (indexOrName, stars) {
            return _this.surroundedPalaces(indexOrName).haveOneOf(stars);
        };
        /**
         * @deprecated 此方法已在`v1.2.0`废弃，请用下列方法替换
         *
         * @example
         *  // AS IS
         *  astrolabe.notSurrounded(0, ["紫微"]);
         *
         *  // TO BE
         *  astrolabe.surroundedPalaces(0).notHave(["紫微"]);
         */
        this.notSurrounded = function (indexOrName, stars) {
            return _this.surroundedPalaces(indexOrName).notHave(stars);
        };
        this.gender = data.gender;
        this.solarDate = data.solarDate;
        this.lunarDate = data.lunarDate;
        this.chineseDate = data.chineseDate;
        this.rawDates = data.rawDates;
        this.time = data.time;
        this.timeRange = data.timeRange;
        this.sign = data.sign;
        this.zodiac = data.zodiac;
        this.earthlyBranchOfBodyPalace = data.earthlyBranchOfBodyPalace;
        this.earthlyBranchOfSoulPalace = data.earthlyBranchOfSoulPalace;
        this.soul = data.soul;
        this.body = data.body;
        this.fiveElementsClass = data.fiveElementsClass;
        this.palaces = data.palaces;
        this.copyright = data.copyright;
        return this;
    }
    FunctionalAstrolabe.prototype.use = function (plugin) {
        this.plugins.push(plugin);
        plugin.apply(this);
    };
    return FunctionalAstrolabe;
}());
exports.default = FunctionalAstrolabe;

}, function(modId) { var map = {"../data":1718710892497,"../i18n":1718710892506,"../star":1718710892502,"../utils":1718710892576,"./analyzer":1718710892579,"./palace":1718710892505,"./FunctionalHoroscope":1718710892581,"./astro":1718710892577}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1718710892579, function(require, module, exports) {

var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mutagensToStars = exports.notSurroundedByStars = exports.isSurroundedByOneOfStars = exports.isSurroundedByStars = exports.hasOneOfStars = exports.notHaveStars = exports.notHaveMutagenInPalce = exports.hasMutagenInPlace = exports.hasStars = exports.getPalace = exports.getSurroundedPalaces = void 0;
var data_1 = require("../data");
var i18n_1 = require("../i18n");
var utils_1 = require("../utils");
var FunctionalSurpalaces_1 = require("./FunctionalSurpalaces");
var _concatStars = function () {
    var stars = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        stars[_i] = arguments[_i];
    }
    return Array.from(stars)
        .reduce(function (prev, next) {
        return __spreadArray(__spreadArray([], prev, true), next, true);
    }, [])
        .map(function (item) { return (0, i18n_1.kot)(item.name); });
};
var _includeAll = function (allStarsInPalace, targetStars) {
    var starKeys = targetStars.map(function (item) { return (0, i18n_1.kot)(item); });
    return starKeys.every(function (star) { return allStarsInPalace.includes(star); });
};
var _excludeAll = function (allStarsInPalace, targetStars) {
    var starKeys = targetStars.map(function (item) { return (0, i18n_1.kot)(item); });
    return starKeys.every(function (star) { return !allStarsInPalace.includes(star); });
};
var _includeOneOf = function (allStarsInPalace, targetStars) {
    var starKeys = targetStars.map(function (item) { return (0, i18n_1.kot)(item); });
    return starKeys.some(function (star) { return allStarsInPalace.includes(star); });
};
var _includeMutagen = function (stars, mutagen) {
    var mutagenKey = (0, i18n_1.kot)(mutagen);
    return stars.some(function (star) { return star.mutagen && (0, i18n_1.kot)(star.mutagen) === mutagenKey; });
};
var _getAllStarsInSurroundedPalaces = function (_a) {
    var target = _a.target, opposite = _a.opposite, wealth = _a.wealth, career = _a.career;
    return _concatStars(target.majorStars, target.minorStars, target.adjectiveStars, opposite.majorStars, opposite.minorStars, opposite.adjectiveStars, wealth.majorStars, wealth.minorStars, wealth.adjectiveStars, career.majorStars, career.minorStars, career.adjectiveStars);
};
/**
 * 获取三方四正宫位，所谓三方四正就是传入的目标宫位，以及其对宫，财帛位和官禄位，总共四个宫位
 *
 * @version v1.1.0
 *
 * @param $ 星盘实例
 * @param indexOrName 宫位索引或者宫位名称
 * @returns 三方四正宫位
 */
var getSurroundedPalaces = function ($, indexOrName) {
    // 获取目标宫位
    var palace = (0, exports.getPalace)($, indexOrName);
    if (!palace) {
        throw new Error('indexOrName is inccorrect.');
    }
    // 获取目标宫位索引
    var palaceIndex = (0, utils_1.fixEarthlyBranchIndex)(palace.earthlyBranch);
    // 获取对宫
    var palace6 = (0, exports.getPalace)($, (0, utils_1.fixIndex)(palaceIndex + 6));
    // 官禄位
    var palace4 = (0, exports.getPalace)($, (0, utils_1.fixIndex)(palaceIndex + 4));
    // 财帛位
    var palace8 = (0, exports.getPalace)($, (0, utils_1.fixIndex)(palaceIndex + 8));
    if (!palace4 || !palace6 || !palace8) {
        throw new Error('indexOrName is inccorrect.');
    }
    return new FunctionalSurpalaces_1.FunctionalSurpalaces({
        target: palace,
        wealth: palace8,
        opposite: palace6,
        career: palace4,
    });
};
exports.getSurroundedPalaces = getSurroundedPalaces;
/**
 * 获取星盘的某一个宫位
 *
 * @version v1.0.0
 *
 * @param $ 星盘实例
 * @param indexOrName 宫位索引或者宫位名称
 * @returns 宫位实例
 */
var getPalace = function ($, indexOrName) {
    var palace;
    if (typeof indexOrName === 'number') {
        if (indexOrName < 0 || indexOrName > 11) {
            throw new Error('invalid palace index.');
        }
        palace = $.palaces[indexOrName];
    }
    else {
        palace = $.palaces.find(function (item) {
            if ((0, i18n_1.kot)(indexOrName) === 'originalPalace' && item.isOriginalPalace) {
                return item;
            }
            if ((0, i18n_1.kot)(indexOrName) === 'bodyPalace' && item.isBodyPalace) {
                return item;
            }
            if ((0, i18n_1.kot)(item.name) === (0, i18n_1.kot)(indexOrName)) {
                return item;
            }
        });
    }
    palace === null || palace === void 0 ? void 0 : palace.setAstrolabe($);
    return palace;
};
exports.getPalace = getPalace;
/**
 * 判断某个宫位内是否有传入的星耀，要所有星耀都在宫位内才会返回true
 *
 * @version v1.0.0
 *
 * @param $ 宫位实例
 * @param stars 星耀
 * @returns true | false
 */
var hasStars = function ($, stars) {
    var allStarsInPalace = _concatStars($.majorStars, $.minorStars, $.adjectiveStars);
    return _includeAll(allStarsInPalace, stars);
};
exports.hasStars = hasStars;
/**
 * 判断指定宫位内是否有生年四化
 *
 * @version v1.2.0
 *
 * @param $ 宫位实例
 * @param mutagen 四化名称【禄｜权｜科｜忌】
 * @returns true | false
 */
var hasMutagenInPlace = function ($, mutagen) {
    var allStarsInPalace = __spreadArray(__spreadArray([], $.majorStars, true), $.minorStars, true);
    return _includeMutagen(allStarsInPalace, mutagen);
};
exports.hasMutagenInPlace = hasMutagenInPlace;
/**
 * 判断指定宫位内是否没有生年四化
 *
 * @version v1.2.0
 *
 * @param $ 宫位实例
 * @param mutagen 四化名称【禄｜权｜科｜忌】
 * @returns true | false
 */
var notHaveMutagenInPalce = function ($, mutagen) {
    return !(0, exports.hasMutagenInPlace)($, mutagen);
};
exports.notHaveMutagenInPalce = notHaveMutagenInPalce;
/**
 * 判断某个宫位内是否有传入的星耀，要所有星耀都不在宫位内才会返回true
 *
 * @version v1.0.0
 *
 * @param $ 宫位实例
 * @param stars 星耀
 * @returns true | false
 */
var notHaveStars = function ($, stars) {
    var allStarsInPalace = _concatStars($.majorStars, $.minorStars, $.adjectiveStars);
    return _excludeAll(allStarsInPalace, stars);
};
exports.notHaveStars = notHaveStars;
/**
 * 判断某个宫位内是否有传入星耀的其中一个，只要命中一个就会返回true
 *
 * @version v1.0.0
 *
 * @param $ 宫位实例
 * @param stars 星耀
 * @returns true | false
 */
var hasOneOfStars = function ($, stars) {
    var allStarsInPalace = _concatStars($.majorStars, $.minorStars, $.adjectiveStars);
    return _includeOneOf(allStarsInPalace, stars);
};
exports.hasOneOfStars = hasOneOfStars;
/**
 * 判断某一个宫位三方四正是否包含目标星耀，必须要全部包含才会返回true
 *
 * @param $ 三方四正的实例
 * @param stars 星耀名称数组
 * @returns true | false
 */
var isSurroundedByStars = function ($, stars) {
    var allStarsInPalace = _getAllStarsInSurroundedPalaces($);
    return _includeAll(allStarsInPalace, stars);
};
exports.isSurroundedByStars = isSurroundedByStars;
/**
 * 判断三方四正内是否有传入星耀的其中一个，只要命中一个就会返回true
 *
 * @param $ 三方四正的实例
 * @param stars 星耀名称数组
 * @returns true | false
 */
var isSurroundedByOneOfStars = function ($, stars) {
    var allStarsInPalace = _getAllStarsInSurroundedPalaces($);
    return _includeOneOf(allStarsInPalace, stars);
};
exports.isSurroundedByOneOfStars = isSurroundedByOneOfStars;
/**
 * 判断某一个宫位三方四正是否不含目标星耀，必须要全部都不在三方四正内含才会返回true
 *
 * @param $ 三方四正的实例
 * @param stars 星耀名称数组
 * @returns true | false
 */
var notSurroundedByStars = function ($, stars) {
    var allStarsInPalace = _getAllStarsInSurroundedPalaces($);
    return _excludeAll(allStarsInPalace, stars);
};
exports.notSurroundedByStars = notSurroundedByStars;
var mutagensToStars = function (heavenlyStem, mutagens) {
    var muts = Array.isArray(mutagens) ? mutagens : [mutagens];
    var stars = [];
    var mutagenStars = (0, utils_1.getMutagensByHeavenlyStem)(heavenlyStem);
    muts.forEach(function (withMutagen) {
        var mutagenIndex = data_1.MUTAGEN.indexOf((0, i18n_1.kot)(withMutagen));
        if (!mutagenStars[mutagenIndex]) {
            return;
        }
        stars.push(mutagenStars[mutagenIndex]);
    });
    return stars;
};
exports.mutagensToStars = mutagensToStars;

}, function(modId) { var map = {"../data":1718710892497,"../i18n":1718710892506,"../utils":1718710892576,"./FunctionalSurpalaces":1718710892580}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1718710892580, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.FunctionalSurpalaces = void 0;
var analyzer_1 = require("./analyzer");
var FunctionalSurpalaces = /** @class */ (function () {
    function FunctionalSurpalaces(_a) {
        var _this = this;
        var target = _a.target, opposite = _a.opposite, wealth = _a.wealth, career = _a.career;
        this.have = function (stars) { return (0, analyzer_1.isSurroundedByStars)(_this, stars); };
        this.notHave = function (stars) { return (0, analyzer_1.notSurroundedByStars)(_this, stars); };
        this.haveOneOf = function (stars) { return (0, analyzer_1.isSurroundedByOneOfStars)(_this, stars); };
        this.haveMutagen = function (mutagen) {
            return _this.target.hasMutagen(mutagen) ||
                _this.opposite.hasMutagen(mutagen) ||
                _this.wealth.hasMutagen(mutagen) ||
                _this.career.hasMutagen(mutagen);
        };
        this.notHaveMutagen = function (mutagen) { return !_this.haveMutagen(mutagen); };
        this.target = target;
        this.opposite = opposite;
        this.wealth = wealth;
        this.career = career;
    }
    return FunctionalSurpalaces;
}());
exports.FunctionalSurpalaces = FunctionalSurpalaces;

}, function(modId) { var map = {"./analyzer":1718710892579}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1718710892581, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var i18n_1 = require("../i18n");
var utils_1 = require("../utils");
var data_1 = require("../data");
var _getHoroscopePalaceIndex = function ($, scope, palaceName) {
    var palaceIndex = -1;
    if (scope === 'origin') {
        $.astrolabe.palaces.some(function (p, idx) {
            if (p.name === palaceName) {
                palaceIndex = idx;
                return true;
            }
            return false;
        });
    }
    else {
        palaceIndex = $[scope].palaceNames.indexOf(palaceName);
    }
    return palaceIndex;
};
var FunctionalHoroscope = /** @class */ (function () {
    function FunctionalHoroscope(data, astrolabe) {
        var _this = this;
        this.agePalace = function () {
            return _this.astrolabe.palace(_this.age.index);
        };
        this.palace = function (palaceName, scope) {
            if (scope === 'origin') {
                return _this.astrolabe.palace(palaceName);
            }
            var targetPalaceindex = _this[scope].palaceNames.indexOf(palaceName);
            return _this.astrolabe.palace(targetPalaceindex);
        };
        this.surroundPalaces = function (palaceName, scope) {
            if (scope === 'origin') {
                return _this.astrolabe.surroundedPalaces(palaceName);
            }
            var targetPalaceindex = _this[scope].palaceNames.indexOf(palaceName);
            return _this.astrolabe.surroundedPalaces(targetPalaceindex);
        };
        this.hasHoroscopeStars = function (palaceName, scope, horoscopeStar) {
            if (!_this.decadal.stars || !_this.yearly.stars) {
                return false;
            }
            var palaceIndex = _getHoroscopePalaceIndex(_this, scope, palaceName);
            var stars = (0, utils_1.mergeStars)(_this.decadal.stars, _this.yearly.stars)[palaceIndex];
            var starKeys = stars.map(function (item) { return (0, i18n_1.kot)(item.name); });
            var horoscopeStarKeys = horoscopeStar.map(function (item) { return (0, i18n_1.kot)(item); });
            return horoscopeStarKeys.every(function (star) { return starKeys.includes(star); });
        };
        this.notHaveHoroscopeStars = function (palaceName, scope, horoscopeStar) {
            if (!_this.decadal.stars || !_this.yearly.stars) {
                return false;
            }
            var palaceIndex = _getHoroscopePalaceIndex(_this, scope, palaceName);
            var stars = (0, utils_1.mergeStars)(_this.decadal.stars, _this.yearly.stars)[palaceIndex];
            var starKeys = stars.map(function (item) { return (0, i18n_1.kot)(item.name); });
            var horoscopeStarKeys = horoscopeStar.map(function (item) { return (0, i18n_1.kot)(item); });
            return horoscopeStarKeys.every(function (star) { return !starKeys.includes(star); });
        };
        this.hasOneOfHoroscopeStars = function (palaceName, scope, horoscopeStar) {
            if (!_this.decadal.stars || !_this.yearly.stars) {
                return false;
            }
            var palaceIndex = _getHoroscopePalaceIndex(_this, scope, palaceName);
            var stars = (0, utils_1.mergeStars)(_this.decadal.stars, _this.yearly.stars)[palaceIndex];
            var starKeys = stars.map(function (item) { return (0, i18n_1.kot)(item.name); });
            var horoscopeStarKeys = horoscopeStar.map(function (item) { return (0, i18n_1.kot)(item); });
            return horoscopeStarKeys.some(function (star) { return starKeys.includes(star); });
        };
        this.hasHoroscopeMutagen = function (palaceName, scope, horoscopeMutagen) {
            var _a, _b, _c, _d;
            if (scope === 'origin') {
                return false;
            }
            var palaceIndex = _getHoroscopePalaceIndex(_this, scope, palaceName);
            var majorStars = (_b = (_a = _this.astrolabe.palace(palaceIndex)) === null || _a === void 0 ? void 0 : _a.majorStars) !== null && _b !== void 0 ? _b : [];
            var minorStars = (_d = (_c = _this.astrolabe.palace(palaceIndex)) === null || _c === void 0 ? void 0 : _c.minorStars) !== null && _d !== void 0 ? _d : [];
            var stars = (0, utils_1.mergeStars)([majorStars], [minorStars])[0].map(function (star) { return (0, i18n_1.kot)(star.name); });
            var mutagenIndex = data_1.MUTAGEN.indexOf((0, i18n_1.kot)(horoscopeMutagen));
            return stars.includes((0, i18n_1.kot)(_this[scope].mutagen[mutagenIndex]));
        };
        this.lunarDate = data.lunarDate;
        this.solarDate = data.solarDate;
        this.decadal = data.decadal;
        this.age = data.age;
        this.yearly = data.yearly;
        this.monthly = data.monthly;
        this.daily = data.daily;
        this.hourly = data.hourly;
        this.astrolabe = astrolabe;
        return this;
    }
    return FunctionalHoroscope;
}());
exports.default = FunctionalHoroscope;

}, function(modId) { var map = {"../i18n":1718710892506,"../utils":1718710892576,"../data":1718710892497}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1718710892582, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var analyzer_1 = require("./analyzer");
/**
 * 宫位类。
 *
 * 文档地址：https://docs.iztro.com/posts/palace.html#functionalastrolabe
 */
var FunctionalPalace = /** @class */ (function () {
    function FunctionalPalace(data) {
        var _this = this;
        this.has = function (stars) { return (0, analyzer_1.hasStars)(_this, stars); };
        this.notHave = function (stars) { return (0, analyzer_1.notHaveStars)(_this, stars); };
        this.hasOneOf = function (stars) { return (0, analyzer_1.hasOneOfStars)(_this, stars); };
        this.hasMutagen = function (mutagen) { return (0, analyzer_1.hasMutagenInPlace)(_this, mutagen); };
        this.notHaveMutagen = function (mutagen) { return (0, analyzer_1.notHaveMutagenInPalce)(_this, mutagen); };
        this.isEmpty = function (excludeStars) {
            var _a;
            if ((_a = _this.majorStars) === null || _a === void 0 ? void 0 : _a.filter(function (star) { return star.type === 'major'; }).length) {
                return false;
            }
            if ((excludeStars === null || excludeStars === void 0 ? void 0 : excludeStars.length) && _this.hasOneOf(excludeStars)) {
                return false;
            }
            return true;
        };
        this.setAstrolabe = function (astro) { return (_this._astrolabe = astro); };
        this.astrolabe = function () { return _this._astrolabe; };
        this.fliesTo = function (to, withMutagens) {
            var _a;
            var toPalace = (_a = _this.astrolabe()) === null || _a === void 0 ? void 0 : _a.palace(to);
            if (!toPalace) {
                return false;
            }
            var heavenlyStem = _this.heavenlyStem;
            var stars = (0, analyzer_1.mutagensToStars)(heavenlyStem, withMutagens);
            if (!stars || !stars.length) {
                return false;
            }
            return toPalace.has(stars);
        };
        this.fliesOneOfTo = function (to, withMutagens) {
            var _a;
            var toPalace = (_a = _this.astrolabe()) === null || _a === void 0 ? void 0 : _a.palace(to);
            if (!toPalace) {
                return false;
            }
            var heavenlyStem = _this.heavenlyStem;
            var stars = (0, analyzer_1.mutagensToStars)(heavenlyStem, withMutagens);
            if (!stars || !stars.length) {
                return true;
            }
            return toPalace.hasOneOf(stars);
        };
        this.notFlyTo = function (to, withMutagens) {
            var _a;
            var toPalace = (_a = _this.astrolabe()) === null || _a === void 0 ? void 0 : _a.palace(to);
            if (!toPalace) {
                return false;
            }
            var heavenlyStem = _this.heavenlyStem;
            var stars = (0, analyzer_1.mutagensToStars)(heavenlyStem, withMutagens);
            if (!stars || !stars.length) {
                return true;
            }
            return toPalace.notHave(stars);
        };
        this.selfMutaged = function (withMutagens) {
            var heavenlyStem = _this.heavenlyStem;
            var stars = (0, analyzer_1.mutagensToStars)(heavenlyStem, withMutagens);
            return _this.has(stars);
        };
        this.selfMutagedOneOf = function (withMutagens) {
            var muts = [];
            if (!withMutagens || !withMutagens.length) {
                muts = ['禄', '权', '科', '忌'];
            }
            else {
                muts = withMutagens;
            }
            var heavenlyStem = _this.heavenlyStem;
            var stars = (0, analyzer_1.mutagensToStars)(heavenlyStem, muts);
            return _this.hasOneOf(stars);
        };
        this.notSelfMutaged = function (withMutagens) {
            var muts = [];
            if (!withMutagens || !withMutagens.length) {
                muts = ['禄', '权', '科', '忌'];
            }
            else {
                muts = withMutagens;
            }
            var heavenlyStem = _this.heavenlyStem;
            var stars = (0, analyzer_1.mutagensToStars)(heavenlyStem, muts);
            return _this.notHave(stars);
        };
        this.mutagedPlaces = function () {
            var heavenlyStem = _this.heavenlyStem;
            var astrolabe = _this.astrolabe();
            if (!astrolabe) {
                return [];
            }
            var stars = (0, analyzer_1.mutagensToStars)(heavenlyStem, ['禄', '权', '科', '忌']);
            return stars.map(function (star) { return astrolabe.star(star).palace(); });
        };
        this.index = data.index;
        this.name = data.name;
        this.isBodyPalace = data.isBodyPalace;
        this.isOriginalPalace = data.isOriginalPalace;
        this.heavenlyStem = data.heavenlyStem;
        this.earthlyBranch = data.earthlyBranch;
        this.majorStars = data.majorStars;
        this.minorStars = data.minorStars;
        this.adjectiveStars = data.adjectiveStars;
        this.changsheng12 = data.changsheng12;
        this.boshi12 = data.boshi12;
        this.jiangqian12 = data.jiangqian12;
        this.suiqian12 = data.suiqian12;
        this.decadal = data.decadal;
        this.ages = data.ages;
        return this;
    }
    return FunctionalPalace;
}());
exports.default = FunctionalPalace;

}, function(modId) { var map = {"./analyzer":1718710892579}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1718710892583, function(require, module, exports) {

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMajorStar = void 0;
var lunar_lite_1 = require("lunar-lite");
var _1 = require(".");
var i18n_1 = require("../i18n");
var utils_1 = require("../utils");
var FunctionalStar_1 = __importDefault(require("./FunctionalStar"));
var location_1 = require("./location");
var astro_1 = require("../astro");
/**
 * 安主星，寅宫下标为0，若下标对应的数组为空数组则表示没有星耀
 *
 * 安紫微诸星诀
 * - 紫微逆去天机星，隔一太阳武曲辰，
 * - 连接天同空二宫，廉贞居处方是真。
 *
 * 安天府诸星诀
 * - 天府顺行有太阴，贪狼而后巨门临，
 * - 随来天相天梁继，七杀空三是破军。
 *
 * @param solarDateStr 公历日期 YYYY-MM-DD
 * @param timeIndex 时辰索引【0～12】
 * @param fixLeap 是否调整农历闰月（若该月不是闰月则不会生效）
 * @returns {Array<Star[]>} 从寅宫开始每一个宫的星耀
 */
var getMajorStar = function (solarDateStr, timeIndex, fixLeap) {
    var _a = (0, location_1.getStartIndex)(solarDateStr, timeIndex, fixLeap), ziweiIndex = _a.ziweiIndex, tianfuIndex = _a.tianfuIndex;
    var yearly = (0, lunar_lite_1.getHeavenlyStemAndEarthlyBranchBySolarDate)(solarDateStr, timeIndex, {
        year: (0, astro_1.getConfig)().yearDivide,
    }).yearly;
    var stars = (0, _1.initStars)();
    var ziweiGroup = [
        'ziweiMaj',
        'tianjiMaj',
        '',
        'taiyangMaj',
        'wuquMaj',
        'tiantongMaj',
        '',
        '',
        'lianzhenMaj',
    ];
    var tianfuGroup = [
        'tianfuMaj',
        'taiyinMaj',
        'tanlangMaj',
        'jumenMaj',
        'tianxiangMaj',
        'tianliangMaj',
        'qishaMaj',
        '',
        '',
        '',
        'pojunMaj',
    ];
    ziweiGroup.forEach(function (s, i) {
        // 安紫微星系，起始宫逆时针安
        if (s !== '') {
            stars[(0, utils_1.fixIndex)(ziweiIndex - i)].push(new FunctionalStar_1.default({
                name: (0, i18n_1.t)(s),
                type: 'major',
                scope: 'origin',
                brightness: (0, utils_1.getBrightness)((0, i18n_1.t)(s), (0, utils_1.fixIndex)(ziweiIndex - i)),
                mutagen: (0, utils_1.getMutagen)((0, i18n_1.t)(s), yearly[0]),
            }));
        }
    });
    tianfuGroup.forEach(function (s, i) {
        if (s !== '') {
            stars[(0, utils_1.fixIndex)(tianfuIndex + i)].push(new FunctionalStar_1.default({
                name: (0, i18n_1.t)(s),
                type: 'major',
                scope: 'origin',
                brightness: (0, utils_1.getBrightness)((0, i18n_1.t)(s), (0, utils_1.fixIndex)(tianfuIndex + i)),
                mutagen: (0, utils_1.getMutagen)((0, i18n_1.t)(s), yearly[0]),
            }));
        }
    });
    return stars;
};
exports.getMajorStar = getMajorStar;

}, function(modId) { var map = {".":1718710892502,"../i18n":1718710892506,"../utils":1718710892576,"./FunctionalStar":1718710892584,"./location":1718710892503,"../astro":1718710892504}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1718710892584, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var i18n_1 = require("../i18n");
/**
 * 星耀类。
 *
 * 文档地址：https://docs.iztro.com/posts/star.html
 */
var FunctionalStar = /** @class */ (function () {
    function FunctionalStar(data) {
        var _this = this;
        this.oppositePalace = function () {
            if (!_this._palace || !_this._astrolabe) {
                return undefined;
            }
            return _this._astrolabe.surroundedPalaces(_this._palace.name).opposite;
        };
        this.setPalace = function (p) {
            _this._palace = p;
        };
        this.setAstrolabe = function (a) {
            _this._astrolabe = a;
        };
        this.palace = function () { return _this._palace; };
        this.surroundedPalaces = function () {
            var _a;
            if (!_this._palace) {
                return undefined;
            }
            return (_a = _this._astrolabe) === null || _a === void 0 ? void 0 : _a.surroundedPalaces(_this._palace.name);
        };
        this.withMutagen = function (mutagen) {
            if (Array.isArray(mutagen)) {
                return mutagen.some(function (mtg) { return _this.mutagen && (0, i18n_1.kot)(mtg) === (0, i18n_1.kot)(_this.mutagen); });
            }
            return !!_this.mutagen && (0, i18n_1.kot)(mutagen) === (0, i18n_1.kot)(_this.mutagen);
        };
        this.withBrightness = function (brightness) {
            if (Array.isArray(brightness)) {
                return brightness.some(function (brit) { return _this.brightness != undefined && (0, i18n_1.kot)(brit) === (0, i18n_1.kot)(_this.brightness); });
            }
            return !!_this.brightness && (0, i18n_1.kot)(brightness) === (0, i18n_1.kot)(_this.brightness);
        };
        this.name = data.name;
        this.type = data.type;
        this.scope = data.scope;
        this.brightness = data.brightness;
        this.mutagen = data.mutagen;
        return this;
    }
    return FunctionalStar;
}());
exports.default = FunctionalStar;

}, function(modId) { var map = {"../i18n":1718710892506}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1718710892585, function(require, module, exports) {

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMinorStar = void 0;
var lunar_lite_1 = require("lunar-lite");
var _1 = require(".");
var i18n_1 = require("../i18n");
var utils_1 = require("../utils");
var FunctionalStar_1 = __importDefault(require("./FunctionalStar"));
var location_1 = require("./location");
var astro_1 = require("../astro");
/**
 * 安14辅星，寅宫下标为0，若下标对应的数组为空数组则表示没有星耀
 *
 * @param solarDateStr 阳历日期字符串
 * @param timeIndex 时辰索引【0～12】
 * @param fixLeap 是否修复闰月，假如当月不是闰月则不生效
 * @returns 14辅星
 */
var getMinorStar = function (solarDateStr, timeIndex, fixLeap) {
    var stars = (0, _1.initStars)();
    var yearly = (0, lunar_lite_1.getHeavenlyStemAndEarthlyBranchBySolarDate)(solarDateStr, timeIndex, {
        year: (0, astro_1.getConfig)().yearDivide,
    }).yearly;
    var monthIndex = (0, utils_1.fixLunarMonthIndex)(solarDateStr, timeIndex, fixLeap);
    // 此处获取到的是索引，下标是从0开始的，所以需要加1
    var _a = (0, location_1.getZuoYouIndex)(monthIndex + 1), zuoIndex = _a.zuoIndex, youIndex = _a.youIndex;
    var _b = (0, location_1.getChangQuIndex)(timeIndex), changIndex = _b.changIndex, quIndex = _b.quIndex;
    var _c = (0, location_1.getKuiYueIndex)(yearly[0]), kuiIndex = _c.kuiIndex, yueIndex = _c.yueIndex;
    var _d = (0, location_1.getHuoLingIndex)(yearly[1], timeIndex), huoIndex = _d.huoIndex, lingIndex = _d.lingIndex;
    var _e = (0, location_1.getKongJieIndex)(timeIndex), kongIndex = _e.kongIndex, jieIndex = _e.jieIndex;
    var _f = (0, location_1.getLuYangTuoMaIndex)(yearly[0], yearly[1]), luIndex = _f.luIndex, yangIndex = _f.yangIndex, tuoIndex = _f.tuoIndex, maIndex = _f.maIndex;
    stars[zuoIndex].push(new FunctionalStar_1.default({
        name: (0, i18n_1.t)('zuofuMin'),
        type: 'soft',
        scope: 'origin',
        brightness: (0, utils_1.getBrightness)('左辅', zuoIndex),
        mutagen: (0, utils_1.getMutagen)('左辅', yearly[0]),
    }));
    stars[youIndex].push(new FunctionalStar_1.default({
        name: (0, i18n_1.t)('youbiMin'),
        type: 'soft',
        scope: 'origin',
        brightness: (0, utils_1.getBrightness)('右弼', youIndex),
        mutagen: (0, utils_1.getMutagen)('右弼', yearly[0]),
    }));
    stars[changIndex].push(new FunctionalStar_1.default({
        name: (0, i18n_1.t)('wenchangMin'),
        type: 'soft',
        scope: 'origin',
        brightness: (0, utils_1.getBrightness)('文昌', changIndex),
        mutagen: (0, utils_1.getMutagen)('文昌', yearly[0]),
    }));
    stars[quIndex].push(new FunctionalStar_1.default({
        name: (0, i18n_1.t)('wenquMin'),
        type: 'soft',
        scope: 'origin',
        brightness: (0, utils_1.getBrightness)('文曲', quIndex),
        mutagen: (0, utils_1.getMutagen)('文曲', yearly[0]),
    }));
    stars[kuiIndex].push(new FunctionalStar_1.default({
        name: (0, i18n_1.t)('tiankuiMin'),
        type: 'soft',
        scope: 'origin',
        brightness: (0, utils_1.getBrightness)('天魁', kuiIndex),
    }));
    stars[yueIndex].push(new FunctionalStar_1.default({
        name: (0, i18n_1.t)('tianyueMin'),
        type: 'soft',
        scope: 'origin',
        brightness: (0, utils_1.getBrightness)('天钺', yueIndex),
    }));
    stars[luIndex].push(new FunctionalStar_1.default({
        name: (0, i18n_1.t)('lucunMin'),
        type: 'lucun',
        scope: 'origin',
        brightness: (0, utils_1.getBrightness)('禄存', luIndex),
    }));
    stars[maIndex].push(new FunctionalStar_1.default({
        name: (0, i18n_1.t)('tianmaMin'),
        type: 'tianma',
        scope: 'origin',
        brightness: (0, utils_1.getBrightness)('天马', maIndex),
    }));
    stars[kongIndex].push(new FunctionalStar_1.default({
        name: (0, i18n_1.t)('dikongMin'),
        type: 'tough',
        scope: 'origin',
        brightness: (0, utils_1.getBrightness)('地空', kongIndex),
    }));
    stars[jieIndex].push(new FunctionalStar_1.default({
        name: (0, i18n_1.t)('dijieMin'),
        type: 'tough',
        scope: 'origin',
        brightness: (0, utils_1.getBrightness)('地劫', jieIndex),
    }));
    stars[huoIndex].push(new FunctionalStar_1.default({
        name: (0, i18n_1.t)('huoxingMin'),
        type: 'tough',
        scope: 'origin',
        brightness: (0, utils_1.getBrightness)('火星', huoIndex),
    }));
    stars[lingIndex].push(new FunctionalStar_1.default({
        name: (0, i18n_1.t)('lingxingMin'),
        type: 'tough',
        scope: 'origin',
        brightness: (0, utils_1.getBrightness)('铃星', lingIndex),
    }));
    stars[yangIndex].push(new FunctionalStar_1.default({
        name: (0, i18n_1.t)('qingyangMin'),
        type: 'tough',
        scope: 'origin',
        brightness: (0, utils_1.getBrightness)('擎羊', yangIndex),
    }));
    stars[tuoIndex].push(new FunctionalStar_1.default({
        name: (0, i18n_1.t)('tuoluoMin'),
        type: 'tough',
        scope: 'origin',
        brightness: (0, utils_1.getBrightness)('陀罗', tuoIndex),
    }));
    return stars;
};
exports.getMinorStar = getMinorStar;

}, function(modId) { var map = {".":1718710892502,"../i18n":1718710892506,"../utils":1718710892576,"./FunctionalStar":1718710892584,"./location":1718710892503,"../astro":1718710892504}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1718710892586, function(require, module, exports) {

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAdjectiveStar = void 0;
var lunar_lite_1 = require("lunar-lite");
var _1 = require(".");
var i18n_1 = require("../i18n");
var FunctionalStar_1 = __importDefault(require("./FunctionalStar"));
var location_1 = require("./location");
var astro_1 = require("../astro");
/**
 * 安杂耀
 *
 * @param solarDateStr 阳历日期字符串
 * @param timeIndex 时辰索引【0～12】
 * @param fixLeap 是否修复闰月，假如当月不是闰月则不生效
 * @returns 38杂耀
 */
var getAdjectiveStar = function (solarDateStr, timeIndex, fixLeap) {
    var stars = (0, _1.initStars)();
    var yearly = (0, lunar_lite_1.getHeavenlyStemAndEarthlyBranchBySolarDate)(solarDateStr, timeIndex, {
        year: (0, astro_1.getConfig)().yearDivide,
    }).yearly;
    var yearlyIndex = (0, location_1.getYearlyStarIndex)(solarDateStr, timeIndex, fixLeap);
    var monthlyIndex = (0, location_1.getMonthlyStarIndex)(solarDateStr, timeIndex, fixLeap);
    var dailyIndex = (0, location_1.getDailyStarIndex)(solarDateStr, timeIndex);
    var timelyIndex = (0, location_1.getTimelyStarIndex)(timeIndex);
    var _a = (0, location_1.getLuanXiIndex)(yearly[1]), hongluanIndex = _a.hongluanIndex, tianxiIndex = _a.tianxiIndex;
    stars[hongluanIndex].push(new FunctionalStar_1.default({ name: (0, i18n_1.t)('hongluan'), type: 'flower', scope: 'origin' }));
    stars[tianxiIndex].push(new FunctionalStar_1.default({ name: (0, i18n_1.t)('tianxi'), type: 'flower', scope: 'origin' }));
    stars[monthlyIndex.tianyaoIndex].push(new FunctionalStar_1.default({ name: (0, i18n_1.t)('tianyao'), type: 'flower', scope: 'origin' }));
    stars[yearlyIndex.xianchiIndex].push(new FunctionalStar_1.default({ name: (0, i18n_1.t)('xianchi'), type: 'flower', scope: 'origin' }));
    stars[monthlyIndex.yuejieIndex].push(new FunctionalStar_1.default({ name: (0, i18n_1.t)('jieshen'), type: 'helper', scope: 'origin' }));
    stars[dailyIndex.santaiIndex].push(new FunctionalStar_1.default({ name: (0, i18n_1.t)('santai'), type: 'adjective', scope: 'origin' }));
    stars[dailyIndex.bazuoIndex].push(new FunctionalStar_1.default({ name: (0, i18n_1.t)('bazuo'), type: 'adjective', scope: 'origin' }));
    stars[dailyIndex.enguangIndex].push(new FunctionalStar_1.default({ name: (0, i18n_1.t)('engguang'), type: 'adjective', scope: 'origin' }));
    stars[dailyIndex.tianguiIndex].push(new FunctionalStar_1.default({ name: (0, i18n_1.t)('tiangui'), type: 'adjective', scope: 'origin' }));
    stars[yearlyIndex.longchiIndex].push(new FunctionalStar_1.default({ name: (0, i18n_1.t)('longchi'), type: 'adjective', scope: 'origin' }));
    stars[yearlyIndex.fenggeIndex].push(new FunctionalStar_1.default({ name: (0, i18n_1.t)('fengge'), type: 'adjective', scope: 'origin' }));
    stars[yearlyIndex.tiancaiIndex].push(new FunctionalStar_1.default({ name: (0, i18n_1.t)('tiancai'), type: 'adjective', scope: 'origin' }));
    stars[yearlyIndex.tianshouIndex].push(new FunctionalStar_1.default({ name: (0, i18n_1.t)('tianshou'), type: 'adjective', scope: 'origin' }));
    stars[timelyIndex.taifuIndex].push(new FunctionalStar_1.default({ name: (0, i18n_1.t)('taifu'), type: 'adjective', scope: 'origin' }));
    stars[timelyIndex.fenggaoIndex].push(new FunctionalStar_1.default({ name: (0, i18n_1.t)('fenggao'), type: 'adjective', scope: 'origin' }));
    stars[monthlyIndex.tianwuIndex].push(new FunctionalStar_1.default({ name: (0, i18n_1.t)('tianwu'), type: 'adjective', scope: 'origin' }));
    stars[yearlyIndex.huagaiIndex].push(new FunctionalStar_1.default({ name: (0, i18n_1.t)('huagai'), type: 'adjective', scope: 'origin' }));
    stars[yearlyIndex.tianguanIndex].push(new FunctionalStar_1.default({ name: (0, i18n_1.t)('tianguan'), type: 'adjective', scope: 'origin' }));
    stars[yearlyIndex.tianfuIndex].push(new FunctionalStar_1.default({ name: (0, i18n_1.t)('tianfu'), type: 'adjective', scope: 'origin' }));
    stars[yearlyIndex.tianchuIndex].push(new FunctionalStar_1.default({ name: (0, i18n_1.t)('tianchu'), type: 'adjective', scope: 'origin' }));
    stars[monthlyIndex.tianyueIndex].push(new FunctionalStar_1.default({ name: (0, i18n_1.t)('tianyue'), type: 'adjective', scope: 'origin' }));
    stars[yearlyIndex.tiandeIndex].push(new FunctionalStar_1.default({ name: (0, i18n_1.t)('tiande'), type: 'adjective', scope: 'origin' }));
    stars[yearlyIndex.yuedeIndex].push(new FunctionalStar_1.default({ name: (0, i18n_1.t)('yuede'), type: 'adjective', scope: 'origin' }));
    stars[yearlyIndex.tiankongIndex].push(new FunctionalStar_1.default({ name: (0, i18n_1.t)('tiankong'), type: 'adjective', scope: 'origin' }));
    stars[yearlyIndex.xunkongIndex].push(new FunctionalStar_1.default({ name: (0, i18n_1.t)('xunkong'), type: 'adjective', scope: 'origin' }));
    stars[yearlyIndex.jieluIndex].push(new FunctionalStar_1.default({ name: (0, i18n_1.t)('jielu'), type: 'adjective', scope: 'origin' }));
    stars[yearlyIndex.kongwangIndex].push(new FunctionalStar_1.default({ name: (0, i18n_1.t)('kongwang'), type: 'adjective', scope: 'origin' }));
    stars[yearlyIndex.guchenIndex].push(new FunctionalStar_1.default({ name: (0, i18n_1.t)('guchen'), type: 'adjective', scope: 'origin' }));
    stars[yearlyIndex.guasuIndex].push(new FunctionalStar_1.default({ name: (0, i18n_1.t)('guasu'), type: 'adjective', scope: 'origin' }));
    stars[yearlyIndex.feilianIndex].push(new FunctionalStar_1.default({ name: (0, i18n_1.t)('feilian'), type: 'adjective', scope: 'origin' }));
    stars[yearlyIndex.posuiIndex].push(new FunctionalStar_1.default({ name: (0, i18n_1.t)('posui'), type: 'adjective', scope: 'origin' }));
    stars[monthlyIndex.tianxingIndex].push(new FunctionalStar_1.default({ name: (0, i18n_1.t)('tianxing'), type: 'adjective', scope: 'origin' }));
    stars[monthlyIndex.yinshaIndex].push(new FunctionalStar_1.default({ name: (0, i18n_1.t)('yinsha'), type: 'adjective', scope: 'origin' }));
    stars[yearlyIndex.tiankuIndex].push(new FunctionalStar_1.default({ name: (0, i18n_1.t)('tianku'), type: 'adjective', scope: 'origin' }));
    stars[yearlyIndex.tianxuIndex].push(new FunctionalStar_1.default({ name: (0, i18n_1.t)('tianxu'), type: 'adjective', scope: 'origin' }));
    stars[yearlyIndex.tianshiIndex].push(new FunctionalStar_1.default({ name: (0, i18n_1.t)('tianshi'), type: 'adjective', scope: 'origin' }));
    stars[yearlyIndex.tianshangIndex].push(new FunctionalStar_1.default({ name: (0, i18n_1.t)('tianshang'), type: 'adjective', scope: 'origin' }));
    return stars;
};
exports.getAdjectiveStar = getAdjectiveStar;

}, function(modId) { var map = {".":1718710892502,"../i18n":1718710892506,"./FunctionalStar":1718710892584,"./location":1718710892503,"../astro":1718710892504}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1718710892587, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.getYearly12 = exports.getJiangqian12StartIndex = exports.getBoShi12 = exports.getchangsheng12 = exports.getChangesheng12StartIndex = void 0;
var lunar_lite_1 = require("lunar-lite");
var astro_1 = require("../astro");
var data_1 = require("../data");
var i18n_1 = require("../i18n");
var utils_1 = require("../utils");
var location_1 = require("./location");
/**
 * 获取长生12神开始的宫位索引
 *
 * - 水二局长生在申
 * - 木三局长生在亥
 * - 金四局长生在巳
 * - 土五局长生在申
 * - 火六局长生在寅，
 * @param fiveElementClassName 五行局
 * @returns 长生12神开始的索引
 */
var getChangesheng12StartIndex = function (fiveElementClassName) {
    var fiveElementClass = (0, i18n_1.kot)(fiveElementClassName);
    var startIdx = 0;
    switch (data_1.FiveElementsClass[fiveElementClass]) {
        case 2: {
            startIdx = (0, utils_1.fixEarthlyBranchIndex)('shen');
            break;
        }
        case 3: {
            startIdx = (0, utils_1.fixEarthlyBranchIndex)('hai');
            break;
        }
        case 4: {
            startIdx = (0, utils_1.fixEarthlyBranchIndex)('si');
            break;
        }
        case 5: {
            startIdx = (0, utils_1.fixEarthlyBranchIndex)('shen');
            break;
        }
        case 6: {
            startIdx = (0, utils_1.fixEarthlyBranchIndex)('yin');
            break;
        }
    }
    return startIdx;
};
exports.getChangesheng12StartIndex = getChangesheng12StartIndex;
/**
 * 长生12神。
 *
 * 阳男阴女顺行，阴男阳女逆行，安长生、沐浴、冠带、临官、帝旺、衰、病、死、墓、绝 、胎、养。
 *
 * @param solarDateStr 阳历日期字符串
 * @param timeIndex 时辰索引【0～12】
 * @param gender 性别【男｜女】
 * @param fixLeap 是否修复闰月，假如当月不是闰月则不生效
 * @returns 长生12神从寅宫开始的顺序
 */
var getchangsheng12 = function (solarDateStr, timeIndex, gender, fixLeap) {
    var changsheng12 = [];
    var genderKey = (0, i18n_1.kot)(gender);
    var yearly = (0, lunar_lite_1.getHeavenlyStemAndEarthlyBranchBySolarDate)(solarDateStr, 0, {
        year: (0, astro_1.getConfig)().yearDivide,
    }).yearly;
    var earthlyBranchNameOfYear = yearly[1];
    var earthlyBranchOfYear = (0, i18n_1.kot)(earthlyBranchNameOfYear, 'Earthly');
    // 获取命宫干支，需要通过命宫干支计算五行局
    var _a = (0, astro_1.getSoulAndBody)(solarDateStr, timeIndex, fixLeap), heavenlyStemOfSoul = _a.heavenlyStemOfSoul, earthlyBranchOfSoul = _a.earthlyBranchOfSoul;
    // 获取五行局，通过五行局获取起运年龄
    var fiveElementClass = (0, astro_1.getFiveElementsClass)(heavenlyStemOfSoul, earthlyBranchOfSoul);
    // 长生12神顺序
    var stars = [
        'changsheng',
        'muyu',
        'guandai',
        'linguan',
        'diwang',
        'shuai',
        'bing',
        'si',
        'mu',
        'jue',
        'tai',
        'yang',
    ];
    var startIdx = (0, exports.getChangesheng12StartIndex)(fiveElementClass);
    for (var i = 0; i < stars.length; i++) {
        var idx = 0;
        if (data_1.GENDER[genderKey] === data_1.earthlyBranches[earthlyBranchOfYear].yinYang) {
            idx = (0, utils_1.fixIndex)(i + startIdx);
        }
        else {
            idx = (0, utils_1.fixIndex)(startIdx - i);
        }
        changsheng12[idx] = (0, i18n_1.t)(stars[i]);
    }
    return changsheng12;
};
exports.getchangsheng12 = getchangsheng12;
/**
 * 博士12神。
 *
 * 从禄存起，阳男阴女顺行，阴男阳女逆行。安博士、力士、青龙、小耗、将军、奏书、飞廉、喜神、病符、大耗、伏兵、官府。
 *
 * @param solarDateStr 阳历日期字符串
 * @param gender 性别【男｜女】
 * @returns 博士12神从寅宫开始的顺序
 */
var getBoShi12 = function (solarDateStr, gender) {
    var genderKey = (0, i18n_1.kot)(gender);
    var yearly = (0, lunar_lite_1.getHeavenlyStemAndEarthlyBranchBySolarDate)(solarDateStr, 0, {
        year: (0, astro_1.getConfig)().yearDivide,
    }).yearly;
    var heavenlyStemNameOfYear = yearly[0], earthlyBranchNameOfYear = yearly[1];
    var earthlyBranchOfYear = (0, i18n_1.kot)(earthlyBranchNameOfYear, 'Earthly');
    // 博士12神的顺序
    var stars = [
        'boshi',
        'lishi',
        'qinglong',
        'xiaohao',
        'jiangjun',
        'zhoushu',
        'faylian',
        'xishen',
        'bingfu',
        'dahao',
        'fubing',
        'guanfu',
    ];
    var luIndex = (0, location_1.getLuYangTuoMaIndex)(heavenlyStemNameOfYear, earthlyBranchNameOfYear).luIndex;
    var boshi12 = [];
    for (var i = 0; i < stars.length; i++) {
        // 阳男阴女顺行，阴男阳女逆部
        var idx = (0, utils_1.fixIndex)(data_1.GENDER[genderKey] === data_1.earthlyBranches[earthlyBranchOfYear].yinYang ? luIndex + i : luIndex - i);
        boshi12[idx] = (0, i18n_1.t)(stars[i]);
    }
    return boshi12;
};
exports.getBoShi12 = getBoShi12;
/**
 * 安流年将前诸星（按流年地支起将星）
 * - 寅午戍年将星午，申子辰年子将星，
 * - 巳酉丑将酉上驻，亥卯未将卯上停。
 * - 攀鞍岁驿并息神，华盖劫煞灾煞轻，
 * - 天煞指背咸池续，月煞亡神次第行。
 *
 * @param earthlyBranchName 地支
 * @returns 将前诸星起始索引
 */
var getJiangqian12StartIndex = function (earthlyBranchName) {
    var jqStartIdx = -1;
    var earthlyBranchOfYear = (0, i18n_1.kot)(earthlyBranchName, 'Earthly');
    if (['yinEarthly', 'wuEarthly', 'xuEarthly'].includes(earthlyBranchOfYear)) {
        jqStartIdx = (0, utils_1.fixEarthlyBranchIndex)('woo');
    }
    else if (['shenEarthly', 'ziEarthly', 'chenEarthly'].includes(earthlyBranchOfYear)) {
        jqStartIdx = (0, utils_1.fixEarthlyBranchIndex)('zi');
    }
    else if (['siEarthly', 'youEarthly', 'chouEarthly'].includes(earthlyBranchOfYear)) {
        jqStartIdx = (0, utils_1.fixEarthlyBranchIndex)('you');
    }
    else if (['haiEarthly', 'maoEarthly', 'weiEarthly'].includes(earthlyBranchOfYear)) {
        jqStartIdx = (0, utils_1.fixEarthlyBranchIndex)('mao');
    }
    return (0, utils_1.fixIndex)(jqStartIdx);
};
exports.getJiangqian12StartIndex = getJiangqian12StartIndex;
/**
 * 流年诸星。
 *
 * - 流年岁前诸星
 *   - 流年地支起岁建，岁前首先是晦气，
 *   - 丧门贯索及官符，小耗大耗龙德继，
 *   - 白虎天德连吊客，病符居后须当记。
 *
 * - 安流年将前诸星（按流年地支起将星）
 *   - 寅午戍年将星午，申子辰年子将星，
 *   - 巳酉丑将酉上驻，亥卯未将卯上停。
 *   - 攀鞍岁驿并息神，华盖劫煞灾煞轻，
 *   - 天煞指背咸池续，月煞亡神次第行。
 *
 * @param solarDateStr 阳历日期字符串
 * @returns 流年诸星从寅宫开始的顺序
 */
var getYearly12 = function (solarDateStr) {
    var jiangqian12 = [];
    var suiqian12 = [];
    var yearly = (0, lunar_lite_1.getHeavenlyStemAndEarthlyBranchBySolarDate)(solarDateStr, 0, {
        // 流年神煞应该用立春为界，但为了满足不同流派的需求允许配置
        year: (0, astro_1.getConfig)().horoscopeDivide,
    }).yearly;
    var ts12shen = [
        'suijian',
        'huiqi',
        'sangmen',
        'guansuo',
        'gwanfu',
        'xiaohao',
        'dahao',
        'longde',
        'baihu',
        'tiande',
        'diaoke',
        'bingfu',
    ];
    for (var i = 0; i < ts12shen.length; i++) {
        var idx = (0, utils_1.fixIndex)((0, utils_1.fixEarthlyBranchIndex)(yearly[1]) + i);
        suiqian12[idx] = (0, i18n_1.t)(ts12shen[i]);
    }
    var jq12shen = [
        'jiangxing',
        'panan',
        'suiyi',
        'xiishen',
        'huagai',
        'jiesha',
        'zhaisha',
        'tiansha',
        'zhibei',
        'xianchi',
        'yuesha',
        'wangshen',
    ];
    var jiangqian12StartIndex = (0, exports.getJiangqian12StartIndex)(yearly[1]);
    for (var i = 0; i < jq12shen.length; i++) {
        var idx = (0, utils_1.fixIndex)(jiangqian12StartIndex + i);
        jiangqian12[idx] = (0, i18n_1.t)(jq12shen[i]);
    }
    return { suiqian12: suiqian12, jiangqian12: jiangqian12 };
};
exports.getYearly12 = getYearly12;

}, function(modId) { var map = {"../astro":1718710892504,"../data":1718710892497,"../i18n":1718710892506,"../utils":1718710892576,"./location":1718710892503}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1718710892588, function(require, module, exports) {

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHoroscopeStar = void 0;
var _1 = require(".");
var i18n_1 = require("../i18n");
var FunctionalStar_1 = __importDefault(require("./FunctionalStar"));
var location_1 = require("./location");
/**
 * 获取流耀
 *
 * 魁钺昌曲禄羊陀马鸾喜
 *
 * @param heavenlyStem 天干
 * @param earthlyBranch 地支
 */
var getHoroscopeStar = function (heavenlyStem, earthlyBranch, scope) {
    var _a = (0, location_1.getKuiYueIndex)(heavenlyStem), kuiIndex = _a.kuiIndex, yueIndex = _a.yueIndex;
    var _b = (0, location_1.getChangQuIndexByHeavenlyStem)(heavenlyStem), changIndex = _b.changIndex, quIndex = _b.quIndex;
    var _c = (0, location_1.getLuYangTuoMaIndex)(heavenlyStem, earthlyBranch), luIndex = _c.luIndex, yangIndex = _c.yangIndex, tuoIndex = _c.tuoIndex, maIndex = _c.maIndex;
    var _d = (0, location_1.getLuanXiIndex)(earthlyBranch), hongluanIndex = _d.hongluanIndex, tianxiIndex = _d.tianxiIndex;
    var stars = (0, _1.initStars)();
    if (scope === 'yearly') {
        var nianjieIndex = (0, location_1.getNianjieIndex)(earthlyBranch);
        stars[nianjieIndex].push(new FunctionalStar_1.default({ name: (0, i18n_1.t)('nianjie'), type: 'helper', scope: 'yearly' }));
        stars[kuiIndex].push(new FunctionalStar_1.default({ name: (0, i18n_1.t)('liukui'), type: 'soft', scope: scope }));
        stars[yueIndex].push(new FunctionalStar_1.default({ name: (0, i18n_1.t)('liuyue'), type: 'soft', scope: scope }));
        stars[changIndex].push(new FunctionalStar_1.default({ name: (0, i18n_1.t)('liuchang'), type: 'soft', scope: scope }));
        stars[quIndex].push(new FunctionalStar_1.default({ name: (0, i18n_1.t)('liuqu'), type: 'soft', scope: scope }));
        stars[luIndex].push(new FunctionalStar_1.default({ name: (0, i18n_1.t)('liulu'), type: 'lucun', scope: scope }));
        stars[yangIndex].push(new FunctionalStar_1.default({ name: (0, i18n_1.t)('liuyang'), type: 'tough', scope: scope }));
        stars[tuoIndex].push(new FunctionalStar_1.default({ name: (0, i18n_1.t)('liutuo'), type: 'tough', scope: scope }));
        stars[maIndex].push(new FunctionalStar_1.default({ name: (0, i18n_1.t)('liuma'), type: 'tianma', scope: scope }));
        stars[hongluanIndex].push(new FunctionalStar_1.default({ name: (0, i18n_1.t)('liuluan'), type: 'flower', scope: scope }));
        stars[tianxiIndex].push(new FunctionalStar_1.default({ name: (0, i18n_1.t)('liuxi'), type: 'flower', scope: scope }));
    }
    else {
        stars[kuiIndex].push(new FunctionalStar_1.default({ name: (0, i18n_1.t)('yunkui'), type: 'soft', scope: scope }));
        stars[yueIndex].push(new FunctionalStar_1.default({ name: (0, i18n_1.t)('yunyue'), type: 'soft', scope: scope }));
        stars[changIndex].push(new FunctionalStar_1.default({ name: (0, i18n_1.t)('yunchang'), type: 'soft', scope: scope }));
        stars[quIndex].push(new FunctionalStar_1.default({ name: (0, i18n_1.t)('yunqu'), type: 'soft', scope: scope }));
        stars[luIndex].push(new FunctionalStar_1.default({ name: (0, i18n_1.t)('yunlu'), type: 'lucun', scope: scope }));
        stars[yangIndex].push(new FunctionalStar_1.default({ name: (0, i18n_1.t)('yunyang'), type: 'tough', scope: scope }));
        stars[tuoIndex].push(new FunctionalStar_1.default({ name: (0, i18n_1.t)('yuntuo'), type: 'tough', scope: scope }));
        stars[maIndex].push(new FunctionalStar_1.default({ name: (0, i18n_1.t)('yunma'), type: 'tianma', scope: scope }));
        stars[hongluanIndex].push(new FunctionalStar_1.default({ name: (0, i18n_1.t)('yunluan'), type: 'flower', scope: scope }));
        stars[tianxiIndex].push(new FunctionalStar_1.default({ name: (0, i18n_1.t)('yunxi'), type: 'flower', scope: scope }));
    }
    return stars;
};
exports.getHoroscopeStar = getHoroscopeStar;

}, function(modId) { var map = {".":1718710892502,"../i18n":1718710892506,"./FunctionalStar":1718710892584,"./location":1718710892503}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1718710892496);
})()
//miniprogram-npm-outsideDeps=["lunar-lite","i18next","dayjs"]
//# sourceMappingURL=index.js.map