import React, { Component } from "react";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { CalendarStyle } from "./Styled";
import { CalendarStyle1 } from "./Styled1";
import dayGridPlugin from "@fullcalendar/daygrid";
import InlineDialog from "@atlaskit/inline-dialog";

import Page from "./calendar";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
} from "react-router-dom";
import "flatpickr/dist/themes/light.css";
import { ImpulseSpinner } from "react-spinners-kit";
import mini_next from "./images/mini_next.svg"
import back from "./images/back_ico.svg"
import esLocale from "@fullcalendar/core/locales/ru";
import 'react-notifications/lib/notifications.css';
import moment from 'moment'
import { NotificationContainer, NotificationManager } from 'react-notifications';
import Flatpickr from "react-flatpickr";
import DatePicker from "react-datepicker";
import { Russian } from "flatpickr/dist/l10n/ru.js"
import "react-datepicker/dist/react-datepicker.css";
const today = new Date();
today.setMinutes(0);
const yday = new Date(today);
const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);
yday.setDate(today.getDate() - 1);

// or import { Russian } from "flatpickr/dist/l10n/ru.js"
const options = {
    locale: {
        ...Russian,
        months: {
            ...Russian.months,
            longhand: ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"]
        }
    },
    dateFormat: 'd-m-Y',
    monthSelectorType: 'static',


    altFormat: "j F, Y",
    altInput: true,
    inline: true
};

interface State {
    dialogOpen: boolean;
    calendar: any;
}
const dateFormat = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    meridiem: false
};
export default class About extends Component<{}, State> {

    calendarRef = React.createRef()
    calendarRefs = React.createRef()
    state = {
        dialogOpen: false,
        calendar: React.createRef(),
        create: "",
        isLoaded: false,
        loadCalendar: false,
        tt: [],
        week: false,
        tech: "",
        loadPick: false,
        lop: "",
        edit: false,
        editG: false,
       
        tech8: "",

        calendarEvents: [
            // initial event data
            { title: "Event Now", start: new Date() }
        ],

        timeFormat: {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
            meridiem: false,
            omitZeroMinute: false
        }


    }

    constructor(props) {
        super(props)
        this.state = {
            week: false,
            today: 0,
            loadCalendar: false,
            langLoad: false,
            lang: "",
            calendar2: React.createRef(),
            show: false,
            gropupid: "0",
            pagLoad:false,
            date: moment()
        }

        this.next = this.next.bind(this);
        this.set = this.set.bind(this);
        this.set1 = this.set1.bind(this);
        this.back1 = this.back1.bind(this);
        this.maindata = this.maindata.bind(this);
        this.next1 = this.next1.bind(this);
        this.back4 = this.back4.bind(this);
        this.next4 = this.next4.bind(this);
        this.setg1 = this.setg1.bind(this);
        this.edit = this.edit.bind(this);
        this.setg = this.setg.bind(this);
        this.backss = this.backss.bind(this);
        
        this.toggleOpen = () => {
            this.setState(prevState => ({
                show: !prevState.show
            }));
        };
    }
    backss(){
this.setState({
    editGr: false,
    gropupid: "0"
})
    }
    edit(obj){
        console.log(obj)
        this.setState({
            gropupid: obj.id
        })
    }
    back4() {
        // const main = this.props.match.params
        this.setState({
            // loadCalendar: false
        })
        let calendarApi = this.calendarRefs.current.getApi()
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
                "teacher_id": this.state.create.profile.id
            })

        })


            .then(res => res.json())

            .then((data) => {
                console.log(data)
                this.setState({
                    nems: data,

                    loadCalendar: true,
                    nems: data,
                    today: this.state.today - 7
                })
            })

    }
    next4() {
        // const main = this.props.match.params
    
        // calendarApi.next()
        this.setState({
            // loadCalendar: false
        })
        let calendarApi = this.calendarRefs.current.getApi()
        // let calendarApi = this.calendarRef2.current.getApi()
        // calendarApi.next()
        const start = moment().add(this.state.today + 7, 'days').startOf('week').format();
        const end = moment().add(this.state.today + 7, 'days').endOf('week').format();


        const test = Date.parse(start)
        const test1 = Date.parse(end)

        // calendarApi.next()
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
                "teacher_id": this.state.create.profile.id
            })

        })


            .then(res => res.json())

            .then((data) => {
                console.log(data)
            
                if (data.teacher_scheduller.length > 0) {
                    this.setState({
                        loadCalendar: true,
                        today: this.state.today + 7,
                        nems: data,

                        isLoaded: true,
                    })
                    
                }


            })
