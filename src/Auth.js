/**
 * Created by Nikolay on 17.01.2021.
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router-dom";

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
import del from './images/del.svg'
import camera_ico from './images/bxs-camera.svg'
import cloudupload from './images/bx-cloud-upload.svg'
import mini from './images/mini.svg'
import add from './images/add.svg'

import in1 from './images/in1.svg'
import in2 from './images/in2.svg'

import next from './images/next.svg'
import reg from './images/reg.svg'

import auth from './images/auth.svg'
class Auth extends Component {
    state = { showModal: false };

    constructor() {
        super()
        this.state = {

            radio: true,
            radio1: true,
            of: false,
            of1: true,
            pass: "",
            email: "",
            phone: "",
            number: "",
            input: {},
            err: false,
            main: "",
            errors: {},
            lang:"",
            langLoad: false,
        }

        this.handler = this.handler.bind(this);
        this.handler1 = this.handler1.bind(this);
        this.handlePass = this.handlePass.bind(this);

        this.handleradio1Change = this.handleradio1Change.bind(this);


        this.handleradioChange1 = this.handleradioChange1.bind(this);
        this.handleradio1Change1 = this.handleradio1Change1.bind(this);


        this.handleChangecn1 = this.handleChangecn1.bind(this);
        this.handleChangeln1 = this.handleChangeln1.bind(this);


        this.handleemailChange = this.handleemailChange.bind(this);
        this.handleemailChange1 = this.handleemailChange1.bind(this);
        this.handleAdd = this.handleAdd.bind(this);


        this.handleChange0 = this.handleChange0.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange0(event) {
        let input = this.state.input;
        input[event.target.name] = event.target.value;
        console.log(input)
        this.setState({
            input
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        if (this.validate()) {
            console.log(this.state);
            console.log(this.state.input)
            let input = {};
            input["name"] = "";
            input["email"] = "";

            this.setState({ input: input });



            if (this.state.input.email.substring(0, 3) == 998) {
                fetch('https://api.mydars.uz/api/auth/login/', {
                    method: 'POST',


                    headers: {
                        // 'auth': 'ef899a6d-29d6-4130-8b59-3d95dfbcc9bd',
                        // 'lang': 'uz',
                        // "Content-Type": "multipart/form-data",
                        'auth': "ef899a6d-29d6-4130-8b59-3d95dfbcc9bd",
                        'lang': localStorage.getItem('lang'),
                        'token': localStorage.getItem('token')
                    },
                    body: JSON.stringify({

                        "phone_number": this.state.input.email,

                        "password": this.state.input.name,

                        "is_user": this.state.of1
                    })

                })


                    .then(res => res.json())

                    .then((data) => {

                        console.log(data)
                        if (data.is_error == false) {
                        

                            if (data.profile.is_user == true) {
                                localStorage.setItem('is_user', data.profile.is_user);
                                localStorage.setItem('token', data.token);
                                if(sessionStorage.getItem('link')){
  
    
                                    window.location.replace(sessionStorage.getItem("link"));
                                }else{
                                
    
                                    window.location.replace("/profile");
                                }
                            } else {
                                if (data.profile.reg_page < 8) {

                                    localStorage.setItem('token', data.token);
                                    window.location.replace("/teachercreate");


                                } else {
                                    localStorage.setItem('is_user', data.profile.is_user);
                                    localStorage.setItem('token', data.token);

                                    window.location.replace("/profile");

                                }
                            }
                            // this.props.history.push("/profile");
                        } else if (data.is_error == true) {

                            
                            this.setState({
                                err: data.is_error,
                                main: data
                            })
                        }
                    }
                    )
            } else {
                fetch('https://api.mydars.uz/api/auth/login/', {
                    method: 'POST',


                    headers: {
                        // 'auth': 'ef899a6d-29d6-4130-8b59-3d95dfbcc9bd',
                        // 'lang': 'uz',
                        // "Content-Type": "multipart/form-data",
                        'auth': "ef899a6d-29d6-4130-8b59-3d95dfbcc9bd",
                        'lang': localStorage.getItem('lang'),
                        'token': localStorage.getItem('token')
                    },
                    body: JSON.stringify({


                        "password": this.state.input.name,
                        "email": this.state.input.email,
                        "is_user": this.state.of1
                    })

                })


                    .then(res => res.json())

                    .then((data) => {

                        console.log(data)
                        if (data.is_error == false) {



                            if (data.profile.is_user == true) {
                                localStorage.setItem('is_user', data.profile.is_user);
                                localStorage.setItem('token', data.token);

                        

                                if(sessionStorage.getItem('link')){
  
    
                                    window.location.replace(sessionStorage.getItem("link"));
                                }else{
                                
    
                                    window.location.replace("/profile");
                                }

                            } else {
                                if (data.profile.reg_page < 8) {

                                    localStorage.setItem('token', data.token);
                                    window.location.replace("/teachercreate");


                                } else {
                                    localStorage.setItem('is_user', data.profile.is_user);
                                    localStorage.setItem('token', data.token);

                                    window.location.replace("/profile");

                                }
                            }


                        } else if (data.is_error == true) {
                            this.setState({
                                err: data.is_error,
                                main: data
                            })
                        }
                    }
                    )
            }


        }
    }

    validate() {
        let input = this.state.input;
        let errors = {};
        let isValid = true;

        if (!input["name"]) {

            isValid = false;
            errors["name"] = "Please enter your name.";
        }

        if (!input["email"]) {
            isValid = false;
            errors["email"] = "Заполните email или номера телефона";
        }



        if (typeof input["email"] !== "undefined") {
            var pattern1 = new RegExp(/^\+?([0-9]{3})\)?[-. ]?([0-9]{2})?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/);
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

            // const str = '9989043333333';
            const str = input.email;
            console.log(str.substring(0, 3));  
console.log(pattern.test(input["email"]))
console.log(pattern1.test(input["email"]))
            if (str.substring(0, 3) !== "998") {


                if (!pattern.test(input["email"])) {
                    isValid = false;
                    errors["email"] = "Неправильный формат email или номера телефона";
                }

            } else {
                if (!pattern1.test(input["email"])) {
                    isValid = false;
                    errors["email"] = "Неправильный формат email или номера телефона";
                }
            }

            // if (pattern1.test(input["email"])) {
            //     // isValid = false;
            //   console.log("phone")
            // }
            //
            // if(pattern.test(input["email"])) {
            //     // isValid = false;
            //     console.log("email")
            // }
            //
            //
            // if (!pattern.test(input["email"])) {
            //     isValid = false;
            //     errors["email"] = "Неправильный формат email или номера телефона";
            // }


        }


        this.setState({
            errors: errors
        });

        return isValid;
    }


    handlePass(event) {
        console.log(event.target.value)
        this.setState({
            pass: event.target.value
        })
    }

    handleAdd(event) {
        const main = {
            "phone_number": this.state.phone,

            "password": this.state.pass,
            "email": this.state.email,
            "is_user": this.state.of1
        }

    }

    handleemailChange(event) {
        console.log(event.target.value)
        this.setState({ number: event.target.value })
    }

    handleemailChange1(event) {
        this.setState({ email: event.target.value })
    }


    handler = (e) => {
        const { target } = e;
        const value = target.type == 'checkbox' ? target.checked : target.value;
        const { name } = target;
        console.log(value)
        if (value == false) {
            this.setState({
                of: false
            })
        } else {
            this.setState({
                of: true
            })
        }
    };
    handler1 = (e) => {
        const { target } = e;
        const value = target.type == 'checkbox' ? target.checked : target.value;
        const { name } = target;
        console.log(value)
        if (value == true) {
            this.setState({
                of1: false
            })
        } else {
            this.setState({
                of1: true
            })
        }
    };

    handleradio1Change(event) {
        console.log("test2")
        // console.log(event.target.value)
        this.setState({
            radio: false
        })
        this.forceUpdate();
    }

    handleradioChange1(event) {
        // console.log(event.target.value)
        this.setState({
            radio1: true
        })
    }

    handleradio1Change1(event) {

        this.setState({
            radio1: false
        })
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
                // console.log(data)


                this.setState({
                    lang: data.translates,
                    langLoad: true,
                })

            }
            )

    }


    saveMobile0 = obj => {

        var newObj = {};

        Object.assign(newObj, this.state.pusara)

        const lop = {
            "list_id": newObj
        }
        console.log(lop)
        fetch('https://api.mydars.uz/api/registration/add_teacher_files/', {
            method: 'POST',


            headers: {
                // 'auth': 'ef899a6d-29d6-4130-8b59-3d95dfbcc9bd',
                'lang': localStorage.getItem('lang'),
                // 'Content-Type': 'application/json',
                'auth': "ef899a6d-29d6-4130-8b59-3d95dfbcc9bd",
                // 'lang': "uz"
                'token': localStorage.getItem('token'),
                "cert": 1
            },
            body: JSON.stringify({

                "list_id": this.state.pusara


            })

        })


            .then(res => res.json())

            .then((data) => {
                console.log(data)
                this.props.mainPage.changeUnit(4)


            }
            )


        fetch('https://api.mydars.uz/api/registration/', {
            method: 'POST',


            headers: {
                // 'auth': 'ef899a6d-29d6-4130-8b59-3d95dfbcc9bd',
                'lang': localStorage.getItem('lang'),
                'Content-Type': 'application/json',
                'auth': "ef899a6d-29d6-4130-8b59-3d95dfbcc9bd",
                // 'lang': "uz"
                'token': localStorage.getItem('token')
            },
            body: JSON.stringify({

                "education_list": this.state.shareholders,
                "work_experience_list": this.state.shareholders1,
                "reg_page": 4,


            })

        })


            .then(res => res.json())

            .then((data) => {
                console.log(data)
                if (data.reg_page == 3) {

                    this.setState({

                        isLoaded: true,

                    });
                    // localStorage.setItem('hash', data);
                    console.log(data)
                }


            }
            )

    }
    handleChangeln = e => {


        const { shareholders } = this.state

        const clonePhoneNumbers = [...shareholders];

        const contact = clonePhoneNumbers[e.target.name]
        if (contact) {
            contact.education_year = e.target.value
        }

        this.setState(() => ({
            shareholders: clonePhoneNumbers


        }));
    }

    handleChangecn = e => {
        //     let obj = JSON.parse(e.target.value);
        //      console.log(obj)


        const { shareholders } = this.state

        const clonePhoneNumbers = [...shareholders];

        const contact = clonePhoneNumbers[e.target.name]


        if (contact) {
            contact.education = e.target.value
        }


        this.setState(() => ({
            shareholders: clonePhoneNumbers


        }));

    }


    handleChangeln1 = e => {


        console.log(e.target.name)


        const { shareholders1 } = this.state

        const clonePhoneNumbers = [...shareholders1];

        const contact = clonePhoneNumbers[e.target.name]
        if (contact) {
            contact.work_experience_year = e.target.value
        }
        this.setState(() => ({
            shareholders1: clonePhoneNumbers


        }));

    }

    handleChangecn1 = e => {

        console.log(e.target.name)

        const { shareholders1 } = this.state

        const clonePhoneNumbers = [...shareholders1];

        const contact = clonePhoneNumbers[e.target.name]

        const contact2 = clonePhoneNumbers[e.target.name]

        if (contact) {
            contact.work_experience = e.target.value
        }


        this.setState(() => ({
            shareholders1: clonePhoneNumbers


        }));

    }

    handleAddShareholder = () => {
        this.setState({ shareholders: this.state.shareholders.concat([{ education_year: '', education: "" }]) });
    }

    handleRemoveShareholder = (idx) => () => {
        this.setState({ shareholders: this.state.shareholders.filter((s, sidx) => idx !== sidx) });
    }


    handleAddShareholder1 = () => {
        this.setState({
            shareholders1: this.state.shareholders1.concat([{
                work_experience: '',
                work_experience_year: ""
            }])
        });
    }

    handleRemoveShareholder1 = (idx) => () => {
        this.setState({ shareholders1: this.state.shareholders1.filter((s, sidx) => idx !== sidx) });
    }


    render() {
        console.log(this.state.of1)
        const {langLoad} = this.state
        if(!langLoad){
            return(
                <p></p>
            )
        }else{
            return (
                <div className={"wrap wrap2 wr_auth"}>
                    <div className={"container main_container conatss123"}>
                        <div className="row mainrowws">
                        <p className="avt_text avt_text_1 avt2222">{this.state.lang.vhodisuchenukis.text}</p>
                            <div className="row col-lg-6 col-md-4 col-sm-6 col-6 block_main-2 wr_auth row_execute">
    
                                <img alt="" className={"rg_aytt"} src={auth} />
    
                            </div>
    
                            <div className="row col-lg-3 col-md-4 col-sm-6 col-6 block_main-2 wr_auth row_execute">
    
    
                                <div className="bl_pop">
                                 
    
    
                            
    
                                    <form onSubmit={this.handleSubmit}>
    
    
                                        <div class="form-group">
                                            <label className="avt_text bt_txt33" for="email">
                                            {this.state.lang.addemailinputregister.text}
                                                </label>
                                            <input
                                                type="text"
                                                name="email"
                                                value={this.state.input.email}
                                                onChange={this.handleChange0}
                                                class="form-control formasdata"
                                                placeholder= {this.state.lang.addemailinputregister.text}
                                                id="email" />
    
                                            {(() => {
                                                if (this.state.err == true) {
                                                    return (
                                                        <span className={"neass"}>{this.state.main.error_text}</span>
                                                    )
                                                }
                                            })()}
                                            <div className="text-danger">{this.state.errors.email}</div>
                                        </div>
    
                                        <div class="form-group">
                                            <label className="avt_text bt_txt33" for="name">  {this.state.lang.passwordesminis.text}</label>
                                            <input
                                                type="password"
                                                name="name"
                                                value={this.state.input.name}
                                                onChange={this.handleChange0}
                                                class="form-control formasdata"
                                                placeholder={this.state.lang.addparolnow.text}
                                                id="name" />
                                            {(() => {
                                                if (this.state.err == true) {
                                                    return (
                                                        <span className={"neass"}>{this.state.main.error_text}</span>
                                                    )
                                                }
                                            })()}
                                            <div className="text-danger">{this.state.errors.name}</div>
                                        </div>
                                        <input type="submit" value="Войти" class="btn btn-success btn_vh btn_vh_00000" />
                                    </form>
    
                            
                                
                                    <p className="reg_place">
                                    {this.state.lang.resetpasswork.text}
                                        <a className={"resets"} href="/reset">{this.state.lang.restorekeys.text}</a>
                                    </p>
                                </div>
    
                            </div>
                        </div>
    
                    </div>
                </div>
            )
        }
      


    }
}


export default Auth;