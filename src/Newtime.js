import React, { Component } from "react";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { CalendarStyle } from "./Styled";
import { ImpulseSpinner } from "react-spinners-kit";
import dayGridPlugin from "@fullcalendar/daygrid";
import InlineDialog from "@atlaskit/inline-dialog";
import esLocale from "@fullcalendar/core/locales/ru";
import 'react-notifications/lib/notifications.css';
import moment from 'moment'
import { Link } from 'react-router-dom';
import { NotificationContainer, NotificationManager } from 'react-notifications';


const today = new Date();
today.setMinutes(0);
const yday = new Date(today);
const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);
yday.setDate(today.getDate() - 1);

// interface
// State
// {
//     dialogOpen: boolean;
//     calendar: any;
// }
const dateFormat = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    meridiem: false
};
export default class Newtime extends Component<{}, State> {
    calendarRef = React.createRef()
    constructor(props) {
        super(props)
        this.state = {
            no: false,
            les: "",
            yes: true,
            remo: "undefined",
            lang: "",
            langLoad: false,
            loadCalendar: false,
            vs: true,
            today: 0,
            myorders: "",
        }
        this.yes = this.yes.bind(this);
        this.no = this.no.bind(this);

        this.next1 = this.next1.bind(this);

        this.back1 = this.back1.bind(this);
    }



    state = {
        dialogOpen: false,
        calendar: React.createRef(),
        create: "",
        isLoaded: false,

        tt: [],
        test: "",
        order: "",
        main: "",
        tech: "",
        newline: "",




        timeFormat: {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
            second: '2-digit',

            meridiem: false,
            omitZeroMinute: false
        }

    };


