import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

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
    InputGroup,
    Container,
    Row,
    Col, Carousel
} from 'react-bootstrap';
import { ImpulseSpinner } from "react-spinners-kit";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { CSSTransitionGroup } from 'react-transition-group' // ES6
import './App.css'
import back_ico from './images/bx-chevron-down.svg'
import row_top from './images/row_top.svg'
import cen_icon_main from './images/cen_icon_main.svg'
import CircleLoader from "react-spinners/CircleLoader";
import row_top_down from './images/row_top_down.svg'
import star_filter_ico from './images/star_filter_ico.svg'

import back_ico1 from './images/back_ico.svg'
import ent from './images/ent.svg'

import bx_search from './images/bx-search.svg'
import soc from './Cht'
import {
    ReactiveBase,
    RangeSlider,
    SelectedFilters,
    ResultList,
    MultiRange,
    DynamicRangeSlider
} from "@appbaseio/reactivesearch";
import header from './Header'
import next_ico_main from './images/next_ico_main.svg'
import ico_msg from './images/ico_msg.svg'
import ico_trial_ico from './images/ico_trial_ico.svg'
import ico_trial_ico1 from './images/ico_trial_ico1.svg'
import checked_profile_ico from './images/checked_profile_ico.svg'
import reting_ico from './images/reting_ico.svg'
import lang_ico from './images/lang_ico.svg'
import profile_icon from './images/profile_icon.svg'
import question_ico from './images/question-ico.svg'
import avatar_mini from './images/avatar_mini.svg'
import { numeralize } from 'numeralize-ru'

import { NotificationContainer, NotificationManager } from 'react-notifications';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import moment from 'moment'
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css'
import next from "./images/next1.svg";

import { css } from "@emotion/core";

// const pluralize = require('numeralize').pluralize;

const override = css`
  display: block;
  margin: 261px auto;
  border-color: red;
`;

AOS.init({
    duration: 1200
});
const useStyles = makeStyles({
    root: {
        width: 300,
    },
});

function valuetext(value) {
    return `${value}°C`;
}


class MainPage extends Component {


    constructor(props) {
        super(props)
        this.state = {
            teacher: "",
            lang: "",
            isLoaded: false,
            loadedmain: true,
            create: "",
            ftCat: "",
            categoryId: "",
            startTime: "",
            sort: "",
            endTime: "",
            categorName: "",
            dire: "",
            napsss: "Выберите направление",
            first: "Выберите предмет",
            page: 1,
            testSeach: "",
            loadSpneed: true,
            loadSpneed1: true,
            idxMop: "",
            langLoad: false,
            test: "",
            grLoad: false,
            group: "",
            seach_lessons: "",
            value4: {
                min: "",
                max: "",
            },
            value5: {
                min: "",
                max: "",
            },
            value6: {
                min: "",
                max: "",
            },
            value7: {
                min: "",
                max: "",
            },

        }


        this.sayHello = this.sayHello.bind(this);
        this.handleA = this.handleA.bind(this);
        this.handleAb = this.handleA.bind(this);
        this.handleBol = this.handleBol.bind(this);
        this.pag = this.pag.bind(this);
        this.predSert = this.predSert.bind(this);
        this.sayHello1 = this.sayHello1.bind(this);

    }

    pag() {
        console.log(this.state.page + 1)

        // this.setState(prevstate => ({ page: prevstate.page + 1}));
        let teacher = [...this.state.teacher];
        this.setState({
            loadSpneed: false
        })

        if (this.state.ftCat == "") {
            fetch('https://api.mydars.uz/api/content/main_page/?page=' + (this.state.page + 1), {
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
                    Array.prototype.push.apply(this.state.teacher, data.main_page.teacher_profiles)
                    console.log(data.main_page.teacher_profiles)
                    this.setState({
                        isLoaded: true,
                        page: data.main_page.paginations.current_page,
                        create: data.main_page,
                        loadSpneed: true,
                    })
                }
                )
        } else {


            var startTime = parseInt(this.state.value7.min) / 1000;
            var endTime = parseInt(this.state.value7.max) / 1000;

            const test = {
                "birth_country_id": 1,
                "amount_from": this.state.value5.min,
                "amount_to": this.state.value5.max,
                "lesson_type_id": this.state.categoryId,
                "teacher_direction_id": this.state.dire,
                "date_from": startTime,
                "date_to": endTime
            }
            console.log(test)

            fetch('https://api.mydars.uz/api/content/main_page/', {
                method: 'POST',


                headers: {
                    // 'auth': 'ef899a6d-29d6-4130-8b59-3d95dfbcc9bd',

                    'Content-Type': 'application/json',
                    'auth': "ef899a6d-29d6-4130-8b59-3d95dfbcc9bd",
                    'lang': localStorage.getItem('lang'),
                    'token': localStorage.getItem('token')
                },
                body: JSON.stringify({

                    "filter":
                    {
                        "birth_country_id": 1,
                        "amount_from": this.state.value5.min,
                        "amount_to": this.state.value5.max,
                        "lesson_type_id": this.state.categoryId,
                        "teacher_direction_id": this.state.dire,
                        "date_from": startTime,
                        "date_to": endTime
                    },
                    "page": (this.state.page + 1)

                })

            }
            )

                .then(res => res.json())

                .then((data) => {
                    console.log(data)

                    Array.prototype.push.apply(this.state.teacher, data.main_page.teacher_profiles)
                    console.log(data.main_page.teacher_profiles)
                    this.setState({
                        isLoaded: true,
                        page: data.main_page.paginations.current_page,
                        create: data.main_page,
                        loadSpneed: true
                    })


                }
                )


        }


    }

    handleBol() {
        console.log("ffffff")
        NotificationManager.error('Сначала выберите предмет', 'Ошибка', 5000, () => {
            alert('callback');
        });
    }

    handleAb(obj) {
        console.log(obj)
        this.setState({ value7: obj })

    }

    saveMobile4() {
        console.log("f")
        this.setState({
            ftCat: "",
        })
    }

