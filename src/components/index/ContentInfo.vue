<template>
    <div>
        <div class="content" v-for="(item,index) of content" :key="index">
            <div class="big-title" v-if="item.bigTitle">{{item.bigTitle}}</div>
            <div class="title">
                <span v-if="item.title">{{item.title}}</span>
                <div class="right">
                    <span v-if="item.span">{{item.span}}</span>
                </div>
                <div class="git-link" v-if="item.git">
                    <span style="color:#666">{{item.git}}</span>
                    <a :href="item.link" target="_blank" >{{item.link}}</a>
                </div>
            </div>
            <div class="small-title" v-if="item.smallTitle" v-html="item.smallTitle"></div>
            <ul class="detail" v-for="(d,i) of item.detail" :key="i">
                <li v-html="d"></li>
            </ul>
            <div class="get" v-if="item.get">
                <span class="get-title">项目收获：</span>
                <span>{{item.get}}</span>
            </div>
        </div>
    </div>
</template>
<script>
import content from '../../static/content.json'
export default {
    data(){
        return {
          content:content.data
        }
    },
    created(){
        console.log(this.content)
    }
}
</script>
<style scoped>
    ul{
    list-style-type: none;
    padding: 0px;
    margin: 0px;
    }
    .content{
        width:100%;
        padding:20px 72px;
        box-sizing: border-box;
        line-height:28px;
    }
    .content a{
        text-decoration: none;
        color:#999;
    }
    .content a:hover{
        color:cornflowerblue;
    }
    .big-title{
    text-align: center;
    background-color: #eee;
    border-radius: 26px;
    width: 110px;
    margin: 0 auto 30px;
    font-size: 1.2rem;
    height: 28px;
    line-height:28px;
    }
    .title{
        color:#333333;
        font-weight: 600;
        margin:8px 0 0;
    }
    .title>.right{
        color:#999999;
        font-size:.9rem;
        float:right;
        display: flex;
    }
    .git-link{
        color:#999999;
        font-size:.9rem;
        display: flex;
    }
    .small-title{
        color:#999999;
        font-size:.9rem;
        margin:4px 0 0;
    }
    .detail{
    color: rgba(85,85,85,.9);
    margin-top: 4px;
    margin-left: 4px;
    font-size: .92rem;
    }
    .get{
        color:#333;
        font-size:.9rem;
    }
    .get-title{
        font-weight: 600;
        color:#333;
    }
</style>