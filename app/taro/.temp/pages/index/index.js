import Taro from '@tarojs/taro-h5';
import { Component } from "@tarojs/taro-h5";
import Nerv from "nervjs";
import { View, Text } from "@tarojs/components";
import { connect } from "@tarojs/redux-h5";

import "./index.less";

@connect(({ counter }) => ({
  counter
}))
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null
    };
  }
  config = {
    navigationBarTitleText: "首页"
  };
  componentDidMount() {
    Taro.request({
      url: "http://localhost/getIP",
      method: "GET",
      header: {
        "content-type": "application/json"
      }
    }).then(res => this.setState({ value: res.data.ip_list[0] }));
  }

  render() {
    return <View className="index">
        <View style="text-align:center">
          <Text>Taro</Text>
        </View>
        <View style="text-align:center">
          文档地址：
          <a href="https://nervjs.github.io/taro/" target="__block">
            https://nervjs.github.io/taro/
          </a>
        </View>
        <View style="text-align:center">
          <table width="100%">
            <thead>
              <tr style="background-color: #F7F7F7">
                <th width="30%">项目</th>
                <th width="70%">说明</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>平台</td>
                <td>移动端</td>
              </tr>
              <tr>
                <td>移动端支持</td>
                <td>暂无要求</td>
              </tr>
              <tr>
                <td>是否开源</td>
                <td>开源</td>
              </tr>
              <tr>
                <td>编译产物</td>
                <td>H5,微信小程序,百度小程序,支付宝小程序,React Native</td>
              </tr>
              <tr>
                <td>文档</td>
                <td>有，详细</td>
              </tr>
              <tr>
                <td>依赖</td>
                <td>react,tarojs/cli</td>
              </tr>
              <tr>
                <td>路由</td>
                <td>自带</td>
              </tr>
              <tr>
                <td>状态管理</td>
                <td>redux</td>
              </tr>
              <tr>
                <td>ajax</td>
                <td>自带Taro.request</td>
              </tr>
              <tr>
                <td>国际化</td>
                <td>无</td>
              </tr>
              <tr>
                <td>自定义主题</td>
                <td>第三方 UI 库</td>
              </tr>
              <tr>
                <td>动画</td>
                <td>canvas组件,css3</td>
              </tr>
              <tr>
                <td>音频，视频</td>
                <td>audio组件,video组件</td>
              </tr>
              <tr>
                <td>Typescript</td>
                <td>支持</td>
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
                <td>echarts-for-weixin</td>
              </tr>
              <tr>
                <td>地图</td>
                <td>百度地图，高德地图等</td>
              </tr>
              <tr>
                <td>支付</td>
                <td>微信支付,第三方支付平台</td>
              </tr>
              <tr>
                <td>小程序第三方组件</td>
                <td>支持</td>
              </tr>
              <tr>
                <td>小程序原生代码支持</td>
                <td>支持混写</td>
              </tr>
              <tr>
                <td>调取微信接口例子</td>
                <td> {this.state.value} </td>
              </tr>
            </tbody>
          </table>
        </View>
      </View>;
  }
}

export default Index;