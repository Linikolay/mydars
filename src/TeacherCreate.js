import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ImpulseSpinner } from "react-spinners-kit";
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
import InputMask from "react-input-mask";
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
import del from "./images/del.svg";
import mini from "./images/mini.svg"

import plus from "./images/plus.svg"
import in1 from "./images/in1.svg";
import in2 from "./images/in2.svg"


import next from "./images/next1.svg"

class TeacherCreate extends Component {
    state = { showModal: false };

    constructor() {
        super()
        this.state = {
            isLoaded: false,
            create: {},
            language: "",
            lang: "",
            levels: "",
            ci: "",
            spiner: false,
            birt: "",
            sex: "",
            name: "",
            emailcodes:"",
            emaLoad: false,
            birth_country_id: "1",
            email: '',
            languages: [],
            shareholders: [{ language_id: '', level: "", title: "Выберите страну" }],
            lgstate: "",
            contstate: "",
            monst: [{ language_id: "111", level: "" }],
            phone: "",
            emerror:"",
            send: "",
            enject: false,
            texterr: "",
            emailcheck:"",
            err: false,
            code: '',
            image: null,
            file: null,
            page: "",
            namebirth: null,
            avatar: null,
            pass: "",
            pass1: "",
            radio: true,
            of: false,
            of1: false,
            of2: false,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleemailChange = this.handleemailChange.bind(this);
        this.handlephoneChange = this.handlephoneChange.bind(this);
        this.handleengChange = this.handleengChange.bind(this);
        this.onImageChange = this.onImageChange.bind(this);
        this.bir = this.bir.bind(this);
        this.handleChangecn = this.handleChangecn.bind(this);
        this.handleChangeln = this.handleChangeln.bind(this);
        this.handleChangecn111 = this.handleChangecn111.bind(this);

        this.handlepassChange = this.handlepassChange.bind(this);
        this.handlepass1Change = this.handlepass1Change.bind(this);

        this.handleradioChange = this.handleradioChange.bind(this);
        this.handleradio1Change = this.handleradio1Change.bind(this);
        this.handler = this.handler.bind(this);
        this.handleChangecn222 = this.handleChangecn222.bind(this);

        this.handler1 = this.handler1.bind(this);

        this.handler2 = this.handler2.bind(this);

        this.handleChange1 = this.handleChange1.bind(this);

        this.handleChange2 = this.handleChange2.bind(this);
        this.ema = this.ema.bind(this);
        this.coderes = this.coderes.bind(this);
        this.reject = this.reject.bind(this);
        
    }
    coderes(e){
        console.log(e.target.value)
        this.setState({
            emailcodes: e.target.value
        })
    }
reject(){
    fetch('https://api.mydars.uz/api/email/code/confirm//?code=' + this.state.emailcodes, {


        headers: {
            // 'auth': 'ef899a6d-29d6-4130-8b59-3d95dfbcc9bd',

            'Content-Type': 'application/json',
            'auth': "ef899a6d-29d6-4130-8b59-3d95dfbcc9bd",
            'lang': localStorage.getItem('lang'),
            'token': localStorage.getItem('token')
        },


    }
    )

        // .then(res => res.json())
        .then(res => res.json())
        .then((data) => {
            console.log(data)

            if(data) {
                this.setState({
                    emailcheck: data
                })
            }
         

        }
        )
}
    ema(){
        console.log(this.state.emailcodes)
        this.setState({
            emaLoad:false,
            emailcheck:""
        })
        fetch('https://api.mydars.uz/api/email/code/request/?email=' + this.state.email, {


            headers: {
                // 'auth': 'ef899a6d-29d6-4130-8b59-3d95dfbcc9bd',

                'Content-Type': 'application/json',
                'auth': "ef899a6d-29d6-4130-8b59-3d95dfbcc9bd",
                'lang': localStorage.getItem('lang'),
                'token': localStorage.getItem('token')
            },


        }
        )

            // .then(res => res.json())
            .then(res => res.json())
            .then((data) => {
                console.log(data)
            if(data.error == 0){
                this.setState({
                    emaLoad:true
                })
            }else{
                this.setState({
                    emerror:data.reason
                })
            }

            }
            )
    }
    handleChange1(event) {
        // console.log(event.target.value)
        this.setState({
            name1: event.target.value
        })

    }
    bir(e) {
        // console.log(e.target.value)
        const ml = e.target.value

        console.log(ml.length)
        this.setState({
            birt: e.target.value,

        })
    }
    handleChange2(event) {
        // console.log(event.target.value)
        this.setState({
            name2: event.target.value

        })

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
        if (value == false) {
            this.setState({
                of1: false
            })
        } else {
            this.setState({
                of1: true
            })
        }
    };




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



    handleradioChange(event) {
        // console.log(event.target.value)
        this.setState({
            radio: true
        })
    }

    handleradio1Change(event) {
        // console.log(event.target.value)
        this.setState({
            radio: false
        })
    }

    handlepassChange(event) {
        // console.log(event.target.value)
        this.setState({
            pass: event.target.value
        })
    }


    handlepass1Change(event) {
        // console.log(event.target.value)
        this.setState({
            pass1: event.target.value
        })
    }

    handleChangeln = e => {


        let obj = JSON.parse(e.target.value);
        console.log(obj)


        const { shareholders } = this.state

        const clonePhoneNumbers = [...shareholders];

        const contact = clonePhoneNumbers[obj.idx]
        if (contact) {
            contact.level = obj.id
        }
        console.log(contact)
    }
    handleChangecn111 = e => {


        let obj = JSON.parse(e.target.value);
        console.log(obj.id)
        // console.log(e.target.value.id)

        this.setState({ ci: obj.id })


    }
    handleChangecn222 = e => {


        let obj = JSON.parse(e.target.value);
        console.log(obj.id)

        this.setState({
            sex: obj.id
        })

    }
    handleChangecn = e => {
        let obj = JSON.parse(e.target.value);
        console.log(obj)
        console.log(e.target)


        const { shareholders } = this.state

        const clonePhoneNumbers = [...shareholders];

        const contact = clonePhoneNumbers[obj.idx]

        const contact2 = clonePhoneNumbers[obj.idx]

        if (contact) {
            contact.language_id = obj.id
        }

        console.log(contact2)

        this.setState(() => ({
            shareholders: clonePhoneNumbers


        }));

    }

    onImageChange = e => {
        const data = new FormData();
        const imagedata = e.target.files[0];
        data.append('myfile', imagedata);
        // console.log(data)
        this.setState({
            spiner: false
        })
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
                this.setState({
                    avatar: data.avatar,
                    isLoaded: true,
                    spiner: true
                })
                console.log(data)

            }
            )

    };
    saveMobile003 = obj => {

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

                "sms": this.state.code
            })

        })


            .then(res => res.json())

            .then((data) => {
                if (data.status == 200) {
                    localStorage.setItem('token', data.token);
                    this.setState({

                        isLoaded: true,

                    });
                    // localStorage.setItem('hash', data);
                    console.log(data)
                }


            }
            )
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
        // console.log(event.target.value)
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
            "reg_page": 3,
            "language": this.state.shareholders,
            "password": this.state.pass,
            "is_self": this.state.radio,
            "is_offer_accept": this.state.of,
            "surename": this.state.name1,
            "middlename": this.state.name2,
            "city_id": this.state.ci,
            "date_of_birth": this.state.birt,
            "sex_id": this.state.sex,
        }
        console.log(main)
        console.log(localStorage.getItem('token'))
        if (this.state.pass == this.state.pass1) {
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
                    "reg_page": 3,
                    "language": this.state.shareholders,
                    "password": this.state.pass,
                    "is_self": this.state.radio,
                    "is_offer_accept": this.state.of,
                    "surename": this.state.name1,
                    "middlename": this.state.name2,
                    "city_id": this.state.ci,
                    "date_of_birth": this.state.birt,
                    "sex_id": this.state.sex,
                })

            })


                .then(res => res.json())

                .then((data) => {
                    console.log(data)

                    // this.props.mainPage.changeUnit(3)
                    if (data.error) {
                        this.setState({
                            texterr: data.reason,
                            err: true
                        })
                    } else {
                        if (data.profile) {
                            localStorage.removeItem("page")
                            // this.props.mainPage.changeUnit(3)
                            window.location.reload();

                        }
                    }



                }
                )
        } else {
            this.setState({
                err: true,
                texterr: "пароль не совпадает"
            })
        }



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
                // console.log(data)


                this.setState({
                    lang: data.translates,
                    langLoad: true,
                })

            }
            )





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
                    levels: data.data.languages.levels,
                    spiner: true,
                });


                console.log(data)
            }
            )
    }

    saveMobile1 = obj => {
        console.log(obj)

        this.setState({
            namebirth: obj.value
        })
    }

    saveMobile2 = obj => {
        console.log(obj.index)
        const { shareholders } = this.state

        const clonePhoneNumbers = [...shareholders];

        const contact = clonePhoneNumbers[obj.idx]

        const contact2 = clonePhoneNumbers[obj.idx]

        if (contact) {
            contact.language_id = obj.id
        }

        console.log(contact2)
        if (contact2) {
            clonePhoneNumbers.push(
                {
                    title: obj.value
                }
            )

        }
        this.setState(() => ({
            shareholders: clonePhoneNumbers


        }));
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
        console.log(this.state.name2)
        console.log(this.state.of)
        const { create, isLoaded, langLoad } = this.state;
        if (!isLoaded || !langLoad) {
            return <p></p>
        } else {
            return (
                <div className={"wrap"}>
                    <div className={"top_page_regist"}>
                        <img alt="" src={mini} />{this.state.lang.numberphonesreg.text}  <img alt="" src={bx_chevron_right} />
                        <img alt="" src={reg_check} /> {this.state.lang.lichniydamomn.text}<img alt="" src={bx_chevron_right} />

                        <img alt="" src={reg_uncheck} />{this.state.lang.Rezumi.text}  <img alt="" src={bx_chevron_right} />

                        <img alt="" src={reg_uncheck} />{this.state.lang.Descriptionmainfull.text}  <img alt="" src={bx_chevron_right} />

                        <img alt="" src={reg_uncheck} /> {this.state.lang.myVideoRolik.text} <img alt="" src={bx_chevron_right} />
                        <img alt="" src={reg_uncheck} /> {this.state.lang.Vereficationname.text}
                    </div>
                    <div className={"container "}>
                        <div className={"row"}>
                            <div className={" col-lg-12 col-md-4 col-sm-6 col-6 "}>
                                <p className={"tittle_top_page_regst"}>{this.state.lang.lichniydamomn.text}</p>
                                <div className={"first_reg col-lg-12 col-md-4 col-sm-6 col-6 "}>
                                    <div className={"first_reg col-lg-12 col-md-4 col-sm-6 col-6 "}>
                                        <div className={"no_container container"}>
                                            <div className={"row"}>
                                                <div className={"first_reg col-lg-3 col-md-4 col-sm-6 col-6 "}>

                                                    <p className={"main_sql_change"}>{this.state.lang.IMYANO.text}</p>


                                                    <Form.Control className={"cols_mp"} onChange={this.handleChange}
                                                        type="text"
                                                        placeholder={this.state.lang.UKAZIMY.text} />

                                                </div>

                                                <div className={"first_reg col-lg-3 col-md-4 col-sm-6 col-6 "}>

                                                    <p className={"main_sql_change"}>{this.state.lang.FAMILKIYAS.text}</p>


                                                    <Form.Control className={"cols_mp"} onChange={this.handleChange1}
                                                        type="text"
                                                        placeholder={this.state.lang.UKAJITEFAMILY4534.text} />

                                                </div>
                                                <div className={"first_reg col-lg-3 col-md-4 col-sm-6 col-6 "}>

                                                    <p className={"main_sql_change"}>{this.state.lang.OTHDWf.text}</p>


                                                    <Form.Control className={"cols_mp"} onChange={this.handleChange2}
                                                        type="text"
                                                        placeholder={this.state.lang.OTCHESTMINISAMKOLOSEN.text} />

                                                </div>
                                            </div>
                                        </div>

                                        <div className={"no_container container"}>
                                            <div className={"row"}>
                                                <div className={"first_reg  col-lg-4 col-md-4 col-sm-6 col-6 "}>
                                                    <p className={"reg_001 main_sql_change"}>{this.state.lang.countrymainshow.text}</p>
                                                    <DropdownButton id="dropdown-basic-button"
                                                        className={"drops"}
                                                        title={this.state.lang.stranaaaaaaaaaaaa.text}>
                                                        <Dropdown.Item onClick={() =>
                                                            this.saveMobile1({
                                                                id: create.data.birth_country.id,
                                                                value: create.data.birth_country.country_name,

                                                            })
                                                        }>{create.data.birth_country.country_name}</Dropdown.Item>

                                                    </DropdownButton>


                                                    {(() => {

                                                    })()}
                                                </div>
                                            </div>
                                        </div>

















                                        <div className={"no_container container"}>
                                            <div className={"row"}>
                                                <div className={"first_reg col-lg-4 col-md-4 col-sm-6 col-6 "}>
                                                    <p className={"reg_001 main_sql_change"}>{this.state.lang.datarojdenm.text} </p>
                                                    < InputMask className={"mask_births12"} onChange={this.bir} placeholder={this.state.lang.mesymmm.text} maskPlaceholder={this.state.lang.mesymmm.text} mask="99.99.9999" />


                                                    {(() => {

                                                    })()}




                                                    <p className={"reg_001 main_sql_change"}>{this.state.lang.mainpool.text}</p>








                                                    <select className={"sects_1111"}
                                                        onChange={this.handleChangecn222}>
                                                        <option>
                                                            {this.state.lang.choousePols.text}
                                                        </option>
                                                        <option
                                                            value={JSON.stringify({
                                                                "id": 1,
                                                                "name": this.state.lang.Mujskoy.text,

                                                            })}

                                                        // value={JSON.stringify(item)}


                                                        >

                                                            {this.state.lang.Mujes.text}
                                                        </option>

                                                        <option
                                                            value={JSON.stringify({
                                                                "id": 2,
                                                                "name": this.state.lang.Jensky.text,

                                                            })}

                                                        // value={JSON.stringify(item)}


                                                        >

                                                            {this.state.lang.Jennis.text}
                                                        </option>

                                                    </select>




                                                    <p className={"reg_001 main_sql_change"}>{this.state.lang.CityLive.text}</p>








                                                    <select className={"sects_1111"}
                                                        onChange={this.handleChangecn111}>
                                                        <option


                                                        >

                                                            {this.state.lang.CItyLopp.text}
                                                        </option>
                                                        {
                                                            this.state.create.data.teacher_city.map((item, index) =>

                                                                <option
                                                                    value={JSON.stringify({
                                                                        "id": item.id,
                                                                        "name": item.city_name,

                                                                    })}

                                                                // value={JSON.stringify(item)}


                                                                >

                                                                    {item.city_name}
                                                                </option>
                                                            )
                                                        }


                                                    </select>





                                                </div>
                                            </div>
                                        </div>

                                    </div>


                                    <div className={"register_super_line"}></div>


                                    <div className={"first_reg col-lg-7 col-md-4 col-sm-6 col-6 "}>
                                        <p className={"main_sql_change reg_001"}>{this.state.lang.PHOTOPROFILES.text}</p>

                                        <div className={"markets"}>









                                            {(() => {
                                                if (this.state.spiner == false) {
                                                    return (
                                                        <div className={"all_block_preloader"}>

                                                            <div className={"loadlpreload22"}>
                                                                <ImpulseSpinner className={"preloaders "} size={40} frontColor="#9181F3" backColor={"#9181F3"} />  </div>
                                                            <div className={"zaglnow"}>
                                                            </div>
                                                        </div>
                                                    )
                                                } else {
                                                    if (this.state.avatar == null) {
                                                        return (
                                                            <img alt="" src={camera_ico} />
                                                        )
                                                    } else {
                                                        return (
                                                            <img alt="" className={"avatar_regs"} src={this.state.avatar} />
                                                        )
                                                    }
                                                }

                                            })()}


                                        </div>

                                        <label htmlFor="filePicker" className={"myst_uploads"}>

                                            <img alt="" src={cloudupload} />


                                            {this.state.lang.uploadphoto.text}
                                        </label>
                                        <input id="filePicker" onChange={this.onImageChange}
                                            style={{ visibility: "hidden" }} type={"file"}>

                                        </input>

                                    </div>
                                    <div className={"register_super_line"}></div>
                                    <div className={"row"}>
                                        <div className={"first_reg col-lg-12 col-md-4 col-sm-6 col-6 "}>
                                            <div className={"container"}>

                                                <p className={"main_sql_change"}>{this.state.lang.YAZIKI.text}</p>


                                                {this.state.shareholders.map((shareholder, idx) => (
                                                    <div className="row">
                                                        <div className={"first_reg col-lg-4 col-md-4 col-sm-6 col-6 "}>

                                                            {(() => {

                                                            })()}


                                                            <select className={"sects_1111"}
                                                                onChange={this.handleChangecn}>
                                                                <option


                                                                >

                                                                    {this.state.lang.choozenMain.text}
                                                                </option>
                                                                {
                                                                    this.state.language.map((item, index) =>

                                                                        <option
                                                                            value={JSON.stringify({
                                                                                "id": item.id,
                                                                                "name": item.language_name,
                                                                                "idx": idx
                                                                            })}

                                                                        // value={JSON.stringify(item)}


                                                                        >

                                                                            {item.language_name}
                                                                        </option>
                                                                    )
                                                                }


                                                            </select>


                                                        </div>
                                                        <div className={"first_reg col-lg-3 col-md-4 col-sm-6 col-6 "}>


                                                            <select className={"sects_1111"}
                                                                onChange={this.handleChangeln}>
                                                                <option


                                                                >

                                                                    {this.state.lang.chooseLevelas.text}
                                                                </option>
                                                                {
                                                                    this.state.levels.map((item, index) =>

                                                                        <option
                                                                            value={JSON.stringify({
                                                                                "id": item.id,
                                                                                "name": item.level_name,
                                                                                "idx": idx
                                                                            })}

                                                                        // value={JSON.stringify(item)}


                                                                        >

                                                                            {item.level_name}
                                                                        </option>
                                                                    )
                                                                }


                                                            </select>


                                                        </div>
                                                        <div type="button"
                                                            onClick={this.handleRemoveShareholder(idx)}
                                                            className="small">
                                                            <img alt="" src={del} />
                                                        </div>
                                                    </div>
                                                ))}
                                                <div type="button" onClick={this.handleAddShareholder}
                                                    className="add_ts">
                                                    <img alt="" className={"plu_cret"} src={plus} />
                                                    {this.state.lang.ADdyazik.text}
                                                </div>


                                            </div>
                                        </div>
                                    </div>
                                    <div className={"register_super_line"}></div>
                                    <div className={"first_reg col-lg-7 col-md-4 col-sm-6 col-6 "}>


                                        <p className={"main_sql_change"}>EMAIL</p>
                                        <input onChange={this.handleemailChange} placeholder="email" type="email"
                                            className="form-control email_input" />

<button className='btnchekeres' onClick={this.ema}>Проверить</button>

{(() => {
if(this.state.emaLoad==false){
return(
    <p className={"main_sql_change"}>{this.state.emerror}</p>
)
}else if(this.state.emailcheck ){
    if(this.state.emailcheck.error == 0 ){
    }
}else{
return(
    <div>
         <input onChange={this.coderes} placeholder="Код" type="text"
                                            className="form-control email_input email_inputerror" />

<button className='btnchekeres' onClick={this.reject}>Подтвердить код</button>
        </div>
)
}


if(this.state.emailcheck){
    console.log(this.state.emailcheck)
    if(this.state.emailcheck.error == 0 ){
       return(<p className={"main_sql_change"}>{this.state.emailcheck.message}</p>) 
    }else{
       return(
        <p className={"main_sql_change"}>{this.state.emailcheck.message}</p>
       )
    }
}
})()}

                                    </div>


                                    <div className={"register_super_line"}></div>
                                    <div className={"first_reg col-lg-7 col-md-4 col-sm-6 col-6 "}>


                                        <p className={"main_sql_change"}>{this.state.lang.PASSSSSSSSSS.text}</p>
                                        <input onChange={this.handlepassChange} placeholder={this.state.lang.newpssas33232.text}
                                            type="password" className="form-control email_input" />
                                        <br />
                                        <p className={"main_sql_change"}>{this.state.lang.RETRYPASS.text}</p>
                                        <input onChange={this.handlepass1Change} placeholder={this.state.lang.reytese.text} type="password"
                                            className="form-control email_input" />
                                    </div>

                                    <div className={"register_super_line"}></div>
                                    <div className={"first_reg col-lg-7 col-md-4 col-sm-6 col-6 "}>


                                        <p className={"main_sql_change"}>{this.state.lang.FORMSOTRUDN.text}</p>

                                        <label className="radio radio-before">

                                            <input checked className="custom-checkbox" onChange={this.handleradioChange}
                                                type="radio" id="male" name="gender"
                                                value="male" />
                                            <span className={"radio__control"}>{this.state.lang.SAMOZANETLICEN.text}</span>


                                        </label>




                                    </div>
                                    <div className={"first_reg col-lg-7 col-md-4 col-sm-6 col-6 "}>

                                        <label className="checkbox">
                                            <input className="custom-checkbox" type="checkbox" onChange={this.handler} />

                                            <span></span>
                                        </label>
                                        <a className={"mopppp primiisr_009"}>{this.state.lang.PRINIMAYUVSE.text}</a>

                                        <a href={"/docs/terms_and_conditions_for_tutors.html"} target="_blank" className={"mopppp"}>{this.state.lang.SOGLPREPODS.text}</a>
                                    </div>



                                    <div className={"first_reg col-lg-7 col-md-4 col-sm-6 col-6 "}>

                                        <label className="checkbox">
                                            <input className="custom-checkbox" type="checkbox" onChange={this.handler1} />
                                            <span></span>

                                        </label>
                                        <a className={"mopppp primiisr_009"}>{this.state.lang.PRINIMAYUVSE.text}</a>
                                        <a href={"/docs/privacy_policy.html"} target="_blank" className={"mopppp"}>{this.state.lang.SOGLAS09238409.text}</a>

                                    </div>



                                    <div className={"first_reg col-lg-7 col-md-4 col-sm-6 col-6 "}>
                                        <label className="checkbox">
                                            <input className="custom-checkbox" type="checkbox" onChange={this.handler2} />

                                            <span></span>
                                        </label>
                                        <a className={"mopppp primiisr_009"}>{this.state.lang.PRINIMAYUVSE.text}</a>
                                        <a href={"/docs/ethical_code_of_tutors.html"} target="_blank" className={"mopppp"}>{this.state.lang.ETNICHESKCODECS.text} </a>

                                    </div>

                                    {(() => {
                                        if (this.state.email == "" || this.state.name1 == "" || this.state.name2 == "" || this.state.of == false || this.state.of1 == false || this.state.of2 == false || this.state.pass1 == "" || this.state.pass == "" || this.state.name == "" || this.state.shareholders[0].language_id == "" || this.state.shareholders[0].level == "") {
                                            return (<p></p>)
                                        } else {
                                            if(this.state.emailcheck){
                                                if(this.state.emailcheck.error == 0){
                                                    return (
                                                        <Link onClick={() =>
                                                            this.saveMobile0({})
                                                        } className={"no_hover ne_pa_data"}>
                                                            {this.state.lang.NEXTTONEXT.text} <img alt="" className={"ne_pa"} src={next} />
                                                        </Link>
                                                    )
                                                }
                                            }
                                       
                                        }
                                    })()}
                                    {(() => {
                                        if (this.state.err == true) {
                                            return (<p className={"errtext"}>{this.state.texterr}</p>)
                                        } else {

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


export default TeacherCreate;