import React, { Component } from 'react'
import ServerFailure from '../ServerFailure';

export default class ErrorBoundary extends Component {

  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  //此接口会在渲染出错的时候调用
  static getDerivedStateFromError(error) {
    // 更新 state 使下一次渲染能够显示降级后的 UI
    return { hasError: error };
  }

  /* componentDidCatch(error, errorInfo) {
    // 你同样可以将错误日志上报给服务器
      logErrorToMyService(error, errorInfo);
    } */

  //统计错误次数 发送给后台
  componentDidCatch(){
    console.log('此处统计错误，反馈给服务器，用于通知编码人员进行bug的解决')
  }

  render() {
    if (this.state.hasError) {
    // 你可以自定义降级后的 UI 并渲染
      return <ServerFailure />;
    }
    return this.props.children;
  }
}

