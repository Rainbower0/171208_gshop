/*
  包含n个接口请求函数的模块
  返回值：promise对象
  */
import ajax from './ajax'
// 1、获取地址信息(根据经纬度串)
export const reqAddress = geohash => ajax('/position/' + geohash)
// 2、获取 msite 页面食品分类列表
export const reqCategorys = () => ajax('/index_category')
// 3、获取 msite 商铺列表(根据经纬度)
export const reqShops = ({latitude, longitude}) => ajax('/shops', {latitude, longitude})
// 4、根据经纬度和关键字搜索商铺列表
export const reqSearchShop = (geohash, keyword) => ajax('/search_shops', {geohash, keyword})
// 5、获取一次性验证码
export const reqCaptcha = () => ajax('/captcha')
// 6、账号密码登录
export const reqPwdLogin = (name, pwd, captcha) => ajax('/api/login_pwd', {name, pwd, captcha}, 'POST')
// 7、获取短信验证码
export const reqSendCode = phone => ajax('/api/sendcode', {phone})
// 8、手机号验证码登录
export const reqSmsLogin = (phone, code) => ajax('/api/login_sms', {phone, code}, 'POST')
// 9、获取用户信息(根据会话)
export const reqUser = () => ajax('/api/userinfo')
// 10、请求登出
export const reqLogout = () => ajax('/api/logout')