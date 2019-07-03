// 是否 iphone X
export function isIphoneX() {
  return /iphone/gi.test(navigator.userAgent) && (screen.height === 812 && screen.width === 375);
}

// 是否 IOS
export function isiOS() {
  return /(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent);
}

// 是否 Android
export function isAndroid() {
  return /(Android)/i.test(navigator.userAgent);
}

// 是否微信浏览器环境
export function isWx() {
  return /(MicroMessenger)/i.test(navigator.userAgent);
}
