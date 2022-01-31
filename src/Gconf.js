import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { ImpulseSpinner } from "react-spinners-kit";

import { Link } from 'react-router-dom';

import next_ico_main from './images/next_ico_main.svg'
import ico_msg from './images/ico_msg.svg'
import ico_trial_ico from './images/ico_trial_ico.svg'
import checked_profile_ico from './images/checked_profile_ico.svg'
import reting_ico from './images/reting_ico.svg'
import lang_ico from './images/lang_ico.svg'
import profile_icon from './images/profile_icon.svg'
import player from "./images/player.svg";
import feedavatar from "./images/feedavatar.svg";
import addfeed from "./images/addfeed.svg";
import bron from "./images/bron.svg";
import script from './images/scipt.svg'
import { CalendarStyle } from "./Styled";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import StarRatingComponent from 'react-star-rating-component';
import dayGridPlugin from "@fullcalendar/daygrid";
import esLocale from "@fullcalendar/core/locales/ru";
import moment from "moment";
import { NotificationContainer, NotificationManager } from 'react-notifications';
let newDate = new Date().getTime()
const checkTimeStart = Date.parse(newDate)

class Gconf extends Component {
    constructor(props) {
        super(props)
        this.state = {
            bob: "",
            teacher: "",
            isLoaded: false,
            create: "",
            imgsrc: "",
            showModal: false,
            not: false,
            is_user: "",
            rating: 5,

            rating1: 0,
            rating2: 0,
            rating3: 0,
            rating4: 0,
            rating5: 0,
            date: "",
            feed: "",
            myLoaded: false,
            isLoad: false,
            todat: "",
        }
        // this.setContentRef = (contentRef) => {

        //     this.setState({
        //         isLoad: true
        //     })
        // }
        this.sens0 = this.sens0.bind(this);
        this.close = this.close.bind(this);
        this.sens = this.sens.bind(this);
    }

