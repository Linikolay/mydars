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
import icohome from './images/ico_home.svg';
import mol from './images/mol2.svg';
import back from './images/back.svg';
import calecale from './images/calecale.svg';


import not from './images/notife.svg';
import prof from './images/prof.svg';
import mess_ff1 from './images/mess_ff1.svg';
import mess_ff from './images/mess_ff.svg';
import bam from './images/bam.svg';
import file_scripts_kj from './images/file_scripts_kj.svg'

import chat from './images/chat.svg'






class Pack extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isLoaded: false,
            main: "",
            lang: "",
            langLoad: false,
        }
        this.chose = this.chose.bind(this);
    }
    chose(obj) {
        console.log(obj)
        const mom = { "order_id": this.state.main.order_id, "lessons_count": obj.col }

        fetch('https://api.mydars.uz/api/buy_lessons_packets/', {
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

                "order_id": this.state.main.order_id, "lessons_count": obj.col
            })

        })


            .then(res => res.json())

            .then((data) => {
                console.log(mom)
                console.log(data)
                if (data.errors) {

                } else {
                    sessionStorage.setItem("my", JSON.stringify(data));
                    window.location.replace("/payment/");
                }
            })
    }
    componentDidMount() {


        fetch('https://api.mydars.uz/api/get_translates/', {
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
                    lang:data.translates,
                    langLoad: true,
                })



            }
            )




        console.log(JSON.parse(sessionStorage.pay))
        this.setState(
            {
                main: JSON.parse(sessionStorage.pay),
                isLoaded: true,
            }
        )
    }
    render() {
        const { isLoaded, langLoad } = this.state
        if (!isLoaded || !langLoad) {
            return (
                <p></p>
            )
        } else {
            return (
                <div className={"wrap main_pack"}>
                    {console.log(this.state.main)}
                    <div className={"container "}>
                        <div className={"row"}>
                            <div className={" col-lg-12 col-md-12 col-sm-6 col-6 "}>

                                <Link to={"/newtime/" + this.state.main.teacher_lesson_id + "/" + this.state.main.teacher_profile.id}><img alt="" className={"back_im"} src={back}></img></Link>
                                <span className={"kol_title_packet"}>{this.state.lang.countlesssons.text} </span>
                            </div>

                            <div className={" col-lg-12 col-md-12 col-sm-6 col-6 "}>
                                <span className={"des_packet_main"}>{this.state.lang.chousecountlessontap.text}</span>


                            </div>



                            <div className={"pop988010221"}>




                                <div className={""}>
                                    <img alt="" className={"img_shilds"} src={calecale} />
                                    <div className={"osniviy_pop_buy"}>
                                        <p className={"osniviy_pop_buy6"}>{this.state.lang.planingeasy.text}</p>
                                        <p className={"osniviy_pop_buy7"}>
                                        {this.state.lang.youbuylessongfress.text} 
                                        
                                        </p>

                                    </div>
                                </div>
                            </div>


                        </div>






                    </div>




                    <div className={"container "}>
                        <div className={"row"}>

                            {this.state.main.available_packets.map((col, index) => (
                                <div className={" col-lg-3 col-md-12 col-sm-6 col-6 hov_pack"}>

                                    <p className={"pa_text"}>{col.lessons_count}{this.state.lang.Urokovmainlkl32423.text} </p>
                                    <p className={"pa_text1"}>{col.total_price.toLocaleString()} {this.state.lang.summ.text}</p>
                                    <p className={"pa_text2"}>{col.all_buy_lessons_hours.toFixed(1)} {this.state.lang.timeshours.text}</p>
                                    <p className={"pa_text6"}>{this.state.lang.discount.text} {col.discount}%</p>
                                    <div className={"lge_box"}><Link
                                        onClick={() =>
                                            this.chose(
                                                {
                                                    "col": col.lessons_count,
                                                }
                                            )
                                        } c

                                        className={"sel_pa"}>{this.state.lang.chousesdefault.text}</Link></div>
                                </div>

                            ))}








                        </div>
                    </div>

                </div>
            )
        }
    }
}

export default withRouter(props => <Pack {...props} />);