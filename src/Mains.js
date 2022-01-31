import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import {
    Button,
    FormControl,
    Form,
    Navbar,
    NavItem,
    NavDropdown,
    MenuItem,
    Nav,
    Dropdown,
    InputGroup,
    Container,
    Row,
    Col,
} from 'react-bootstrap';
import { ImpulseSpinner } from "react-spinners-kit";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { CSSTransitionGroup } from 'react-transition-group' // ES6
import './App.css'
import back_ico from './images/bx-chevron-down.svg'
import row_top from './images/row_top.svg'
import cen_icon_main from './images/cen_icon_main.svg'
import CircleLoader from "react-spinners/CircleLoader";
import row_top_down from './images/row_top_down.svg'
import star_filter_ico from './images/star_filter_ico.svg'

import back_ico1 from './images/back_ico.svg'
import ent from './images/ent.svg'

import bx_search from './images/bx-search.svg'
import soc from './Cht'
import {
    ReactiveBase,
    RangeSlider,
    SelectedFilters,
    ResultList,
    MultiRange,
    DynamicRangeSlider
} from "@appbaseio/reactivesearch";
import header from './Header'
import next_ico_main from './images/next_ico_main.svg'
import ico_msg from './images/ico_msg.svg'
import ico_trial_ico from './images/ico_trial_ico.svg'
import ico_trial_ico1 from './images/ico_trial_ico1.svg'
import checked_profile_ico from './images/checked_profile_ico.svg'
import reting_ico from './images/reting_ico.svg'
import lang_ico from './images/lang_ico.svg'
import profile_icon from './images/profile_icon.svg'
import question_ico from './images/question-ico.svg'
import avatar_mini from './images/avatar_mini.svg'
import { numeralize } from 'numeralize-ru'
import {Helmet} from "react-helmet";
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import moment from 'moment'
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css'
import next from "./images/next1.svg";

import { css } from "@emotion/core";

// const pluralize = require('numeralize').pluralize;

const override = css`
  display: block;
  margin: 261px auto;
  border-color: red;
`;

AOS.init({
    duration: 1200
});
const useStyles = makeStyles({
    root: {
        width: 300,
    },
});

function valuetext(value) {
    return `${value}°C`;
}


class MainPage extends Component {


    constructor(props) {
        super(props)
        this.state = {
            isLoaded: false,
            main: "",

        }



    }



