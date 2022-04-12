<template>
  <!-- 智能家居 -->
  <div id="smartHome">
    <div class="banner">
      <img
        class="img-size"
        src="/images/SmartHomeBackgrounds/banner@3x.png"
      />
    </div>
    <!-- 产品 -->
    <div>
      <!-- 智能家居产品 -->
      <div class="marginauto" style="width: 300px; margin-bottom: 50px">
        <img
          class="img-size"
          src="/images/SmartHomeBackgrounds/bt@3x.png"
          alt=""
        />
      </div>
      <!-- 产品1 -->
      <div class="product1">
        <div class="main">
          <div>
            <div class="productTitle">
              <div>云米AI音箱</div>
              <div>控制全屋家电 语音交互 5寸触控屏</div>
            </div>
            <div class="checkDetails">查看详情>></div>
          </div>

          <div class="productImg">
            <img
              class="img-size"
              src="/images/SmartHomeBackgrounds/zhineng_img_chanpin1@3x.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <!-- 产品2 -->
      <div id="productflex" style="margin: 6px 0px">
        <div id="product2" class="flex justify-end">
          <div>
            <div class="productTitle">
              <div>互联网厨房</div>
              <div>全新升级 智能化厨房</div>
            </div>
            <div class="flex justify-between">
              <div class="checkDetails">查看详情>></div>
              <div class="productImg">
                <img
                  class="img-size"
                  src="/images/SmartHomeBackgrounds/zhineng_img_chanpin2@3x.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div id="product3">
          <div>
            <div class="productTitle">
              <div>智能门锁</div>
              <div>指纹识别 远程解锁</div>
            </div>
            <div class="flex justify-between">
              <div class="checkDetails">查看详情>></div>
              <div class="productImg">
                <img
                  class="img-size"
                  src="/images/SmartHomeBackgrounds/zhineng_img_chanpin3@3x.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 产品3 -->
      <div class="product1">
        <div class="main">
          <div>
            <div class="productTitle">
              <div>云米魔镜</div>
              <div>环形补光 语音交互 5寸触控屏</div>
            </div>
            <div class="checkDetails">查看详情>></div>
          </div>

          <div class="productImg">
            <img
              class="img-size"
              src="/images/SmartHomeBackgrounds/zhineng_img_chanpin1@3x.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    <!-- 视频 -->
    <div style="width: 100%">
      <video
        class="img-size"
        src="http://www.yunxuanjia.cn/video/5sdNlYUlMZtzsmvWzMH.mp4"
        controls="controls"
        preload="preload"
      ></video>
    </div>
  </div>
</template>
<script>
export default {
  name: "smartHome",
  layout: "baseLayout",
};
</script>
<style lang="scss">
#smartHome {
  > div:nth-of-type(2) {
    margin: 100px 0;
  }
  .product1 {
    width: 100%;
    background-color: #f8f6f9;
    padding-top: 50px;
  }
  #productflex {
    display: flex;
  }
  #product2,
  #product3 {
    width: calc(50% - 3px);
    background-color: #f8f6f9;
    padding: 50px 0;
    box-sizing: border-box;
  }
  #product2 {
    margin-right: 3px;
  }
  #product3 {
    margin-left: 3px;
  }
  .product1 > .main {
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  .productTitle > div:nth-of-type(1) {
    font-size: 35px;
    font-weight: 800;
  }
  .productTitle > div:nth-of-type(2) {
    margin-top: 10px;
    color: #646366;
    font-size: 20px;
  }
  .product1 .checkDetails {
    margin-top: 150px;
  }
  #product2 .checkDetails,
  #product3 .checkDetails {
    margin-top: 130px;
  }

  #product2 > div,
  #product3 > div {
    width: 60%;
    box-sizing: border-box;
  }
  #product2 > div {
    padding-right: 10px;
  }
  #product3 > div {
    padding-left: 20px;
  }
  .product1 .productImg {
    width: 30%;
  }
  #product2 .productImg,
  #product3 .productImg {
    width: 50%;
    height: 200px;
  }
  .product1:hover,
  #product2:hover,
  #product3:hover {
    opacity: 0.7;
  }
  /* 多媒体查询 */
  /* 手机屏幕 */
  @media screen and (max-width: 768px) {
     > div:nth-of-type(2) {
      margin: 30px 0;
    }
    .product1 > .main {
      display: block;
    }
    .productImg {
      width: 50%;
      margin: 0 auto;
    }
    .product1 .checkDetails {
      margin-top: 20px;
      margin-bottom: 20px;
    }
    #productflex {
      display: block;
    }
    #product2 .checkDetails {
      margin-top: 20px;
      margin-bottom: 20px;
    }
    #product2 {
      justify-content: flex-start;
    }
    #product2,
    #product3 {
      width: 100%;
      margin: 0;
    }
    #product2 > div,
    #product3 > div {
      padding: 0 20px;
      width: 100%;
      box-sizing: border-box;
    }
  }
}
</style>
