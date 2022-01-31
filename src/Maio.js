import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import it from './images/it.png';
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
import { Helmet } from "react-helmet";
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


class Maio extends Component {


    constructor(props) {
        super(props)
        this.state = {
            isLoaded: false,
            main: "",
            isLoad: false,
            lang: "",
            langLoad: false,
            showModal: false,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.handleChange1 = this.handleChange1.bind(this);
    }

    handleSubmit(e) {
     console.log("fkjdfkl")
        fetch('https://api.mydars.uz/landing/api/create_leed', {
            method: 'POST',

            headers: {
                // 'auth': 'ef899a6d-29d6-4130-8b59-3d95dfbcc9bd',
                'lang': localStorage.getItem('lang'),
                // 'Content-Type': 'application/json',
                'auth': "ef899a6d-29d6-4130-8b59-3d95dfbcc9bd",
                // 'lang': "uz"
                'token': localStorage.getItem('token'),

            },
            body: JSON.stringify({


                "name": this.state.name,
                "phone_number": this.state.phone


            })

        })


            .then(res => res.json())

            .then((data) => {



         console.log(data)
    if(data.error == 0){

    fetch('https://api.mydars.uz/api/get_translates/', {



            headers: {
                // 'auth': 'ef899a6d-29d6-4130-8b59-3d95dfbcc9bd',

                'Content-Type': 'application/json',
                'auth': "ef899a6d-29d6-4130-8b59-3d95dfbcc9bd",
                'lang': localStorage.getItem('lang'),

            },


        }
        )

            // .then(res => res.json())

            .then(res => {

                return res.json();
            })
            .then((data2) => {
            console.log(data2)
            this.setState({
                showModal: false
            })
    NotificationManager.success(data2.translates.messageseonline.text, data2.translates.sended22.text);

            }
            )



}

            }
            )
        // event.preventDefault();

    }
    handleChange(e){
this.setState(
    {
name:e.target.value
    }
)
    }
    handleChange1(e){
this.setState({
    phone:e.target.value
})
    }
    handleToggleModal = () => this.setState({ showModal: !this.state.showModal });
    componentDidMount() {
        fetch('https://api.mydars.uz/api/get_translates/', {



            headers: {
                // 'auth': 'ef899a6d-29d6-4130-8b59-3d95dfbcc9bd',

                'Content-Type': 'application/json',
                'auth': "ef899a6d-29d6-4130-8b59-3d95dfbcc9bd",
                'lang': localStorage.getItem('lang'),

            },


        }
        )

            // .then(res => res.json())

            .then(res => {

                return res.json();
            })
            .then((data) => {
                // console.log(data):


                this.setState({
                    lang: data.translates,
                    langLoad: true
                })

            }
            )

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
        const { isLoaded, langLoad } = this.state
        if (!isLoaded || !langLoad) {
            return (
                <p></p>
            )
        } else {
            return (
                <div>
                         <NotificationContainer />
                        {this.state.showModal && <div className="ext_modal_11">
                        <div className={"ext_modal_11"} onClick={this.handleToggleModal}></div>
                    </div>
                    }

{this.state.showModal && <div className="modal modunesekl modalfeedes">


<div className={"ext_modal"} onClick={this.handleToggleModal}>x</div>

<span className={"kjiioii"}>{this.state.lang.platform3332.text}</span>

 <input className={"nilkoo00"} onChange={this.handleChange} placeholder={this.state.lang.myname444333.text}></input>
 <input className={"nilkoo00"} onChange={this.handleChange1} placeholder={this.state.lang.telephonese233223.text}></input>
    <button className={"fffffee"} onClick={this.handleSubmit}>Отправить</button>


</div>}


                    <Helmet>

                        <meta name="viewport" content="width=1200, initial-scale=1"/>
                    </Helmet>
                    <div className={"container main_container max_hz"}>
                        <div className={" row "}>
                            <div className={"centdisplayt  col-lg-12 col-md-12 col-sm-12 col-12 "}>
                                <div className={""}>
                                    <p className={"ftlandtitlile ftlandtitlile1 futurese3332323"}>{this.state.main.main_block[0].title}</p>
                                    <img alt="" src={this.state.main.main_block[0].icon_url}></img>
                                    <p className={"ftlanddisc ftlanddisc1 lambabukesre"}> {this.state.main.main_block[0].description}</p>
                                    <div className={"dispanamespopl lamporeto777 "}> <button onClick={this.handleToggleModal} className={"btnbottom dispanamespopl0909090"} href={""}>   {this.state.lang.registrtxt.text}</button></div>
                                    <div className={"dispanamespopl lamporeto777"}><button onClick={this.handleToggleModal} className={"btnbottom btnbottom55 dispanamespopl0909090"} href={""}> {this.state.lang.voyti.text}</button></div>
                                </div>
                            </div>
                            <div className={"rep_cart centdisplayt  col-lg-12 col-md-12 col-sm-12 col-12 "}>

                            </div>

                        </div></div>

<div className={"linesssssssssssss"}></div>

                    <div className={"container main_container max_hz"}>
                        <p className={"landtitke nashopoo8887"}>  {this.state.main.advantage_block.block_title}</p>
                        <div className={" row "}>

                            <div className={"rep_cart  rep_cartmini centdisplayt  col-lg-12 col-md-12 col-sm-12 col-12"}>
                                <div className={""}>
                                    <img alt="" src={this.state.main.advantage_block.block_content[0].icon_url}></img>
                                    <p className={"minilandtitile minilandtitile767765765"}>{this.state.main.advantage_block.block_content[0].title}</p>
                                    <p className={"minilanddesc descas1111"}>  {this.state.main.advantage_block.block_content[0].description_ru}</p>

                                </div>
                            </div>
                            <div className={"rep_cart  rep_cartmini centdisplayt  col-lg-12 col-md-12 col-sm-12 col-12"}>
                                <div className={""}>
                                    <img alt="" src={this.state.main.advantage_block.block_content[1].icon_url}></img>
                                    <p className={"minilandtitile minilandtitile767765765"}>{this.state.main.advantage_block.block_content[1].title}</p>
                                    <p className={"minilanddesc descas1111"}>  {this.state.main.advantage_block.block_content[1].description_ru}</p>

                                </div>
                            </div>

                            <div className={"rep_cart  rep_cartmini centdisplayt  col-lg-12 col-md-12 col-sm-12 col-12"}>
                                <div className={""}>
                                    <img alt="" src={this.state.main.advantage_block.block_content[2].icon_url}></img>
                                    <p className={"minilandtitile minilandtitile767765765"}>{this.state.main.advantage_block.block_content[2].title}</p>
                                    <p className={"minilanddesc descas1111"}>  {this.state.main.advantage_block.block_content[2].description_ru}</p>

                                </div>

                                <div className={"dispanamespopl dispanamespopl000067878 "}> <button onClick={this.handleToggleModal} className={"btnbottom btneca435345"} href={""}>   {this.state.lang.testLessonswee.text}</button></div>
                            </div>







                        </div></div>

<div className={"flogonesrelat"}>
    
    <div className={"slideres12"}>
    {this.state.main.slider_block.slider_block.map((message, idx) => (
                                    <div className={" main90483095r89043 "}>
                                        <div className={""}>
                                            <img alt="" className={"imgsrclkk imgsrclkk1"} src={message.icon_url}></img>
                                            <p className={"  mindicaka444 minilandtitile minilandtitile555  minilandtitile45345435"}>{message.name}</p>
                                            <p className={"mindicaka444666 minilanddesc minilanddesc9999 minilanddesc8787766"}>  {message.description}</p>

                                        </div>
                                    </div>
                                ))}
    </div>
     </div>

                    {/* <div className={"container main_container max_hz"}>
                        <p className={"landtitke pohhgg66"}> {this.state.main.slider_block.block_title}</p>
                        <div className={" row "}>



                            <div className={"inl"}>
                                {this.state.main.slider_block.slider_block.map((message, idx) => (
                                    <div className={" rep_cartmini rep_cartmini1 col-lg-12 col-md-12 col-sm-12 col-12 "}>
                                        <div className={""}>
                                            <img alt="" className={"imgsrclkk"} src={message.icon_url}></img>
                                            <p className={"minilandtitile  minilandtitile45345435"}>{message.name}</p>
                                            <p className={"minilanddesc minilanddesc8787766"}>  {message.description}</p>

                                        </div>
                                    </div>
                                ))}
                            </div>



                        </div></div> */}













                    <div className={"container main_container max_hz"}>
                        <p className={"landtitke welcomesensce"}>  {this.state.main.welcome_block.block_title}</p>
                        <div className={" row "}>

                            <div className={" centdisplayt rep_cart rep_cartmini  col-lg-12 col-md-12 col-sm-12 col-12 "}>

                                <Link to={"/reg"}>

                                    <div className={"burjland burjland555 jakassd43534"}>
                                        <p className={"minilandtitile minilandtitile435345345"}>{this.state.main.welcome_block.block_content[1].title}</p>
                                        <img alt="" className={"imraneseg"} src={this.state.main.welcome_block.block_content[1].icon_url}></img>

                                        <p className={"minilanddesc minilanddesc1 stogolm"}> {this.state.main.welcome_block.block_content[1].description_ru}</p>
                                        <button to={"/reg"} onClick={this.handleToggleModal} className={"regamainland regamainland435345"}> {this.state.main.welcome_block.block_content[1].button_text}</button>

                                    </div>
                                </Link>
                            </div>

                            <div className={"centdisplayt rep_cart rep_cartmini  col-lg-12 col-md-12 col-sm-12 col-12 "}>


                                <a href={"https://tutor.mydars.uz/"} >
                                    <div className={"burjland burjland555 jakassd43534"}>
                                        <p className={"minilandtitile minilandtitile435345345"}>{this.state.main.welcome_block.block_content[0].title}</p>
                                        <img alt="" className={"imraneseg"} src={this.state.main.welcome_block.block_content[0].icon_url}></img>

                                        <p className={"minilanddesc minilanddesc1 stogolm"}> {this.state.main.welcome_block.block_content[0].description_ru}</p>
                                        <button className={"regamainland1 regamainland435345"}> {this.state.main.welcome_block.block_content[0].button_text}</button>

                                    </div>
                                </a>
                            </div>









                        </div></div>












                        <div className={"mainocsnasdasd container main_container max_hz"}>
                        <p className={"landtitke socisetishki"}> {this.state.lang.seubsscripo.text}</p>
                        <div className={" row "}>

                            <div className={" centdisplayt rep_cart rep_cartmini  col-lg-12 col-md-12 col-sm-12 col-12 "}>

                            
                            <img alt="" className={"itfdsfsdf itperkooss"} src={it}></img>
                            <p className={"minilanddesc itparkrezidentakol"}>Резиденты IT-PARK</p>
                            <a href={"https://www.facebook.com/mydarsuz/"} className={"dispanamespopl dispanamespopl4 "}> <button  className={"btnbottom btnbottom9 btnbottom9444"} onclick={"'window.location.href='https://www.facebook.com/mydarsuz/"}>   Facebook</button></a>
                            <a href={"https://www.instagram.com/mydarsuz/"} className={"dispanamespopl dispanamespopl4"}> <button  className={"btnbottom btnbottom9 btnbottom9444"} onclick={"'window.location.href='https://www.instagram.com/mydarsuz/"}>   Instagram</button></a>
                            <a href={"https://t.me/mydarsuz"} className={"dispanamespopl dispanamespopl4"}> <button  className={"btnbottom btnbottom9 btnbottom9444"} onclick={"'window.location.href='https://t.me/mydarsuz"}>   Telegram</button></a>

                            <p className={"landtitke telepixel"}>+998 (71) 205 87 00</p>
                            </div>

                        






                        </div></div>


                </div>
            )
        }

    }

}


export default Maio;