    handleA(obj) {
        console.log(obj)
        this.setState({ value5: obj })


    }

    sklonenie(number, txt) {
        var cases = [2, 0, 1, 1, 1, 2];
        return txt[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
    }


    componentDidMount() {

        let apple = 2;
        let pieces = 3;
        let ruble = 10;

        let a = this.sklonenie(apple, ['Репетитор', 'Репетитора', 'Репетиторов']); // яблоко


        console.log(a)











        fetch('https://api.mydars.uz/api/get_translates/', {



            headers: {
                // 'auth': 'ef899a6d-29d6-4130-8b59-3d95dfbcc9bd',

                'Content-Type': 'application/json',
                'auth': "ef899a6d-29d6-4130-8b59-3d95dfbcc9bd",
                'lang': localStorage.getItem('lang'),

            },


        }
        )
            .then(res => {

                return res.json();
            })
            .then((data) => {
                // console.log(data)


                this.setState({
                    lang: data.translates,
                    langLoad: true,
                })

            }
            )


        sessionStorage.setItem('search', null)


      
        if (localStorage.getItem('token') == "" || localStorage.getItem('token') == null || localStorage.getItem('token') == undefined) {

        }else{
            fetch('https://api.mydars.uz/api/group/get_last_groups', {
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
                    console.log(data1)
                    this.setState({
                        group: data1,
                        grLoad: true,
    
                    })
    
    
                }
                )
        }
      


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

                if (data.token_is_valid == false) {
                    localStorage.removeItem("token")
                    localStorage.removeItem("is_user")
                } else {
                    console.log(data)
                    this.setState({

                        test: data,


                    });
                }



            }
            )

        var d = (moment().format('L'));
        var s = new Date();
        // const checkTimeEnd = Date.parse(d)
        const checkTimeEnd = moment(d).valueOf()

        moment.locale();
        console.log(moment.locale("HH:mm"))
        var st = Number(s.setHours(0, 0, 0, 0));
        var end = Number(s.setHours(23, 59, 59, 999));
        console.log(st)

        this.setState({
            value5: {
                min: 0,
                max: 1000000
            },
            value4: {
                min: 0,
                max: 1000000
            },

            value6: {
                min: st,
                max: end
            },
            value7: {
                min: st,
                max: end
            }

        })

        fetch('https://api.mydars.uz/api/content/main_page/?page=1', {
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
                    isLoaded: true,
                    teacher: data.main_page.teacher_profiles,
                    create: data.main_page,


                })
                    ;




