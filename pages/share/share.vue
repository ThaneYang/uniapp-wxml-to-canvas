<template>
  <view class="share-page">
    <view class="share-page-box" id="box" v-if="show" :style="{width: canvasWidth + 'px', height: canvasHeight + 'px' }">
      <wxml-to-canvas class="widget" :width="canvasWidth" :height="canvasHeight"></wxml-to-canvas>
    </view>
    <view class="share-page-box msg-box" v-else :style="{width: canvasWidth + 'px', height: canvasHeight + 'px' }">
      {{msg}}
    </view>
    <view class="share-page-btn" @tap="extraImage">
			<button class="btn-big" :style="getBtnStyle">保存图片</button>
    </view>
		
  </view>
</template>
<script>
const { wxml, style } = require('./DomData.js')
export default {
  name: '',
  data () {
    return {
      show: false, // 是否显示canvas
      canvasWidth: 320, // 默认canvas宽高
      canvasHeight: 480,
      screenWidth: null, // 设备宽度
			name: '',
			pic: '',
			chapter1: '',
			chapter2: '',
			widget: null,
      msg: '加载中，请稍等...', // 提示语
    }
  },
  onLoad (options) {
    console.log('options', options);
    this.name = 'Willam Yang'
    this.pic = 'https://pic1.zhimg.com/80/v2-58fe538a59f870407b1435bfd45893ed_720w.jpeg'
    this.chapter1 = '第一段'
    this.chapter2 = '第二段'
    
    // 获取设备信息
    wx.getSystemInfo({
      success: (res) =>{
        this.screenWidth = res.screenWidth

        this.canvasWidth = this.screenWidth * 0.9
        this.canvasHeight = this.screenWidth * 1.1
        console.log('screenWidth', this.screenWidth)

        this.show = true
        // 数字容器宽度 动态设置 
        setTimeout(() => {
          wx.showLoading({title: '海报生成中...'})
          this.widget = this.selectComponent('.widget')
          this.renderToCanvas()
        }, 1000)
      }
    });
  },
  methods: {
    // wxml 转 canvas
    renderToCanvas () {
      console.log('this.widget', this.widget)
      const _wxml = wxml(this.name, this.pic, this.chapter1, this.chapter2)
      const _style = style(this.screenWidth, this.canvasWidth, this.canvasHeight)
      const p1 = this.widget.renderToCanvas({ wxml: _wxml, style: _style })
      p1.then((res) => {
        console.log('海报生成成功');
        wx.hideLoading()
        // this.container = res
      }).catch((err) => {
        console.log('生成失败')
      })
    },
   // 保存到朋友圈
  extraImage() {
    if (!this.show) {
      wx.showToast({title: '海报生成失败，无法分享到朋友圈', icon: 'none'})
      return
    }
    const p2 = this.widget.canvasToTempFilePath()
    let that = this
    p2.then(result => {
      let path = result.tempFilePath
      wx.getSetting({
        success: res => {
          // 非初始化且未授权的情况，需要再次弹窗提示授权
          if (res.authSetting['scope.writePhotosAlbum'] != undefined && res.authSetting['scope.writePhotosAlbum'] != true) {
            wx.showModal({
              title: '是否授权相册权限',
              content: '需要获取相册权限，请确认授权，否则无法使用相关功能',
              success: res => {
                if (res.confirm) {
                  wx.openSetting({
                    success: dataAu => {
                      if (dataAu.authSetting["scope.writePhotosAlbum"] == true) {
                        wx.showToast({
                          title: '授权成功',
                          icon: 'none',
                          duration: 1000
                        });
                        that.saveIMg(path);
                      } else {
                        wx.showToast({
                          title: '授权失败',
                          icon: 'success',
                          duration: 1000
                        });
                      }
                    }
                  });
                }
              }
            });
          } else {
            // 初始化且未授权，系统默认会弹窗提示授权
            // 非初始化且已授权，也会进入这里
            that.saveIMg(path);
          }
        }
      });
    })
  },
   // 保存到相册
  async saveIMg (tempFilePath) {
    wx.saveImageToPhotosAlbum({
      filePath: tempFilePath,
      success: async (res) => {
        wx.showModal({
          content: '图片已保存，分享给好友吧！',
          showCancel: false,
          confirmText: '好的',
          confirmColor: '#333',
          success: function (res) {
            wx.navigateBack({
              //返回
              delta: 1
            });
          },
          fail: function (res) {
            console.log('res', res);  
          }
        });
      },
  
      fail: function (res) {
        wx.showToast({
          title: '您取消了授权',
          icon: 'none',
          duration: 2000
        })
      }
    });
   }
  }
}
</script>
<style lang="scss" scoped>
.share-page {
  background: #fff;
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  .msg-box {
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
  }
  .share-page-box {
    margin: 40rpx auto;
    position: relative;
    overflow: hidden;
		box-shadow: 0rpx 6rpx 20rpx 6rpx rgba(0, 0, 0, 0.2);
  }
  .share-page-btn {
    margin: 0 40rpx 50rpx;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>