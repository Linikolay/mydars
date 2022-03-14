import React, { Component } from 'react';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import DatePicker from "react-datepicker";

import { registerLocale, setDefaultLocale } from "react-datepicker";
import ru from 'date-fns/locale/ru';


import "react-datepicker/dist/react-datepicker.css";

import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
} from "react-router-dom";
import "react-sweet-progress/lib/style.css";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import { Progress } from "react-sweet-progress"; import {
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
import { Line, Circle } from 'rc-progress';
import arr from './images/arrr.svg'


import btn_top_viewwss from './images/btn_top_viewwss.svg'

import downarrraa from './images/downarrraa.svg'

import NumberFormat from 'react-number-format';
import './App.css'

import StarRatingComponent from 'react-star-rating-component';
import checked_profile_ico from './images/checked_profile_ico.svg'

import 'react-phone-number-input/style.css'

import phoneico from './images/phoneico.svg'
import mailico from './images/mailico.svg'
import mini_linkico from './images/mini_linkico.svg'

import tran from './images/tran.svg'
import { ImpulseSpinner } from "react-spinners-kit";

import 'moment/locale/ru'
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import {
    EditorState, convertToRaw, ContentState,
    RichUtils,
} from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';


import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css'; // ES6
// import 'react-widgets/dist/css/react-widgets.css';
import CreatableSelect from 'react-select/creatable';

import pl_white from "./images/pl_white.svg"
import qus from './images/qus.svg'


import obzor from './images/obzor.svg'

import camera_ico from './images/bxs-camera.svg'
import cloudupload from './images/bx-cloud-upload.svg'
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
import red_buuls from './images/red_buuls.svg'


import ob1 from './images/ob1.svg'
import ob2 from './images/ob2.svg'
import ob3 from './images/ob3.svg'
import ob4 from './images/ob4.svg'
import what from './images/what.svg'
import credit from './images/credit-card.svg'
import arrrrrr from './images/arrrrrr.svg'
import About from './About'
import add from './images/add.svg'

import back_ico from './images/bx-chevron-down.svg'
import row_top from './images/row_top.svg'
import cen_icon_main from './images/cen_icon_main.svg'

import row_top_down from './images/row_top_down.svg'
import star_filter_ico from './images/star_filter_ico.svg'


import next_ico_main from './images/next_ico_main.svg'
import ico_msg from './images/ico_msg.svg'
import ico_trial_ico from './images/ico_trial_ico.svg'

import reting_ico from './images/reting_ico.svg'
import lang_ico from './images/lang_ico.svg'
import profile_icon from './images/profile_icon.svg'
import question_ico from './images/question-ico.svg'
import avatar_mini from './images/avatar_mini.svg'
import reg_check from './images/reg_check.svg'
import reg_uncheck from './images/reg_uncheck.svg'
import bx_chevron_right from './images/bx-chevron-right.svg'

import moment from "moment";

import del from "./images/del.svg";
import mini from "./images/mini.svg"

import plus from "./images/plus.svg"
import in1 from "./images/in1.svg";
import in2 from "./images/in2.svg"


import next from "./images/next1.svg"

import {
    LineChart,

    CartesianGrid,
    Tooltip,
    Legend,
    AreaChart,
    Area,
    YAxis,
    XAxis
} from "recharts";



import mess_ff1 from './images/mess_ff1.svg';
import mess_ff from './images/mess_ff.svg';
import openSocket from 'socket.io-client';
import ScrollToBottom from 'react-scroll-to-bottom'
import file_scripts_kj from './images/file_scripts_kj.svg'
registerLocale('ru', ru)

var socket = openSocket('https://chat.mydars.uz/', {
    reconnection: false,
    transportOptions: {
        polling: {
            extraHeaders: {
                'token': localStorage.getItem('token'),
                // 'watch_room_id':545,
                // 'is_admin':true
            }
        }
    }
});




class Users extends Component {

    constructor() {
        super()
        this.state = {
            isLoaded: false,
            langLoad: false,
            create: {},
            language: "",
            levels: "",
            file: null,
            base64URL: "",
            lang: "",
            name: "",
            birth_country_id: "1",
            email: '',
            languages: [],
            shareholders: [{ language_id: '', level: "" }],
            lgstate: "",
            contstate: "",
            monst: [{ language_id: "111", level: "" }],
            phone: "ff",
            send: "",
            enject: false,
            code: '',
            image: null,
            file: null,
            vols: "",
            of: false,
            avatar: null,
            chat: "",

            pass: "",

            status: "",
            sms: "",

            fam: "",
            em: "",
            dd: "",
            mm: "",
            yy: "",
            pas1: "",
            pas2: "",
            value: "",
            isMylod: false,
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.back = this.back.bind(this);


    }

    state = {
        showModal: false,
        showModal1: false,
        showModal2: false,
        showModal3: false

    };



    handleToggleModal3 = () => this.setState({ showModal3: !this.state.showModal3 });


    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        // alert('Отправленное имя: ' + this.state.value);
        event.preventDefault();
        const main = { "type": "chat", "chat_id": sessionStorage.getItem('ms'), "message": this.state.value }
        socket.emit('message', JSON.stringify(main))
        const messages = document.getElementById('messages');
        const shouldScroll = messages.scrollTop + messages.clientHeight == messages.scrollHeight;
        console.log(shouldScroll)
        if (!shouldScroll) {
            messages.scrollTop = messages.scrollHeight;

        }

        this.setState(prevState => {
            console.log(prevState)
            for (var i = 0; i < prevState.chat.active_chats.length; i++) {
                if (
                    prevState.chat.active_chats[i].messages.length == this.state.chat.active_chats[i].messages.length
                ) {
                    this.setState({
                        value: "",
                        isLoaded: true
                    })

                    const messages = document.getElementById('messages');
                    messages.scrollTop = messages.scrollHeight;

                    console.log(messages.scrollTop)
                    console.log(messages.clientHeight)
                    console.log(messages.scrollHeight)
                }
            }
        })



        // scrollToBottom();

    }






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
                // console.log(data)


                this.setState({
                    lang: data.translates,
                    langLoad: true
                })

            }
            )
        var socket = openSocket('https://chat.mydars.uz/', {
            reconnection: false,
            transportOptions: {
                polling: {
                    extraHeaders: {
                        'token': localStorage.getItem('token'),
                        // 'watch_room_id':545,
                        // 'is_admin':true
                    }
                }
            }
        });


        // socket.emit('message',{"type":"update"} );
        // socket.on("connect", () => {
        //     console.log(socket.id); // "G5p5..."
        //   });


        socket.on('connect', () => {
            // console.log(socket)
        })
        socket.on("disconnect", () => {
            // console.log(socket); // undefined
        });



        socket.on("connect", () => {
            // console.log(socket.connected); // true
        });

        socket.on("disconnect", () => {
            console.log(socket.connected); // false

            if (socket.connected == false) {

                setTimeout(() => {
                    socket.connect();
                    // console.log(socket)
                }, 1000);


                //                 socket.on('message', (data) =>{
                // console.log(data)
                //                 })
            }
        });







        socket.on('message', (data) => {




            console.log(data)


            if (data.active_chats) {
                // console.log("99999999999999999+9999999999999999999999999999999999999999999")

                this.setState({
                    chat: data,
                    isLoaded: true,

                })



            } else if (data.error == "no access") {
                socket.disconnect("disconnect", () => {
                    console.log(socket.connected); // false
                });

                socket.on('connect', () => {
                    // console.log(socket)
                })
            }



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
                    create: data,
                    language: data.data.languages.available_languages,
                    levels: data.data.languages.levels,


                });


                console.log(data.profile)
            }
            )
    }

    send(obj) {
        console.log(obj)
        sessionStorage.setItem('ms', obj.id);
        this.setState(() => ({
            isLoaded: true


        }));
    }
    back() {
        console.log("ffffffffff")
        sessionStorage.setItem('ms', "")
        this.setState(() => ({
            isLoaded: true


        }));
    }


    main() {

        const messages = document.getElementById('messages');
        messages.scrollTop = messages.scrollHeight;
    }
    getBase64 = file => {
        return new Promise(resolve => {
            let fileInfo;
            let baseURL = "";
            // Make new FileReader

            let reader = new FileReader();

            // Convert the file to base64 text
            reader.readAsDataURL(file);

            // on reader load somthing...
            reader.onload = () => {
                // Make a fileInfo Object
                console.log("Called", reader);
                baseURL = reader.result;
                console.log(baseURL);
                resolve(baseURL);
            };
            //   console.log(fileInfo);
        });
    };



    onImageChange = e => {
        const data = new FormData();
        const imagedata = e.target.files[0];
        data.append('myfile', imagedata);
        console.log(imagedata)


        const daed = "";
        if (imagedata.name.indexOf(".")) {

            let { file } = this.state;

            file = e.target.files[0];


            let baseURL = "";
            // Make new FileReader

            let reader = new FileReader();

            // Convert the file to base64 text
            reader.readAsDataURL(file);
            // on reader load somthing...
            reader.onload = () => {
                // Make a fileInfo Object
                console.log("Called", reader);
                baseURL = reader.result;
                console.log(baseURL);
                const test = { "type": "chat", "chat_id": 3, "message": 1111 }

                const main = {
                    "type": "chat", "message": file.name, "chat_id": sessionStorage.getItem('ms'), "file": {
                        "file_type": imagedata.name.substr(imagedata.name.indexOf(".") + 1),
                        "file": baseURL.split(',')[1]
                    }
                }
                socket.emit('message', JSON.stringify(main))
                // socket.emit('message',JSON.stringify(test))

                this.setState({
                    isLoaded: true
                })
                //         socket.on('message', (data) =>{

                //          console.log(data)
                // if(data.active_chats){
                //     this.setState({
                //         chat:data,
                //         isLoaded: true,
                //         isMylod: true
                //     })
                // }else  if(data.error == "no access"){
                //     socket.disconnect("disconnect", () => {
                //         console.log(socket.connected); // false
                //       });

                //       socket.on('connect', () =>{
                //         // console.log(socket)
                //     })
                // }


                //         })

                console.log(main)
            };






        }
        // const main2 ={"type":"update"}
        // socket.emit('message',JSON.stringify(main2))
        // console.log(file)

    };


    render() {

        // setInterval(socket.emit('message','{"type":"chat",  "chat_id":3, "message": "435345"} '), 5000);

        // setInterval(  socket.emit('message','{"type": "update"}' ), 50000);

        // console.log(this.state.chat)

        const { isLoaded, isMylod, langLoad } = this.state

        if (!isLoaded || !langLoad) {
            return (
                <div className={"loadlpreload"}>
                    <div className={"loadlpreload"}>
                        <ImpulseSpinner className={"preloaders "} size={40} frontColor="#9181F3" backColor={"#9181F3"} />  </div>
                    <div className={"zaglnow"}>
                    </div>
                </div>
            )
        } else {

            return (
                <div className="main_chat_pro">

                    <div className="wrap">
                        <div className="container">
                            <div className="row ma_chat_row">
                                <div className=" col-lg-12 col-md-12 col-sm-12 col-12 lgs_top ">
                                    <div className="right_chat_pros">


                                        {this.state.chat.active_chats.map((data, idx) => (
                                            <div


                                                onClick={() =>
                                                    this.send({

                                                        id: data.id

                                                    })
                                                }
                                                className={"gr_ch"}>
                                                <img alt="" className={"avatar_chats"} src={data.avatar}></img>
                                                <div className={"rg_chat_list"}>
                                                    <p className={"name_chats_lsss name_chats_lsss00"}>{data.name}</p>
                                                    <p className={"last_time_chats"}>23:59</p>
                                                </div>
                                                <div className={"rg_chat_list"}>
                                                    {console.log(data)}
                                                    {(() => {

                                                        for (var i = 0; i < data.messages.length; i++) {
                                                            if (data.messages[i].message_create_at == data.last_message_in_chat) {
                                                                return (
                                                                    <p className={"name_chats_lsss1 name_chats_lsss1333434"}>
                                                                        {data.messages[i].content}
                                                                    </p>
                                                                )
                                                            }
                                                        }

                                                    })()}


                                                    <p className={"last_time_chats1 unr_chat"}>{data.unread_count}</p>
                                                </div>
                                            </div>

                                        ))}
                                    </div>
                                    {(() => {
                                        console.log(sessionStorage.getItem('ms').length)

                                        if (sessionStorage.getItem('ms').length = null) {
                                            return (
                                                <p></p>
                                            )
                                        }
                                        else if (sessionStorage.getItem('ms').length > 0) {
                                            return (
                                                <div className={"chat_heh_top pro_ch_tri"}>




                                                    {(() => {
                                                        console.log(this.state.chat)



                                                        for (var l = 0; l < this.state.chat.active_chats.length; l++) {

                                                            for (var i = 0; i < this.state.chat.active_chats[l].messages.length; i++) {


                                                                if (this.state.chat.active_chats[l].messages[i].chat_id == sessionStorage.getItem('ms')) {
                                                                    console.log(this.state.chat.active_chats[l].messages[i])
                                                                    return (

                                                                        <ScrollToBottom className={"messsa chat_messassa"}>

                                                                            <div id="messages" ref={(el) => { this.messagesEnd = el; }} className={"disp_wd"}>

                                                                                {this.state.chat.active_chats[l].messages.map((number) =>

                                                                                    <div className={"disp_wd11"}>

                                                                                        {(() => {

                                                                                            if (number.student_id == this.state.create.profile.id || number.teacher_id == this.state.create.profile.id) {

                                                                                                if (number.content_url == null) {
                                                                                                    return (
                                                                                                        <div className={"mes_my"}>

                                                                                                            <p className={"mes_my_p"}>{number.content}</p>
                                                                                                            <img alt="" className={"mess_ff"} src={mess_ff} />
                                                                                                        </div>



                                                                                                    )

                                                                                                } else {
                                                                                                    return (
                                                                                                        <div className={"mes_my"}>

                                                                                                            <p className={"mes_my_p"}><a href={number.content_url} download>{number.content}</a></p>
                                                                                                            <img alt="" className={"mess_ff"} src={mess_ff} />

                                                                                                        </div>

                                                                                                    )
                                                                                                    const messages = document.getElementById('messages');
                                                                                                    const shouldScroll = messages.scrollTop + messages.clientHeight == messages.scrollHeight;
                                                                                                    console.log(shouldScroll)
                                                                                                    if (!shouldScroll) {
                                                                                                        messages.scrollTop = messages.scrollHeight;

                                                                                                    }
                                                                                                }




                                                                                            } else {


                                                                                                if (number.content_url == null) {
                                                                                                    return (
                                                                                                        <div className={"mes_my_no"}>

                                                                                                            <p className={"mes_my_no_p"}>{number.content}</p>
                                                                                                            <img alt="" className={"mess_ff1"} src={mess_ff1} />
                                                                                                        </div>
                                                                                                    )
                                                                                                    const messages = document.getElementById('messages');
                                                                                                    const shouldScroll = messages.scrollTop + messages.clientHeight == messages.scrollHeight;
                                                                                                    console.log(shouldScroll)
                                                                                                    if (!shouldScroll) {
                                                                                                        messages.scrollTop = messages.scrollHeight;

                                                                                                    }
                                                                                                } else {
                                                                                                    return (
                                                                                                        <div className={"mes_my_no"}>

                                                                                                            <p className={"mes_my_no_p"}><a href={number.content_url} download></a>{number.content}</p>
                                                                                                            <img alt="" className={"mess_ff1"} src={mess_ff1} />
                                                                                                        </div>
                                                                                                    )
                                                                                                    const messages = document.getElementById('messages');
                                                                                                    const shouldScroll = messages.scrollTop + messages.clientHeight == messages.scrollHeight;
                                                                                                    console.log(shouldScroll)
                                                                                                    if (!shouldScroll) {
                                                                                                        messages.scrollTop = messages.scrollHeight;

                                                                                                    }
                                                                                                }




                                                                                            }

                                                                                        })()}
                                                                                    </div>




                                                                                )}

                                                                            </div>
                                                                        </ScrollToBottom>
                                                                    )
                                                                }


                                                            }

                                                        }









                                                    })()}





                                                    <label htmlFor="filePicker"
                                                        className={"myst_uploads chat_file_btns"}>

                                                        <img alt="" src={file_scripts_kj} />



                                                    </label>
                                                    <input className={"hid_poop"} id="filePicker"
                                                        onChange={this.onImageChange}
                                                        style={{ visibility: "hidden" }}
                                                        type={"file"}>

                                                    </input>

                                                    <form className="form_mess" onSubmit={this.handleSubmit}>
                                                        <label>

                                                            <input placeholder="Сообщение..." type="text" value={this.state.value} onChange={this.handleChange} />
                                                        </label>

                                                    </form>
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

            const messages = document.getElementById('messages');
            messages.scrollTop = messages.scrollHeight;
        }


    }
}









class MyChart extends Component {
    state = {
        data: [
            {
                "amount": 0,
                "create_date_timestamp": 161497080,

                "name": "Пн, 01",

                "Сум": 33
            },
            {
                "amount": 0,
                "create_date_timestamp": 161497080,

                "name": "Пн, 01",

                "Сум": 10000
            },
            {
                "amount": 0,
                "create_date_timestamp": 161497080,

                "name": "Вт, 02",

                "Сумм": 60000
            },
            {
                "amount": 0,
                "create_date_timestamp": 161497080,

                "name": "Ср, 03",

                "Сумм": 2290
            },


            {
                "amount": 0,
                "create_date_timestamp": 161497080,

                "name": "вв, 07",

                "Сумм": 22222
            }
        ],
        check: false,
        isLoaded: false,
        create: {},
        language: "",
        levels: "",

        name: "",
        birth_country_id: "1",
        email: '',
        languages: [],
        shareholders: [{ language_id: '', level: "", title: "Выберите страну" }],
        lgstate: "",
        contstate: "",
        monst: [{ language_id: "111", level: "" }],
        phone: "",
        send: "",
        enject: false,
        code: '',
        image: null,
        file: null,
        page: "",
        namebirth: null,
        avatar: null,
        pass: "",
        pass1: "",
        radio: true,
        of: false,
        lang: "",
        pay: [{},]
    };
    state = {
        showModal: false,
        showModal1: false,
        showModal2: false,
        showModal3: false,
        showModal8: false,
        showModal10: false

    };
    handleToggleModal = () => this.setState({ showModal: !this.state.showModal });

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

            .then((data2) => {







                if (data2.token_is_valid == false) {
                    localStorage.removeItem("token")
                    localStorage.removeItem("is_user")
                    window.location.replace("/");
                } else {


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
                            // console.log(data)


                            this.setState({
                                lang: data.translates,
                                langLoad: true
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

                            console.log(data)
                            const clonePhoneNumbers = [...data.profile.payments_by_week];

                            for (var i = 0; i < data.profile.payments_by_week.length; i++) {

                                const contact = data.profile.payments_by_week[i]

                                if (contact) {
                                    contact.name = moment(contact.create_date_timestamp * 1000).format("dd, DD")
                                    contact.sum = contact.amount




                                    // contact.amount
                                }
                                // console.log(contact)
                            }
                            const ar = [...clonePhoneNumbers]
                            this.setState({

                                create: data,
                                language: data.data.languages.available_languages,
                                levels: data.data.languages.levels,
                                pay: ar,
                                isLoaded: true,
                            });
                            console.log(data)
                        }
                        )

                }
            }
            )

    }
    render() {
        const { data, pay, isLoaded, langLoad } = this.state

        // console.log(this.state.data)


        if (!this.state.isLoaded || !langLoad) {
            return (
                <div className={"loadlpreload"}>
                    <div className={"loadlpreload"}>
                        <ImpulseSpinner className={"preloaders "} size={40} frontColor="#9181F3" backColor={"#9181F3"} />  </div>
                    <div className={"zaglnow"}>
                    </div>
                </div>
            )
        } else {
            return (
                <div className={"wrap profile_bbl_edents"}>
                    {console.log(this.state.create.profile.teacher_transactions_all)}
                    {this.state.showModal && <div onClick={this.handleToggleModal} className="baccccccc">


                    </div>

                    }

                    {
                        this.state.showModal && <div className="ext_modal222222 cent_lop main_moodddd chat_main">

                            <div className={"gr_top_chat_btns"}>


                                <div className={"chat_tittle chat_tittle1 new_semms gogloms"}>{this.state.lang.historytranzaction.text}</div>
                                <Link><div className={"ext_modal chat_tittle_exit extrens_molokasin"} onClick={this.handleToggleModal}>x</div></Link>

                                <p className={"hist_pop"}>{this.state.lang.financealltransactions.text}</p>


                                <div className={"dindw_loka"}>

                                    {
                                        this.state.create.profile.teacher_transactions_all.map((col, index) => (
                                            <div className={"bulikbulik"}>
                                                <span className="sp_motiks sp_motiks1"><img alt="" src={arr} />{col.amount.toLocaleString()}{this.state.lang.summ.text} </span>
                                                <span className="sp_motiks">{this.state.lang.vigodtransido.text} {col.payment_to_card}</span>
                                                <span className="sp_motiks sp_motiks2">
                                                    {moment(col.create_date_timestamp * 1000).format("DD MMMM, LT")}


                                                </span>
                                                <div className={"linerrrrrrusss"}></div>
                                            </div>
                                        ))
                                    }

                                </div>
                            </div>
                        </div>
                    }
                    {console.log(data)}
                    <div className={"container"}>
                        <div className={"row"}>
                            <div className={" col-lg-12 col-md-4 col-sm-6 col-6 "}>
                                <div className={"no_padd"}>
                                    <div className={"row"}>
                                        <p className={"ob_top1"}>{this.state.lang.obzorik.text}</p>
                                        <p className={"ob_top2"}>{this.state.lang.activesss.text}</p>
                                        <div className={" col-lg-3 col-md-4 col-sm-6 col-6 "}>
                                            <div className={"folow_ob"}>
                                                <img alt="" className={"img_ci_ob"} src={ob1} />
                                                <div className={"scros_ob"}>
                                                    <p className={"numb_ob"}>{this.state.create.profile.profile_watch_count}</p>
                                                    <p className={"tt_ob"}>{this.state.lang.viewprofilecheck.text}</p>
                                                    <img alt="" className={"img_ci_ob img_ci_ob1"} src={what} />

                                                </div>

                                            </div>

                                        </div>

                                        <div className={" col-lg-3 col-md-4 col-sm-6 col-6 "}>
                                            <div className={"folow_ob"}>

                                                <img alt="" className={"img_ci_ob"} src={ob2} />
                                                <div className={"scros_ob"}>

                                                    <p className={"numb_ob"}>{this.state.create.profile.profile_rating.toFixed(2)}</p>
                                                    <p className={"tt_ob"}>{this.state.lang.allratingview.text}</p>
                                                    <img alt="" className={"img_ci_ob img_ci_ob1"} src={what} />

                                                </div>


                                            </div>

                                        </div>


                                        <div className={" col-lg-3 col-md-4 col-sm-6 col-6 "}>
                                            <div className={"folow_ob"}>

                                                <img alt="" className={"img_ci_ob"} src={ob3} />
                                                <div className={"scros_ob"}>

                                                    <p className={"numb_ob"}>{this.state.create.profile.ended_lessons_count} / {this.state.create.profile.all_hours_last_month}
                                                    </p>

                                                    <p className={"tt_ob"}>

                                                        проведенные уроки / проведенные часы
                                                    </p>
                                                    {/* <img alt="" className={"img_ci_ob img_ci_ob1"} src={what} /> */}
                                                </div>


                                            </div>

                                        </div>
                                        <div className={" col-lg-3 col-md-4 col-sm-6 col-6 "}>
                                            <div className={"folow_ob"}>

                                                <img alt="" className={"img_ci_ob"} src={ob4} />
                                                <div className={"scros_ob"}>

                                                    <p className={"numb_ob"}>{this.state.create.profile.feedback_count}</p>
                                                    <p className={" tt_ob"}>{this.state.lang.otzivipolucheniyes.text}</p>
                                                    <img alt="" className={"img_ci_ob img_ci_ob1"} src={what} />

                                                </div>

                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>
                            {console.log(pay)}

                            <p className={"fins_tt"}>{this.state.lang.financetext.text}</p>
                            <div className={"col-lg-8 col-md-4 col-sm-6 col-6 "}>
                                <div className="po_ob_chart">
                                    <p className={"po_ob_chart1"}>{this.state.lang.obshidoxmainkool.text}
                                    </p>
                                    <p className={"po_ob_chart2"}>{this.state.create.profile.amount_by_week.toLocaleString()} сум</p>
                                    <AreaChart width={700} height={289}
                                        data={
                                            pay.map(data => (
                                                {
                                                    "name": data.name,
                                                    "Сум": data.sum
                                                }
                                            ))
                                        }



                                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                                        <defs>

                                            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="5%" stopColor="#FA4343" stopOpacity={1} />
                                                <stop offset="95%" stopColor="#FA4343" stopOpacity={0} />
                                            </linearGradient>
                                        </defs>
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <Tooltip />

                                        <Area type="monotone" dataKey="Сум" stroke="red" fillOpacity={1}
                                            fill="url(#colorPv)" />
                                    </AreaChart>


                                </div>








                                <div className={"mytabes"}>
                                    <table>
                                        <tr>
                                            <th>Количество проведённых уроков за сегодняшний день</th>
                                            <th>Заработанная сумма с вычетом % комиссии платформы за сегодняшний день</th>

                                        </tr>
                                        <tr>
                                            <td>{this.state.create.profile.today_lessons_ended_count}</td>
                                            <td>{this.state.create.profile.today_amount_with_comission.toLocaleString()}</td>

                                        </tr>
                                        <tr>
                                            <td>Количество проведённых уроков за текущий месяц</td>
                                            <td>Заработанная сумма с вычетом % комиссии платформы за текущий месяц</td>

                                        </tr>
                                        <tr>
                                            <td>{this.state.create.profile.cur_month_lessons_ended_count}</td>
                                            <td>{this.state.create.profile.all_amount_cur_month.toLocaleString()}</td>

                                        </tr>

                                    </table>
                                </div>
                            </div>
                            <div className={"col-lg-4 col-md-4 col-sm-6 col-6 "}>


                                <div className={"ddddddfff col-lg-12 col-md-4 col-sm-6 col-6 "}>
                                    <div onClick={this.handleToggleModal} className={"nai_op"}>
                                        {/* <p>{this.state.lang.historytransaction.text}</p> */}
                                        Ожидаемая сумма выплаты: <p className={"sms_po_btn_tittle_pooo"}>{this.state.create.profile.amount_total_with_comission.toLocaleString()} {this.state.lang.summ.text}</p>
                                        <Link>
                                            <div className={"btn_pooo"}>
                                                <p className={"tittle_btn_pooooo"}>{this.state.lang.historytransaction.text}</p>
                                                <img alt="" src={credit} />
                                            </div>
                                        </Link>


                                    </div>
                                </div>
                                <div className={"ddddddfff col-lg-12 col-md-4 col-sm-6 col-6 "}>
                                    <div className={"nai_op"}>
                                        Потенциальный заработок от незавершенных занятий:
                                        {/* <p>{this.state.lang.ojidaembalansefour.text}</p> */}
                                        <Link className={"bopdsifpodsif344"}>
                                            <img alt="" src={btn_top_viewwss}></img>
                                        </Link>
                                        <p className={"sms_po_btn_tittle_pooo"}>{this.state.create.profile.potencial_amount.toLocaleString()} {this.state.lang.summ.text}</p>

                                        {(() => {

                                            if (this.state.create.profile.teacher_transactions_list.length == 0) {
                                                return (
                                                    <p></p>
                                                )
                                            } else {
                                                return (
                                                    <div>
                                                        {
                                                            this.state.create.profile.teacher_transactions_list.map((col, index) => (
                                                                <div className={"ft0999"}>

                                                                    <p className={"le_000000"}>
                                                                        {col.student__name}
                                                                    </p>

                                                                    <p className={"le_0000001"}>{col.ended_count}/{col.not_ended_count}</p>
                                                                    <Progress
                                                                        theme={{
                                                                            success: {
                                                                                symbol: '‍',
                                                                                color: 'rgb(223, 105, 180)'
                                                                            },
                                                                            active: {
                                                                                symbol: '',
                                                                                color: '#fbc630'
                                                                            },
                                                                            default: {
                                                                                symbol: '',
                                                                                color: '#fbc630'
                                                                            }
                                                                        }}

                                                                        percent={col.ended_count / col.not_ended_count * 100} />
                                                                </div>

                                                            ))}
                                                    </div>
                                                )
                                            }

                                        })()}





                                    </div>
                                </div>
                            </div>
                            <div className={"col-lg-12 col-md-4 col-sm-6 col-6 "}>
                                <p className={"today_page_obz"}>{this.state.lang.todaysmain.text}</p>
                                <div className={"npdd00 col-lg-12 col-md-4 col-sm-6 col-6 "}>


                                    <div className={" bolls_cont_main "}>
                                        <div className={"row row_today"}>
                                            <div className={"mlo0099 col-lg-4 col-md-4 col-sm-6 col-6 "}>



                                                <p className="ion_ps">{this.state.lang.STUDENT.text}</p>
                                            </div>

                                            <div className={"mlo0099 col-lg-2 col-md-4 col-sm-6 col-6 "}>


                                                <p className="ion_ps">{this.state.lang.PROYDENUROK.text}</p>
                                            </div>
                                            <div className={"mlo0099 col-lg-2 col-md-4 col-sm-6 col-6 "}>


                                                <p className="ion_ps">{this.state.lang.OSTALOUROK.text}</p>
                                            </div>

                                            <div className={"mlo0099 col-lg-4 col-md-4 col-sm-6 col-6 "}>


                                                <p className="ion_ps">{this.state.lang.POSLEDNIYUROKS.text}</p>
                                            </div>
                                        </div>



                                        {(() => {
                                            if (this.state.create.profile.teacher_today_lessons.length == 0) {
                                                return (<p>

                                                </p>)
                                            } else {
                                                return (

                                                    <div>
                                                        {this.state.create.profile.teacher_today_lessons.map((cont, idx) => (
                                                            <div className={"row "}>
                                                                <div className={"linesspop099009"}></div>
                                                                <div className={"mlo0099 col-lg-4 col-md-4 col-sm-6 col-6 "}>


                                                                    <img alt="" className={"io33333"} src={cont.sudent_avatar_url} />
                                                                    <p className="pop_stud_title">{cont.student__name}</p>
                                                                    <p className="pop_stud_title pop_stud_title1">{cont.lesson__type_name}</p>

                                                                </div>

                                                                <div className={"mlo0099 col-lg-2 col-md-4 col-sm-6 col-6 "}>


                                                                    <p className={"p_selectors"}>{cont.ended_lessons_count}</p>
                                                                </div>
                                                                <div className={"mlo0099 col-lg-2 col-md-4 col-sm-6 col-6 "}>


                                                                    <p className={"p_selectors"}>{cont.lessons_not_ended_count}</p>
                                                                </div>

                                                                <div className={"mlo0099 col-lg-4 col-md-4 col-sm-6 col-6 "}>


                                                                    <p className={"p_selectors"}>{moment(cont.last_lesson_timestamp * 1000).format("ll, LT")}</p>
                                                                </div>


                                                            </div>
                                                        ))}




                                                    </div>

                                                )
                                            }


                                        })()}

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


export default class Profile extends Component {

    constructor() {
        super()
        this.state = {
            isLoaded: false,
            create: "",
            langLoad: false,
            lang: ""
        }
        this.lagout = this.lagout.bind(this)
    }
    lagout(e) {
        e.preventDefault()
        localStorage.removeItem("token")
        localStorage.removeItem("is_user")
        window.location.replace("/");

    }








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
                    langLoad: true,
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

                console.log(data)
                if (localStorage.getItem('token')) {
                    this.setState({

                        // isLoaded: true,
                        create: data,
                        isLoaded: true
                    })
                } else {
                    window.location.href = "/"
                }



            }
            )



    }

    render() {
        const { isLoaded, isLoad, langLoad } = this.state
        if (!isLoaded || !langLoad) {
            return (
                <p></p>
            )
        } else {
            return (
                <Router>
                    <div className={"profile_left_block_controls"}>
                        <div className={"profile_left_block_controls_view"}>


                            {console.log(this.state.create)}
                            {(() => {

                                if (this.state.create.profile.is_user == false) {
                                    return (
                                        <ul>

                                            <p>
                                                <img alt="" src={obzor} />


                                                <Link to="/obzor/">{this.state.lang.obzorik.text}</Link>
                                            </p>
                                            <p>
                                                <img alt="" src={calendar} />
                                                <Link to="/about">{this.state.lang.mygrapicia.text}</Link>
                                            </p>
                                            <p>
                                                <img alt="" src={lesson} />
                                                <Link to="/lesson">{this.state.lang.mystudentese.text}</Link>

                                            </p>
                                            <p>
                                                <img alt="" src={lesson} />
                                                <Link to="/group">{this.state.lang.mygoupstranslates.text}</Link>

                                            </p>
                                            <div className={"line_left_profs"}></div>
                                            <p>
                                                <img alt="" src={setting} />
                                                <Link to="/profile/">{this.state.lang.settingmain.text}</Link>
                                            </p>
                                            <p onClick={this.lagout}>
                                                <img alt="" src={setting} />
                                                <Link to="/">{this.state.lang.exittranslate.text}</Link>
                                            </p>
                                        </ul>
                                    )

                                } else {
                                    return (

                                        <ul>
                                            <p>
                                                <img alt="" src={lesson} />
                                                <Link to="/lesson">{this.state.lang.mylessontranlastre.text}</Link>

                                            </p>

                                            <p>
                                                <img alt="" src={calendar} />
                                                <Link to="/about">{this.state.lang.lessontimetranslate.text}</Link>
                                            </p>


                                            <div className={"line_left_profs"}></div>
                                            <p>
                                                <img alt="" src={setting} />
                                                <Link to="/profile/">{this.state.lang.settingmain.text}</Link>
                                            </p>
                                            <p onClick={this.lagout}>
                                                <img alt="" src={setting} />
                                                <Link to="/">{this.state.lang.exittranslate.text}</Link>
                                            </p>
                                        </ul>
                                    )
                                }

                            })()}






                        </div>

                        {/* A <Switch> looks through its children <Route>s and
                     renders the first one that matches the current URL. */}
                        <Switch>

                            <Route path="/obzor/">
                                <MyChart />
                            </Route>
                            <Route path="/about/">
                                <About />
                            </Route>
                            {/* <Route path="/users/">
                            <Users/>
                        </Route> */}
                            <Route path="/profile/">
                                <Setting />
                            </Route>

                            <Route path="/group/">
                                <Group />
                            </Route>

                            <Route path="/lesson/">
                                <Lesson />
                            </Route>

                        </Switch>
                    </div>
                </Router>
            )
        }

    }


}

class Lesson extends Component {


    constructor(props) {
        super(props)
        this.state = {
            langLoad: false,
            isLoaded: false,
            create: "",
            lang: "",
            rand:"",
            gruppa: false,
            main: '',
            isLoad: false,
            page: 1,
            all_pages: 1,
            current_page: 1,
            showModal: false,
            showModal1: false,
            showModal2: false,
            showModal3: false,
            newline: "",
            mainog:"1",
            todatTime: "",
            mainID: "",
            text_main: "",
            maid: false,
        }
        this.Onchange = this.Onchange.bind(this);
        this.paga = this.paga.bind(this);
        this.gr = this.gr.bind(this);
        this.private = this.private.bind(this);

    }
    paga = obj => {
        console.log(obj.id)

        for (var b = 0; b < this.state.newline.length; b++) {


            if (this.state.newline[b].id == obj.id) {

                console.log(this.state.newline[b])
                console.log(b)

                fetch('https://api.mydars.uz/api/get_lessons/', {
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

                        "order_id": obj.id,
                        "page": this.state.newline[b].lessons_pagination.paginations.current_page + 1

                    })

                })


                    .then(res => res.json())

                    .then((data) => {

                        console.log(data)
                        // console.log(this.state.page + 1)

                        if (data.lessons_in_order.length > 0) {
                            for (var i = 0; i < this.state.newline.length; i++) {
                                // console.log(this.state.create.all_student_orders[i])
                                // console.log(i)
                                //    console.log(main[i])
                                const { newline } = this.state
                                const clonePhoneNumbers = [...newline];
                                // console.log(i)
                                // console.log(newline[i].lessons_pagination.all_student_lessons)
                                const contact = clonePhoneNumbers[i].lessons_pagination.paginations
                                if (newline[i].id == obj.id) {
                                    Array.prototype.push.apply(this.state.newline[i].lessons_pagination.all_student_lessons, data.lessons_in_order)

                                    if (contact) {
                                        contact.all_pages = data.paginations.all_pages
                                        contact.current_page = data.paginations.current_page
                                    }

                                }
                                //    Array.prototype.push.apply(this.state.newline[i].lessons_pagination.all_student_lessons, data.lessons_in_order)
                                // this.state.create.all_student_orders[i].lessons_list.push(...data.lessons_in_order)
                                // console.log(this.state.main)




                                console.log(clonePhoneNumbers)
                                this.setState({
                                    //   isLoaded: true,
                                    newline: clonePhoneNumbers,
                                    page: this.state.page + 1,
                                    main: this.state.main,
                                    current_page: data.all_pages,
                                    all_pages: data.all_pages
                                })

                            }
                        }



                    }
                    )


            }





        }



    }
    state = {
        showModal: false,
        showModal1: false,
        showModal2: false,
        showModal3: false

    };

    handleToggleModal = (obj) => this.setState({
        showModal: !this.state.showModal,
        mainID: obj.id,
        isLoaded: true,
    });




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

            .then((data2) => {
                if (data2.token_is_valid == false) {
                    localStorage.removeItem("token")
                    localStorage.removeItem("is_user")
                    window.location.replace("/");
                } else {

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
                    var timeInMs = Date.now();
                    console.log(timeInMs / 1000)
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
                            this.setState({
                                main: data,
                                isLoad: true,
                                todatTime: timeInMs
                            })

                        })

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
                                                            
                                    this.setState({
                                        rand: data
                                    })
                            })

                    moment.lang('ru');
                    moment.locale('ru')
                    fetch('https://api.mydars.uz/api/get_orders/', {
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


                            "page": 1


                        })

                    })


                        .then(res => res.json())

                        .then((data) => {
                            console.log(data)
                            if (data.all_student_orders) {
                                this.setState({
                                    isLoaded: true,
                                    create: data,
                                    newline: data.all_student_orders
                                })
                            } else {
                                this.setState({
                                    isLoaded: true,
                                    create: data,
                                    newline: data.all_teacher_orders
                                })
                            }
                            console.log(data)



                        }
                        )

                }

            })

    }

    saveMobile2(obj) {
        console.log(obj)
        window.location.replace("/conference/" + obj.url + "/" + obj.id);



    }

    Onchange(e) {
        console.log(e.target.value)
        this.setState({
            text_main: e.target.value
        })
    }

    saveMobile88(obj) {
        this.setState({
            isLoaded: false
        })
        console.log(this.state.main.profile.id)
        console.log(obj)
        const main = {
            "teacher_id": this.state.main.profile.id, "teacher_lesson_id": obj.te, "group_id": obj.gr

        }
        if(this.state.main.profile.is_user == false){
            fetch('https://api.mydars.uz/api/conference/create/', {
                method: 'POST',
    
                headers: {
                    // 'auth': 'ef899a6d-29d6-4130-8b59-3d95dfbcc9bd',
                    'lang': localStorage.getItem('lang'),
                    // 'Content-Type': 'application/json',
                    'auth': "ef899a6d-29d6-4130-8b59-3d95dfbcc9bd",
                    // 'lang': "uz"
                    'token': localStorage.getItem('token'),
    
                },
    
                body: JSON.stringify(main)
    
            })
    
    
                .then(res => res.json())
    
                .then((data) => {
    
                    console.log(data)
                    
                    if (data.join_url_moderator) {
                        console.log("fffffffffff")
                        // window.location.replace("/gconf/" + obj.gr + "/" + obj.te + "/" + this.state.main.profile.id);
    
                        window.location.replace(data.join_url_moderator);
                    }
                    this.setState({
                        // isLoaded: true,
    
                    })
    
    
                }
                )
        }else{
        
            // window.location.replace("/gconf/" + obj.gr + "/" + obj.te + "/" + this.state.main.profile.id);
        }
        
    }

    saveMobile0(obj) {
        this.setState({
            isLoaded: false
        })
        console.log(obj)
        const main = {
            "teacher_id": obj.tid, "lesson_id": obj.lid

        }
        fetch('https://api.mydars.uz/api/conference/create/', {
            method: 'POST',

            headers: {
                // 'auth': 'ef899a6d-29d6-4130-8b59-3d95dfbcc9bd',
                'lang': localStorage.getItem('lang'),
                // 'Content-Type': 'application/json',
                'auth': "ef899a6d-29d6-4130-8b59-3d95dfbcc9bd",
                // 'lang': "uz"
                'token': localStorage.getItem('token'),

            },

            body: JSON.stringify(main)

        })


            .then(res => res.json())

            .then((data) => {

                console.log(data)
                console.log(data)
                if (data.join_url_moderator) {
                    console.log(data)
                    // window.location.replace(data.join_url_moderator);


                }
                this.setState({
                    // isLoaded: true,

                })


            }
            )
    }
    saveMobile9() {
        console.log("fsdfds")

        fetch('https://api.mydars.uz/api/ticket/create/', {
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
                "teacher_lesson_id": this.state.mainID,
                "ticket_text": this.state.text_main
            })

        })


            .then(res => res.json())

            .then((data) => {
                console.log(data)
                if (data.create_tt == true) {
                    this.setState({
                        maid: true
                    })
                }
            })
    }
    private(){
this.setState({
    gruppa:false
})
    }
    gr(){
        this.setState({
            gruppa:true
        })
    }
    render() {
        var march = moment('2017-03')
        // console.log(march.format('MMMM')) // '/March'
        // console.log(this.state.mainID)
        moment.locale('de') // returns the new locale, in this case 'de'
        // console.log(march.format('MMMM')) // 'March' still, since the instance was before the locale was set

        var deMarch = moment('2017-03')
        // console.log(deMarch.format('MMMM')) // 'März'

        // You can, however, change just the locale of a specific moment
        march.locale('es')
        console.log(march.format('MMMM')) // 'Marzo'
        const { isLoaded, isLoad, langLoad } = this.state
        if (!isLoaded || !isLoad || !langLoad) {
            return (
                <div className={"loadlpreload"}>
                    <div className={"loadlpreload11"}>
                        <ImpulseSpinner className={"preloaders "} size={40} frontColor="#9181F3" backColor={"#9181F3"} />  </div>
                    <div className={"zaglnow"}>
                    </div>
                </div>
            )
        } else {
            if (this.state.main.profile.is_user == false) {
                if(this.state.gruppa == true){
/* ///////////////// */


if (this.state.rand == "" || this.state.rand == undefined || this.state.rand.orders_group.length == 0 ) {
    return (
        <div className={"wrap profile_bbl_edents"}>
        <div className={"container"}>
            <div className={"row"}>
            <h1>У вас нет активных групп</h1>
        </div></div></div>
    )
} else {
    return (
        <div className={"wrap profile_bbl_edents"}>
            <div className={"container"}>
                <div className={"row"}>
                    <div className={" col-lg-12 col-md-4 col-sm-6 col-6 "}>
                        <div className={"my_gr_pr_one"}>
                            <p className={"mylesss_tt"}>{this.state.lang.myuroks.text}</p>
                        <button className='grGro ' onClick={this.private}>Индивидуальные уроки</button>

                            {/* <p className={"add_new_less_form"}>{this.state.lang.newkursmain.text}<img alt="" src={profileplus} /></p> */}
                        </div>
                       



                    </div>


                </div>
            </div>
        </div>
    );
}


/*//////////*/
                }else{

               
                if (this.state.create.all_teacher_orders == "" || this.state.create.all_teacher_orders == undefined) {
                    return (
                        <div>
                                               <div className={"container"}>
                                        <div className={"row"}>
                                            <div className={" col-lg-12 col-md-4 col-sm-6 col-6 "}>
        
        
                                                <div className={"my_gr_pr_one"}>
                                                    <p className={"mylesss_tt"}>{this.state.lang.myuroks.text}</p>
                                                    <button className='grGro grGroActive' onClick={this.private}>Индивидуальные уроки</button>

                                                    {/* <p className={"add_new_less_form"}><img alt="" src={profileplus} /></p> */}
                                                </div></div></div></div>
                        </div>
                            )
                } else {
                    return (
                        <div className={"wrap profile_bbl_edents"}>
                            <div className={"container"}>
                                <div className={"row"}>
                                    <div className={" col-lg-12 col-md-4 col-sm-6 col-6 "}>
                                        <div className={"my_gr_pr_one"}>
                                            <p className={"mylesss_tt"}>{this.state.lang.myuroks.text}</p>
                                            <button className='grGro grGroActive' >Индивидуальные уроки</button>
                                          
                                           
                                            {/* <p className={"add_new_less_form"}>{this.state.lang.newkursmain.text}<img alt="" src={profileplus} /></p> */}
                                        </div>
                                        {console.log(this.state.newline)}
                                        {this.state.newline.map((lop, index) => (
                                            <div className={"whta_hist"}>
                                                <div className={" main_no_pa"}>
                                                    <div className={"row row_line_sty"}>
                                                        <div className={" col-lg-12 col-md-4 col-sm-6 col-6 pddsss"}>
                                                            <div className={"gr_nameff11"}>
                                                                <img alt="" className={"mini_avatar_fulcal"} src={lop.student__avatar_url}></img>
                                                            </div>

                                                            <div className={"gr_nameff22"}>

                                                                <p className="gr_nameff2244">{lop.student__name}</p>
                                                                <p>Студент</p>
                                                                {/* {console.log(lop)} */}
                                                            </div>


                                                        </div>
                                                        <div className={"line_lool"}></div>
                                                        <div className={" col-lg-12 col-md-4 col-sm-6 col-6 pddsss"}>

                                                            <div className={" main_no_pa cont_dfdf"}>
                                                                <div className={"row row_line_sty mff_row"}>

                                                                    <div className={" col-lg-4 col-md-4 col-sm-6 col-6 "}>


                                                                        <p className={"mg_pop sers_tet"}>{this.state.lang.DATEUROKS.text}</p>


                                                                    </div>
                                                                    <div className={" col-lg-4 col-md-4 col-sm-6 col-6 "}>


                                                                        <p className={"mg_pop sers_tet"}>{this.state.lang.STATUS.text}</p>


                                                                    </div>


                                                                </div>
                                                            </div>


                                                        </div>
                                                        <div className={"line_lool"}></div>

                                                        {lop.lessons_pagination.all_student_lessons.map((data, idx) => (
                                                            <div className={"wd_muo_uroks"}>
                                                                {(() => {
                                                                    if (data.is_paid == true) {
                                                                        return (

                                                                            <div className={" col-lg-12 col-md-4 col-sm-6 col-6 pddsss"}>



                                                                                <div className={" main_no_pa cont_dfdf"}>
                                                                                    <div className={"row row_line_sty mff_row"}>

                                                                                        <div className={" col-lg-4 col-md-4 col-sm-6 col-6 "}>


                                                                                            <p className={"mg_pop"}>{moment(data.lesson_start_timestamp_new * 1000).format("dddd, DD MMMM, В HH:mm")}</p>


                                                                                        </div>
                                                                                        <div className={" col-lg-2 col-md-4 col-sm-6 col-6 "}>


                                                                                            <p className={"mg_pop"}>{data.status_name}</p>


                                                                                        </div>
                                                                                        {(() => {
                                                                                            if (data.is_ended == true) {
                                                                                                return (
                                                                                                    <div

                                                                                                        className={" col-lg-2 col-md-4 col-sm-6 col-6 txt_rg_cen"}>


                                                                                                        <div className={"mg_pop"}>{this.state.lang.voyti.text}</div>


                                                                                                    </div>

                                                                                                )
                                                                                            } else {
                                                                                          
                                                                                                if (moment().unix() >= data.lesson_start_timestamp_new || data.lesson_start_timestamp_new - moment().unix() <= 1800) {
                                                                                                    return (

                                                                                                        <div

                                                                                                            className={" col-lg-2 col-md-4 col-sm-6 col-6 txt_rg_cen"}>


                                                                                                            <Link onClick={() =>
                                                                                                                this.saveMobile0({
                                                                                                                    tid: lop.teacher_id,
                                                                                                                    lid: data.teacher_lesson_id,
                                                                                                                    or: lop.id
                                                                                                                })
                                                                                                            } className={"mg_pop"}>{this.state.lang.voyti.text}{console.log(data)}

                                                                                                            </Link>


                                                                                                        </div>

                                                                                                    )
                                                                                                } else {
                                                                                                    return (
                                                                                                        <div

                                                                                                            className={" col-lg-2 col-md-4 col-sm-6 col-6 txt_rg_cen"}>


                                                                                                            <div className={"mg_pop"}>{this.state.lang.voyti.text}</div>


                                                                                                        </div>

                                                                                                    )
                                                                                                }

                                                                                            }

                                                                                        })()}



                                                                                        {(() => {
                                                                                            if (data.is_ended == true || this.state.todatTime / 1000 >= data.lesson_end_timestamp) {
                                                                                                return (
                                                                                                    <div
                                                                                                        className={" col-lg-1 col-md-4 col-sm-6 col-6 txt_rg"}>

                                                                                                        <p className={"mg_pop"}>
                                                                                                            <div>
                                                                                                                {this.state.lang.perenos.text}</div>
                                                                                                        </p>


                                                                                                    </div>

                                                                                                )
                                                                                            } else {
                                                                                                return (
                                                                                                    <div
                                                                                                        className={" col-lg-1 col-md-4 col-sm-6 col-6 txt_rg"}>

                                                                                                        <p className={"mg_pop"}>
                                                                                                            <a href={"/rend/" + data.teacher_id + "/" + data.teacher_lesson_id}>
                                                                                                                {this.state.lang.perenos.text}</a>
                                                                                                        </p>


                                                                                                    </div>

                                                                                                )
                                                                                            }

                                                                                        })()}


                                                                                        <div
                                                                                            className={" col-lg-3 col-md-4 col-sm-6 col-6 txt_rg"}>


                                                                                            <p className={"mg_pop"}>{this.state.lang.soobshenitlopo.text}
                                                                                            </p>


                                                                                        </div>

                                                                                    </div>

                                                                                    <div className={"line_lool"}></div>

                                                                                </div>




                                                                            </div>

                                                                        )
                                                                    }
                                                                })()}


                                                            </div>



                                                        ))}

                                                        {(() => {

                                                            if (lop.lessons_pagination.all_student_lessons.length < 5) {
                                                                return (
                                                                    <p></p>
                                                                )
                                                            } else {

                                                                if (lop.lessons_pagination.paginations.all_pages == lop.lessons_pagination.paginations.current_page) {
                                                                    return (
                                                                        <p></p>
                                                                    )

                                                                } else {
                                                                    return (
                                                                        <div className={"pagaa"}>

                                                                            <Link className={"esesds"}

                                                                                onClick={() =>
                                                                                    this.paga({
                                                                                        id: lop.id
                                                                                    })}
                                                                            >
                                                                                Посмотреть ещё <img alt="" className={"arrrbottoms"} src={downarrraa}></img>
                                                                            </Link>
                                                                        </div>
                                                                    )
                                                                }




                                                            }

                                                        })()}

                                                    </div>
                                                </div>
                                            </div>



                                        ))}










                                    </div>


                                </div>
                            </div>
                        </div>
                    );
                }
            }
            } else {
                if(this.state.gruppa == true){
                    /* ///////////////// */
                    
                    
                    if (this.state.rand == "" || this.state.rand == undefined || this.state.rand.orders_group.length == 0 ) {
                        return (
                            <div className={"wrap profile_bbl_edents"}>
                            <div className={"container"}>
                                <div className={"row"}>
                                <h1>У вас нет активных групп</h1>
                            </div></div></div>
                        )
                    } else {
                        return (
                            <div className={"wrap profile_bbl_edents"}>
                                {this.state.showModal && <div onClick={this.handleToggleModal} className="baccccccc">
                        
                        
                        </div>

                        }



                        {this.state.showModal && <div className="modal  modal_trabl trabl_show_modules">


                            <Link className={"ext_modal"} onClick={this.handleToggleModal}>x</Link>



                            {(() => {

                                if (this.state.maid == false) {
                                    return (
                                        <div>
                                            <h3 className="text_soobsens">{this.state.lang.tiketproblemsend.text}</h3>
                                            <p className="texyt_roboro">{this.state.lang.opihproblemsnote.text}</p>
                                            <textarea className={"textareasdsd"} onChange={this.Onchange} placeholder="Например, если вы не довольны качеством проведенного урока..." id="w3review" name="w3review" rows="5" cols="50">

                                            </textarea>

                                            <Link onClick={() =>
                                                this.saveMobile9({})
                                            } className={"ne_pa_data btn_cust_pup width_100"}>
                                                {this.state.lang.accept.text} <img alt="" className={"ne_pa"} />
                                            </Link>
                                        </div>
                                    )
                                } else {
                                    return (
                                        <div>

                                            <img alt="" className="img_tran" src={tran}></img>
                                            <p className="mopos_001">{this.state.lang.vasheobrashprinay.text}</p>
                                            <p className="mopos_002">{this.state.lang.miobrashpriyatn.text}
                                            </p>


                                            <Link onClick={this.handleToggleModal} className={"ne_pa_data btn_cust_pup width_100 lop_00098090"}>
                                                {this.state.lang.returnmain.text} <img alt="" className={"ne_pa"} />
                                            </Link>


                                        </div>
                                    )
                                }
                            })()}




                        </div>
                        }
                                <div className={"container"}>
                                    <div className={"row"}>
                                        <div className={" col-lg-12 col-md-4 col-sm-6 col-6 "}>
                                            <div className={"my_gr_pr_one"}>
                                                <p className={"mylesss_tt"}>{this.state.lang.myuroks.text}</p>
                                                    <button className='grGro ' onClick={this.private}>Индивидуальные уроки</button>
                                                <button className='grGro grGroActive' onClick={this.gr}>Групповые уроки</button>
                                                {/* <p className={"add_new_less_form"}>{this.state.lang.newkursmain.text}<img alt="" src={profileplus} /></p> */}
                                            </div>
                                            {console.log(this.state.newline)}
                                            {this.state.rand.orders_group.map((lop, index) => (
                                                <div className={"whta_hist"}>
                                                    <div className={" main_no_pa"}>
                                                        <div className={"row row_line_sty"}>
                                                            <div className={" col-lg-12 col-md-4 col-sm-6 col-6 pddsss"}>
                                                                <div className={"gr_nameff11"}>
                                                                    <img alt="" className={"mini_avatar_fulcal"} src={lop.teacher__avatar_url}></img>
                                                                </div>
                    
                                                                <div className={"gr_nameff22"}>
                    
                                                                    <p className="gr_nameff2244">{lop.teacher__name} {lop.teacher__surename}</p> 
                                                                    <p>Преподаватель</p>
                                                                    {/* {console.log(lop)} */}
                                                                </div>
                    
                    
                                                            </div>
                                                            <div className={"line_lool"}></div>
                                                            <div className={" col-lg-12 col-md-4 col-sm-6 col-6 pddsss"}>
                    
                                                                <div className={" main_no_pa cont_dfdf"}>
                                                                    <div className={"row row_line_sty mff_row"}>
                    
                                                                        <div className={" col-lg-4 col-md-4 col-sm-6 col-6 "}>
                    
                    
                                                                            <p className={"mg_pop sers_tet"}>{this.state.lang.DATEUROKS.text}</p>
                    
                    
                                                                        </div>
                                                                        <div className={" col-lg-4 col-md-4 col-sm-6 col-6 "}>
                    
                    
                                                                            <p className={"mg_pop sers_tet"}>{this.state.lang.STATUS.text}</p>
                    
                    
                                                                        </div>
                    
                    
                                                                    </div>
                                                                </div>
                    
                    
                                                            </div>
                                                            <div className={"line_lool"}></div>
                    

                                                            {lop.lessons_list.map((data, idx) => (
                                                                <div className={"wd_muo_uroks"}>
                                                                  
                    
                                                                                <div className={" col-lg-12 col-md-4 col-sm-6 col-6 pddsss"}>
                    
                    
                    
                                                                                    <div className={" main_no_pa cont_dfdf"}>
                                                                                        <div className={"row row_line_sty mff_row"}>
                    
                                                                                            <div className={" col-lg-4 col-md-4 col-sm-6 col-6 "}>
                    
                    
                                                                                                <p className={"mg_pop"}>{moment(data.lesson_start_timestamp_new * 1000).format("dddd, DD MMMM, В HH:mm")}</p>
                    
                    
                                                                                            </div>
                                                                                            <div className={" col-lg-2 col-md-4 col-sm-6 col-6 "}>
                    
                    
                                                                                                <p className={"mg_pop"}>{data.status_name}</p>
                    
                    
                                                                                            </div>
                                                                                            {console.log(moment().unix())}
                                                                                            {(() => {
                                                                                                 if (data.is_ended == false) {
                                                                                         if(data.lesson_url_student.length == 0){
                                                                                            return (
                                                                                                <div
            
                                                                                                    className={" col-lg-2 col-md-4 col-sm-6 col-6 txt_rg_cen"}>
            
            
                                                                                                    <div className={"mg_pop"}>{this.state.lang.voyti.text}</div>
            
            
                                                                                                </div>
            
                                                                                            )
                                                                                         }else{
                                                                                            return (
                    
                                                                                                <div
            
                                                                                                    className={" col-lg-2 col-md-4 col-sm-6 col-6 txt_rg_cen"}>
            
            
                                                                                                    <Link onClick={() =>
                                                                                                        this.saveMobile88({
                                                                                                           
                                                                                                            te: data.teacher_lesson_id,
                                                                                                            gr: data.group_id
                                                                                                        })
                                                                                                    } className={"mg_pop"}>{this.state.lang.voyti.text}
            
                                                                                                    </Link>
            
            
                                                                                                </div>
            
                                                                                            )
                                                                                         }
                                                                                                } else {
                                                                                                    return (
                                                                                                        <div
                    
                                                                                                            className={" col-lg-2 col-md-4 col-sm-6 col-6 txt_rg_cen"}>
                    
                    
                                                                                                            <div className={"mg_pop"}>{this.state.lang.voyti.text}</div>
                    
                    
                                                                                                        </div>
                    
                                                                                                    )
                                                                                                }
                    
                                                                                            })()}
                    
                    
                    
                    
                                                                                            <div
                                                                                                className={" col-lg-3 col-md-4 col-sm-6 col-6 txt_rg"}>
                    
                    {(() => {
                                                                                                 if (data.is_ended == true) {
                                                                                      return(
                                                                                        <Link
                                                                                        onClick={() =>
                                                                                         this.handleToggleModal({
                                                                                             id: data.teacher_lesson_id
                                                                                         })

                                                                                     } className={"mg_pop"}>{this.state.lang.soobshenitlopo.text}
                 </Link>
                                                                                      )
                                                                                              
                                                                                                }else{
                                                                                                    return(
                                                                                                        <p
                                                                                                 
                
                                                                                                     className={"mg_pop"}>{this.state.lang.soobshenitlopo.text}
                                 </p>
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
                                                    </div>
                                                </div>
                    
                    
                    
                                            ))}
                    
                    
                    
                                        </div>
                    
                    
                                    </div>
                                </div>
                            </div>
                        );
                    }
                    
                    
                    /*//////////*/
                                    }else{

                                        if (this.state.create.all_student_orders == "" || this.state.create.all_student_orders == undefined) {
                                            return (
                                        <div>
                                                               <div className={"container"}>
                                                        <div className={"row"}>
                                                            <div className={" col-lg-12 col-md-4 col-sm-6 col-6 "}>
                        
                        
                                                                <div className={"my_gr_pr_one"}>
                                                                    <p className={"mylesss_tt"}>{this.state.lang.myuroks.text}</p>
                                                                    <button className='grGro grGroActive' onClick={this.private}>Индивидуальные уроки</button>
<button className='grGro ' onClick={this.gr}>Групповые уроки</button>
                                                                    {/* <p className={"add_new_less_form"}><img alt="" src={profileplus} /></p> */}
                                                                </div></div></div></div>
                                        </div>
                                            )
                        
                                        } else {
                                            return (
                                                <div className={"wrap profile_bbl_edents"}>
                                                    {this.state.showModal && <div onClick={this.handleToggleModal} className="baccccccc">
                        
                        
                                                    </div>
                        
                                                    }
                        
                        
                        
                                                    {this.state.showModal && <div className="modal  modal_trabl trabl_show_modules">
                        
                        
                                                        <Link className={"ext_modal"} onClick={this.handleToggleModal}>x</Link>
                        
                        
                        
                                                        {(() => {
                        
                                                            if (this.state.maid == false) {
                                                                return (
                                                                    <div>
                                                                        <h3 className="text_soobsens">{this.state.lang.tiketproblemsend.text}</h3>
                                                                        <p className="texyt_roboro">{this.state.lang.opihproblemsnote.text}</p>
                                                                        <textarea className={"textareasdsd"} onChange={this.Onchange} placeholder="Например, если вы не довольны качеством проведенного урока..." id="w3review" name="w3review" rows="5" cols="50">
                        
                                                                        </textarea>
                        
                                                                        <Link onClick={() =>
                                                                            this.saveMobile9({})
                                                                        } className={"ne_pa_data btn_cust_pup width_100"}>
                                                                            {this.state.lang.accept.text} <img alt="" className={"ne_pa"} />
                                                                        </Link>
                                                                    </div>
                                                                )
                                                            } else {
                                                                return (
                                                                    <div>
                        
                                                                        <img alt="" className="img_tran" src={tran}></img>
                                                                        <p className="mopos_001">{this.state.lang.vasheobrashprinay.text}</p>
                                                                        <p className="mopos_002">{this.state.lang.miobrashpriyatn.text}
                                                                        </p>
                        
                        
                                                                        <Link onClick={this.handleToggleModal} className={"ne_pa_data btn_cust_pup width_100 lop_00098090"}>
                                                                            {this.state.lang.returnmain.text} <img alt="" className={"ne_pa"} />
                                                                        </Link>
                        
                        
                                                                    </div>
                                                                )
                                                            }
                                                        })()}
                        
                        
                        
                        
                                                    </div>
                                                    }
                                                    <div className={"container"}>
                                                        <div className={"row"}>
                                                            <div className={" col-lg-12 col-md-4 col-sm-6 col-6 "}>
                        
                        
                                                                <div className={"my_gr_pr_one"}>
                                                                    <p className={"mylesss_tt"}>{this.state.lang.myuroks.text}</p>
                                                                    <button className='grGro grGroActive' onClick={this.private}>Индивидуальные уроки</button>
<button className='grGro ' onClick={this.gr}>Групповые уроки</button>
                                                                    {/* <p className={"add_new_less_form"}><img alt="" src={profileplus} /></p> */}
                                                                </div>
                        
                        
                        
                                                                {this.state.newline.map((lop, index) => (
                        
                        
                                                                    <div className={"whta_hist"}>
                                                                        {console.log(this.state.newline)}
                                                                        <div className={" main_no_pa"}>
                                                                            <div className={"row row_line_sty"}>
                                                                                <div className={" col-lg-12 col-md-4 col-sm-6 col-6 pddsss"}>
                                                                                    <div className={"gr_nameff11"}>
                                                                                        <a href={"/view/" + lop.teacher_id}>
                                                                                            <img alt="" className={"mini_avatar_fulcal"} src={lop.teacher__avatar_url}></img>
                                                                                        </a>
                                                                                    </div>
                        
                                                                                    <div className={"gr_nameff22"}>
                                                                                        <a className={"pagasa"} href={"/view/" + lop.teacher_id}>
                                                                                            <p className="gr_nameff2244">{lop.teacher__name} {lop.teacher__surename}</p>
                                                                                        </a>
                                                                                        <p>{this.state.lang.teacher.text}</p>
                                                                                        <p>{lop.teacherhasstudentlessons__lesson__type_name}</p>
                                                                                    </div>
                        
                        
                                                                                </div>
                                                                                <div className={"line_lool"}></div>
                                                                                <div className={" col-lg-12 col-md-4 col-sm-6 col-6 pddsss"}>
                        
                                                                                    <div className={" main_no_pa cont_dfdf"}>
                                                                                        <div className={"row row_line_sty mff_row"}>
                        
                                                                                            <div className={" col-lg-4 col-md-4 col-sm-6 col-6 "}>
                        
                        
                                                                                                <p className={"mg_pop sers_tet"}>{this.state.lang.DATEUROKS.text}</p>
                        
                        
                                                                                            </div>
                                                                                            <div className={" col-lg-4 col-md-4 col-sm-6 col-6 "}>
                        
                        
                                                                                                <p className={"mg_pop sers_tet"}>{this.state.lang.STATUS.text}</p>
                        
                        
                                                                                            </div>
                        
                        
                                                                                        </div>
                                                                                    </div>
                        
                        
                                                                                </div>
                                                                                <div className={"line_lool"}></div>
                        
                                                                                {lop.lessons_pagination.all_student_lessons.map((data, idx) => (
                        
                                                                                    <div className={"wd_muo_uroks"}>
                                                                                        {(() => {
                        
                                                                                            if (data.is_paid == true) {
                        
                        
                                                                                                return (
                        
                        
                        
                                                                                                    <div className={" col-lg-12 col-md-4 col-sm-6 col-6 pddsss"}>
                        
                        
                        
                                                                                                        <div className={" main_no_pa cont_dfdf"}>
                                                                                                            <div className={"row row_line_sty mff_row"}>
                        
                                                                                                                <div className={" col-lg-4 col-md-4 col-sm-6 col-6 "}>
                        
                        
                                                                                                                    <p className={"nop_magssss mg_pop"}>{moment(data.lesson_start_timestamp_new * 1000).format("dddd, DD MMMM, В HH:mm")}</p>
                        
                        
                                                                                                                </div>
                                                                                                                <div className={" col-lg-2 col-md-4 col-sm-6 col-6 "}>
                        
                        
                                                                                                                    {(() => {
                                                                                                                        if (data.is_ended == true) {
                                                                                                                            return (
                                                                                                                                <StarRatingComponent
                                                                                                                                    name="rate1"
                                                                                                                                    starCount={5}
                                                                                                                                    value={data.lesson_rating}
                        
                                                                                                                                />
                        
                                                                                                                            )
                                                                                                                        } else {
                                                                                                                            return (
                                                                                                                                <p className={"nop_magssss mg_pop"}>{data.status_name}</p>
                                                                                                                            )
                                                                                                                        }
                        
                                                                                                                    })()}
                        
                        
                        
                        
                        
                                                                                                                </div>
                                                                                                                <div
                                                                                                                    className={" col-lg-1 col-md-4 col-sm-6 col-6 txt_rg"}>
                        
                        
                                                                                                                    <p className={"mg_pop"}>
                                                                                                                        {(() => {
                                                                                                                            if (data.is_ended == true || this.state.todatTime / 1000 >= data.lesson_end_timestamp) {
                                                                                                                                return (
                                                                                                                                    <a >
                                                                                                                                        {this.state.lang.perenos.text}</a>
                        
                                                                                                                                )
                                                                                                                            } else {
                                                                                                                                return (
                                                                                                                                    <a href={"/rend/" + data.teacher_id + "/" + data.teacher_lesson_id}>
                                                                                                                                        {this.state.lang.perenos.text}
                                                                                                                                        {console.log(data)}
                                                                                                                                    </a>
                                                                                                                                )
                                                                                                                            }
                        
                                                                                                                        })()}
                        
                        
                                                                                                                    </p>
                        
                        
                                                                                                                </div>
                                                                                                                <div
                                                                                                                    className={" col-lg-2 col-md-4 col-sm-6 col-6 txt_rg_cen"}>
                                                                                                                    {(() => {
                        
                        
                                                                                                                        if (this.state.main.profile.is_user == false) {
                                                                                                                            if (data.lesson_url_teacher == "") {
                                                                                                                                return (
                                                                                                                                    <a  href={data.lesson_url_teacher} className={"nop_magssss mg_pop"}>{this.state.lang.voyti.text}</a>
                                                                                                                                )
                                                                                                                            } else {
                        
                                                                                                                                return (
                                                                                                                                    <a  href={data.lesson_url_teacher} className={"nop_magssss mg_pop"}>{this.state.lang.voyti.text}</a>
                                                                                                                                )
                                                                                                                            }
                                                                                                                        } else {
                        
                                                                                                                            if (data.lesson_url_student == "") {
                                                                                                                                if (this.state.todatTime / 1000 >= data.lesson_end_timestamp) {
                                                                                                                                    return (
                                                                                                                                        <p>{this.state.lang.uscpechnoaccept.text}</p>
                                                                                                                                    )
                                                                                                                                }
                                                                                                                                else {
                                                                                                                                    return (
                                                                                                                                        <p className={"nop_magssss mg_pop"}>{this.state.lang.redymain.text}</p>
                                                                                                                                    )
                                                                                                                                }
                                                                                                                            } else {
                        
                        
                                                                                                                                if (data.is_ended == true) {
                                                                                                                                    return (
                                                                                                                                        <div className={"nop_magssss mg_pop"}>{this.state.lang.voyti.text}</div>
                        
                                                                                                                                    )
                                                                                                                                } else {
                        
                                                                                                                                    return (
                                                                                                                                        <a href={data.lesson_url_student} className={"nop_magssss mg_pop"}>{this.state.lang.voyti.text}</a>
                                                                                                                                    )
                                                                                                                                }
                        
                        
                        
                                                                                                                            }
                                                                                                                        }
                        
                        
                                                                                                                    })()}
                        
                        
                        
                        
                                                                                                                </div>
                                                                                                                <div
                                                                                                                    className={" col-lg-3 col-md-4 col-sm-6 col-6 txt_rg"}>
                        
                        
                                                                                                                    {(() => {
                                                                                                                        if (data.is_tt == false && data.is_ended == false) {
                                                                                                                            return (
                                                                                                                                <Link
                        
                        
                                                                                                                                    onClick={() =>
                                                                                                                                        this.handleToggleModal({
                                                                                                                                            id: data.teacher_lesson_id
                                                                                                                                        })
                        
                                                                                                                                    }
                                                                                                                                    className={"mg_pop"}>{this.state.lang.soobshenitlopo.text}</Link>
                                                                                                                            )
                                                                                                                        } else if (data.is_tt == true) {
                                                                                                                            return (
                                                                                                                                <p>{this.state.lang.otpravblen.text}</p>
                                                                                                                            )
                                                                                                                        } else if (data.is_ended == true) {
                                                                                                                            return (
                                                                                                                                <p>{this.state.lang.soobshenitlopo.text}</p>
                                                                                                                            )
                                                                                                                        }
                                                                                                                    })()}
                        
                        
                                                                                                                </div>
                        
                                                                                                            </div>
                        
                                                                                                            <div className={"line_lool"}></div>
                        
                                                                                                        </div>
                        
                        
                        
                        
                                                                                                    </div>
                                                                                                )
                                                                                            }
                                                                                        })()}
                        
                        
                        
                                                                                    </div>
                        
                        
                        
                                                                                ))}
                        
                                                                                {(() => {
                        
                                                                                    if (lop.lessons_pagination.all_student_lessons.length < 5) {
                                                                                        return (
                                                                                            <p></p>
                                                                                        )
                                                                                    } else {
                        
                                                                                        if (lop.lessons_pagination.paginations.all_pages == lop.lessons_pagination.paginations.current_page) {
                                                                                            return (
                                                                                                <p></p>
                                                                                            )
                        
                                                                                        } else {
                                                                                            return (
                                                                                                <div className={"pagaa"}>
                                                                                                    {console.log(lop)}
                                                                                                    <Link className={"esesds"}
                                                                                                        onClick={() =>
                                                                                                            this.paga({
                                                                                                                id: lop.id
                                                                                                            })}
                                                                                                    >
                                                                                                        Посмотреть ещё <img alt="" className={"arrrbottoms"} src={downarrraa}></img>
                                                                                                    </Link>
                                                                                                </div>
                                                                                            )
                                                                                        }
                        
                        
                        
                        
                                                                                    }
                        
                                                                                })()}
                        
                        
                                                                            </div>
                                                                        </div>
                                                                    </div>
                        
                        
                        
                                                                ))}
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                                                            </div>
                        
                        
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        }
                                    }
              


            }
        }
    }


}

class Setting extends Component {
    state = { showModal: false };

    constructor(props) {
        super(props)
        this.state = {
            myLoaded: false,
            isLoaded: false,
            langLoad: false,
            booking_rules_from: "",
            booking_rules_to: "",
            create: {},
            language: "",
            pusara: "",
            card_number: "",
            bank_mfo: "",
            inn: "",
            iban: "",

            levels: "",
            name: "",
            birth_country_id: "1",
            email: '',
            languages: [],
            shareholders: [{ language_id: '', level: "" }],

            shareholders1: [{ work_experience: '', work_experience_year: "" }],
            shareholders2: [{ education: '', education_year: "" }],

            shareholders3: [{
                lesson_description: '',
                lesson_type_id: "",
                amount: "",
                duration: "",
                showModal: false,
                lesson_direction_list: []
            }],


            lesson_direction_list: [{ lesson_direction_list: [] }],
            shareholders9: [{
                lesson_description: '',
                lesson_type_id: "",
                amount: "",
                duration: "",
                showModal: false,
                lesson_direction_list: []
            }],

            txtmain: "",
            lgstate: "",
            contstate: "",
            monst: [{ language_id: "111", level: "" }],
            phone: "ff",
            send: "",
            enject: false,
            code: '',
            image: null,
            file: null,
            vols: "",
            of: false,
            avatar: null,
            rul_from: "Выберите время",
            rul_to: "Выберите время",

            pass: "",

            status: "",
            sms: "",

            fam: "",
            em: "",
            dd: "",
            mm: "",
            yy: "",
            pas1: "",
            pas2: "",
            namebirth: null,
            editorState: EditorState.createEmpty(),
            main: "",
            email9: "",


            editorState: EditorState.createWithContent(
                ContentState.createFromText(
                    `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
                ),
            ),

        }
        this.handler = this.handler.bind(this);
        this.onImageChange = this.onImageChange.bind(this);
        this.fileUploadOnChange = this.fileUploadOnChange.bind(this);
        // this.getCropData = this.getCropData.bind(this);
        this.handleAdd4 = this.handleAdd4.bind(this);

        this.handleAdd5 = this.handleAdd5.bind(this);
        this.handlemor1 = this.handlemor1.bind(this);
        this.handlemor2 = this.handlemor2.bind(this);
        this.handlemor3 = this.handlemor3.bind(this);
        this.handlemor4 = this.handlemor4.bind(this);
        this.handlemor5 = this.handlemor5.bind(this);
        this.handlemor6 = this.handlemor6.bind(this);
        this.handlemor7 = this.handlemor7.bind(this);
        this.handlemor8 = this.handlemor8.bind(this);

        this.handleemailChange9 = this.handleemailChange9.bind(this);


        this.handleChange = this.handleChange.bind(this);
        this.handleemailChange = this.handleemailChange.bind(this);
        this.handlephoneChange = this.handlephoneChange.bind(this);
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleChangecn = this.handleChangecn.bind(this);
        this.handleChangeln = this.handleChangeln.bind(this);
        this.onEditorStateChange = this.onEditorStateChange.bind(this);


        this.handleChangeed = this.handleChangeed.bind(this)

    }
    uploadmain() {
        document.getElementById("filePicker").click()
    }
    state = {
        showModal: false,
        showModal1: false,
        showModal2: false,
        showModal3: false

    };
    handleS1 = e => {
        console.log(e.target.value)
        this.setState({
            inn: e.target.value
        })
    }
    handleS2 = e => {
        console.log(e.target.value)
        this.setState({
            card_number: e.target.value
        })
    }


    handleS3 = e => {
        console.log(e.target.value)
        this.setState({
            bank_mfo: e.target.value
        })
    }

    handleS4 = e => {
        console.log(e.target.value)
        this.setState({
            iban: e.target.value
        })
    }
    fileUploadOnChange(e) {
        this.handleToggleModal()
        e.preventDefault();
        let files;
        if (e.dataTransfer) {
            files = e.dataTransfer.files;
        } else if (e.target) {
            files = e.target.files;
        }
        const reader = new FileReader();
        reader.onload = () => {
            this.setState({ file: reader.result });
        };

        reader.readAsDataURL(files[0]);
    }


    checkDropdownChoice = (newValue: any, actionMeta: any) => {
        // console.group('Value Changed');
        // console.log(newValue);


        const { shareholders9 } = this.state

        const clonePhoneNumbers = [...shareholders9];

        const contact = shareholders9[newValue[0].idx]
        if (contact) {
            contact.lesson_direction_list = newValue
        }
        this.setState({
            main1: clonePhoneNumbers,

        })
        console.log(clonePhoneNumbers)
        // console.log(`action: ${actionMeta.action}`);
        console.groupEnd();
    };
    handleToggleModal = () => this.setState({ showModal: !this.state.showModal });
    handleChangeed = tags => (html) => {

        const { shareholders } = this.state

        const clonePhoneNumbers = [...shareholders];

        // console.log(tags)
        // console.log(html)


        const contact = clonePhoneNumbers[tags]
        if (contact) {
            contact.lesson_description = html
            // contact.lesson_description
            // console.log(contact)
        }

        // console.log(clonePhoneNumbers)

        this.setState({
            main: clonePhoneNumbers,

        })


    }

    handleChangeed9 = tags => (html) => {

        const { shareholders9 } = this.state

        const clonePhoneNumbers = [...shareholders9];

        // console.log(tags)
        // console.log(html)


        const contact = clonePhoneNumbers[tags]
        if (contact) {
            contact.lesson_description = html
            // contact.lesson_description
            // console.log(contact)
        }

        // console.log(clonePhoneNumbers)

        this.setState({
            main1: clonePhoneNumbers,

        })


    }

    onEditorStateChange(e) {
        console.log(e)
        this.setState({

            txtmain: e.target.value
        });

    };
    saveMobile0 = obj => {

        if (this.state.pusara == "") {

        } else {
            //console.log(obj)
            var newObj = {};

            Object.assign(newObj, this.state.pusara)

            const lop = {
                "list_id": newObj
            }
            console.log(lop)
            fetch('https://api.mydars.uz/api/registration/add_teacher_files/', {
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

                    "list_id": this.state.pusara,
                    "reg_page": 16,


                })

            })


                .then(res => res.json())

                .then((data) => {
                    console.log(data)


                }
                )
        }


        const main = {
            "name": this.state.name,
            "surename": this.state.name1,
            "middlename": this.state.name2,

            "resume": {
                "education_list": this.state.shareholders1,
                "work_experience_list": this.state.shareholders2,
            },
            "description": this.state.txtmain,
            "lessons_list": this.state.create.profile.teacher_lessons,
            "payment_info": {
                "card_number": this.state.card_number,
                "bank_mfo": this.state.bank_mfo,
                "inn": this.state.inn,
                "iban": this.state.iban,

            },
            "language": this.state.shareholders,
            "booking_rules_from": this.state.booking_rules_from, "booking_rules_to": this.state.booking_rules_to
        }
        console.log(main)
        console.log(localStorage.getItem('token'))
        fetch('https://api.mydars.uz/api/registration/', {
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


                // "birth_country_id": this.state.birth_country_id,
                // "email": this.state.email,
                // "reg_page": 3,
                // "language": this.state.shareholders,
                // "password": this.state.pass,
                // "is_self": this.state.radio,
                // "is_offer_accept": this.state.of,
                // "is_self": true,
                // "is_offer_accept": true,
                "name": this.state.name,
                "surename": this.state.name1,
                "middlename": this.state.name2,

                "resume": {
                    "education_list": this.state.shareholders1,
                    "work_experience_list": this.state.shareholders2,
                },
                "description": this.state.txtmain,
                "lessons_list": this.state.create.profile.teacher_lessons,
                "payment_info": {
                    "card_number": this.state.card_number,
                    "bank_mfo": this.state.bank_mfo,
                    "inn": this.state.inn,
                    "iban": this.state.iban,

                },
                "language": this.state.shareholders,
                "booking_rules_from": this.state.booking_rules_from, "booking_rules_to": this.state.booking_rules_to

            })

        })


            .then(res => res.json())

            .then((data) => {
                console.log(data)

                if (data.profile) {
                    NotificationManager.success('Данные', 'Успешно сохранены');
                } else {

                }
            }
            )
        localStorage.removeItem("page")
    }

    handleAdd5(event) {

        this.setState({
            of: false
        })
    }

    handleAdd4(event) {
        const main = {

            "phone_number": this.state.pass,

            "is_user": true
        }
        console.log(main)
        fetch('https://api.mydars.uz/api/registration/', {
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

                "name": this.state.name,
                "surename": this.state.fam,
                "email": this.state.em,
                "date_of_birth": this.state.dd + "." + this.state.mm + "." + this.state.yy,
                "password": this.state.pas1
            })

        })


            .then(res => res.json())

            .then((data) => {

                console.log(data)

                if (data.error) {
                    NotificationManager.error(data.reason, "Ошибка", 5000, () => {
                        alert('callback');
                    });
                } else {
                    NotificationManager.success('Данные', 'Успешно сохранены');
                    this.setState({
                        of: false
                    })

                }
            }
            )
    }

    handlemor1(event) {
        console.log(event.target.value)
        this.setState({
            name: event.target.value
        })


    }

    handlemor2(event) {
        console.log(event.target.value)
        this.setState({
            fam: event.target.value
        })
    }

    handlemor3(event) {
        console.log(event.target.value)
        this.setState({
            em: event.target.value
        })
    }

    handlemor4(event) {
        console.log(event.target.value)
        this.setState({
            dd: event.target.value
        })
    }

    handlemor5(event) {
        console.log(event.target.value)
        this.setState({
            mm: event.target.value
        })
    }

    handlemor6(event) {
        console.log(event.target.value)
        this.setState({
            yy: event.target.value
        })
    }

    handlemor7(event) {
        console.log(event.target.value)
        this.setState({
            pas1: event.target.value
        })
    }

    handlemor8(event) {
        console.log(event.target.value)
        this.setState({
            pas2: event.target.value
        })
    }

    handler = (e) => {
        const { target } = e;
        const value = target.type == 'checkbox' ? target.checked : target.value;
        const { name } = target;
        console.log(value)
        if (this.state.of == true) {
            this.setState({
                of: false
            })
        } else {
            this.setState({
                of: true
            })
        }
    };

    handleToggleModal = () => this.setState({ showModal: !this.state.showModal });

    componentDidMount() {


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

                        .then((data2) => {

                            this.setState({
                                isLoading: true,
                                pop: data2
                            })
                            if (data2.profile.is_user == true) {
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
                                        if (data.token_is_valid == false) {
                                            localStorage.removeItem("token")
                                            localStorage.removeItem("is_user")
                                            window.location.replace("/");
                                        } else {
                                            if (data.profile.date_of_birth.length > 0) {
                                                this.setState({
                                                    dd: data.profile.date_of_birth.split(".")[0],
                                                    mm: data.profile.date_of_birth.split(".")[1],
                                                    yy: data.profile.date_of_birth.split(".")[2]
                                                })
                                            } else {
                                                console.log("222")
                                            }
                                            console.log(data)
                                            this.setState({
                                                isLoaded: true,
                                                myLoaded: true,
                                                create: data,
                                                language: data.data.languages.available_languages,
                                                levels: data.data.languages.levels,
                                                imgsert: data.profile,


                                                opt: data.data.lesson_direction,
                                                name1: data.profile.surename,
                                                name2: data.profile.middlename,
                                                shareholders2: data.profile.teacher_experience,
                                                shareholders1: data.profile.teacher_education,
                                                avatar: data.profile.avatar_url,
                                                name: data.profile.name,
                                                fam: data.profile.surename,
                                                em: data.profile.email

                                            });
                                        }










                                    }
                                    )

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



                                        if (data.profile.languages) {

                                            this.setState(() => ({
                                                shareholders: data.profile.languages,


                                            }));

                                            for (var i = 0; i < data.profile.languages.length; i++) {
                                                // console.log(data.profile.languages[i])
                                                const { shareholders } = this.state

                                                const clonePhoneNumbers = [...shareholders];
                                                const contact = clonePhoneNumbers[i]
                                                if (contact) {
                                                    contact.language_id = data.profile.languages[i].language_id
                                                    contact.level = data.profile.languages[i].language_level_id
                                                }

                                                console.log(contact)

                                                this.setState(() => ({
                                                    shareholders: clonePhoneNumbers


                                                }));
                                            }
                                        }
                                        let editorStatewithContent = EditorState.createWithContent(ContentState.createFromText(data.profile.teacher_description))
                                        // console.log(editorStatewithContent) 
                                        //
                                        // editorState: EditorState.createWithContent(
                                        //     ContentState.createFromText(
                                        //         data.profile.teacher_desciption,
                                        //     ),
                                        // ),


                                        //Then you set the state

                                        console.log(data.profile)
                                        if (data.profile.payment_info.length == 0) {

                                        } else {
                                            this.setState({
                                                bank_mfo: data.profile.payment_info[0].bank_mfo,
                                                card_number: data.profile.payment_info[0].card_number,
                                                iban: data.profile.payment_info[0].iban,
                                                inn: data.profile.payment_info[0].inn,
                                            })
                                        }
                                        // bank_mfo: data.profile.payment_info[0].bank_mfo,
                                        // card_number: data.profile.payment_info[0].card_number,
                                        // iban: data.profile.payment_info[0].iban,
                                        // inn: data.profile.payment_info[0].inn,
                                        this.setState({
                                            isLoaded: true,
                                            create: data,
                                            booking_rules_from: data.profile.booking_rules_from,
                                            booking_rules_to: data.profile.booking_rules_to,
                                            language: data.data.languages.available_languages,
                                            levels: data.data.languages.levels,
                                            imgsert: data.profile,
                                            opt: data.data.lesson_direction,
                                            name1: data.profile.surename,
                                            name2: data.profile.middlename,
                                            email: data.profile.email,
                                            // shareholders: data.profile.languages,
                                            shareholders2: data.profile.teacher_experience,
                                            shareholders1: data.profile.teacher_education,
                                            avatar: data.profile.avatar_url,
                                            name: data.profile.name,
                                            editorState: editorStatewithContent,
                                            // bank_mfo: data.profile.payment_info[0].bank_mfo,
                                            // card_number: data.profile.payment_info[0].card_number,
                                            // iban: data.profile.payment_info[0].iban,
                                            // inn: data.profile.payment_info[0].inn,
                                            txtmain: data.profile.teacher_description
                                        });



                                    }
                                    )

                            }

                        }
                        )


                }


            })








    }







    //  DataURIToBlob(dataURI: string) {
    //     const splitDataURI = dataURI.split(',')
    //     const byteString = splitDataURI[0].indexOf('base64') >= 0 ? atob(splitDataURI[1]) : decodeURI(splitDataURI[1])
    //     const mimeString = splitDataURI[0].split(':')[1].split(';')[0]

    //     const ia = new Uint8Array(byteString.length)
    //     for (let i = 0; i < byteString.length; i++)
    //         ia[i] = byteString.charCodeAt(i)

    //     return new Blob([ia], { type: mimeString })
    //   }

    //     getCropData() {
    //         const { cropper } = this.state;
    //         console.log(cropper.getCroppedCanvas());
    //         const base64 = cropper.getCroppedCanvas().toDataURL(); // Place your base64 url here.



    //             const file = this.DataURIToBlob(base64)
    //             const formData = new FormData();
    //             formData.append('myfile', file, 'image.jpg') 


    // console.log(cropper.getCroppedCanvas().toDataURL())

    //             fetch('https://api.mydars.uz/api/registration/add_avatar/', {
    //                 method: 'POST',


    //                 headers: {
    //                     // 'auth': 'ef899a6d-29d6-4130-8b59-3d95dfbcc9bd',
    //                     // 'lang': 'uz',
    //                     // "Content-Type": "multipart/form-data",
    //                     'auth': "ef899a6d-29d6-4130-8b59-3d95dfbcc9bd",
    //                     'lang': localStorage.getItem('lang'),
    //                     'token': localStorage.getItem('token')
    //                 },
    //                 body: JSON.stringify(
    //                     {
    //                   formData
    //                     }
    //                 )

    //             })


    //                 .then(res => res.json())

    //                 .then((data) => {
    //                     this.handleToggleModal()
    //                     console.log(data)
    //                     this.setState({
    //                         avatar: data.avatar,
    //                         isLoaded: true
    //                     })
    //                     console.log(data)

    //                 }
    //                 )




    // this.setState({
    //     file:null
    // })


    //         if (typeof cropper !== "undefined") {
    //           this.setState({ croppedData: cropper.getCroppedCanvas().toDataURL() });
    //         }
    //       }

    onImageChange = e => {
        const data = new FormData();
        const imagedata = e.target.files[0];
        data.append('myfile', imagedata);
        console.log(e.target.files)

        fetch('https://api.mydars.uz/api/registration/add_avatar/', {
            method: 'POST',


            headers: {
                // 'auth': 'ef899a6d-29d6-4130-8b59-3d95dfbcc9bd',
                // 'lang': 'uz',
                // "Content-Type": "multipart/form-data",
                'auth': "ef899a6d-29d6-4130-8b59-3d95dfbcc9bd",
                'lang': localStorage.getItem('lang'),
                'token': localStorage.getItem('token')
            },
            body: data

        })


            .then(res => res.json())

            .then((data) => {
                console.log(data)
                this.setState({
                    avatar: data.avatar,
                    isLoaded: true
                })
                console.log(data)

            }
            )

    };

    onImageChange2 = e => {
        console.log("fffffffffffffffffsdhjkdshfkjsdhfsdjkfhdsfjkhsdfkjsd")
        // const imagedata = e.target.files;
        // data.append('myfile ', imagedata, );
        // data.append('is_cert ', "true")
        // console.log(imagedata)
        console.log(e.target.files)
        for (let i = 0; i < e.target.files.length; i++) {
            const data = new FormData();
            const imagedata = e.target.files[i];

            data.append('myfile ', imagedata,);
            data.append('is_cert ', "true")
            console.log(imagedata)

            fetch('https://api.mydars.uz/api/registration/add_teacher_files/', {
                method: 'POST',


                headers: {
                    // 'auth': 'ef899a6d-29d6-4130-8b59-3d95dfbcc9bd',
                    // 'lang': 'uz',
                    // "Content-Type": "multipart/form-data",
                    'auth': "ef899a6d-29d6-4130-8b59-3d95dfbcc9bd",
                    'lang': localStorage.getItem('lang'),
                    'token': localStorage.getItem('token')
                },
                body: data

            })

                .then(res => res.json())

                .then((data) => {
                    console.log(data)
                    this.setState({
                        imgsert: data.profile,
                        myLoaded: true,
                        isLoaded: true,
                    })

                }
                )

        }


    };
    handleAddShareholder = () => {
        this.setState({ shareholders: this.state.shareholders.concat([{ language_id: '', level: "" }]) });
    }

    handleRemoveShareholder = (idx) => () => {
        this.setState({ shareholders: this.state.shareholders.filter((s, sidx) => idx !== sidx) });
    }
    handleAddShareholder9 = () => {
        this.setState({
            shareholders9: this.state.shareholders.concat([{
                lesson_description: '',
                lesson_type_id: "",
                amount: "",
                duration: "",
                showModal: false,
                lesson_direction_list: []
            }])
        });


        this.setState({
            lesson_direction_list: this.state.lesson_direction_list.concat([{ lesson_direction_list: [] }])
        });
    }


    handleAddShareholder1 = () => {
        this.setState({
            shareholders1: this.state.shareholders1.concat([{
                work_experience: '',
                work_experience_year: ""
            }])
        });
    }

    handleRemoveShareholder1 = (idx) => () => {
        this.setState({ shareholders1: this.state.shareholders1.filter((s, sidx) => idx !== sidx) });
    }


    handleAddShareholder2 = () => {
        this.setState({ shareholders2: this.state.shareholders2.concat([{ education_year: '', education: "" }]) });
    }

    handleRemoveShareholder2 = (idx) => () => {
        this.setState({ shareholders2: this.state.shareholders2.filter((s, sidx) => idx !== sidx) });
    }

    handleChange1(event) {

        this.setState({
            name1: event.target.value
        })

    }

    handleChange2(event) {
        // console.log(event.target.value)
        this.setState({
            name2: event.target.value

        })

    }

    handlephoneChange(event) {
        // console.log(event.target.value)
        this.setState({
            phone: event.target.value
        })

    }

    handleChange(event) {
        // console.log(event.target.value)
        this.setState({
            name: event.target.value
        })

    }

    handleemailChange(event) {
        // console.log(event.target.value)
        this.setState({
            email: event.target.value
        })
    }

    handleemailChange9(event) {
        const { shareholders9 } = this.state

        const clonePhoneNumbers = [...shareholders9];


        const contact = clonePhoneNumbers[event.target.name]
        console.log(contact)
        if (contact) {
            contact.amount = Number(event.target.value)

        }

        this.setState({
            main1: clonePhoneNumbers,

        })
    }

    saveMobile1 = obj => {
        console.log(obj)

        this.setState({
            namebirth: obj.value
        })
    }


    handleChangeln = e => {


        let obj = JSON.parse(e.target.value);
        console.log(obj)


        const { shareholders } = this.state

        const clonePhoneNumbers = [...shareholders];

        const contact = clonePhoneNumbers[obj.idx]
        if (contact) {
            contact.level = obj.id
        }
        console.log(contact)

        this.setState(() => ({
            shareholders: clonePhoneNumbers


        }));

    }













    handleTime = e => {


        let obj = JSON.parse(e.target.value);
        console.log(obj)



        this.setState(() => ({
            booking_rules_from: obj.time


        }));

    }

    handleTime1 = e => {


        let obj = JSON.parse(e.target.value);
        console.log(obj)


        this.setState(() => ({
            booking_rules_to: obj.time


        }));

    }

    handleChangeln9 = e => {
        let obj = JSON.parse(e.target.value);
        console.log(obj)
        // console.log(e.target)


        const { shareholders9 } = this.state

        const clonePhoneNumbers = [...shareholders9];

        // console.log(tags)
        // console.log(html)
        console.log(clonePhoneNumbers)

        const contact = clonePhoneNumbers[obj.id]
        if (contact) {
            contact.duration = obj.min

        }

        this.setState({
            main1: clonePhoneNumbers,

        })


    }

    handleChangecn = e => {
        let obj = JSON.parse(e.target.value);
        console.log(obj)
        console.log(e.target)


        const { shareholders } = this.state

        const clonePhoneNumbers = [...shareholders];

        const contact = clonePhoneNumbers[obj.idx]

        const contact2 = clonePhoneNumbers[obj.idx]

        if (contact) {
            contact.language_id = obj.id
        }

        console.log(contact2)

        this.setState(() => ({
            shareholders: clonePhoneNumbers


        }));

    }

    handleChangecn9 = e => {
        let obj = JSON.parse(e.target.value);
        console.log(obj)
        // console.log(e.target)


        const { shareholders9 } = this.state

        const clonePhoneNumbers = [...shareholders9];

        // console.log(tags)
        // console.log(html)


        const contact = clonePhoneNumbers[obj.idx]
        if (contact) {
            contact.lesson_type_id = obj.id

        }

        this.setState({
            main1: clonePhoneNumbers,

        })


    }


    handleChangeln22 = e => {


        const { shareholders2 } = this.state

        const clonePhoneNumbers = [...shareholders2];

        const contact = clonePhoneNumbers[e.target.name]
        if (contact) {
            contact.education_year = e.target.value
        }
        console.log(shareholders2)

        shareholders2[e.target.name].work_experience_year = e.target.value
        this.setState({
            shareholders2
        })


    }

    handleChangecn22 = e => {
        //     let obj = JSON.parse(e.target.value);
        //      console.log(obj)


        const { shareholders2 } = this.state

        const clonePhoneNumbers = [...shareholders2];

        const contact = clonePhoneNumbers[e.target.name]
        console.log(e.target)

        shareholders2[e.target.name].work_experience = e.target.value
        this.setState({
            shareholders2
        })

        if (contact) {
            contact.education = e.target.value

        }


        // console.log(contact)
        //
        //


        // this.setState(() => ({
        //      shareholders2: clonePhoneNumbers,
        //
        //
        // }));

    }

    handleChangeln1 = e => {


        console.log(e.target.name)


        const { shareholders1 } = this.state

        const clonePhoneNumbers = [...shareholders1];

        const contact = clonePhoneNumbers[e.target.name]
        if (contact) {
            contact.work_experience_year = e.target.value
        }

        shareholders1[e.target.name].education_year = e.target.value
        this.setState({
            shareholders1
        })
        console.log(shareholders1)
        this.setState(() => ({
            shareholders1: clonePhoneNumbers


        }));

    }

    handleChangecn1 = e => {

        console.log(e.target.name)

        const { shareholders1 } = this.state

        const clonePhoneNumbers = [...shareholders1];

        const contact = clonePhoneNumbers[e.target.name]

        const contact2 = clonePhoneNumbers[e.target.name]

        if (contact) {
            contact.work_experience = e.target.value
        }


        shareholders1[e.target.name].education = e.target.value
        this.setState({
            shareholders1
        })

    }


    handleins = e => {
        let obj = JSON.parse(e.target.name);
        console.log(obj)

        const { imgsert } = this.state

        const clonePhoneNumbers = [...imgsert.certificates];


        const contact = clonePhoneNumbers[obj.index]
        if (contact) {
            contact.id = obj.id
            contact.name = e.target.value
        }

        console.log(clonePhoneNumbers)

        imgsert.certificates[obj.index].certificate_name = e.target.value


        // const {shareholders2} = this.state
        //
        // const clonePhoneNumbers = [...shareholders2];
        //
        // const contact = clonePhoneNumbers[e.target.name]
        // console.log(e.target)
        //
        // shareholders2[e.target.name].work_experience = e.target.value
        // this.setState({
        //     shareholders2
        // })
        //
        // if (contact) {
        //     contact.education = e.target.value
        //
        // }


        this.setState({
            imgsert,
            pusara: clonePhoneNumbers,


        })


    }

    render() {
        console.log(this.state.name)
        const { editorState } = this.state;
        // console.log(this.state.check)
        console.log(this.state.imgsert)
        const { create, isLoaded4, isLoaded2, isLoaded, langLoad, isLoading } = this.state;
        const { file, croppedData } = this.state;
        if (!isLoading || !langLoad) {
            return (
                <div className={"loadlpreload"}>
                    <div className={"loadlpreload"}>
                        <ImpulseSpinner className={"preloaders "} size={40} frontColor="#9181F3" backColor={"#9181F3"} />
                    </div>
                    <div className={"zaglnow"}>
                    </div>
                </div>
            )
        } else {
            return (
                <div className={"profile_bbl_edents"}>
                    {this.state.showModal && <div onClick={this.handleToggleModal} className="baccccccc">


                    </div>


                    }


                    {this.state.showModal && <div className="modal main_moodddd modals_croping">
                        <Link className={"ext_modal"} onClick={this.handleToggleModal}>x</Link>


                        <div>


                            <Cropper
                                style={{ width: "100%" }}
                                initialAspectRatio={1}
                                aspectRatio={1 / 1}
                                src={file}
                                dragMode={"crop"}
                                movable={false}
                                rotatable={false}
                                scalable={false}
                                zoomable={false}
                                zoomOnTouch={false}
                                zoomOnWheel={false}
                                toggleDragModeOnDblclick={false}
                                onInitialized={(instance) => {
                                    this.setState({ cropper: instance });
                                }}
                            />
                            <button className={"mainzagruzkacrops"} onClick={this.getCropData}>Загрузить</button>

                        </div>


                    </div>}

                    <NotificationContainer />
                    {(() => {

                        if (this.state.pop.profile.is_user == true) {
                            return (
                                <div>
                                    {(() => {
                                        if (!isLoaded || !langLoad) {
                                            return (
                                                <div>

                                                    <div className={"loadlpreload"}>
                                                        {/* <ImpulseSpinner className={"preloaders "} size={40} frontColor="#9181F3" backColor={"#9181F3"} />  */}
                                                    </div>
                                                    <div className={"zaglnow"}>
                                                    </div>
                                                </div>
                                            )
                                        } else {
                                            return (

                                                <div className={"wrap"}>
                                                    {console.log("я под учеником")}
                                                    <div className={"container "}>
                                                        <div className={"row"}>
                                                            <div
                                                                className={"app_prof_lang col-lg-12 col-md-4 col-sm-6 col-6 "}>
                                                                <div className="new_block_prof">
                                                                    <h2 className="setting_h2">{this.state.lang.settingmain.text}</h2>

                                                                    <label className="cust">
                                                                        <Link className={"nones_click_linbkes"} onClick={this.handler}>
                                                                            <input className="custom-checkbox" type="checkbox"
                                                                            // onChange={this.handler}
                                                                            />
                                                                            <span>{this.state.lang.rediaksmain.text}
                                                                                <img alt="" src={red_buuls} />
                                                                            </span>
                                                                        </Link>
                                                                    </label>

                                                                </div>
                                                                <p className={"main_setting_987897"}>{this.state.lang.lichniydamomn.text}</p>

                                                                {(() => {
                                                                    if (this.state.of == false) {
                                                                        return (

                                                                            <div
                                                                                className={"first_reg col-lg-12 col-md-4 col-sm-6 col-6 "}>


                                                                                <div className={"avats_sett"}>
                                                                                    {(() => {
                                                                                        if (this.state.avatar == null) {
                                                                                            return (
                                                                                                <img alt="" src={camera_ico} />
                                                                                            )
                                                                                        } else {
                                                                                            return (
                                                                                                <img alt=""
                                                                                                    className={"avatar_regs"}
                                                                                                    src={this.state.avatar} />
                                                                                            )
                                                                                        }
                                                                                    })()}
                                                                                </div>
                                                                                <div className={"name_sett"}>
                                                                                    <p className={"profile_names"}> {this.state.create.profile.name}<img alt=""
                                                                                        src={checked_profile_ico} /></p>
                                                                                    <p> {this.state.lang.uchenikl.text}</p>
                                                                                </div>


                                                                                <p className={"no_margin_profile"}><img alt=""
                                                                                    src={mailico} /> <span
                                                                                        className={"prof_color_gray"}>{this.state.lang.pochta.text}:</span> {this.state.create.profile.email}
                                                                                </p>
                                                                                <p className={"no_margin_profile"}><img alt=""
                                                                                    src={phoneico} /><span
                                                                                        className={"prof_color_gray"}>{this.state.lang.phonesess.text}:</span> {this.state.create.profile.phone_number}
                                                                                </p>
                                                                            </div>
                                                                        )
                                                                    } else {
                                                                        return (
                                                                            <React.Fragment>
                                                                                <div
                                                                                    className={"first_reg col-lg-12 col-md-4 col-sm-6 col-6 "}>

                                                                                    {console.log("я под учителем")}
                                                                                    <div
                                                                                        className={"first_reg col-lg-7 col-md-4 col-sm-6 col-6 "}>
                                                                                        <p>{this.state.lang.PHOTOPROFILES.text}</p>


                                                                                        <div className="up_img">
                                                                                            <div className={"markets"}>

                                                                                                {(() => {
                                                                                                    if (this.state.avatar == null) {
                                                                                                        return (
                                                                                                            <img alt=""
                                                                                                                src={camera_ico} />
                                                                                                        )
                                                                                                    } else {
                                                                                                        return (
                                                                                                            <img alt=""
                                                                                                                className={"avatar_regs"}
                                                                                                                src={this.state.avatar} />
                                                                                                        )
                                                                                                    }
                                                                                                })()}


                                                                                            </div>








                                                                                            {/* <input id="filePicker" type="file" onChange={this.fileUploadOnChange} /> */}
                                                                                            <input id="filePicker" type="file" onChange={this.onImageChange} />



                                                                                            <label htmlFor="filePicker"
                                                                                                className={"myst_uploads"}>

                                                                                                <img alt="" src={cloudupload} />


                                                                                                <a href="#" onClick={this.uploadmain} className={"black_cloud_upload_text"}>  {this.state.lang.uploadphoto.text}</a>
                                                                                            </label>
                                                                                            {/* <input id="filePicker"
                                                                                            onChange={this.onImageChange}
                                                                                            style={{ visibility: "hidden" }}
                                                                                            type={"file"}>

                                                                                        </input> */}
                                                                                            <p>{this.state.lang.ogranichuunsmpno.text}</p>
                                                                                        </div>


                                                                                    </div>


                                                                                    <div className="line_pusd"></div>


                                                                                    <div
                                                                                        className="lol_mon">


                                                                                        <div className="  row_execute13">


                                                                                            <p className="avt_text bt_txt33 ">
                                                                                                {this.state.lang.ukazname.text} </p>
                                                                                            <input
                                                                                                onChange={this.handlemor1}
                                                                                                placeholder={this.state.create.profile.name}
                                                                                                type="text"
                                                                                                value={this.state.name}
                                                                                                className=" nen_inp form-control email_input last_name_class_inp" />


                                                                                            <p className="avt_text bt_txt33 ">
                                                                                                {this.state.lang.ukazfamilyu.text}</p>
                                                                                            <input
                                                                                                onChange={this.handlemor2}
                                                                                                placeholder={this.state.create.profile.surename}
                                                                                                type="text"
                                                                                                value={this.state.fam}
                                                                                                className="nen_inp form-control email_input last_name_class_inp" />


                                                                                            <p className="avt_text bt_txt33 ">
                                                                                                {this.state.lang.ukazemail.text}</p>
                                                                                            <input
                                                                                                onChange={this.handlemor3}
                                                                                                placeholder={this.state.create.profile.email}
                                                                                                value={this.state.em}
                                                                                                type="text"
                                                                                                className="form-control nen_inp email_input last_name_class_inp" />


                                                                                            <p className="avt_text bt_txt33 ">
                                                                                                {this.state.lang.datarojdenm.text}  </p>

                                                                                            <div className="mi_332 ">
                                                                                                <input
                                                                                                    onChange={this.handlemor4}
                                                                                                    placeholder="день"
                                                                                                    type="text"
                                                                                                    value={this.state.dd}
                                                                                                    className="nen_inp form-control email_input last_name_class_inp daes" />

                                                                                                <input
                                                                                                    onChange={this.handlemor5}
                                                                                                    placeholder="месяц"
                                                                                                    type="text"
                                                                                                    value={this.state.mm}
                                                                                                    className="nen_inp form-control email_input last_name_class_inp daes" />

                                                                                                <input
                                                                                                    onChange={this.handlemor6}
                                                                                                    placeholder="год"
                                                                                                    type="text"
                                                                                                    value={this.state.yy}
                                                                                                    className="nen_inp form-control email_input last_name_class_inp daes" />


                                                                                            </div>


                                                                                        </div>

                                                                                    </div>

                                                                                </div>


                                                                                <div className="gr_prof_save">
                                                                                    <Link onClick={this.handleAdd4}>
                                                                                        <div
                                                                                            className="btn_vh btn_vh22">
                                                                                            <p className="bt_txt ">{this.state.lang.save.text}</p>
                                                                                        </div>
                                                                                    </Link>
                                                                                    <Link onClick={this.handleAdd5}
                                                                                        className="btn_vh btn_vh33">
                                                                                        <p className="bt_txt "> {this.state.lang.maincane.text}</p>
                                                                                    </Link>
                                                                                </div>
                                                                            </React.Fragment>
                                                                        )
                                                                    }
                                                                })()}





                                                            </div>


                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    })()}
                                </div>
                            )


                        } else if (this.state.pop.profile.is_user == false) {

                            if (!isLoaded) {
                                return (
                                    <div>

                                        <div className={"loadlpreload"}>
                                            {/* <ImpulseSpinner className={"preloaders "} size={40} frontColor="#9181F3" backColor={"#9181F3"} />  */}
                                        </div>
                                        <div className={"zaglnow"}>
                                        </div>
                                    </div>
                                )
                            } else {

                                return (

                                    <div className={"cont_padd_0_main_profile"}>

                                        <div className={"wrap"}>

                                            <div className={"container "}>
                                                <div className={"row"}>
                                                    <div className={" col-lg-12 col-md-4 col-sm-6 col-6 "}>
                                                        <p className={"tittle_top_page_regst"}>{this.state.lang.lichniydamomn.text}</p>
                                                        <div className={"first_reg col-lg-12 col-md-4 col-sm-6 col-6 "}>
                                                            <div className={"first_reg col-lg-12 col-md-4 col-sm-6 col-6 "}>
                                                                <div className={""}>
                                                                    <div className={"row"}>
                                                                        <div
                                                                            className={"first_reg col-lg-4 col-md-4 col-sm-6 col-6 "}>

                                                                            <p className={"main_sql_change"}>{this.state.lang.IMYANO.text}</p>


                                                                            <Form.Control className={"cols_mp"}
                                                                                onChange={this.handleChange}
                                                                                type="text"
                                                                                value={this.state.name}
                                                                                placeholder={this.state.create.profile.name} />

                                                                        </div>

                                                                        <div
                                                                            className={"first_reg col-lg-4 col-md-4 col-sm-6 col-6 "}>

                                                                            <p className={"main_sql_change"}>{this.state.lang.FAMILKIYAS.text}</p>


                                                                            <Form.Control className={"cols_mp"}
                                                                                onChange={this.handleChange1}
                                                                                type="text"
                                                                                value={this.state.name1}
                                                                                placeholder={this.state.create.profile.surename} />

                                                                        </div>
                                                                        <div
                                                                            className={"first_reg col-lg-4 col-md-4 col-sm-6 col-6 "}>

                                                                            <p className={"main_sql_change"}>{this.state.lang.OTHDWf.text}</p>


                                                                            <Form.Control className={"cols_mp"}
                                                                                onChange={this.handleChange2}
                                                                                type="text"
                                                                                value={this.state.name2}
                                                                                placeholder={this.state.create.profile.middlename} />

                                                                        </div>
                                                                    </div>
                                                                </div>



                                                            </div>


                                                            <div className={"register_super_line"}></div>


                                                            <div className={"first_reg col-lg-7 col-md-4 col-sm-6 col-6 "}>
                                                                <p className={"main_sql_change"}>{this.state.lang.PHOTOPROFILES.text}</p>

                                                                <div className={"markets"}>

                                                                    {(() => {
                                                                        if (this.state.avatar == null) {
                                                                            return (
                                                                                <img alt="" src={camera_ico} />
                                                                            )
                                                                        } else {
                                                                            return (
                                                                                <img alt="" className={"avatar_regs"}
                                                                                    src={this.state.avatar} />
                                                                            )
                                                                        }
                                                                    })()}


                                                                </div>

                                                                <label htmlFor="filePicker" className={"myst_uploads"}>

                                                                    <img alt="" src={cloudupload} />


                                                                    <a className={"black_cloud_upload_text"} href="#" onClick={this.uploadmain}>  {this.state.lang.uploadphoto.text}</a>
                                                                </label>
                                                                <input id="filePicker" onChange={this.onImageChange}
                                                                    style={{ visibility: "hidden" }} type={"file"}>

                                                                </input>


                                                            </div>
                                                            <div className={"register_super_line"}></div>
                                                            <div className={"row"}>
                                                                <div
                                                                    className={"first_reg col-lg-12 col-md-4 col-sm-6 col-6 "}>
                                                                    <div className={"container"}>

                                                                        <p className={"main_sql_change"}>{this.state.lang.YAZIKI.text}  </p>

                                                                        {console.log(this.state.shareholders)}
                                                                        {this.state.shareholders.map((shareholder, idx) => (
                                                                            <div className="row">
                                                                                <div
                                                                                    className={"first_reg col-lg-4 col-md-4 col-sm-6 col-6 "}>

                                                                                    {(() => {

                                                                                    })()}


                                                                                    <select className={"sects_1111"}
                                                                                        onChange={this.handleChangecn}>
                                                                                        <option


                                                                                        >

                                                                                            {shareholder.language}
                                                                                        </option>
                                                                                        {
                                                                                            this.state.language.map((item, index) =>

                                                                                                <option
                                                                                                    value={JSON.stringify({
                                                                                                        "id": item.id,
                                                                                                        "name": item.language_name,
                                                                                                        "idx": idx
                                                                                                    })}




                                                                                                >

                                                                                                    {item.language_name}
                                                                                                </option>
                                                                                            )
                                                                                        }


                                                                                    </select>


                                                                                </div>

                                                                                <div
                                                                                    className={"first_reg col-lg-3 col-md-4 col-sm-6 col-6 "}>


                                                                                    <select className={"sects_1111"}
                                                                                        onChange={this.handleChangeln}>
                                                                                        <option


                                                                                        >

                                                                                            {shareholder.language_level_name}
                                                                                        </option>
                                                                                        {
                                                                                            this.state.levels.map((item, index) =>

                                                                                                <option
                                                                                                    value={JSON.stringify({
                                                                                                        "id": item.id,
                                                                                                        "name": item.level_name,
                                                                                                        "idx": idx
                                                                                                    })}



                                                                                                >

                                                                                                    {item.level_name}
                                                                                                </option>
                                                                                            )
                                                                                        }


                                                                                    </select>


                                                                                </div>
                                                                                <div type="button"
                                                                                    onClick={this.handleRemoveShareholder(idx)}
                                                                                    className="small">
                                                                                    <img alt="" src={del} />
                                                                                </div>
                                                                            </div>
                                                                        ))}

                                                                        <Link onClick={this.handleAddShareholder} >
                                                                            <div type="button"

                                                                                className="add_ts">
                                                                                <img alt="" className={"plu_cret"} src={plus} />
                                                                                {this.state.lang.ADdyazik.text}
                                                                            </div>
                                                                        </Link>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className={"register_super_line"}></div>
                                                            <div className={"first_reg col-lg-7 col-md-4 col-sm-6 col-6 "}>


                                                                <p className={"main_sql_change"}>EMAIL</p>
                                                                <input onChange={this.handleemailChange} placeholder="email"
                                                                    type="email" value={this.state.email}
                                                                    className="form-control email_input" />


                                                            </div>


                                                        </div>

                                                    </div>

                                                </div>
                                            </div>
                                        </div>



                                        <div className={"wrap"}>

                                            <div className={"container "}>
                                                <div className={"row"}>
                                                    <div className={" col-lg-12 col-md-4 col-sm-6 col-6 "}>
                                                        <p className={"tittle_top_page_regst"}>{this.state.lang.prvilaborno.text}
                                                        </p>
                                                        <div className={"first_reg col-lg-12 col-md-4 col-sm-6 col-6 "}>
                                                            <div className={"first_reg col-lg-12 col-md-4 col-sm-6 col-6 "}>
                                                                <div className={"no_container container"}>
                                                                    <div className={"row"}>




                                                                        <div
                                                                            className={"first_reg col-lg-7 col-md-4 col-sm-6 col-6 "}>







                                                                            <p className={"main_sql_change"}>

                                                                                {this.state.lang.ZABLAGOVREMENBRONS.text}
                                                                            </p>
                                                                            <select className={"sects_1111"}
                                                                                onChange={this.handleTime}>
                                                                                {console.log(this.state.create.profile.booking_rules_from)}

                                                                                {(() => {
                                                                                    if (this.state.create.profile.booking_rules_from == 0) {

                                                                                        return (
                                                                                            <option


                                                                                            >
                                                                                                {this.state.lang.chooseTimes.text}
                                                                                            </option>
                                                                                        )

                                                                                    } else if (this.state.create.profile.booking_rules_from == 43200) {
                                                                                        return (
                                                                                            <option
                                                                                                value={JSON.stringify({
                                                                                                    "time": 43200,
                                                                                                    "name": this.state.lang.minimaum12.text,

                                                                                                })}

                                                                                            >
                                                                                                {this.state.lang.minimaum12.text}
                                                                                            </option>
                                                                                        )

                                                                                    } else if (this.state.create.profile.booking_rules_from == 86400) {
                                                                                        return (
                                                                                            <option
                                                                                                value={JSON.stringify({
                                                                                                    "time": 86400,
                                                                                                    "name": this.state.lang.minimum24klock.text,

                                                                                                })}

                                                                                            >
                                                                                                {this.state.lang.minimum24klock.text}
                                                                                            </option>
                                                                                        )

                                                                                    }

                                                                                })()}

                                                                                <option
                                                                                    value={JSON.stringify({
                                                                                        "time": 43200,
                                                                                        "name": this.state.lang.minimaum12.text,

                                                                                    })}




                                                                                >{this.state.lang.minimaum12.text}</option>

                                                                                {/* <option
                                                                                    value={JSON.stringify({
                                                                                        "time": 86400,
                                                                                        "name": this.state.lang.minimum24klock.text,

                                                                                    })}




                                                                                >{this.state.lang.minimum24klock.text}</option> */}

                                                                            </select>







                                                                        </div>

                                                                        <div
                                                                            className={"first_reg col-lg-7 col-md-4 col-sm-6 col-6 "}>
                                                                            <p className={"main_sql_change"}> {this.state.lang.NASKOLKODNEYTAMMNOGO.text}
                                                                            </p>
                                                                            <select className={"sects_1111"}
                                                                                onChange={this.handleTime1}>



                                                                                {(() => {
                                                                                    if (this.state.create.profile.booking_rules_to > 0) {
                                                                                        return (
                                                                                            <option
                                                                                                value={JSON.stringify({
                                                                                                    "time": 1209600,
                                                                                                    "name": this.state.lang.na2weeknext.text,

                                                                                                })}

                                                                                            >
                                                                                                {this.state.lang.na2weeknext.text}
                                                                                            </option>
                                                                                        )
                                                                                    } else {
                                                                                        return (
                                                                                            <option


                                                                                            >
                                                                                                {this.state.lang.chooseTimes.text}
                                                                                            </option>
                                                                                        )
                                                                                    }


                                                                                })()}

                                                                                <option
                                                                                    value={JSON.stringify({
                                                                                        "time": 1209600,
                                                                                        "name": this.state.lang.na2weeknext.text,

                                                                                    })}




                                                                                >

                                                                                    {this.state.lang.na2weeknext.text}
                                                                                </option>



                                                                            </select>

                                                                        </div>



                                                                    </div>
                                                                </div>


                                                            </div>


                                                            <div className={"register_super_line"}></div>


                                                        </div>

                                                    </div>

                                                </div>
                                            </div>
                                        </div>


                                        <div className={"wrap"}>

                                            <div className={"container "}>
                                                <div className={"row"}>
                                                    <div className={" col-lg-12 col-md-4 col-sm-6 col-6 "}>
                                                        <p className={"tittle_top_page_regst"}>{this.state.lang.financetext.text}</p>
                                                        <div className={"first_reg col-lg-12 col-md-4 col-sm-6 col-6 "}>
                                                            <div className={"first_reg col-lg-12 col-md-4 col-sm-6 col-6 "}>
                                                                <div className={"no_container container"}>
                                                                    <div className={"row"}>
                                                                        <div
                                                                            className={"first_reg col-lg-7 col-md-4 col-sm-6 col-6 "}>

                                                                            <p className={"main_sql_change"}>{this.state.lang.INNFIZLICA.text}



                                                                            </p>


                                                                            <Form.Control className={"cols_mp"}
                                                                                onChange={this.handleS1}
                                                                                type="text"
                                                                                value={this.state.inn}
                                                                            />

                                                                        </div>

                                                                        <div
                                                                            className={"first_reg col-lg-7 col-md-4 col-sm-6 col-6 "}>

                                                                            <p className={"main_sql_change"}>{this.state.lang.NUMBERSCARDS.text}</p>


                                                                            <Form.Control className={"cols_mp"}
                                                                                onChange={this.handleS2}
                                                                                type="text"
                                                                                value={this.state.card_number}
                                                                            />

                                                                        </div>

                                                                        <div className={"no_container container"}>
                                                                            <div className={"row"}>

                                                                                <div
                                                                                    className="first_reg col-lg-7 col-md-4 col-sm-6 col-6">

                                                                                    <div
                                                                                        className={"first_reg   "}>
                                                                                        <div className={"row"}>
                                                                                            <div
                                                                                                className={"first_reg col-lg-5 col-md-4 col-sm-6 col-6 "}>

                                                                                                <p className={"main_sql_change"}>{this.state.lang.MFOBANK.text}
                                                                                                </p>


                                                                                                <Form.Control
                                                                                                    className={"cols_mp"}
                                                                                                    onChange={this.handleS3}
                                                                                                    type="text"
                                                                                                    value={this.state.bank_mfo}
                                                                                                />

                                                                                            </div>

                                                                                            <div
                                                                                                className={"first_reg col-lg-7 col-md-4 col-sm-6 col-6 "}>

                                                                                                <p className={"main_sql_change"}>{this.state.lang.TRANSCHET.text}</p>


                                                                                                <Form.Control
                                                                                                    className={"cols_mp"}
                                                                                                    onChange={this.handleS4}
                                                                                                    type="text"
                                                                                                    value={this.state.iban}
                                                                                                />

                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>

                                                                            </div>
                                                                        </div>


                                                                    </div>
                                                                </div>


                                                            </div>


                                                            <div className={"register_super_line"}></div>


                                                        </div>

                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div className={"wrap"}>

                                            <div className={"container "}>
                                                <div className={"row"}>
                                                    <div className={" col-lg-12 col-md-4 col-sm-6 col-6 "}>
                                                        <p className={"tittle_top_page_regst"}>{this.state.lang.Rezumi.text}</p>
                                                        <div className={"first_reg col-lg-12 col-md-4 col-sm-6 col-6 "}>


                                                            <div className={"row"}>
                                                                <div
                                                                    className={"first_reg col-lg-12 col-md-4 col-sm-6 col-6 "}>
                                                                    <div className={"container"}>


                                                                        {this.state.shareholders2.map((shareholder2, idx) => (
                                                                            <div className="row">
                                                                                <div
                                                                                    className={"first_reg col-lg-4 col-md-4 col-sm-6 col-6 "}>
                                                                                    <p className={"main_sql_change"}>{this.state.lang.OPITRABOTAS.text}
                                                                                    </p>
                                                                                    {console.log(this.state.shareholders2[idx])}
                                                                                    <input
                                                                                        placeholder={this.state.lang.vyodmestorabotes.text}
                                                                                        name={idx}
                                                                                        onChange={this.handleChangecn22}
                                                                                        className={"one_in"}
                                                                                        value={this.state.shareholders2[idx].work_experience}
                                                                                    />


                                                                                </div>


                                                                                <div
                                                                                    className={"first_reg col-lg-3 col-md-4 col-sm-6 col-6 "}>
                                                                                    <p className={"main_sql_change"}>{this.state.lang.SERIFICATES.text}ГОД РАБОТЫ</p>
                                                                                    <input placeholder={this.state.lang.VVikgodRabots.text}
                                                                                        name={idx}
                                                                                        onChange={this.handleChangeln22}
                                                                                        className={"one_in"}
                                                                                        value={this.state.shareholders2[idx].work_experience_year}

                                                                                    />


                                                                                </div>
                                                                                <div type="button"
                                                                                    onClick={this.handleRemoveShareholder2(idx)}
                                                                                    className="small main_class_123213">
                                                                                    <img alt="" src={del} />
                                                                                </div>
                                                                            </div>
                                                                        ))}


                                                                        <Link onClick={this.handleAddShareholder2}>
                                                                            <div type="button"

                                                                                className="tiilte_purple_all_main"><img alt=""
                                                                                    className={"adding_clo_main"} src={add} />{this.state.lang.addtojobmest.text}
                                                                            </div>
                                                                        </Link>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className={"register_super_line"}></div>


                                                            <div className={"first_reg col-lg-12 col-md-4 col-sm-6 col-6 "}>
                                                                <div className={""}>


                                                                    {this.state.shareholders1.map((shareholder1, idx) => (
                                                                        <div className="row">
                                                                            {console.log(shareholder1)}
                                                                            <div
                                                                                className={"first_reg col-lg-4 col-md-4 col-sm-6 col-6 "}>
                                                                                <p className={"tiiljjj_lolppp"}>
                                                                                    {this.state.lang.obrazofd33.text}</p>
                                                                                <input placeholder={this.state.lang.mesotObraplaces.text}
                                                                                    name={idx}
                                                                                    onChange={this.handleChangecn1}
                                                                                    className={"one_in"}
                                                                                    value={this.state.shareholders1[idx].education}
                                                                                />


                                                                            </div>
                                                                            <div
                                                                                className={"first_reg col-lg-3 col-md-4 col-sm-6 col-6 "}>
                                                                                <p className={"tiiljjj_lolppp"}>{this.state.lang.godikuchobes.text}</p>
                                                                                <input placeholder={this.state.lang.vvodgodikuchobis.text}
                                                                                    name={idx}
                                                                                    onChange={this.handleChangeln1}
                                                                                    value={this.state.shareholders1[idx].education_year}
                                                                                    className={"one_in"}
                                                                                />


                                                                            </div>
                                                                            <div type="button"
                                                                                onClick={this.handleRemoveShareholder1(idx)}
                                                                                className="small main_class_123213">
                                                                                <img alt="" src={del} />
                                                                            </div>
                                                                        </div>
                                                                    ))}

                                                                    <Link onClick={this.handleAddShareholder1}>
                                                                        <div type="button"
                                                                            className="tiilte_purple_all_main"><img alt=""
                                                                                className={"adding_clo_main"} src={add} />{this.state.lang.addtojobmest.text}
                                                                        </div>
                                                                    </Link>

                                                                </div>
                                                            </div>


                                                            <div className={"first_reg col-lg-12 col-md-4 col-sm-6 col-6 "}>
                                                                <div className={""}>

                                                                    <p>{this.state.lang.Certiftime.text}</p>

                                                                    {<div>
                                                                        {
                                                                            this.state.imgsert.certificates.map((item, index) =>
                                                                                <div className={"in_ppll"}>
                                                                                    <img alt="" className={"in1"}
                                                                                        src={in1} />
                                                                                    <img alt="" className={"in2"}
                                                                                        src={in2} />

                                                                                    <input
                                                                                        className={"mons_inpu_show"}
                                                                                        name={JSON.stringify({
                                                                                            "id": item.id,

                                                                                            "index": index

                                                                                        })}
                                                                                        value={this.state.imgsert.certificates[index].certificate_name}
                                                                                        onChange={this.handleins}
                                                                                    >

                                                                                    </input>
                                                                                </div>
                                                                            )
                                                                        }
                                                                    </div>}


                                                                    <label htmlFor="fff" className={"myst_uploads"}>

                                                                        <img alt="" src={cloudupload} />


                                                                        {this.state.lang.uploadphoto.text}
                                                                    </label>
                                                                    <input id="fff"

                                                                        onChange={this.onImageChange2}
                                                                        style={{ visibility: "hidden" }} type={"file"}
                                                                        multiple>

                                                                    </input>


                                                                </div>
                                                            </div>


                                                        </div>

                                                    </div>

                                                </div>
                                            </div>
                                        </div>


                                        <div className={"wrap"}>

                                            <div className={"container "}>
                                                <div className={"row"}>
                                                    <div className={" col-lg-12 col-md-4 col-sm-6 col-6 "}>
                                                        <p className={"tittle_top_page_regst"}>{this.state.lang.Descprofilesmain.text}</p>
                                                        <p className={"tittle_top_page_regst2"}>{this.state.lang.CreateprofileOtobraje.text}
                                                        </p>
                                                        <div className={"first_reg col-lg-12 col-md-4 col-sm-6 col-6 "}>


                                                            <div className={"row"}>
                                                                <div
                                                                    className={"first_reg col-lg-12 col-md-4 col-sm-6 col-6 "}>
                                                                    <div className={""}>

                                                                        <p className={"main_sql_change"}>{this.state.lang.OBOmnews.text}</p>

                                                                        <textarea className={"text_operation_nume"}
                                                                            placeholder={"Напишите о себе"}
                                                                            value={this.state.txtmain}
                                                                            onChange={this.onEditorStateChange}

                                                                        />

                                                                    </div>
                                                                </div>
                                                            </div>


                                                        </div>

                                                    </div>

                                                </div>
                                            </div>

                                            <div className={"wrap"}>

                                                <div className={"container mrrrrr"}>
                                                    <div className={"row mrrrrr1"}>

                                                        <Link onClick={() =>
                                                            this.saveMobile0({})
                                                        } >

                                                            <div className={"ne_pa_data ne_pa_data213213"}>
                                                                {this.state.lang.save.text}
                                                            </div>
                                                        </Link>


                                                    </div></div></div>




                                        </div>





                                    </div>
                                )
                            }


                        }
                    })()}
                </div>
            )
        }


    }
}


















class Group extends Component {

    state = { showModal: false };

    constructor(props) {
        super(props)
        this.state = {
            myLoaded: false,
            isLoaded: false,
            langLoad: false,
            rand: "",
            booking_rules_from: "",
            booking_rules_to: "",
            create: {},
            language: "",
            pusara: "",
            card_number: "",
            bank_mfo: "",
            inn: "",
            iban: "",
            today: Date.now(),

            levels: "",
            name: "",
            birth_country_id: "1",
            email: '',
            languages: [],
            shareholders: [{ language_id: '', level: "" }],

            shareholders1: [{ work_experience: '', work_experience_year: "" }],
            shareholders2: [{ education: '', education_year: "" }],

            shareholders3: [{
                lesson_description: '',
                lesson_type_id: "",
                amount: "",
                duration: "",
                showModal: false,
                lesson_direction_list: []
            }],


            lesson_direction_list: [{ lesson_direction_list: [] }],
            shareholders9: [{
                lesson_description: '',
                lesson_type_id: "",
                amount: "",
                duration: "",
                showModal: false,
                lesson_direction_list: []
            }],

            txtmain: "",
            lgstate: "",
            contstate: "",
            monst: [{ language_id: "111", level: "" }],
            phone: "ff",
            send: "",
            enject: false,
            code: '',
            image: null,
            file: null,
            vols: "",
            value: "",
            of: false,
            avatar: null,
            rul_from: "Выберите время",
            rul_to: "Выберите время",

            pass: "",

            status: "",
            sms: "",
            group: "",
            gr: false,
            fam: "",
            em: "",
            editLoad: false,
            dd: "",
            grss:"",
            mm: "",
            yy: "",
            pas1: "",
            gName: "",
            gDesc: "",
            gTime: "",
            gCount: "",
            gDuration: "",
            mainId: "",
            gStudent: "",
            pas2: "",
            namebirth: null,
            editorState: EditorState.createEmpty(),
            main: "",
            email9: "",

            select: "0",
            count: "0",
            about: "",
            counr: "",
            conet: "",
            gToday: "",
        }
        // this.handler = this.handler.bind(this);

        this.group = this.group.bind(this);

        this.select = this.select.bind(this);
        this.count = this.count.bind(this);
        this.about = this.about.bind(this);
        this.create = this.create.bind(this);
        this.cancel = this.cancel.bind(this);
        this.save = this.save.bind(this);
        this.edit = this.edit.bind(this);


        this.counr = this.counr.bind(this);
        this.conet = this.conet.bind(this);
        this.delete = this.delete.bind(this);
    }
    delete(){
const test = {
    "group_id": this.state.grss
}
console.log(test)
        fetch('https://api.mydars.uz/api/group/dell/', {
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
                "group_id": this.state.grss

            })

        })


            .then(res => res.json())

            .then((data) => {
                console.log(data)
                if (data.error == 0) {
                    window.location.reload()
                }




            }
            )
    }
    edit(obj) {
        console.log(obj)
        const te = moment(this.state.group.all_groups[obj.id].group_start_date_timestamp * 1000).format();
        console.log(te)
        console.log(this.state.today)
        const log = {
            group_lessons_count: this.state.gConet,
            group_total_cost: this.state.gCounr,
            gName: this.state.group.all_groups[obj.id].group_name,
            gDesc: this.state.group.all_groups[obj.id].group_description,
            gToday: this.state.group.all_groups[obj.id].group_start_date_timestamp * 1000,
            gCount: this.state.group.all_groups[obj.id].max_students_count,
            gDuration: this.state.group.all_groups[obj.id].max_lesson_duration,
gCoast: this.state.group.all_groups[obj.id].group_total_cost,
gLes: this.state.group.all_groups[obj.id].group_lessons_count,
            gStudent: this.state.group.all_groups[obj.id].current_students_count
        }
        console.log(log)
        this.setState({
            idx: obj.id,
            editLoad: true,
            grss: obj.gr,
            mainId: this.state.group.all_groups[obj.id].id,
            gr: true,
            group_lessons_count: this.state.gConet,
            group_total_cost: this.state.gCounr,
            gName: this.state.group.all_groups[obj.id].group_name,
            gDesc: this.state.group.all_groups[obj.id].group_description,
            gToday: this.state.group.all_groups[obj.id].group_start_date_timestamp * 1000,
            gCount: this.state.group.all_groups[obj.id].max_students_count,
            gDuration: this.state.group.all_groups[obj.id].max_lesson_duration,
gCoast: this.state.group.all_groups[obj.id].group_total_cost,
gLes: this.state.group.all_groups[obj.id].group_lessons_count,
            gStudent: this.state.group.all_groups[obj.id].current_students_count
        })
    }
    cancel() {
        this.setState({
            gr: false,
            editLoad: false
        })
    }

    save() {
const test = {
    group_description: this.state.gDesc,
    max_students_count: this.state.gCount,
    max_lesson_duration: this.state.gDuration,
    group_id: this.state.mainId,
    is_active: true,
    group_lessons_count: this.state.gLes,
    group_total_cost: this.state.gCoast,
    group_start_date_timestamp: this.state.gToday / 1000
}
console.log(test)
        
        fetch('https://api.mydars.uz/api/group/update/', {
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
                group_description: this.state.gDesc,
                max_students_count: this.state.gCount,
                max_lesson_duration: this.state.gDuration,
                group_id: this.state.mainId,
                is_active: true,
                group_lessons_count: this.state.gLes,
                group_total_cost: this.state.gCoast,
                group_start_date_timestamp: this.state.gToday / 1000

            })

        })


            .then(res => res.json())

            .then((data) => {
                console.log(data)
                if (data.error == 0) {
                    window.location.reload()
                }




            }
            )


    }



    create() {


        const test = {
            group_description: this.state.about,
            max_students_count: this.state.count,
            max_lesson_duration: this.state.select,
            group_start_date_timestamp: this.state.today / 1000
        }
        console.log(test)
        fetch('https://api.mydars.uz/api/group/create/', {
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
                group_description: this.state.about,
                max_students_count: this.state.count,
                group_total_cost: this.state.conet,
                group_lessons_count: this.state.counr,
                max_lesson_duration: this.state.select,
                group_start_date_timestamp: this.state.today / 1000

            })

        })


            .then(res => res.json())

            .then((data) => {
                console.log(data)
                if (data.error == 0) {
                    window.location.reload()
                }




            }
            )


    }
    counr(e) {
        console.log(e.target.value)
        this.setState({
            counr: e.target.value,
            gCounr: e.target.value,
            gLes: e.target.value
        })
    }
    count(e) {
        console.log(e.target.value)
        this.setState({
            count: e.target.value,
            gCount: e.target.value
        })
    }
    about(e) {
        this.setState({
            about: e.target.value,
            gDesc: e.target.value
        })
    }

    conet(e) {
        this.setState({
            conet: e.target.value,
            gConet: e.target.value,
            gCoast: e.target.value

        })
    }

    select(e) {
        this.setState({
            select: e.target.value,
            gDuration: e.target.value
        })
    }
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
                // console.log(data)


                this.setState({
                    lang: data.translates,
                    langLoad: true,
                })

            }
            )

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
                        group: data,
                        
                       
                    })


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
                                                        
                                this.setState({
                                    rand: data,
                                    isLoading: true
                                })
                        })

                }
            })


    }
    group() {
        console.log("testewrwe")
        this.setState({
            gr: true
        })
    }

    render() {
        console.log(this.state.today)
        console.log(new Date(this.state.today).valueOf());
        const { editorState } = this.state;
        // console.log(this.state.check)

        const { create, isLoaded4, isLoaded2, isLoaded, langLoad, isLoading } = this.state;
        const { file, croppedData } = this.state;
        if (!isLoading || !langLoad) {
            return (
                <div className={"loadlpreload"}>
                    <div className={"loadlpreload"}>
                        <ImpulseSpinner className={"preloaders "} size={40} frontColor="#9181F3" backColor={"#9181F3"} />
                    </div>
                    <div className={"zaglnow"}>
                    </div>
                </div>
            )
        } else {
            return (
                <div className={"profile_bbl_edents"}>


                    <NotificationContainer />



                    <div className={"wrap profile_bbl_edents"}>


                        <div className={"container"}>
                            <div className={"row"}>
                                <div className={" col-lg-12 col-md-4 col-sm-6 col-6 "}>

                                    {(() => {
                                        if (this.state.gr == false) {
                                            return (
                                                <div className={"whta_hist"}>
                                                    <div className={" main_no_pa"}>
                                                        <div className={"row row_line_sty"}>
                                                            <div className={" col-lg-9 col-md-4 col-sm-6 col-6 pddsss"}>
                                                                <div className={"gr_nameff11"}>
                                                                    {/* <img alt="" className={"mini_avatar_fulcal"} src={lop.student__avatar_url}></img> */}
                                                                </div>

                                                                <div className={"gr_nameff22"}>

                                                                    {/* <p className="gr_nameff2244">{lop.student__name}</p> */}
                                                                    <p>Группы</p>
                                                                    {/* {console.log(lop)} */}
                                                                </div>


                                                            </div>
                                                            <div className={"col-lg-3 gr_btn_mainprofile col-md-4 col-sm-6 col-6 pddsss"}>
                                                                <button onClick={this.group} className={"createesbtn ne_pa_data ne_pa_data213213 createbntn"}>Создать группу</button>


                                                            </div>
                                                            <div className={"line_lool"}></div>
                                                            <div className={"col-lg-12 col-md-4 col-sm-6 col-6 pddsss"}>

                                                                <div className={" main_no_pa cont_dfdf"}>
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


                                                            {(() => {
                                                                if (this.state.group.all_groups.length > 0) {
                                                                    return (
                                                                        <div className='grlist'>

                                                                            {this.state.group.all_groups.map((data, idx) => (
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

                                                                                                    {(() => {
                                                                                                        if (data.current_students_count == 0) {
                                                                                                            return (
                                                                                                                <button className='btnediters'
                                                                                                                    onClick={() => this.edit({
                                                                                                                        "id": idx,
                                                                                                                        "gr": data.id
                                                                                                                    })}
                                                                                                                >Изменить</button>
                                                                                                            )
                                                                                                        } else {
                                                                                                            return (
                                                                                                                <button className='btnediters11'

                                                                                                                >Изменить</button>
                                                                                                            )
                                                                                                        }
                                                                                                    })()}




                                                                                                </div>

                                                                                            </div>

                                                                                            <div className={"line_lool"}></div>

                                                                                        </div>




                                                                                    </div>
























 {(() => {

for(var i = 0; i < this.state.rand.orders_group.length; i++){
    
    if(data.id == this.state.rand.orders_group[i].id){
     if(this.state.rand.orders_group[i].lessons_list.length == 0){

     }else{
        return(
            <React.Fragment>

                            <div className={"whta_hist whta_histtest"}>
                                <div className={" main_no_pa"}>
                                    <div className={"row row_line_sty"}>
                                        <div className={" col-lg-12 col-md-4 col-sm-6 col-6 pddsss"}>
                                            {/* <div className={"gr_nameff11"}>
                                                <img alt="" className={"mini_avatar_fulcal"} src={lop.student__avatar_url}></img>
                                            </div> */}

                                            <div className={"gr_nameff22"}>

                                                <p className="gr_nameff2244">{this.state.rand.orders_group[i].group_description}</p>
                                                <p>Описание</p>
                                                {/* {console.log(lop)} */}
                                            </div>


                                        </div>
                                        <div className={"line_lool"}></div>
                                        <div className={" col-lg-12 col-md-4 col-sm-6 col-6 pddsss"}>

                                            <div className={" main_no_pa cont_dfdf"}>
                                                <div className={"row row_line_sty mff_row"}>

                                                    <div className={" col-lg-4 col-md-4 col-sm-6 col-6 "}>


                                                        <p className={"mg_pop sers_tet"}>{this.state.lang.DATEUROKS.text}</p>


                                                    </div>
                                                    <div className={" col-lg-4 col-md-4 col-sm-6 col-6 "}>


                                                        <p className={"mg_pop sers_tet"}>{this.state.lang.STATUS.text}</p>


                                                    </div>


                                                </div>
                                            </div>


                                        </div>
                                        <div className={"line_lool"}></div>

                                        {this.state.rand.orders_group[i].lessons_list.map((data, idx) => (
                                            <div className={"wd_muo_uroks"}>
                                              

                                                            <div className={" col-lg-12 col-md-4 col-sm-6 col-6 pddsss"}>



                                                                <div className={" main_no_pa cont_dfdf"}>
                                                                    <div className={"row row_line_sty mff_row"}>

                                                                        <div className={" col-lg-4 col-md-4 col-sm-6 col-6 "}>


                                                                            <p className={"mg_pop"}>{moment(data.lesson_start_timestamp_new * 1000).format("dddd, DD MMMM, В HH:mm")}</p>


                                                                        </div>
                                                                        <div className={" col-lg-2 col-md-4 col-sm-6 col-6 "}>


                                                                            <p className={"mg_pop"}>{data.status_name}</p>


                                                                        </div>
                                                                        {console.log(moment().unix())}
                                                                        {(() => {
                                                                             if (moment().unix() >= data.lesson_start_timestamp_new || data.lesson_start_timestamp_new - moment().unix() <= 1800) {
                                                                              if(data.is_ended == true){
return(
    <div

    className={" col-lg-2 col-md-4 col-sm-6 col-6 txt_rg_cen"}>


    <div className={"mg_pop"}>{this.state.lang.voyti.text}</div>


</div>
)
                                                                              }else{
                                                                                return (

                                                                                    <div

                                                                                        className={" col-lg-2 col-md-4 col-sm-6 col-6 txt_rg_cen"}>


                                                                                        <Link onClick={() =>
                                                                                            this.saveMobile88({
                                                                                               
                                                                                                te: data.teacher_lesson_id,
                                                                                                gr: data.group_id
                                                                                            })
                                                                                        } className={"mg_pop"}>{this.state.lang.voyti.text}

                                                                                        </Link>


                                                                                    </div>

                                                                                )
                                                                              }
                                                                            } else {
                                                                                return (
                                                                                    <div

                                                                                        className={" col-lg-2 col-md-4 col-sm-6 col-6 txt_rg_cen"}>


                                                                                        <div className={"mg_pop"}>{this.state.lang.voyti.text}</div>


                                                                                    </div>

                                                                                )
                                                                            }

                                                                        })()}




                                                                        <div
                                                                            className={" col-lg-3 col-md-4 col-sm-6 col-6 txt_rg"}>


                                                                            <p className={"mg_pop"}>{this.state.lang.soobshenitlopo.text}
                                                                            </p>


                                                                        </div>

                                                                    </div>

                                                                    <div className={"line_lool"}></div>

                                                                </div>




                                                            </div>

                                                
                                            </div>



                                        ))}

                                   
                                    </div>
                                </div>
                            </div>


                
            </React.Fragment>
        )
     }
        
    }
}


})()}



























                                                                                </div>



                                                                            ))}


                                                                        </div>
                                                                    )
                                                                } else {
                                                                    return (
                                                                        <p>У вас нет групп</p>
                                                                    )
                                                                }
                                                            })()}



                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        } else {
                                            if (this.state.editLoad == true) {
                                                return (
                                                    <div className={"whta_hist"}>
                                                        <div className={" main_no_pa"}>
                                                            <div className={"row row_line_sty"}>
                                                                {(() => {

                                                                    if (this.state.gStudent == 0) {
                                                                        return (
                                                                            <div className={" col-lg-9 col-md-4 col-sm-6 col-6 pddsss"}>

{(() => {

if (this.state.gCoast == "") {
    return (
        <input type="number" onChange={this.conet} className='inneowdisa createonedays cols_mp form-control' placeholder={"Сумма за период"} />
    )
} else {
    return (
        <input type="number" onChange={this.conet} value={this.state.gCoast} className='inneowdisa createonedays cols_mp form-control' placeholder={"Сумма за период"} />


    )

}
})()}
                                                                                {(() => {

                                                                                    if (this.state.gDesc == "") {
                                                                                        return (
                                                                                            <input onChange={this.about} className='createonedays cols_mp form-control' placeholder={"Описание"}>

                                                                                            </input>
                                                                                        )
                                                                                    } else {
                                                                                        return (
                                                                                            <input onChange={this.about} className='createonedays cols_mp form-control' value={this.state.gDesc} placeholder={"Описание"}>



                                                                                            </input>


                                                                                        )

                                                                                    }
                                                                                })()}



<select onChange={this.counr} className='createonedays sects_1111'>
                                                                      
                                                                        {(() => {

if (this.state.gLes == 0) {
    return (
        <option value={"0"}>
        Выберите максимальное количество уроков
    </option>
    )
} else {
    return (
        <option value={"0"}>
            {this.state.gLes}
        </option>

    )
}
})()}
                                                                        <option value={"5"}>
                                                                            5
                                                                        </option>
                                                                        <option value={"10"}>
                                                                            10
                                                                        </option>
                                                                        <option value={"15"}>
                                                                            15
                                                                        </option>


                                                                    </select>

                                                                    {console.log()}
                                                                                <select onChange={this.count} className='createonedays sects_1111'>

                                                                                    {(() => {

                                                                                        if (this.state.gCount == 0) {
                                                                                            return (
                                                                                                <option value={"0"}>
                                                                                                    Выберите количество
                                                                                                </option>
                                                                                            )
                                                                                        } else {
                                                                                            return (
                                                                                                <option value={"0"}>
                                                                                                    {this.state.gCount}
                                                                                                </option>

                                                                                            )
                                                                                        }
                                                                                    })()}


                                                                                    <option value={"1"}>
                                                                                        1
                                                                                    </option>
                                                                                    <option value={"2"}>
                                                                                        2
                                                                                    </option>
                                                                                    <option value={"3"}>
                                                                                        3
                                                                                    </option>
                                                                                    <option value={"4"}>
                                                                                        4
                                                                                    </option>
                                                                                    <option value={"5"}>
                                                                                        5
                                                                                    </option>
                                                                                </select>



                                                                                <select onChange={this.select} className='createonedays sects_1111'>

                                                                                    {(() => {

                                                                                        if (this.state.gDuration == 0) {
                                                                                            return (
                                                                                                <option value={"0"}>
                                                                                                    Выберите время
                                                                                                </option>
                                                                                            )
                                                                                        } else {
                                                                                            return (
                                                                                                <option value={"0"}>
                                                                                                    {this.state.gDuration} минут
                                                                                                </option>

                                                                                            )
                                                                                        }
                                                                                    })()}

                                                                                    <option value={"60"}>
                                                                                        60 минут
                                                                                    </option>
                                                                                    <option value={"90"}>
                                                                                        90 минут
                                                                                    </option>
                                                                                    <option value={"120"}>
                                                                                        120 минут
                                                                                    </option>
                                                                                </select>
                                                                                <DatePicker

                                                                                    className='createonedays cols_mp form-control'
                                                                                    showTimeSelect
                                                                                    locale={"ru"}
                                                                                    timeFormat="p"
                                                                                    selected={this.state.gToday}
                                                                                    onChange={(date) => this.setState({
                                                                                        gToday: date
                                                                                    })}
                                                                                    dateFormat="Pp"
                                                                                />


                                                                                {(() => {
                                                                                 console.log(this.state.counr)
                                                                                 console.log(this.state.conet)
                                                                                 console.log(this.state.gDesc)
                                                                                 console.log(this.state.gDuration )
                                                                                 console.log(this.state.gCount)
                                                                                 console.log(this.state.gToday)
                                                                            
                                                                                    if (this.state.gCoast == "" || this.state.gLes == "" || this.state.gDesc == "" || this.state.gDuration == "0" || this.state.gCount == "0" || this.state.gToday == "0" || this.state.gToday == null) {

                                                                                        return (

                                                                                            <div>
                                                                                                <button className='disablesedcreatebtns createesbtn ne_pa_data ne_pa_data213213'>Сохранить</button>
                                                                                                <button onClick={this.cancel} className='createesbtn ne_pa_data ne_pa_data213213 canaccae'>Отмена</button>
                                                                                                <button onClick={this.delete} className='createesbtn ne_pa_data ne_pa_data213213 canaccae deleted'>Удалить</button>
                                                                                        
                                                                                            </div>
                                                                                        )
                                                                                    } else {
                                                                                        return (
                                                                                            <div>
                                                                                                <button onClick={this.save} className='createesbtn ne_pa_data ne_pa_data213213'>Сохранить</button>
                                                                                                <button onClick={this.cancel} className='createesbtn ne_pa_data ne_pa_data213213 canaccae'>Отмена</button>
                                                                                          
                                                                                                
                                                                                                <button onClick={this.delete} className='createesbtn ne_pa_data ne_pa_data213213 canaccae deleted'>Удалить</button>
                                                                                        
                                                                                            </div>

                                                                                        )
                                                                                    }

                                                                                })()}








                                                                            </div>

                                                                        )
                                                                    } else {

                                                                    }
                                                                })()}



                                                            </div></div></div>
                                                )
                                            } else {
                                                return (
                                                    <div className={"whta_hist"}>
                                                        <div className={" main_no_pa"}>
                                                            <div className={"row row_line_sty"}>
                                                                <div className={" col-lg-9 col-md-4 col-sm-6 col-6 pddsss"}>
                                                                    <input onChange={this.about} className='createonedays cols_mp form-control' placeholder={"Описание"}>

                                                                    </input>
                                                                    <input type="number" onChange={this.conet} className='inneowdisa createonedays cols_mp form-control' placeholder={"Сумма за период"} />
                                                                    <select onChange={this.counr} className='createonedays sects_1111'>
                                                                        <option value={"0"}>
                                                                            Выберите максимальное количество уроков
                                                                        </option>
                                                                        <option value={"5"}>
                                                                            5
                                                                        </option>
                                                                        <option value={"10"}>
                                                                            10
                                                                        </option>
                                                                        <option value={"15"}>
                                                                            15
                                                                        </option>


                                                                    </select>


                                                                    <select onChange={this.count} className='createonedays sects_1111'>
                                                                        <option value={"0"}>
                                                                            Выберите максимальное количество учеников
                                                                        </option>
                                                                        <option value={"1"}>
                                                                            1
                                                                        </option>
                                                                        <option value={"2"}>
                                                                            2
                                                                        </option>
                                                                        <option value={"3"}>
                                                                            3
                                                                        </option>
                                                                        <option value={"4"}>
                                                                            4
                                                                        </option>
                                                                        <option value={"5"}>
                                                                            5
                                                                        </option>
                                                                    </select>



                                                                    <select onChange={this.select} className='createonedays sects_1111'>
                                                                        <option value={"0"}>
                                                                            Выберите время
                                                                        </option>
                                                                        <option value={"60"}>
                                                                            60 минут
                                                                        </option>
                                                                        <option value={"90"}>
                                                                            90 минут
                                                                        </option>
                                                                        <option value={"120"}>
                                                                            120 минут
                                                                        </option>
                                                                    </select>
                                                                    <DatePicker

                                                                        className='createonedays cols_mp form-control'
                                                                        showTimeSelect
                                                                        locale={"ru"}
                                                                        timeFormat="p"
                                                                        selected={this.state.today}
                                                                        onChange={(date) => this.setState({
                                                                            today: date
                                                                        })}
                                                                        dateFormat="Pp"
                                                                    />

                                                                    {(() => {
                                                                        if (this.state.counr == "" || this.state.conet == "" || this.state.about == "" || this.state.count == "0" || this.state.select == "0" || this.state.today == "0" || this.state.today == null) {
                                                                            return (

                                                                                <div>
                                                                                    <button className='disablesedcreatebtns createesbtn ne_pa_data ne_pa_data213213'>Создать</button>
                                                                                    <button onClick={this.cancel} className='createesbtn ne_pa_data ne_pa_data213213 canaccae'>Отмена</button>
                                                                                </div>
                                                                            )
                                                                        } else {
                                                                            return (
                                                                                <div>
                                                                                    <button onClick={this.create} className='createesbtn ne_pa_data ne_pa_data213213'>Создать</button>
                                                                                    <button onClick={this.cancel} className='createesbtn ne_pa_data ne_pa_data213213 canaccae'>Отмена</button>
                                                                                </div>

                                                                            )
                                                                        }

                                                                    })()}



                                                                </div></div></div></div>


                                                )
                                            }

                                        }
                                    })()}





                                </div>
                            </div>
                        </div></div>



                </div>
            )
        }


    }
}










Editor.modules = {
    toolbar: [
        [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
        [{ size: [] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' },
        { 'indent': '-1' }, { 'indent': '+1' }],
        ['link', 'image', 'video'],
        ['clean']
    ],
    clipboard: {
        // toggle to add extra line breaks when pasting HTML:
        matchVisual: false,
    }
}
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
Editor.formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'video'
]
