import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './assets/styles/index.scss'
//引入全局UI样式
import 'antd-mobile/dist/antd-mobile.css'

ReactDOM.render(
<div className="index"><App/></div>
, document.getElementById('root'))