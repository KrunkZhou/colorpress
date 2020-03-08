/*
 * 
 * WordPres版微信小程序
 * author: jianbo
 * organization: 守望轩  www.watch-life.net
 * github:    https://github.com/iamxjb/winxin-app-watch-life.net
 * 技术支持微信号：iamxjb
 * 开源协议：MIT
 * Copyright (c) 2017 https://www.watch-life.net All rights reserved.
 */



//配置域名,域名只修改此处。
//如果wordpress没有安装在网站根目录请加上目录路径,例如："www.watch-life.net/blog"
var DOMAIN = "www.wpnicer.com";
var WEBSITENAME = "wpnicer"; //网站名称
var PAGECOUNT = '10'; //每页文章数目
var PAYTEMPPLATEID = 'hzKpxuPF2rw7O-qTElkeoE0lMwr0O4t9PJkLyt6v8rk'; //鼓励消息模版id
var REPLAYTEMPPLATEID = 'IiAVoBWP34u1uwt801rI_Crgen7Xl2lvAGP67ofJLo8'; //回复评论消息模版id
var ZANIMAGEURL = 'https://www.watch-life.net/images/2017/07/zsm400.jpg'; //微信鼓励的图片链接，用于个人小程序的赞赏
 //设置downloadFile合法域名,不带https ,在中括号([])里增加域名，格式：{id=**,domain:'www.**.com'}，用英文逗号分隔。
//此处设置的域名和小程序与小程序后台设置的downloadFile合法域名要一致。
var DOWNLOADFILEDOMAIN = [{
    id: 1,
    domain: 'www.wpnicer.com'//你的网站主域名
  },{
    id: 1,
    domain: 'cdn.wpnicer.com'//CDN域名
  }

];
//首页图标导航
//参数说明：'name'为名称，'image'为图标路径，'url'为跳转的页面，'redirecttype'为跳转的类型，apppage为本小程序的页面，miniapp为其他微信小程序,webpage为web-view的页面
//redirecttype 是 miniapp 就是跳转其他小程序  url 为其他小程序的页面
//redirecttype 为 apppage 就是跳转本小程序的页面，url为本小程序的页面路径
//redirecttype 为 webpage 是跳转网址，是通过web-view打开网址，url就是你要打开的网址，不过这个网址的域名要是业务域名
//'appid' 当redirecttype为miniapp时，这个值为其他微信小程序的appid，如果redirecttype为apppage，webpage时，这个值设置为空。
//'extraData'当redirecttype为miniapp时，这个值为提交到其他微信小程序的参数，如果redirecttype为apppage，webpage时，这个值设置为空。
var INDEXNAV = [


  {
    id: '7',
    name: '设计灵感',
    image: '../../images/uploads/nav_icon1.png',
    url: '/pages/list/list?categoryID=37',
    redirecttype: 'apppage',
    appid: ' ',
    extraData: ''
  },
  {
    id: '8',
    name: '主题插件',
    image: '../../images/uploads/nav_icon2.png',
    url: '/pages/list/list?categoryID=34',
    redirecttype: 'apppage',
    appid: ' ',
    extraData: ''
  },
  {
    id: '9',
    name: '小程序',
    image: '../../images/uploads/nav_icon4.png',
    url: '/pages/list/list?categoryID=44',
    redirecttype: 'apppage',
    appid: ' ',
    extraData: ''
  },
  {
    id: '10',
    name: '精选短片',
    image: '../../images/uploads/nav_icon5.png',
    url: '/pages/list/list?categoryID=137',
    redirecttype: 'apppage',
    appid: ' ',
    extraData: ''
  }

];



export default {
  getDomain: DOMAIN,
  getWebsiteName: WEBSITENAME,
  getPayTemplateId: PAYTEMPPLATEID,
  getPageCount: PAGECOUNT,
  getIndexNav: INDEXNAV,
  getReplayTemplateId: REPLAYTEMPPLATEID,
  getZanImageUrl: ZANIMAGEURL,
   getDownloadFileDomain: DOWNLOADFILEDOMAIN
}