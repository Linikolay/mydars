/**
 * Created by Nikolay on 22.01.2021.
 */
import React, {Component} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {
    Button,
    FormControl,
    Form,
    Navbar,
    NavItem,
    NavDropdown,
    MenuItem,
    Nav,
    Dropdown,
    Container,
    Row,
    DropdownButton,
    Col, Carousel
} from 'react-bootstrap';
import NumberFormat from 'react-number-format';
import './App.css'
import back_ico from './images/bx-chevron-down.svg'
import row_top from './images/row_top.svg'
import cen_icon_main from './images/cen_icon_main.svg'

import row_top_down from './images/row_top_down.svg'
import star_filter_ico from './images/star_filter_ico.svg'


import next_ico_main from './images/next_ico_main.svg'
import ico_msg from './images/ico_msg.svg'
import ico_trial_ico from './images/ico_trial_ico.svg'
import checked_profile_ico from './images/checked_profile_ico.svg'
import reting_ico from './images/reting_ico.svg'
import lang_ico from './images/lang_ico.svg'
import profile_icon from './images/profile_icon.svg'
import question_ico from './images/question-ico.svg'
import avatar_mini from './images/avatar_mini.svg'
import reg_check from './images/reg_check.svg'
import reg_uncheck from './images/reg_uncheck.svg'
import bx_chevron_right from './images/bx-chevron-right.svg'

import camera_ico from './images/bxs-camera.svg'
import cloudupload from './images/bx-cloud-upload.svg'
import mini from './images/mini.svg'
import 'react-phone-number-input/style.css'

import phoneico from './images/phoneico.svg'
import mailico from './images/mailico.svg'
import mini_linkico from './images/mini_linkico.svg'

import PhoneInput from 'react-phone-input-2'
// import 'react-phone-input-2/dist/style.css'
import InputMask from 'react-input-mask';
import MaterialInput from '@material-ui/core/Input';


import obzor from './images/obzor.svg'
import calendar from './images/calendar.svg'
import lesson from './images/lesson.svg'
import message from './images/message.svg'
import setting from './images/setting.svg'
import player from "./images/player.svg";
import addfeed from "./images/addfeed.svg";
import feedavatar from "./images/feedavatar.svg";
import bron from "./images/bron.svg";
import groupuser from './images/groupuser.svg'
import profileplus from './images/profileplus.svg'

import ob1 from './images/ob1.svg'
import ob2 from './images/ob2.svg'
import ob3 from './images/ob3.svg'
import ob4 from './images/ob4.svg'
import what from './images/what.svg'
import credit from './images/credit-card.svg'
import arrrrrr from './images/arrrrrr.svg'

import {
    LineChart,
    Line,
    CartesianGrid,
    Tooltip,
    Legend,
    AreaChart,
    Area,
    YAxis,
    XAxis
} from "recharts";


class MyChart extends Component {
    state = {
        data: [
            {
                "name": "Пн, 01",
                "uv": 4000,
                "pv": 2400,
                "Сумм": 10000
            },
            {
                "name": "Пн, 01",
                "uv": 4000,
                "pv": 2400,
                "Сумм": 10000
            },
            {
                "name": "Вт, 02",
                "uv": 3000,
                "pv": 1398,
                "Сумм": 2210
            },
            {
                "name": "Ср, 03",
                "uv": 2000,
                "pv": 9800,
                "Сумм": 2290
            },
            {
                "name": "Чт, 04",
                "uv": 2780,
                "pv": 3908,
                "Сумм": 1500
            },
            {
                "name": "Пт, 05",
                "uv": 1890,
                "pv": 4800,
                "Сумм": 15000
            },
            {
                "name": "Сб, 06",
                "uv": 2390,
                "pv": 3800,
                "Сумм": 2500
            },
            {
                "name": "Вс, 07",
                "uv": 3490,
                "pv": 4300,
                "Сумм": 500
            }
        ]
    };


