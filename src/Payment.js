import React, {Component} from "react";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import {CalendarStyle} from "./Styled";
import dayGridPlugin from "@fullcalendar/daygrid";
import InlineDialog from "@atlaskit/inline-dialog";
import esLocale from "@fullcalendar/core/locales/ru";
import 'react-notifications/lib/notifications.css';
import moment from 'moment'
import {Link} from 'react-router-dom';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import {RadioGroup, RadioButton, ReversedRadioButton} from 'react-radio-buttons';
import "bootstrap/dist/css/bootstrap.min.css";
import humo from './images/humo.svg'

import humo1 from './images/humo2.png'
import uzcard1 from './images/uzcard.png'

import queryString from 'query-string';
import uz from './images/uz.svg'

import master from './images/master.svg'

import visa from './images/visa.svg'

import apelsin from './images/apelsin.svg'
import payme from './images/payme.svg'
import ches from "./images/ches.svg";

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

export default class Payment extends Component<{}, State> {
    state = {
        dialogOpen: false,
        calendar: React.createRef(),
        create: "",
        isLoaded: false,
        tt: [],
        test: "",
        order: "",
        lang: "",
        langLoad: false,
        main: "",
        job: "", contract: "",
        is_paid: "false",
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
    };


    componentDidMount() {
        window.scrollTo(0, 0)
        let url = this.props.location.search;
        let params = queryString.parse(url);
        console.log(this.props)
        console.log(this.props.location.search)
        console.log(JSON.parse(sessionStorage.getItem("my")))
        var em = this.props.location.search
        var querystring = require('querystring');
        var strReverse = em.split('?');
        var q = querystring.parse(strReverse[1])
        console.log(q.payment_id)
        console.log(params)


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
              console.log(data)
                this.setState({
                    lang:data.translates,
                    langLoad: true,
                })



            }
            )


