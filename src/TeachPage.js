import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {withRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

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
    Container,
    Row,
    DropdownButton,
    Col, Carousel
} from 'react-bootstrap';
import NumberFormat from 'react-number-format';
import './App.css'
import back_ico from './images/bx-chevron-down.svg'
import row_top from './images/row_top.svg'
import cen_icon_main from './images/cen_icon_main.svg'

import row_top_down from './images/row_top_down.svg'
import star_filter_ico from './images/star_filter_ico.svg'


import next_ico_main from './images/next_ico_main.svg'
import ico_msg from './images/ico_msg.svg'
import ico_trial_ico from './images/ico_trial_ico.svg'
import checked_profile_ico from './images/checked_profile_ico.svg'
import reting_ico from './images/reting_ico.svg'
import lang_ico from './images/lang_ico.svg'
import profile_icon from './images/profile_icon.svg'
import question_ico from './images/question-ico.svg'
import avatar_mini from './images/avatar_mini.svg'
import reg_check from './images/reg_check.svg'
import reg_uncheck from './images/reg_uncheck.svg'
import bx_chevron_right from './images/bx-chevron-right.svg'

import camera_ico from './images/bxs-camera.svg'
import cloudupload from './images/bx-cloud-upload.svg'

import PageLast from './PageLast'

import Videomess from './Videomess'
import Rezume from './Rezume'
import TeacherCreate from "./TeacherCreate";
import SmsReg from "./SmsReg";
import Desc from './Desc'
import Veref from './Veref'
import Pred from './Pred'



class TeachPage extends Component {
    state = {showModal: false};

    constructor() {
        super()
        this.state = {
            isLoaded: false,
            create: {},
            language: "",
            levels: "",
            name: "",
            birth_country_id: "1",
            email: '',
         
            languages: [],
            shareholders: [{language_id: '', level: ""}],
            lgstate: "",
            contstate: "",
            monst: [{language_id: "111", level: ""}],
            phone: "",
            send: "",
            enject: false,
            code: '',
            image: null,
            file: null,
            page: 1,

        }
        this.changeUnit = this.changeUnit.bind(this);
    }

    changeUnit(item) {
        console.log(item)
        this.setState({
            // page: item,
            // isLoaded: true,
        })
    }

    componentDidMount() {
        if (localStorage.getItem('token') == "" || localStorage.getItem('token') == null || localStorage.getItem('token') == undefined) {
            console.log("00000000000000000000000")
            fetch('https://api.mydars.uz/api/registration/', {
                // method: 'GET',


                // headers: {
                //     'auth': 'ef899a6d-29d6-4130-8b59-3d95dfbcc9bd',
                //     'lang': 'uz',
                //
                //
                // },
                // body: JSON.stringify({
                //     "params": {}
                // })

            })


                .then(res => res.json())

                .then((data) => {
                        this.setState({
                            isLoaded: true
                        });


                        console.log(data)
                    }
                )
        } else if (localStorage.getItem('page') == 2) {
            console.log("1111111111111111111111111111111")
            this.setState({
                page: 2
            })
            fetch('https://api.mydars.uz/api/registration/', {
                headers: {
                    // 'auth': 'ef899a6d-29d6-4130-8b59-3d95dfbcc9bd',
                    // 'lang': 'uz',
                    // 'Content-Type': 'application/json',
                    'auth': "ef899a6d-29d6-4130-8b59-3d95dfbcc9bd",
                    'lang': localStorage.getItem('lang'),
                    'token': localStorage.getItem('token')
                },
            })

                .then(res => res.json())

                .then((data) => {
                    console.log("2222222222222222222222222222222222")
                    console.log(data)
                        this.setState({
                            create: data,
                            isLoaded: true,
                            language: data.data.languages.available_languages,
                            levels: data.data.languages.levels,

                        });


                    }
                )
        }else if(localStorage.getItem('token').length > 0){
            console.log("3333333333333333333333333333333")
            fetch('https://api.mydars.uz/api/registration/', {
                headers: {
                    // 'auth': 'ef899a6d-29d6-4130-8b59-3d95dfbcc9bd',
                    // 'lang': 'uz',
                    // 'Content-Type': 'application/json',
                    'auth': "ef899a6d-29d6-4130-8b59-3d95dfbcc9bd",
                    'lang': localStorage.getItem('lang'),
                    'token': localStorage.getItem('token')
                },
            })

                .then(res => res.json())

                .then((data) => {
                        console.log(data)

                   if(data.profile.is_user == true){
this.setState({
    page: 500
})
                   }else{
                       if(data.profile.reg_page == 2){
                           localStorage.setItem('page', data.profile.reg_page)
                        this.setState({
                            create: data,
                            isLoaded: true,
                            language: data.data.languages.available_languages,
                            levels: data.data.languages.levels,
    
                            page: data.profile.reg_page
                        });
                       }else{
                        this.setState({
                            create: data,
                            isLoaded: true,
                            language: data.data.languages.available_languages,
                            levels: data.data.languages.levels,
    
                            page: data.profile.reg_page
                        });
                       }
                    

                   }

                    }
                )
        }


    }


    render() {
        console.log(localStorage.getItem('token'))
        console.log(this.state.create)
        console.log("sssssssssssss")
        const {isLoaded} = this.state
if(!isLoaded){
return(
    <p></p>
)
}else
{
    if (this.state.page == 1) {
        return (
            <SmsReg
                mainPage={
                    {
                        page: 1,
                        changeUnit: this.changeUnit.bind(this)
                    }
                }
            ></SmsReg>
        )
    }
    if (localStorage.getItem('page') == 2) {
        return (
            <TeacherCreate
                mainPage={
                    {
                        page: 2,
                        changeUnit: this.changeUnit.bind(this)
                    }
                }
            ></TeacherCreate>
        )

    }


    if (this.state.page == 3) {
        return (
            <Rezume
                mainPage={
                    {
                        page: 3,
                        changeUnit: this.changeUnit.bind(this)
                    }
                }
            ></Rezume>
        )

    }

    if (this.state.page == 4) {
        return (
            <Desc mainPage={
                {
                    page: 3,
                    changeUnit: this.changeUnit.bind(this)
                }
            }></Desc>
        )

    }
    if (this.state.page == 5) {
        return (
            <Pred mainPage={
                {
                    page: 3,
                    changeUnit: this.changeUnit.bind(this)
                }
            }></Pred>
        )

    }
    if (this.state.page == 6) {
        return (
            <Videomess mainPage={
                {
                    page: 3,
                    changeUnit: this.changeUnit.bind(this)
                }
            }></Videomess>
        )

    }
    if (this.state.page == 7) {
        return (
            <Veref mainPage={
                {
                    page: 3,
                    changeUnit: this.changeUnit.bind(this)
                }
            }></Veref>
        )

    }
    if (this.state.page == 8) {
        return (
            <PageLast mainPage={
                {
                    page: 3,
                    changeUnit: this.changeUnit.bind(this)
                }
            }></PageLast>
        )

    }
    if (this.state.page == 500) {
        return (
         <div className={"title_avtorix"}>Вы авторизованы как ученик</div>
        )
    }
}

     



    }
}


export default TeachPage;