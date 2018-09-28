import fetch from '../config/fetch'
import {getStore} from '../config/mUtils'

//header
/**
 * 获取用户信息
 */

export const getUser = () => fetch('/v1/user', {user_id: getStore('user_id')});

//首页

/**
 * 获取首页默认地址
 */

export const cityGuess = () => fetch('/v1/cities', {
	type: 'guess'
});

/**
 * 获取首页热门城市
 */

 export const hotcity = () => fetch('/v1/cities',{
     type:'hot'
 })

 /**
  * 获取首页所有城市
  */

export const groupcity = () => fetch('/v1/cities',{
      type:'group'
  })

  // 登录页面

  /**
   * 获取图片验证码
   */

export const getcaptchas = () => fetch('/v1/captchas',{},"POST");

/**
 * 账号密码
 */

 export const accountLogin = (username,password,captcha_code) => fetch('/v2/login',{username,password,captcha_code},
 "POST");

 /**
  * 检查账号是否存在
  */
 export const checkExsis = (checkNumber,type) => fetch('/v1/users/exists',{
     [type]:checkNumber,
     type
 });

 /**
  * 获取短信验证码
  */
 export const mobileCode = phone => fetch('/v4/mobile/verify_code/send',{
    mobile:phone,
    scene:'login',
    type:'sms',
},"POST");

/**
 * 手机号登录
 */
export const sendLogin = (code,moble,validate_token) => fetch('/v1/login/app_mobile',{
    code,moble,validate_token
},"POST");