if(em.length > 0){
    console.log("sdklfjsdlkfjlsdkjflsdjfljsdfjsdlfjsldkjflkjsd")
  fetch('https://api.mydars.uz/api/payment/check/?order_id=' + params.order_id, {
            method: 'GET',
            headers: {
                // 'auth': 'ef899a6d-29d6-4130-8b59-3d95dfbcc9bd',
                'lang': localStorage.getItem('lang'),
                // 'Content-Type': 'application/json',
                'auth': "ef899a6d-29d6-4130-8b59-3d95dfbcc9bd",
                // 'lang': "uz"
                'token': localStorage.getItem('token'),


            },
            // body: JSON.stringify({
            //     "payment_id": params.payment_id
            //
            // })

        })


            .then(res => res.json())

            .then((data) => {
                    console.log(data)

                    this.setState({
                        is_paid: data.is_paid,
                        isLoaded: true,
                
                    })

                }
            )

}else{
    console.log("00000000000000000000000000000000000000000000000000")
    this.setState({
        create: JSON.parse(sessionStorage.getItem("my")),
        isLoaded: true
    })
}
      
      
    }

    handleJob = (event) => {
        console.log(event.target.value)
        this.setState({
            job: event.target.value
        });
    };

    render() {
        console.log(JSON.parse(sessionStorage.getItem("my")))

        const {isLoaded, langLoad} = this.state

        if (!isLoaded || !langLoad) {
            return (
                <p></p>
            )
        } else {

           if (this.state.is_paid == true){
               return (
                   <div className={"wrap"}>

                       <div className={"container "}>
                           <div className={"row"}>
                               <div className={" col-lg-12 col-md-4 col-sm-6 col-6 "}>
                                   <p className={"tittle_top_page_regst"}>{this.state.lang.buytext.text}</p>
                                   <div className={"first_reg col-lg-12 col-md-4 col-sm-6 col-6 "}>


                                       <div className={"row"}>
                                           <div className={"first_reg col-lg-12 col-md-4 col-sm-6 col-6 "}>
                                               <div className={"mouijjj container"}>

                                                   <img alt="" src={ches}/>


                                                   <p className={"main_chek_seess"}>{this.state.lang.sucbuymain.text}</p>
                                                   <p>{this.state.lang.listlessontstext.text} <a className={"main_url_succ"} href={"/lesson"}>{this.state.lang.chousecountlessontap.text}</a> </p>
                                               </div>
                                           </div>
                                       </div>





                                   </div>

                               </div>

                           </div>
                       </div>
                   </div>
               )
           }else {
               return (
                   <div className={"wrap wt_lkl"}>

                       <div className={"container main_container"}>
                           <div className={"row"}>
                               <div className={" col-lg-9 col-md-12 col-sm-6 col-6 "}>
                                   {/*{console.log(this.state.tt)}*/}
                                   <h2 className={"main_font_h"}>{this.state.lang.ordernewmine.text}</h2>
                                   <p>{this.state.lang.chousevicsamaster.text}</p>
                                   <form>
                                       <div className="">

                                           <div className={""}>
                                               <div className={"row"}>

                                                   <div className="col-12 col-sm-12 form-group">

                                                       <div className="d-flex">
                                                           <div className="w-100 mr-1 mis009">
                                                               <input
                                                                   className="custom-radio-control"
                                                                   id="type"
                                                                   name="type"
                                                                   type="radio"
                                                                   value="1"
                                                                   checked={this.state.job == "1"}
                                                                   onChange={this.handleJob}
                                                               />
                                                               <label htmlFor="type"
                                                                      className="mis009 custom-control-label">

                                                                   <span>{this.state.lang.cardonline.text}</span>
                                                                   <p className={"main_lop2222222"}>{this.state.lang.buycapital.text}</p>
                                                                   <div>
                                                                       <img alt="" className={"payclas"} src={humo1}/>
                                                                       <img alt="" className={"payclas"} src={uzcard1}/>
                                                                       {/* <img alt="" className={"payclas"} src={visa}/>
                                                                       <img alt="" className={"payclas"} src={master}/> */}
                                                                   </div>
                                                               </label>
                                                           </div>
                                                           <div className="w-100 ml-1 ">
                                                               <input
                                                                   className=" custom-radio-control"
                                                                   id="type2"
                                                                   name="type"
                                                                   type="radio"
                                                                   value="2"
                                                                   checked={this.state.job == "2"}
                                                                   onChange={this.handleJob}
                                                               />
                                                               <label htmlFor="type2"
                                                                      className="mis009 custom-control-label">
                                                                   <img alt="" className={"payclas"} src={payme}/>
                                                                   <p className={"main_lop2222222"}>{this.state.lang.payme.text}</p>
                                                               </label>
                                                           </div>

                                                           <div className="w-100 ml-1 ">
                                                               <input
                                                                   className="custom-radio-control"
                                                                   id="type3"
                                                                   name="type"
                                                                   type="radio"
                                                                   value="3"
                                                                   checked={this.state.job == "3"}
                                                                   onChange={this.handleJob}
                                                               />
                                                               <label htmlFor="type3"
                                                                      className="mis009 custom-control-label">
                                                                   <img alt="" className={"payclas"} src={apelsin}/>
                                                                   <p className={"main_lop2222222"}>{this.state.lang.apelsinchik.text}</p>
                                                               </label>
                                                           </div>

                                                       </div>
                                                   </div>

                                               </div>
                                           </div>


                                       </div>
                                   </form>
                                   <div className="pushup">
                                       {(() => {
                                           if (this.state.job == 1) {
                                               return (
                                                   <a className={" btn_optf"}
                                                      href={this.state.create.available_payments[0].payment_url}>
                                                       <div className={"ne_pa_data btn_optf"}>
                                                       {this.state.lang.oplatasicket.text}  <img alt="" className={"ne_pa"}/>
                                                       </div>
                                                   </a>
                                               )
                                           } else if (this.state.job == 2) {
                                               return (
                                                   <a className={" btn_optf"}
                                                      href={this.state.create.available_payments[1].payment_url}>
                                                       <div className={"ne_pa_data btn_optf"}>
                                                       {this.state.lang.oplatasicket.text}  <img alt="" className={"ne_pa"}/>
                                                       </div>
                                                   </a>
                                               )
                                           } else if (this.state.job == 3) {
                                               return (
                                                   <a className={" btn_optf"}
                                                      href={this.state.create.available_payments[2].payment_url}>
                                                       <div className={"ne_pa_data btn_optf"}>
                                                       {this.state.lang.oplatasicket.text}  <img alt="" className={"ne_pa"}/>
                                                       </div>
                                                   </a>
                                               )
                                           } else if (this.state.job == "") {
                                               return (
                                                   <p></p>
                                               )
                                           }
                                       })()}


                                   </div>
                               </div>
                               <div className={"col-lg-3 col-md-4 col-sm-6 col-6 "}>

                                   <div className={"rg_paynet_block"}>
                                       <div className={"pm_099"}>
                                           <div className={"pm_ava"}>
                                               <img alt="" className={"pay_icon"} src={this.state.create.teacher_profile.avatar_url}/>
                                           </div>
                                           <div className={"pm_tittle2"}>
                                               <p className={"payment_name_teachers"}>{this.state.create.teacher_profile.surename} {this.state.create.teacher_profile.name}</p>
                                               {/* <p>Английский язык</p> */}
                                           </div>
                                       </div>
                                       <p className={"totals1"}>{this.state.lang.chouseraspisanmaintextcontroler.text}</p>
                                       {this.state.create.lessons_in_order.map((data, idx) => (
                                           <p className={"totals2"}>{moment(data.lesson_start_timestamp_new*1000).format("ll, LT")}</p>
                                       ))}
                                      
                                      
                                    
                                     <p className={"totals3"}>{this.state.lang.discounttracker.text}  {this.state.create.total_price - this.state.create.total_price_wo_discount} {this.state.lang.summ.text}</p>
                                     <p className={"totals4"}>{this.state.lang.itogesmainlop.text} {this.state.create.total_price.toLocaleString()} {this.state.lang.summ.text}</p>
                                   </div>
                               </div>


                           </div>
                       </div>
                   </div>

               );
           }
        }
    }


}
/**
 * Created by Nikolay on 12.02.2021.
 */
