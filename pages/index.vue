<template>
  <div class="home">
    123
  </div>
</template>
<script>
export default {
  name: "HomePage",
  layout: "baseLayout",
  async asyncData({ $axios }) {
    const { data } = await $axios.$get("/api/list");
    return { list: data };
  },
  data() {
    return {
      title: "这是主页",
      list: [],
    };
  },
  head() {
    return {
      title: this.title,
      meta: [
        { hid: "description", name: "description", content: "这里是我的主页" },
      ],
    };
  },
  methods: {},
};
</script>
<style lang="scss">
#carousel-pc .el-carousel__container{
height: 6rem;
}
#carousel-pc {
  display: block;
}
#carousel-mobile .el-carousel__container{
height: 9rem;
}
#carousel-mobile{
  display: none;
}
#updown {
  display: none;
}
.banner > img:nth-of-type(2) {
  display: none;
}
.product {
  width: 50%;
}
/* 服务介绍 */
.serviceProduct > div > div {
  display: flex;
}
.serviceProduct > div > div > div {
  width: 25%;
  box-sizing: border-box;
}
.productmb {
  margin-bottom: 50px;
}
.productmt {
  margin-top: 50px;
}
.serviceIntroduction {
  box-sizing: border-box;
  padding: 10px;
}
.serviceIntroduction p {
  margin: 0;
}
.serverImg {
  height: 280px;
}
/* 企业简介 */
.companyProfiles {
  margin-bottom: 100px;
}
.companyProfiles > div {
  width: 50%;
}
/* 企业图片 */
.enterpriseImg {
  margin-right: 20px;
}
/* 智能家居 */
.smartHome > div:nth-of-type(1) {
  background-size: 100% 100%;
  padding: 50px 0;
}
.smartHomeMain {
  width: 100%;
}
.smartHomeMain .main {
  margin: 0 auto;
}
.smartHomeMain .main > div:nth-of-type(1) {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
.smartHomeMain .main > div:nth-of-type(2) {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}
.smartHomeMain .smartHomeLeft {
  width: 60%;
}
.smartHomeMain .smartHomeRight {
  width: 40%;
}
.smartHomeMain .title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
}
.smartHomeMain .title2 {
  color: #a3a3a3;
}
/* 儿童定制 */
#childrenSCustomTitle {
  position: relative;
  font-size: 23px;
  margin-left: 1em;
}
#childrenSCustomTitle::after {
  content: " ";
  position: absolute;
  left: -1em;
  bottom: 0;
  width: 1em;
  border-top: 6px solid#f4bcb9;
}
#childrenSCustomTitle2 {
  color: #a8a5a8;
}
.childrenSCustomImg {
  padding: 20px 0;
}
/* 探戈 */
.tango {
  display: flex;
  background: #fff0da;
}
.tango .titleUnderline:after {
  border-top: 6px solid #000000;
}
.tango > div:nth-of-type(1) > div {
  width: 60%;
}
.tango div:nth-of-type(1) > div > p:nth-of-type(2) {
  margin: 0;
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 25px;
}
.tango div:nth-of-type(1) > div > pre {
  margin: 0;
}
.tango div:nth-of-type(1) > div > pre {
  position: relative;
  padding-bottom: 20px;
  line-height: 30px;
}
.tango div:nth-of-type(1) > div > pre:after {
  content: " ";
  position: absolute;
  left: 0;
  bottom: 0px;
  width: 130px;
  border-top: 2px solid #000000;
}
/* 了解更多 */
.understandMore {
  font-size: 14px;
  width: 130px;
  padding-top: 5px;
  padding-bottom: 5px;
  margin-top: 7px;
  background: #000000;
  color: white;
  border-radius: 5px;
}
/* 轮播 */
.storeDisplay > div:nth-of-type(2) {
  display: none;
}
.carouselImg {
  position: relative;
  width: 100%;
  height: 100%;
}
.carouselTitle {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50px;
  overflow: hidden;
  line-height: 50px;
  background: rgba(0, 0, 0, 0.3);
  padding-left: 10px;
}
/* 新闻资讯 */
.newsL {
  width: 32%;
  display: block;
  color: #000000;
}
.newsL > div {
  padding-bottom: 30px;
  min-height: 350px;
}
.newsL > div > div:nth-of-type(2) {
  padding-left: 5px;
  padding-right: 5px;
}
.newsL > div > div:nth-of-type(2) > p:nth-of-type(1) {
  font-weight: 600;
  font-size: 20px;
}
.newsL > div > div:nth-of-type(2) > p:nth-of-type(2) {
  color: #868485;
  font-size: 18px;
}
.newsL > div > div:nth-of-type(3) {
  color: #e6b066;
  width: 50%;
  height: 40px;
  line-height: 40px;
  font-size: 15px;
  border: 1px solid #e6b066;
  border-radius: 5px;
  margin: auto;
}
/* 加盟流程 */
.joiningProcess {
  position: relative;
  background: url("http://qn.yunxuanjia.com/yxjsqd/images/homeBackgrounds/home-liucheng-bg@3x.png")
    no-repeat center;
  background-size: 100% 100%;
  color: white;
  width: 100%;
  padding: 50px 0px;
  margin: 30px 0px;
}
.joiningTitle {
  width: 100%;
}
.joiningTitle .titleUnderline::after {
  left: 30%;
}
.joiningTitle .step {
  background: white;
  display: block;
  color: #f08516;
  width: 20px;
  height: 20px;
  line-height: 20px;
  border-radius: 50%;
  margin-right: 20px;
}
/* 了解详情 */
.joiningTitle .learnMore {
  font-size: 14px;
  width: 200px;
  padding-top: 5px;
  padding-bottom: 5px;
  border: 1px solid white;
  color: white;
  border-radius: 5px;
}
.joiningTitle > div:nth-of-type(2) {
  width: 60%;
  margin-top: 50px;
  margin-bottom: 50px;
}
.joiningTitle > div:nth-of-type(2) > div {
  display: flex;
  justify-content: center;
}
.joiningTitle > div:nth-of-type(2) > div > div {
  width: 25%;
  padding: 6px 0px;
  margin: 10px 5px;
}
.joiningTitle > div:nth-of-type(2) > div > div:nth-of-type(1) {
  background: #ffd267;
  border-radius: 5px;
}
.joiningTitle > div:nth-of-type(2) > div > div:nth-of-type(2) {
  background: #fbc054;
  border-radius: 5px;
}
.joiningTitle > div:nth-of-type(2) > div > div:nth-of-type(3) {
  background: #f8ab3e;
  border-radius: 5px;
}
.joiningTitle > div:nth-of-type(2) > div > div:nth-of-type(4) {
  background: #f49729;
  border-radius: 5px;
}
.joiningTitle > div:nth-of-type(2) > div > div:nth-of-type(5) {
  background: #f08516;
  border-radius: 5px;
}
/* 加盟申请 */
.joinApplication {
  margin-bottom: 150px;
}

