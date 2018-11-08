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
            <td>Typescript</td>
            <td>不支持</td>
          </tr>
          <tr>
            <td>微信 jssdk</td>
            <td>支持</td>
          </tr>
          <tr>
            <td>组件异步加载</td>
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
    }
};
</script>

<style scoped>
</style>