    render() {
        const {data} = this.state
        return (
            <div className={"wrap"}>

                <div className={"container"}>
                    <div className={"row"}>
                        <div className={" col-lg-12 col-md-4 col-sm-6 col-6 "}>
                            <div className={"no_padd container"}>
                                <div className={"row"}>
                                    <p className={"ob_top1"}>Обзор</p>
                                    <p className={"ob_top2"}>Активность</p>
                                    <div className={" col-lg-3 col-md-4 col-sm-6 col-6 "}>
                                        <div className={"folow_ob"}>
                                            <img alt="" className={"img_ci_ob"} src={ob1}/>
                                            <div className={"scros_ob"}>
                                                <p className={"numb_ob"}>567</p>
                                                <p className={"tt_ob"}>Просмотры профиля</p>
                                                <img alt="" className={"img_ci_ob"} src={what}/>

                                            </div>

                                        </div>

                                    </div>

                                    <div className={" col-lg-3 col-md-4 col-sm-6 col-6 "}>
                                        <div className={"folow_ob"}>

                                            <img alt="" className={"img_ci_ob"} src={ob2}/>
                                            <div className={"scros_ob"}>

                                                <p className={"numb_ob"}>567</p>
                                                <p className={"tt_ob"}>Ваш рейтинг</p>
                                                <img alt="" className={"img_ci_ob"} src={what}/>

                                            </div>


                                        </div>

                                    </div>


                                    <div className={" col-lg-3 col-md-4 col-sm-6 col-6 "}>
                                        <div className={"folow_ob"}>

                                            <img alt="" className={"img_ci_ob"} src={ob3}/>
                                            <div className={"scros_ob"}>

                                                <p className={"numb_ob"}>567</p>
                                                <p className={"tt_ob"}>Проведенные уроки</p>
                                                <img alt="" className={"img_ci_ob"} src={what}/>
                                            </div>


                                        </div>

                                    </div>
                                    <div className={" col-lg-3 col-md-4 col-sm-6 col-6 "}>
                                        <div className={"folow_ob"}>

                                            <img alt="" className={"img_ci_ob"} src={ob4}/>
                                            <div className={"scros_ob"}>

                                                <p className={"numb_ob"}>567</p>
                                                <p className={"tt_ob"}>Полученные отзывы</p>
                                                <img alt="" className={"img_ci_ob"} src={what}/>

                                            </div>

                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                        <p className={"fins_tt"}>Финансы</p>
                        <div className={"col-lg-8 col-md-4 col-sm-6 col-6 "}>
                            <div className="po_ob_chart">
                                <p className={"po_ob_chart1"}>Заработано за прошлую неделю</p>
                                <p className={"po_ob_chart2"}>1.234.067 сум</p>
                                <AreaChart width={700} height={289} data={data}
                                           margin={{top: 10, right: 30, left: 0, bottom: 0}}>
                                    <defs>

                                        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#FA4343" stopOpacity={1}/>
                                            <stop offset="95%" stopColor="#FA4343" stopOpacity={0}/>
                                        </linearGradient>
                                    </defs>
                                    <XAxis dataKey="name"/>

                                    <CartesianGrid strokeDasharray="3 3"/>
                                    <Tooltip/>

                                    <Area type="monotone" dataKey="Сумм" stroke="red" fillOpacity={1}
                                          fill="url(#colorPv)"/>
                                </AreaChart>


                            </div>


                        </div>
                        <div className={"col-lg-4 col-md-4 col-sm-6 col-6 "}>


                            <div className={"ddddddfff col-lg-12 col-md-4 col-sm-6 col-6 "}>
                                <div className={"nai_op"}>
                                    <p>Можно вывести</p>
                                    <p className={"sms_po_btn_tittle_pooo"}>500,067 сум</p>
                                    <div className={"btn_pooo"}>
                                        <p className={"tittle_btn_pooooo"}>Вывести на карту</p>
                                        <img alt="" src={credit}/>
                                    </div>

                                </div>
                            </div>
                            <div className={"ddddddfff col-lg-12 col-md-4 col-sm-6 col-6 "}>
                                <div className={"nai_op"}>
                                    <p>Ожидаемый баланс</p>
                                    <p className={"sms_po_btn_tittle_pooo"}>1.563.321 сум</p>
                                    <div className={"ft0999"}>
                                        <p className={"le_000000"}> Professional Lessons - Gram... </p>

                                        <p className={"le_0000001"}>18/23</p>
                                    </div>


                                    <div className={"li_00000000"}>
                                        <div className={"li_000000001"}>

                                        </div>
                                    </div>


                                    <div className={"ft0999"}>
                                        <p className={"le_000000"}> Professional Lessons - Gram... </p>

                                        <p className={"le_0000001"}>18/23</p>
                                    </div>


                                    <div className={"li_000000002"}>
                                        <div className={"li_0000000012"}>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={"col-lg-12 col-md-4 col-sm-6 col-6 "}>

                            <div className={"npdd00 col-lg-12 col-md-4 col-sm-6 col-6 "}>


                                <div className={"container "}>
                                    <p>Исстория транзакций</p>
                                    <div className={"row "}>

                                        <div className={"mlo0099 col-lg-4 col-md-4 col-sm-6 col-6 "}>


                                            <img alt="" className={"io33333"} src={arrrrrr}/>
                                            <p>300.000 сум</p>
                                        </div>

                                        <div className={"mlo0099 col-lg-4 col-md-4 col-sm-6 col-6 "}>



                                            <p>Вывод денег на карту **57</p>
                                        </div>
                                        <div className={"mlo0099 col-lg-4 col-md-4 col-sm-6 col-6 "}>



                                            <p>16 мая, 15:03</p>
                                        </div>


                                    </div>

                                    <div className={"row "}>

                                        <div className={"mlo0099 col-lg-4 col-md-4 col-sm-6 col-6 "}>


                                            <img alt="" className={"io33333"} src={arrrrrr}/>
                                            <p>300.000 сум</p>
                                        </div>

                                        <div className={"mlo0099 col-lg-4 col-md-4 col-sm-6 col-6 "}>



                                            <p>Вывод денег на карту **57</p>
                                        </div>
                                        <div className={"mlo0099 col-lg-4 col-md-4 col-sm-6 col-6 "}>



                                            <p>16 мая, 15:03</p>
                                        </div>


                                    </div>
                                    <div className={"row "}>

                                        <div className={"mlo0099 col-lg-4 col-md-4 col-sm-6 col-6 "}>


                                            <img alt="" className={"io33333"} src={arrrrrr}/>
                                            <p>300.000 сум</p>
                                        </div>

                                        <div className={"mlo0099 col-lg-4 col-md-4 col-sm-6 col-6 "}>



                                            <p>Вывод денег на карту **57</p>
                                        </div>
                                        <div className={"mlo0099 col-lg-4 col-md-4 col-sm-6 col-6 "}>



                                            <p>16 мая, 15:03</p>
                                        </div>


                                    </div>
                                </div>
                            </div>


                        </div>









                        <div className={"marfsss col-lg-12 col-md-4 col-sm-6 col-6 "}>

                            <div className={"npdd00 col-lg-12 col-md-4 col-sm-6 col-6 "}>


                                <div className={"container "}>
                                    <p>Исстория транзакций</p>
                                    <div className={"row "}>

                                        <div className={"mlo0099 col-lg-4 col-md-4 col-sm-6 col-6 "}>


                                            <img alt="" className={"io33333"} src={arrrrrr}/>
                                            <p>300.000 сум</p>
                                        </div>

                                        <div className={"mlo0099 col-lg-4 col-md-4 col-sm-6 col-6 "}>



                                            <p>Вывод денег на карту **57</p>
                                        </div>
                                        <div className={"mlo0099 col-lg-4 col-md-4 col-sm-6 col-6 "}>



                                            <p>16 мая, 15:03</p>
                                        </div>


                                    </div>



                                </div>
                            </div>


                        </div>

                    </div>
                </div>
            </div>


        )


    }
}


