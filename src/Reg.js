/**
 * Created by Nikolay on 17.01.2021.
 */
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {withRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import InputNumber from 'react-input-number';
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
class Reg extends Component {
    state = {showModal: false};

    constructor() {
        super()
        this.state = {

            radio: true,
            radio1: true,
            of: false,
            of1: false,
            pass: "998",
            email: "",
            lang:"",
            langLoad: false,
            phone: "",
            status: "",
            sms: "",
            of1: false,
            texterror: "",
            name:"",
            err: false,
            fam:"",
            phoneGet: false,
            em:"",
            of2: false,
            dd:"",
            mm:"",
            yy:"",
            pas1:"",
            pas2:""
        }

        this.handler = this.handler.bind(this);
        this.handler1 = this.handler1.bind(this);
        this.handlePass = this.handlePass.bind(this);
        this.handle2 = this.handler.bind(this);
        this.handleradio1Change = this.handleradio1Change.bind(this);


        this.handleradioChange1 = this.handleradioChange1.bind(this);
        this.handleradio1Change1 = this.handleradio1Change1.bind(this);


        this.handleChangecn1 = this.handleChangecn1.bind(this);
        this.handleChangeln1 = this.handleChangeln1.bind(this);


        this.handleemailChange = this.handleemailChange.bind(this);
        this.handleemailChange1 = this.handleemailChange1.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handlePass1 = this.handlePass1.bind(this);
        this.handleAdd1 = this.handleAdd1.bind(this);

        this.handleAdd4 = this.handleAdd4.bind(this);

        this.handlemor1 = this.handlemor1.bind(this);
        this.handlemor2 = this.handlemor2.bind(this);
        this.handlemor3 = this.handlemor3.bind(this);
        this.handlemor4 = this.handlemor4.bind(this);
        this.handlemor5 = this.handlemor5.bind(this);
        this.handlemor6 = this.handlemor6.bind(this);
        this.handlemor7 = this.handlemor7.bind(this);
        this.handlemor8 = this.handlemor8.bind(this);

    }
    handleAdd4(event) {
        const main = {

            "phone_number": this.state.pass,

            "is_user": true
        }
        console.log(main)
        if(this.state.pas1 == this.state.pas2){
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
    
                   "name": this.state.name,
                   "surename": this.state.fam,
                   "email": this.state.em,
                    "date_of_birth": this.state.dd+"." + this.state.mm + "." + this.state.yy,
                    "password": this.state.pas1
                })
    
            })
    
    
                .then(res => res.json())
    
                .then((data) => {
    if(data.error){
        this.setState({
            err: true,
            texterror: data.reason
        })
    }else{
          if (data.profile.is_user == true) {
                            console.log("dfdfdfdffddddddddddddddddddddddds")
                            localStorage.setItem('is_user', true)
                            window.location.replace("/");
    
                        }
    }
                        console.log(data)
                        // if (data.profile.is_user == true) {
                        //     console.log("dfdfdfdffddddddddddddddddddddddds")
                        //     localStorage.setItem('is_user', true)
                        //     window.location.replace("/");
    
                        // }
                    }
                )
        }else{
            this.setState({
                err: true,
                texterror: "Пароли не совпадают"
            })
        }
        
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











    handlePass1(event) {
        console.log(event.target.value)
        this.setState({
            sms: event.target.value
        })
    }

    handleAdd1(event) {
        const main = {

            "phone_number": this.state.pass,

            "is_user": true
        }
        console.log(main)
        fetch('https://api.mydars.uz/api/auth/sms/confirm/', {
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


                "phone_number": this.state.pass,
                "sms": this.state.sms,
                "is_user": true
            })

        })


            .then(res => res.json())

            .then((data) => {

                    console.log(data)
                    if (data.status == 200) {
                        localStorage.setItem('token', data.token);

                        window.location.reload();
                    }
                }
            )
    }

    handlePass(event) {

        this.setState({
            pass: event.target.value,
      
        })
        console.log(event.target.value)
        if(event.target.value.length == 12){
            this.setState({
         
                phoneGet: true,
            })
        }else{
            this.setState({
         
                phoneGet: false,
            })   
        }
    
    }

    handleAdd(event) {
        const main = {

            "phone_number": this.state.pass,

            "is_user": true
        }
        console.log(main)
        fetch('https://api.mydars.uz/api/auth/sms/', {
            method: 'POST',


            headers: {
                // 'auth': 'ef899a6d-29d6-4130-8b59-3d95dfbcc9bd',
                // 'lang': 'uz',
                // "Content-Type": "multipart/form-data",
                'auth': "ef899a6d-29d6-4130-8b59-3d95dfbcc9bd",
                'lang': localStorage.getItem('lang'),
                // 'token': localStorage.getItem('token')
            },
            body: JSON.stringify({


                "phone_number": this.state.pass,

                "is_user": true
            })

        })


            .then(res => res.json())

            .then((data) => {

                    console.log(data)
                    if (data.status == 200) {
                        this.setState({
                            status: 200
                        })
                    }
                }
            )
    }

    handleemailChange(event) {
        console.log(event.target.value)
        this.setState({email: event.target.value})
    }

    handleemailChange1(event) {
        this.setState({email: event.target.value})
    }

    handler2 = (e) => {
        const {target} = e;
        const value = target.type == 'checkbox' ? target.checked : target.value;
        const {name} = target;
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
    handler5 = (e) => {
        const {target} = e;
        const value = target.type == 'checkbox' ? target.checked : target.value;
        const {name} = target;
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
    handler1 = (e) => {
        const {target} = e;
        const value = target.type == 'checkbox' ? target.checked : target.value;
        const {name} = target;
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
                // console.log(data):


                this.setState({
                    lang: data.translates,
                    langLoad: true
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
const {langLoad} = this.state
if(!langLoad){
    return(
        <p></p>
    )
}else{
    if (localStorage.getItem('token') == null) {
        return (
            <div className={"wrap wrap2 warw123123"}>
                <div className={"container main_container"}>
                    <div className="row">


                        <div className={"container main_container main_container32423"}>
                            <div className="row">

                                <div className="row warw123123 col-lg-6 col-md-4 col-sm-6 col-6 block_main-2 row_execute">

                                <img alt="" className={"rg_aytt rg_aytt11"} src={auth} />

                                </div>

                                <div className="row col-lg-3 warw123123 col-md-4 col-sm-6 col-6 block_main-2 row_execute">
                                   
                                    {(() => {


                                        if (this.state.status == "" && localStorage.getItem('token') == null) {
                                      
                                            return (
                                                <div className="bl_pop bl_pop11">
                                                    <p className="avt_text avt_text_1 avt_text_155">{this.state.lang.registeruchenijkk.text}</p>


                                                    <p className="avt_text bt_txt33">{this.state.lang.vidoynomernumbers.text}</p>
                                                    <input
                                                        onChange={this.handlePass}
                                                        placeholder="998"
                                                        type="text"
                                                        value={this.state.pass}
                                                        className="form-control email_input last_name_class_inp"/>
                                                                                                
<div className={""}>
<label className="checkbox">
                                        <input className="custom-checkbox" type="checkbox" onChange={this.handler2}/>
                            
                                       <span></span>
                                    </label>
                                    <a href={"https://mydars.uz/docs/privacy_policy.html"} className={"mopppp primiisr_009"}>
                                        
                                    {this.state.lang.soglsie.text} 
                                        
                                        
                                        </a>


                                
                                    
                                    {/* <a href={"/docs/ethical_code_of_tutors.html"} target="_blank" className={"mopppp"}>{this.state.lang.ETNICHESKCODECS.text} </a> */}

                                </div>
                                                        {(() => {   

                                                        if(this.state.of2 == false && this.state.phoneGet ==false){
                                                        return(
                                                            <div></div>
                                                        )
                                                        }else if(this.state.of2==true & this.state.phoneGet==true){
                                                            return(
                                                           <Link className={"no_decoration"}> 
                                                                <div onClick={this.handleAdd} className="btn_vh">
                                                                <p className="bt_txt no_decoration">{this.state.lang.sendcodesms.text}</p>
                                                                
                                                            </div>
                                                            </Link>
                                                            )
                                                        }

                                                        })()}
                                                

                                                </div>

                                            )
                                        } else if (this.state.status == 200 && localStorage.getItem('token') == null) {
                                            return (
                                                <div className="bl_pop">
                                                    <p className="avt_text avt_text_1">{this.state.lang.vidoyodsmschanges.text}</p>


                                                    <p className="avt_text bt_txt33">{this.state.lang.coideal.text}</p>
                                                    <input
                                                        onChange={this.handlePass1}
                                                        placeholder="****"
                                                        type="text" value={this.state.sms}
                                                        className="form-control email_input last_name_class_inp"/>

                                                    <Link className={"no_decoration"}>
                                                    <div onClick={this.handleAdd1} className="btn_vh">
                                                        <p className="bt_txt ">{this.state.lang.vhodisan.text}</p>
                                                    </div></Link>

                                                </div>

                                            )
                                        }


                                    })()}
                                    <p>{this.state.lang.prepodrelregisterend.text}
                                    <p><Link to={"/teachercreate"}>{this.state.lang.statprpodovat.text}</Link></p>

                                    </p>

                                </div>


                            </div>
                        </div>


                    </div>

                </div>
            </div>
        )
    } else {

        return (

            <div className="wrap wrap2">
                <div className={"container main_container"}>
                    <div className="row">
                        <div
                            className="row col-lg-12 col-md-4 col-sm-6 col-6 block_main-2 row_execute row_execute1">


                            <div className="bl_pop  row_execute13">
                                <p className="avt_text avt_text_1">{this.state.lang.eshekochtotouee.text}</p>


                                <p className="avt_text bt_txt33">{this.state.lang.ukazimena.text}</p>
                                <input
                               autocomplete="off"
                                    onChange={this.handlemor1}
                                    placeholder=""
                                    type="text"
                                    className="form-control email_input last_name_class_inp"/>


                                <p className="avt_text bt_txt33">{this.state.lang.ukajefamily.text}</p>
                                <input
                                autocomplete="off"
                                    onChange={this.handlemor2}
                                    placeholder=""
                                    type="text"
                                    className="form-control email_input last_name_class_inp"/>


                                <p className="avt_text bt_txt33">{this.state.lang.ukajiemail.text}</p>
                                <input
                           autocomplete="off"
                                    onChange={this.handlemor3}
                                    placeholder=""
                                    type="text"
                                    className="form-control email_input last_name_class_inp"/>


                                <p className="avt_text bt_txt33"> {this.state.lang.datebirth.text}</p>

                                <div className="mi_332">
                                    <textarea
                                    autocomplete="off"
                                    pattern="[0-9]*"
                                    onChange={this.handlemor4}
                                    placeholder={this.state.lang.day222.text}
                                    
                                    className="form-control email_input last_name_class_inp daes"/>

                                    <textarea
                                    autocomplete="off"
                                        onChange={this.handlemor5}
                                        placeholder={this.state.lang.month11.text}
                                        
                                        className="form-control email_input last_name_class_inp daes"/>

                                    <textarea
                                    autocomplete="off"
                                        onChange={this.handlemor6}
                                        placeholder={this.state.lang.yersmo.text}
                                     
                                        className="form-control email_input last_name_class_inp daes"/>


                                </div>





                                <p className="avt_text bt_txt33">{this.state.lang.passwordesminis.text}</p>
                                <input
                                autocomplete="off"
                                    onChange={this.handlemor7}
                                    placeholder="****"
                                    type="password"
                                    className="form-control email_input last_name_class_inp"/>



                                <p className="avt_text bt_txt33">{this.state.lang.retrypasswords.text}</p>
                                <input
                                autocomplete="off"
                                    onChange={this.handlemor8}
                                    placeholder="****"
                                    type="password"
                                    className="form-control email_input last_name_class_inp"/>

<div className={""}>
<label className="checkbox">
                                        <input className="custom-checkbox" type="checkbox" onChange={this.handler5}/>
                            
                                       <span></span>
                                    </label>
                                    <a href={"https://mydars.uz/docs/terms_and_conditions.html"} className={"mopppp primiisr_009"}>
                                        
                                    {this.state.lang.soglominet.text}  
                                        
                                        
                                        </a>


                                
                                    
                                    {/* <a href={"/docs/ethical_code_of_tutors.html"} target="_blank" className={"mopppp"}>{this.state.lang.ETNICHESKCODECS.text} </a> */}

                                </div>




                                {(() => {   

if(this.state.of2 == false ){
return(
<div></div>
)
}else if(this.state.of2==true){
return(
    <Link className={"no_decoration"}>

    <p onClick={this.handleAdd4} className="btn_vh">
                                            <p className="bt_txt ">{this.state.lang.registrtxt.text}</p>
                                        </p></Link>
)
}

})()}








                                {(() => {
if(this.state.err == false){

}else{
return(
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
}
       


    }
}


export default Reg;
/**
 * Created by Nikolay on 18.01.2021.
 */
