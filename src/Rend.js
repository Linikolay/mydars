import React, { Component } from "react";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { CalendarStyle } from "./Styled";
import dayGridPlugin from "@fullcalendar/daygrid";
import InlineDialog from "@atlaskit/inline-dialog";
import mini_next from "./images/mini_next.svg"
import esLocale from "@fullcalendar/core/locales/ru";
import 'react-notifications/lib/notifications.css';
import { Link } from 'react-router-dom';
import moment from 'moment'

import { ImpulseSpinner } from "react-spinners-kit";
import { NotificationContainer, NotificationManager } from 'react-notifications';



const today = new Date();


console.log(new Date(today))
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

export default class Rend extends Component<{}, State> {
    calendarRef = React.createRef()

    state = {
        dialogOpen: false,
        calendar: React.createRef(),
        create: "",
        isLoaded: false,
        tt: [],
        week: false,
        tech: "",
        lop: "",
        lang:"",
        langLoad: false,
        maintodat: "",
        edit: false,
        tech8: "",
        events: [
            {
                title: "Leo's frontend day 2",
                start: yday,
                end: new Date(yday).setHours(tomorrow.getHours() + 1),
                id: "1",
                issueId: "ITSM-1",
                color: "#8777D9",
                borderColor: "#8777D9",


                durationEditable: false,
                editable: false
            },
            {
                title: "Leo's frontend day",
                start: tomorrow,
                end: new Date(tomorrow).setHours(tomorrow.getHours() + 1),
                id: "2",
                issueId: "ITSM-2",
                color: "#00C7E6",
                borderColor: "#00C7E6"
            },
            {
                title: "Freeze window",
                groupId: "freeze",
                initialView: 'timeGridWeek',
                start: new Date(today).setHours(today.getHours() + 4),
                end: today,

                display: 'background',

            }
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
        }

        this.next1 = this.next1.bind(this);

        this.back1 = this.back1.bind(this);
    }


 