export default function Profile() {
    return (
        <Router>
            <div className={"profile_left_block_controls"}>
                <div className={"profile_left_block_controls_view"}>
                    <ul>
                        <p>
                            <img alt="" src={obzor}/>


                            <Link to="/obzor/">Обзор</Link>
                        </p>
                        <p>
                            <img alt="" src={calendar}/>
                            <Link to="/about">Календарь</Link>
                        </p>
                        <p>
                            <img alt="" src={lesson}/>
                            <Link to="/lesson">Мои уроки</Link>
                        </p>
                        <p>
                            <img alt="" src={message}/>
                            <Link to="/users">Сообщения</Link>
                        </p>
                        <div className={"line_left_profs"}></div>
                        <p>
                            <img alt="" src={setting}/>
                            <Link to="/profile/">Настройки</Link>
                        </p>

                    </ul>
                </div>

                {/* A <Switch> looks through its children <Route>s and
                 renders the first one that matches the current URL. */}
                <Switch>

                    <Route path="/obzor/">
                        <MyChart/>
                    </Route>
                    <Route path="/profile/">
                        <Setting/>
                    </Route>
                    <Route path="/lesson/">
                        <Lesson/>
                    </Route>

                </Switch>
            </div>
        </Router>
    );
}

class Lesson extends Component {

