import React, { Component } from 'react'
import { Flex, InputItem , WingBlank, Button ,WhiteSpace,Toast} from 'antd-mobile'
import { Link } from 'react-router-dom'
import { login } from '../../api/apis'
import './Login.scss'
export default class Login extends Component {
    state = {
        user: '',   //用户
        pwd: '' ,//密码
        olduser: '', //上一轮的用户
        oldpwd: '' //上一次输入的密码
    }
    render() {
        let { user, pwd} =this.state
        return (
            <div className="login">
                <Flex justify="center">
                    <img style={{ width: 120 }} src={require('../../assets/imgs/logo.png')} alt=""/>
                </Flex>
                <WhiteSpace size="xl" />
                <WhiteSpace size="xl" />
                <WingBlank>
                <InputItem
                    placeholder="请输入用户名"
                    clear
                    value={user}
                    onChange={(val) => { this.setState({user: val})  }}
                >
                    <div style={{ backgroundImage: `url(${require('../../assets/imgs/icon_user.png')})`, backgroundSize: 'cover', height: '22px', width: '22px' }} ></div>
                </InputItem>
                <WhiteSpace size="sm" />
                <InputItem
                    placeholder="请输入密码"
                    clear
                    type="password"
                    value={pwd}
                    onChange={(val) => { this.setState({pwd: val})  }}
                >
                    <div style={{ backgroundImage: `url(${require('../../assets/imgs/icon_pwd.png')})`, backgroundSize: 'cover', height: '22px', width: '22px' }} ></div>
                </InputItem>
                <WhiteSpace size="xl" />
                <Button style={{backgroundColor:'#1296db',color:'#fff'}} onClick={this.clickLogin}>登陆</Button>
                <WhiteSpace size="md" />
                <Flex justify="between">
                    <Link to="/reg" style={{color:'#1296db'}}>手机快速注册</Link>
                    <Link to="/reg" style={{color:'#1296db'}}>忘记密码</Link>
                </Flex>
                </WingBlank>
            </div>
        )
    }
    clickLogin = async () => {
        let user = this.state.user
        //当前的密码
        let pwd = this.state.pwd

        //如果当前用户名和密码和上一轮是一样的        
        if(this.state.olduser === user && this.state.oldpwd === pwd) return

        //只要点击了就立马保存值
        this.setState({
            olduser: user,
            oldpwd: pwd
        })

        let res = await login(user, pwd)
        if (res.data === 'ok') {
            //登录成功
            window.location.href = '#/'
        } else {
            //登录失败
            Toast.fail('用户名或密码错误', 2);
        }
    }
}
