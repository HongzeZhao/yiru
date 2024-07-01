// pages/components/yr-button/index.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    text: {
      type: String,
      value: ""
    },
    loadingText: {
      type: String,
      value: ""
    },
    icon: {
      type: String,
      value: ""
    },
    loading: {
      type: Boolean,
      value: true
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTapped(e) {
      if (!this.data.loading) {
        this.triggerEvent('click');
      }
    }
  }
})