    render() {
        return (
            <div className={"wrap"}>

                <div className={"container"}>
                    <div className={"row"}>
                        <div className={" col-lg-12 col-md-4 col-sm-6 col-6 "}>


                            <div className={"my_gr_pr_one"}>
                                <p className={"mylesss_tt"}>Мои уроки</p>

                                <p className={"add_new_less_form"}>Новый курс/урок<img alt="" src={profileplus}/></p>
                            </div>

                            <p className={"minitt_prof"}>Уроки и курсы</p>


                            <div className={"whta_hist"}>
                                <div className={"container main_no_pa"}>
                                    <div className={"row row_line_sty"}>


                                        <div className={" col-lg-4 col-md-4 col-sm-6 col-6 "}>
                                            <div className={"block_whats"}>

                                                <p className={"bl_tittle_main_what1"}>Английский</p>
                                                <p className={"bl_tittle_main_what2"}>Conversation Class</p>
                                                <p className={"bl_tittle_main_what3"}>Разговорная практика</p>
                                                <p className={"bl_tittle_main_what5"}><img alt="" src={groupuser}/>0 студентов
                                                </p>
                                                <p className={"bl_tittle_main_what4"}>от 80.000 сум/урок</p>
                                            </div>

                                        </div>

                                        <div className={" col-lg-4 col-md-4 col-sm-6 col-6 "}>
                                            <div className={"block_whats"}>

                                                <p className={"bl_tittle_main_what1"}>Английский</p>
                                                <p className={"bl_tittle_main_what2"}>Conversation Class</p>
                                                <p className={"bl_tittle_main_what3"}>Разговорная практика</p>
                                                <p className={"bl_tittle_main_what5"}><img alt="" src={groupuser}/>0 студентов
                                                </p>
                                                <p className={"bl_tittle_main_what4"}>от 80.000 сум/урок</p>
                                            </div>

                                        </div>
                                        <div className={" col-lg-4 col-md-4 col-sm-6 col-6 "}>
                                            <div className={"block_whats"}>

                                                <p className={"bl_tittle_main_what1"}>Английский</p>
                                                <p className={"bl_tittle_main_what2"}>Conversation Class</p>
                                                <p className={"bl_tittle_main_what3"}>Разговорная практика</p>
                                                <p className={"bl_tittle_main_what5"}><img alt="" src={groupuser}/>34 студентов
                                                </p>
                                                <p className={"bl_tittle_main_what4"}>от 80.000 сум/урок</p>
                                            </div>

                                        </div>

                                        <div className={" col-lg-4 col-md-4 col-sm-6 col-6 "}>
                                            <div className={"block_whats"}>

                                                <p className={"bl_tittle_main_what1"}>Английский</p>
                                                <p className={"bl_tittle_main_what2"}>Conversation Class</p>
                                                <p className={"bl_tittle_main_what3"}>Разговорная практика</p>
                                                <p className={"bl_tittle_main_what5"}><img alt="" src={groupuser}/>50 студентов
                                                </p>
                                                <p className={"bl_tittle_main_what4"}>от 80.000 сум/урок</p>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>


                        </div>


                    </div>
                </div>
            </div>
        );
    }


}

class Setting extends Component {
    state = {showModal: false};

    constructor() {
        super()
        this.state = {
            isLoaded: false,
            create: {},
            language: "",
            levels: "",
            name: "",
            birth_country_id: "1",
            email: '',
            languages: [],
            shareholders: [{language_id: '', level: ""}],
            lgstate: "",
            contstate: "",
            monst: [{language_id: "111", level: ""}],
            phone: "ff",
            send: "",
            enject: false,
            code: '',
            image: null,
            file: null,
            vols: ""
        }

    }


    handleToggleModal = () => this.setState({showModal: !this.state.showModal});

