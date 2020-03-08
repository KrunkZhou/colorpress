/*
 * 
 * WordPres版微信小程序
 * author: jianbo
 * organization: 守望轩  www.watch-life.net
 * github:    https://github.com/iamxjb/winxin-app-watch-life.net
 * 技术支持微信号：iamxjb
 * Copyright (c) 2017 https://www.watch-life.net All rights reserved.
 * 
 */


App({

  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    // 小程序主动更新
    this.updateManager();
    wx.getSystemInfo({
      success: e => {
        this.globalData.StatusBar = e.statusBarHeight;
        let custom = wx.getMenuButtonBoundingClientRect();
        this.globalData.Custom = custom;
        this.globalData.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
      }
    })


    this.getSkin();

  },
  //设置tabBar -- 默认模式
  setblueTabBar() {
    wx.setTabBarItem({
      index: 0,
      "iconPath": "/images/home.png",
      "selectedIconPath": "/images/home_on.png",
      "text": "首页"
    })
    wx.setTabBarItem({
      index: 1,
      "iconPath": "/images/topic.png",
      "selectedIconPath": "/images/topic_on.png",
      "text": "专题"
    })
    wx.setTabBarItem({
      index: 2,
      "iconPath": "/images/rank.png",
      "selectedIconPath": "/images/rank_on.png",
      "text": "排行"
    })
    wx.setTabBarItem({
      index: 3,
      "iconPath": "/images/my.png",
      "selectedIconPath": "/images/my_on.png",
      "text": "我的"
    })
    wx.setTabBarStyle({
      color: '#959595',
      selectedColor: '#118fff',
      backgroundColor: '#ffffff',
      borderStyle: 'white'
    })
  },
  //设置tabBar -- 黑色模式
  setBlackTabBar() {
    wx.setTabBarItem({
      index: 0,
      "iconPath": "/images/dark/home.png",
      "selectedIconPath": "/images/dark/home_on.png",
      "text": "首页"
    })
    wx.setTabBarItem({
      index: 1,
      "iconPath": "/images/dark/topic.png",
      "selectedIconPath": "/images/dark/topic_on.png",
      "text": "专题"
    })
    wx.setTabBarItem({
      index: 2,
      "iconPath": "/images/dark/rank.png",
      "selectedIconPath": "/images/dark/rank_on.png",
      "text": "排行"
    })
    wx.setTabBarItem({
      index: 3,
      "iconPath": "/images/dark/my.png",
      "selectedIconPath": "/images/dark/my_on.png",
      "text": "我的"
    })
    wx.setTabBarStyle({
      color: '#ffffff',
      selectedColor: '#FFC107',
      backgroundColor: '#191616',
      borderStyle: 'black'
    })
  },
  //皮肤
  getSkin: function () {
    var that = this
    wx.getStorage({
      key: 'skin',
      success: function (res) {
        that.globalData.skin = res.data
        if (that.globalData.skin == 'blue') {
          that.globalData.skinSwitch = false
          that.setblueTabBar();
        } else {
          that.globalData.skinSwitch = true
          that.setBlackTabBar()
        }
      }
    })
  },
  //导航栏标题背景

  getUserInfo: function (cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  /*小程序主动更新
   */
  updateManager() {
    if (!wx.canIUse('getUpdateManager')) {
      return false;
    }
    const updateManager = wx.getUpdateManager();
    updateManager.onCheckForUpdate(function (res) {});
    updateManager.onUpdateReady(function () {
      wx.showModal({
        title: '有新版本',
        content: '新版本已经准备好，即将重启',
        showCancel: false,
        success(res) {
          if (res.confirm) {
            updateManager.applyUpdate()
          }
        }
      });
    });
    updateManager.onUpdateFailed(function () {
      wx.showModal({
        title: '更新提示',
        content: '新版本下载失败',
        showCancel: false
      })
    });
  },

  globalData: {
    theme: 'blue',
    userInfo: null,
    openid: '',
    isGetUserInfo: false,
    isGetOpenid: false

  }
})