// pages/flower/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        loadingModel: false,
        buttonText: '点击我开始分析',
        showAgreements: false,
        showContentArea: false,
        renderMeihua: false,
        flowerSlots: [],
        flowerText: "",
        tips: ["微笑，是最美的语言。",
            "眼神交汇，心动的开始。",
            "勇敢一点，爱就在眼前。",
            "真诚相待，让爱自然流淌。",
            "倾听，是爱的第一步。",
            "共同爱好，拉近彼此距离。",
            "保持神秘，让人好奇。",
            "温柔问候，暖人心扉。",
            "适时的赞美，让人心动。",
            "保持自我，吸引对的人。",
            "爱心早餐，温暖一天的开始。",
            "雨天共伞，浪漫同行。",
            "轻轻触碰，传递情感。",
            "真诚的关心，胜过千言万语。",
            "记住喜好，细节见真情。",
            "共同规划，未来有你。",
            "勇敢表白，不留遗憾。",
            "保持乐观，爱会降临。",
            "适时的幽默，化解尴尬。",
            "真诚的眼神，胜过言语。",
            "一起旅行，发现彼此美好。",
            "阅读同一本书，共享思想。",
            "一起做饭，品味生活。",
            "相互尊重，是爱的基石。",
            "学会包容，让爱更宽广。",
            "一起运动，健康相伴。",
            "适时的惊喜，增添乐趣。",
            "信任对方，是爱的保障。",
            "一起学习，共同成长。",
            "保持独立，也给爱空间。",
            "一起看日出，感受希望。",
            "一起看星星，许下愿望。",
            "一起散步，享受宁静。",
            "一起看电影，共享情感。",
            "一起做公益，传递爱心。",
            "一起规划未来，共筑梦想。",
            "一起克服困难，增进信任。",
            "一起庆祝小成就，分享喜悦。",
            "一起面对挑战，增强默契。",
            "一起回忆过去，珍惜现在。",
            "一起规划旅行，探索未知。",
            "一起做决定，共同承担。",
            "一起享受美食，品味生活。",
            "一起看日落，感受宁静。",
            "一起参加派对，享受欢乐。",
            "一起做手工，创造回忆。",
            "一起解决问题，增进理解。",
            "一起读书，共享知识。",
            "一起做瑜伽，身心和谐。",
            "一起做志愿者，传递正能量。",
            "一起看海，感受宽广。",
            "一起登山，挑战自我。",
            "一起种花，培育爱情。",
            "一起画画，表达情感。",
            "一起写诗，抒发情感。",
            "一起跳舞，释放激情。",
            "一起唱歌，分享快乐。",
            "一起写日记，记录点滴。",
            "一起做游戏，找回童真。",
            "一起养宠物，培养爱心。",
            "一起看展览，拓宽视野。",
            "一起做慈善，传递温暖。",
            "一起做运动，保持活力。",
            "一起做料理，享受成果。",
            "一起看日出，迎接新的一天。",
            "一起看日落，享受宁静时刻。",
            "一起看云卷云舒，感受自然之美。",
            "一起听雨，享受宁静。",
            "一起听风，感受自由。",
            "一起听海浪，感受宽广。",
            "一起看花开花落，感受生命的循环。",
            "一起看月圆月缺，感受时间的流转。",
            "一起看流星，许下心愿。",
            "一起看彩虹，感受希望。",
            "一起看雪花，感受纯洁。",
            "一起看烟火，感受瞬间的美丽。",
            "一起看星空，感受宇宙的浩瀚。",
            "一起看日出日落，感受时间的流逝。",
            "一起看四季更替，感受生命的多彩。",
            "一起看潮起潮落，感受自然的韵律。",
            "一起听鸟鸣，感受清晨的宁静。",
            "一起听溪流，感受自然的和谐。",
            "一起听海浪声，感受大海的呼唤。",
            "一起听风铃声，感受宁静的美好。",
            "一起听雨滴声，感受雨的诗意。",
            "一起听钟声，感受时间的庄严。",
            "一起听琴声，感受音乐的魅力。",
            "一起听歌声，感受歌声的温暖。",
            "一起听笑声，感受快乐的氛围。",
            "一起听心跳声，感受彼此的存在。",
            "一起感受四季的变化，享受生活的节奏。",
            "一起感受时间的流转，珍惜每一刻。",
            "一起感受生活的点滴，发现平凡中的美好。",
            "一起感受彼此的心跳，体验心动的瞬间。",
            "一起感受爱的力量，让心灵更加靠近。",
            "一起感受生活的温暖，让爱充满每个角落。",
            "一起感受彼此的陪伴，让生活更加丰富多彩。",
            "一起感受彼此的支持，让爱更加坚定。",
            "一起感受彼此的关怀，让爱更加温馨。",
            "一起感受彼此的默契，让爱更加和谐。"
        ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        const data = wx.getStorageSync('flower.data');
        if (data && data.text) {
            this.setData({
                modelExplain: data.text,
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
    onReady() {
    },

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
        let text = `你今天获得了${flowerCount}朵桃花`;
        if (flowerCount === 0) {
            text = '该干啥干啥吧，今天你没有桃花！';
        } else if (flowerCount === 5) {
            text = '今天你满是桃花，你的春天要来了！';
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
                icon: 'taohua.png',
                style: 'opacity: 1'
            });
        }
        for (let i = taohuaCount; i < 5; i++) {
            taohuaList.push({
                icon: 'taohua.png',
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
    
        let that = this;
        wx.request({
            url: 'https://uireal.com/divine', // 必须是HTTPS
            method: 'POST',
            data: {
              secret: '911',
              channel: 'flower',
              meihua: that.data.meihua
            },
            header: {
              'content-type': 'application/json' // 默认值
            },
            success(res) {
                that.setData({
                    modelExplain: res.data.text,
                    renderMeihua: res.data.renderMeihua,
                    loadingModel: false
                })
              wx.setStorageSync('flower.data', res.data);
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
        console.log(`meihua divined: ${JSON.stringify(e.detail)}`);
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