    back1() {
        const main = this.props.match.params
        this.setState({
            loadCalendar: false
        })
        let calendarApi = this.calendarRef.current.getApi()
        calendarApi.prev()

        const start = moment().add(this.state.today - 7, 'days').startOf('week').format();
        const end = moment().add(this.state.today - 7, 'days').endOf('week').format();
      

        const test = Date.parse(start)
        const test1 = Date.parse(end)
        console.log(test)
        console.log(test1 / 1000 - 1799)

        fetch('https://api.mydars.uz/api/registration/teacher_timeline/', {
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
                "time_period": {
                    "start_at": test / 1000,
                    "end_till": test1 / 1000 - 1799,

                },
                "teacher_id": main.url
            })

        })


            .then(res => res.json())

            .then((data) => {
                console.log(data)
                this.setState({
                    newline: data,

                    loadCalendar: true,
                    create: data,
                    today: this.state.today - 7
                })
            })

    }
    next1() {
        const main = this.props.match.params
        this.setState({
            loadCalendar: false
        })
        let calendarApi = this.calendarRef.current.getApi()
        console.log(main)

        const start = moment().add(this.state.today + 7, 'days').startOf('week').format();
        const end = moment().add(this.state.today + 7, 'days').endOf('week').format();
       

        const test = Date.parse(start)
        const test1 = Date.parse(end)
        console.log(test)
        console.log(test1 / 1000 - 1799)
        fetch('https://api.mydars.uz/api/registration/teacher_timeline/', {
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
                "time_period": {
                    "start_at": test / 1000,
                    "end_till": test1 / 1000 - 1799,

                },
                "teacher_id": main.url
            })

        })


            .then(res => res.json())

            .then((data) => {
                console.log(data)
                if (data.teacher_scheduller.length > 0) {
                    this.setState({
                        loadCalendar: true,
                        today: this.state.today + 7,
                        newline: data,
                        create: data,

                    })
                    calendarApi.next()
                }


            })


    }

    toggleDialog = () => this.setState({ dialogOpen: !this.state.dialogOpen });

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
        console.log(info.date)
        return (
            <div className={info.isToday ? "day today" : "day"} tabIndex="5">
                {/*{console.log(weekday)}*/}
                <div className={info.isToday ? "day today" : "mmooday"}>{weekday[info.date.getDay()]}, </div>
                <div className={info.isToday ? "day today" : "day-number"}>{info.date.getDate()} {moment(info.date).format('MMM')}
                </div>
            </div>
        );
    };
    renderDayReaderContent65 = (info) => {
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
        console.log(info.date)
        return (
            <div className={info.isToday ? "day today" : "day"} tabIndex="5">
                {/*{console.log(weekday)}*/}
                <div className={info.isToday ? "day today" : "mmooday"}>{weekday[info.date.getDay()]} </div>
                {/* <div className={info.isToday ? "day today" : "day-number"}>{info.date.getDate()} 
                </div> */}
            </div>
        );
    };
    // renderEventContent = (eventInfo) => {
    //     // console.log("ffffffffffff")
    //     // console.log(eventInfo)
    //     const content = (
    //         <div>

    //             <p>{eventInfo.event.title}</p>
    //         </div>
    //     );
    //     if (eventInfo.isMirror) {
    //         // console.log(eventInfo.event.start);
    //     }
    //     return (
    //         <InlineDialog
    //             onClose={() => {
    //                 this.setState({ dialogOpen: false });
    //             }}
    //             content={content}
    //             isOpen={this.state.dialogOpen}
    //         >

    //             <div tabIndex="6">
    //                 {/* {console.log(eventInfo.event)} */}
    //                 {/* fsfsf */}
    //                 <div>{eventInfo.timeText}</div>
    //                 {/*<div>{eventInfo.event.extendedProps.issueId}</div>*/}
    //                 {/*<div>{eventInfo.event.title}</div>*/}
    //             </div>
    //         </InlineDialog>
    //     );
    // };

    renderEventContent = (eventInfo) => {

        const content = (
            <div>
                <p>{eventInfo.event.title}</p>
            </div>
        );
        if (eventInfo.isMirror) {
            // console.log(eventInfo.event.start);
        }
        console.log(eventInfo)

        if (eventInfo.event._def.extendedProps.is_active == true && eventInfo.event._def.extendedProps.redy_to_lesson == true) {
            return (
                <InlineDialog
                    onClose={() => {
                        this.setState({ dialogOpen: false });
                    }}
                    content={content}
                    isOpen={this.state.dialogOpen}
                >
                    <div tabIndex="6">
                        {/* {console.log(eventInfo)}  */}

                        {/* <img alt="" className="avatar_cald" src={eventInfo.event._def.extendedProps.timetextnew}></img> */}
                        <div className={"event_text_types 222"}> {moment(eventInfo.event._def.extendedProps.timetextnew).format('LT')}

                        </div>
                        {/* {console.log(eventInfo.event._def.extendedProps.timetextnew)} */}
                        {/* <div>{eventInfo.event.extendedProps.issueId}</div>
                            <div>{eventInfo.event.title}</div>
                            <div>{eventInfo.event._def.extendedProps.student__name}</div> */}
                    </div>
                </InlineDialog>
            );
        } else if (eventInfo.event._def.extendedProps.is_active == null || eventInfo.event._def.extendedProps.is_active == false) {
            // console.log("fdsfjlksdjflksdjfljdslkfj")
            return (
                <InlineDialog
                    onClose={() => {
                        this.setState({ dialogOpen: false });
                    }}
                    content={content}
                    isOpen={this.state.dialogOpen}
                >
                    <div tabIndex="6">
                        {/* {console.log(eventInfo)}  */}

                        {/* <img alt="" className="avatar_cald" src={eventInfo.event._def.extendedProps.timetextnew}></img> */}
                        <div className={"dsfjsklgjsdlk"}>{moment(eventInfo.event._def.extendedProps.timetextnew).format('LT')}</div>
                        {/* <div>{eventInfo.event.extendedProps.issueId}</div>
                            <div>{eventInfo.event.title}</div>
                            <div>{eventInfo.event._def.extendedProps.student__name}</div> */}
                    </div>
                </InlineDialog>
            );
        } else if (eventInfo.event._def.extendedProps.is_active == true && eventInfo.event._def.extendedProps.redy_to_lesson == false) {
            // console.log("fdsfjlksdjflksdjfljdslkfj")
            return (
                <InlineDialog
                    onClose={() => {
                        this.setState({ dialogOpen: false });
                    }}
                    content={content}
                    isOpen={this.state.dialogOpen}
                >
                    <div tabIndex="6">
                        {/* {console.log(eventInfo)}  */}

                        {/* <img alt="" className="avatar_cald" src={eventInfo.event._def.extendedProps.timetextnew}></img> */}
                        <div className={"dsfjsklgjsdlk"}>{moment(eventInfo.event._def.extendedProps.timetextnew).format('LT')}</div>
                        {/* <div>{eventInfo.event.extendedProps.issueId}</div>
                            <div>{eventInfo.event.title}</div>
                            <div>{eventInfo.event._def.extendedProps.student__name}</div> */}
                    </div>
                </InlineDialog>
            );
        } else if (eventInfo.event._def.extendedProps.is_active == true && eventInfo.event._def.extendedProps.redy_to_lesson == false && eventInfo.event._def.extendedProps.lesson_is_paid == true) {
            // console.log("fdsfjlksdjflksdjfljdslkfj")
            return (
                <InlineDialog
                    onClose={() => {
                        this.setState({ dialogOpen: false });
                    }}
                    content={content}
                    isOpen={this.state.dialogOpen}
                >
                    <div tabIndex="6">
                        {/* {console.log(eventInfo)}  */}

                        {/* <img alt="" className="avatar_cald" src={eventInfo.event._def.extendedProps.timetextnew}></img> */}
                        <div className={"dsfjsklgjsdlk"}>{moment(eventInfo.event._def.extendedProps.timetextnew).format('LT')}</div>
                        {/* <div>{eventInfo.event.extendedProps.issueId}</div>
                            <div>{eventInfo.event.title}</div>
                            <div>{eventInfo.event._def.extendedProps.student__name}</div> */}
                    </div>
                </InlineDialog>
            );
        }


    };
    componentDidMount() {

        const main = this.props.match.params
        sessionStorage.removeItem("link")
        console.log(main)
        sessionStorage.setItem("pay", undefined);

        const { history } = this.props;
        history.push("/newtime/" + main.id + "/" + main.url)


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


        fetch('https://api.mydars.uz/api/create_order/', {
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
                "teacher_lesson_id": main.id,
                "teacher_id": main.url,

            })

        })


            .then(res => res.json())

            .then((data) => {
                console.log(data)
                // date_MIN
                // date_MAX
                // if(data.date_MIN>=12 & ){

                // }
                this.setState({
                    myorders: data.order_id
                })
                if (data.demo_lesson_expired == false) {
                    this.setState({
                        no: true,
                        yes: false
                    })
                } else {
                    this.setState({
                        yes: true,
                        no: false
                    })
                }
                console.log(data)

                // this.setState({ tech: "", })
                //                 this.setState({
                //                     loadCalendar: true,
                // newlineLoad: true,
                //                     create: data,
                //                     // tech: ar
                //                 })


            
console.log(data.date_MIN)

                this.setState({
                    loadCalendar: true,
                    newlineLoad: true,
                    create: data.teacher_profile,
                    order: data.order_id,
                    main: data,
                    week: data.teacher_profile,
                    timersss: data,
                    isLoaded: true,
min: data.date_MIN + ':00:00',
max:data.date_MAX + ':00:00'

                })

                // console.log(data)

            }
            )
    }



    handleDateSelect3 = (selectInfo) => {
        let calendarApi = selectInfo.view.calendar;
        // let title = prompt("Please enter a new title for your event");
        calendarApi.unselect(); // clear date selection
        const checkTimeStart = Date.parse(selectInfo.start)
        const checkTimeEnd = Date.parse(selectInfo.end)
        // console.log(test + 1800000 ); // 709
        const test = Date.parse(selectInfo.start)
        const test1 = Date.parse(selectInfo.end)
        const rrr = new Date(test)
        //
        console.log(selectInfo);
        // console.log(test1 - test)
       
        // const dur = this.state.create.profile.teacher_lessons[0].lesson_duration


        // console.log(selectInfo.startStr)

        const lll = {
            "start_at": moment(test).format(),
            "end_till": moment(test + this.state.main.teacher_profile.teacher_lessons[0].lesson_duration * 60 * 1000).format()
        }
        console.log(lll)
        for(var i = 0; i< calendarApi.currentDataManager.props.optionOverrides.events.length; i++){
     
            if(calendarApi.currentDataManager.props.optionOverrides.events[i].start == selectInfo.startStr){
                if(calendarApi.currentDataManager.props.optionOverrides.events[i].is_active == null || calendarApi.currentDataManager.props.optionOverrides.events[i].redy_to_lesson ==false){
         
                  
                }else{
                    this.setState({
                        loadCalendar: false
                    })
                    fetch('https://api.mydars.uz/api/add_lessons_to_order/', {
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
                            "order_id": this.state.order,
                            "lessons_list": [{
                                "start_at": moment(test).format(),
                                // "end_till": moment(test + this.state.main.teacher_profile.teacher_lessons[0].lesson_duration * 60 * 1000).format(),
                            }],
            
            
            
                        })
            
                    })
            
            
                        .then(res => res.json())
            
                        .then((data) => {
            
            
                            console.log(data)
                            if (data.available_packets.length > 0) {
            
                                if (data.student_lessons_in_order.length == 0) {
                                    this.setState({
                                        vs: false
                                    })
                                } else {
                                    this.setState({
                                        vs: true
                                    })
                                }
                            }
                            if (data.error_list.length > 0) {
                                NotificationManager.error(data.error_list[0].reason, "Ошибка", 5000, () => {
                                    alert('callback');
                                });
                                this.setState({
                                    // isLoaded: true,
            
            
                                    loadCalendar: true
            
                                })
            
                            } else {
                                sessionStorage.setItem("pay", JSON.stringify(data))
                                sessionStorage.setItem("my", JSON.stringify(data));
                                NotificationManager.success('Урок успешно добавлен', 'Успешно добавлен');
                                this.setState({
                                    // isLoaded: true,
                                    week: data.teacher_profile,
                                    les: data.student_lessons_in_order,
                                    loadCalendar: true
            
                                })
            
            
                            }
            
                        }
                        )
                }
            }
        }
      



    };





    handleDateSelect = (selectInfo) => {
        let calendarApi = selectInfo.view.calendar;
        // let title = prompt("Please enter a new title for your event");
        calendarApi.unselect(); // clear date selection
        const checkTimeStart = Date.parse(selectInfo.start)
        const checkTimeEnd = Date.parse(selectInfo.end)
        // console.log(test + 1800000 ); // 709
        const test = Date.parse(selectInfo.start)
        const test1 = Date.parse(selectInfo.end)
        const rrr = new Date(test)
        //
        console.log(calendarApi.currentDataManager.props.optionOverrides);
        console.log(selectInfo)
      
        for(var i = 0; i< calendarApi.currentDataManager.props.optionOverrides.events.length; i++){
     
            if(calendarApi.currentDataManager.props.optionOverrides.events[i].start == selectInfo.startStr){
                if(calendarApi.currentDataManager.props.optionOverrides.events[i].is_active == null || calendarApi.currentDataManager.props.optionOverrides.events[i].redy_to_lesson ==false){
                    
                }else{
                      this.setState({
            loadCalendar: false
        })
                    fetch('https://api.mydars.uz/api/add_lessons_to_order/', {
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
                            "order_id": this.state.order,
                            "lessons_list": [{
                                "start_at": moment(test).format(),
                                // "end_till": moment(test + this.state.main.teacher_profile.teacher_lessons[0].lesson_duration * 60 * 1000).format(),
                            }],
                            "is_manual": true,
            
            
                        })
            
                    })
            
            
                        .then(res => res.json())
            
                        .then((data) => {
            
            
                            console.log(data)
            
                            if (data.errors.length > 0) {
                                NotificationManager.error(data.errors[0].reason, "Ошибка", 5000, () => {
                                    alert('callback');
                                });
                                this.setState({
                                    // isLoaded: true,
            
            
                                    loadCalendar: true
            
                                })
            
                            } else if (data.lessons_in_order.length > 0) {
            
                                sessionStorage.setItem("my", JSON.stringify(data));
                                NotificationManager.success('Урок успешно добавлен', 'Успешно добавлен');
                                this.setState({
                                    // isLoaded: true,
                                    create: data.teacher_profile,
                                    les: data.student_lessons_in_order,
                                    loadCalendar: true
            
                                })
            
            
            
                            }
            
                        }
                        )
                }
            }
        }
      

        // const dur = this.state.create.profile.teacher_lessons[0].lesson_duration


        // console.log(selectInfo.startStr)

        const lll = {
            "start_at": moment(test).format(),
            "end_till": moment(test + this.state.main.teacher_profile.teacher_lessons[0].lesson_duration * 60 * 1000).format()
        }
        console.log(lll)

     



    };









    handleDateClick = (arg) => { // bind with an arrow function
        console.log(arg.event._def.extendedProps.myId)
        // arg.event.remove();
console.log(arg.event._def.extendedProps)

        if (arg.event._def.extendedProps.myId == undefined) {


        } else {
            fetch('https://api.mydars.uz/api/del_lessons_from_order/', {
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
                    "order_id": this.state.myorders,
                    "created_lesson_id": arg.event._def.extendedProps.myId
                })

            })


                .then(res => res.json())

                .then((data) => {

                    console.log(data)
                    if (
                        data.status == true
                    ) {
                        arg.event.remove();

                        if (data.lessons_list.length == 0) {
                            this.setState({
                                vs: false,
                            })
                        } else {
                            this.setState({
                                vs: true,
                            })
                        }

                    } else {

                    }
                })


        }




    }
    no() {
        console.log("no")
        this.setState({
            no: true,
            yes: false,
        })
    }
    yes() {
        console.log("yes")
        this.setState({
            no: false,
            yes: true,
        })
    }
    render() {

        console.log(this.state.create)
        const { isLoaded, newlineLoad, langLoad } = this.state
        if (!isLoaded || !newlineLoad || !langLoad) {
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
                <div className={"wrap wh_pw_non"}>
                    <NotificationContainer />
                    <div className={"container"}>
                        <div className={"row"}>
                            <div className={" col-lg-12 col-md-12 col-sm-12 col-12"}>
                                <p className={"zabs"}>{this.state.lang.timebronds.text}</p>
                                <p className={"zabs2"}>{this.state.lang.choosetimegreate.text}</p>
                            </div>
                            <div className={" col-lg-12 col-md-12 col-sm-12 col-12"}>
                                {(() => {
                                    if (this.state.no == true) {
                                        return (
                                            <div>
                                                <Link onClick={this.no} className={"en gram"}>{this.state.lang.ruh12ench.text}</Link>
                                                <Link onClick={this.yes} className={"gram"}>{this.state.lang.weekgraphchose.text}</Link>
                                            </div>
                                        )
                                    } else if (this.state.yes == true) {
                                        return (
                                            <div>
                                                <Link onClick={this.no} className={"gram"}>{this.state.lang.ruh12ench.text}</Link>
                                                <Link onClick={this.yes} className={"gram en"}>{this.state.lang.weekgraphchose.text}</Link>
                                            </div>
                                        )
                                    }
                                })()}

                                <div className={"oplopookl"}></div>
                            </div>
                             {(() => {
                                if (this.state.no == true) {
                                    if (this.state.loadCalendar == false) {
                                        return (
                                            <div className={"load col-lg-12 col-md-12 col-sm-12 col-12"}>

                                            


                                                <div className={"loadlpreload"}>
                                                    <ImpulseSpinner className={"preloaders "} size={40} frontColor="#9181F3" backColor={"#9181F3"} />  </div>
                                                <div className={"zaglnow"}>
                                                </div>



                                                <CalendarStyle>

                                                    {console.log(this.state.tech)}
                                                    <FullCalendar
                                                       
                                                        select={this.handleDateSelect}
                                                        plugins={[timeGridPlugin, interactionPlugin]}
                                                    
                                                        initialDate={today}

                                                       
                                                        headerToolbar={false}
                                              
                                                        locale={esLocale}
                                                        eventDragStart={(arg) => {
                                                            console.log(arg);
                                                        }}

                                              
                                                        startEditable={false}
                                                        durationEditable={false}
                                                        // resourceEditable={true}
                                                        editable={false}
                                                        selectable={true}
                                                        // selectMirror={true}
                                                        eventContent={this.renderEventContent}
                                                        dayHeaderContent={this.renderDayReaderContent}
                                                        // eventClick={(args) => {
                                                        //     this.setState({dialogOpen: true});
                                                        // }}
                                                        eventClick={
                                                            this.handleDateClick
                                                        }

                                                        // eventTimeFormat={dateFormat}
                                                        // slotLabelFormat={dateFormat}
                                                        allDaySlot={false}
                                                        slotDuration="00:30:00"
                                                    // eventTimeFormat={this.state.timeFormat}
                                                    // slotLabelFormat={this.state.timeFormat}
                                                    // slotLabelClassNames={"calendar-hour"}
                                                    // eventOverlap={(stillEvent, movingEvent) => {
                                                    //     return stillEvent.groupId == movingEvent.groupId;
                                                    // }}
                                                    />


                                                </CalendarStyle>

                                            </div>
                                        )
                                    } else {
                                        return (
                                            <div className={" col-lg-12 col-md-12 col-sm-12 col-12"}>
                                        

                                                <div className={"groupesmonther_calendas"}>



                                                    {(() => {

                                                        if (this.state.today <= 0) {
                                                            return (
                                                                <div >
                                                                    

                                                                    <Link className={"next_calac"} onClick={this.next1}>{this.state.lang.next.text}</Link>
                                                                </div>
                                                            )
                                                        } else {
                                                            return (
                                                                <div>
                                                                   
                                                                    <Link className={"prevs_calac"} onClick={this.back1}>{this.state.lang.back.text}</Link>
                                                                    <Link className={"next_calac"} onClick={this.next1}>{this.state.lang.next.text}</Link>
                                                                </div>
                                                            )
                                                        }

                                                    })()}
                                                </div>
                                   
                                                <CalendarStyle>
                                    
                                                    {console.log(this.state.timersss.date_MAX)}
                                                    {console.log(moment(this.state.timersss.date_MAX * 1000).format("HH:MM:SS"))}
                                                    <FullCalendar
                                                        ref={this.calendarRef}
                                                        select={this.handleDateSelect}


                                                        plugins={[timeGridPlugin, interactionPlugin, dayGridPlugin]}
                                                    
                                                        initialDate={moment(this.state.create.teacher_scheduller_week[0].end_till * 1000).format("YYYY-MM-DD")}
                                                
                                                        slotMinTime = {this.state.min}
                                                        slotMaxTime = {this.state.max}

                                                        headerToolbar={false}
                                           
                                                        events=
                                                        {this.state.create.teacher_scheduller_week.map((data, idx) => (

                                                            {

                                                                start: moment(data.start_at * 1000).format(),
                                                                end: moment(data.end_till * 1000).format(),
                                                                timetextnew: moment(data.start_at * 1000).format(),
                                                                backgroundColor: "#3788d800",
                                                                color: '#257e4a',
                                                                is_active: data.is_active,
                                                                redy_to_lesson: data.redy_to_lesson,
                                                                lesson_is_paid: data.lesson_is_paid
                                                            }
                                                        ))


                                                        }
                                                  
                                                        locale={esLocale}
                                                        eventDragStart={(arg) => {
                                                            console.log(arg);
                                                        }}
                                                        eventOverlap={(stillEvent, movingEvent) => {
                                                            return stillEvent.groupId == movingEvent.groupId;
                                                        }}
                                               
                                                        startEditable={false}
                                                        durationEditable={false}
                                                    
                                                        editable={false}
                                                        selectable={true}
                                       
                                                        eventContent={this.renderEventContent}
                                                        dayHeaderContent={this.renderDayReaderContent}
                                        
                                                        eventClick={
                                                            this.handleDateClick
                                                        }

                                                     
                                                        allDaySlot={false}
                                                        slotDuration="00:30:00"
                                       
                                                    />


                                                </CalendarStyle>
                                                <div className={"focal"}>
                                                        
                                                        <div className={"focalWrap"}>


                                                       
                                                        <img alt="" className={"minic_sentaraks"} src={this.state.main.teacher_profile.avatar_url}></img>
                                                        <div className={"lecalll"}>
                                                            <p className={"blcalsss"}> {this.state.main.teacher_profile.surename} {this.state.main.teacher_profile.name}</p>
                                                            <p className={"blcalsss1"}>
                                                                1 урок = {moment.utc().startOf('day').add({ minutes: this.state.main.teacher_profile.teacher_lessons[0].lesson_duration }).format('H')} час {moment.utc().startOf('day').add({ minutes: this.state.main.teacher_profile.teacher_lessons[0].lesson_duration }).format('mm')} минут
                                                      </p>
                                                        </div>


                                                        <div className={"lecalll vert_line"}>

                                                        </div>



                                                        <div className={"lecalll"}>
                                                            <p className={"blcalsss"}> {this.state.lang.choosemong.text}
                                                        {/* {this.state.create.student_lessons_in_order.length} */}
                                                                {(() => {
                                                                    if (this.state.create.student_lessons_in_order == undefined) {
                                                                        return (<p>

                                                                        </p>)
                                                                    } else {
                                                                        return (<span className={""}>
                                                                            {this.state.create.student_lessons_in_order.length}
                                                                            {this.state.lang.choozeurokweekdays.text} 
                                                                        </span>)
                                                                    }
                                                                })()}
                                                            </p>
                                                            {(() => {
                                                                if (this.state.les.length == 0) {
                                                                    return (

                                                                        <p className={"blcalsss1"}>0 урок = 0 час 0 мин</p>
                                                                    )
                                                                } else {
                                                                    return (
                                                                        <p className={"blcalsss1"}>{this.state.les.length} {this.state.lang.numberphonesreg.text}урок = {moment.utc().startOf('day').add({ minutes: this.state.main.teacher_profile.teacher_lessons[0].lesson_duration * this.state.les.length }).format('H')} час {moment.utc().startOf('day').add({ minutes: this.state.main.teacher_profile.teacher_lessons[0].lesson_duration * this.state.les.length }).format('mm')} минут</p>
                                                                    )
                                                                }
                                                            })()}


                                                        </div>

                                                        <div className="pushup">
                                                            {(() => {
                                                                if (sessionStorage.getItem('my')) {
                                                                    return (
                                                                        <Link className={"molop_loop"} to={"/payment/"}>
                                                                            <div className={"ne_pa_data"}>
                                                                            {this.state.lang.zabronirovat.text}   <img alt="" className={"ne_pa"} />
                                                                            </div>
                                                                        </Link>
                                                                    )
                                                                } else {

                                                                }
                                                                
                                                            })()}


                                                        </div>

                                                    </div>
                                                    </div>
                                            </div>
                                        )
                                    }

                                } else if (this.state.yes == true) {

                                    if (this.state.loadCalendar == false) {
                                        return (
                                            <div className={"load col-lg-12 col-md-12 col-sm-12 col-12"}>





                                                <div className={"loadlpreload"}>
                                                    <ImpulseSpinner className={"preloaders "} size={40} frontColor="#9181F3" backColor={"#9181F3"} />  </div>
                                                <div className={"zaglnow"}>
                                                </div>



                                                <CalendarStyle>

                                                    <FullCalendar
                                                        ref={this.state.calendar}
                                                        select={this.handleDateSelect3}
                                                        plugins={[timeGridPlugin, interactionPlugin]}
                                                        initialView="timeGridWeek"
                                                        // initialDate={today}
                                                        scrollTime={today.getHours() + ":00"}

                                             
                                                        headerToolbar={false}


                                                        locale={esLocale}
                                                        eventDragStart={(arg) => {
                                                            console.log(arg);
                                                        }}

                                                    
                                                        startEditable={false}
                                                        durationEditable={false}
                                                        resourceEditable={false}
                                                        editable={false}
                                                        selectable={true}
                                                        selectMirror={false}
                                                        eventContent={this.renderEventContent}
                                                        dayHeaderContent={this.renderDayReaderContent}
                                                  
                                                        eventClick={
                                                            this.handleDateClick
                                                        }


                                                        allDaySlot={false}
                                                
                                                        slotLabelClassNames={"calendar-hour"}
                                                        eventOverlap={(stillEvent, movingEvent) => {
                                                            return stillEvent.groupId == movingEvent.groupId;
                                                        }}
                                                    />


                                                </CalendarStyle>

                                            </div>
                                        )
                                    } else {
                                        if (this.state.loadCalendar == false) {
                                            return (
                                                <div>

                                                    <div className={"loadlpreload"}>
                                                        <ImpulseSpinner className={"preloaders "} size={40} frontColor="#9181F3" backColor={"#9181F3"} />  </div>
                                                    <div className={"zaglnow"}>
                                                    </div>
                                                    <FullCalendar
                                                        ref={this.state.calendar}
                                                        select={this.handleDateSelect3}
                                                        plugins={[timeGridPlugin, interactionPlugin]}
                                                        initialView="timeGridWeek"
                                                        // initialDate={today}
                                                        scrollTime={today.getHours() + ":00"}

                                                        initialView="timeGridWeek"
                                                        initialDate={today}
                                                   
                                                        headerToolbar={false}
                                   
                                                        events=
                                                        {this.state.week.teacher_scheduller.map((data, idx) => (

                                                            {

                                                                start: moment(data.start_at * 1000).format(),
                                                                end: moment(data.end_till * 1000).format(),
                                                                timetextnew: moment(data.start_at * 1000).format(),
                                                                backgroundColor: "#3788d800",
                                                                color: '#257e4a',
                                                                is_active: data.is_active,
                                                                redy_to_lesson: data.redy_to_lesson,
                                                                lesson_is_paid: data.lesson_is_paid
                                                            }
                                                        ))


                                                        }
                                                        locale={esLocale}
                                                        eventDragStart={(arg) => {
                                                            console.log(arg);
                                                        }}


                                                        startEditable={false}
                                                        durationEditable={false}
                                                        resourceEditable={false}
                                                        editable={false}
                                                        selectable={true}
                                                        selectMirror={false}
                                                        eventContent={this.renderEventContent}
                                                        dayHeaderContent={this.renderDayReaderContent}
                                                 
                                                        eventClick={
                                                            this.handleDateClick
                                                        }


                                                        allDaySlot={false}

                                                        slotLabelClassNames={"calendar-hour"}
                                                        eventOverlap={(stillEvent, movingEvent) => {
                                                            return stillEvent.groupId == movingEvent.groupId;
                                                        }}
                                                    />
                                                </div>
                                            )
                                        } else {
                                            return (
                                                <div className={" col-lg-12 col-md-12 col-sm-12 col-12"}>
                                                    {/*{console.log(this.state.tt)}*/}
                                                    
                                                    <CalendarStyle>

                                                        {console.log(this.state.tech)}
                                                        <FullCalendar
                                                            ref={this.state.calendar}
                                                            select={this.handleDateSelect3}
                                                            plugins={[timeGridPlugin, interactionPlugin]}

                                                            // initialDate={today}
                                                            scrollTime={today.getHours() + ":00"}

                                                            // timeZone='GMT'
                                                            slotMinTime = {this.state.min}
                                                            slotMaxTime = {this.state.max}
                                                            initialDate={today}

                                                            headerToolbar={false}


                                                            events=
                                                            {this.state.week.teacher_scheduller.map((data, idx) => (

                                                                {

                                                                    start: moment(data.start_at * 1000).format(),
                                                                    end: moment(data.end_till * 1000).format(),
                                                                    timetextnew: moment(data.start_at * 1000).format(),
                                                                    backgroundColor: "#3788d800",
                                                                    color: '#257e4a',
                                                                    is_active: data.is_active,
                                                                    redy_to_lesson: data.redy_to_lesson,
                                                                    lesson_is_paid: data.lesson_is_paid
                                                                }
                                                            ))


                                                            }
                                                            locale={esLocale}
                                                            eventDragStart={(arg) => {
                                                                console.log(arg);
                                                            }}

                                                            // dateClick={this.handleDateClick}
                                                            startEditable={false}
                                                            durationEditable={false}
                                                            resourceEditable={false}
                                                            editable={false}
                                                            selectable={true}
                                                            selectMirror={false}
                                                            eventContent={this.renderEventContent}
                                                            dayHeaderContent={this.renderDayReaderContent65}

                                                            eventClick={
                                                                this.handleDateClick
                                                            }


                                                            allDaySlot={false}

                                                            slotLabelClassNames={"calendar-hour"}
                                                            eventOverlap={(stillEvent, movingEvent) => {
                                                                return stillEvent.groupId == movingEvent.groupId;
                                                            }}
                                                        />


                                                    </CalendarStyle>
                                                    <div className={"focal"}>
                                                    <div className={"focalWrap"}>

                                                        <img alt="" className={"minic_sentaraks"} src={this.state.main.teacher_profile.avatar_url}></img>
                                                        <div className={"lecalll"}>
                                                            <p className={"blcalsss"}> {this.state.main.teacher_profile.surename} {this.state.main.teacher_profile.name}</p>
                                                            <p className={"blcalsss1"}>
                                                                1 урок = {moment.utc().startOf('day').add({ minutes: this.state.main.teacher_profile.teacher_lessons[0].lesson_duration }).format('H')} час {moment.utc().startOf('day').add({ minutes: this.state.main.teacher_profile.teacher_lessons[0].lesson_duration }).format('mm')} минут
                                                      </p>
                                                        </div>


                                                        <div className={"lecalll vert_line"}>

                                                        </div>



                                                        <div className={"lecalll"}>
                                                            <p className={"blcalsss"}> {this.state.lang.	choosemong.text}
                                                                {(() => {
                                                                    if (this.state.create.student_lessons_in_order == undefined) {
                                                                        return (<p>

                                                                        </p>)
                                                                    } else {
                                                                        return (<span className={""}>
                                                                            {this.state.create.student_lessons_in_order.length}
                                                                            {this.state.lang.choozeurokweekdays.text}   
                                                                        </span>)
                                                                    }
                                                                })()}
                                                            </p>
                                                            {(() => {
                                                                if (this.state.les.length == 0) {
                                                                    return (

                                                                        <p className={"blcalsss1"}>0 урок = 0 час 0 мин</p>
                                                                    )
                                                                } else {
                                                                    return (
                                                                        <p className={"blcalsss1"}>{this.state.les.length} урок = {moment.utc().startOf('day').add({ minutes: this.state.main.teacher_profile.teacher_lessons[0].lesson_duration * this.state.les.length }).format('H')} час {moment.utc().startOf('day').add({ minutes: this.state.main.teacher_profile.teacher_lessons[0].lesson_duration * this.state.les.length }).format('mm')} минут</p>
                                                                    )
                                                                }
                                                            })()}


                                                        </div>

                                                        <div className="pushup">
                                                            {(() => {
                                                               if (sessionStorage.getItem("pay") == "undefined" || this.state.vs == false) {
                                                                return (<p></p>)
                                                            } else if (!sessionStorage.getItem("pay") == "undefined" || this.state.vs == true) {
                                                                return (
                                                                    <Link className={"molop_loop"} to={"/pack/" + this.state.main.order_id}>
                                                                        <div className={"ne_pa_data"}>
                                                                        {this.state.lang.zabronirovat.text}   <img alt="" className={"ne_pa"} />
                                                                            {console.log(this.state.main)}
                                                                        </div>
                                                                    </Link>
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
                            })()}


                        </div>
                    </div>
                </div>

            );
        }

    }
}
