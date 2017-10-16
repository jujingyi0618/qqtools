// @flow
/* 登录页 */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { createSelector, createStructuredSelector } from 'reselect';
import { Spin, message, Select } from 'antd';
import style from './style.sass';
import commonStyle from '../../../common.sass';
import SmartQQ from '../../../components/smartQQ/SmartQQ';
import option from '../../publicMethod/option';
import { changeQQLoginList, cursorOption } from '../store/reducer';
import callback from '../../../components/callback/index';
import Detail from './Detail';
const fs = node_require('fs');

let qq: ?SmartQQ = null;
let timer: ?number = null;

/**
 * 写入文件
 * @param { string } file: 文件地址
 * @param { Buffer } data: 图片二进制流
 * @return { Promise }
 */
function writeImage(file: string, data: Buffer): Promise{
  return new Promise((resolve: Function, reject: Function): void=>{
    fs.writeFile(file, data, {
      flags: 'w+'
    }, (err: any): void=>{
      if(err){
        reject();
      }else{
        resolve();
      }
    });
  });
}

/* 初始化数据 */
const state: Function = createStructuredSelector({
  qqLoginList: createSelector(         // QQ登录列表
    (state: Object): Object | Array=>state.has('login') ? state.get('login').get('qqLoginList') : [],
    (data: Object | Array): Array=>data instanceof Array ? data : data.toJS()
  ),
  optionList: createSelector(          // QQ配置列表
    (state: Object): Object | Array=>state.has('login') ? state.get('login').get('optionList') : [],
    (data: Object | Array): Array=>data instanceof Array ? data : data.toJS()
  ),
});

/* dispatch */
const dispatch: Function = (dispatch: Function): Object=>({
  action: bindActionCreators({
    changeQQLoginList,
    cursorOption
  }, dispatch)
});

