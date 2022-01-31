import React, {Component} from 'react';

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
import '../App.css'

import checked_profile_ico from '../images/checked_profile_ico.svg'
import 'react-phone-number-input/style.css'
import phoneico from '../images/phoneico.svg'
import mailico from '../images/mailico.svg'
import camera_ico from '../images/bxs-camera.svg'
import cloudupload from '../images/bx-cloud-upload.svg'
import red_buuls  from '../images/red_buuls.svg'


class Settingu extends Component {

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
            phone: "ff",
            send: "",

            enject: false,
            code: '',
            image: null,
            file: null,
            vols: "",
            of: false,
            avatar: null,


            pass: "",

            status: "",
            sms: "",

            fam: "",
            em: "",
            dd: "",
            mm: "",
            yy: "",
            pas1: "",
            pas2: ""
        }
        this.handler = this.handler.bind(this);
        this.onImageChange = this.onImageChange.bind(this);

        this.handleAdd4 = this.handleAdd4.bind(this);
        this.handleAdd5 = this.handleAdd5.bind(this);
        this.handlemor1 = this.handlemor1.bind(this);
        this.handlemor2 = this.handlemor2.bind(this);
        this.handlemor3 = this.handlemor3.bind(this);
        this.handlemor4 = this.handlemor4.bind(this);
        this.handlemor5 = this.handlemor5.bind(this);
        this.handlemor6 = this.handlemor6.bind(this);
        this.handlemor7 = this.handlemor7.bind(this);
        this.handlemor8 = this.handlemor8.bind(this);
    }

    handleAdd5(event) {

        this.setState({
            of: false
        })
    }

    handleAdd4(event) {
        const main = {

            "phone_number": this.state.pass,

            "is_user": true
        }
        console.log(main)
        fetch('https://api.mydars.uz/api/registration/', {
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

                "name": this.state.name + " " + this.state.fam,
                "email": this.state.em,
                "date_of_birth": this.state.dd + "." + this.state.mm + "." + this.state.yy,
                "password": this.state.pas1
            })

        })


            .then(res => res.json())

            .then((data) => {

                    console.log(data)
                    if (data.status == 200) {

                    }
                }
            )
    }

    handlemor1(event) {
        console.log(event.target.value)
        this.setState({
            name: event.target.value
        })


    }

    handlemor2(event) {
        console.log(event.target.value)
        this.setState({
            fam: event.target.value
        })
    }

    handlemor3(event) {
        console.log(event.target.value)
        this.setState({
            em: event.target.value
        })
    }

    handlemor4(event) {
        console.log(event.target.value)
        this.setState({
            dd: event.target.value
        })
    }

    handlemor5(event) {
        console.log(event.target.value)
        this.setState({
            mm: event.target.value
        })
    }

    handlemor6(event) {
        console.log(event.target.value)
        this.setState({
            yy: event.target.value
        })
    }

    handlemor7(event) {
        console.log(event.target.value)
        this.setState({
            pas1: event.target.value
        })
    }

    handlemor8(event) {
        console.log(event.target.value)
        this.setState({
            pas2: event.target.value
        })
    }

    handler = (e) => {
        const {target} = e;
        const value = target.type == 'checkbox' ? target.checked : target.value;
        const {name} = target;
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

    handleToggleModal = () => this.setState({showModal: !this.state.showModal});

    componentDidMount() {


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
                    this.setState({
                        isLoaded: true,
                        create: data,
                        language: data.data.languages.available_languages,
                        levels: data.data.languages.levels,


                    });


                    console.log(data)
                }
            )
    }

    onImageChange = e => {
        const data = new FormData();
        const imagedata = e.target.files[0];
        data.append('myfile', imagedata);
        console.log(data)

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
                        isLoaded: true
                    })
                    console.log(data)

                }
            )

    };

    render() {
        console.log(this.state.of)
        // console.log(this.state.check)

        const {create, isLoaded} = this.state;
        if (!isLoaded) {
            return (
                <p>11</p>
            )
        } else {
            return (
                <div className={"wrap"}>
                    {console.log("я под учеником")}
                    <div className={"container "}>
                        <div className={"row"}>
                            <div
                                className={"app_prof_lang col-lg-12 col-md-4 col-sm-6 col-6 "}>
                                <div className="new_block_prof">
                                    <h2 className="setting_h2">Настройки</h2>
                                    <label className="cust">
                                        <input className="custom-checkbox" type="checkbox"
                                               onChange={this.handler}/>
                                        <span>Редактировать
                                            <img alt="" src={red_buuls}/>
                                            </span>
                                    </label>
                                </div>
                                <p>Личные данные</p>

                                {(() => {
                                    if (this.state.of == false) {
                                        return (

                                            <div
                                                className={"first_reg col-lg-12 col-md-4 col-sm-6 col-6 "}>


                                                <div className={"avats_sett"}>
                                                    {(() => {
                                                        if (this.state.avatar == null) {
                                                            return (
                                                                <img alt="" src={camera_ico}/>
                                                            )
                                                        } else {
                                                            return (
                                                                <img alt=""
                                                                    className={"avatar_regs"}
                                                                    src={this.state.avatar}/>
                                                            )
                                                        }
                                                    })()}
                                                </div>
                                                <div className={"name_sett"}>
                                                    <p className={"profile_names"}> {this.state.create.profile.name}<img alt=""
                                                        src={checked_profile_ico}/></p>
                                                    <p> Ученик</p>
                                                </div>


                                                <p className={"no_margin_profile"}><img alt=""
                                                    src={mailico}/> <span
                                                    className={"prof_color_gray"}>почта:</span> {this.state.create.profile.email}
                                                </p>
                                                <p className={"no_margin_profile"}><img alt=""
                                                    src={phoneico}/><span
                                                    className={"prof_color_gray"}>телефон:</span> {this.state.create.profile.phone_number}
                                                </p>
                                            </div>
                                        )
                                    } else {
                                        return (
                                            <React.Fragment>
                                                <div
                                                    className={"first_reg col-lg-12 col-md-4 col-sm-6 col-6 "}>

                                                    {console.log("я под учителем")}
                                                    <div
                                                        className={"first_reg col-lg-7 col-md-4 col-sm-6 col-6 "}>
                                                        <p>фото профиля</p>


                                                        <div className="up_img">
                                                            <div className={"markets"}>

                                                                {(() => {
                                                                    if (this.state.avatar == null) {
                                                                        return (
                                                                            <img alt=""
                                                                                src={camera_ico}/>
                                                                        )
                                                                    } else {
                                                                        return (
                                                                            <img alt=""
                                                                                className={"avatar_regs"}
                                                                                src={this.state.avatar}/>
                                                                        )
                                                                    }
                                                                })()}


                                                            </div>

                                                            <label htmlFor="filePicker"
                                                                   className={"myst_uploads"}>

                                                                <img alt="" src={cloudupload}/>


                                                                Загрузить фото
                                                            </label>
                                                            <input id="filePicker"
                                                                   onChange={this.onImageChange}
                                                                   style={{visibility: "hidden"}}
                                                                   type={"file"}>

                                                            </input>
                                                            <p>JPG или PNG, макс 5 Мб</p>
                                                        </div>


                                                    </div>


                                                    <div className="line_pusd"></div>


                                                    <div
                                                        className="lol_mon">


                                                        <div className="  row_execute13">


                                                            <p className="avt_text bt_txt33 ">
                                                                Укажите имя</p>
                                                            <input
                                                                onChange={this.handlemor1}
                                                                placeholder="Руслан"
                                                                type="text"
                                                                className=" nen_inp form-control email_input last_name_class_inp"/>


                                                            <p className="avt_text bt_txt33 ">
                                                                Укажите фамилию</p>
                                                            <input
                                                                onChange={this.handlemor2}
                                                                placeholder="Набеев"
                                                                type="text"
                                                                className="nen_inp form-control email_input last_name_class_inp"/>


                                                            <p className="avt_text bt_txt33 ">
                                                                Укажите email</p>
                                                            <input
                                                                onChange={this.handlemor3}
                                                                placeholder="rugrid91@gmail.com"
                                                                type="text"
                                                                className="form-control nen_inp email_input last_name_class_inp"/>


                                                            <p className="avt_text bt_txt33 ">
                                                                Дата рождения</p>

                                                            <div className="mi_332 "><input
                                                                onChange={this.handlemor4}
                                                                placeholder="день"
                                                                type="text"
                                                                className="nen_inp form-control email_input last_name_class_inp daes"/>

                                                                <input
                                                                    onChange={this.handlemor5}
                                                                    placeholder="месяц"
                                                                    type="text"
                                                                    className="nen_inp form-control email_input last_name_class_inp daes"/>

                                                                <input
                                                                    onChange={this.handlemor6}
                                                                    placeholder="год"
                                                                    type="text"
                                                                    className="nen_inp form-control email_input last_name_class_inp daes"/>


                                                            </div>


                                                        </div>

                                                    </div>

                                                </div>


                                                <div className="gr_prof_save">
                                                    <div onClick={this.handleAdd4}
                                                         className="btn_vh btn_vh22">
                                                        <p className="bt_txt ">Сохранить</p>
                                                    </div>
                                                    <div onClick={this.handleAdd5}
                                                         className="btn_vh btn_vh33">
                                                        <p className="bt_txt "> Отмена</p>
                                                    </div>
                                                </div>
                                            </React.Fragment>
                                        )
                                    }
                                })()}




                            </div>


                        </div>
                    </div>
                </div>
            )
        }


    }
}

export default Settingu;