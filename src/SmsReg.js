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

import camera_ico from './images/bxs-camera.svg'
import cloudupload from './images/bx-cloud-upload.svg'
import mini from './images/mini.svg'
import 'react-phone-number-input/style.css'

import PhoneInput from 'react-phone-input-2'
// import 'react-phone-input-2/dist/style.css'
import InputMask from 'react-input-mask';
import MaterialInput from '@material-ui/core/Input';
import authp from './images/authp.svg'
class SmsReg extends Component {
    state = { showModal: false };

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
            lang: "",
            languages: [],
            shareholders: [{ language_id: '', level: "" }],
            lgstate: "",
            contstate: "",
            monst: [{ language_id: "111", level: "" }],
            phone: "ff",
            send: "",
            enject: false,
            code: '',
            image: null,
            file: null,
            of2: false,
            vols: "",
            ontip: false,
            times: 15,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleemailChange = this.handleemailChange.bind(this);
        this.handlephoneChange = this.handlephoneChange.bind(this);
        this.handleengChange = this.handleengChange.bind(this);
        this.onImageChange = this.onImageChange.bind(this);












        setInterval(() => {




            if (
                this.state.ontip == true
            ) {



                this.setState({
                    times: this.state.times - 1
                })




                if (this.state.times <= 0) {
                    this.setState({
                        ontip: false
                    })
                }



            } else {

            }



        }, 1000);








    }




    handler2 = (e) => {
        const { target } = e;
        const value = target.type == 'checkbox' ? target.checked : target.value;
        const { name } = target;
        console.log(value)
        if (value == false) {
            this.setState({
                of2: false
            })
        } else {
            this.setState({
                of2: true
            })
        }
    };






    onImageChange = e => {
        const data = new FormData();
        const imagedata = e.target.files[0];
        data.append('myfile ', imagedata);
        console.log(imagedata)

        fetch('https://api.mydars.uz/api/registration/add_avatar/', {
            method: 'POST',


            headers: {
                // 'auth': 'ef899a6d-29d6-4130-8b59-3d95dfbcc9bd',
                // 'lang': 'uz',
                // "Content-Type": "multipart/form-data",
                'auth': "ef899a6d-29d6-4130-8b59-3d95dfbcc9bd",
                'lang': localStorage.getItem('lang'),
                'token': localStorage.getItem('token')
            },
            body: data

        })


            .then(res => res.json())

            .then((data) => {
                console.log(data)
                if (data.status == 200) {

                    // localStorage.setItem('hash', data);
                    console.log(data)
                }


            }
            )

    };
    saveMobile003 = obj => {
        console.log("sadsad")
        fetch('https://api.mydars.uz/api/auth/sms/confirm/', {
            method: 'POST',


            headers: {
                // 'auth': 'ef899a6d-29d6-4130-8b59-3d95dfbcc9bd',

                'Content-Type': 'application/json',
                'auth': "ef899a6d-29d6-4130-8b59-3d95dfbcc9bd",
                'lang': localStorage.getItem('lang'),

            },
            body: JSON.stringify({

                "phone_number": this.state.phone,
                'is_user': false,
                "sms": this.state.code,

            })

        })


            .then(res => res.json())

            .then((data) => {
                console.log(data)
                if (data.error == undefined) {
                    if (data.reg_page == 2) {
                        localStorage.setItem('token', data.token);
                        this.props.mainPage.changeUnit(2)
                        localStorage.setItem('page', "2");
                        window.location.reload();
                    } else {
                        localStorage.setItem('token', data.token);
                        window.location.reload();
                    }



                    // this.props.mainPage.changeUnit(3)
                    // this.setState({

                    //     isLoaded: true,

                    // });
                    //  localStorage.setItem('hash', data);

                } else {
                    console.log("Ошибкааааааааааааааа")
                }
                console.log(data)

            }
            )
        // localStorage.setItem('page', "2");
    }
    saveMobile002 = obj => {


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
                "is_user": false

            })

        })


            .then(res => res.json())

            .then((data) => {
                if (data.status == 200) {
                    this.setState({
                        send: data,
                        isLoaded: true,
                        enject: true,
                        ontip: true,
                        times: 15,
                    });


                    // localStorage.setItem('hash', data);
                    console.log(data)
                }


            }
            )
    }

    handleengChange(event) {
        console.log(event.target.value)
        this.setState({
            code: event.target.value
        })

    }

    handlephoneChange(event) {
        // console.log()
        // console.log(event.target.value);
        console.log(event.target.value.slice(-1));
        this.setState({
            phone: event.target.value
        })

    }

    handleChange(event) {
        // console.log(event.target.value)
        this.setState({
            name: event.target.value
        })

    }

    handleemailChange(event) {
        // console.log(event.target.value)
        this.setState({
            email: event.target.value
        })
    }

    saveMobile0 = obj => {
        //console.log(obj)
        const main = {
            "name": this.state.name,
            "birth_country_id": this.state.birth_country_id,
            "email": this.state.email,
            "language": this.state.shareholders
        }

        console.log(main)
        console.log(localStorage.getItem('token'))
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

                "name": this.state.name,
                "birth_country_id": this.state.birth_country_id,
                "email": this.state.email,
                "language": this.state.shareholders


            })

        })


            .then(res => res.json())

            .then((data) => {
                console.log(data)
                if (data.status == 200) {
                    this.setState({

                        isLoaded: true,

                    });
                    // localStorage.setItem('hash', data);
                    console.log(data)
                }


            }
            )

    }

    handleToggleModal = () => this.setState({ showModal: !this.state.showModal });

    componentDidMount() {
        localStorage.removeItem('page')
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
        window.scrollTo(0, 0);
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
                    create: data,
                    isLoaded: true,
                    language: data.data.languages.available_languages,
                    levels: data.data.languages.levels
                });


                console.log(data.data)
            }
            )
    }

    saveMobile1 = obj => {
        console.log(obj)
    }

    saveMobile2 = obj => {
        console.log(obj.index)
        const { shareholders } = this.state

        const clonePhoneNumbers = [...shareholders];

        const contact = clonePhoneNumbers[obj.idx]
        if (contact) {
            contact.language_id = obj.id
        }
        console.log(contact)


    }

    saveMobile3 = obj => {
        console.log(obj)


        const { shareholders } = this.state

        const clonePhoneNumbers = [...shareholders];

        const contact = clonePhoneNumbers[obj.idx]
        if (contact) {
            contact.level = obj.id
        }
        console.log(contact)

    }

    transeLate() {

        // {"name":"1TEST TEACHER3", "birth_country_id":2, "email":"tenr@ya.ri", "language":
        //     [{"language_id": 1, "level": 1}, {"language_id": 5, "level": 1}]
        // }

    }


    handleAddShareholder = () => {
        this.setState({ shareholders: this.state.shareholders.concat([{ language_id: '', level: "" }]) });
    }

    handleRemoveShareholder = (idx) => () => {
        this.setState({ shareholders: this.state.shareholders.filter((s, sidx) => idx !== sidx) });
    }

    render() {


        console.log(this.state.vols)
        const { create, isLoaded, langLoad } = this.state;
        if (!isLoaded || !langLoad) {
            return <p></p>
        } else {
            return (
                <div className={"wrap"}>
                    <div className={"top_page_regist"}>
                        <img alt="" src={reg_check} /> {this.state.lang.numberphonesreg.text}<img alt="" src={bx_chevron_right} />
                        <img alt="" src={reg_uncheck} /> {this.state.lang.lichniydamomn.text}<img alt="" src={bx_chevron_right} />

                        <img alt="" src={reg_uncheck} /> {this.state.lang.Rezumi.text} <img alt="" src={bx_chevron_right} />

                        <img alt="" src={reg_uncheck} /> {this.state.lang.Descriptionmainfull.text} <img alt="" src={bx_chevron_right} />

                        <img alt="" src={reg_uncheck} /> {this.state.lang.myVideoRolik.text} <img alt="" src={bx_chevron_right} />
                        <img alt="" src={reg_uncheck} /> {this.state.lang.Vereficationname.text}
                    </div>
                    <div className={"container "}>
                        <div className={"row"}>
                        <div className={"col-lg-6 col-md-4 col-sm-6 col-6 tarara "}>
                        <img alt="" className={"rg_aytt"} src={authp} />
                        </div>
                            <div className={"col-lg-6 col-md-4 col-sm-6 col-6 tarara "}>
                                <div className={"first_reg first_reg32423 col-lg-12 col-md-4 col-sm-6 col-6 "}>
                                    <p>{this.state.lang.numberphonesreg.text}</p>
                                    <NumberFormat className={"inputik"} pattern="[0-9]*" format="998#########" allowEmptyFormatting mask="_"
                                        placeholder={this.state.lang.VvodNumberPhoneName.text}

                                        allowEmptyFormatting={"false"}
                                        type="tel"
                                        // value={this.state.phone}
                                        onChange={this.handlephoneChange}
                                        required
                                    />


                                    {(() => {

                                        if (this.state.phone.slice(-1) == 0 ||
                                            this.state.phone.slice(-1) == 1 ||
                                            this.state.phone.slice(-1) == 2 ||
                                            this.state.phone.slice(-1) == 3 ||
                                            this.state.phone.slice(-1) == 4 ||
                                            this.state.phone.slice(-1) == 5 ||
                                            this.state.phone.slice(-1) == 6 ||
                                            this.state.phone.slice(-1) == 7 ||
                                            this.state.phone.slice(-1) == 8 ||
                                            this.state.phone.slice(-1) == 9

                                        ) {

                                            if (this.state.ontip == true) {
                                                return (
                                                    <p className={"magggggssss"}>
                                                        <Link className={"provert provert_disabpled"}>
                                                            {this.state.lang.ChekNumberPhoneLoop.text}
                                                        </Link>
                                                        <span className={"return_text_sms"}>{this.state.lang.retrysmssends.text} {this.state.times}</span>
                                                        <p className={"mainfdsfsdfsdf"}>{this.state.lang.VvodikCodeNewsendyouPhone.text}
                                                        </p>
                                                    </p>
                                                )

                                            } else {
                                                if (this.state.of2 == false) {
                                                    return (
                                                        <div></div>
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
                                            }


                                        } else {
                                            return (
                                                <p></p>
                                            )
                                        }
                                    })()}

                                    <div className={"first_reg first_reg32423 col-lg-7 col-md-4 col-sm-6 col-6 "}>
                                        <label className="checkbox">
                                            <input className="custom-checkbox" type="checkbox" onChange={this.handler2} />

                                            <span></span>
                                        </label>
                                        <a href={"https://mydars.uz/docs/privacy_policy.html"} className={"mopppp primiisr_009"}>Согласие на обработку персональных данных</a>
                                        {/* <a href={"/docs/ethical_code_of_tutors.html"} target="_blank" className={"mopppp"}>{this.state.lang.ETNICHESKCODECS.text} </a> */}

                                    </div>
                                    {(() => {
                                        if (this.state.enject == true) {

                                            return (
                                                <div>
                                                    <p>{this.state.lang.CodePoddtverdj.text}</p>
                                                    <input className={"inputik"} placeholder={this.state.lang.VoditCode.text}

                                                        // value={this.state.phone}
                                                        onChange={this.handleengChange}
                                                    />
                                                    <p className={"magggggssss"}>

                                                        <Link onClick={() =>
                                                            this.saveMobile003({})
                                                        } className={"provert"}>
                                                            {this.state.lang.chekcodes.text}
                                                        </Link>
                                                    </p>

                                                </div>
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


    }
}


export default SmsReg;