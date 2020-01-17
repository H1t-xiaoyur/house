import React, { Component } from 'react'
import {  InputItem , WingBlank, Button ,WhiteSpace,Flex} from 'antd-mobile'
import { Link } from 'react-router-dom'
import './Reg.scss'

export default class Reg extends Component {
    state={
        phone:'',
        pwd:'',
        num:''
    }
    render() {
        let {phone,pwd,num} = this.state
        return (
            <div className="reg">
                <Flex justify="center">
                    <img style={{ width: 120 }} src={require('../../assets/imgs/logo.png')} alt=""/>
                </Flex>
                {/* <WhiteSpace size="xl" />
                <WhiteSpace size="xl" /> */}
                <div className="main">

                <WingBlank>
                <InputItem
                    placeholder="请输入电话"
                    clear
                    value={phone}
                    onChange={(val) => { this.setState({phone: val})  }}
                >
                </InputItem>
                <WhiteSpace size="sm" />
                <InputItem
                    placeholder="请输入密码"
                    clear
                    type="password"
                    value={pwd}
                    onChange={(val) => { this.setState({pwd: val})  }}
                >
                </InputItem>
                <WhiteSpace size="sm" />
                <InputItem
                    placeholder="请输入验证码"
                    clear
                    value={num}
                    onChange={(val) => { this.setState({num: val})  }}
                >
                </InputItem>
                <WhiteSpace size="md" />
                <WhiteSpace size="md" />
                <input type="radio"/>我已同意《用户服务协议》《隐私权政策》
                <WhiteSpace size="md" />
                <WhiteSpace size="md" />
                <Button style={{backgroundColor:'#1296db',color:'#fff'}}>注册</Button>
                <WhiteSpace size="md" />
                <Link to="/login" style={{color:'#1296db'}}>已有账号</Link>
                </WingBlank>
                </div>
            </div>
        )
    }
}