    state = {
        showModal: false,
        showModal1: false,
        showModal2: false,
        showModal3: false,
        showModal8: false,
        showModal10: false,
        showModal66: false,
        showModal22: false

    };
    handleToggleModal22 = () => this.setState({ showModal22: !this.state.showModal22 });
    handleToggleModal10 = () => this.setState({ showModal10: !this.state.showModal10 });
    sens() {
        const url = this.props.match.params.url
        fetch('https://api.mydars.uz/api/rate_teacher_lesson/', {
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

                "total_rate": this.state.rating,
                "teacher_lesson_id": url


            })

        }
        )

            .then(res => res.json())

            .then((data) => {
                console.log(data)

                if (data.rate == "success") {
                    window.location.replace("/profile");
                }



            }
            )
    }

    sens0() {
        const url = this.props.match.params.url
        console.log("gfdl;kgjdf;lgdf;lkg;ldfg;ldfk")
        fetch('https://api.mydars.uz/api/rate_teacher_lesson/', {
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

                "teacher_lesson_id": url,
                "rate_by_quality": this.state.rating1,
                "rate_by_teacher_student_attitude": this.state.rating2,
                "rate_by_teacher_audio_video": this.state.rating3,
                "rate_by_teacher_start_lesson": this.state.rating4,
                "rate_by_teacher_get_material": this.state.rating5,

            })

        }
        )

            .then(res => res.json())

            .then((data) => {
                console.log(data)



                if (data.rate == "success") {
                    window.location.replace("/profile");
                }


            }
            )
    }

    componentDidMount() {
        const url = this.props.match.params



        console.log(url)
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
                console.log(data)


                this.setState({
                    lang: data.translates,
                    langLoad: true,
                })

            }
            )



        setInterval(() => {

            if (this.state.not == false) {



                fetch('https://api.mydars.uz/api/get_all_notification/', {
                    method: 'POST',


                    headers: {
                        // 'auth': 'ef899a6d-29d6-4130-8b59-3d95dfbcc9bd',
                        // 'lang': 'uz',
                        // "Content-Type": "multipart/form-data",
                        'auth': "ef899a6d-29d6-4130-8b59-3d95dfbcc9bd",
                        // 'lang': "uz",
                        'token': localStorage.getItem('token')
                    },
                    body: JSON.stringify({
                        "page": 1

                    })

                })

                    .then(res => res.json())

                    .then((data) => {
                        console.log(data)
                        if (data.error) {

                        } else {
                            for (var i = 0; i < data.notification_list.length; i++) {
                                if (data.notification_list[i].teacher_lesson_id == url) {
                                    if (data.notification_list[i].is_rate == true) {
                                        this.setState(() => ({
                                            not: true,
                                        }));
                                    }
                                }
                            }
                        }


                        // console.log(data)
                    }
                    )






            } else {

            }

            var CurrentDate = moment().unix();
            console.log(CurrentDate)
            this.setState(() => ({
                today: CurrentDate,


            }));



            // console.log("fgdg")
        }, 1000);



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

            .then((data1) => {


                if (data1.profile.is_user == false) {

                    fetch('https://api.mydars.uz/api/group/get_paid_group/?page=1', {
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


                            console.log(data)
                            for (var i = 0; i < data.orders_group.length; i++) {
                                console.log(data.orders_group[i])
                                if (data.orders_group[i].id == url.gr) {

                                    for (var k = 0; k < data.orders_group[i].lessons_list.length; k++) {
console.log(data.orders_group[i].lessons_list[k].teacher_lesson_id)
                                        if (data.orders_group[i].lessons_list[k].teacher_lesson_id == url.te) {
                                            this.setState({
                                                time: data.orders_group[i].lessons_list[k].lesson_end_timestamp,
                                                is_user: data1.profile.is_user,
                                                bob: data.orders_group[i].lessons_list[k].lesson_url_teacher,
                                                isLoaded: true,
                                            })
                                        }
                                    }


                                }


                            }



                        }
                        )






                } else {

                    fetch('https://api.mydars.uz/api/group/get_paid_group/?page=1', {
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
                            console.log(data)

                            console.log(data)

                            for (var i = 0; i < data.orders_group.length; i++) {
                               console.log(data.orders_group[i].id)
                               console.log(url.gr)
                                if (data.orders_group[i].teacher_group_id == url.gr) {
                                    console.log("999999999")
                                    for (var k = 0; k < data.orders_group[i].lessons_list.length; k++) {
                                        
                                        if (data.orders_group[i].lessons_list[k].teacher_lesson_id == url.te) {
                                            
                                            this.setState({
                                                time: data.orders_group[i].lessons_list[k].lesson_end_timestamp,
                                                is_user: data1.profile.is_user,
                                                bob: data.orders_group[i].lessons_list[k].lesson_url_student,
                                                isLoaded: true,
                                            })
                                        }
                                    }


                                }


                            }


          


                        }
                        )






                }

            })




    }
    close() {
        const url = this.props.match.params.url
        console.log(url)
        fetch('https://api.mydars.uz/api/notification/request_rate_notification/', {
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
                "teacher_lesson_id": url
            })

        })


            .then(res => res.json())

            .then((data) => {
                console.log(data)
                if (data.notification) {
                    NotificationManager.success('Запрос на оценку урока', 'Успешно отправлено');
                }
            })
    }
    hideSpinner = (e) => {
        console.log(e.target.src)
        console.log("fds;fkds;lkfl;sdkf;lsdkf;lsd;lf")
        this.setState({
            myLoaded: true
        });
    };

    onStarClick(nextValue, prevValue, name) {
        this.setState({ rating: nextValue });
    }




    onStarClick1(nextValue, prevValue, name) {
        this.setState({ rating1: nextValue });
    }


    onStarClick2(nextValue, prevValue, name) {
        this.setState({ rating2: nextValue });
    }


    onStarClick3(nextValue, prevValue, name) {
        this.setState({ rating3: nextValue });
    }


    onStarClick4(nextValue, prevValue, name) {
        this.setState({ rating4: nextValue });
    }


    onStarClick5(nextValue, prevValue, name) {
        this.setState({ rating5: nextValue });
    }
    render() {
        const { isLoaded, langLoad } = this.state
        if (!isLoaded || !langLoad) {
            return (
                <p></p>
            )
        } else {

            return (

                <div>

                    <NotificationContainer />
                    {this.state.showModal22 && <div onClick={this.handleToggleModal22} className="baccccccc">


                    </div>

                    }
                    {this.state.showModal10 && <div onClick={this.handleToggleModal10} className="baccccccc">


                    </div>

                    }

                    <div>
                        {this.state.showModal22 && <div className=" chat_main00 chat_main null_feeds add_pop_matcheser">

                            <div className={"gr_top_chat_btns"}>




                            </div>  </div>
                        }
                    </div>




                    {(() => {

                        if (this.state.rating <= 3) {
                            return (
                                <div>
                                    {this.state.showModal10 && <div className=" chat_main00 chat_main null_feeds">

                                        <div className={"gr_top_chat_btns"}>


                                            <div className={"chat_tittle new_semms noti_mol_notifications"}>{this.state.lang.NotifeTextMaonm.text}</div>
                                            <Link>
                                                <div className={"ext_modal chat_tittle_exit notifersikx"} onClick={this.handleToggleModal10}>x</div>
                                            </Link>




                                            {(() => {
                                                if (this.state.rating <= 3) {
                                                    return (
                                                        <div>
                                                            <p>{this.state.lang.ratinn222433.text}</p>
                                                            <StarRatingComponent
                                                                name="rate1"
                                                                onStarClick={this.onStarClick1.bind(this)}
                                                                starCount={5}
                                                                value={this.state.rating1}

                                                            />
                                                            <p>{this.state.lang.OtsnoshRatings.text} </p>
                                                            <StarRatingComponent
                                                                name="rate1"
                                                                onStarClick={this.onStarClick2.bind(this)}
                                                                starCount={5}
                                                                value={this.state.rating2}

                                                            />
                                                            <p>{this.state.lang.ratingKasche22.text}</p>
                                                            <StarRatingComponent
                                                                name="rate1"
                                                                onStarClick={this.onStarClick3.bind(this)}
                                                                starCount={5}
                                                                value={this.state.rating3}

                                                            />
                                                            <p>{this.state.lang.Punktuanlsuns.text}</p>
                                                            <StarRatingComponent
                                                                name="rate1"
                                                                onStarClick={this.onStarClick4.bind(this)}
                                                                starCount={5}
                                                                value={this.state.rating4}

                                                            />
                                                            <p>{this.state.lang.KAchePodachMaterial.text}</p>
                                                            <StarRatingComponent
                                                                name="rate1"
                                                                onStarClick={this.onStarClick5.bind(this)}
                                                                starCount={5}
                                                                value={this.state.rating5}

                                                            />


                                                            {(() => {

                                                                if (this.state.rating1 == 0 || this.state.rating2 == 0 || this.state.rating3 == 0 || this.state.rating4 == 0 || this.state.rating5 == 0) {
                                                                    return (

                                                                        <div className={"dis_ppopp"}>

                                                                            <Link className={"send_feed_null"} onClick={""}> {this.state.lang.sSendmessagese.text}</Link>


                                                                        </div>
                                                                    )
                                                                } else {
                                                                    return (
                                                                        <div className={"dis_ppopp"}><Link className={"send_feed_null1"} onClick={this.sens0}>{this.state.lang.sSendmessagese.text}</Link></div>
                                                                    )
                                                                }
                                                            })()}
                                                        </div>
                                                    )
                                                }


                                            })()}


                                        </div>


                                    </div>


                                    }


                                </div>
                            )
                        } else {
                            return (
                                <div>
                                    {this.state.showModal10 && <div className=" chat_main00 chat_main">

                                        <div className={"gr_top_chat_btns"}>


                                            <div className={"chat_tittle new_semms noti_mol_notifications"}>{this.state.lang.NotifeTextMaonm.text}	</div>
                                            <Link>           <div className={"ext_modal chat_tittle_exit notifersikx"} onClick={this.handleToggleModal10}>x</div></Link>

                                            {this.state.lang.Ocenokuryujk.text}

                                            {this.state.lang.kakyprosheluryuk.text}



                                            <div >
                                                <StarRatingComponent
                                                    name="rate1"
                                                    onStarClick={this.onStarClick.bind(this)}
                                                    starCount={5}
                                                    value={this.state.rating}

                                                />
                                                <div className={"dis_ppopp"}><Link className={"send_feed_null1"} onClick={this.sens}>{this.state.lang.sSendmessagese.text}</Link></div>
                                            </div>


                                        </div>


                                    </div>


                                    }
                                </div>
                            )
                        }
                    })()}
                    {(() => {
                        console.log(this.state.myLoaded)
                        if (this.state.myLoaded == false) {
                            return (
                                <div>

                                    <div className={"loadlpreload"}>
                                        <ImpulseSpinner className={"preloaders "} size={40} frontColor="#9181F3" backColor={"#9181F3"} />  </div>
                                    <div className={"zaglnow"}>
                                    </div>
                                </div>
                            )
                        } else {
                            return (<div>

                            </div>)
                        }

                    })()}


                    <iframe

                        ref={this.setContentRef}
                        onLoad={this.hideSpinner}
                        sandbox="allow-same-origin || allowFullScreen || allow-top-navigation || allow-forms || allow-scripts" frameborder="0" allow="display-capture; camera; microphone; fullscreen" src={this.state.bob} width="468" height="100%" align="left">

                    </iframe>
                    {console.log(this.state.is_user)}

                    {(() => {
                        if (this.state.is_user == true) {
                            if (this.state.not == false) {
                                return (
                                    <a href={"#"} onClick={this.handleToggleModal10}></a>
                                )
                            } else {
                                return (
                                    <a className={"zaprosik"} href={"#"} onClick={this.handleToggleModal10}>Оценить</a>
                                )
                            }
                            return (
                                <p>ученик</p>
                            )
                        } else {
                            if (this.state.today >= this.state.time - 300) {
                                return (
                                    <p>

                                        {/* {this.state.time} */}
                                        <a className={"zaprosik"} href={"#"} onClick={this.close}>Запрос на оценку урока</a>
                                        {/* <p> {this.state.today}</p> */}
                                    </p>
                                )
                            } else {

                            }

                        }

                    })()}


                </div>
            )
        }
    }
}

export default Gconf;