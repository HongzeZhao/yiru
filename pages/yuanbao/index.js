// pages/flower/index.js
const {
  getCachedUserInfo
} = require('../utils/cached');
const {
  astro
} = require('iztro');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loadingModel: false,
    buttonText: '点击我开始分析',
    showAgreements: false,
    showContentArea: false,
    flowerSlots: [],
    flowerText: "",
    tips: ["马云，坚持创新，打造阿里巴巴帝国。",
      "乔布斯，追求完美，苹果改变世界。",
      "巴菲特，价值投资，成为股神。",
      "比尔·盖茨，技术革新，微软领航。",
      "贝索斯，客户至上，亚马逊崛起。",
      "扎克伯格，社交网络，Facebook成功。",
      "马斯克，颠覆传统，特斯拉领先。",
      "李嘉诚，地产巨头，多元化投资。",
      "王健林，商业地产，万达集团壮大。",
      "马化腾，社交平台，腾讯帝国扩张。",
      "任正非，技术创新，华为全球领先。",
      "雷军，互联网思维，小米快速成长。",
      "张一鸣，信息流创新，字节跳动崛起。",
      "刘强东，电商物流，京东效率提升。",
      "许家印，地产转型，恒大集团多元化。",
      "潘石屹，SOHO中国，地产创新。",
      "王石，万科地产，坚持质量第一。",
      "李彦宏，百度搜索引擎，信息获取便捷。",
      "丁磊，网易多元化，游戏音乐领先。",
      "周鸿祎，360安全，网络安全先锋。",
      "陈天桥，盛大网络，游戏产业巨头。",
      "黄铮，拼多多，社交电商创新。",
      "李书福，吉利汽车，国产车崛起。",
      "董明珠，格力电器，质量与服务并重。",
      "张朝阳，搜狐门户，互联网早期开拓者。",
      "何小鹏，小鹏汽车，智能电动车新势力。",
      "李宁，李宁品牌，体育产业创新。",
      "陈欧，聚美优品，电商垂直化。",
      "罗永浩，锤子科技，手机设计创新。",
      "徐小平，新东方，教育产业巨头。",
      "俞敏洪，新东方，教育改变人生。",
      "罗振宇，得到App，知识付费先驱。",
      "杨惠妍，碧桂园，地产行业女强人。",
      "张近东，苏宁易购，线上线下融合。",
      "孙宏斌，融创中国，地产创新者。",
      "张欣，SOHO中国，地产界女性力量。",
      "黄峥，拼多多，社交电商新模式。",
      "陈峰，海航集团，航空旅游产业巨头。",
      "张瑞敏，海尔集团，家电行业创新者。",
      "柳传志，联想集团，电脑产业先锋。",
      "王兴，美团点评，生活服务巨头。",
      "程维，滴滴出行，出行服务创新。",
      "张一鸣，字节跳动，内容分发创新。",
      "李国庆，当当网，电商图书先行者。",
      "陈年，凡客诚品，互联网服装品牌。",
      "周群飞，蓝思科技，手机玻璃供应商。",
      "刘永好，新希望集团，农业产业巨头。",
      "张兰，俏江南，餐饮业品牌创新。",
      "朱新礼，汇源果汁，饮料行业领先。",
      "陈峰，海航集团，多元化航空旅游。",
      "李东生，TCL集团，家电行业全球化。",
      "刘庆峰，科大讯飞，语音技术领先。",
      "张朝阳，搜狐，互联网内容创新。",
      "陈天桥，盛大游戏，游戏产业巨头。",
      "张近东，苏宁，零售业创新者。",
      "王石，万科，房地产行业标杆。",
      "李书福，吉利，汽车产业创新者。",
      "董明珠，格力，家电行业领导者。",
      "许家印，恒大，地产多元化发展。",
      "马化腾，腾讯，互联网巨头。",
      "刘强东，京东，电商物流创新。",
      "张一鸣，字节跳动，内容创新巨头。",
      "黄铮，拼多多，社交电商新势力。",
      "雷军，小米，互联网硬件创新。",
      "任正非，华为，通信技术领先。",
      "马斯克，SpaceX，太空探索创新。",
      "贝索斯，亚马逊，电商巨头。",
      "比尔·盖茨，微软，软件行业先锋。",
      "巴菲特，伯克希尔哈撒韦，投资大师。",
      "扎克伯格，Facebook，社交网络巨头。",
      "乔布斯，苹果，产品设计创新。",
      "贝索斯，蓝色起源，太空探索新势力。",
      "马斯克，Neuralink，脑机接口创新。",
      "贝索斯，华盛顿邮报，媒体产业变革。",
      "马斯克，Boring Company，隧道交通创新。",
      "贝索斯，亚马逊网络服务，云计算领先。",
      "马斯克，SolarCity，太阳能创新。",
      "贝索斯，Kindle，电子书阅读器先驱。",
      "马斯克，Hyperloop，高速交通概念。",
      "贝索斯，亚马逊Prime，会员服务创新。",
      "乔布斯，皮克斯动画，动画电影创新。",
      "马斯克，OpenAI，人工智能研究。",
      "贝索斯，Amazon Go，无人零售创新。",
      "乔布斯，NeXT，计算机系统创新。",
      "马斯克，Gigafactory，电池生产创新。",
      "贝索斯，Amazon Echo，智能家居先驱。",
      "乔布斯，iPod，数字音乐革命。",
      "马斯克，Falcon Heavy，火箭技术突破。",
      "贝索斯，Amazon Studios，电影制作创新。",
      "乔布斯，iPhone，智能手机革命。",
      "马斯克，Model 3，电动汽车普及。",
      "贝索斯，Blue Moon，月球探索计划。",
      "乔布斯，iPad，平板电脑创新。",
      "马斯克，Starlink，全球互联网接入。",
      "贝索斯，AmazonBasics，自有品牌创新。",
      "乔布斯，Apple Watch，智能穿戴设备。",
      "马斯克，Cybertruck，电动皮卡创新。",
      "贝索斯，Amazon Fresh，生鲜电商服务。",
      "乔布斯，iTunes，数字媒体分发。",
      "马斯克，Tesla Semi，电动卡车创新。"
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const data = wx.getStorageSync('yuanbao.data');
    if (data && data.text) {
      this.setData({
        modelExplain: data.text,
        renderMeihua: data.renderMeihua,
        showContentArea: true
      });
    }

    // 获取今日缓存
    const key = this.getTodayRandsKey();
    const todayRands = wx.getStorageSync(key);
    if (todayRands) {
      console.log(`loaded rands ${JSON.stringify(todayRands)} from cache: ${key}`);
      this.setData({
        rands: todayRands
      });
    } else {
      this.setData({
        rands: [
          Math.floor(Math.random() * 1000),
          Math.floor(Math.random() * 1000),
          Math.floor(Math.random() * 1000)
        ]
      });
      wx.setStorageSync(this.getTodayRandsKey(), this.data.rands);
    }
  },

  getTodayRandsKey() {
    const now = new Date();
    const today = `${now.getFullYear()}${now.getMonth()+1}${now.getDate()}`;
    return `yuanbao.today.rands.${today}`;
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {},

  onDivinedFlowerCount(meihuaDivined) {
    const luck = meihuaDivined.benGua.shengke.luck;
    let flowerCount = 5;
    if (luck === '凶') {
      flowerCount = 0;
    } else if (luck == '小凶') {
      flowerCount = 1;
    } else if (luck == '平') {
      flowerCount = Math.floor(Math.random() * 2) + 2;
    } else if (luck == '吉') {
      flowerCount = 4;
    }
    let text = `你今天获得了${flowerCount}颗元宝`;
    if (flowerCount === 0) {
      text = '该干啥干啥吧，今天你没有元宝！';
    } else if (flowerCount === 5) {
      text = '今天你元宝塞满，财运爆棚！';
    }
    this.setData({
      flowerSlots: this.getTaohuaArray(flowerCount),
      flowerText: text
    });
  },

  getTaohuaArray(taohuaCount) {
    let taohuaList = [];
    for (let i = 0; i < taohuaCount; i++) {
      taohuaList.push({
        icon: 'yuanbao.png',
        style: 'opacity: 1'
      });
    }
    for (let i = taohuaCount; i < 5; i++) {
      taohuaList.push({
        icon: 'yuanbao.png',
        style: 'opacity: 0.3'
      });
    }
    return taohuaList;
  },

  onDivineTapped(e) {
    this.setData({
      showAgreements: true
    });
  },

  onAgreementsUpdated(e) {
    if (!e.detail.value) return;

    this.setData({
      loadingModel: true,
      showContentArea: true
    });

    const cached = getCachedUserInfo();
    let payload = {
      secret: '911',
      channel: 'yuanbao',
      meihua: this.data.meihua,
      ...cached
    };
    console.log(`yuanbao.divine.cached: ${JSON.stringify(cached)}`);
    if (cached.birthday && cached.birthhour && cached.gender) {
      payload.astrolabe = astro.bySolar(cached.birthday, parseInt(cached.birthhour), cached.gender, true, 'zh-CN');
      payload.horoscope = payload.astrolabe.horoscope(new Date());
    }

    let that = this;
    wx.request({
      url: 'https://uireal.com/yiru/yuanbao', // 必须是HTTPS
      method: 'POST',
      data: payload,
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        that.setData({
          modelExplain: res.data.text,
          renderMeihua: res.data.renderMeihua,
          loadingModel: false
        })
        wx.setStorageSync('yuanbao.data', res.data);
        console.log(res.data)
      },
      fail(err) {
        that.setData({
          modelExplain: err.toString(),
          loadingModel: false
        })
        console.log(err)
      }
    });
  },

  onMeihuaDivined(e) {
    this.setData({
      meihua: e.detail
    });
    this.onDivinedFlowerCount(e.detail);
    console.log(`yuanbao divined: ${JSON.stringify(e.detail)}`);
  },


  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {
    this.setData({
      showShareGuide: false
    });
  }
})