/* 多媒体查询 */
/* 手机屏幕 */
@media screen and (max-width: 768px) {
  #carousel-pc {
    display: none;
  }
  #carousel-mobile{
  display: block;
}
  .banner > img:nth-of-type(1) {
    display: none;
  }
  .banner > img:nth-of-type(2) {
    display: block;
  }
  .main {
    width: 90%;
  }
  /* 服务 */
  .serviceProduct > div > div {
    flex-wrap: wrap;
  }
  .serviceProduct > div > div > div {
    width: 50%;
    margin: 0;
    box-shadow: 0px 0px 10px #e4e4e4;
  }
  .serverImg {
    height: 208px;
  }
  /* 企业 */
  .companyProfiles {
    flex-wrap: wrap;
  }
  .companyProfiles > div {
    width: 100%;
  }
  /* 企业图片 */
  .enterpriseImg {
    width: 100%;
    margin: 0px 0px 50px 0px;
  }
  .smartHomeMain .main > div:nth-of-type(1) {
    display: block;
  }
  .smartHomeMain .smartHomeLeft {
    width: 100%;
  }
  .smartHomeMain .smartHomeRight {
    width: 50%;
    margin: 20px auto;
  }
  .smartHomeMain .title,
  .smartHomeMain .title2 {
    color: white;
  }
  .smartHomeMain .main > div:nth-of-type(2) {
    justify-content: flex-start;
  }
  /* 儿童定制 */
  .childrenSCustomImg {
    padding: 5px 0;
  }
  /* 探戈 */
  .tango {
    display: block;
  }
  .tango > div:nth-of-type(1) > div {
    width: 100%;
  }
  .tango > div:nth-of-type(1) {
    padding-bottom: 20px;
  }
  .tango > div:nth-of-type(1) > div {
    padding: 0px 10px;
  }
  /* 轮播 */
  .storeDisplay > div:nth-of-type(1) {
    display: none;
  }
  .storeDisplay > div:nth-of-type(2) {
    display: block;
  }
  /* 新闻 */
  .newsL {
    width: 100%;
    padding-bottom: 30px;
    margin-bottom: 20px;
  }
  /* 加盟 */
  .joiningTitle > div:nth-of-type(2) {
    width: 100%;
  }
  .joiningTitle > div:nth-of-type(2) > div {
    display: block;
  }
  .joiningTitle > div:nth-of-type(2) > div > div {
    width: 90%;
    margin: 10px auto;
    padding: 20px 0px;
  }
  .friendshipTies {
    display: none;
  }
}
</style>
