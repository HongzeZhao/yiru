module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1718377418472, function(require, module, exports) {

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
__exportStar(require("./misc"), exports);
__exportStar(require("./ganzhi"), exports);
__exportStar(require("./convertor"), exports);

}, function(modId) {var map = {"./misc":1718377418473,"./ganzhi":1718377418476,"./convertor":1718377418475}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1718377418473, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.getTotalDaysOfLunarMonth = exports.getZodiac = exports.getSign = void 0;
var lunar_typescript_1 = require("lunar-javascript");
var constants_1 = require("./constants");
var convertor_1 = require("./convertor");
/**
 * 获取星座
 *
 * @param  solarDateStr [description]
 * @return 星座
 */
var getSign = function (solarDateStr) {
    var _a = (0, convertor_1.normalizeDateStr)(solarDateStr), year = _a[0], month = _a[1], day = _a[2];
    return lunar_typescript_1.Solar.fromYmd(year, month, day).getXingZuo() + "座";
};
exports.getSign = getSign;
/**
 * 通过年支获取生肖
 *
 * @param earthlyBranchOfYear 年支
 * @example
 * const zodiac = calendar.getZodiac("卯") ;// zodiac='兔'
 */
var getZodiac = function (earthlyBranchOfYear) {
    return constants_1.ZODIAC[constants_1.EARTHLY_BRANCHES.indexOf(earthlyBranchOfYear)];
};
exports.getZodiac = getZodiac;
/**
 * 按照传入阳历日期获取该月农历月份天数
 *
 * @param solarDateStr 阳历日期
 * @returns {number} 日期天数
 */
var getTotalDaysOfLunarMonth = function (solarDateStr) {
    var _a;
    var _b = (0, convertor_1.solar2lunar)(solarDateStr), lunarYear = _b.lunarYear, lunarMonth = _b.lunarMonth, isLeap = _b.isLeap;
    var month = lunar_typescript_1.LunarMonth.fromYm(lunarYear, isLeap ? 0 - lunarMonth : lunarMonth);
    return (_a = month === null || month === void 0 ? void 0 : month.getDayCount()) !== null && _a !== void 0 ? _a : 0;
};
exports.getTotalDaysOfLunarMonth = getTotalDaysOfLunarMonth;

}, function(modId) { var map = {"./constants":1718377418474,"./convertor":1718377418475}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1718377418474, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.ZODIAC = exports.EARTHLY_BRANCHES = exports.HEAVENLY_STEMS = void 0;
/**
 * 天干速查表
 */
exports.HEAVENLY_STEMS = [
    "甲",
    "乙",
    "丙",
    "丁",
    "戊",
    "己",
    "庚",
    "辛",
    "壬",
    "癸",
];
/**
 * 地支速查表
 */
exports.EARTHLY_BRANCHES = [
    "子",
    "丑",
    "寅",
    "卯",
    "辰",
    "巳",
    "午",
    "未",
    "申",
    "酉",
    "戌",
    "亥",
];
/** 十二生肖（按地支顺序） */
exports.ZODIAC = [
    "鼠",
    "牛",
    "虎",
    "兔",
    "龙",
    "蛇",
    "马",
    "羊",
    "猴",
    "鸡",
    "狗",
    "猪",
];

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1718377418475, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.lunar2solar = exports.solar2lunar = exports.normalizeDateStr = void 0;
var lunar_typescript_1 = require("lunar-javascript");
/**
 * 将日期字符串 YYYY-MM-DD 或者一个 Date 对象分割为 [YYYY, M, D, H, m, s]
 * 当参数为字符串时分割符可以是 `-` `.` 或者 `/`
 *
 * @param dateStr 日期字符串或者 Date 对象
 * @returns [年, 月, 日]
 * @example
 * normalizeDateStr('2023-07-31'); // [2023, 7, 31]
 */
var normalizeDateStr = function (date) {
    if (date instanceof Date) {
        return [
            date.getFullYear(),
            date.getMonth() + 1,
            date.getDate(),
            date.getHours(),
            date.getMinutes(),
            date.getSeconds(),
        ];
    }
    return date
        .split(/[ ]+/)
        .map(function (item) { return item.split(/[-:/.]/); })
        .reduce(function (prev, next) { return prev.concat(next); }, [])
        .map(function (item) { return Math.abs(+item); });
};
exports.normalizeDateStr = normalizeDateStr;
/**
 * 公历转农历，年份需要在【1900~2100】之间，并且日期必须在1900-1-31之后
 *
 * @param dateStr 公历日期 YYYY-MM-DD格式的字符串或者Date对象
 * @returns LunarDate
 */
var solar2lunar = function (dateStr) {
    var _a = (0, exports.normalizeDateStr)(dateStr), year = _a[0], month = _a[1], day = _a[2];
    var solar = lunar_typescript_1.Solar.fromYmd(year, month, day);
    var lunar = solar.getLunar();
    var lunarYear = lunar.getYear();
    var lunarMonth = Math.abs(lunar.getMonth());
    var lunarDay = lunar.getDay();
    var isLeap = lunar.getMonth() < 0;
    return {
        lunarYear: lunarYear,
        lunarMonth: lunarMonth,
        lunarDay: lunarDay,
        isLeap: isLeap,
        toString: function (toCnStr) {
            if (toCnStr) {
                return lunar.toString();
            }
            return "".concat(lunarYear, "-").concat(lunarMonth, "-").concat(lunarDay);
        },
    };
};
exports.solar2lunar = solar2lunar;
/**
 * 农历转公历
 *
 * @param dateStr 农历日期 YYYY-MM-DD
 * @param isLeapMonth 是否闰月，若该月不是闰月，会忽略该参数
 * @returns SolarDate
 */
var lunar2solar = function (dateStr, isLeapMonth) {
    var _a = (0, exports.normalizeDateStr)(dateStr), year = _a[0], month = _a[1], day = _a[2];
    var lunar = lunar_typescript_1.Lunar.fromYmd(year, month, day);
    var lunarYear = lunar_typescript_1.LunarYear.fromYear(lunar.getYear());
    var leapMonth = lunarYear.getLeapMonth();
    if (leapMonth > 0 && leapMonth === month && isLeapMonth) {
        lunar = lunar_typescript_1.Lunar.fromYmd(year, 0 - month, day);
    }
    var solar = lunar.getSolar();
    var solarYear = solar.getYear();
    var solarMonth = solar.getMonth();
    var solarDay = solar.getDay();
    return {
        solarYear: solarYear,
        solarMonth: solarMonth,
        solarDay: solarDay,
        toString: function () {
            return "".concat(solarYear, "-").concat(solarMonth, "-").concat(solarDay);
        },
    };
};
exports.lunar2solar = lunar2solar;

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1718377418476, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.getHeavenlyStemAndEarthlyBranchBySolarDate = exports.getHeavenlyStemAndEarthlyBranchByLunarDate = void 0;
var convertor_1 = require("./convertor");
var lunar_typescript_1 = require("lunar-javascript");
/**
 * 通过农历获取生辰干支
 *
 * @param dateStr 农历日期 YYYY-MM-DD
 * @param timeIndex 时辰索引【0～12】
 * @param isLeap 是否为闰月
 * @returns HeavenlyStemAndEarthlyBranchResult
 */
var getHeavenlyStemAndEarthlyBranchByLunarDate = function (dateStr, timeIndex, isLeap, options) {
    if (options === void 0) { options = { year: "normal" }; }
    var solarDate = (0, convertor_1.lunar2solar)(dateStr, isLeap);
    return (0, exports.getHeavenlyStemAndEarthlyBranchBySolarDate)(solarDate.toString(), timeIndex, options);
};
exports.getHeavenlyStemAndEarthlyBranchByLunarDate = getHeavenlyStemAndEarthlyBranchByLunarDate;
/**
 * 将阳历转化为干支纪年
 *
 * @param dateStr 公历日期 YYYY-MM-DD
 * @param timeIndex 时辰索引【0～12】
 * @returns HeavenlyStemAndEarthlyBranchResult
 */
var getHeavenlyStemAndEarthlyBranchBySolarDate = function (dateStr, timeIndex, options) {
    if (options === void 0) { options = { year: "exact" }; }
    var _a = (0, convertor_1.normalizeDateStr)(dateStr), year = _a[0], month = _a[1], date = _a[2];
    var solar = lunar_typescript_1.Solar.fromYmdHms(year, month, date, Math.max(timeIndex * 2 - 1, 0), 30, 0);
    var lunar = solar.getLunar();
    var yearlyGan = (options === null || options === void 0 ? void 0 : options.year) === "normal"
        ? lunar.getYearGan()
        : lunar.getYearGanByLiChun();
    var yearlyZhi = (options === null || options === void 0 ? void 0 : options.year) === "normal"
        ? lunar.getYearZhi()
        : lunar.getYearZhiByLiChun();
    var yearly = [
        yearlyGan,
        yearlyZhi,
    ];
    var monthly = [
        lunar.getMonthGanExact(),
        lunar.getMonthZhiExact(),
    ];
    var daily = [
        lunar.getDayGanExact(),
        lunar.getDayZhiExact(),
    ];
    var hourly = [
        lunar.getTimeGan(),
        lunar.getTimeZhi(),
    ];
    return {
        yearly: yearly,
        monthly: monthly,
        daily: daily,
        hourly: hourly,
        toString: function () {
            return "".concat(yearly.join(""), " ").concat(monthly.join(""), " ").concat(daily.join(""), " ").concat(hourly.join(""));
        },
    };
};
exports.getHeavenlyStemAndEarthlyBranchBySolarDate = getHeavenlyStemAndEarthlyBranchBySolarDate;

}, function(modId) { var map = {"./convertor":1718377418475}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1718377418472);
})()
//miniprogram-npm-outsideDeps=["lunar-javascript"]
//# sourceMappingURL=index.js.map