@withRouter
@connect(state, dispatch)
class Login extends Component{
  state: {
    imgUrl: ?string,
    loginState: number,
    qq: ?SmartQQ,
    timer: ?number,
    optionItemIndex: ?number,
    proxyMode: ?string,
    proxyIp: ?string,
    proxyPort: ?number
  };
  constructor(props: Object): void{
    super(props);

    this.state = {
      imgUrl: null,    // 图片地址
      loginState: 0,   // 登录状态，0：加载二维码，1：二维码加载完毕，2：登陆中
      qq: null,
      timer: null,
      optionItemIndex: null, // 当前选择的配置索引
      proxyMode: null,
      proxyIp: null,
      proxyPort: null
    };
  }
  componentWillMount(): void{
    this.props.action.cursorOption({
      indexName: 'time'
    });
    // 格式化代理地址的参数
    if('query' in this.props.location){
      const { proxyMode, proxyIp, proxyPort }: {
        proxyMode: string,
        proxyIp: ?string,
        proxyPort: ?string
      } = this.props.location.query;
      if(proxyMode !== '不使用代理'){
        let m: ?string, i: ?string, p: ?number = null;
        m = proxyMode;
        i = proxyIp;
        if(/^\s*$/.test(proxyIp)){
          m = null;
          i = null;
          p = null;
        }else{
          if(/^\s*$/.test(proxyPort)){
            if(proxyMode === 'http') p = 80;
            if(proxyMode === 'https') p = 443;
          }else{
            p = Number(proxyPort);
          }
        }
        console.log(m, i, p);
        this.setState({
          proxyMode: m,
          proxyIp: i,
          proxyPort: p
        });
      }
    }
  }
  async loginSuccess(): void{
    try{
      qq.loginSuccess(()=>{
        qq.loginSuccessCb();
        // 将新的qq实例存入到store中
        const ll: Array = this.props.qqLoginList;
        ll.push(qq);
        this.props.action.changeQQLoginList({
          qqLoginList: ll
        });
        this.props.history.push('/Login');
      });
    }catch(err){
      console.error('登录错误', err);
      message.error('登录失败！');
    }
  }
  // 判断是否登陆
  async isLogin(){
    // 轮询判断是否登陆
    const [x, cookies2]: [string, Object] = await qq.isLogin();
    const status: string[] = x.split(/[()',]/g); // 2：登陆状态，17：姓名，8：登录地址
    if(status[2] === '65'){
      // 失效，重新获取二维码
      const [dataReset, cookiesReset]: [Buffer, Object] = await qq.downloadPtqr();
      qq.cookie = cookiesReset;
      await writeImage(option.ptqr, dataReset);
      qq.getToken();
      this.setState({
        imgUrl: option.ptqr
      });
    }else if(status[2] === '0'){
      // 登陆成功
      clearInterval(timer);
      timer = null;
      this.setState({
        imgUrl: option.ptqr,
        loginState: 2
      });
      qq.url = status[8];                               // 登录url
      qq.name = status[17];                             // qq昵称
      qq.cookie = Object.assign(qq.cookie, cookies2);
      qq.ptwebqq = qq.cookie.ptwebqq;
      // 获取配置项
      qq.option = this.props.optionList[Number(this.state.optionItemIndex)];
      this.loginSuccess();
    }
  }
  async componentDidMount(): void{
    // 初始化QQ
    try{
      qq = new SmartQQ(callback);
      const [data, cookies]: [Buffer, Object] = await qq.downloadPtqr();
      qq.cookie = cookies;
      // 写入图片
      await writeImage(option.ptqr, data);
      // 计算令牌
      qq.getToken();
      timer = setInterval(this.isLogin.bind(this), 500);
      this.setState({
        imgUrl: option.ptqr,
        loginState: 1
      });
    }catch(err){
      console.error('登录错误', err);
      message.error('初始化失败！');
    }
  }
  componentWillUnmount(): void{
    if(timer) clearInterval(timer); // 清除定时器
    if(qq) qq = null;               // 清除qq相关
  }
  ptqrBody(timeString: number): Object | Array{
    switch(this.state.loginState){
      case 0:
        return (
          <Spin className={ style.ptqr } tip="正在加载二维码..." />
        );
      case 1:
        return [
          <img key={ 0 } className={ style.ptqr } src={ this.state.imgUrl + '?t=' + timeString } alt="登录二维码" title="登录二维码" />,
          this.state.optionItemIndex === null ? (
            <p key={ 1 } className={ style.noOption }>必须先选择一个配置项</p>
          ) : null
        ];
      case 2:
        return (
          <Spin className={ style.ptqr } tip="登陆中...">
            <img className={ `${ style.ptqr } ${ style.o }` } src={ this.state.imgUrl + '?t=' + timeString } alt="登录二维码" title="登录二维码" />
          </Spin>
        );
    }
  }
  // select
  selectOption(): Array{
    return this.props.optionList.map((item: Object, index: number): void=>{
      const index1: string = `${ index }`;
      return (
        <Select.Option key={ index1 } value={ index1 }>
          { item.name }
        </Select.Option>
      );
    });
  }
  onOptionSelect(value: number, option: any): void{
    this.setState({
      optionItemIndex: value
    });
  }
  render(): Object{
    const index: ?number = this.state.optionItemIndex ? Number(this.state.optionItemIndex) : null;
    return (
      <div className={ style.body }>
        <div className={ commonStyle.clearfix }>
          <div className={ style.ptqrBody }>
            { this.ptqrBody(new Date().getTime()) }
          </div>
          <div className={ style.proxy }>
            <p>
              <b>是否使用代理IP：</b>
              { this.state.proxyMode ? '使用代理' : '不使用代理' }
            </p>
            <p>
              <b>IP地址：</b>
              { this.state.proxyIp ? this.state.proxyIp : '-----' }
            </p>
            <p>
              <b>端口号：</b>
              { this.state.proxyPort ? this.state.proxyPort : '-----' }
            </p>
          </div>
        </div>
        <p className={ style.tishi }>
          请用手机QQ扫描登录，或者
          <Link to="/Login">返回</Link>
        </p>
        <div className={ style.changeOption }>
          <label>选择一个配置文件：</label>
          <Select className={ style.select }
                  dropdownClassName={ style.select }
                  value={ this.state.optionItemIndex }
                  onSelect={ this.onOptionSelect.bind(this) }>
            { this.selectOption() }
          </Select>
        </div>
        <Detail detail={ index === null ? null : this.props.optionList[index] } />
      </div>
    );
  }
}

export default Login;