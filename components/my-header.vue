<template>
  <header>
    <div id="menu-logo">
      <div>
        <div id="logo" class="hidden-xs-only">
          <img
            class="img-size"
            src="http://qn.yunxuanjia.com/yxjsqd/images/logo@3x.png"
            alt="logo"
          />
        </div>
        <div id="menu" class="hidden-sm-and-up">
          <img
            src="http://qn.yunxuanjia.com/yxjsqd/images/hamBurger@3x.png"
            alt=""
            @click="showMenu = !showMenu"
          />
          <transition name="el-fade-in-linear">
            <img
              v-show="showMenu"
              src="http://qn.yunxuanjia.com//static/home/home-icon-gongneng-shanchu@3x.png"
              alt=""
              @click="showMenu = !showMenu"
            />
          </transition>
        </div>
      </div>
      <ul id="menu-ul-pc">
        <li v-for="(item, index) in menuList" :key="index">
          <nuxt-link v-if="item.default" :to="item.path">{{
            item.name
          }}</nuxt-link>
          <a v-else :href="item.path">{{ item.name }}</a>
        </li>
      </ul>
      <transition name="el-fade-in-linear">
        <ul v-show="showMenu" id="menu-ul-mobile">
          <li v-for="(item, index) in menuList" :key="index">
            <nuxt-link v-if="item.default" :to="item.path">{{
              item.name
            }}</nuxt-link>
            <a v-else :href="item.path">{{ item.name }}</a>
          </li>
        </ul>
      </transition>
    </div>
  </header>
</template>
<script>
export default {
  data() {
    return {
      showMenu: false,
      menuList: [
        {
          default: true,
          path: "/",
          name: "首页",
        },
        {
          default: true,
          path: "/service",
          name: "服务",
        },
        {
          default: true,
          path: "/service",
          name: "产品",
        },
        {
          default: false,
          path: "https://nuxtjs.org",
          name: "官网",
        },
        {
          default: true,
          path: "/merchantsToJoin",
          name: "招商加盟",
        },
        {
          default: true,
          path: "/aboutUs",
          name: "关于我们",
        },
      ],
    };
  },
  watch: {
    $route(res) {
      // console.log(res);
      this.showMenu = false;
    },
  },
  methods: {},
};
</script>
<style>
header {
  background: #cfc9bd;
  z-index: 4;
}
header #menu-logo {
  display: flex;
  align-items: center;
  justify-content: center;
}
header #logo {
  width: 40px;
  height: 40px;
}
header #menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  line-height: 60px;
  margin: 0 20px;
}
header #menu > img:nth-of-type(1) {
  width: 28px;
  height: 22px;
}
header #menu > img:nth-of-type(2) {
  width: 30px;
  height: 30px;
  -webkit-transition: -webkit-transform 1s;
  transition: transform 1s;
}
header #menu > img:nth-of-type(2):hover {
  -webkit-transform: rotate(180deg); /* Chrome, Safari, Opera */
  transform: rotate(180deg);
}
header a,
header a:hover {
  color: white;
}
header > #menu-logo > #menu-ul-pc {
  display: flex;
}
header > #menu-logo > #menu-ul-mobile {
  display: none;
}
header > #menu-logo > ul > li {
  width: 100px;
  height: 60px;
  line-height: 60px;
  text-align: center;
}
.nuxt-link-exact-active {
  color: white;
  border-bottom: 3px solid white;
}
@media screen and (max-width: 768px) {
  header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.3);
  }
  header #menu-logo {
    display: block;
  }
  header > #menu-logo > #menu-ul-pc {
  display: none;
}
  header > #menu-logo > #menu-ul-mobile {
  display: block;
}
  header > #menu-logo > ul {
    height: 100vh;
  }
  header > #menu-logo > ul > li {
    width: 100%;
    margin: 20px 0;
  }
}
</style>