    back1(){
        const main = this.props.match.params
        this.setState({
            // loadCalendar: false
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
        console.log(test1/1000 - 1799)

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
                "start_at": test/1000,            
                "end_till": test1/1000 - 1799,
          
              },
              "teacher_id": main.id
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
next1(){
    const main = this.props.match.params
    this.setState({
        loadCalendar: false
    })
    let calendarApi = this.calendarRef.current.getApi()
    console.log(main)
 
    const start = moment().add(this.state.today + 7, 'days').startOf('week').format();
    const end = moment().add(this.state.today+7, 'days').endOf('week').format();
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


            const mmm = {
                "time_period": {
                  "start_at": test / 1000,            
                  "end_till": test1 / 1000 - 1799,
                  
                },
                "teacher_id": main.id
              }

              console.log(mmm)
            console.log(test)
            console.log(test1/1000 - 1799)
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
                  "teacher_id": main.id
                })
    
            })
    
    
                .then(res => res.json())
    
                .then((data) => {
                    console.log(data)
                    if(data.teacher_scheduller.length > 0){
                        this.setState({
                            loadCalendar: true,
            today: this.state.today + 7,
                            newline: data,
                   
                
                        })
                        calendarApi.next()
                    }
               
                   
                })
             
            
}

    toggleDialog = () => this.setState({ dialogOpen: !this.state.dialogOpen });

    renderDayReaderContent = (info) => {
        // console.log(info)
        var weekday = new Array(7);
        weekday[1] = "пн";
        weekday[2] = "вт";
        weekday[3] = "ср";
        weekday[4] = "чт";
        weekday[5] = "пт";
        weekday[6] = "сб";
        weekday[0] = "вс";

        // console.log(weekday)
        // const dateObject = new Date(new Date(tomorrow).setHours(tomorrow.getHours() + 2 ))
        // console.log(dateObject)
        return (
            <div className={info.isToday ? "day today" : "day"} tabIndex="5">
                {/*{console.log(weekday)}*/}
                <div className={info.isToday ? "day today" : "mmooday"}>{weekday[info.date.getDay()]}</div>
                <div className="day-number">{info.date.getDate()}</div>
            </div>
        );
    };

    renderEventContent = (eventInfo) => {

        const content = (
            <div>
                <p>{eventInfo.event.title}</p>
            </div>
        );
        if (eventInfo.isMirror) {
            // console.log(eventInfo.event.start);
        }
        // console.log(eventInfo)

            if(eventInfo.event._def.extendedProps.is_active==true && eventInfo.event._def.extendedProps.redy_to_lesson==true){
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
                            <div className={"event_text_types 222"}> {moment( eventInfo.event._def.extendedProps.timetextnew).format('LT')}</div>
                            {/* <div>{eventInfo.event.extendedProps.issueId}</div>
                            <div>{eventInfo.event.title}</div>
                            <div>{eventInfo.event._def.extendedProps.student__name}</div> */}
                        </div>
                    </InlineDialog>
                );
            }else if(eventInfo.event._def.extendedProps.is_active==null || eventInfo.event._def.extendedProps.is_active == false ){
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
                            <div className={"dsfjsklgjsdlk"}>{moment( eventInfo.event._def.extendedProps.timetextnew).format('LT')}</div>
                            {/* <div>{eventInfo.event.extendedProps.issueId}</div>
                            <div>{eventInfo.event.title}</div>
                            <div>{eventInfo.event._def.extendedProps.student__name}</div> */}
                        </div>
                    </InlineDialog>
                );
            }else if(eventInfo.event._def.extendedProps.is_active==true && eventInfo.event._def.extendedProps.redy_to_lesson == false ){
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
                            <div className={"dsfjsklgjsdlk"}>{moment( eventInfo.event._def.extendedProps.timetextnew).format('LT')}</div>
                            {/* <div>{eventInfo.event.extendedProps.issueId}</div>
                            <div>{eventInfo.event.title}</div>
                            <div>{eventInfo.event._def.extendedProps.student__name}</div> */}
                        </div>
                    </InlineDialog>
                );
            }else if(eventInfo.event._def.extendedProps.is_active==true && eventInfo.event._def.extendedProps.redy_to_lesson == false && eventInfo.event._def.extendedProps.lesson_is_paid == true ){
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
                            <div className={"dsfjsklgjsdlk"}>{moment( eventInfo.event._def.extendedProps.timetextnew).format('LT')}</div>
                            {/* <div>{eventInfo.event.extendedProps.issueId}</div>
                            <div>{eventInfo.event.title}</div>
                            <div>{eventInfo.event._def.extendedProps.student__name}</div> */}
                        </div>
                    </InlineDialog>
                );
            }
        
        
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
                // console.log(data):


                this.setState({
                    lang: data.translates,
                    langLoad: true
                })

            }
            )



        const main = this.props.match.params
        this.setState({
            loadCalendar: false
        })
        // let calendarApi = this.calendarRef.current.getApi()
        console.log(main)
     
        const start = moment().add(this.state.today, 'days').startOf('week').format();
        const end = moment().add(this.state.today+7, 'days').endOf('week').format();
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
                console.log(test1/1000 - 1799)
     








        // const ter = moment(1617614941000).format('YYYY-MM-DD');
        // const test = new Date(ter)
        // const id = this.props.match.params
        // console.log(id)
      
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
                          "start_at": test/1000,            
                          "end_till": test1/1000 - 1799,
                          
                        },
                        "teacher_id": main.id
                      })
        
                })
        
        
                    .then(res => res.json())
        
                    .then((data) => {
                        console.log(data)
           
                   this.setState({
                       newline: data,
                       loadMark: true,
                       loadCalendar: true
                   })
                       
                    })

                console.log(data)
                if (data.profile.is_user == true) {
         


                    this.setState({
                        create: data,
                        isLoaded: true,
                        maintodat: test,
                        loadCalendar: true
                        // lop: clonePhoneNumbers2
                    })




                } else {
            
                    // console.log(ar8)
                    // this.setState({ tech: "", })
                    this.setState({
                        // tech: ar,
                        isLoaded: true,
                        maintodat: test,
                        create: data,
                        loadCalendar: true
                        // tech8: ar8,
                    })
                }


                // console.log(ar8)


            }
            )
    }


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
        console.log(selectInfo);
        // console.log(test1 - test)
