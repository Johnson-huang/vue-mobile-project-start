/**
 * 手机验证码登录
 * @param params
 * @param headers
 */
export const login = (params, headers = {}) => {
  return new Promise((resolve, reject) => {
    const res = {
      'result': 0,
      'resultMessage': '响应成功',
      'content': {
        token: '123456'
      }
    };
    resolve(res);
  });
};
