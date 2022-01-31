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


class Newa extends Component {


    constructor(props) {
        super(props)
        this.state = {
            isLoaded: false,
            main: "",
            langLoad: false,

        }



    }



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
                    


                    




                        <div className={"container main_container max_hz"}>
                        <p className={"landtitke"}>  {this.state.lang.autorization.text}</p>
                        <div className={" row "}>

                            <div className={"rep_cart rep_cartmini  col-lg-6 col-md-2 col-sm-2 col-2 "}>

<Link  to={"/auth"}>
                                <div className={"burjland burjland1 burjland199999"}>
                                <p className={"minilandtitile"}>{this.state.lang.ichenous.text}</p>
                                    <img alt="" src={this.state.main.welcome_block.block_content[1].icon_url}></img>
                                   
                                    
                              <p><Link to={"/auth"} className={"minilanddesc minilanddesc1 nyyyyy"}> {this.state.lang.starta3352462.text}</Link></p>

                                </div>
                                </Link>

                            </div>

                            <div className={"rep_cart rep_cartmini  col-lg-6 col-md-2 col-sm-2 col-2 "}>
                            <Link  to={"/authp"}>
                                <div className={"burjland burjland2 burjland199999"}>
                                <p className={"minilandtitile"}>{this.state.lang.itexjhjr44.text}</p>
                                    <img alt="" src={this.state.main.welcome_block.block_content[0].icon_url}></img>
                                   
                                    
                                   <p><Link to={"/authp"} className={"minilanddesc minilanddesc1 nyyyyy"}> {this.state.lang.startwenff334.text}</Link></p>

                                </div>
                                </Link>
                            </div>

                     




                         


                        </div>
                        <p className={"landtitke2"}>  {this.state.lang.iamponother.text} <Link to={"/reg"} className={"nyyyyy nyyyyy1"}>{this.state.lang.registeresttextlop.text}</Link></p>
                        </div>

                </div>
            )
        }

    }

}


export default Newa;