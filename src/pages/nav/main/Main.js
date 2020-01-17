import React, { Component } from 'react'
import { Carousel ,Grid } from 'antd-mobile'
import { Link } from 'react-router-dom'
import './Main.scss'
import {gethouselist,IP} from '../../../api/apis'

const data = [{icon:require('../../../assets/imgs/icon_new.png'),text:'新房'},
                {icon:require('../../../assets/imgs/icon_er.png'),text:'二手房'},
                {icon:require('../../../assets/imgs/icon_zu.png'),text:'租房'},
                {icon:require('../../../assets/imgs/icon_xie.png'),text:'商铺写字楼'},
                {icon:require('../../../assets/imgs/icon_sell.png'),text:'卖房'},
                {icon:require('../../../assets/imgs/icon_fly.png'),text:'海外房产'},
                {icon:require('../../../assets/imgs/icon_samll.png'),text:'小区房价'},
                {icon:require('../../../assets/imgs/icon_que.png'),text:'问答'},]
const data2 =[{icon:require('../../../assets/imgs/icon_dai.png'),text:'我要贷款'},
{icon:require('../../../assets/imgs/icon_ji.png'),text:'房贷计算'},
{icon:require('../../../assets/imgs/icon_konw.png'),text:'知识'},
{icon:require('../../../assets/imgs/icon_sao.png'),text:'扫一扫'},]
export default class Main extends Component {
    state = {
        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
        imgHeight: 176,
        list:[],
        city:'定位中'
      }
      //获取城市
    
      componentWillUnmount = () => {
        this.setState = (state,callback)=>{
          return;
        };
    }
    
         
    
      componentDidMount(){
        gethouselist().then(res=>{
            this.setState({
                list:res.data
            })
        })
       //实例化城市查询类 
       let _this=this
       var citysearch = new window.AMap.CitySearch();
       //自动获取用户IP，返回当前城市
       citysearch.getLocalCity(function(status, result) {
           if (status === 'complete' && result.info === 'OK') {
               if (result && result.city && result.bounds) {
                   var cityinfo = result.city;
                   var citybounds = result.bounds;
                  _this.setState({
                    city:cityinfo
                  })
                   //地图显示当前城市
                  //  map.setBounds(citybounds);
               }
           } else {
               console.log(result.info);
           }
       });
    }
    
    render() {
        let {list,city} = this.state
        return (
            <div className="main_cont">
                <div className="search_box">
                <Link to="/map"> <label>{city}▼</label></Link>
                    <div className="search_center">
                        <img src={require('../../../assets/imgs/icon_search.png')} />
                        <label>请输入楼盘名、商铺地址</label>
                    </div>
                    <img src={require('../../../assets/imgs/icon_map.png')} />
                </div>
                {/* 走马灯 */}
                <div>
                    <Carousel
                        autoplay
                        infinite
                    >
                        {this.state.data.map(val => (
                            <a
                                key={val}
                                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                            >
                                <img
                                    src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                                    alt=""
                                    style={{ width: '100%', verticalAlign: 'top' }}
                                    onLoad={() => {
                                        // fire window resize event to change height
                                        window.dispatchEvent(new Event('resize'));
                                        this.setState({ imgHeight: 'auto' });
                                    }}
                                />
                            </a>
                        ))}
                    </Carousel>
                </div>
                {/* 宫格 */}
                <div >
                <Grid data={data} hasLine={false} />
                </div>
                <div className="introduce">
                </div>
                    <div className="title_house">
                        <h3>房产全百科</h3>
                        <p>专业的买房攻略</p>
                    </div>
                    <div>
                    <Grid data={data2} hasLine={false} />
                    </div>
                       {/* 猜你喜欢              */}
                <div className="like">
                    <h4>猜你喜欢</h4>

                   
                {

                list.map((obj,i)=>
                    <div className="houselist" key={obj.name}>
                        <div className="left">
                            <img src={IP+obj.imgs}/>
                            <div>
                                <h3>{obj.name}</h3>
                                <p>{obj.area} {obj.range}</p>
                                <p>{obj.type} {obj.point}平</p>
                            </div>
                        </div>
                        <p className="right">{obj.price}/平</p>
                    </div>

                 )
                }
                 
                
                       
                    

                </div>
            </div>
        )
        
    }
}