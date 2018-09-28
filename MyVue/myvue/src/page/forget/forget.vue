<template>
    <div></div>
</template>


<script>
    import headTop from '../components/header/head'
    import alertTip from '../components/common/alertTip'
    import {mobileCode,checkExsis,sendMobile,getcaptchas,changePassword} from '../service/getData'

    export default{
        data(){
            return {
                phoneNumber:null,
                oldPassWord:null,
                newPassWord:null,
                rightPhoneNumber:false,
                confirmPassWord:null,
                captchaCodeImg:null,
                mobileCode:null,
                computedTime:0,
                showAlert:false,
                alertText:null,
                accountType:'mobile',
                captchaCodeImg:null,
            }
        },
        

    }

</script>

<style>

</style>
