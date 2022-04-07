<template>
  <div id="homePage">
    <el-carousel class="show-pc">
      <el-carousel-item v-for="item in 4" :key="item">
        <img
          class="img-size"
          src="../static/images/homeBackgrounds/home-banner@3x.png"
          alt="云选家3D系列床垫"
        />
      </el-carousel-item>
    </el-carousel>
    <el-carousel class="show-mobile" direction="vertical" :autoplay="false">
      <el-carousel-item v-for="item in 4" :key="item">
        <img
          class="img-size"
          src="../static/images/homeBackgrounds/home_banner@3x.png"
          alt="云选家3D系列床垫"
        />
      </el-carousel-item>
    </el-carousel>
    <div class="main">
      <!-- 企业简介-->
      <div class="companyProfiles flex modulemargin-top">
        <div class="enterpriseImg">
          <img
            class="img-size"
            style="box-shadow: -15px 15px 0px #f4f1f4"
            src="../static/images/homeBackgrounds/home-jianjie-img@3x.png"
            alt="云选家"
          />
        </div>
        <div>
          <p class="titleMargin">
            <span class="titleUnderline">企业简介</span>
          </p>
          <div>
            <p>
              简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容
            </p>
            <p>
              简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容
            </p>
            <p>
              简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- 智能家居-->
    <div class="smartHome">
      <p class="text-center">
        <span class="titleUnderline">智能家居</span>
      </p>
      <div>
        <div class="smartHomeMain">
          <div class="main">
            <div>
              <div class="smartHomeLeft">
                <div class="title">副标题</div>
                <div class="title2">
                  简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介
                  简介简介简介简介简介简介简介简介简介简介简介简介简介
                </div>
              </div>
              <div class="smartHomeRight">
                <img
                  class="img-size"
                  src="../static/images/homeBackgrounds/home_img_chanpin@3x.png"
                  alt="智能家居简介"
                />
              </div>
            </div>
            <div>
              <div class="checkDetails">了解更多>></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 儿童定制-->
    <div class="childrenSCustom main">
      <p style="margin-bottom: 40px">
        <span class="titleUnderline">儿童定制</span>
      </p>
      <div class="boxshadow" style="padding: 10px">
        <div
          class="flex justify-between align-center"
          style="margin-bottom: 20px"
        >
          <div id="childrenSCustomTitle" class="text-bold">HK主题</div>
          <div id="childrenSCustomTitle2">了解详情>></div>
        </div>
        <div class="flex align-center justify-center">
          <div style="width: 13%">
            <div class="childrenSCustomImg">
              <img
                class="img-size"
                src="../static/images/homeBackgrounds/home_img_changjing1@3x.png"
                alt="儿童定制预览图"
              />
            </div>
            <div class="childrenSCustomImg">
              <img
                class="img-size"
                src="../static/images/homeBackgrounds/home_img_changjing2@3x.png"
                alt="儿童定制预览图"
              />
            </div>
            <div class="childrenSCustomImg">
              <img
                class="img-size"
                src="../static/images/homeBackgrounds/home_img_changjing3@3x.png"
                alt="儿童定制预览图"
              />
            </div>
          </div>

          <div style="width: 60%; margin-left: 20px">
            <img
              class="img-size"
              src="../static/images/homeBackgrounds/home_img_ertong@3x.png"
              alt="儿童定制图"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="main">
      <!-- 服务产品-->
      <div class="serviceProduct">
        <p style="margin-bottom: 20px">
          <span class="titleUnderline">服务产品</span>
        </p>
        <div style="width: 100%">
          <div>
            <div class="boxshadow productmb">
              <div class="serverImg">
                <img
                  class="img-size"
                  src="../static/images/homeBackgrounds/home-banyun-img@3x.png"
                  alt="服务产品"
                />
              </div>
              <div class="serviceIntroduction text-center">
                <p class="text-bold">搬运</p>
                <p class="titlefl2">
                  服务简介服务简介服务简介服务简介服务简介服务简介服务简介
                </p>
              </div>
            </div>
            <div class="boxshadow productmt">
              <div class="serviceIntroduction text-center">
                <p class="text-bold">清洗</p>
                <p>服务简介服务简介服务简介服务简介服务简介服务简介服务简介</p>
              </div>
              <div class="serverImg">
                <img
                  class="img-size"
                  src="../static/images/homeBackgrounds/home-qinxi-img@3x.png"
                  alt="服务产品"
                />
              </div>
            </div>
            <div class="boxshadow productmb">
              <div class="serverImg">
                <img
                  class="img-size"
                  src="../static/images/homeBackgrounds/home-xiaodu-img@3x.png"
                  alt="服务产品"
                />
              </div>
              <div class="serviceIntroduction text-center">
                <p class="text-bold">消毒</p>
                <p>服务简介服务简介服务简介服务简介服务简介服务简介服务简介</p>
              </div>
            </div>
            <div class="boxshadow productmt">
              <div class="serviceIntroduction text-center">
                <p class="text-bold">清洗消毒</p>
                <p>服务简介服务简介服务简介服务简介服务简介服务简介服务简介</p>
              </div>
              <div class="serverImg">
                <img
                  class="img-size"
                  src="../static/images/homeBackgrounds/home-qxxd-img@3x.png"
                  alt="服务产品"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 探戈-->
    <div class="tango">
      <div class="flex justify-end">
        <div>
          <p class="titleMargin">
            <span class="titleUnderline">探戈</span>
          </p>
          <p>3D系列</p>
          <pre>
