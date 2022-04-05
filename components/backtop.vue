<template>
  <div id="backtop">
    <div v-show="totop">
      <div>
        <img
          src="../static/images/homeBackgrounds/float-icon-kf@3x.png"
          alt="客服"
        />
        <div>客服</div>
      </div>
      <div @click="backtop">
        <img
          src="../static/images/homeBackgrounds/float-icon-zd@3x.png"
          alt="置顶"
        />
        <div>置顶</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      totop: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.scrolltotop);
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrolltotop);
  },
  methods: {
    scrolltotop() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      // console.log(scrollTop);
      if (scrollTop > 400) {
        this.totop = true;
      } else {
        this.totop = false;
      }
    },
    //回到顶部 点击回到顶部按钮，让距离逐渐减少，形成上划的效果
    backtop() {
      let back = setInterval(() => {
        if (document.body.scrollTop || document.documentElement.scrollTop) {
          document.body.scrollTop -= 100;
          document.documentElement.scrollTop -= 100;
        } else {
          clearInterval(back);
        }
      });
    },
  },
};
</script>
<style lang="scss">
#backtop {
  position: fixed;
  bottom: 10px;
  right: 10px;
  background: white;
  z-index: 2;
  box-shadow: 1px 1px 5px rgb(170, 170, 170);
  > div > div {
    text-align: center;
    padding: 5px 20px;
    img {
      width: 50px;
      height: 50px;
    }
  }
  >div > div:nth-of-type(1) {
    position: relative;
    &::after {
      content: "";
      position: absolute;
      left: 5%;
      bottom: 0;
      width: 90%;
      border-bottom: 3px solid #cecece;
    }
  }
}
</style>