calendarApi.next()

    }
    next1() {
        this.setState({
            loadCalendar: false
        })
        let calendarApi = this.calendarRef.current.getApi()

        const start = moment().add(this.state.today + 7, 'days').startOf('week').format();
        const end = moment().add(this.state.today + 7, 'days').endOf('week').format();
        // const today2 = moment().locale('ru');
        // const from_date = today2.startOf('week').toISOString();
        // const to_date = today2.endOf('week').toISOString();
        // console.log(moment(today2).startOf('week').toISOString()); //week start date
        // console.log(moment(today2).endOf('week').toISOString()) //week end date
        // console.log({
        //   from_date: from_date.toString(),
        //   today: moment().toString(),
        //   to_date: to_date.toString(),
        // });

        const test = Date.parse(start)
        const test1 = Date.parse(end)

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
                    "end_till": test1 / 1000 - 1799
                }
            })

        })


            .then(res => res.json())

            .then((data) => {
                // console.log(data)
                calendarApi.next()
                this.setState({

                    today: this.state.today + 7,
                    newline: data,

                    loadCalendar: true,

                    isLoaded: true,
                })
            })
        calendarApi.next()
    }
    maindata(e) {
        console.log(moment(Date.parse(e[0])).format())

        this.setState({
            loadCalendar: false,
            loadPick: false,
        })
        fetch('https://api.mydars.uz/api/registration/teacher_timeline/edit', {
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


                "start_at": moment(Date.parse(e[0])).format(),
                "end_till": moment(Date.parse(e[0]) + 84600000).format(),

                "week_day": true,


            })

        })


            .then(res => res.json())

            .then((data) => {
                console.log(data)
                this.setState({

                    newline: data,
                    loadCalendar: true,
                    loadPick: true,
                })
                this.handleToggleModal3()
            })

    }
    handleClose = () => {
        this.setState({ show: false });
    };
    handleShow = () => {
        this.setState({ show: true });
    };
    handleChangeDate = (date, event) => {
        this.setState({
            date
        });
        console.log(date);
    };
    back1() {
        this.setState({
            loadCalendar: false
        })
        let calendarApi = this.calendarRef.current.getApi()
        calendarApi.prev()

        const start = moment().add(this.state.today - 7, 'days').startOf('week').format();
        const end = moment().add(this.state.today - 7, 'days').endOf('week').format();
        // const today2 = moment().locale('ru');
        // const from_date = today2.startOf('week').toISOString();
        // const to_date = today2.endOf('week').toISOString();
        // console.log(moment(today2).startOf('week').toISOString()); //week start date
        // console.log(moment(today2).endOf('week').toISOString()) //week end date
        // console.log({
        //   from_date: from_date.toString(),
        //   today: moment().toString(),
        //   to_date: to_date.toString(),
        // });

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
                    "end_till": test1 / 1000 - 1799
                }
            })

        })


            .then(res => res.json())

            .then((data) => {
                console.log(data)
                this.setState({
                    newline: data,

                    loadCalendar: true,

                    today: this.state.today - 7
                })
            })

    }
    
    next() {
        this.setState({
            week: true,
            edit: false
        })

    }

    toggleDialog = () => this.setState({ dialogOpen: !this.state.dialogOpen });

    handleToggleModal3 = () => this.setState({ showModal3: !this.state.showModal3 });

    renderDayReaderContent = (info) => {
        // console.log(info)
        var weekday = new Array(7);
        // weekday[1] = "пн";
        // weekday[2] = "вт";
        // weekday[3] = "ср";
        // weekday[4] = "чт";
        // weekday[5] = "пт";
        // weekday[6] = "сб";
        // weekday[0] = "вс";
        if (localStorage.getItem('lang') == undefined || localStorage.getItem('lang') == "" || localStorage.getItem('lang') == 'ru') {
            weekday[1] = "пн";
            weekday[2] = "вт";
            weekday[3] = "ср";
            weekday[4] = "чт";
            weekday[5] = "пт";
            weekday[6] = "сб";
            weekday[0] = "вс";

        } else {
            weekday[1] = "Dushanba ";
            weekday[2] = "Seshanba ";
            weekday[3] = "Chorshanba ";
            weekday[4] = "Payshanba ";
            weekday[5] = "Juma ";
            weekday[6] = "Shanba ";
            weekday[0] = "Yakshanba ";
        }
        // console.log(weekday)
        // const dateObject = new Date(new Date(tomorrow).setHours(tomorrow.getHours() + 2 ))
        // console.log(dateObject)
        return (
            <div className={info.isToday ? "day today" : "day"} tabIndex="5">
                {/*{console.log(weekday)}*/}
                <div className={info.isToday ? "day today" : "mmooday"}>{weekday[info.date.getDay()]} </div>
                {/* <div className={info.isToday ? "day today" : "day-number"}>{info.date.getDate()}</div> */}
            </div>

            // <div className={info.isToday ? "day today" : "day"} tabIndex="5">
            //     {/*{console.log(weekday)}*/}
            //     <div className={info.isToday ? "day today" : "mmooday"}>{weekday[info.date.getDay()]}</div>
            //     <div className="day-number">{info.date.getDate()}</div>
            // </div>
        );
    };






    renderDayReaderContent00 = (info) => {
        console.log(info)
        var weekday = new Array(7);
        if (localStorage.getItem('lang') == undefined || localStorage.getItem('lang') == "" || localStorage.getItem('lang') == 'ru') {
            weekday[1] = "пн";
            weekday[2] = "вт";
            weekday[3] = "ср";
            weekday[4] = "чт";
            weekday[5] = "пт";
            weekday[6] = "сб";
            weekday[0] = "вс";

        } else {
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

        } else {
            weekday[1] = "Dushanba ";
            weekday[2] = "Seshanba ";
            weekday[3] = "Chorshanba ";
            weekday[4] = "Payshanba ";
            weekday[5] = "Juma ";
            weekday[6] = "Shanba ";
            weekday[0] = "Yakshanba ";
        }

        // console.log(weekday)
        // const dateObject = new Date(new Date(tomorrow).setHours(tomorrow.getHours() + 2 ))
        // console.log(dateObject)
        return (
            <div className={info.isToday ? "day today" : "day"} tabIndex="5">
                {/*{console.log(weekday)}*/}
                <div className={info.isToday ? "day today" : "mmooday"}>{weekday[info.date.getDay()]} </div>
                <div className={"day today"}>{info.date.getDate()}</div>
            </div>

            // <div className={info.isToday ? "day today" : "day"} tabIndex="5">
            //     {/*{console.log(weekday)}*/}
            //     <div className={info.isToday ? "day today" : "mmooday"}>{weekday[info.date.getDay()]}</div>
            //     <div className="day-number">{info.date.getDate()}</div>
            // </div>
        );
    };




    renderDayReaderContent2 = (info) => {
        // console.log(info)
        var weekday = new Array(7);
        // weekday[1] = "пн";
        // weekday[2] = "вт";
        // weekday[3] = "ср";
        // weekday[4] = "чт";
        // weekday[5] = "пт";
        // weekday[6] = "сб";
        // weekday[0] = "вс";
        if (localStorage.getItem('lang') == undefined || localStorage.getItem('lang') == "" || localStorage.getItem('lang') == 'ru') {
            weekday[1] = "пн";
            weekday[2] = "вт";
            weekday[3] = "ср";
            weekday[4] = "чт";
            weekday[5] = "пт";
            weekday[6] = "сб";
            weekday[0] = "вс";

        } else {
            weekday[1] = "Dushanba ";
            weekday[2] = "Seshanba ";
            weekday[3] = "Chorshanba ";
            weekday[4] = "Payshanba ";
            weekday[5] = "Juma ";
            weekday[6] = "Shanba ";
            weekday[0] = "Yakshanba ";
        }
        // console.log(weekday)
        // const dateObject = new Date(new Date(tomorrow).setHours(tomorrow.getHours() + 2 ))
        // console.log(dateObject)
        return (
            <div className={info.isToday ? "day today" : "day"} tabIndex="5">
                {/*{console.log(weekday)}*/}
                <div className={info.isToday ? "day today" : "mmooday"}>{weekday[info.date.getDay()]} </div>
                <div className={"day today"}>{info.date.getDate()}</div>
            </div>

            // <div className={info.isToday ? "day today" : "day"} tabIndex="5">
            //     {/*{console.log(weekday)}*/}
            //     <div className={info.isToday ? "day today" : "mmooday"}>{weekday[info.date.getDay()]}</div>
            //     <div className="day-number">{info.date.getDate()}</div>
            // </div>
        );
    };



    renderEventContent22 = (eventInfo) => {
        // console.log(eventInfo)
        const content = (
            <div>
                <p>{eventInfo.event.title}</p>
            </div>
        );
        return (
            <InlineDialog
                onClose={() => {
                    this.setState({ dialogOpen: false });
                }}
                content={content}
                isOpen={this.state.dialogOpen}
            >
                <div tabIndex="6">
                    <img alt="" className="avatar_cald" src={eventInfo.event._def.extendedProps.teacher__avatar_url}></img>
                    <div>{eventInfo.timeText}</div>
                    <div>{eventInfo.event.extendedProps.issueId}</div>
                    <div>{eventInfo.event.title}</div>
                </div>
            </InlineDialog>
        );


    };
    renderEventContent88 = (eventInfo) => {

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
        }  else if (eventInfo.event._def.groupId == true && eventInfo.event._def.extendedProps.redy_to_lesson == false) {
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
        }else if (eventInfo.event._def.extendedProps.is_group == true) {
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
                        <div className={"grlister"}>{moment(eventInfo.event._def.extendedProps.timetextnew).format('LT')}</div>
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
    renderEventContent = (eventInfo) => {
        console.log(eventInfo)
        const content = (
            <Link>
                <p>{eventInfo.event.title}</p>
            </Link>
        );
        if (eventInfo.isMirror) {
            // console.log(eventInfo.event.start);
        }
        // console.log(eventInfo)

        if (eventInfo.event._def.extendedProps.is_active == true && eventInfo.event._def.extendedProps.groups == false) {
            return (
                <InlineDialog
                    onClose={() => {
                        this.setState({ dialogOpen: false });
                    }}
                    content={content}
                    isOpen={this.state.dialogOpen}
                >
                    <Link tabIndex="6">


                        {/* {console.log(eventInfo)}  */}
                        <Link>
                            {/* <img alt="" className="avatar_cald" src={eventInfo.event._def.extendedProps.timetextnew}></img> */}
                            <div className={"event_text_types 222"}> {moment(eventInfo.event._def.extendedProps.timetextnew).format('LT')}</div>
                            {/* <div>{eventInfo.event.extendedProps.issueId}</div>
                            <div>{eventInfo.event.title}</div>
                            <div>{eventInfo.event._def.extendedProps.student__name}</div> */}
                        </Link>
                    </Link>
                </InlineDialog>
            );
        } else if (eventInfo.event._def.extendedProps.is_active == true && eventInfo.event._def.extendedProps.groups == true ) {
            return (
                <InlineDialog
                    onClose={() => {
                        this.setState({ dialogOpen: false });
                    }}
                    content={content}
                    isOpen={this.state.dialogOpen}
                >
                    <Link tabIndex="6">


                        {/* {console.log(eventInfo)}  */}
                        <Link>
                            {/* <img alt="" className="avatar_cald" src={eventInfo.event._def.extendedProps.timetextnew}></img> */}
                            <div className={"event_text_types 222 everents5555"}> {moment(eventInfo.event._def.extendedProps.timetextnew).format('LT')}</div>
                            {/* <div>{eventInfo.event.extendedProps.issueId}</div>
                            <div>{eventInfo.event.title}</div>
                            <div>{eventInfo.event._def.extendedProps.student__name}</div> */}
                        </Link>
                    </Link>
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
                        <Link>
                            {/* <img alt="" className="avatar_cald" src={eventInfo.event._def.extendedProps.timetextnew}></img> */}
                            <div className={"dsfjsklgjsdlk"}>{moment(eventInfo.event._def.extendedProps.timetextnew).format('LT')}</div>
                        </Link>
                        {/* <div>{eventInfo.event.extendedProps.issueId}</div>
                            <div>{eventInfo.event.title}</div>
                            <div>{eventInfo.event._def.extendedProps.student__name}</div> */}
                    </div>
                </InlineDialog>
            );
        }


    };






    renderEventContent55 = (eventInfo) => {
        console.log(eventInfo)
        const content = (
            <Link>
                <p>{eventInfo.event.title}</p>
            </Link>
        );
        if (eventInfo.isMirror) {
            // console.log(eventInfo.event.start);
        }
        // console.log(eventInfo)

        if (eventInfo.event._def.extendedProps.is_active == true) {
            return (
                <InlineDialog
                    onClose={() => {
                        this.setState({ dialogOpen: false });
                    }}
                    content={content}
                    isOpen={this.state.dialogOpen}
                >
                    <Link tabIndex="6">


                        {/* {console.log(eventInfo)}  */}
                        <Link>
                            {/* <img alt="" className="avatar_cald" src={eventInfo.event._def.extendedProps.timetextnew}></img> */}
                            <div className={"event_text_types 222"}> {moment(eventInfo.event._def.extendedProps.timetextnew).format('LT')}</div>
                            {/* <div>{eventInfo.event.extendedProps.issueId}</div>
                            <div>{eventInfo.event.title}</div>
                            <div>{eventInfo.event._def.extendedProps.student__name}</div> */}
                        </Link>
                    </Link>
                </InlineDialog>
            );
        }  else if (eventInfo.event._def.extendedProps.is_active == null || eventInfo.event._def.extendedProps.is_active == false) {
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
                        <Link>
                            {/* <img alt="" className="avatar_cald" src={eventInfo.event._def.extendedProps.timetextnew}></img> */}
                            <div className={"dsfjsklgjsdlk"}>{moment(eventInfo.event._def.extendedProps.timetextnew).format('LT')}</div>
                        </Link>
                        {/* <div>{eventInfo.event.extendedProps.issueId}</div>
                            <div>{eventInfo.event.title}</div>
                            <div>{eventInfo.event._def.extendedProps.student__name}</div> */}
                    </div>
                </InlineDialog>
            );
        }


    };







    renderEventContent5 = (eventInfo) => {
        // console.log(eventInfo)
        const content = (
            <div>
                <p>{eventInfo.event.title}</p>
            </div>
        );
        if (eventInfo.isMirror) {
            // console.log(eventInfo.event.start);
        }
        console.log(eventInfo)

        if (eventInfo.event._def.extendedProps.is_active == true && eventInfo.event._def.extendedProps.is_weekday == false) {
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
                        <div className={"event_text_types 222"}> {moment(eventInfo.event._def.extendedProps.timetextnew).format('LT')}</div>
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
        }
        else if (eventInfo.event._def.extendedProps.is_active == true && eventInfo.event._def.extendedProps.is_weekday == true) {
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
    renderEventContent1 = (eventInfo) => {

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
                    {/* {console.log(eventInfo)} */}
                    <img alt="" className="avatar_cald" src={eventInfo.event._def.extendedProps.student__avatar_url}></img>
                    <div>{eventInfo.timeText}</div>
                    <div>{eventInfo.event.extendedProps.issueId}</div>
                    <div>{eventInfo.event.title}</div>
                </div>
            </InlineDialog>
        );
    };


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
                console.log(data)


                this.setState({
                    lang: data.translates,
                    langLoad: true
                })

            }
            )


        fetch('https://api.mydars.uz/api/registration/teacher_timeline/', {
            method: 'POST',


            headers: {
                // 'auth': 'ef899a6d-29d6-4130-8b59-3d95dfbcc9bd',
                'lang': localStorage.getItem('lang'),
                // 'Content-Type': 'application/json',
                'auth': "ef899a6d-29d6-4130-8b59-3d95dfbcc9bd",
                // 'lang': "uz"
                'token': localStorage.getItem('token'),
                "cert": 1,

            },
            body: JSON.stringify({




            })

        })


            .then(res => res.json())

            .then((data) => {
                console.log(data)

                this.setState({
                    newline: data,
                    nems: data,
                    loadCalendar: true,
                    isLoding: true,
                    loadPick: true,
                    min: data.date_MIN + ':00:00',
                    max: data.date_MAX + ':00:00'
                })
            }
            )



        fetch('https://api.mydars.uz/api/registration/', {
            headers: {
                // 'auth': 'ef899a6d-29d6-4130-8b59-3d95dfbcc9bd',
                // 'lang': 'uz',
                // 'Content-Type': 'application/json',
                'auth': "ef899a6d-29d6-4130-8b59-3d95dfbcc9bd",
                // 'lang': "uz"
                'token': localStorage.getItem('token')
            },

        })


            .then(res => res.json())

            .then((data2) => {


                if (data2.token_is_valid == false) {
                    localStorage.removeItem("token")
                    localStorage.removeItem("is_user")
                    window.location.replace("/");
                } else {

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
                            console.log(data)
                            if (data.profile.is_user == true) {
                                const { lop } = this.state

                                const clonePhoneNumbers = [...data.profile.student_has_paid_lessons];
                                const clonePhoneNumbers2 = [{}]

                                for (var i = 0; i < data.profile.student_has_paid_lessons.length; i++) {

                                    const contact = data.profile.student_has_paid_lessons[i]

                                    // console.log(contact)
                                    if (contact) {

                                        contact.start = moment(contact.lesson_start_timestamp_new * 1000).format()
                                        contact.end = moment(contact.lesson_end_timestamp_new * 1000).format()
                                        contact.teacher__avatar_url = contact.teacher__avatar_url
                                    }
                                    console.log(contact)
                                    clonePhoneNumbers2.push(contact)
                                }


                                this.setState({
                                    create: data,
                                    isLoaded: true,
pagLoad:true,
                                    lop: clonePhoneNumbers2
                                })





                            } else {
                                fetch('https://api.mydars.uz/api/group/get_all_groups/', {


                                    headers: {
                                        // 'auth': 'ef899a6d-29d6-4130-8b59-3d95dfbcc9bd',
                                        // 'lang': 'uz',
                                        'Content-Type': 'application/json',
                                        'auth': "ef899a6d-29d6-4130-8b59-3d95dfbcc9bd",
                                        // 'lang': "uz"chat
                                        'token': localStorage.getItem('token')
                                    },
                        
                                })
                        
                        
                                    .then(res => res.json())
                        
                                    .then((data) => {
                                        console.log(data)
                        
                                        if (data.all_groups) {
                                            this.setState({
                                                pag: data,
                                                pagLoad: true
                                            })
                        
                                        }
                                    })
                                this.setState({

                                    isLoaded: true,
                                    create: data,

                                })
                            }


                            console.log(data)


                        }
                        )

                }
            })









    }
    handleDateSelect99 = (selectInfo) => {
        let calendarApi = selectInfo.view.calendar;
        // let title = prompt("Please enter a new title for your event");

        calendarApi.unselect(); // clear date selection
        this.setState({
            loadCalendar: false,
        })

        const checkTimeStart = Date.parse(selectInfo.start)
        const checkTimeEnd = Date.parse(selectInfo.end)
        // console.log(test + 1800000 ); // 709

        const test = Date.parse(selectInfo.start)
        const test1 = Date.parse(selectInfo.end)

        const rrr = new Date(test)
        //
        console.log(rrr.toISOString());
        // console.log(test1 - test)

        const dur = this.state.create.profile.teacher_lessons[0].lesson_duration


        var notInTimeStatus = true;
        console.log(test)

        fetch('https://api.mydars.uz/api/group/add_lesson/', {
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


                "lesson_start": test/1000,
                "group_id": this.state.gropupid,
   



            })

        })


            .then(res => res.json())

            .then((data) => {
                console.log(data)
                if (data.error == 0) {
                    NotificationManager.success('Расписание успешно добавлено', 'Успешно создано');
                    const test  = {"teacher_scheduller": data.teacher_calendar}
                    // console.log(test)
                    this.setState({
                        isLoaded: true,
                        nems: test,
                        loadCalendar: true
                    })

                }else{
                    this.setState({
                        isLoaded: true,
                      
                        loadCalendar: true
                    })
 
                }





            }
            )

    }
    handleDateSelect = (selectInfo) => {
        let calendarApi = selectInfo.view.calendar;
        // let title = prompt("Please enter a new title for your event");

        calendarApi.unselect(); // clear date selection

        this.setState({
            loadCalendar: false,
        })
        const checkTimeStart = Date.parse(selectInfo.start)
        const checkTimeEnd = Date.parse(selectInfo.end)
        // console.log(test + 1800000 ); // 709

        const test = Date.parse(selectInfo.start)
        const test1 = Date.parse(selectInfo.end)

        const rrr = new Date(test)
        //
        console.log(rrr.toISOString());
        // console.log(test1 - test)

        const dur = this.state.create.profile.teacher_lessons[0].lesson_duration


        var notInTimeStatus = true;
        console.log(selectInfo)

        fetch('https://api.mydars.uz/api/registration/teacher_timeline/edit', {
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


                "start_at": selectInfo.startStr,
                "end_till": selectInfo.endStr,
                "is_active": true,



            })

        })


            .then(res => res.json())

            .then((data) => {
                console.log(data)
                if (data.teacher_scheduller.length > 0) {
                    NotificationManager.success('Расписание успешно добавлено', 'Успешно создано');
                    this.setState({
                        isLoaded: true,
                        newline: data,


                        loadCalendar: true,

                    })

                } else {
                    this.setState({
                        loadCalendar: true
                    })
                }

            }
            )




    };


    handleDateSelect4 = (selectInfo) => {
        let calendarApi = selectInfo.view.calendar;
        // let title = prompt("Please enter a new title for your event");

        calendarApi.unselect(); // clear date selection
        this.setState({
            loadCalendar: false,
        })

        const checkTimeStart = Date.parse(selectInfo.start)
        const checkTimeEnd = Date.parse(selectInfo.end)
        // console.log(test + 1800000 ); // 709

        const test = Date.parse(selectInfo.start)
        const test1 = Date.parse(selectInfo.end)

        const rrr = new Date(test)
        //
        console.log(rrr.toISOString());
        // console.log(test1 - test)

        const dur = this.state.create.profile.teacher_lessons[0].lesson_duration


        var notInTimeStatus = true;
        console.log(selectInfo)

        fetch('https://api.mydars.uz/api/registration/teacher_timeline/edit', {
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


                "start_at": selectInfo.startStr,
                "end_till": selectInfo.endStr,
                "week_day": true



            })

        })


            .then(res => res.json())

            .then((data) => {
                console.log(data)
                if (data.teacher_scheduller.length > 0) {
                    NotificationManager.success('Расписание успешно добавлено', 'Успешно создано');
                    this.setState({
                        isLoaded: true,
                        newline: data,
                        loadCalendar: true
                    })

                }





            }
            )



    };

    renderEventContent2 = (eventInfo) => {



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
                <div tabIndex="dd6">
                    {console.log(eventInfo)}
                    <div>{eventInfo.timeText}</div>
                    <div>{eventInfo.event.extendedProps.issueId}</div>
                    <div>{eventInfo.event.title}</div>
                </div>
            </InlineDialog>
        );
    };


    handleDateSelect2 = (selectInfo) => {

        fetch('https://api.mydars.uz/api/registration/timeline/', {
            method: 'POST',

            headers: {
                // 'auth': 'ef899a6d-29d6-4130-8b59-3d95dfbcc9bd',
                'lang': localStorage.getItem('lang'),
                'Content-Type': 'application/json',
                'auth': "ef899a6d-29d6-4130-8b59-3d95dfbcc9bd",
                // 'lang': "uz"
                'token': localStorage.getItem('token'),

            },
            body: JSON.stringify({

                "weekday_list": [{
                    "start_at": selectInfo.startStr,
                    "end_till": selectInfo.endStr,
                }]


            })

        })


            .then(res => res.json())

            .then((data) => {


                console.log(data)
                const clonePhoneNumbers = [...data.profile.teacher_scheduller];
                const clonePhoneNumbers2 = [...data.profile.teacher_weekdays];


                const clonePhoneNumbers3 = [...data.teacher_has_paid_lessons];


                for (var i = 0; i < data.teacher_has_paid_lessons.length; i++) {

                    const contact = data.teacher_has_paid_lessons[i]

                    if (contact) {
                        // contact.backgroundColor = "red"
                        contact.student__avatar_url = contact.student__avatar_url
                        contact.start = moment(contact.lesson_start_timestamp_new * 1000).format()
                        contact.end = moment(contact.lesson_end_timestamp_new * 1000).format()
                    }
                    // console.log(contact)
                }



                for (var i = 0; i < data.profile.teacher_weekdays.length; i++) {

                    const contact = data.profile.teacher_weekdays[i]

                    if (contact) {
                        // contact.backgroundColor = "red"
                        contact.start = moment(contact.start_at * 1000).format()
                        contact.end = moment(contact.end_till * 1000).format()
                    }
                    // console.log(contact)
                }
                for (var i = 0; i < data.profile.teacher_scheduller.length; i++) {

                    const contact = data.profile.teacher_scheduller[i]

                    if (contact) {

                        contact.display = "background";
                        contact.start = moment(contact.start_at * 1000).format()
                        contact.end = moment(contact.end_till * 1000).format()
                    }
                    // console.log(contact)
                }

                const ar = [...clonePhoneNumbers, ...clonePhoneNumbers2, ...clonePhoneNumbers3]
                console.log(clonePhoneNumbers2)
                this.setState({ tech: "", })
                this.setState({
                    create: data,
                    // isLoaded: true,

                    tech: ar,
                })



            }
            )


    };
    set() {
        this.setState({
            edit: true
        })
    }
    set1() {
        this.setState({
            edit: false
        })
    }
    setg1() {
        this.setState({
            editGr: false
        })
    }
    setg() {
        this.setState({
            editGr: true,
            edit:false
        })
    }

    handleDateClick = (arg) => { // bind with an arrow function
        console.log(arg)
        arg.event.remove();
    }

    rend() {
        console.log('fffff')
    }

    render() {
        // console.log(this.state.create)
        const { show } = this.state;

        // console.log(this.state.week)
        const { isLoaded, isLoding, langLoad, gropupid, pagLoad } = this.state
        // console.log(this.state.lop)
        console.log(this.state.newline)
        if (!isLoaded | !isLoding | !langLoad || !pagLoad) {
            return (

                <div className={"predos"}>
                    <div className={"loadlpreload"}>
                        <ImpulseSpinner className={"preloaders "} size={40} frontColor="#9181F3" backColor={"#9181F3"} />  </div>
                    <div className={"zaglnow"}>
                    </div>
                </div>

            )

        } else {
            return (
                <div className={"wrap profile_bbl_edents"}>
                    <NotificationContainer />
                    <NotificationContainer />
                    {this.state.showModal3 && <div onClick={this.handleToggleModal3} className="baccccccc">


                    </div>

                    }
                    {this.state.showModal3 && <div className="modal modal111">
                        <Link className={"ext_modal"} onClick={this.handleToggleModal3}>x</Link>
                        <span className={"tss_langase009"}>{this.state.lang.addweekdays.text}</span>


                        {(() => {
                            if (this.state.loadPick == false) {
                                return (
                                    <div>

                                        <div className={"loadlpreload"}>
                                            <ImpulseSpinner className={"preloaders "} size={40} frontColor="#9181F3" backColor={"#9181F3"} />  </div>
                                        <div className={"zaglnow"}>
                                        </div>

                                        <Flatpickr
                                            className="c-date-picker"
                                            name="date"
                                            locale="Russian"


                                            options={{
                                                locale: "ru",
                                                "locale": Russian,
                                                inline: true,
                                                weekNumbers: true
                                            }}
                                            onChange={this.maindata}
                                        />
                                    </div>
                                )
                            } else {
                                return (
                                    <Flatpickr
                                        className="c-date-picker"
                                        name="date"
                                        locale="Russian"
                                        options={{
                                            locale: "ru",
                                            "locale": Russian,
                                            inline: true,
                                            weekNumbers: true
                                        }}
                                        onChange={this.maindata}
                                    />
                                )
                            }
                        })()}




                    </div>

                    }



                    <div className={"container"}>
                        <div className={"row"}>
                            <div className={"main_paddin_scoll_adddno col-lg-12 col-md-12 col-sm-12 col-12 "}>
                                <div className={"container"}>
                                    <div className={"row"}>

                                        <div className={"main_paddin_scoll_adddno col-lg-6 col-md-4 col-sm-6 col-6 title_cal_obz_12"}>
                                            <div className="">
                                                {this.state.lang.mycalendares123.text}
                                            </div>
                                        </div>


                                     
                                        <div className={" col-lg-3 col-md-4 col-sm-6 col-6 title_cal_obz_13"}>

                                            {(() => {


                                                if (this.state.create.profile.is_user == true) {
                                                    return (<p></p>)
                                                } else {
                                                    if (this.state.edit == true) {
                                                        return (
                                                            <Link onClick={this.set1} className=" grGro grGro33">
                                                                {this.state.lang.done.text}
                                                            </Link>
                                                        )
                                                    } else {
                                                        if(this.state.editGr == true){
                                                         
                                                        }else{
                                                            return (
                                                                <Link onClick={this.set} className=" grGro grGro33">
                                                                    {this.state.lang.settinggraphice.text}
                                                                </Link>
                                                            )
                                                        }
                                                       
                                                    }
                                                }



                                            })()}

                                        </div>


                                        <div className={" col-lg-3 col-md-4 col-sm-6 col-6 title_cal_obz_13"}>

{(() => {


    if (this.state.create.profile.is_user == true) {
        return (<p></p>)
    } else {
        if (this.state.editGr == true || this.state.week == true) {
      
        } else {
            return (
                <Link onClick={this.setg} className=" grGro grGro33">
                    Групповой график
                </Link>
            )
        }
    }



})()}

</div>

                                    </div></div>

                            </div>
                            {(() => {

                                if (this.state.create.profile.is_user == true) {
                                    if (this.state.lop == undefined || this.state.lop == "") {
                                        return (
                                            <div className={" col-lg-12 col-md-4 col-sm-6 col-6 "}>
                                                {/*{console.log(this.state.tt)}*/}

                                                <CalendarStyle1>

                                                    <FullCalendar
                                                        ref={this.state.calendar}
                                                        select={this.handleDateSelect}
                                                        plugins={[timeGridPlugin, interactionPlugin, dayGridPlugin]}

                                                        initialDate={today}




                                                        height='100%'

                                                        locale={esLocale}
                                                        eventDragStart={(arg) => {
                                                            console.log(arg);
                                                        }}


                                                        startEditable={true}
                                                        durationEditable={false}
                                                        resourceEditable={true}
                                                        editable={false}
                                                        selectable={true}
                                                        selectMirror={true}
                                                        eventContent={this.renderEventContent}
                                                        dayHeaderContent={this.renderDayReaderContent}




                                                        allDaySlot={false}
                                                        slotDuration="00:15:00"
                                                        eventTimeFormat={dateFormat}
                                                        slotLabelFormat={dateFormat}
                                                        slotLabelClassNames={"calendar-hour"}
                                                        eventOverlap={(stillEvent, movingEvent) => {
                                                            return stillEvent.groupId == movingEvent.groupId;
                                                        }}
                                                    />


                                                </CalendarStyle1>

                                            </div>
                                        )
                                    } else {
                                        return (
                                            <div className={" col-lg-12 col-md-4 col-sm-6 col-6 "}>

                                                {console.log(moment(this.state.create.profile.get_student_scheduller_MIN * 1000).format("HH:MM:SS"))}

                                                <CalendarStyle1>

                                                    <FullCalendar
                                                        ref={this.state.calendar}
                                                        select={this.handleDateSelect}
                                                        plugins={[timeGridPlugin, interactionPlugin, dayGridPlugin]}

                                                        initialDate={today}
                                                        scrollTime={"08:00:00"}

                                                        events={this.state.lop


                                                        }



                                                        locale={esLocale}
                                                        eventDragStart={(arg) => {
                                                            console.log(arg);
                                                        }}

                                                        // dateClick={this.handleDateClick}
                                                        startEditable={true}
                                                        durationEditable={false}
                                                        resourceEditable={true}
                                                        editable={false}
                                                        selectable={true}
                                                        selectMirror={true}
                                                        eventContent={this.renderEventContent22}
                                                        dayHeaderContent={this.renderDayReaderContent}


                                                        allDaySlot={false}
                                                        slotDuration="00:15:00"
                                                        eventTimeFormat={dateFormat}
                                                        slotLabelFormat={dateFormat}
                                                        slotLabelClassNames={"calendar-hour"}
                                                        eventOverlap={(stillEvent, movingEvent) => {
                                                            return stillEvent.groupId == movingEvent.groupId;
                                                        }}
                                                    />


                                                </CalendarStyle1>

                                            </div>
                                        )
                                    }

                                } else {
                                    if (this.state.week == false) {
                                        return (
                                            <div className={" col-lg-12 col-md-4 col-sm-6 col-6 "}>

                                                <CalendarStyle>
                                                    {(() => {
                                                        if (this.state.edit == true) {

                                                            if (this.state.loadCalendar == false) {
                                                                return (<div>

                                                                    <div className={"loadlpreload"}>
                                                                        <ImpulseSpinner className={"preloaders "} size={40} frontColor="#9181F3" backColor={"#9181F3"} />  </div>
                                                                    <div className={"zaglnow"}>
                                                                    </div>


                                                                    <FullCalendar
                                                                        ref={this.state.calendar}
                                                                        select={this.handleDateSelect}
                                                                        plugins={[timeGridPlugin, interactionPlugin]}
                                                                        initialView="timeGridWeek"
                                                                        initialDate={today}
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
                                                                        eventContent={this.renderEventContent55}
                                                                        dayHeaderContent={this.renderDayReaderContent}

                                                                        eventClick={
                                                                            this.handleDateClick
                                                                        }

                                                                        draggable={false}
                                                                        allDaySlot={false}
                                                                        slotDuration="00:30:00"

                                                                        eventOverlap={(stillEvent, movingEvent) => {
                                                                            return stillEvent.groupId == movingEvent.groupId;
                                                                        }}
                                                                    />

                                                                </div>)
                                                            } else {
                                                                return (
                                                                    <FullCalendar
                                                                        ref={this.state.calendar}
                                                                        select={this.handleDateSelect}
                                                                        plugins={[timeGridPlugin, interactionPlugin]}
                                                                        initialView="timeGridWeek"
                                                                        initialDate={today}
                                                                        scrollTime={today.getHours() + ":00"}
                                                                        headerToolbar={false}



                                                                        events=
                                                                        {this.state.newline.teacher_scheduller.map((data, idx) => (

                                                                            {

                                                                                start: moment(data.start_at * 1000).format(),
                                                                                end: moment(data.end_till * 1000).format(),
                                                                                timetextnew: moment(data.start_at * 1000).format(),
                                                                                backgroundColor: "#3788d800",

                                                                                is_active: data.is_active
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
                                                                        eventContent={this.renderEventContent55}
                                                                        dayHeaderContent={this.renderDayReaderContent}

                                                                        eventClick={
                                                                            this.handleDateClick
                                                                        }

                                                                        draggable={false}
                                                                        allDaySlot={false}
                                                                        slotDuration="00:30:00"

                                                                        eventOverlap={(stillEvent, movingEvent) => {
                                                                            return stillEvent.groupId == movingEvent.groupId;
                                                                        }}
                                                                    />
                                                                )
                                                            }

                                                        } else if (this.state.editGr == true) {
                                                            if (this.state.loadCalendar == false) {
                                                                return (<div>

                                                                    <div className={"loadlpreload"}>
                                                                        <ImpulseSpinner className={"preloaders "} size={40} frontColor="#9181F3" backColor={"#9181F3"} />  </div>
                                                                    <div className={"zaglnow"}>
                                                                    </div>


                                                                    <FullCalendar
                                                                        ref={this.state.calendar}
                                                                        select={this.handleDateSelect}
                                                                        plugins={[timeGridPlugin, interactionPlugin]}
                                                                        initialView="timeGridWeek"
                                                                        initialDate={today}
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
                                                                        eventContent={this.renderEventContent55}
                                                                        dayHeaderContent={this.renderDayReaderContent}

                                                                        eventClick={
                                                                            this.handleDateClick
                                                                        }

                                                                        draggable={false}
                                                                        allDaySlot={false}
                                                                        slotDuration="00:30:00"

                                                                        eventOverlap={(stillEvent, movingEvent) => {
                                                                            return stillEvent.groupId == movingEvent.groupId;
                                                                        }}
                                                                    />

                                                                </div>)
                                                            } else if (this.state.gropupid == 0 || this.state.gropupid == "") {
                                                                return (
                                                                    <div className={"wrap top_lklkkk"}>



                                                                        <div className={"whta_hist"}>
                                                                            <div className={"main_no_pa "}>
                                                                                <div className={"row row_line_sty"}>









                                                                                    <div className={"line_lool"}></div>
                                                                                    <div className={"col-lg-12 col-md-4 col-sm-6 col-6 pddsss"}>

                                                                                        <div className={"container  main_no_pa cont_dfdf"}>
                                                                                            <div className={"row row_line_sty mff_row"}>

                                                                                                <div className={" col-lg-3 col-md-4 col-sm-6 col-6 "}>


                                                                                                    <p className={"mg_pop sers_tet"}>Начало группы</p>


                                                                                                </div>
                                                                                                <div className={" col-lg-2 col-md-4 col-sm-6 col-6 "}>


                                                                                                    <p className={"mg_pop sers_tet"}>Кол-во мест</p>


                                                                                                </div>

                                                                                                <div className={" col-lg-2 col-md-4 col-sm-6 col-6 "}>


                                                                                                    <p className={"mg_pop sers_tet"}>Время урока</p>


                                                                                                </div>


                                                                                                <div className={" col-lg-2 col-md-4 col-sm-6 col-6 "}>


                                                                                                    <p className={"mg_pop sers_tet"}>Описание</p>


                                                                                                </div>
                                                                                            </div>


                                                                                        </div>


                                                                                    </div>
                                                                                    <div className={"line_lool"}></div>


                                                                                    <div className='col-lg-12 col-md-4 col-sm-6 col-6 pddsss'>

                                                                                        {this.state.pag.all_groups.map((data, idx) => (
                                                                                            <div className={"wd_muo_uroks"}>


                                                                                                <div className={" col-lg-12 col-md-4 col-sm-6 col-6 pddsss"}>



                                                                                                    <div className={"container main_no_pa cont_dfdf"}>
                                                                                                        <div className={"row row_line_sty mff_row"}>

                                                                                                            <div className={" col-lg-3 col-md-4 col-sm-6 col-6 "}>


                                                                                                                <p className={"mg_pop"}>{moment(data.group_start_date_timestamp * 1000).format("dddd, DD MMMM, В HH:mm")}</p>


                                                                                                            </div>
                                                                                                            <div className={" col-lg-2 col-md-4 col-sm-6 col-6 "}>


                                                                                                                <p className={"mg_pop"}>{data.current_students_count}/{data.max_students_count}</p>


                                                                                                            </div>
                                                                                                            <div

                                                                                                                className={" col-lg-2 ltfetrers1 col-md-4 col-sm-6 col-6 txt_rg_cen"}>


                                                                                                                <div className={"mg_pop"}>{data.max_lesson_duration} мин</div>


                                                                                                            </div>





                                                                                                            <div
                                                                                                                className={" ltfetrers1 col-lg-2 col-md-4 col-sm-6 col-6 txt_rg"}>


                                                                                                                <p className={"mg_pop"}>{data.group_description}
                                                                                                                </p>


                                                                                                            </div>
                                                                                                            {
                                                                                                            <div className={" ltfetrers1 col-lg-2 col-md-4 col-sm-6 col-6 txt_lff"}>

                                                                                                                {(() => {
                                                                                                                    if (data.current_students_count == 0) {
                                                                                                                        return (
                                                                                                                            <button className='btnediters'
                                                                                                                                onClick={() => this.edit({
                                                                                                                                    "id": data.id
                                                                                                                                })}
                                                                                                                            >Добавить урок</button>
                                                                                                                        )
                                                                                                                    } else {
                                                                                                                        return (
                                                                                                                            <button className='btnediters11'

                                                                                                                            >Добавить урок</button>
                                                                                                                        )
                                                                                                                    }
                                                                                                                })()}




                                                                                                            </div> }

                                                                                                           
                                                                                                        </div>

                                                                                                    </div>


                                                                                                    <div className={"line_lool"}></div>


                                                                                                </div>


                                                                                            </div>



                                                                                        ))}


                                                                                    </div>









                                                                                </div> </div></div></div>
                                                                )
                                                            } else if (this.state.gropupid > 0) {
                                                                return (


                                                                    <div className={" col-lg-12 col-md-12 col-sm-12 col-12"}>


                                                                        <div className={"groupesmonther_calendas"}>



                                                                            {(() => {

                                                                                if (this.state.today <= 0) {
                                                                                    return (
                                                                                        <div >


                                                                                            <Link className={"next_calac"} onClick={this.next4}>{this.state.lang.next.text}</Link>
                                                                                        </div>
                                                                                    )
                                                                                } else {
                                                                                    return (
                                                                                        <div>

                                                                                            <Link className={"prevs_calac"} onClick={this.back4}>{this.state.lang.back.text}</Link>
                                                                                            <Link className={"next_calac"} onClick={this.next4}>{this.state.lang.next.text}</Link>
                                                                                        </div>
                                                                                    )
                                                                                }

                                                                            })()}
                                                                        </div>

                                                                        <CalendarStyle>


                                                                            <FullCalendar
                                                                                ref={this.calendarRefs}
                                                                                select={this.handleDateSelect99}


                                                                                plugins={[timeGridPlugin, interactionPlugin, dayGridPlugin]}

                                                                                initialDate={moment(this.state.nems.teacher_scheduller[0].end_till * 1000).format("YYYY-MM-DD")}

                                                                                // slotMinTime = {this.state.min}
                                                                                // slotMaxTime = {this.state.max}
                                                                                initialView="timeGridWeek"
                                                                                headerToolbar={false}

                                                                                events=
                                                                                {this.state.nems.teacher_scheduller.map((data, idx) => (

                                                                                    {

                                                                                        start: moment(data.start_at * 1000).format(),
                                                                                        end: moment(data.end_till * 1000).format(),
                                                                                        timetextnew: moment(data.start_at * 1000).format(),
                                                                                        backgroundColor: "#3788d800",
                                                                                        color: '#257e4a',
                                                                                        groupId: data.is_group,
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

                                                                                eventContent={this.renderEventContent88}
                                                                                dayHeaderContent={this.renderDayReaderContent00}

                                                                                eventClick={
                                                                                    this.handleDateClick
                                                                                }


                                                                                allDaySlot={false}
                                                                                slotDuration="00:30:00"

                                                                            />


                                                                        </CalendarStyle>

                                                                    </div>













                                                                )
                                                            }

                                                        } else {

                                                            return (
                                                                <FullCalendar
                                                                    ref={this.state.calendar}
                                                                    select={this.handleDateSelect}
                                                                    plugins={[timeGridPlugin, interactionPlugin]}
                                                                    initialView="timeGridWeek"
                                                                    initialDate={today}
                                                                    scrollTime={today.getHours() + ":00"}
                                                                    headerToolbar={false}

                                                                    events=
                                                                    {this.state.newline.teacher_scheduller.map((data, idx) => (

                                                                        {

                                                                            start: moment(data.start_at * 1000).format(),
                                                                            end: moment(data.end_till * 1000).format(),
                                                                            timetextnew: moment(data.start_at * 1000).format(),
                                                                            backgroundColor: "#3788d800",
                                                                            is_active: data.is_active,
                                                                            groups: data.is_group

                                                                        }
                                                                    ))


                                                                    }


                                                                    locale={esLocale}

                                                                    eventDragStart={(arg) => {
                                                                        console.log(arg);
                                                                    }}


                                                                    startEditable={false}
                                                                    durationEditable={false}
                                                                    resourceEditable={true}
                                                                    editable={false}
                                                                    selectable={false}
                                                                    selectMirror={false}
                                                                    eventContent={this.renderEventContent}
                                                                    dayHeaderContent={this.renderDayReaderContent}



                                                                    allDaySlot={false}
                                                                    slotDuration="00:30:00"
                                                                    eventTimeFormat={dateFormat}
                                                                    slotLabelFormat={dateFormat}

                                                                    eventOverlap={(stillEvent, movingEvent) => {
                                                                        return stillEvent.groupId == movingEvent.groupId;
                                                                    }}
                                                                />
                                                            )
                                                        }

                                                    })()}





                                                </CalendarStyle>
                                                <div className={"gr_ne"}>
                                                {(() => {
                                                if(this.state.editGr == true){
                                                    {
                                                        return(
                                                            <Link onClick={this.backss} className={"gppp_nee "}> {this.state.lang.backkkkkkkkk.text}</Link>
                                                        )
                                                    }
                                                        }else{
                                                            return(
                                                                <Link onClick={this.next} className={"gppp_nee "}> {this.state.lang.addweekdays.text} <img alt=""
                                                                className={"mini_next"} src={mini_next} /></Link>
                                                            )
                                                        }
                                                            })()}
                                             
                                                </div>
                                            </div>
                                        )
                                    } else {

                                        return (
                                            <div className={" col-lg-12 col-md-4 col-sm-6 col-6 "}>


                                                {console.log(this.state.today)}
                                                <div className={"gr_top_cal_btns"}>
                                                    <div >



                                                    </div>

                                                    {(() => {

                                                        if (this.state.today <= 0) {
                                                            return (
                                                                <div >
                                                                    <Link className={"next_calac"} onClick={this.handleToggleModal3}>{this.state.lang.addweekdayaallways.text}</Link>


                                                                    <Link className={"next_calac"} onClick={this.next1}>{this.state.lang.next.text}</Link>
                                                                </div>
                                                            )
                                                        } else {
                                                            return (
                                                                <div>
                                                                    <Link className={"next_calac"} onClick={this.handleToggleModal3}>{this.state.lang.addweekdayaallways.text}</Link>
                                                                    <Link className={"prevs_calac"} onClick={this.back1}>{this.state.lang.back.text}</Link>
                                                                    <Link className={"next_calac"} onClick={this.next1}>{this.state.lang.next.text}</Link>
                                                                </div>
                                                            )
                                                        }

                                                    })()}
                                                </div>
                                                <div className={"padsasd123"}></div>
                                                {(() => {
                                                    if (this.state.edit == true) {
                                                        if (this.state.loadCalendar == false) {
                                                            return (
                                                                <div>
                                                                    <div className={"loadlpreload"}>
                                                                        <ImpulseSpinner className={"preloaders "} size={40} frontColor="#9181F3" backColor={"#9181F3"} />  </div>
                                                                    <div className={"zaglnow zaglnow1"}>
                                                                    </div>
                                                                    <CalendarStyle>

                                                                        <FullCalendar
                                                                            ref={this.calendarRef}
                                                                            select={this.handleDateSelect4}
                                                                            plugins={[timeGridPlugin, interactionPlugin]}
                                                                            initialView="timeGridWeek"
                                                                            initialDate={moment(this.state.newline.teacher_scheduller[0].end_till * 1000).format("YYYY-MM-DD")}
                                                                            scrollTime={today.getHours() + ":00"}
                                                                            headerToolbar={false}



                                                                            events=
                                                                            {this.state.newline.teacher_scheduller.map((data, idx) => (

                                                                                {

                                                                                    start: moment(data.start_at * 1000).format(),
                                                                                    end: moment(data.end_till * 1000).format(),
                                                                                    timetextnew: moment(data.start_at * 1000).format(),
                                                                                    backgroundColor: "#3788d800",
                                                                                    is_weekday: data.is_weekday,
                                                                                    is_active: data.is_active
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
                                                                            eventContent={this.renderEventContent5}
                                                                            dayHeaderContent={this.renderDayReaderContent65}

                                                                            eventClick={
                                                                                this.handleDateClick
                                                                            }

                                                                            draggable={false}
                                                                            allDaySlot={false}
                                                                            slotDuration="00:30:00"

                                                                            eventOverlap={(stillEvent, movingEvent) => {
                                                                                return stillEvent.groupId == movingEvent.groupId;
                                                                            }}
                                                                        />

                                                                    </CalendarStyle>
                                                                </div>
                                                            )
                                                        } else {
                                                            return (
                                                                <CalendarStyle>

                                                                    <FullCalendar
                                                                        ref={this.calendarRef}
                                                                        select={this.handleDateSelect4}
                                                                        plugins={[timeGridPlugin, interactionPlugin]}
                                                                        initialView="timeGridWeek"
                                                                        initialDate={moment(this.state.newline.teacher_scheduller[0].end_till * 1000).format("YYYY-MM-DD")}
                                                                        scrollTime={today.getHours() + ":00"}
                                                                        headerToolbar={false}


                                                                        events=
                                                                        {this.state.newline.teacher_scheduller.map((data, idx) => (

                                                                            {

                                                                                start: moment(data.start_at * 1000).format(),
                                                                                end: moment(data.end_till * 1000).format(),
                                                                                timetextnew: moment(data.start_at * 1000).format(),
                                                                                backgroundColor: "#3788d800",
                                                                                is_weekday: data.is_weekday,
                                                                                is_active: data.is_active
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
                                                                        eventContent={this.renderEventContent5}
                                                                        dayHeaderContent={this.renderDayReaderContent65}

                                                                        eventClick={
                                                                            this.handleDateClick
                                                                        }

                                                                        draggable={false}
                                                                        allDaySlot={false}
                                                                        slotDuration="00:30:00"

                                                                        eventOverlap={(stillEvent, movingEvent) => {
                                                                            return stillEvent.groupId == movingEvent.groupId;
                                                                        }}
                                                                    />

                                                                </CalendarStyle>

                                                            )

                                                        }


                                                    } else {
                                                        if (this.state.loadCalendar == false) {


                                                            return (
                                                                <div>
                                                                    <div className={"loadlpreload"}>
                                                                        <ImpulseSpinner className={"preloaders "} size={40} frontColor="#9181F3" backColor={"#9181F3"} />  </div>
                                                                    <div className={"zaglnow1 zaglnow"}>
                                                                    </div>
                                                                    <CalendarStyle>

                                                                        <FullCalendar
                                                                            ref={this.calendarRef}
                                                                            select={this.handleDateSelect4}
                                                                            plugins={[timeGridPlugin, interactionPlugin, dayGridPlugin]}
                                                                            initialView="timeGridWeek"

                                                                            scrollTime={today.getHours() + ":00"}
                                                                            headerToolbar={false}




                                                                            locale={esLocale}
                                                                            eventDragStart={(arg) => {
                                                                                console.log(arg);
                                                                            }}


                                                                            startEditable={false}
                                                                            durationEditable={false}
                                                                            resourceEditable={true}
                                                                            editable={false}
                                                                            selectable={false}
                                                                            renderEvent={this.rend}
                                                                            selectMirror={true}
                                                                            eventContent={this.renderEventContent5}
                                                                            dayHeaderContent={this.renderDayReaderContent}
                                                                            // eventClick={(args) => {
                                                                            //     this.setState({dialogOpen: true});
                                                                            // }}
                                                                            eventClick={
                                                                                this.handleDateClick
                                                                            }


                                                                            allDaySlot={false}
                                                                            slotDuration="00:30:00"

                                                                            slotLabelClassNames={"calendar-hour"}

                                                                        />


                                                                    </CalendarStyle>


                                                                </div>
                                                            )

                                                        } else {

                                                            return (
                                                                <CalendarStyle>


                                                                    <FullCalendar
                                                                        ref={this.calendarRef}
                                                                        select={this.handleDateSelect4}
                                                                        plugins={[timeGridPlugin, interactionPlugin, dayGridPlugin]}
                                                                        initialView="timeGridWeek"
                                                                        initialDate={moment(this.state.newline.teacher_scheduller[0].end_till * 1000).format("YYYY-MM-DD")}
                                                                        scrollTime={today.getHours() + ":00"}
                                                                        headerToolbar={false}





                                                                        events=
                                                                        {this.state.newline.teacher_scheduller.map((data, idx) => (

                                                                            {

                                                                                start: moment(data.start_at * 1000).format(),
                                                                                end: moment(data.end_till * 1000).format(),
                                                                                timetextnew: moment(data.start_at * 1000).format(),
                                                                                backgroundColor: "#3788d800",
                                                                                is_weekday: data.is_weekday,
                                                                                is_active: data.is_active


                                                                            }
                                                                        ))
                                                                        }
                                                                        locale={esLocale}
                                                                        eventDragStart={(arg) => {
                                                                            console.log(arg);
                                                                        }}
                                                                        startEditable={false}
                                                                        durationEditable={false}
                                                                        resourceEditable={true}
                                                                        editable={false}
                                                                        selectable={false}
                                                                        renderEvent={this.rend}
                                                                        selectMirror={true}
                                                                        eventContent={this.renderEventContent5}
                                                                        dayHeaderContent={this.renderDayReaderContent65}

                                                                        eventClick={
                                                                            this.handleDateClick
                                                                        }


                                                                        allDaySlot={false}
                                                                        slotDuration="00:30:00"

                                                                        slotLabelClassNames={"calendar-hour"}

                                                                    />


                                                                </CalendarStyle>

                                                            )
                                                        }


                                                    }
                                                })()}






                                            </div>
                                        )

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