产品系列介绍产品系列介绍产品系列介绍产品系列介绍产品系列介绍产品系列介绍产品系列介绍产品系列介绍
              </pre
          >
          <div class="checkDetails text-center" style="margin: 10px 0">
            了解更多>>
          </div>
        </div>
      </div>
      <div>
        <img
          class="img-size"
          src="../static/images/homeBackgrounds/home-cp-img@3x.png"
          alt="3D系列"
        />
      </div>
    </div>

    <!-- 店铺展示-->
    <div class="main">
      <!-- 店铺展示-->
      <div class="storeDisplay">
        <p class="titleMargin">
          <span class="titleUnderline">店铺展示</span>
        </p>
        <el-carousel class="show-pc" :interval="4000" type="card" height="200px">
          <el-carousel-item v-for="(item, index) in storeList" :key="index">
            <div class="carouselImg">
              <img class="img-size" :src="item.images" alt="门店" />
              <div class="carouselTitle">{{ item.name }}</div>
            </div>
          </el-carousel-item>
        </el-carousel>
        <van-swipe class="show-mobile" :autoplay="3000" indicator-color="white">
          <van-swipe-item v-for="(item, index) in storeList" :key="index">
            <div class="carouselImg">
              <img class="img-size" :src="item.images" alt="门店" />
              <div class="carouselTitle">{{ item.name }}</div>
            </div>
          </van-swipe-item>
        </van-swipe>
      </div>
      <!-- 新闻资讯-->
      <div class="news modulemargin-top">
        <p class="titleMargin">
          <span class="titleUnderline">新闻资讯</span>
        </p>
        <div class="flex justify-around flex-wrap">
          <a class="newsL" href="">
            <div class="boxshadow">
              <div>
                <img
                  class="img-size"
                  src="../static/images/homeBackgrounds/home-news-img@3x.png"
                  alt="新闻资讯"
                />
              </div>
              <div>
                <p>新闻标题</p>
                <p>新闻简介新闻简介新闻简介新闻简介新闻简介新闻简介</p>
              </div>
              <div class="text-center">了解详情</div>
            </div>
          </a>
          <a class="newsL" href="">
            <div class="boxshadow">
              <div>
                <img
                  class="img-size"
                  src="../static/images/homeBackgrounds/home-news-img@3x.png"
                  alt="新闻资讯"
                />
              </div>
              <div>
                <p>新闻标题</p>
                <p>新闻简介新闻简介新闻简介新闻简介新闻简介新闻简介</p>
              </div>
              <div class="text-center">了解详情</div>
            </div>
          </a>
          <a class="newsL" href="">
            <div class="boxshadow">
              <div>
                <img
                  class="img-size"
                  src="../static/images/homeBackgrounds/home-news-img@3x.png"
                  alt="新闻资讯"
                />
              </div>
              <div>
                <p>新闻标题</p>
                <p>新闻简介新闻简介新闻简介新闻简介新闻简介新闻简介</p>
              </div>
              <div class="text-center">了解详情</div>
            </div>
          </a>
        </div>
      </div>
    </div>

    <!-- 加盟流程-->
    <div class="joiningProcess flex align-center">
      <div class="joiningTitle">
        <div class="marginauto">
          <p class="titleMargin text-center">
            <span class="titleUnderline">加盟流程</span>
          </p>
        </div>

        <div class="marginauto">
          <div>
            <div
              class="flex align-center justify-center text-center marginauto"
            >
              <span class="step">1</span>步骤一
            </div>
            <div
              class="flex align-center justify-center text-center marginauto"
            >
              <span class="step">2</span>步骤二
            </div>
            <div
              class="flex align-center justify-center text-center marginauto"
            >
              <span class="step">3</span>步骤三
            </div>
            <div
              class="flex align-center justify-center text-center marginauto"
            >
              <span class="step">4</span>步骤四
            </div>
          </div>
        </div>

        <div class="learnMore text-center marginauto">了解详情></div>
      </div>
    </div>

    <!-- 加盟申请-->
    <!-- <div class="main">
      <div class="joinApplication">
        <p class="titleMargin">
          <span class="titleUnderline">加盟申请</span>
        </p>
        <div class="joining">
          <div class="boxshadow"></div>
        </div>
      </div>
    </div> -->
  </div>
</template>
<script>
export default {
  name: "HomePage",
  layout: "baseLayout",
  async asyncData({ $axios }) {
    const { data } = await $axios.$get(
      "https://www.fastmock.site/mock/cbb60912d7dec4eb07904711dc7914f5/dl/storeList"
    );
    return { storeList: data.storeList };
  },
  data() {
    return {
      title: "这是主页",
      storeList: [],
    };
  },
  head() {
    return {
      title: this.title,
      meta: [{ hid: "description", name: "description", content: "我的主页" }],
    };
  },
  methods: {},
};
</script>
<style lang="scss">
#homePage {
  .show-pc>.el-carousel__container {
    height: 6rem;
  }
  .show-pc {
    display: block;
  }
  .show-mobile>.el-carousel__container {
    height: 9rem;
  }
  .show-mobile {
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
    background-image: url(../static/images/homeBackgrounds/home_img_zhineng@3x.png);
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
    background: url("../static/images/homeBackgrounds/home-liucheng-bg@3x.png")
      no-repeat center;
    background-size: 100% 100%;
    color: white;
    width: 100%;
    padding: 50px 0px;
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
    .show-pc {
      display: none;
    }
    .show-mobile {
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
    // .storeDisplay > div:nth-of-type(1) {
    //   display: none;
    // }
    // .storeDisplay > div:nth-of-type(2) {
    //   display: block;
    // }
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
}
</style>
