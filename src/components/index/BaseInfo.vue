<template>
    <div class="base">
        <div class="name">马勇坤</div>
        <div class="school"><img src=""> 河南理工大学</div>
        <div class="sex">
            <div>男</div>
            <span>·</span>
            <div>本科</div>
            <span>·</span>
            <div>23岁</div>
            <span>·</span>
            <div>2018/7毕业</div>
        </div>
        <div class="phone">151 9131 0018</div>
        <div class="email">15191310018@163.com</div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .base{
        padding-top:60px;
        display:flex;
        flex-direction: column;
        align-items:center;
    }
    .base>div{
        margin:8px;
        display: flex;
        transition: all .3s linear;
        cursor:pointer;
    }
    .base>div:hover{
        color:#0aa2ee;
        transform:scale(1.1)
    }
    .name{
            font-size: 2rem;
            color: #333;
    }
    .school,.sex{
            color: #666;
            padding-left:25px;
    }
    .school{
        background:url(../../assets/school.png) no-repeat 0% 50%;
        background-size:20px;
    }
    .sex{
        background:url(../../assets/wo.png) no-repeat 0% 50%;
        background-size:16px;
    }
    .sex>span{
        color:#000;
        font-weight: bolder;
    }
    .phone,.email{
       color: #333;
       padding-left:20px;
    }
    .phone{
        background:url(../../assets/phone.png) no-repeat 0% 50%;
        background-size:16px;
    }
    .email{
        background:url(../../assets/email.png) no-repeat 0% 50%;
        background-size:16px;
    }
</style>