this.setState({
    loadCalendar: false
})
        // const dur = this.state.create.profile.teacher_lessons[0].lesson_duration


        // console.log(selectInfo.startStr)
        const id = this.props.match.params
  

        fetch('https://api.mydars.uz/api/change_lesson_date/', {
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
                
                    "teacher_lesson_id":id.url,
                    "start_at": moment(test).format(),
         
            


            })

        })


            .then(res => res.json())

            .then((data) => {
                console.log(data)
if(data.error){
    this.setState({
        loadCalendar: true,
        
    })
    NotificationManager.error(data.reason, "Ошибка", 3000, () => {
                            alert('callback');
                        });
}else{
    this.setState({
        loadCalendar: true,
        newline: data
    })
    NotificationManager.success('Перенос урока', 'Успешно сформирован');
    window.location.replace("/lesson");
}

            })

        }

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
                    {/*{console.log(eventInfo)}*/}
                    <div>{eventInfo.timeText}</div>
                    <div>{eventInfo.event.extendedProps.issueId}</div>
                    <div>{eventInfo.event.title}</div>
                </div>
            </InlineDialog>
        );
    };




    handleDateClick = (arg) => { // bind with an arrow function
        console.log(arg)
        // arg.event.remove();
    }

    render() {
        // console.log(this.state.maintodat)

        const { isLoaded, loadMark, loadCalendar, langLoad} = this.state

        if (!isLoaded || !loadMark || !loadCalendar || !langLoad) {
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
                <div className={"wrap"}>
                    
                    <NotificationContainer />
                    <div className={"container"}>
                        <div className={"row"}>
                            <div className={" col-lg-12 col-md-12 col-sm-12 col-12 "}>
                                <div className={"container"}>
                                    <div className={"row"}>

                                        <div className={" col-lg-6 col-md-4 col-sm-6 col-6 title_cal_obz_12"}>
                                            <div className="">
                                            {this.state.lang.mycalendares123.text}
</div>
                                        </div>
                                        <div className={" col-lg-6 col-md-4 col-sm-6 col-6 title_cal_obz_13"}>

                                        {(() => {  

                                                                if(this.state.today <= 0){
                                                                return(
                                                                    <div className={"gruppa_main_controllers_calendares"} >
                                                                        {/* <Link className={"next_calac"} onClick={this.handleToggleModal3}>Добавить выходной на целый день</Link> */}
                                                                
                                                                    
                                                                                                                <Link className={"next_calac"} onClick={this.next1}>{this.state.lang.next.text}</Link>
                                                                    </div>
                                                                )
                                                                }else {
                                                                return(
                                                                    <div className={"gruppa_main_controllers_calendares"}>
                                                                        {/* <Link className={"next_calac"} onClick={this.handleToggleModal3}>Добавить выходной на целый день</Link> */}
                                                                    <Link className={"prevs_calac"} onClick={this.back1}>{this.state.lang.back.text}</Link>
                                                                                                        <Link className={"next_calac"} onClick={this.next1}>{this.state.lang.next.text}</Link>
                                                                </div>
                                                                )
}

                                                         })()}
                                        </div>
                                    </div></div>

                            </div>
                            {(() => {
                          
                                if (this.state.create.profile.is_user == true) {
                                    if(this.state.loadCalendar == false){
                                        return (
                                            <div className={" col-lg-12 col-md-4 col-sm-6 col-6 "}>
                                        <div className={"loadlpreload"}>       
                                                <ImpulseSpinner className={"preloaders "} size={40} frontColor="#9181F3" backColor={"#9181F3"} />  </div>                                                  
                                                <div className={"zaglnow"}>
                                                </div>
                                                <CalendarStyle>
    
                                              
                                                                <FullCalendar
                                                                   ref={this.calendarRef}
                                                                    select={this.handleDateSelect}
                                                                    plugins={[timeGridPlugin, interactionPlugin, dayGridPlugin]}
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
                                                                      color: '#257e4a',
                                                                      is_active: data.is_active,
                                                                      redy_to_lesson: data.redy_to_lesson,
                                                                      lesson_is_paid: data.lesson_is_paid
                                                                        }
                                                                    ))
                
                
                                                                    }
            
                                                                    initialView='timeGridFourDay'
                                                                   
                                                                    headerToolbar={false}
                                                                    views={{
                                                                        timeGridFourDay: {
                                                                            type: 'timeGrid',
                                                                            duration: { days: 7 },
                                                                            buttonText: '7 day'
                                                                        }
                                                                    }}
    
    
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
                                                                    slotDuration="00:30:00"
                                                              
                                                                    slotLabelClassNames={"calendar-hour"}
                                                                    eventOverlap={(stillEvent, movingEvent) => {
                                                                        return stillEvent.groupId == movingEvent.groupId;
                                                                    }}
                                                                />
                                                            
    
    
    
                                                </CalendarStyle>
                                           
                                            </div>
                                        )
                                    }else{

                                        return (
                                            <div className={" col-lg-12 col-md-4 col-sm-6 col-6 "}>
                                     
                                                <CalendarStyle>
    
                                              
                                                                <FullCalendar
                                                                   ref={this.calendarRef}
                                                                    select={this.handleDateSelect}
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
                                                                      color: '#257e4a',
                                                                      is_active: data.is_active,
                                                                      redy_to_lesson: data.redy_to_lesson,
                                                                      lesson_is_paid: data.lesson_is_paid
                                                                        }
                                                                    ))
                
                
                                                                    }
            
                                                                    initialView='timeGridFourDay'
                                                                   
                                                                    headerToolbar={false}
                                                                    views={{
                                                                        timeGridFourDay: {
                                                                            type: 'timeGrid',
                                                                            duration: { days: 7 },
                                                                            buttonText: '7 day'
                                                                        }
                                                                    }}
    
    
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
                                                                    slotDuration="00:30:00"
                                                              
                                                                    slotLabelClassNames={"calendar-hour"}
                                                                    eventOverlap={(stillEvent, movingEvent) => {
                                                                        return stillEvent.groupId == movingEvent.groupId;
                                                                    }}
                                                                />
                                                            
    
    
    
                                                </CalendarStyle>
                                               
                                            </div>
                                        )
                                    }
                                }else{
                                    if(this.state.loadCalendar == false){
                                        return (
                                            <div className={" col-lg-12 col-md-4 col-sm-6 col-6 "}>
                                        <div className={"loadlpreload"}>       
                                                <ImpulseSpinner className={"preloaders "} size={40} frontColor="#9181F3" backColor={"#9181F3"} />  </div>                                                  
                                                <div className={"zaglnow"}>
                                                </div>
                                                <CalendarStyle>
    
                                              
                                                                <FullCalendar
                                                                   ref={this.calendarRef}
                                                                    select={this.handleDateSelect}
                                                                    plugins={[timeGridPlugin, interactionPlugin, dayGridPlugin]}
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
                                                                      color: '#257e4a',
                                                                      is_active: data.is_active,
                                                                      redy_to_lesson: data.redy_to_lesson,
                                                                      lesson_is_paid: data.lesson_is_paid
                                                                        }
                                                                    ))
                
                
                                                                    }
            
                                                                    initialView='timeGridFourDay'
                                                                   
                                                                    headerToolbar={false}
                                                                    views={{
                                                                        timeGridFourDay: {
                                                                            type: 'timeGrid',
                                                                            duration: { days: 7 },
                                                                            buttonText: '7 day'
                                                                        }
                                                                    }}
    
    
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
                                                                    slotDuration="00:30:00"
                                                              
                                                                    slotLabelClassNames={"calendar-hour"}
                                                                    eventOverlap={(stillEvent, movingEvent) => {
                                                                        return stillEvent.groupId == movingEvent.groupId;
                                                                    }}
                                                                />
                                                            )
    
    
    
                                                </CalendarStyle>
                                                <div className={"gr_ne"}>
                                                    <div onClick={this.next} className={"gppp_nee"}> {this.state.lang.next.text} <img alt=""
                                                        className={"mini_next"} src={mini_next} /></div>
                                                </div>
                                            </div>
                                        )
                                    }else{

                                        return (
                                            <div className={" col-lg-12 col-md-4 col-sm-6 col-6 "}>
                                     
                                                <CalendarStyle>
    
                                              
                                                                <FullCalendar
                                                                   ref={this.calendarRef}
                                                                    select={this.handleDateSelect}
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
                                                                      color: '#257e4a',
                                                                      is_active: data.is_active,
                                                                      redy_to_lesson: data.redy_to_lesson,
                                                                      lesson_is_paid: data.lesson_is_paid
                                                                        }
                                                                    ))
                
                
                                                                    }
            
                                                                    initialView='timeGridFourDay'
                                                                   
                                                                    headerToolbar={false}
                                                                    views={{
                                                                        timeGridFourDay: {
                                                                            type: 'timeGrid',
                                                                            duration: { days: 7 },
                                                                            buttonText: '7 day'
                                                                        }
                                                                    }}
    
    
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
                                                                    slotDuration="00:30:00"
                                                              
                                                                    slotLabelClassNames={"calendar-hour"}
                                                                    eventOverlap={(stillEvent, movingEvent) => {
                                                                        return stillEvent.groupId == movingEvent.groupId;
                                                                    }}
                                                                />
                                                            
    
    
    
                                                </CalendarStyle>
                                                <div className={"gr_ne"}>
                                                    <div onClick={this.next} className={"gppp_nee"}> {this.state.lang.next.text} <img alt=""
                                                        className={"mini_next"} src={mini_next} /></div>
                                                </div>
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