    componentDidMount() {


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
                    // this.setState({
                    //     create: data,
                    //     isLoaded: true,
                    //     language: data.data.languages.available_languages,
                    //     levels: data.data.languages.levels
                    // });


                    console.log(data)
                }
            )
    }


    render() {
        console.log(this.state.vols)
        const {create, isLoaded} = this.state;
        if (!isLoaded) {
            return <p></p>
        } else {
            return (
                <div className={"wrap"}>

                    <div className={"container "}>
                        <div className={"row"}>
                            <div className={"app_prof_lang col-lg-12 col-md-4 col-sm-6 col-6 "}>
                                <h2>Настройки</h2>
                                <p>Личные данные</p>
                                <div className={"first_reg col-lg-12 col-md-4 col-sm-6 col-6 "}>


                                    <div className={"avats_sett"}>
                                        <img alt="" src={this.state.create.profile.avatar_url}/>
                                    </div>
                                    <div className={"name_sett"}>
                                        <p className={"profile_names"}> {this.state.create.profile.name}<img alt=""
                                            src={checked_profile_ico}/></p>
                                        <p> Преподователь</p>
                                    </div>


                                    <p className={"no_margin_profile"}><img alt="" src={mailico}/> <span
                                        className={"prof_color_gray"}>почта:</span> {this.state.create.profile.email}
                                    </p>
                                    <p className={"no_margin_profile"}><img alt="" src={phoneico}/><span
                                        className={"prof_color_gray"}>телефон:</span> 998909758448</p>
                                </div>
                                <h2>Обо мне</h2>
                                <div className={"block_custom col-lg-12 col-md-4 col-sm-6 col-6 "}>


                                    <p> {this.state.create.profile.teacher_description}</p>


                                </div>
                                <h2 className={"lang_prof"}>Языки</h2>
                                <div className={"container"}>
                                    <div className={"row"}>

                                        {
                                            this.state.create.profile.languages.map((cur, index) =>
                                                <div className={"default_miiss col-lg-3 col-md-4 col-sm-6 col-6 "}>

                                                    <div className={"main_profile_langus"}>
                                                        {cur.language}
                                                        <p className={"poms_profile_lpo"}>{cur.language_level_name}</p>
                                                    </div>


                                                </div>
                                            )}


                                    </div>
                                </div>

                                <h2 className={"lang_prof"}>Предмет преподавания</h2>
                                <div className={"container"}>
                                    <div className={"row"}>

                                        {
                                            this.state.create.profile.languages.map((cur, index) =>
                                                <div className={"default_miiss col-lg-3 col-md-4 col-sm-6 col-6 "}>

                                                    <div className={"main_profile_langus"}>
                                                        {cur.language}

                                                    </div>


                                                </div>
                                            )}


                                    </div>
                                </div>


                                <h2 className={"lang_prof"}>Мое резюме</h2>
                                <div className={"container"}>
                                    <div className={"row"}>
                                        <div className={"first_reg col-lg-12 col-md-4 col-sm-6 col-6 "}>

                                            <div className={"row"}>
                                                <div
                                                    className={"first_reg main_lopo2222 col-lg-4 col-md-4 col-sm-6 col-6 "}>
                                                    <p>Опыт работы</p>
                                                    {
                                                        this.state.create.profile.teacher_experience.map((cur, index) =>


                                                            <div>
                                                                <div className={""}>
                                                                    {cur.work_experience_year}

                                                                </div>
                                                                <div className={""}>
                                                                    {cur.work_experience}

                                                                </div>


                                                            </div>
                                                        )}
                                                </div>
                                                <div
                                                    className={"first_reg main_lopo2222 col-lg-4 col-md-4 col-sm-6 col-6 "}>
                                                    <p>Образование</p>
                                                    {
                                                        this.state.create.profile.teacher_education.map((cur, index) =>


                                                            <div>
                                                                <div className={""}>
                                                                    {cur.education}

                                                                </div>
                                                                <div className={""}>
                                                                    {cur.education_year}

                                                                </div>

                                                                <div className={"pppppppppppppp"}></div>
                                                            </div>
                                                        )}
                                                </div>

                                                <div
                                                    className={"first_reg main_lopo2222 col-lg-4 col-md-4 col-sm-6 col-6 "}>
                                                    <p>Сертификаты</p>
                                                    {
                                                        this.state.create.profile.certificates.map((cur, index) =>


                                                            <div>
                                                                <div className={""}>
                                                                    <img alt="" src={mini_linkico}/> {cur.certificate_name}

                                                                </div>
                                                                <div className={""}>
                                                                    {cur.work_experience}

                                                                </div>


                                                            </div>
                                                        )}
                                                </div>

                                            </div>


                                        </div>
                                    </div>
                                </div>


                                <h2 className={"lang_prof"}>Уведомления (на почту)</h2>
                                <div className={"container"}>
                                    <div className={"row"}>
                                        <div className={"first_reg col-lg-12 col-md-4 col-sm-6 col-6 "}>
                                            <p>Уведомлять о новых сообщениях</p>

                                            <p>Когда вам кто то напишет, мы уведомим вас </p>
                                            <div className="line_child pads">
                                                <div className="line_new_main"></div>
                                            </div>

                                            <p>Уведомлять о новых сообщениях</p>

                                            <p>Когда вам кто то напишет, мы уведомим вас </p>
                                            <div className="line_child pads">
                                                <div className="line_new_main"></div>
                                            </div>

                                        </div>
                                    </div>
                                </div>


                            </div>


                        </div>
                    </div>
                </div>
            )
        }


    }
}


