import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import openSocket from 'socket.io-client';
import {
    Button,
    FormControl,
    Form,

    NavItem,
    NavDropdown,
    MenuItem,
    Nav,

    Container,
    Row,
    Col, Carousel
} from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'
import './App.css'
import ScrollToBottom from 'react-scroll-to-bottom'
import logo from './images/logo.svg';
import logo1 from './images/logo.png';
import icohome from './images/ico_home.svg';
import mol from './images/mol2.svg';
import not from './images/notife.svg';
import prof from './images/prof.svg';
import mess_ff1 from './images/mess_ff1.svg';
import mess_ff from './images/mess_ff.svg';
import bam from './images/bam.svg';
import file_scripts_kj from './images/file_scripts_kj.svg'

import facebook from './images/facebook.png';
import humo from './images/humo.png';
import it from './images/it.png';
import logo_uzcard from './images/logo_uzcard.png';
import telegram from './images/telegram.png';
import youtube from './images/youtube.png';
import instagram from './images/instagram.png';

import payme from './images/payme.png';

import apelsin from './images/apelsin.png';

import chat from './images/chat.svg'
import { YMInitializer } from 'react-yandex-metrika';





class Footer extends Component {
    constructor(props) {
        super(props)
        this.state = {
        lang: "",
        langLoad: false,
        }
       
      

    }
    componentDidMount(){

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

    render() {
        const {langLoad} = this.state
        if(!langLoad){
return(
    <p></p>
)
        }else{
            return (
                <div className={"wrap foter_frapw"}>
                    <YMInitializer accounts={[82920808]} />
                    <div className={"container "}>
                        <div className={"row"}>
                            <div className={" col-lg-3 col-md-12 col-sm-6 col-6 "}>
    
                                <img alt="" width={"180px"} src={logo}></img>
                            </div>
    
                            <div className={" col-lg-3 col-md-12 col-sm-6 col-6 "}>
    
                                <p className={"foot_strongs"}>{this.state.lang.projectinfo.text}</p>
                                <a className={"node_decorationtitle"} href={"https://tutor.mydars.uz"}><p className={"foot_strongs22"}>{this.state.lang.createprpod.text}</p></a>
    
                                <a className={"node_decorationtitle"} href={"https://blog.mydars.uz/onas"}><p className={"foot_strongs22"}>{this.state.lang.mydarstitletext.text}</p></a>
                               
                                <a className={"node_decorationtitle"} href={"https://blog.mydars.uz/smi"}><p className={"foot_strongs22"}>{this.state.lang.smiiiii.text}</p></a>
                                <a className={"node_decorationtitle"} href={"https://blog.mydars.uz/contacts"}><p className={"foot_strongs22"}>{this.state.lang.contacts.text}</p></a>
                               
                  
    
                            </div>
    
                            <div className={" col-lg-3 col-md-12 col-sm-6 col-6 "}>
    
    
    
                                <p className={"foot_strongs"}>{this.state.lang.predmeticks.text}</p>
                                <p className={"foot_strongs22"}>{this.state.lang.engsi1.text}</p>
                                <p className={"foot_strongs22"}>{this.state.lang.uzbmine.text}</p>
                                <p className={"foot_strongs22"}>{this.state.lang.russianw.text}</p>
                                <p className={"foot_strongs22"}>{this.state.lang.koreatiles.text}</p>
                                <p className={"foot_strongs22"}>{this.state.lang.fdizika.text}</p>
                                <p className={"foot_strongs22"}>{this.state.lang.metematick.text}</p>
                               
                            </div>
    
                            <div className={" col-lg-3 col-md-12 col-sm-6 col-6 "}>
    
                         
                                <p className={"foot_strongs"}>{this.state.lang.informations.text}</p>
    
                                <a className={"node_decorationtitle"} href={"https://mydars.uz/docs/terms_and_conditions.html"}><p className={"foot_strongs22"}>{this.state.lang.soglasheniye0066.text}
    </p></a>
                                <a className={"node_decorationtitle"} href={"https://mydars.uz/docs/terms_and_conditions_for_tutors.html"}><p className={"foot_strongs22"}>{this.state.lang.SOGLPREPODS.text}</p></a>
                                <a className={"node_decorationtitle"} href={"https://mydars.uz/docs/privacy_policy.html"}><p className={"foot_strongs22"}>{this.state.lang.PERSONALEDANNIE.text} </p></a>
                                <a className={"node_decorationtitle"} href={"https://mydars.uz/docs/refound_and_cancelation.html"}><p className={"foot_strongs22"}>{this.state.lang.POLITERETURNMONEYS.text}</p></a>
                                <a className={"node_decorationtitle"} href={"https://mydars.uz/docs/ethical_code_of_tutors.html"}><p className={"foot_strongs22"}>{this.state.lang.ETNIVHESKOCESDES.text} </p></a>
                      
    
    
                            
                            </div>
    
                        </div></div>
    
    
    
    
    
    
    
    
    
    <div className={"fotter_otstup0"}></div>
    
    
    
    
    
    
    
    
                    <div className={"container "}>
                        <div className={"row"}>
                            <div className={" col-lg-3 col-md-12 col-sm-6 col-6 "}>
    
                                <span className={"copyratn"}>
                                    <p className={"btn_mrarr"}>{this.state.lang.REZIDENTPARK.text}</p>
                                </span>
                                <img alt="" className={"bottom_logos"} src={it}></img>
                            </div>
    
                            <div className={" col-lg-3 col-md-12 col-sm-6 col-6 "}>
    
    
    
                            </div>
    
                            <div className={" col-lg-3 col-md-12 col-sm-6 col-6 "}>
    
    
                            </div>
    
                            <div className={" col-lg-3 col-md-12 col-sm-6 col-6 "}>
                                <p className={"btn_mrarr"}> {this.state.lang.miprinemas.text}</p>
    
                                <img alt="" className={"socialnetwokr1"} src={humo}></img>
                                <img alt="" className={"socialnetwokr1"} src={logo_uzcard}></img>
    
    
                                <img alt="" className={"socialnetwokr1"} src={payme}></img>
                                <img alt="" className={"apelsin socialnetwokr1"} src={apelsin}></img>
                            </div>
    
                        </div></div>
    
    
    
    
    
    
    
                    <p></p>
    
    
    
    
    
    
    
    
    
    
    
                    <div className={"container "}>
                        <div className={"row"}>
                            <div className={" col-lg-3 col-md-12 col-sm-6 col-6 "}>
    
                                <span className={"copyratn"}>{this.state.lang.coprything.text} </span>
                                <p className={"copyratn"}>{this.state.lang.coprything1.text} </p>
                            </div>
    
                            <div className={" col-lg-3 col-md-12 col-sm-6 col-6 "}>
    
    
                            </div>
    
                            <div className={" col-lg-3 col-md-12 col-sm-6 col-6 "}>
    
    
                            </div>
    
                            <div className={" col-lg-3 col-md-12 col-sm-6 col-6 "}>
                                <a target="_blank" href={"https://www.youtube.com/channel/UCkv1ENqmN9bsd0DkhqtI7ZA"}>
                                    <img alt="" className={"socialnetwokr"} src={youtube}></img>
                                </a>
                                <a target="_blank" href={"https://www.facebook.com/mydarsuz/"}>
                                    <img alt="" className={"socialnetwokr"} src={facebook}></img>
                                </a>
                                <a target="_blank" href={"https://www.instagram.com/mydarsuz/"}>
                                    <img alt="" className={"socialnetwokr"} src={instagram}></img>
                                </a>
                                <a  target="_blank" href={"https://t.me/mydarsuz"}>
                                    <img alt="" className={"socialnetwokr"} src={telegram}></img>
                                </a>
                            </div>
    
                        </div></div>
    
    
    
                </div>
            )
        }
       
    }
}

export default withRouter(props => <Footer {...props} />);