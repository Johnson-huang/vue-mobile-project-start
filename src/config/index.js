var creditEndpoint = '';

// 开发环境
if (process.env.NODE_ENV === 'development') {
  // creditEndpoint = ''
}

// 生产域名
if (process.env.NODE_ENV === 'production') {
  // creditEndpoint = ''
}

export {
  creditEndpoint
};
