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

import uz from './images/uz.svg'

import master from './images/master.svg'

import visa from './images/visa.svg'

import apelsin from './images/apelsin.svg'
import payme from './images/payme.svg'


export default class Succ extends Component<{}, State> {
    state = {
        dialogOpen: false,
        calendar: React.createRef(),
        create: "",
        isLoaded: false,
        tt: [],
        test: "",
        order: "",
        main: "",
        job: "", contract: "",



    };


    componentDidMount() {
const mal = this.props.match
        console.log(mal)
        console.log("fffffffff")
        this.setState({
            create: JSON.parse(sessionStorage.getItem("my")),
            isLoaded: true
        })
    }


    render() {
        console.log(JSON.parse(sessionStorage.getItem("my")))

        const {isLoaded} = this.state

        if (!isLoaded) {
            return (
                <p></p>
            )
        } else {

            return (
                <div className={"wrap wt_lkl"}>

                    <div className={"container main_container"}>
                        <div className={"row"}>
                            <div className={" col-lg-8 col-md-4 col-sm-6 col-6 "}>
                                {/*{console.log(this.state.tt)}*/}
                                <h2 className={"main_font_h"}>Оформление заказа</h2>


                            </div>



                        </div>
                    </div>
                </div>

            );
        }
    }


}
/**
 * Created by Nikolay on 12.02.2021.
 */
