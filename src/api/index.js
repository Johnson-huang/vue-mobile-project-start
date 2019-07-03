import http from '@src/utils/http';

/**
 * 登录
 * @param params
 * @param headers
 */
export const login = (params, headers = {}) => http({
  method: 'POST',
  url: '/test/login',
  data: params,
  headers: headers
});
