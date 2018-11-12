import '@tarojs/async-await';
import { Component } from "@tarojs/taro-h5";
import Nerv from "nervjs";
import { Provider } from "@tarojs/redux-h5";

import configStore from './store';

import './app.less';

import Taro from '@tarojs/taro-h5';
import { Router } from '@tarojs/router';
Taro.initPxTransform({
  "designWidth": 750,
  "deviceRatio": {
    "640": 1.17,
    "750": 1,
    "828": 0.905
  }
});
const store = configStore();

class App extends Component {

  config = {
    pages: ['pages/index/index'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    }
  };

  componentDidMount() {
    this.componentDidShow();
  }

  componentDidShow() {}

  componentDidHide() {}

  componentCatchError() {}

  componentDidCatchError() {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return <Provider store={store}>
                <Router routes={[['/pages/index/index', require('./pages/index/index').default]]} />
              </Provider>;
  }

  componentWillUnmount() {
    this.componentDidHide();
  }

}

Nerv.render(<App />, document.getElementById('app'));