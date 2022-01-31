import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import { Link } from 'react-router-dom';

// import next_ico_main from './images/next_ico_main.svg'
import ico_msg from './images/ico_msg.svg'
// import ico_trial_ico from './images/ico_trial_ico.svg'
import checked_profile_ico from './images/checked_profile_ico.svg'
import reting_ico from './images/reting_ico.svg'
// import lang_ico from './images/lang_ico.svg'
// import profile_icon from './images/profile_icon.svg'
import player from "./images/player.svg";
// import feedavatar from "./images/feedavatar.svg";
import addfeed from "./images/addfeed.svg";
// import MetaTags from 'react-meta-tags';
// import pompom from "./images/pompom.svg";
import { ImpulseSpinner } from "react-spinners-kit"
import bron from "./images/bron.svg";
import script from './images/scipt.svg'
import { CalendarStyle } from "./Styled2";
// import FullCalendar from "@fullcalendar/react";
// import timeGridPlugin from "@fullcalendar/timegrid";
// import interactionPlugin from "@fullcalendar/interaction";
// import dayGridPlugin from "@fullcalendar/daygrid";
// import esLocale from "@fullcalendar/core/locales/ru";
import moment from "moment";
import InlineDialog from "@atlaskit/inline-dialog";
import soc from './Cht'
const today = new Date();
today.setMinutes(0);
const yday = new Date(today);
const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);
yday.setDate(today.getDate() - 1);

interface
State
{
    dialogOpen: boolean;
    calendar: any;
}
const dateFormat = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    meridiem: false
};

class Groups extends Component {
    constructor(props) {
        super(props)
        this.state = {
            bob: "",
            teacher: "",
            isLoaded: false,
            create: "",
            imgsrc: "",
            showModal: false,
            date: "",
            feed: "",
            isLoad: false,
        }
        // this.hand = this.hand.bind(this)
        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
        // this.mess = this.mess.bind(this);

    }

   

    componentDidMount() {
        const url = this.props.match.params
        window.scrollTo(0, 0)

       

        

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


        fetch('https://api.mydars.uz/api/get_feedback/', {
            method: 'POST',

            headers: {
                // 'auth': 'ef899a6d-29d6-4130-8b59-3d95dfbcc9bd',
                'lang': localStorage.getItem('lang'),
                // 'Content-Type': 'application/json',
                'auth': "ef899a6d-29d6-4130-8b59-3d95dfbcc9bd",
                // 'lang': "uz"
                // 'token': localStorage.getItem('token'),

            },
            body: JSON.stringify({


                "teacher_id": url.id, "page": 1


            })

        })


            .then(res => res.json())

            .then((data) => {



                this.setState({
                    // isLoaded: true,
                    feed: data,
                })


            }
            )


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

                    // isLoaded: true,
                    date: data,
                    isLoad: true
                });


            }
            )


        fetch('https://api.mydars.uz/api/content/main_page/', {
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

                "teacher_id": url.id


            })

        })


            .then(res => res.json())

            .then((data) => {

                // const main = JSON.stringify(data.main_page.teacher_profile)
                console.log(data)
                // fetch('http://localhost:5000/view/' + url.id + '/?name=' + data.main_page.teacher_profile.name + '&img=' + data.main_page.teacher_profile.avatar_url, {

                    


                // })

                //     .then(res => res.json())

                //     .then((data1) => {

                //         console.log(data1)
                //     }
                //     )
                console.log(data)
                this.setState({
                    create: data.main_page.teacher_profile,
                    isLoaded: true,
                })


            }
            )
    }


    render() {

        const { isLoaded, isLoad, langLoad } = this.state


        if (!isLoaded || !isLoad || !langLoad) {
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
                <div className={"wrap top_lklkkk"}>

                   

<div className={"whta_hist"}>
                                                    <div className={"container main_no_pa grvbloker"}>
                                                        <div className={"row row_line_sty"}>


                                                           






<div className={"line_lool"}></div>
                                                            <div className={"col-lg-12 col-md-4 col-sm-6 col-6 pddsss"}>

                                                                <div className={"container  main_no_pa cont_dfdf"}>
                                                                    <div className={"row row_line_sty mff_row"}>

                                                                        <div className={" col-lg-4 col-md-4 col-sm-6 col-6 "}>


                                                                            <p className={"mg_pop sers_tet"}>Начало группы</p>


                                                                        </div>
                                                                        <div className={" col-lg-2 col-md-4 col-sm-6 col-6 "}>


                                                                            <p className={"mg_pop sers_tet"}>Кол-во мест</p>


                                                                        </div>

                                                                        <div className={" col-lg-3 col-md-4 col-sm-6 col-6 "}>


                                                                            <p className={"mg_pop sers_tet"}>Время урока</p>


                                                                        </div>


                                                                        <div className={" col-lg-2 col-md-4 col-sm-6 col-6 "}>


                                                                            <p className={"mg_pop sers_tet"}>Описание</p>


                                                                        </div>
                                                                    </div>


                                                                </div>


                                                            </div>
                                                            <div className={"line_lool"}></div>


<div className='grlist'>

                                                                            {this.state.create.teacher_group.map((data, idx) => (
                                                                                <div className={"wd_muo_uroks"}>


                                                                                    <div className={" col-lg-12 col-md-4 col-sm-6 col-6 pddsss"}>



                                                                                        <div className={" main_no_pa cont_dfdf"}>
                                                                                            <div className={"row row_line_sty mff_row"}>

                                                                                                <div className={" col-lg-4 col-md-4 col-sm-6 col-6 "}>


                                                                                                    <p className={"mg_pop"}>{moment(data.group_start_date_timestamp * 1000).format("dddd, DD MMMM, В HH:mm")}</p>


                                                                                                </div>
                                                                                                <div className={" col-lg-2 col-md-4 col-sm-6 col-6 "}>


                                                                                                    <p className={"mg_pop"}>{data.current_students_count}/{data.max_students_count}</p>


                                                                                                </div>
                                                                                                <div

                                                                                                    className={" col-lg-3 ltfetrers1 col-md-4 col-sm-6 col-6 txt_rg_cen"}>


                                                                                                    <div className={"mg_pop"}>{data.max_lesson_duration} мин</div>


                                                                                                </div>





                                                                                                <div
                                                                                                    className={" ltfetrers1 col-lg-2 col-md-4 col-sm-6 col-6 txt_rg"}>


                                                                                                    <p className={"mg_pop"}>{data.group_description}
                                                                                                    </p>


                                                                                                </div>

                                                                                                <div className={" ltfetrers1 col-lg-1 col-md-4 col-sm-6 col-6 txt_rg"}>
{console.log(data)}
                                                                                                    {(() => {
                                                                                                        if (data.current_students_count == data.max_students_count) {
                                                                                                            return (
                                                                                                                <button className='btnediters11'

                                                                                                                >Забронировать</button>
                                                                                                            )
                                                                                                         
                                                                                                        } else {
                                                                                                            return (
                                                                                                                <Link className='btnediters btnediters33'
                                                                                                                    to={"/paygroup/" + data.id}
                                                                                                                >Забронировать</Link>
                                                                                                            )  
                                                                                                        }
                                                                                                    })()}




                                                                                                </div>

                                                                                            </div>

                                                                                            <div className={"line_lool"}></div>

                                                                                        </div>




                                                                                    </div>


                                                                                </div>



                                                                            ))}


                                                                        </div>








            
                </div> </div></div></div>
            )

        }
    }
}

export default Groups;