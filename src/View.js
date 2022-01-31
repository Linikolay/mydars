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

class View extends Component {
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
        this.hand = this.hand.bind(this)
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.mess = this.mess.bind(this);

    }

    hand(obj) {
        console.log(obj)
        this.setState({
            imgsrc: obj.link,
            showModal12: !this.state.showModal12
        })

        // this.setState({showModal: !this.state.showModal})

    }
    mess(obj) {
        console.log(obj)



        const main = { "type": "create_chat", "teacher_id": obj.id }


        // soc.emit('message','{"type":"chat",  "chat_id":40, "message": "435345"} ')

        soc.emit('message', JSON.stringify(main))
        { console.log(this.props) }

        console.log(JSON.stringify(main))

    }
    renderEventContent = (eventInfo) => {
        // console.log("ffffffffffff")
        // console.log(eventInfo)
        const content = (
            <div>

                <p>{eventInfo.event.title}</p>
            </div>
        );
        if (eventInfo.isMirror) {
            // console.log(eventInfo.event.start);
        }
        return (
            <InlineDialog
                onClose={() => {
                    this.setState({ dialogOpen: false });
                }}
                content={content}
                isOpen={this.state.dialogOpen}
            >

                <div tabIndex="6">
                    {/* {console.log(eventInfo.event)} */}
                    {/* fsfsf */}
                    <div>{eventInfo.timeText}</div>
                    {/*<div>{eventInfo.event.extendedProps.issueId}</div>*/}
                    {/*<div>{eventInfo.event.title}</div>*/}
                </div>
            </InlineDialog>
        );
    };

    renderDayReaderContent = (info) => {
        // console.log(info)
        var weekday = new Array(7);
       
        if (localStorage.getItem('lang') == undefined || localStorage.getItem('lang') == "" || localStorage.getItem('lang') == 'ru') {
            weekday[1] = "пн";
            weekday[2] = "вт";
            weekday[3] = "ср";
            weekday[4] = "чт";
            weekday[5] = "пт";
            weekday[6] = "сб";
            weekday[0] = "вс";

        }else{
            weekday[1] = "Du ";
            weekday[2] = "Se ";
            weekday[3] = "Cho ";
            weekday[4] = "Pa ";
            weekday[5] = "Ju ";
            weekday[6] = "Sha";
            weekday[0] = "Yak";
        }
        // console.log(weekday)
        // const dateObject = new Date(new Date(tomorrow).setHours(tomorrow.getHours() + 2 ))
        // console.log(info)
        return (
            <div className={info.isToday ? "day today" : "day"} tabIndex="5">
                {/*{console.log(weekday)}*/}
                <div className={info.isToday ? "day today" : "mmooday"}>{weekday[info.date.getDay()]}, </div>
                <div className={info.isToday ? "day today" : "day-number"}>{info.date.getDate()}</div>
            </div>
        );
    };

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


    handleToggleModal12 = () => this.setState({ showModal12: !this.state.showModal12 });
    handleToggleModal = () => this.setState({ showModal: !this.state.showModal });
    state = {
        showModal: false,
        showModal1: false,
        showModal2: false,
        showModal3: false,
        showModal12: false,

    };

    handleChange(event) {

        this.setState({ bob: event.target.value });
    }

    handleSubmit(event) {
        const ll = {
            "teacher_id": this.state.create.id,
            "feedback": this.state.bob,
        }
        console.log(ll)

        fetch('https://api.mydars.uz/api/create_feedback/', {
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


                "teacher_id": this.state.create.id,
                "feedback": this.state.bob,


            })

        })


            .then(res => res.json())

            .then((data) => {



                this.setState({
                    // isLoaded: true,

                })


            }
            )
        // event.preventDefault();

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

                    {console.log(this.state.create)}
                    {/* <MetaTags>
                        <title>Page 1</title>
                        <meta name="description" content={this.state.create.teacher_description} />
                        <meta property="og:title" content={this.state.create.name + ' ' + this.state.create.surename} />
                        <meta property="og:image" content={this.state.create.avatar_url} />
                    </MetaTags> */}

                    {this.state.showModal12 && <div className="ext_modal_11">
                        <div className={"ext_modal_11"} onClick={this.handleToggleModal12}></div>
                    </div>
                    }
                    {this.state.showModal && <div className="ext_modal_11">
                        <div className={"ext_modal_11"} onClick={this.handleToggleModal}></div>
                    </div>
                    }
                    {this.state.showModal12 && <div className="modal modalcerte">


                        <div className={"ext_modal"} onClick={this.handleToggleModal12}>x</div>

                        {(() => {
                            if (this.state.imgsrc.split('.')[this.state.imgsrc.split('.').length - 1] == "jpg") {
                                return (
                                    <img alt="" className={"pops_main_controllers"} src={this.state.imgsrc} />
                                )
                            } else {
                                return (
                                    <iframe
                                        src={this.state.imgsrc}
                                        frameBorder="0"
                                        scrolling="auto"
                                        height="100%"
                                        className={"frameses"}
                                        width="100%"
                                    ></iframe>
                                )
                            }

                        })()}

                        {/* <p className={"feed_tt"}>Написатьfdf отзыв</p> */}



                    </div>}
                    {this.state.showModal && <div className="modal modalfeedes">


                        <div className={"ext_modal"} onClick={this.handleToggleModal}>x</div>

                        <img alt="" src={this.state.imgsrc} />
                        <p className={"feed_tt"}>{this.state.lang.otzivnew.text}</p>

                        <form onSubmit={this.handleSubmit}>

                            <textarea className={"text_feed"} placeholder={"Введите ваш отзыв:"}
                                onChange={this.handleChange} rows="10" cols="45" name="text"></textarea>
                            <Link>
                                <input className={"send_feed"} type="submit" value={this.state.lang.next.text} /></Link>
                        </form>


                    </div>}
                    <div className={"container boll_default"}>
                        <div className={"row"}>

                            <div className={"view_custom col-lg-8 col-md-12 col-sm-12 col-12 "}>
                                {(() => {
                                    if (this.state.create.video.length == 0) {
                                        return (
                                            <img alt="" className={"player_sss"} src={player} />
                                        )
                                    } else {
                                        return (
                                            <video className={"player_sss"} controls>
                                                <source src={this.state.create.video[0].video_url} type="video/mp4" />


                                            </video>

                                        )
                                    }

                                })()}
                                {/* <img alt="" className={"player_sss"} src={player}/> */}


                                <div className={"desck_post  "}>
                                    <div className={"rep_cart   col-lg-2 col-md-3 col-sm-3 col-12 "}>
                                        <div className={"left_block_main_teacher"}>
                                            <img alt="" className={"prof_ics"} src={this.state.create.avatar_url}>

                                            </img>
                                            {/* <img alt="" className={"lang_ico_teacher"} src={lang_ico}/> */}

                                        </div>



                                        <div className={"rat_teach_left_block_main"}>
                                            {/* {cont.profile_rating} */}
                                            <img alt="" src={reting_ico} />
                                            <span className={"retin_numb009"}>{(this.state.create.profile_rating.toFixed(1))}</span>

                                        </div>
                                    </div>
                                    <div className={"rep_cart1 col-lg-10 col-md-9 col-sm-9 col-12"}>
                                        <div className={"lopon"}>
                                            <p className={"name_teachers_main"}>{this.state.create.name} {this.state.create.surename}</p>
                                            <img alt=""
                                                className={"check_img_teacher_main"} src={checked_profile_ico} />
                                            {(() => {
                                                if (this.state.create.teacher_lessons.length == 0) {
                                                    return (
                                                        <p></p>
                                                    )
                                                } else {
                                                    return (
                                                        <p className={"cents_main_titile"}>{this.state.create.teacher_lessons[0].lesson_amount.toLocaleString()} {this.state.lang.summ.text}/{this.state.lang.urok.text}</p>
                                                    )
                                                }


                                            })()}


                                        </div>

                                        <div className={"lopon"}>
                                            <div className={"class_teach_seconds_ttil"}>
                                                <p className={"tittle_top_main_detail_moon "}>{this.state.lang.RODNOYYAS.text}</p>

                                                {this.state.create.languages.map((data, idx) => (


                                                    <span>
                                                        {(() => {

                                                            if (data.language_level_name == "Свободное владение") {

                                                                return (
                                                                    <p className={"pomo0897987"}>{data.language}</p>
                                                                )
                                                            }
                                                        })()}

                                                    </span>

                                                ))}
                                                {/*<p className={"class_teach_seconds_ttil_bots"}>Португальский</p>*/}
                                            </div>

                                            <div className={"class_teach_seconds_ttil"}>
                                                <p className={"tittle_top_main_detail_moon"}>{this.state.lang.UCHENIK.text}</p>
                                                <p>{this.state.create.student_count}</p>
                                            </div>

                                            <div className={"class_teach_seconds_ttil"}>
                                                <p className={"tittle_top_main_detail_moon"}>{this.state.lang.PREPODAET.text}</p>


                                                {(() => {
                                                    if (this.state.create.teacher_lessons.length == 0) {
                                                        return (
                                                            <p></p>
                                                        )
                                                    } else {
                                                        return (
                                                            <p>


                                                                {this.state.create.teacher_lessons.map((data3, idx) => (
                                                                    <p className="left_patricit">
                                                                        {data3.name}</p>
                                                                ))}
                                                            </p>
                                                        )
                                                    }


                                                })()}

                                            </div>

                                        </div>



                                        <div className={"description_text_main_card"}
                                            dangerouslySetInnerHTML={{ __html: this.state.create.teacher_description }} />
                                        <div className={"btn_group_card"}>


                                            {/* <div className={"trial_btns"}>
                                               
                                                <p className={"trial_btns001"}>dsf{this.state.lang.testLessonswee.text}</p>
                                                <img alt="" className={""} src={""}/>
                                           
                                            </div> */}
                                            {(() => {
                                                if (this.state.create.teacher_lessons.length == 0) {
                                                    return (
                                                        <p></p>
                                                    )
                                                } else {
                                                    return (
                                                        <Link to={"/newtime/" + this.state.create.teacher_lessons[0].id + "/" + this.state.create.id} className={"trial_btns"}>

                                                            <p className={"trial_btns001"}>{this.state.lang.testLessonswee.text}</p>
                                                            <img alt="" className={""} src={""} />

                                                        </Link>
                                                        //     <Link className={"trial_btns"}
                                                        //     to={"/newtime/" + this.state.create.teacher_lessons[0].id + "/" + this.state.create.id}>


                                                        //     <div className={"trial_btns001"}>{this.state.lang.zabronirovat.text} <img alt=""
                                                        //         src={bron}></img>
                                                        //     </div>
                                                        // </Link>


                                                    )
                                                }


                                            })()}

                                            <Link onClick={() =>
                                                this.mess({
                                                    id: this.state.create.id,

                                                })}>
                                                <div className={"  manaks"}>

                                                    <p className={"trial_btns001 trial_btns004"}>{this.state.lang.svyazatsqw.text}</p>
                                                    <img alt="" className={" "} src={ico_msg} />

                                                </div></Link>
                                            {/* <div className={"trial_btns  trial_btns009"}>
                                                <p className={"trial_btns001"}>Пробный урок</p>
                                                <img alt="" className={"trial_btns002"} src={next_ico_main}/>

                                            </div> */}


                                        </div>


                                    </div>

                                </div>
                                <div className={"main_lin"}></div>
                                <div className={"main_view_profile"}>
                                    <p></p>{this.state.lang.obomne.text}
                                    <div dangerouslySetInnerHTML={{ __html: this.state.create.teacher_description }} />
                                    <p></p>
                                </div>

                                <div className={"main_lin1"}></div>
                                <div className={" "}>
                                    <div className={""}>
                                        <div className={"first_reg col-lg-12 col-md-12 col-sm-12 col-12 "}>

                                            <div className={"row"}>
                                                <div
                                                    className={"first_reg main_lopo2222 col-lg-4 col-md-4 col-sm-4 col-12 "}>
                                                    <p className={"tittle_top_main_detail_moon"}>{this.state.lang.OPITRABOTAS.text}</p>


                                                    {this.state.create.teacher_education.map((data, idx) => (

                                                        <div>
                                                            <div className={""}>
                                                                {data.education_year}

                                                            </div>
                                                            <div className={""}>
                                                                {data.education}

                                                            </div>

                                                            <div className={"pppppppppppppp"}></div>
                                                        </div>
                                                    ))}

                                                </div>

                                                <div
                                                    className={"first_reg main_lopo2222 col-lg-4 col-md-4 col-sm-4 col-12 "}>
                                                    <p className={"tittle_top_main_detail_moon"}>{this.state.lang.OBRAZOVANIE.text}</p>
                                                    {this.state.create.teacher_experience.map((data, idx) => (

                                                        <div>
                                                            <div className={""}>
                                                                {data.work_experience_year}

                                                            </div>
                                                            <div className={""}>
                                                                {data.work_experience}

                                                            </div>

                                                            <div className={"pppppppppppppp"}></div>
                                                        </div>
                                                    ))}


                                                </div>

                                                <div
                                                    className={"first_reg main_lopo2222 col-lg-4 col-md-4 col-sm-4 col-12 "}>
                                                    <p className={"tittle_top_main_detail_moon"}>{this.state.lang.SERIFICATES.text}</p>


                                                    {this.state.create.certificates.map((data2, idx) => (

                                                        <div>
                                                            <div

                                                                onClick={() => {

                                                                    this.hand({
                                                                        link: data2.certificate_url

                                                                    }
                                                                    );

                                                                }}

                                                                className={""}>
                                                                <img alt="" src={script} /> {data2.certificate_name}

                                                            </div>


                                                        </div>
                                                    ))}


                                                </div>

                                            </div>


                                        </div>
                                    </div>
                                </div>


                                <div className={"whta_hist"}>

                                    <div className="demo-app-calendar col-lg-6 col-md-6">

                                        {/*{console.log(this.state.tt)}*/}


                                        <CalendarStyle>

                                            {/* <FullCalendar
                                                        ref={this.state.calendar}
                                                        select={this.handleDateSelect}
                                                        plugins={[timeGridPlugin, interactionPlugin, dayGridPlugin]}

                                                        initialDate={today}
                                                        scrollTime={today.getHours() + ":00"}
                                       
                                                        events=


                                                            {


                                                                this.state.create.teacher_scheduller.map(data => (


                                                                    {
                                                                        groupId: 'availableForMeeting',
                                                                        display: 'background',
                                                                        start: moment(data.start_at * 1000).format(),
                                                                        end: moment(data.end_till * 1000).format(),
                                                                        backgroundColor: "rgb(195 194 194)",
                                                                    }

                                                                ))


                                                            }


                                                        locale={esLocale}
                                                        eventDragStart={(arg) => {

                                                        }}

                                                        // dateClick={this.handleDateClick}
                                                        startEditable={false}
                                                        durationEditable={false}
                                                        resourceEditable={false}
                                                        editable={false}
                                                        selectable={false}
                                                        selectMirror={false}
                                                        eventContent={this.renderEventContent}
                                                        dayHeaderContent={this.renderDayReaderContent}
                                                        // eventClick={(args) => {
                                                        //     this.setState({dialogOpen: true});
                                                        // }}
                                                        eventClick={
                                                            this.handleDateClick
                                                        }


                                                        allDaySlot={false}
                                                        slotDuration="00:15:00"
                                                        eventTimeFormat={dateFormat}
                                                        slotLabelFormat={dateFormat}
                                                        slotLabelClassNames={"calendar-hour"}
                                                        eventOverlap={(stillEvent, movingEvent) => {
                                                            return stillEvent.groupId == movingEvent.groupId;
                                                        }}
                                                    /> */}


                                        </CalendarStyle>
                                    </div>


                                </div>

                                {(() => {

                                    if (this.state.feed.feedbacks.length == 0) {
                                        return (
                                            <div className={"whta_hist"}>

                                                <div className={"row row_line_sty"}>


                                                    <div className={"pop_main_stors"}>
                                                        <p className={"pop_main_stors0"}>{this.state.lang.otzivi.text} </p>
                                                        {(() => {

                                                            if (this.state.create.available_to_feedback == true) {
                                                                return (
                                                                    <p onClick={this.handleToggleModal}
                                                                        className={"pop_main_stors1"}>{this.state.lang.otzivnew.text}<img alt=""
                                                                            src={addfeed} /></p>
                                                                )
                                                            } else {

                                                            }
                                                        })()}


                                                    </div>
                                                    <div className={" "}>
                                                        {this.state.feed.feedbacks.map((data, idx) => (

                                                            <div className={"block_whats_feeds"}>
                                                                <img alt="" src={data.student__avatar_url} />
                                                                <p className={"bl_tittle_main_what1"}>{data.timestamp}</p>
                                                                <p className={"bl_tittle_main_what1"}>{data.student__name}</p>
                                                                <p className={"bl_tittle_main_what2"}>
                                                                    {data.student_feedback}</p>

                                                            </div>

                                                        ))}





                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    } else {
                                        return (
                                            <div className={"whta_hist"}>

                                                <div className={"row row_line_sty"}>


                                                    <div className={"pop_main_stors"}>
                                                        <p className={"pop_main_stors0"}>{this.state.lang.otzivi.text} </p>
                                                        {/* {console.log(this.state.create)} */}
                                                        {(() => {

                                                            if (this.state.create.available_to_feedback == true) {
                                                                return (
                                                                    <p onClick={this.handleToggleModal}
                                                                        className={"pop_main_stors1"}>{this.state.lang.otzivnew.text}<img alt=""
                                                                            src={addfeed} /></p>
                                                                )
                                                            } else {

                                                            }
                                                        })()}




                                                    </div>
                                                    <div className={" "}>
                                                        {this.state.feed.feedbacks.map((data, idx) => (

                                                            <div className={"block_whats_feeds"}>
                                                                <img alt="" className={"feeds_avatars_main_pop"} src={data.student__avatar_url} />
                                                                <div className={"bl_text_ffaad"}>
                                                                    <p className={"bl_tittle_main_what1"}>{moment(data.timestamp * 1000).format('LL')}</p>
                                                                    <p className={"bl_tittle_main_what1 bl_tittle_main_what5"}>{data.student__name}</p>
                                                                </div>
                                                                <p className={"bl_tittle_main_what2"}>
                                                                    {data.student_feedback}</p>

                                                            </div>

                                                        ))}





                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                })()}


                            </div>

                            {(() => {


                                if (this.state.date.profile == undefined) {
                                    return (
                                        <div className={"pdddddd col-lg-4 col-md-12 col-sm-12 col-12 "}>
                                            <div className={"right_add_reps_right"}>


                                                {(() => {
                                                    if (this.state.create.teacher_lessons.length == 0) {
                                                        return (
                                                            <p></p>
                                                        )
                                                    } else {
                                                        return (
                                                            <p className={"right_add_reps"}>{this.state.create.teacher_lessons[0].lesson_duration} {this.state.lang.min12321.text}
                                                            </p>
                                                        )
                                                    }


                                                })()}

                                                <div className={"right_add_reps_right1"}>
                                                {console.log(this.state.create)}
                                                    <p className={"right_add_reps1 momo0009"}>{this.state.lang.testLessonswee.text}</p>

                                                    {(() => {
                                                        if (this.state.create.teacher_lessons.length == 0) {
                                                            return (
                                                                <p></p>
                                                            )
                                                        } else {
                                                            return (
                                                                <p className={"right_add_reps2 momo00090"}>{this.state.create.teacher_lessons[0].lesson_amount.toLocaleString()} {this.state.lang.summ.text}</p>


                                                            )
                                                        }


                                                    })()}



                                                </div>
                                                <p className={"right_add_reps3"}>{this.state.lang.vospuluytestloo97766222.text}</p>


                                                <Link onClick={

                                                    sessionStorage.setItem('link', "/newtime/" + this.state.create.teacher_lessons[0].id + "/" + this.state.create.id)
                                                } to={"/reg/"}>

                                                    <div className={"right_add_reps4 momo00091"}>{this.state.lang.zabronirovat.text} <img alt=""
                                                        src={bron}></img>
                                                    </div>

                                                </Link>

                                            </div>




                                            <div className={"right_add_reps_right_002"}>

                                            </div>
                                        </div>
                                    )
                                } else if (this.state.date.profile.is_user == false) {
                                    return (
                                        <p></p>
                                    )
                                } else if (this.state.date.profile.is_user == true) {
                                    return (

                                        <div className={"pdddddd col-lg-4 col-md-12 col-sm-12 col-12 "}>
                                            <div className={"right_add_reps_right"}>

                                                {(() => {
                                                    if (this.state.create.teacher_lessons.length == 0) {
                                                        return (
                                                            <p></p>
                                                        )
                                                    } else {
                                                        return (
                                                            <p className={"right_add_reps"}>{this.state.create.teacher_lessons[0].lesson_duration} {this.state.lang.min0888.text}</p>

                                                        )
                                                    }


                                                })()}






                                                <div className={"right_add_reps_right1"}>
                                                    <p className={"right_add_reps1"}>{this.state.lang.testLessonswee.text}</p>
{console.log(this.state.create)}
                                                    {(() => {
                                                        if (this.state.create.teacher_lessons.length == 0) {
                                                            return (
                                                                <p></p>
                                                            )
                                                        } else {
                                                            return (
                                                                <p className={"right_add_reps2"}>{this.state.create.teacher_lessons[0].lesson_amount.toLocaleString()} сум</p>



                                                            )
                                                        }


                                                    })()}



                                                </div>
                                                <p className={"right_add_reps3"}>{this.state.lang.vospuluytestloo97766222.text}</p>


                                                {(() => {
                                                    if (this.state.create.teacher_lessons.length == 0) {
                                                        return (
                                                            <p></p>
                                                        )
                                                    } else {
                                                        return (
                                                            <Link
                                                                to={"/newtime/" + this.state.create.teacher_lessons[0].id + "/" + this.state.create.id}>


                                                                <div className={"right_add_reps4"}>{this.state.lang.zabronirovat.text} <img alt=""
                                                                    src={bron}></img>
                                                                </div>
                                                            </Link>


                                                        )
                                                    }


                                                })()}







                                            </div>

                                            {(() => {
                                                if(this.state.create.teacher_group.length == 0){

                                                }else{
                                                    return(
                                                        
                                           
                                            <div className={"right_add_reps_right"}>








                                            {(() => {
                                                    if (this.state.create.teacher_group.length == 0) {
                                                        return (
                                                            <p></p>
                                                        )
                                                    } else {
                                                        return (
                                                            <p className={"right_add_reps"}>{this.state.create.teacher_group[0].max_lesson_duration} {this.state.lang.min0888.text}</p>

                                                        )
                                                    }


                                                })()}






                                                <div className={"right_add_reps_right1"}>
                                                    <p className={"right_add_reps1"}>Групповые занятия</p>
{console.log(this.state.create)}
                                                    {(() => {
                                                        if (this.state.create.teacher_group.length == 0) {
                                                            return (
                                                                <p></p>
                                                            )
                                                        } else {
                                                            return (
                                                                <p className={"right_add_reps2"}>{this.state.create.teacher_group[0].group_total_cost.toLocaleString()} сум</p>



                                                            )
                                                        }


                                                    })()}



                                                </div>
                                                <p className={"right_add_reps3"}>{this.state.lang.vospuluytestloo97766222.text}</p>


                                                {(() => {
                                                    if (this.state.create.teacher_group.length == 0) {
                                                        return (
                                                            <p></p>
                                                        )
                                                    } else {
                                                        return (
                                                            <Link
                                                                to={"/groups/" + this.state.create.id}>


                                                                <div className={"right_add_reps4"}>{this.state.lang.zabronirovat.text} <img alt=""
                                                                    src={bron}></img>
                                                                </div>
                                                            </Link>


                                                        )
                                                    }


                                                })()}





                                            </div>
                                       
                                       )
                                    }
})()}
                                       </div>
                                    )
                                }
                            })()}


                        </div>
                    </div>
                </div>
            )

        }
    }
}

export default View;