import React, { Component } from 'react'
import './chat.scss'
export default class Chat extends Component {
    render() {
        return (
            <div className="chat">           
                <div className="chat_cont">
                    <img src={require('../../../assets/imgs/boy.png')}/>
                    <div>

                    <p>置业顾问：<span>张小妹</span></p>
                    <p>专业服务诚信做人诚心做事</p>
                    </div>
                    <div className="chatbtn">我要聊天</div>
                </div>
            </div>
        )
    }
}
