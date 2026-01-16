// index.js
Page({
  data: {
    intro: "更多内容请访问 www.example.com"
  },
  onShareAppMessage: function() {
    return {
      title: '关于狸庐',
      path: '/pages/index/index',
      imageUrl: '/images/dream.jpg'
    }
  },
  onShareTimeline: function() {
    return {
      title: '关于狸庐',
      path: '/pages/index/index',
      imageUrl: '/images/avatar.jpg'
    }
  }
})
