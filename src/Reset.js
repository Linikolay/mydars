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


class Reset extends Component {
    state = { showModal: false };

    constructor() {
        super()
        this.state = {

            radio: true,
            radio1: true,
            of: false,
            of1: true,
            texterror: "",
            err: false,
            pass: "",
            lor:"",
            email: "",
            phone: "",
            number: "",
            phone: "ff",
            input: {},
            ontip: false,
            err: false,
            main: "",
            token: "",
            suc: false,
            sms: false,
            errors: {}
        }

        this.handler = this.handler.bind(this);
        this.handler1 = this.handler1.bind(this);
        this.handlePass = this.handlePass.bind(this);

        this.handleradio1Change = this.handleradio1Change.bind(this);


        this.handleradioChange1 = this.handleradioChange1.bind(this);
        this.handleradio1Change1 = this.handleradio1Change1.bind(this);
        this.pach = this.pach.bind(this);

        this.pach1 = this.pach1.bind(this);
        this.pach2 = this.pach2.bind(this);
        this.handlephoneChange = this.handlephoneChange.bind(this);

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
                            localStorage.setItem('is_user', data.profile.is_user);
                            localStorage.setItem('token', data.token);
                            window.location.replace("/profile");
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

                                window.location.replace("/profile");
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

            if (str.substring(0, 3) !== 998) {


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




    handlephoneChange(event) {
        // console.log()
        console.log(parseInt(event.target.value))
        // console.log(event.target.value);
     var test = parseInt(event.target.value)
    const lor = "" + test
     console.log(lor.length)
        // console.log(event.target.value.slice(-1));   
        this.setState({
            lor: lor,
            phone: event.target.value
        })

    }


    saveMobile002 = obj => {

        const test = {

            "phone_number": this.state.phone,
            "is_user": this.state.of1,
            "password_reset": true
        }
        console.log(test)
        fetch('https://api.mydars.uz/api/auth/sms/', {
            method: 'POST',


            headers: {
                // 'auth': 'ef899a6d-29d6-4130-8b59-3d95dfbcc9bd',
                // 'lang': 'uz',
                // 'Content-Type': 'application/json',
                'auth': "ef899a6d-29d6-4130-8b59-3d95dfbcc9bd",
                'lang': localStorage.getItem('lang'),

            },
            body: JSON.stringify({

                "phone_number": this.state.phone,
                "is_user": this.state.of1,
                "password_reset": true
            })

        })


            .then(res => res.json())

            .then((data) => {
                if (data.status == 200) {
                    this.setState({
                        sms: true,

                    });


                    // localStorage.setItem('hash', data);
                    console.log(data)
                }


            }
            )
    }








    saveMobile008 = obj => {


        fetch('https://api.mydars.uz/api/auth/sms/confirm/', {
            method: 'POST',


            headers: {
                // 'auth': 'ef899a6d-29d6-4130-8b59-3d95dfbcc9bd',
                // 'lang': 'uz',
                // 'Content-Type': 'application/json',
                'auth': "ef899a6d-29d6-4130-8b59-3d95dfbcc9bd",
                'lang': localStorage.getItem('lang'),

            },
            body: JSON.stringify({

                "phone_number": this.state.phone,
                "is_user": this.state.of1,
                "sms": this.state.codes
            })

        })


            .then(res => res.json())

            .then((data) => {
                console.log(data)
                if (data.status == 200) {
                    this.setState({
                        token: data.token
                    })
                }


            }
            )
    }







    saveMobile009 = obj => {

        if (this.state.pass == this.state.pass2) {
            fetch('https://api.mydars.uz/api/auth/password_reset/', {
                method: 'POST',


                headers: {
                    // 'auth': 'ef899a6d-29d6-4130-8b59-3d95dfbcc9bd',
                    // 'lang': 'uz',
                    // 'Content-Type': 'application/json',
                    'auth': "ef899a6d-29d6-4130-8b59-3d95dfbcc9bd",
                    "token": this.state.token,
                    'lang': localStorage.getItem('lang'),

                },
                body: JSON.stringify({

                    "password": this.state.pass,

                })

            })


                .then(res => res.json())

                .then((data) => {
                    console.log(data)
                    if (data.status == 200) {
                        this.setState({
                            suc: true
                        })
                    }



                }
                )
        } else {
            this.setState({
                err: true,
                texterror: "Пароли не совпадают"
            })
        }

    }



    pach(e) {
        console.log(e.target.value)
        this.setState({
            codes: e.target.value
        })
    }
    pach1(e) {
        console.log(e.target.value)
        this.setState({
            pass: e.target.value
        })
    }
    pach2(e) {
        console.log(e.target.value)
        this.setState({
            pass2: e.target.value
        })
    }
    render() {
        console.log(this.state.of1)
        const { langLoad } = this.state
        if (!langLoad) {
            return (
                <p></p>
            )
        } else {

            if (this.state.suc == false) {
                if (this.state.token == "") {

                    if (this.state.sms == false) {
                        return (
                            <div className={"wrap wrap2"}>
                                <div className={"container main_container"}>
                                    <div className="row">
                                        <div className="row col-lg-6 col-md-4 col-sm-6 col-6 block_main-2 row_execute">

                                            <img alt="" src={reg} />

                                        </div>

                                        <div className="row col-lg-3 col-md-4 col-sm-6 col-6 block_main-2 row_execute">


                                            <div className="bl_pop">
                                                <p className="avt_text avt_text_1 retore-passwords">{this.state.lang.resotrepasswrdd.text}</p>


                                                <div className="rh_btn">

                                                    <div className={"none_pdd_null col-lg-12 col-md-4 col-sm-6 col-6 "}>
                                                        <label className="checkbox">
                                                            <input className="custom-checkbox" type="checkbox"
                                                                onChange={this.handler1} />
                                                            <span className="top_bamb_txt">{this.state.lang.iteacjername.text}</span>
                                                        </label>


                                                    </div>


                                                </div>


                                                <NumberFormat className={"inputik"} pattern="[0-9]*" format="998#########" allowEmptyFormatting mask="_"
                                                    placeholder="+998 (00) 000-00-00"

                                                    allowEmptyFormatting={"false"}
                                                    type="tel"
                                                    // value={this.state.phone}
                                                    onChange={this.handlephoneChange}
                                                    required
                                                />





                                                {(() => {

                                                    if (this.state.lor.length == 12) {

                                                        if (this.state.ontip == true) {
                                                            return (
                                                                <p className={"magggggssss"}>

                                                                </p>
                                                            )

                                                        } else {
                                                            return (
                                                                <p className={"magggggssss"}>
                                                                    <Link onClick={() =>
                                                                        this.saveMobile002({})
                                                                    } className={"provert"}>
                                                                        {this.state.lang.ChekNumberPhoneLoop.text}
                                                                    </Link>
                                                                </p>
                                                            )
                                                        }


                                                    } else {
                                                        return (
                                                            <p></p>
                                                        )
                                                    }
                                                })()}




                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        )
                    } else {
                        return (
                            <div className={"wrap wrap2"}>
                                <div className={"container main_container"}>
                                    <div className="row">
                                        <div className="row col-lg-6 col-md-4 col-sm-6 col-6 block_main-2 row_execute">

                                            <img alt="" src={reg} />

                                        </div>

                                        <div className="row col-lg-3 col-md-4 col-sm-6 col-6 block_main-2 row_execute">


                                            <div className="bl_pop">
                                                <p className="avt_text avt_text_1 retore-passwords">{this.state.lang.resotrepasswrdd.text}</p>

                                                <p>{this.state.lang.pastecodesms.text}</p>


                                                <input className={"cheso_restoresms_codes"} onChange={this.pach}></input>




                                                <p className={"magggggssss"}>
                                                    <Link onClick={() =>
                                                        this.saveMobile008({})
                                                    } className={"provert"}>
                                                        {this.state.lang.ChekNumberPhoneLoop.text}
                                                    </Link>
                                                </p>




                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        )
                    }
                } else {
                    return (
                        <div className={"wrap wrap2"}>
                            <div className={"container main_container"}>
                                <div className="row">
                                    <div className="row col-lg-6 col-md-4 col-sm-6 col-6 block_main-2 row_execute">

                                        <img alt="" src={reg} />

                                    </div>

                                    <div className="row col-lg-3 col-md-4 col-sm-6 col-6 block_main-2 row_execute">


                                        <div className="bl_pop">
                                            <p className="avt_text avt_text_1 retore-passwords">{this.state.lang.resotrepasswrdd.text}</p>


                                            <div className="rh_btn">

                                                {/* <div className={"none_pdd_null col-lg-12 col-md-4 col-sm-6 col-6 "}>
                                            <label className="checkbox">
                                                <input className="custom-checkbox" type="checkbox"
                                                       onChange={this.handler1}/>
                                                <span className="top_bamb_txt">Я преподователь</span>
                                            </label>
    
    
                                        </div>
     */}

                                            </div>
                                            <br></br>
                                            {this.state.lang.createnewpassword.text}
                                            <input type={"password"} className={"cheso_restoresms_codes"} onChange={this.pach1}></input>
                                            {this.state.lang.retrypassnewlong.text}
                                            <input type={"password"} className={"cheso_restoresms_codes"} onChange={this.pach2}></input>

                                            <p className={"magggggssss"}>
                                                <Link onClick={() =>
                                                    this.saveMobile009({})
                                                } className={"provert"}>
                                                    {this.state.lang.ChekNumberPhoneLoop.text}
                                                </Link>
                                            </p>

                                            {(() => {
                                                if (this.state.err == false) {

                                                } else {
                                                    return (
                                                        <p className={"errtext"}>
                                                            {this.state.texterror}
                                                        </p>
                                                    )
                                                }
                                            })()}


                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    )
                }
            } else {
                return (
                    <div className={"wrap main_controllersbool"}>

                        <div className={"container "}>
                            <div className={"row"}>
                                <div className={" col-lg-12 col-md-4 col-sm-6 col-6 "}>
                                    {/* <p className={"tittle_top_page_regst"}>{this.state.lang.Vereficationname.text}</p> */}
                                    <div className={"first_reg col-lg-12 col-md-4 col-sm-6 col-6 "}>


                                        <div className={"row"}>
                                            <div className={"first_reg col-lg-12 col-md-4 col-sm-6 col-6 "}>
                                                <div className={"mouijjj container"}>




                                                    <p className={"main_chek_seess"}>{this.state.lang.resotrepasswrdd.text}</p>
                                                    <p>
                                                        {this.state.lang.succpasswordname.text}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>





                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                )
            }
        }


    }
}


export default Reset;