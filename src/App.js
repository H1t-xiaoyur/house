import React, { Component } from 'react'
// import { Button } from 'antd-mobile'
import { HashRouter, Switch, Route } from 'react-router-dom'
import Nav from './pages/nav/Nav'
import Login from './pages/login/Login'
import Reg from './pages/reg/Reg'
// import Main from './pages/nav/main/Main'
import Map from './pages/map/Map'
//配置路由
// 大项目开发思路，绝对不是一次性就能配好，先把一级路由切换配置完毕，搞清大页面的跳转关系
// 二级或更小的路由，写到具体页面时，再去具体配置，这样能极大提升开发效率
export default class App extends Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route path='/' exact component={Nav} ></Route>
                    <Route path='/login' component={Login} ></Route>
                    <Route path='/reg' component={Reg} ></Route>
                    <Route path='/map' component={Map} ></Route>
                </Switch>
            </HashRouter>
        )
    }
}
