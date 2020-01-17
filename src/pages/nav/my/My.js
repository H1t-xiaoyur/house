import React, { Component } from 'react'
import { List } from 'antd-mobile'
import './my.scss'
const Item = List.Item
export default class My extends Component {
    state = {
        list:[
            {img:'icon_fen',text:'我的积分'},
            {img:'ding',text:'我的订阅'},
            {img:''},
            {img:'chatman',text:'微聊联系人'},
            {img:'suan',text:'房贷计算器'},
            {img:'shouc',text:'我的房子'},
            {img:'jilu',text:'我的看房记录'},
            {img:''},
            {img:'wenda',text:'我的问答'},
            {img:'sett',text:'设置'}
        ]
    }
    render() {
        return (
            <div className="my">           
                <div className="myheader">
                    <div className="top">
                        <div className="top_left">
                            <img src={require('../../../assets/imgs/boy.png')}/>
                            <div className="top_text">
                                <h3>登陆/注册</h3>
                                <p>与经纪人发起聊天</p>
                            </div>
                        </div>
                        <img src={require('../../../assets/imgs/set.png')} className="right"/>
                    </div>
                    <div className="bottom">
                        <div className="under line">
                            <p>0</p>
                            <div className="under_con">
                                <img src={require('../../../assets/imgs/qian.png')}/>
                                <span>钱包</span>
                            </div>
                        </div>
                        <div className="under line">
                            <p>0</p>
                            <div className="under_con">
                                <img src={require('../../../assets/imgs/hui.png')}/>
                                <span>优惠</span>
                            </div>
                        </div>
                        <div className="under">
                            <p>0</p>
                            <div className="under_con">
                                <img src={require('../../../assets/imgs/fen.png')}/>
                                <span>积分</span>
                            </div>
                        </div>
                    </div>
                </div>

                <List>
                    {
                        this.state.list.map((obj,i) => {
                            //有图标的时候
                            if (obj.img != '') return <Item
                                thumb={require('../../../assets/imgs/' + obj.img + '.png')}
                                arrow="horizontal"
                                key={i}
                                onClick={() => { }}
                            >{obj.text}</Item>
                            else return <div style={{backgroundColor: '#F4F4F4',height: 8}}></div>
                        })
                    
                    }
                </List>
            </div>
        )
    }
}