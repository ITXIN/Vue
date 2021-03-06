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


//重置密码

/**
 * 修改密码
 */

 export const changePassword = (username,oldpassword,newpassword,confirmpassword,captcha_code) => fetch('/v2/changepassword',{
     username,
     oldpassword,
     newpassword,
     confirmpassword,
     captcha_code,
 },"POST");


 //选择城市页面

 /**
  * 获取当前所在城市
  */

 export const currentcity = number => fetch('/v1/cities/'+number);

 /**
  * 获取搜索地址
  */
 export const searchplace = (cityid,value) => fetch('/v1/pois',{
     type:'search',
     city_id:cityid,
     keyword:value
 })

 //商户
 /**
  * 获取msite 页面的地址信息
  */

  export const msiteAddress = geohash => fetch('/v2/pois/'+geohash);

  /**
   * 获取msite 页面食品分类列表
   */
  export const msiteFoodTypes = geohash => fetch('/v2/index_entry',{
      geohash,
      group_type:'1',
      'flags[]':'F'
  });

  /**
   * 获取msite 商铺列表
   */
  export const shopList = (latitude,longitude,offset,restaurant_category_id="",restaurant_category_ids='',order_by="",delivery_mode='',support_ids=[])=>{
    let supportStr = '';
    support_ids.forEach(item=>{
        if (item.status) {
            supportStr += '&support_ids[]=' + item.id;
        }
    });
    let data = {
        latitude,
        longitude,
        offset,
        limit:'20',
        'extras[]':'activities',
        keyword:'',
        restaurant_category_id,
        'rrestaurant_category_ids[]':restaurant_category_ids,
        order_by,
        'delivery_mode[]':delivery_mode+supportStr
    };
    return fetch('/shopping/restaurants',data);
  };

  /**
   * 获取search页面结果
   */
  export const searchRestaurant = (geohash,keyword) =>fetch('/v4/restaurants',{
      'extras[]':'restaurant_activity',
      geohash,
      keyword,
      type:'search'
  })

  /**
   * 获取订单列表
   */
  export const getOrderList = (user_id,offset) => fetch('/bos/v2/users/'+user_id+'/orders',{
      limit:10,
      offset,
  })