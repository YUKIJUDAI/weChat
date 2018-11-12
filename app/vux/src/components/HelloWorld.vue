<template>
  <div>
    <group>
      <cell title="vux:基于vue + weui(微信官方ui)开发">     
      </cell>
      <cell title="文档地址">
          <a href="https://doc.vux.li/zh-CN/" target="__block">https://doc.vux.li/zh-CN/</a>
      </cell>            
    </group>
    <x-table :cell-bordered="false" :content-bordered="false" style="background-color:#fff;">
        <thead>
          <tr style="background-color: #F7F7F7">
            <th>项目</th>
            <th>说明</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>平台</td>
            <td>移动端为主</td>
          </tr>
          <tr>
            <td>移动端支持</td>
            <td>推荐 iOS >= 7, Android >= 4.1</td>
          </tr>
          <tr>
            <td>是否开源</td>
            <td>开源</td>
          </tr>
          <tr>
            <td>编译产物</td>
            <td>H5</td>
          </tr>
          <tr>
            <td>文档</td>
            <td>有，较为详细</td>
          </tr>
          <tr>
            <td>依赖</td>
            <td>vue,weui,vue-loader,vux-loader,less</td>
          </tr>
          <tr>
            <td>路由</td>
            <td>vue-router</td>
          </tr>
          <tr>
            <td>状态管理</td>
            <td>vuex,rxjs</td>
          </tr>
          <tr>
            <td>ajax</td>
            <td>自带AjaxPlugin依赖 axios</td>
          </tr>
          <tr>
            <td>国际化</td>
            <td>vux-i18n</td>
          </tr>
          <tr>
            <td>自定义主题</td>
            <td>less-theme</td>
          </tr>
          <tr>
            <td>动画</td>
            <td>原生canvas,css3</td>
          </tr>
          <tr>
            <td>音频，视频</td>
            <td>原生audio,原生video</td>
          </tr>
          <tr>
            <td>Typescript</td>
            <td>不支持</td>
          </tr>
          <tr>
            <td>异步编程</td>
            <td>支持</td>
          </tr>
          <tr>
            <td>组件</td>
            <td>详见文档</td>
          </tr>
          <tr>
            <td>工具</td>
            <td>详见文档</td>
          </tr>
          <tr>
            <td>图表</td>
            <td>VChart,XCircle</td>
          </tr>
          <tr>
            <td>地图</td>
            <td>百度地图，高德地图等</td>
          </tr>
          <tr>
            <td>支付</td>
            <td>微信钱包,第三方支付平台</td>
          </tr>
          <tr>
            <td>微信 jssdk</td>
            <td>支持</td>
          </tr>
          <tr>
            <td>调取微信接口例子</td>
            <td>{{ip}}</td>
          </tr>
        </tbody>
    </x-table>
  </div>
</template>

<script>
import { Group, Cell, XTable } from "vux";
export default {
    components: {
        Group,
        Cell,
        XTable
    },
    data() {
        return {
            ip: ""
        };
    },
    created() {
        this.$http.get("http://localhost/getIP").then(res => {
            this.ip = "获取到的ip地址为" + res.data.ip_list[0];
        });
    }
};
</script>

<style scoped>
</style>
