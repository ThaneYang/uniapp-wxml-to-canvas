
/**
 *
 *
 * @param {*} number  第几位
 * @param {*} src 名片头像
 * @param {*} name 名片名字
 * @param {*} qrCodeUrl 小程序codeURL图片
 */
const wxml = (name, pic, c1, c2) =>`
<view class="container">
	<image src="`+pic+`"  class="pic"/>
	<text class="name">`+ name +`</text>
	<text class="content">`+ c1 +`</text>
	<text class="content">`+ c2 +`</text>
	<view class="bottom">
		<image src="`+pic+`"  class="qr"/>
		<text class="msg">扫码一起加入学习吧</text>
	</view>
</view>
`

/**
 *
 *
 * @param {*} screenWidth 屏幕宽度
 * @param {*} canvasWidth  画布宽度
 * @param {*} canvasHeight  画布高度
 * @param {*} numberWidth  数字宽度，动态设置
 * @return {*} 
 */
const style = (screenWidth, canvasWidth, canvasHeight) => {
  return {
    "container": {
      width: canvasWidth,
      height: canvasHeight,
      position: 'relative',
      overflow: 'hidden',
			backgroundColor: '#ffffff',
    },
    "name":{
      fontSize: 20,
      color: '#333',
      marginLeft: canvasWidth * 0.08,
      width: canvasWidth * 0.84,
      height: screenWidth * 0.18,
			textAlign: 'center',
    },
    "content": {
			fontSize: 14,
			color: '#333',
      width: canvasWidth * 0.84,
      height: screenWidth * 0.15,
			marginLeft: canvasWidth * 0.08,
    },
    "pic": {
      width: canvasWidth * 0.3,
      height: screenWidth * 0.28,
      marginTop: canvasWidth * 0.1,
      marginLeft: canvasWidth * 0.35,
			marginBottom: canvasWidth * 0.05,
			borderRadius: screenWidth * 0.14,
			overflow: 'hidden',
    },
    "bottom":{
      width: canvasWidth,
      height: screenWidth * 0.2,
      flexDirection: 'row',
      justifyContent: 'self-start',
      alignItems: 'center',
			backgroundColor: '#fafafa',
      position: 'absolute',
      bottom: 0,
      left: 0,
    },
		"qr": {
		  width: canvasWidth * 0.14,
		  height: screenWidth * 0.14,
		  marginLeft: canvasWidth * 0.04,
			marginRight: canvasWidth * 0.04,
		},
    "msg": {
      fontSize: 14,
      color: '#a1a1a1',
      width: canvasWidth * 0.74,
			height: 14,
			textAlign: 'left'
    },
  }
}

module.exports = {
  wxml,
  style
}
