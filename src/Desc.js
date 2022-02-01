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
import mini from './images/mini.svg'
import next from "./images/next.svg";
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import lang from './Lang';
class Desc extends Component {
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
            reg_page: "",
            pusara: [{name: ""}],
            txtmain: "",
            editorState: EditorState.createEmpty()

        }

        this.handleChangecn = this.handleChangecn.bind(this);
        this.back = this.back.bind(this);
        this.onEditorStateChange = this.onEditorStateChange.bind(this);
        
    }









    back(){
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
                if(data.error == 0){
                  
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
    lang:data.translates,
    langLoad: true,
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

    onEditorStateChange(e) {
        console.log(e)
        this.setState({
         
            txtmain: e.target.value
        });

    };

    handleChangecn = e => {

        // console.log(e)
        // this.setState({
        //     txtmain: e.target.value
        // })
    }
    saveMobile0 = obj => {


        fetch('https://api.mydars.uz/api/registration/', {
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

                "description": this.state.txtmain,
"reg_page": 5

            })

        })


            .then(res => res.json())

            .then((data) => {
                    console.log(data)
                this.props.mainPage.changeUnit(5)
                window.location.reload();


                }
            )


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
        console.log(this.state.txtmain)
        const { editorState } = this.state;
        const {create, isLoaded, langLoad} = this.state;
        if (!isLoaded || !langLoad) {
            return (
                <p></p>
            )
        } else {

            return (
                <div className={"wrap"}>
                    <div className={"top_page_regist"}>
                        <img alt="" src={mini}/> {this.state.lang.numberphonesreg.text} <img alt="" src={bx_chevron_right}/>
                        <img alt="" src={mini}/> {this.state.lang.lichniydamomn.text} <img alt="" src={bx_chevron_right}/>

                        <img alt="" src={mini}/> {this.state.lang.Rezumi.text} <img alt="" src={bx_chevron_right}/>

                        <img alt="" src={reg_check}/> {this.state.lang.Descriptionmainfull.text} <img alt="" src={bx_chevron_right}/>

                        <img alt="" src={reg_uncheck}/> {this.state.lang.myVideoRolik.text} <img alt="" src={bx_chevron_right}/>
                        <img alt="" src={reg_uncheck}/> {this.state.lang.Vereficationname.text}
                    </div>
                    <div className={"container "}>
                        <div className={"row"}>
                            <div className={" col-lg-12 col-md-4 col-sm-6 col-6 "}>
                                <p className={"tittle_top_page_regst desc_reg_page_09"}>{this.state.lang.DescPROFILENAME.text}</p>
                                <p className={"tittle_top_page_regst2"}>{this.state.lang.CREATDESCNAMEPOLRRR.text}</p>
                                <div className={"first_reg col-lg-12 col-md-4 col-sm-6 col-6 "}>


                                    <div className={"row"}>
                                        <div className={"first_reg col-lg-12 col-md-4 col-sm-6 col-6 "}>
                                            <div className={""}>

                                                <p className={"main_sql_change "}>{this.state.lang.JGJDFNERER.text}</p>

                                                <textarea className={"text_operation_nume"}
                                                  placeholder={"Напишите о себе"} 
                                                    onChange={this.onEditorStateChange}
                                                />
{/*                                                <textarea placeholder={"Напишите о себе"} onChange={this.handleChangecn}*/}
{/*                                                          className={"text_ars_desc"}>*/}

{/*</textarea>*/}


                                            </div>
                                        </div>
                                    </div>










                                    <div className={"grregister_buts"}>

<Link onClick={() =>
       this.back({})
   } className={"next_all no_hover back_btuuomhovers"}>
     
     {this.state.lang.backfetchersw.text}
   </Link>
   {(() => {


if (this.state.txtmain == "") {
    return (
        <p></p>
    )
} else {
    return (
        <Link onClick={() =>
            this.saveMobile0({})
        } className={"next_all no_hover"}>
           {this.state.lang.NEXTTONEXT.text} 
            <img alt="" src={next}/>
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


export default Desc;