    componentDidMount() {

        fetch('https://api.mydars.uz/landing/api/', {



            headers: {
                // 'auth': 'ef899a6d-29d6-4130-8b59-3d95dfbcc9bd',

                'Content-Type': 'application/json',
                'auth': "ef899a6d-29d6-4130-8b59-3d95dfbcc9bd",
                'lang': localStorage.getItem('lang'),

            },


        }
        )
            .then(res => {

                return res.json();
            })
            .then((data) => {
                console.log(data)
                this.setState({
                    isLoaded: true,
                    main: data
                })

            }
            )
    }
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3
        };
        const { isLoaded } = this.state
        if (!isLoaded) {
            return (
                <p></p>
            )
        } else {
            return (
                <div>
                      <Helmet>
    
                      <meta name="viewport" content="width=1024"></meta>
    </Helmet>
                    <div className={"container main_container max_hz margamonostop max_hz454"}>
                        <div className={" row "}>
                            <div className={"rep_cart  col-lg-8 col-md-8 col-sm-8 col-8 "}>
                                <div className={""}>
                                    <p className={"ftlandtitlile"}>{this.state.main.main_block[0].title}</p>
                                    <p className={"ftlanddisc"}> {this.state.main.main_block[0].description}</p>
                                    <Link className={"btnbottom mainkonu"} to={"/newas"}>   {this.state.main.main_block[0].button_text}</Link>
                                </div>
                            </div>
                            <div className={"rep_cart  col-lg-4 col-md-2 col-sm-2 col-2 "}>
                                <img alt="" src={this.state.main.main_block[0].icon_url}></img>
                            </div>

                        </div></div>



                    <div className={"container main_container max_hz max_hz454"}>
                        <p className={"landtitke margamonostop1"}>  {this.state.main.advantage_block.block_title}</p>
                        <div className={" row "}>

                            <div className={"rep_cart rep_cartmini  col-lg-4 col-md-4 col-sm-4 col-4 "}>
                                <div className={""}>
                                    <img alt="" src={this.state.main.advantage_block.block_content[0].icon_url}></img>
                                    <p className={"minilandtitile"}>{this.state.main.advantage_block.block_content[0].title}</p>
                                    <p className={"minilanddesc"}>  {this.state.main.advantage_block.block_content[0].description_ru}</p>

                                </div>
                            </div>
                            <div className={"rep_cart rep_cartmini  col-lg-4 col-md-4 col-sm-4 col-4 "}>
                                <div className={""}>
                                    <img alt="" src={this.state.main.advantage_block.block_content[1].icon_url}></img>
                                    <p className={"minilandtitile"}>{this.state.main.advantage_block.block_content[1].title}</p>
                                    <p className={"minilanddesc"}>  {this.state.main.advantage_block.block_content[1].description_ru}</p>

                                </div>
                            </div>

                            <div className={"rep_cart rep_cartmini col-lg-4 col-md-4 col-sm-4 col-4"}>
                                <div className={""}>
                                    <img alt="" src={this.state.main.advantage_block.block_content[2].icon_url}></img>
                                    <p className={"minilandtitile"}>{this.state.main.advantage_block.block_content[2].title}</p>
                                    <p className={"minilanddesc"}>  {this.state.main.advantage_block.block_content[2].description_ru}</p>

                                </div>
                            </div>







                        </div></div>



                    <div className={"container main_container max_hz max_hz454"}>
                        <p className={"landtitke yazaki111"}> {this.state.main.slider_block.block_title}</p>
                        <div className={" row "}>

                            <div className={"inl"}>

                                <Slider dots={false}
                                    slidesToShow={3}
                                    infinite={true}
                                    slidesToScroll={1}
                                    autoplay={true}
                                    autoplaySpeed={3000}>



                                    {this.state.main.slider_block.slider_block.map((message, idx) => (
                                        <div className={"rep_cart rep_cartmini rep_cartmini1 col-lg-12 col-md-12 col-sm-12 col-12 "}>
                                            <div className={"detaliseimageser"}>
                                                <img alt="" src={message.icon_url}></img>
                                                <p className={"minilandtitile"}>{message.name}</p>
                                                <p className={"minilanddesc"}>  {message.description}</p>

                                            </div>
                                        </div>
                                    ))}

                                </Slider>
                            </div>



                        </div></div>













                        <div className={"container main_container max_hz max_hz454 magarestiks"}>
                        <p className={"landtitke landtitke999999"}>  {this.state.main.welcome_block.block_title}</p>
                        <div className={" row "}>

                            <div className={"rep_cart rep_cartmini  col-lg-6 col-md-6 col-sm-6 col-6 "}>

                                <Link  to={"/reg"}>
                                
                                <div className={"burjland burjland555"}>
                                <p className={"minilandtitile"}>{this.state.main.welcome_block.block_content[1].title}</p>
                                    <img alt="" className={"flushu"} height={"190px"} src={this.state.main.welcome_block.block_content[1].icon_url}></img>
                                   
                                    <p className={"minilanddesc minilanddesc1"}> {this.state.main.welcome_block.block_content[1].description_ru}</p>
                                    <div className={"absone"}> <div to={"/reg"}  className={"regamainland"}> {this.state.main.welcome_block.block_content[1].button_text}</div></div>
                                    

                                </div>
                                </Link>
                            </div>

                            <div className={"rep_cart rep_cartmini  col-lg-6 col-md-6 col-sm-6 col-6 "}>
                                
                                
                                <a href={"https://tutor.mydars.uz/"} >
                                <div className={"burjland burjland555"}>
                                <p className={"minilandtitile"}>{this.state.main.welcome_block.block_content[0].title}</p>
                                    <img alt="" className={"flushu"} height={"190px"} src={this.state.main.welcome_block.block_content[0].icon_url}></img>
                                   
                                    <p className={"minilanddesc minilanddesc1"}> {this.state.main.welcome_block.block_content[0].description_ru}</p>
                                    <div className={"absone"}>
                                    <div  className={"regamainland1"}> {this.state.main.welcome_block.block_content[0].button_text}</div></div>
                                    


                                 

                                </div>
                                </a>
                            </div>

                     







                        </div></div>

                </div>
            )
        }

    }

}


export default MainPage;