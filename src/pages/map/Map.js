import React, { Component } from 'react'
import { SearchBar, WingBlank } from 'antd-mobile'
import { Link } from 'react-router-dom'
import BScroll from 'better-scroll'
import './Map.scss'
import listarr from '../json/citylist.json'
export default class Nav extends Component {
    state = {

    };
    componentDidMount() {
        this.leftBox = new BScroll('.leftbox')
    }

    render() {
        return (
            <div className="map">
                <div className="map_top">
                    <div className="header"><Link to="/"><img src={require('../../assets/imgs/icon_left.png')} /></Link><h3>选择城市</h3></div>
                    <WingBlank>
                        <SearchBar placeholder="输入城市名进行搜索" maxLength={10} />
                    </WingBlank>
                </div>
                <div className="map_main">
                    <div className="leftbox">
                        <ul className='content'>
                            {
                                listarr.map(obj => <div id={obj.title}>
                                    <h3>{obj.title}</h3>
                                    <div className="cityins">{
                                        obj.child.map(city => <p className="cityname">{city}</p>)}
                                    </div>
                                    
                                </div>)
                            }
                        </ul>
                    </div>
                    <div className="rightbox">
                    <div>{
                                listarr.map(val=>
                                <p>{val.title}</p>
                                )
                            }
                            </div>
                    </div>
                </div>

            </div>
        );
    }
}
