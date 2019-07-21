<template>
    <div class="container">
        <div class="header"></div>
        <img src="../assets/1.jpg" class="head-img">  
        <base-info></base-info>
        <content-info></content-info>
    </div>
</template>
<script>
import BaseInfo from './index/BaseInfo'
import ContentInfo from './index/ContentInfo'
export default {
    components:{
        BaseInfo,
        ContentInfo
    }
}
</script>
<style scoped>
    .container{
        width: 720px;
        margin: 0 auto;
        box-shadow: 0 0 10px 0 rgba(0,0,0,.4);
        padding-bottom: 30px;     
        position:relative;
    }
    .header{
        height: 170px;
        background-color:#000;
    }
    .head-img{
        width:98px;
        height:98px;
        position:absolute;
        left: calc(50% - 53px);
        top: 121px;
        border-radius: 50%;
        border:5px double #aaa;
    }
</style>

