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
import { ImpulseSpinner } from "react-spinners-kit";

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

class Rezume extends Component {
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
            languages: [],
            shareholders: [{ education: '', education_year: "" }],
            shareholders1: [{ work_experience: '', work_experience_year: "" }],
            lgstate: "",
            contstate: "",
            monst: [{ language_id: "111", level: "" }],
            phone: "",
            send: "",
            enject: false,
            code: '',
            image: null,
            file: null,
            page: "",
            namebirth: null,
            avatar: null,
            imgsert: null,
            loadsplin: false,
            reg_page: "",
            pusara: [{ name: "" }],
            myLoaded: false

        }

        this.handleChangecn = this.handleChangecn.bind(this);
        this.handleChangeln = this.handleChangeln.bind(this);

        this.handleChangecn1 = this.handleChangecn1.bind(this);
        this.handleChangeln1 = this.handleChangeln1.bind(this);
        this.onImageChange = this.onImageChange.bind(this);
        this.handleins = this.handleins.bind(this);
        this.back = this.back.bind(this);
    }
    back() {
        fetch('https://api.mydars.uz/api/registration/change_reg_page/', {
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

                "reg_page": this.state.reg_page - 1,

            })

        })


            .then(res => res.json())

            .then((data) => {
                console.log(data)
                // this.props.mainPage.changeUnit(3)
                if (data.error == 0) {
                    localStorage.setItem('page', 2)
                    window.location.reload();

                }


            }
            )
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
                    loadsplin: true,

                })

            }
            )
        window.scrollTo(0, 0);

        fetch('https://api.mydars.uz/api/registration/', {
            headers: {
                // 'auth': 'ef899a6d-29d6-4130-8b59-3d95dfbcc9bd',
                'lang': localStorage.getItem('lang'),
                'Content-Type': 'application/json',
                'auth': "ef899a6d-29d6-4130-8b59-3d95dfbcc9bd",
                // 'lang': "uz"
                'token': localStorage.getItem('token')
            },

        })


            .then(res => res.json())

            .then((data) => {
                this.setState({
                    imgsert: data.profile,
                    isLoaded: true,
                    reg_page: data.profile.reg_page
                });


                console.log(data)
            }
            )
    }

    handleins = e => {
        let obj = JSON.parse(e.target.name);
        console.log(obj)

        const { imgsert } = this.state

        const clonePhoneNumbers = [...imgsert.certificates];


        const contact = clonePhoneNumbers[obj.index]
        if (contact) {
            contact.id = obj.id
            contact.name = e.target.value
        }

        console.log(clonePhoneNumbers)
        this.setState({
            pusara: clonePhoneNumbers,

        })


    }
    onImageChange = e => {
        this.setState({
            loadsplin: false
        })
        // const imagedata = e.target.files;
        // data.append('myfile ', imagedata, );
        // data.append('is_cert ', "true")
        // console.log(imagedata)
        for (let i = 0; i < e.target.files.length; i++) {
            const data = new FormData();
            const imagedata = e.target.files[i];

            data.append('myfile ', imagedata,);
            data.append('is_cert ', "true")
            console.log(imagedata)

            fetch('https://api.mydars.uz/api/registration/add_teacher_files/', {
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
                        imgsert: data.profile,
                        myLoaded: true,
                        loadsplin: true
                    })
                    console.log(data)
                }
                )

        }


    };
    saveMobile0 = obj => {

        var newObj = {};

        // Object.assign(newObj, this.state.pusara)

        const lop = {
            "education_list": this.state.shareholders,
            "work_experience_list": this.state.shareholders1,

        }
        console.log(lop)
        fetch('https://api.mydars.uz/api/registration/add_teacher_files/', {
            method: 'POST',


            headers: {
                // 'auth': 'ef899a6d-29d6-4130-8b59-3d95dfbcc9bd',
                // 'lang': 'uz',
                // 'Content-Type': 'application/json',
                'auth': "ef899a6d-29d6-4130-8b59-3d95dfbcc9bd",
                'lang': localStorage.getItem('lang'),
                'token': localStorage.getItem('token'),
                "cert": true
            },
            body: JSON.stringify({

                "list_id": this.state.pusara


            })

        })


            .then(res => res.json())

            .then((data) => {
                console.log(data)



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
                this.props.mainPage.changeUnit(4)
                window.location.reload();
                // if (data.profile.reg_page == 3) {

                //     this.setState({

                //         isLoaded: true,

                //     });
                //     // localStorage.setItem('hash', data);
                //      this.props.mainPage.changeUnit(4)
                //     console.log(data)
                // }


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
        console.log(this.state.pusara)

        const { create, isLoaded, langLoad } = this.state;
        if (!isLoaded || !langLoad) {
            return (
                <p></p>
            )
        } else {


            return (
                <div className={"wrap"}>

                    {(() => {
                        if (this.state.loadsplin == false) {
                            return (
                                <div>

                                    <div className={"loadlpreload"}>
                                        <ImpulseSpinner className={"preloaders "} size={40} frontColor="#9181F3" backColor={"#9181F3"} />  </div>
                                    <div className={"zaglnow"}>
                                    </div>
                                </div>
                            )
                        } else {
                            return (
                                <div></div>
                            )
                        }
                    })()}
                    <div className={"top_page_regist"}>
                        <img alt="" src={mini} />{this.state.lang.numberphonesreg.text} <img alt="" src={bx_chevron_right} />
                        <img alt="" src={mini} />{this.state.lang.lichniydamomn.text} <img alt="" src={bx_chevron_right} />

                        <img alt="" src={reg_check} />{this.state.lang.Rezumi.text} <img alt="" src={bx_chevron_right} />

                        <img alt="" src={reg_uncheck} />{this.state.lang.Descriptionmainfull.text} <img alt="" src={bx_chevron_right} />

                        <img alt="" src={reg_uncheck} />{this.state.lang.myVideoRolik.text} <img alt="" src={bx_chevron_right} />
                        <img alt="" src={reg_uncheck} />{this.state.lang.Vereficationname.text}
                    </div>
                    <div className={"container "}>
                        <div className={"row"}>
                            <div className={" col-lg-12 col-md-4 col-sm-6 col-6 "}>
                                <p className={"tittle_top_page_regst desc_reg_page_09"}>{this.state.lang.Rezumi.text}</p>
                                <div className={"first_reg col-lg-12 col-md-4 col-sm-6 col-6 "}>


                                    <div className={"row"}>
                                        <div className={"first_reg col-lg-12 col-md-4 col-sm-6 col-6 "}>
                                            <div className={"container"}>




                                                {this.state.shareholders.map((shareholder, idx) => (
                                                    <div className="row">
                                                        <div className={"first_reg col-lg-4 col-md-4 col-sm-6 col-6 "}>
                                                            <p className={"main_sql_change "}>{this.state.lang.OPITRABOTAS.text}</p>
                                                            <input placeholder={this.state.lang.vhodyjobes.text}
                                                                name={idx}
                                                                onChange={this.handleChangecn}
                                                                className={"one_in"}
                                                            />


                                                        </div>


                                                        <div className={"first_reg col-lg-5 col-md-4 col-sm-6 col-6 "}>
                                                            <p className={"main_sql_change "}>

                                                                {this.state.lang.UkazRabots.text}
                                                            </p>
                                                            <input placeholder={this.state.lang.yerasnewmain.text}
                                                                name={idx}
                                                                onChange={this.handleChangeln}
                                                                className={"one_in"}

                                                            />


                                                        </div>
                                                        {(() => {
                                                            if (this.state.shareholders.length <= 1) {

                                                            } else {
                                                                return (
                                                                    <div type="button"
                                                                        onClick={this.handleRemoveShareholder(idx)}
                                                                        className="small main_class_123213">
                                                                        <img alt="" src={del} />
                                                                    </div>
                                                                )
                                                            }
                                                        })()}

                                                    </div>
                                                ))}
                                                <div type="button" onClick={this.handleAddShareholder}
                                                    className="tiilte_purple_all_main"><img alt="" className={"adding_clo_main"} src={add} />{this.state.lang.addtojobmest.text}
                                                </div>


                                            </div>
                                        </div>
                                    </div>
                                    <div className={"register_super_line"}></div>


                                    <div className={"first_reg col-lg-12 col-md-4 col-sm-6 col-6 "}>
                                        <div className={""}>




                                            {this.state.shareholders1.map((shareholder1, idx) => (
                                                <div className="row">
                                                    <div className={"first_reg col-lg-4 col-md-4 col-sm-6 col-6 "}>
                                                        <p className={"main_sql_change "}>{this.state.lang.OBRAZOVANIE.text}</p>
                                                        <input placeholder={this.state.lang.uchrejde.text}
                                                            name={idx}
                                                            onChange={this.handleChangecn1}
                                                            className={"one_in"}

                                                        />


                                                    </div>
                                                    <div className={"first_reg col-lg-5 col-md-4 col-sm-6 col-6 "}>
                                                        <p className={"main_sql_change "}>{this.state.lang.ALLPERIODNOOLS.text}</p>
                                                        <input placeholder={this.state.lang.yerasnewmain.text}
                                                            name={idx}
                                                            onChange={this.handleChangeln1}

                                                            className={"one_in"}
                                                        />


                                                    </div>

                                                    {(() => {
                                                        if (this.state.shareholders1.length <= 1) {

                                                        } else {
                                                            return (
                                                                <div type="button"
                                                                    onClick={this.handleRemoveShareholder1(idx)}
                                                                    className="small main_class_123213">
                                                                    <img alt="" src={del} />
                                                                </div>
                                                            )
                                                        }
                                                    })()}

                                                </div>
                                            ))}
                                            <div type="button" onClick={this.handleAddShareholder1}
                                                className="tiilte_purple_all_main"><img alt="" className={"adding_clo_main"} src={add} /> {this.state.lang.AddMESTUCHOBES.text}
                                            </div>


                                        </div>
                                    </div>


                                    <div className={"first_reg col-lg-12 col-md-4 col-sm-6 col-6 "}>
                                        <div className={""}>

                                            <p className={"main_sql_change "}>{this.state.lang.CERTFICATAMOJNOUPLOAD.text}</p>
                                            {(() => {

                                                if (this.state.myLoaded == false) {
                                                    return (
                                                        <p></p>
                                                    )
                                                } else {
                                                    return (
                                                        <div>
                                                            {
                                                                this.state.imgsert.certificates.map((item, index) =>
                                                                    <div className={"in_ppll"}>
                                                                        <img alt="" className={"in1"} src={in1} />
                                                                        <img alt="" className={"in2"} src={in2} />

                                                                        <input className={"mons_inpu_show"} placeholder={this.state.lang.namecertificate.text} name={JSON.stringify({
                                                                            "id": item.id,

                                                                            "index": index
                                                                        })}

                                                                            onChange={this.handleins}
                                                                        >

                                                                        </input>
                                                                    </div>
                                                                )
                                                            }
                                                        </div>

                                                    )

                                                }
                                            })()}
                                            <label htmlFor="filePicker" className={"myst_uploads"}>

                                                <img alt="" src={cloudupload} />

                                                {this.state.lang.uploadtypephoto.text}

                                            </label>
                                            <input id="filePicker" onChange={this.onImageChange}
                                                style={{ visibility: "hidden" }} type={"file"} multiple>

                                            </input>


                                        </div>
                                    </div>
                                    <div className={"grregister_buts"}>

                                        <Link onClick={() =>
                                            this.back({})
                                        } className={"next_all no_hover back_btuuomhovers"}>

                                            {this.state.lang.backkkkkkkkk.text}
                                        </Link>
                                        {(() => {

                                            console.log(this.state.imgsert)
                                            if (this.state.imgsert == null
                                                || this.state.shareholders[0].education == ""
                                                || this.state.shareholders[0].education_year == ""
                                                || this.state.shareholders1[0].work_experience == ""
                                                || this.state.shareholders1[0].work_experience_year == ""
                                                || this.state.imgsert.certificates.length == 0
                                            ) {
                                                return (
                                                    <p></p>
                                                )
                                            } else {
                                                return (
                                                    <Link onClick={() =>
                                                        this.saveMobile0({})
                                                    } className={"next_all no_hover"}>
                                                        {this.state.lang.NEXTTONEXT.text}
                                                        <img alt="" src={next} />
                                                    </Link>
                                                )
                                            }
                                        })()}

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


export default Rezume;