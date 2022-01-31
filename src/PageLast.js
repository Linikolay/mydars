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
import del from './images/del.svg'
import camera_ico from './images/bxs-camera.svg'
import cloudupload from './images/bx-cloud-upload.svg'
import ches from './images/ches.svg'

class PageLast extends Component {
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
            shareholders: [{education: '', education_year: ""}],
            shareholders1: [{work_experience: '', work_experience_year: ""}],
            lgstate: "",
            contstate: "",
            monst: [{language_id: "111", level: ""}],
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
            pusara: [{name: ""}]

        }

        this.handleChangecn = this.handleChangecn.bind(this);
        this.handleChangeln = this.handleChangeln.bind(this);

        this.handleChangecn1 = this.handleChangecn1.bind(this);
        this.handleChangeln1 = this.handleChangeln1.bind(this);
        this.onImageChange = this.onImageChange.bind(this);
        this.handleins = this.handleins.bind(this);

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
    lang:data.translates,
    langLoad: true,
})

            }
        )


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
                        imgsert: data.profile.video[0].id,
                        isLoaded: true,
                    });
                    localStorage.removeItem("token")
                    localStorage.removeItem("is_user")

                    console.log(data.data)
                }
            )
    }

    handleins = e => {
        let obj = JSON.parse(e.target.name);
        console.log(obj)

        const {imgsert} = this.state

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

        // const imagedata = e.target.files;
        // data.append('myfile ', imagedata, );
        // data.append('is_cert ', "true")
        // console.log(imagedata)
        for (let i = 0; i < e.target.files.length; i++) {
            const data = new FormData();
            const imagedata = e.target.files[i];

            data.append('myfile', imagedata,);
            data.append('is_passport', "true")
            console.log(imagedata)

            fetch('https://api.mydars.uz/api/registration/add_teacher_files/', {
                method: 'POST',


                headers: {
                    // 'auth': 'ef899a6d-29d6-4130-8b59-3d95dfbcc9bd',
                    // 'lang': 'uz',
                    // "Content-Type": "multipart/form-data",
                    'auth': "ef899a6d-29d6-4130-8b59-3d95dfbcc9bd",
                     'lang': localStorage.getItem('lang'),
                    'token': localStorage.getItem('token'),
                    "video": 1
                },
                body: data

            })

                .then(res => res.json())

                .then((data) => {
                        console.log(data)
                        this.setState({
                            imgsert: data
                        })

                    }
                )

        }


    };
    saveMobile0 = obj => {


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


                "reg_page": 7,
                "video_page": true

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


        const {shareholders} = this.state

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


        const {shareholders} = this.state

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


        const {shareholders1} = this.state

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

        const {shareholders1} = this.state

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
        this.setState({shareholders: this.state.shareholders.concat([{education_year: '', education: ""}])});
    }

    handleRemoveShareholder = (idx) => () => {
        this.setState({shareholders: this.state.shareholders.filter((s, sidx) => idx !== sidx)});
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
        this.setState({shareholders1: this.state.shareholders1.filter((s, sidx) => idx !== sidx)});
    }


    render() {
        console.log(this.state.pusara)

        const {create, isLoaded, langLoad} = this.state;
        if (!isLoaded || !langLoad) {
            return (
                <p></p>
            )
        } else {

            return (
                <div className={"wrap"}>

                    <div className={"container "}>
                        <div className={"row"}>
                            <div className={" col-lg-12 col-md-4 col-sm-6 col-6 "}>
                                <p className={"tittle_top_page_regst"}>{this.state.lang.Vereficationname.text}</p>
                                <div className={"first_reg col-lg-12 col-md-4 col-sm-6 col-6 "}>


                                    <div className={"row"}>
                                        <div className={"first_reg col-lg-12 col-md-4 col-sm-6 col-6 "}>
                                            <div className={"mouijjj container"}>

                                              <img alt="" src={ches}/>


<p className={"main_chek_seess"}>{this.state.lang.REGISTROKONCH.text}</p>
                                                <p>{this.state.lang.OJIDANMORECII.text}
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


export default PageLast;