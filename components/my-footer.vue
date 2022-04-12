<template>
  <footer>
    <div style="width: 70%" class="marginauto">
      <div class="flex justify-between flex-wrap">
        <div class="column">
          <div>
            <div class="mainColumn text-bold"><a href="#">服务</a></div>
            <div class="subColumn"><a href="#">服务产品</a></div>
            <div class="subColumn"><a href="#">服务流程</a></div>
          </div>
          <div>
            <div class="mainColumn text-bold"><a href="#">产品</a></div>
            <div class="subColumn"><a href="#">枕头</a></div>
            <div class="subColumn"><a href="#">床垫</a></div>
            <div class="subColumn"><a href="#">凉席</a></div>
          </div>
          <div>
            <div class="mainColumn text-bold"><a href="#">新闻</a></div>
            <div class="subColumn"><a href="#">新闻一</a></div>
            <div class="subColumn"><a href="#">新闻二</a></div>
          </div>
          <div>
            <div class="mainColumn text-bold"><a href="#">招商加盟</a></div>
            <div class="subColumn"><a href="#">加盟优势</a></div>
            <div class="subColumn"><a href="#">收益来源</a></div>
            <div class="subColumn"><a href="#">加盟申请</a></div>
          </div>
          <div>
            <div class="mainColumn text-bold"><a href="#">关于我们</a></div>
            <div class="subColumn"><a href="#">品牌介绍</a></div>
            <div class="subColumn"><a href="#">运营理念</a></div>
            <div class="subColumn"><a href="#">项目介绍</a></div>
          </div>
        </div>
        <div class="officialWechat">
          <div class="mainColumn text-bold">官方微信</div>
          <div>
            <img
              class="img-size"
              src="/images/wx.png"
              alt="官方微信"
            />
          </div>
        </div>
      </div>
      <p class="margin-tb">
        &copy; 2019-现在 云选家网络科技(广东) 有限公司
        版权所有，并保留所有权力。
      </p>
      <p>
        粤ICP备19084665号 联系电话：0769-83433607
        公司地址：广东省东莞市桥头镇桥头桥东路南二街150号
      </p>
    </div>
  </footer>
</template>
<style>
/* footer */
footer {
  background: #353235;
  color: #efecef;
  padding-top: 20px;
  padding-bottom: 20px;
}
footer a {
  display: block;
  color: #efecef;
  text-decoration: none;
}
footer a span {
  padding-left: 3px;
  padding-right: 3px;
}
footer .column {
  width: 70%;
  display: flex;
  justify-content: space-around;
  margin-bottom: 30px;
}
footer .officialWechat {
  width: 10%;
}
footer .mainColumn {
  font-size: 18px;
  padding: 10px 0px;
}
footer .subColumn {
  font-weight: 100;
  padding: 5px 0px;
}
footer .subColumn > a:hover {
  color: #eb9220;
}
footer .friendshipTies {
  display: none;
}
/* 手机屏幕的字体大小 */
@media screen and (max-width: 860px) {
  footer .column {
    width: 100%;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
  footer .column > div {
    width: 33%;
    text-align: center;
  }
  footer .officialWechat {
    display: block;
    width: 50%;
    margin: 0 auto;
  }
}
</style>
