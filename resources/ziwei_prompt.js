const { astro } = require('iztro');

/**
 * 计算时辰序号
 * @param {string} hourMin format HH:mm
 * @returns {int} 早子时为0，返回值范围是 0 ~ 12
 */
function getHourIndexFromTime(hourMin) {
    const parts = hourMin.split(':');
    if (parts.length === 2) {
        const hour = parseInt(parts[0]);
        return hour === 0 ? 0 : parseInt((hour + 1) / 2);
    }
    return -1;
}

/**
 * 根据阳历的生日、性别生成紫微斗数星盘的描述
 * @param {string} dateStr format yyyy-MM-dd
 * @param {string} timeStr format HH:mm
 * @param {string} gender  format 男/女
 * @returns 
 */
function getZiweiAstrolabe(dateStr, timeStr, gender) {
    const astrolabe = astro.bySolar(dateStr, getHourIndexFromTime(timeStr), gender, true, 'zh-CN');

    function getStarListInfo(stars) {
        if (stars.length <= 0) return '为空';
        let infos = [];
        stars.forEach(s => {
            let info = s.name;
            if (s.brightness) {
                info += `(${s.brightness})`;
            }
            if (s.mutagen) {
                info += `化${s.mutagen}`;
            }
            infos.push(info);
        });
        return '为' + infos.join('、');
    }

    let desc = `我的生辰八字为${astrolabe.chineseDate}，${astrolabe.gender}性，${astrolabe.sign}，属${astrolabe.zodiac}，${astrolabe.fiveElementsClass}，命主${astrolabe.soul}，身主${astrolabe.body}。\n`;

    desc += "# 紫微斗数星盘信息：\n";
    astrolabe.palaces.forEach(p => {
        desc += `## ${p.name}宫（${p.heavenlyStem}${p.earthlyBranch}宫）`;
        if (p.isBodyPalace) {
            desc += '，身宫';
        }
        if (p.isOriginalPalace) {
            desc += '，来因宫';
        }
        desc += '\n';

        const majorStars = getStarListInfo(p.majorStars);
        const minorStars = getStarListInfo(p.minorStars);
        const adjectiveStars = getStarListInfo(p.adjectiveStars);
        desc += `主星${majorStars}，辅星${minorStars}，杂曜${adjectiveStars}。\n`;
        desc += `长生十二神为${p.changsheng12}，博士十二神为${p.boshi12}，将前十二神为${p.jiangqian12}，岁前十二神为${p.suiqian12}。\n`;
        desc += `大限干支为${p.decadal.heavenlyStem}${p.decadal.earthlyBranch}，${p.decadal.range[0]}岁到${p.decadal.range[1]}岁。\n`;
        let ages = [];
        p.ages.forEach(age => ages.push(`${age}岁`));
        desc += '小限为：' + ages.join(',') + '。\n\n';
    });

    return {
        desc: desc,
        astrolabe: astrolabe
    };
}

module.exports = {
    getZiweiAstrolabe: getZiweiAstrolabe
  }