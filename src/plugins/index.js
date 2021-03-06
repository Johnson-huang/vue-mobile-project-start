/* eslint-disable no-extend-native */
/* eslint-disable no-unused-expressions */
Date.prototype.format = function (fmt) {
  const o = {
    'y+': this.getFullYear(),
    'M+': this.getMonth() + 1, // 月份
    'd+': this.getDate(), // 日
    'h+': this.getHours(), // 小时
    'm+': this.getMinutes(), // 分
    's+': this.getSeconds(), // 秒
    'q+': Math.floor((this.getMonth() + 3) / 3), // 季度
    'S+': this.getMilliseconds() // 毫秒
  };
  for (let k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      if (k === 'y+') {
        fmt = fmt.replace(RegExp.$1, ('' + o[k]).substr(4 - RegExp.$1.length));
      } else if (k === 'S+') {
        let lens = RegExp.$1.length;
        lens = lens === 1 ? 3 : lens;
        fmt = fmt.replace(RegExp.$1, ('00' + o[k]).substr(('' + o[k]).length - 1, lens));
      } else {
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));
      }
    }
  }
  return fmt;
};

export default {
  install(Vue, option) {
    Vue.filter('timeFormat', function(val) {
      if (!val) return '';

      if (typeof val === 'string') {
        return val;
      } else {
        return new Date(val).format('yyyy.MM.dd');
      }
    });

    Vue.filter('yyyyMMdd', function(val) {
      if (!val) return '';

      if (typeof val === 'string') {
        return val;
      } else {
        return new Date(val).format('yyyy-MM-dd');
      }
    });
  }
};