                setInterval(() => {

                    // console.log('Interval triggered');
                    const lp = JSON.parse(sessionStorage.getItem('search'))
                    //   console.log( lp )
                    if (lp == null) {

                    } else {
                        this.setState({
                            isLoaded: true,
                            teacher: lp.main_page.teacher_profiles,
                            // create: lp.main_page,


                        })
                    }
                    //    console.log("выключаетсяяяяяяя")
                }, 1000);

            }
            )
    }


    state = {
        showModal: false,
        showModal1: false,
        showModal2: false,
        showModal3: false

    };

    sayHello(obj) {
        console.log(obj)
        this.setState({
            ftCat: obj.id,
            categorName: obj.name,
        })
    }
    mess(obj) {
        console.log(obj)



        const main = { "type": "create_chat", "teacher_id": obj.id }


        // soc.emit('message','{"type":"chat",  "chat_id":40, "message": "435345"} ')

        soc.emit('message', JSON.stringify(main))
        // { console.log(this.props) }

        // console.log(JSON.stringify(main))

    }
    saveMobile0(obj) {
        console.log(obj)
        this.setState({
            sort: obj.sort
        })
        var startTime = parseInt(this.state.value7.min) / 1000;
        var endTime = parseInt(this.state.value7.max) / 1000;

        const test = {
            "birth_country_id": 1,
            "amount_from": this.state.value5.min,
            "amount_to": this.state.value5.max,
            "lesson_type_id": this.state.categoryId,
            "teacher_direction_id": this.state.dire,
            "date_from": startTime,
            "date_to": endTime
        }
        console.log(test)

        if (this.state.categoryId == "") {
            fetch('https://api.mydars.uz/api/content/main_page/', {
                method: 'POST',


                headers: {
                    // 'auth': 'ef899a6d-29d6-4130-8b59-3d95dfbcc9bd',

                    'Content-Type': 'application/json',
                    'auth': "ef899a6d-29d6-4130-8b59-3d95dfbcc9bd",
                    'lang': localStorage.getItem('lang')
                    // 'token': localStorage.getItem('token')
                },
                body: JSON.stringify({


                    "sort": obj.sort

                })

            }
            )

                .then(res => res.json())

                .then((data) => {
                    console.log(data)


                    this.setState({
                        isLoaded: true,
                        teacher: data.main_page.teacher_profiles,
                        create: data.main_page,
                        page: 1
                    })

                    if (this.state.showModal == true) {
                        this.setState({
                            showModal: false
                        })
                    } else if (this.state.showModal1 == true) {
                        this.setState({
                            showModal1: false
                        })
                    } else if (this.state.showModal2 == true) {
                        this.setState({
                            showModal2: false
                        })
                    } else if (this.state.showModal3 == true) {
                        this.setState({
                            showModal3: false
                        })
                    }
                }
                )
        } else {
            fetch('https://api.mydars.uz/api/content/main_page/', {
                method: 'POST',


                headers: {
                    // 'auth': 'ef899a6d-29d6-4130-8b59-3d95dfbcc9bd',
                    'lang': localStorage.getItem('lang'),
                    'Content-Type': 'application/json',
                    'auth': "ef899a6d-29d6-4130-8b59-3d95dfbcc9bd",
                    // 'lang': "uz"
                    // 'token': localStorage.getItem('token')
                },
                body: JSON.stringify({

                    "filter":
                    {
                        "birth_country_id": 1,
                        "amount_from": this.state.value5.min,
                        "amount_to": this.state.value5.max,
                        "lesson_type_id": this.state.categoryId,
                        "teacher_direction_id": this.state.dire,
                        "date_from": startTime,
                        "date_to": endTime
                    },
                    "page": 1,
                    "sort": obj.sort

                })

            }
            )

                .then(res => res.json())

                .then((data) => {
                    console.log(data)


                    this.setState({
                        isLoaded: true,
                        teacher: data.main_page.teacher_profiles,
                        create: data.main_page,
                        page: 1
                    })

                    if (this.state.showModal == true) {
                        this.setState({
                            showModal: false
                        })
                    } else if (this.state.showModal1 == true) {
                        this.setState({
                            showModal1: false
                        })
                    } else if (this.state.showModal2 == true) {
                        this.setState({
                            showModal2: false
                        })
                    } else if (this.state.showModal3 == true) {
                        this.setState({
                            showModal3: false
                        })
                    }
                }
                )
        }

    }

    naps(obj) {
        console.log(obj)
        this.setState({
            dire: obj.id,
            napsss: obj.name,
        })
    }

    sayHello1(obj) {
        console.log(obj.id)
        console.log("fffffffffff")
        this.setState({
            categoryId: obj.id,
            loadSpneed1: false
        })

        this.setState({
            first: obj.value
        })



        console.log(obj)
        this.setState({
            sort: obj.sort
        })
        var startTime = parseInt(this.state.value7.min) / 1000;
        var endTime = parseInt(this.state.value7.max) / 1000;

        const test = {
            "birth_country_id": 1,
            "amount_from": this.state.value5.min,
            "amount_to": this.state.value5.max,
            "lesson_type_id": obj.id,
            "teacher_direction_id": this.state.dire,
            "date_from": startTime,
            "date_to": endTime
        }
        console.log(test)

        fetch('https://api.mydars.uz/api/content/main_page/', {
            method: 'POST',


            headers: {
                // 'auth': 'ef899a6d-29d6-4130-8b59-3d95dfbcc9bd',
                'lang': localStorage.getItem('lang'),
                'Content-Type': 'application/json',
                'auth': "ef899a6d-29d6-4130-8b59-3d95dfbcc9bd",
                // 'lang': "uz"
                // 'token': localStorage.getItem('token')
            },
            body: JSON.stringify({

                "filter":
                {
                    "birth_country_id": 1,
                    "amount_from": this.state.value5.min,
                    "amount_to": this.state.value5.max,
                    "lesson_type_id": obj.id,
                    "teacher_direction_id": this.state.dire,
                    "date_from": startTime,
                    "date_to": endTime
                },
                "page": 1,


            })

        }
        )

            .then(res => res.json())

            .then((data) => {
                console.log(data)


                this.setState({
                    isLoaded: true,
                    teacher: data.main_page.teacher_profiles,
                    create: data.main_page,
                    loadSpneed1: true,
                    page: 1
                })





                if (this.state.showModal == true) {
                    this.setState({
                        showModal: false
                    })
                } else if (this.state.showModal1 == true) {
                    this.setState({
                        showModal1: false
                    })
                } else if (this.state.showModal2 == true) {
                    this.setState({
                        showModal2: false
                    })
                } else if (this.state.showModal3 == true) {
                    this.setState({
                        showModal3: false
                    })
                }







            }
            )














    }


    handleToggleModal = () => this.setState({ showModal: !this.state.showModal });
    handleToggleModal1 = () => this.setState({ showModal1: !this.state.showModal1 });
    handleToggleModal2 = () => this.setState({ showModal2: !this.state.showModal2 });
    handleToggleModal3 = () => this.setState({ showModal3: !this.state.showModal3 });
    predSert(e) {
        console.log(e.target.value)


        this.setState({
            testSeach: e.target.value
        })


        fetch('https://api.mydars.uz/api/search/lessons/?search_world=' + e.target.value, {
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

                if (data.error) {
                    this.setState({
                        seach_lessons: ""
                    })
                } else {
                    this.setState({
                        seach_lessons: data.lessons_list
                    })
                }

            }
            )

    }
    render() {
        console.log(this.state.categoryId)

        console.log(this.state.dire)
        const { isLoaded, categoryId, langLoad, grLoad } = this.state
        if (!isLoaded || !langLoad) {
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
                <div

                // data-aos="fade-up" 

                >
                    <div className={"wrap"}>



                        {(() => {

                            if (this.state.loadSpneed == false) {
                                return (
                                    <div>
                                        <div className={"loadlpreload loadlpreload2"}>
                                            <ImpulseSpinner className={"preloaders "} size={40} frontColor="#9181F3" backColor={"#9181F3"} />  </div>
                                        <div className={"zaglnow zaglnow2"}>
                                        </div>
                                    </div>
                                )
                            } else {

                            }

                        })()}
                        <NotificationContainer />
                        {this.state.showModal3 && <div onClick={this.handleToggleModal3} className="baccccccc">


                        </div>

                        }
                        {this.state.showModal1 && <div onClick={this.handleToggleModal1} className="baccccccc">


                        </div>

                        }
                        {this.state.showModal && <div onClick={this.handleToggleModal} className="baccccccc">


                        </div>

                        }

                        {this.state.showModal2 && <div onClick={this.handleToggleModal2} className="baccccccc">


                        </div>

                        }

                        <div className={"container main_container max_hz"}>






                            <div className="row row-cols-lg-12 row-cols-md-12 row-cols-12 block_main-2">


                                {this.state.showModal3 && <div className="modal main_moodddd">
                                    <Link className={"ext_modal"} onClick={this.handleToggleModal3}>x</Link>


                                    <div>
                                        <p>{this.state.lang.napravlens.text}</p>
                                        {this.state.create.data.lesson_direction.map((cont, idx) => (
                                            <div className={"full_wtd"}>
                                                <Link className={"btn_catsssss"}
                                                    onClick={() =>
                                                        this.naps({
                                                            id: cont.id,
                                                            name: cont.name

                                                        })
                                                    }>
                                                    {cont.name}

                                                </Link>
                                                <div className={'line'}>

                                                </div>
                                            </div>


                                        ))}

                                        <Link onClick={() =>
                                            this.saveMobile1({})
                                        } className={"ne_pa_data btn_cust_pup btn_cust_pup1"}>
                                            {this.state.lang.clear.text}
                                        </Link>

                                        <Link onClick={() =>
                                            this.saveMobile0()
                                        } className={"ne_pa_data btn_cust_pup"}>
                                            {this.state.lang.accept.text}    <img alt="" className={"ne_pa"} />
                                        </Link>
                                    </div>


                                </div>}

                                {this.state.showModal2 && <div className="modal modal111">
                                    <Link className={"ext_modal"} onClick={this.handleToggleModal2}>x</Link>
                                    <p>{this.state.lang.vremyaUroks.text}</p>

                                    <InputRange
                                        draggableTrack
                                        step={3600000}
                                        formatLabel={value => `${moment(value).format('HH:mm')} `}
                                        maxValue={this.state.value6.max}
                                        minValue={this.state.value6.min}
                                        onChange={value => this.setState({ value7: value })}

                                        value={
                                            this.state.value7
                                        }

                                    />
                                    <Link onClick={() =>
                                        this.saveMobile1({})
                                    } className={"ne_pa_data btn_cust_pup btn_cust_pup1"}>
                                        {this.state.lang.clear.text}    <img alt="" className={"ne_pa"} />
                                    </Link>

                                    <Link onClick={() =>
                                        this.saveMobile0({})
                                    } className={"ne_pa_data btn_cust_pup"}>
                                        {this.state.lang.accept.text}    <img alt="" className={"ne_pa"} />
                                    </Link>
                                </div>

                                }

                                {this.state.showModal1 && <div className="modal modal111">
                                    <Link className={"ext_modal"} onClick={this.handleToggleModal1}>x</Link>
                                    <p>{this.state.lang.stoimUrok.text}</p>

                                    <InputRange
                                        draggableTrack
                                        step={10000}
                                        formatLabel={value => `${value.toLocaleString()} Сум`}
                                        maxValue={this.state.value4.max}
                                        minValue={this.state.value4.min}

                                        onChange={this.handleA}
                                        onChangeComplete={
                                            this.handleA


                                        }
                                        value={
                                            this.state.value5
                                        }

                                    />
                                    <Link onClick={() =>
                                        this.saveMobile1({})
                                    } className={"ne_pa_data btn_cust_pup btn_cust_pup1"}>
                                        {this.state.lang.clear.text}
                                    </Link>

                                    <Link onClick={() =>
                                        this.saveMobile0({})
                                    } className={"ne_pa_data btn_cust_pup"}>
                                        {this.state.lang.accept.text} <img alt="" className={"ne_pa"} />
                                    </Link>

                                </div>

                                }
                                {this.state.showModal && <div className="modal  main_moodddd main_moodddd0000000">
                                    <Link className={"ext_modal"} onClick={this.handleToggleModal}>x</Link>
                                    {(() => {
                                        if (this.state.ftCat == "") {
                                            return (
                                                <div className={"abaraassd"}>
                                                    <p className={"apsss324324"}>{this.state.lang.predmet.text}</p>
                                                    <InputGroup className="mb-3">
                                                        <InputGroup.Prepend>
                                                            <InputGroup.Text id="basic-addon1">
                                                                <img alt="" src={bx_search}></img>
                                                            </InputGroup.Text>
                                                        </InputGroup.Prepend>
                                                        <FormControl
                                                            className={"inptePopo"}
                                                            onChange={this.predSert}
                                                            placeholder={this.state.lang.vvodikalNaz.text}
                                                            aria-label={this.state.lang.vvodikalNaz.text}
                                                            aria-describedby="basic-addon1"
                                                        />
                                                    </InputGroup>

                                                    {(() => {

                                                        if (this.state.testSeach == "") {
                                                            return (
                                                                <div>
                                                                    {this.state.create.categories.map((cont, idx) => (
                                                                        <div className={"full_wtd"}>
                                                                            {console.log(cont)}
                                                                            <Link className={"btn_catsssss"}
                                                                                onClick={() => this.sayHello(
                                                                                    {
                                                                                    
                                                                                    
                                                                                        id: cont.category_id, 
                                                                                        name: cont.category_name
                                                                                        
                                                                                }
                                                                                )}>
                                                                                    
                                                                                <img alt="" className={"cat_ci_111"} src={cont.icon_url} />
                                                                                <span className={"name_coooo"}>{cont.category_name} </span>
                                                                                <img alt="" className={"ent_icccc"} src={ent} />
                                                                                <span className={"cont_lesss"}>{cont.lessons_count}</span>

                                                                            </Link>
                                                                            <div className={'line'}>

                                                                            </div>
                                                                        </div>


                                                                    ))}
                                                                </div>
                                                            )

                                                        } else {
                                                            if (this.state.seach_lessons.length == 0) {
                                                                return (
                                                                    <p className={"no_profit_name"}>{this.state.lang.nofoun.text}</p>
                                                                )
                                                            } else
                                                                if (this.state.seach_lessons.length > 0) {
                                                                    return (
                                                                        <div className={"full_wtd full_wtd2222   full_wtd22233333"}>


                                                                            {this.state.seach_lessons.map((col, index) => (

                                                                                <div className={"full_wtd"}>
                                                                                    <Link className={"btn_catsssss"}
                                                                                        onClick={() =>
                                                                                            this.sayHello1({
                                                                                                id: col.id,
                                                                                                value: col.lesson_name,

                                                                                            })
                                                                                        }>
                                                                                        {col.lesson_name}

                                                                                    </Link>
                                                                                    <div className={'line'}>

                                                                                    </div>
                                                                                </div>


                                                                            ))}

                                                                            {/* <Link onClick={() =>
this.saveMobile1({


})
}
 className={"ne_pa_data btn_cust_pup btn_cust_pup1"}>
{this.state.lang.clear.text}
</Link> */}

                                                                            {/* <Link onClick={() =>
this.saveMobile0({})
} className={"ne_pa_data btn_cust_pup"}>
{this.state.lang.accept.text} <img alt="" className={"ne_pa"}/>
</Link> */}
                                                                        </div>

                                                                    )
                                                                }
                                                        }

                                                    })()}





                                                </div>
                                            )
                                        } else {
                                            return (
                                                <div className={"full_wtd full_wtd2222"}>
                                                    {(() => {

                                                        if (this.state.loadSpneed1 == false) {
                                                            return (
                                                                <div>
                                                                    <div className={"loadlpreload loadlpreload2"}>
                                                                        <ImpulseSpinner className={"preloaders "} size={40} frontColor="#9181F3" backColor={"#9181F3"} />  </div>
                                                                    <div className={"zaglnow zaglnow2"}>
                                                                    </div>
                                                                </div>
                                                            )
                                                        } else {

                                                        }

                                                    })()}
                                                    <p className={"yaziop232"}>{this.state.categorName}</p>
                                                    {(() => {
                                                        for (var i = 0; i < this.state.create.categories.length; i++) {

                                                            if (this.state.create.categories[i].category_id == this.state.ftCat) {
                                                                console.log(this.state.create.categories[i].lessons)
                                                                return (
                                                                    <div className={"yaziksa23"}>

                                                                        <Link onClick={() =>
                                                                            this.saveMobile4({})
                                                                        } className={"back_ico222"}>
                                                                            <img alt="" src={back_ico1} />
                                                                        </Link>


                                                                        {this.state.create.categories[i].lessons.map((col, index) => (

                                                                            <div className={"full_wtd"}>
                                                                                <Link className={"btn_catsssss"}
                                                                                    onClick={() =>
                                                                                        this.sayHello1({
                                                                                            id: col.id,
                                                                                            value: col.name,

                                                                                        })
                                                                                    }>
                                                                                    {col.name}

                                                                                </Link>
                                                                                <div className={'line'}>

                                                                                </div>
                                                                            </div>


                                                                        ))}

                                                                        {/* <Link onClick={() =>
                                                                        this.saveMobile1({})
                                                                    }
                                                                         className={"ne_pa_data btn_cust_pup btn_cust_pup1"}>
                                                                        {this.state.lang.clear.text}
                                                                    </Link> */}
                                                                        {/* 
                                                                    <Link onClick={() =>
                                                                        this.saveMobile0({})
                                                                    } className={"ne_pa_data btn_cust_pup"}>
                                                                       {this.state.lang.accept.text}  <img alt="" className={"ne_pa"}/>
                                                                    </Link> */}
                                                                    </div>
                                                                )
                                                            }
                                                        }

                                                    })()}
                                                </div>
                                            )
                                        }

                                    })()}


                                </div>}

                                <Link onClick={this.handleToggleModal} className={"view_2main_block"}>

                                    <div className={"bols_mod"}>
                                        <div className={"left_bl_2"}><p className={"pclassikc pclassikc_top"}>{this.state.lang.PREDMET.text}</p>
                                            <p className={"pclassikc bot_cclassic max-1529"}>{this.state.first}</p></div>
                                        <div className={"right_bl_2"}><img alt="" className={"im_tab_bar"} src={back_ico} />

                                            <div className={"line_bar"}></div>
                                        </div>
                                    </div>
                                </Link>

                                {(() => {

                                    if (categoryId == "") {
                                        return (
                                            <Link onClick={this.handleBol}
                                                className={"view_2main_block view_2main_blockdisable"}>
                                                <div className={"bols_mod"}>
                                                    <div className={"left_bl_2"}><p
                                                        className={"pclassikc pclassikc_top"}>{this.state.lang.STOIM.text}</p>
                                                        <p className={"pclassikc bot_cclassic max-1529"}>{this.state.value5.min.toLocaleString()} - {this.state.value5.max.toLocaleString()} сум</p>
                                                    </div>
                                                    <div className={"right_bl_2"}><img alt="" className={"im_tab_bar"}
                                                        src={back_ico} />

                                                        <div className={"line_bar"}></div>
                                                    </div>
                                                </div>


                                            </Link>
                                        )
                                    } else {
                                        return (
                                            <Link onClick={this.handleToggleModal1} className={"view_2main_block"}>
                                                <div className={"bols_mod"}>
                                                    <div className={"left_bl_2"}><p
                                                        className={"pclassikc pclassikc_top"}>{this.state.lang.STOIM.text}</p>
                                                        <p className={"pclassikc bot_cclassic max-1529"}>{this.state.value5.min.toLocaleString()} - {this.state.value5.max.toLocaleString()} сум</p>
                                                    </div>
                                                    <div className={"right_bl_2"}><img alt="" className={"im_tab_bar"}
                                                        src={back_ico} />

                                                        <div className={"line_bar"}></div>
                                                    </div>
                                                </div>


                                            </Link>
                                        )
                                    }
                                })()}


                                {(() => {

                                    if (categoryId == "") {
                                        return (


                                            <Link onClick={this.handleBol} className={"view_2main_block"}>

                                                <div className={"bols_mod"}>
                                                    <div className={"left_bl_2"}><p
                                                        className={"pclassikc pclassikc_top"}>{this.state.lang.TIME.text}</p>
                                                        <p className={"pclassikc bot_cclassic max-1529"}>{moment(this.state.value7.min).format('HH:mm')} - {moment(this.state.value7.max).format('HH:mm')}</p>
                                                    </div>
                                                    <div className={"right_bl_2"}><img alt="" className={"im_tab_bar"}
                                                        src={back_ico} />

                                                        <div className={"line_bar"}></div>
                                                    </div>
                                                </div>


                                            </Link>
                                        )
                                    } else {
                                        return (
                                            <Link onClick={this.handleToggleModal2} className={"view_2main_block"}>

                                                <div className={"bols_mod"}>
                                                    <div className={"left_bl_2"}><p
                                                        className={"pclassikc pclassikc_top"}>{this.state.lang.TIME.text}</p>
                                                        <p className={"pclassikc bot_cclassic max-1529"}>{moment(this.state.value7.min).format('HH:mm')} - {moment(this.state.value7.max).format('HH:mm')}</p>
                                                    </div>
                                                    <div className={"right_bl_2"}><img alt="" className={"im_tab_bar"}
                                                        src={back_ico} />

                                                        <div className={"line_bar"}></div>
                                                    </div>
                                                </div>


                                            </Link>
                                        )
                                    }
                                })()}


                                <Link className={"view_2main_block"}>
                                    <div className={"bols_mod"}>
                                        <div className={"left_bl_2"}><p className={"pclassikc pclassikc_top"}>{this.state.lang.COUNTES.text}</p>
                                            <p className={"pclassikc bot_cclassic max-1529"}>{this.state.lang.uzbekistonsf.text}</p></div>
                                        <div className={"right_bl_2"}><img alt="" className={"im_tab_bar"} src={back_ico} />

                                            {/* <div className={"line_bar"}></div> */}
                                        </div>
                                    </div>
                                </Link>




                            </div>
                        </div>

                        <div className={"container main_container max_hz"}>
                            <div className="row row-cols-lg-12 row-cols-md-12 row-cols-12 ">
                                <div className=" row-cols-lg-8 row-cols-md-8 row-cols-8 ">
                                    <div className={"block_desp_moun_main"}>

                                        {(() => {
                                            if (this.state.create.filter.lesson_filter_name == "") {
                                                return (
                                                    <p className={"tittle_Main"}>


                                                    </p>
                                                )
                                            } else {
                                                return (
                                                    <p className={"tittle_Main"}>
                                                        {this.state.create.filter.lesson_filter_name}

                                                    </p>
                                                )
                                            }

                                        })()}

                                        <p className={"tittle_Main_rep"}>
                                            {this.state.create.profiles_count} {this.sklonenie(this.state.create.profiles_count, [this.state.lang.repatxt.text, this.state.lang.reps.text, this.state.lang.respan88.text])}

                                        </p>
                                    </div>
                                    <div className={"filt_main_all"}>
                                        <div className={"filt_main_all1"}>

                                            <img alt="" className={"left_main_mount_all"} src={cen_icon_main} />

                                            <Dropdown className={"left_main_mount_all drop_no_limuits_mainpage"}>

                                                {(() => {


                                                    if (this.state.sort == "" || this.state.sort == "by_price") {
                                                        return (
                                                            <Dropdown.Toggle className={"main_drops_colls"} variant="success" id="dropdown-basic">

                                                                {this.state.lang.cen.text}




                                                            </Dropdown.Toggle>
                                                        )
                                                    } else {
                                                        return (
                                                            <Dropdown.Toggle className={"main_drops_colls"} variant="success" id="dropdown-basic">

                                                                {this.state.lang.chas324.text}



                                                            </Dropdown.Toggle>
                                                        )
                                                    }
                                                })()}



                                                <Dropdown.Menu>
                                                    <Dropdown.Item onClick={() =>
                                                        this.saveMobile0({
                                                            sort: "by_price"
                                                        })
                                                    } href=""> {this.state.lang.showurok.text}</Dropdown.Item>
                                                    <Dropdown.Item
                                                        onClick={() =>
                                                            this.saveMobile0({
                                                                sort: "by_hour"
                                                            })
                                                        }
                                                        href="">{this.state.lang.showchas.text}</Dropdown.Item>

                                                </Dropdown.Menu>
                                            </Dropdown>

                                            <p className={"left_main_mount_all"}></p>







                                            {(() => {


                                                if (this.state.sort == "" || this.state.sort == "by_price") {
                                                    return (
                                                        <img alt="" className={"left_main_mount_all img_icon_top_row_mains"}
                                                            src={row_top_down} />

                                                    )
                                                } else {
                                                    return (

                                                        <img alt="" className={"left_main_mount_all img_icon_top_row_mains"} src={row_top} />
                                                    )
                                                }
                                            })()}




                                        </div>


                                        <div className={"filt_main_all2"}>
                                            <img alt="" className={"left_main_mount_all "} src={star_filter_ico} />
                                            <Dropdown className={"left_main_mount_all drop_no_limuits_mainpage"}>

                                                {(() => {


                                                    if (this.state.sort == "" || this.state.sort == "-by_rate") {
                                                        return (
                                                            <Dropdown.Toggle className={"main_drops_colls"} variant="success" id="dropdown-basic">

{this.state.lang.topreyting.text} 




                                                            </Dropdown.Toggle>
                                                        )
                                                    } else {
                                                        return (
                                                            <Dropdown.Toggle className={"main_drops_colls"} variant="success" id="dropdown-basic">

{this.state.lang.nizkibottom.text}     



                                                            </Dropdown.Toggle>
                                                        )
                                                    }
                                                })()}



                                                <Dropdown.Menu>
                                                    <Dropdown.Item onClick={() =>
                                                        this.saveMobile0({
                                                            sort: "-by_rate"
                                                        })
                                                    } href=""> {this.state.lang.topreyting.text} </Dropdown.Item>
                                                    <Dropdown.Item
                                                        onClick={() =>
                                                            this.saveMobile0({
                                                                sort: "by_rate"
                                                            })
                                                        }
                                                        href="">{this.state.lang.nizkibottom.text}</Dropdown.Item>

                                                </Dropdown.Menu>
                                            </Dropdown>



                                            {(() => {


                                                if (this.state.sort == "" || this.state.sort == "by_rate") {
                                                    return (
                                                        <img alt="" className={"left_main_mount_all img_icon_top_row_mains"}
                                                            src={row_top_down} />

                                                    )
                                                } else {
                                                    return (

                                                        <img alt="" className={"left_main_mount_all img_icon_top_row_mains"} src={row_top} />
                                                    )
                                                }
                                            })()}





                                        </div>
                                    </div>
                                </div>


                            </div>
                            <div className="row row-cols-lg-12 row-cols-md-12 row-cols-12 ">


                                <div className="col-lg-9 col-md-9 col-sm-9 col-9 bg_all_white ">


                                    {/*{console.log(this.state.create)}*/}


                                    {this.state.teacher.map((cont, idx) => (

                                        <div className={"desck_post row heover_mylight"}>
                                            <div className={"rep_cart myreconstrurc  col-lg-2 col-md-2 col-sm-2 col-2 "}>
                                                <div className={"left_block_main_teacher"}>

                                                    <Link className={"node_decorationtitle"} target="_blank" to={"/view/" + cont.id}>
                                                        <img alt="" className={"prof_ics"} src={cont.avatar_url}>

                                                        </img>
                                                    </Link>
                                                    {/* <img alt="" className={"lang_ico_teacher"} src={lang_ico}/> */}

                                                </div>

                                                <div className={"rat_teach_left_block_main"}>
                                                    {/* {cont.profile_rating} */}
                                                    <img alt="" src={reting_ico} />
                                                    <span className={"retin_numb009"}>{(cont.profile_rating.toFixed(1))}</span>

                                                </div>


                                            </div>
                                            <div className={"rep_cart1 col-lg-10 col-md-10 col-sm-10 col-10 "}>
                                                <div className={"lopon"}>

                                                    <Link className={"node_decorationtitle"} target="_blank" to={"/view/" + cont.id}> <p className={"name_teachers_main"}> {cont.name} {cont.surename} </p>

                                                    </Link>
                                                    <img alt=""
                                                        className={"check_img_teacher_main"} src={checked_profile_ico} />

                                                    {(() => {

                                                        if (this.state.sort == "" || this.state.sort == "by_price" || this.state.sort == "-by_rate" || this.state.sort == "by_rate") {
                                                            if (cont.teacher_lessons.length == 0) {
                                                                return (
                                                                    <p></p>
                                                                )
                                                            } else {

                                                            } return (
                                                                <p className={"cents_main_titile"}>{cont.teacher_lessons[0].lesson_amount.toLocaleString()} {this.state.lang.summ.text}/

                                                                    <span className={"ureeeee"}>{this.state.lang.urok.text}</span>

                                                                </p>
                                                            )

                                                        } else {
                                                            if (cont.teacher_lessons.length == 0) {
                                                                return (
                                                                    <p></p>
                                                                )
                                                            } else {
                                                                return (
                                                                    <p className={"cents_main_titile"}>{cont.teacher_lessons[0].lesson_amount_per_hour.toLocaleString()} {this.state.lang.summ.text}/
                                                                        <span className={"ureeeee"}>{this.state.lang.chas.text}</span>

                                                                    </p>
                                                                )
                                                            }

                                                        }
                                                    })()}



                                                </div>

                                                <div className={"lopon"}>
                                                    <div className={"class_teach_seconds_ttil"}>
                                                        <p className={"tittle_top_main_detail_moon"}>{this.state.lang.RODNOYYAS.text}</p>
                                                        {cont.languages.map((data, idx) => (

                                                            <div>
                                                                <p className={"main_page_tittle98989"}>{data.language}</p>

                                                            </div>
                                                        ))}


                                                    </div>

                                                    <div className={"class_teach_seconds_ttil"}>
                                                        <p className={"tittle_top_main_detail_moon"}>{this.state.lang.UCHENIK.text}</p>
                                                        <p>{cont.student_count}</p>
                                                    </div>

                                                    <div className={"class_teach_seconds_ttil"}>
                                                        <p className={"tittle_top_main_detail_moon"}>{this.state.lang.PREPODAET.text}</p>
                                                        <p>


                                                            {cont.teacher_lessons.map((data3, idx) => (
                                                                <p className="left_patricit">
                                                                    {data3.name}</p>
                                                            ))}
                                                        </p>
                                                    </div>

                                                </div>

                                                <div className={"line_child"}>
                                                    <div className={"line_new_main"}></div>
                                                </div>
                                                <p className={"description_text_main_card"}>
                                                    {/* {cont.teacher_description} */}

                                                    {/* <div dangerouslySetInnerHTML={{ __html: cont.teacher_description }} /> */}
                                                    <div className={"desciptionfile_molo"} maxlength="100">
                                                        {cont.teacher_description}
                                                    </div>
                                                </p>


                                                <div className={"btn_group_card"}>

                                                    <Link className={"node_decorationtitle"} target="_blank" to={"/view/" + cont.id}>

                                                        <div className={"trial_btns"}>
                                                            {/* <img alt="" className={"trial_btns002"} src={ico_trial_ico1}/> */}
                                                            <p
                                                                className={"trial_btns001"}>{this.state.lang.testLessonswee.text}</p>


                                                        </div>
                                                    </Link>
                                                    {/* {console.log(cont.id)} */}


                                                    {(() => {
                                                        if (localStorage.getItem('token')) {
                                                            return (
                                                                <Link

                                                                    onClick={() =>
                                                                        this.mess({
                                                                            id: cont.id,
                                                                            user: this.state.test.profile.is_user

                                                                        })}


                                                                    className={"trial_btns33333 trial_btns003 mess_bb"}>



                                                                </Link>
                                                            )
                                                        } else {

                                                        }
                                                    })()}





                                                </div>


                                            </div>

                                            <div className={"line_child top_line_mgs"}>
                                                <div className={"line_new_main "}></div>
                                            </div>
                                        </div>


                                    ))}
                                    {(() => {
                                        console.log(this.state.create.paginations.all_pages)
                                        console.log(
                                            this.state.page
                                        )
                                        if (this.state.create.paginations.all_pages == this.state.page) {
                                            return (
                                                <p></p>
                                            )
                                        } else {
                                            return (
                                                <Link className={"desck_post row  paagin_div pagasa"}>
                                                    <div onClick={this.pag} className={"paginat_btn"}>
                                                        {this.state.lang.showalll.text}
                                                    </div>
                                                </Link>
                                            )

                                        }
                                    })()}


                                </div>


                                
                                <div className="col-lg-3 col-md-3 col-sm-3 col-3 bg_all_white adas_009">
                                {(() => {
                                            if (this.state.create.watch_profiles == undefined) {
                                                return (
                                                    <p></p>
                                                )
                                            }
                                            else if (this.state.create.watch_profiles.length == 0) {
                                                return (
                                                    <p></p>
                                                )
                                            } else {
                                                return (
                                                    <div className={"block_right_bg_white_type "}>

                                        <div className={""}>
                                            <div className={"class_bords_main_right_type"}>
                                                <p className={"titl_right_main_blocks"}>{this.state.lang.dlyavas.text}</p>
                                                <img alt="" className={"ico_quest_image_main"} src={question_ico} />

                                            </div>
                                            {/* <p className={"rgdlyavas"}>{this.state.lang.openvisits.text}
                                            </p> */}

                                            <div className="line_child">
                                                <div className="line_new_main"></div>
                                            </div>
                                        </div>
                                      




                                                                                                <div>

                                                        {this.state.create.watch_profiles.map((data, idx) => (
                                                            <div className={""}>
                                                                {console.log(data)}
                                                                <Link className={"node_decorationtitle"} target="_blank" to={"/view/" + data.teacher_id}>

                                                                    <div className={"row no_padding"}>
                                                                        <div className={"paddingnull col-lg-2 col-md-2 col-sm-2 col-2"}>
                                                                            <img alt="" className="avatar_rg_main" src={data.teacher__avatar_url} />
                                                                        </div>
                                                                        <div className={"col-lg-10 col-md-10 col-sm-10 col-10"}>
                                                                            {/* <p className={"no_margin dats_main_trail_right_block0"}>

                                                        {moment(data.watch_time).format('D MMM, HH:mm')}
                                                        </p> */}

                                                                            <p className={"no_margin dats_main_trail_right_block0 dats_main_trail_right_block01"}>
                                                                                {data.teacher__name} {data.teacher__surename}
                                                                            </p>
                                                                            <p className={"no_margin dats_main_trail_right_block1"}>
                                                                                {data.teacher_lessons.map((main, id) => (
                                                                                    <span>{main.lesson_type__type_name}</span>
                                                                                ))}


                                                                            </p>
                                                                            {/* <p className={"no_margin dats_main_trail_right_block2"}>Do you need to
                                                        learn
                                                        English? Today this is key to success.</p> */}

                                                                        </div>
                                                                        <div className="line_child pads">
                                                                            <div className="line_new_main"></div>
                                                                        </div>
                                                                    </div>

                                                                </Link>
                                                            </div>

                                                        ))}
                                                        </div>




                                                             </div>



                                                )
                                            }


                                        })()}
                                    
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
















                                                                    {(() => {
                                                                            if (this.state.group.error > 0) {
                                                                                return (
                                                                                    <p></p>
                                                                                )
                                                                            }
                                                                           else{
                                                                                return (
                                                                                    <div className={"block_right_bg_white_type "}>

                                                                                        <div className={""}>
                                                                                            <div className={"class_bords_main_right_type"}>
                                                                                                <p className={"titl_right_main_blocks"}>Группы</p>
                                                                                                <img alt="" className={"ico_quest_image_main"} src={question_ico} />

                                                                                            </div>
                                                                                            {/* <p className={"rgdlyavas"}>{this.state.lang.openvisits.text}
                                                                                            </p> */}

                                                                                            <div className="line_child">
                                                                                                <div className="line_new_main"></div>
                                                                                            </div>
                                                                                        </div>
                                                                    




                                                                                                                                
                                                                                                                                    {(() => {

if(this.state.group == "" || this.state.group == undefined){

}else{
    return(
         <div>
                                                                                            {this.state.group.last_group_added.map((data, idx) => (
                                                                                                <div className={""}>
                                                                                                    {console.log(data)}
                                                                                                    <Link className={"node_decorationtitle"} target="_blank" to={"/view/" + data.teacher_id}>

                                                                                                        <div className={"row no_padding"}>
                                                                                                            {/* <div className={"paddingnull col-lg-2 col-md-2 col-sm-2 col-2"}>
                                                                                                                <img alt="" className="avatar_rg_main" src={data.group_description} />
                                                                                                            </div> */}
                                                                                                            <div className={"col-lg-12 col-md-10 col-sm-10 col-10"}>
                                                                                                                {/* <p className={"no_margin dats_main_trail_right_block0"}>

                                                                                            {moment(data.watch_time).format('D MMM, HH:mm')}
                                                                                            </p> */}

                                                                                                                <p className={"no_margin dats_main_trail_right_block0 dats_main_trail_right_block01"}>
                                                                                                                    {data.group_description} Цена {data.group_total_cost} сум
                                                                                                                </p>
                                                                                                                
                                                                                                                <p className={"no_margin dats_main_trail_right_block1"}>
                                                                                                               Кол-во мест {data.max_students_count}/{data.current_students_count}

                                                                                                                </p>
                                                                                                                {/* <p className={"no_margin dats_main_trail_right_block2"}>Do you need to
                                                                                            learn
                                                                                            English? Today this is key to success.</p> */}

                                                                                                            </div>
                                                                                                            <div className="line_child pads">
                                                                                                                <div className="line_new_main"></div>
                                                                                                            </div>
                                                                                                        </div>

                                                                                                    </Link>
                                                                                                </div>

                                                                                            ))}
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
                    </div>
                </div>
            )
        }


    }
}


// You can also pass an optional settings object
// below listed default settings
// AOS.init({
//   // Global settings:
//   disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
//   startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
//   initClassName: 'aos-init', // class applied after initialization
//   animatedClassName: 'aos-animate', // class applied on animation
//   useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
//   disableMutationObserver: false, // disables automatic mutations' detections (advanced)
//   debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
//   throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


//   // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
//   offset: 120, // offset (in px) from the original trigger point
//   delay: 0, // values from 0 to 3000, with step 50ms
//   duration: 400, // values from 0 to 3000, with step 50ms
//   easing: 'ease', // default easing for AOS animations
//   once: false, // whether animation should happen only once - while scrolling down
//   mirror: false, // whether elements should animate out while scrolling past them
//   anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

// });
export default MainPage;