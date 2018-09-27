import { 
    getUser,
    
 } from "../service/getData"

 import { 
     GET_USERINFO,
     SAVE_ADDRESS
  } from "./mutation-types.js";

  export default{
    // 我们会经常用到 ES2015 的 参数解构 来简化代码（特别是我们需要调用 commit 很多次的时候）：
      async getUserInfo({
         commit,
         state 
      }){
          let res = await getUser();
          console.log('getUser',res);
          commit(GET_USERINFO,res);
      }

  }