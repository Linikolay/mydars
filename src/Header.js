import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import openSocket from 'socket.io-client';
import {
    Button,
    FormControl,
    Form,
    Dropdown,
    NavItem,
    NavDropdown,
    DropdownButton,
    MenuItem,
    Nav,

    Container,
    Row,
    Col, Carousel
} from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'
import './App.css'


import shield from './images/shield.svg';

import StarRatingComponent from 'react-star-rating-component';
import ScrollToBottom from 'react-scroll-to-bottom'
import logo from './images/logo.png';
import logoru from './images/logoru.png';
import koshel from './images/koshel.svg';

import seac from './images/seac.svg';


import logo1 from './images/logo.png';
import icohome from './images/ico_home.svg';
import mol from './images/mol2.svg';
import not from './images/notife.svg';
import prof from './images/prof.svg';
import mess_ff1 from './images/mess_ff1.svg';
import mess_ff from './images/mess_ff.svg';
import bam from './images/bam.svg';
import file_scripts_kj from './images/file_scripts_kj.svg'

import chat from './images/chat.svg'
import moment from "moment";
import InfiniteScroll from 'react-infinite-scroll-component';
import problem from './images/problem.svg'
import send from './images/send.svg'
import ch_chat1 from './images/ch_chat1.svg'
import ch_chat from './images/ch_chat.svg'

import notif from './images/notif.svg'
import soc from './Cht'



class Header extends Component {

    constructor() {
        super()
        this.state = {
            isLoaded: false,
            create: {},
            language: "",
            notifer_bal: "",
            levels: "",
            file: null,
            base64URL: "",
            rating: 5,
            showChat: false,
            rating1: 0,
            rating2: 0,
            rating3: 0,
            rating4: 0,
            rating5: 0,
            name: "",
            maid: false,
            langthe: 15,
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
            notifer: "",
            not: false,
            status: "",
            sms: "",

            fam: "",
            em: "",
            dd: "",
            mm: "",
            yy: "",
            pas1: "",
            lang: "",
            pas2: "",
            value: "",
            isMylod: false,
            selPage: 2,
            lom: false,
            text_main: "",
            boro: false,
            add: "",
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.back = this.back.bind(this);
        this.feed = this.feed.bind(this);
        this.mesml = this.mesml.bind(this);
        this.sens = this.sens.bind(this);
        this.sens0 = this.sens0.bind(this);

        this.ru = this.ru.bind(this);
        this.uz = this.uz.bind(this);

        this.che = this.che.bind(this);
        this.fetchMoreData = this.fetchMoreData.bind(this);
        this.seach = this.seach.bind(this);
        this.changeUnit33 = this.changeUnit33.bind(this);
        this.bobo = this.bobo.bind(this);
        this.buy = this.buy.bind(this);
        this.otmena = this.otmena.bind(this);
        this.unrnotifers = this.unrnotifers.bind(this);
        this.saveMobile9 = this.saveMobile9.bind(this);
    }
    otmena(obj) {
        console.log(obj)
        fetch('https://api.mydars.uz/api/notification/request_lesson/', {
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
                "teacher_lesson_id": obj.obj,
                "declined": true,
                "notification_id": obj.id
            })

        })


            .then(res => res.json())

            .then((data) => {
                console.log(data)

            })
    }
    saveMobile9() {
        console.log(this.state.mainID)

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
    unrnotifers() {
        fetch('https://api.mydars.uz/api/notification/mark_all_notification_as_read/', {
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

            })

        })


            .then(res => res.json())

            .then((data) => {
                console.log(data)

            })

    }
    ru() {
        localStorage.setItem('lang', 'uz')
    }
    uz() {
        localStorage.setItem('lang', 'uz')
    }
    changeUnit33(item) {
        console.log(item)
        this.setState({

            showModal3: true,
        })
    }
    sklonenie(number, txt) {
        var cases = [2, 0, 1, 1, 1, 2];
        return txt[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
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
    fetchMoreData = () => {
        // a fake async api call like which sends
        // 20 more records in 1.5 secs
        console.log("данные обновились")
        console.log("данные обновились")
        setTimeout(() => {
            this.setState({
                langthe: this.state.langthe + 15,
                selPage: this.state.selPage + 1,
            });
        }, 1500);
        if (this.state.selPage >= sessionStorage.getItem('pags')) {

        } else {
            const main = { "type": "paginate", "chat_id": sessionStorage.getItem('ms'), "page": this.state.selPage }
            soc.emit('message', JSON.stringify(main))
        }





        console.log(this.state.selPage)


    };


    stand() {
        fetch('https://api.mydars.uz/api/content/search/?search_string=', {
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

            .then((data) => {
                console.log(data)
                sessionStorage.setItem('search', JSON.stringify(data))
            }
            )
    }

    seach(e) {
        console.log(e.target.value)

        fetch('https://api.mydars.uz/api/content/search/?search_string=' + e.target.value, {
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
                sessionStorage.setItem('search', JSON.stringify(data))
            }
            )
    }
    che = obj => {
        console.log(obj)

        fetch('https://api.mydars.uz/api/notification/request_lesson/', {
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
                "teacher_lesson_id": obj.obj,
                "notification_id": obj.notif
            })

        })

            .then(res => res.json())

            .then((data) => {


                console.log(data)
            }
            )



    }

    handleToggleModal10 = () => this.setState({
        showModal10: !this.state.showModal10,
        showModal8: false


    }

    );
    handleToggleModal3 = () => this.setState({ showModal3: !this.state.showModal3 });
    handleToggleModal8 = () => this.setState({ showModal8: !this.state.showModal8 });
    handleToggleModal22 = () => this.setState({ showModal22: !this.state.showModal22 });

    // handleToggleModal66 = () => this.setState({ showModal66: !this.state.showModal66 });

    handleToggleModal66 = (obj) => this.setState({
        showModal66: !this.state.showModal66,
        mainID: obj.id,

    });

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        // alert('Отправленное имя: ' + this.state.value);
        event.preventDefault();
        if (this.state.value.length == 0) {

        } else {
            const main = { "type": "chat", "chat_id": sessionStorage.getItem('ms'), "message": this.state.value }
            console.log(main)
            soc.emit('message', JSON.stringify(main))

            this.setState({

                value: "",

            })
        }



    }
    ru() {
        localStorage.setItem('lang', 'ru')
        window.location.reload();

    }
    uz() {
        localStorage.setItem('lang', 'uz')
        window.location.reload();

    }
    bobo(e) {
        console.log(e.target)
        if (this.state.boro == false) {
            this.setState({
                boro: true
            })
        } else {
            this.setState({
                boro: false
            })
        }

    }


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
    componentDidMount() {

        let apple = 1;
        let pieces = 3;
        let ruble = 10;

        let a = this.sklonenie(apple, ['Репетитор', 'Репетитора', 'Репетиторов']); // яблоко

        if (localStorage.getItem('lang') == null) {
            localStorage.setItem('lang', 'uz')
        }


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


        const messages = document.getElementById('messages');
        console.log(messages)

        if (messages == null) {

        } else {
            console.log(messages.scrollHeight)
            console.log(messages.scrollTop)
            messages.scrollTo = 500
        }


        soc.on('message', (data) => {



            console.log(data)
            if (data.create_chat) {
                if (data.create_chat == true) {
                    sessionStorage.setItem('ms', data.chat_id);
                    this.handleToggleModal3()
                }
            }

            if (data.active_chats) {

                if (this.state.lom == false) {
                    console.log(data)
                    this.setState({
                        chat: data,
                        isMylod: true
                    })
                }

            } else if (data.chat) {

                // this.setState({
                //     lom: true
                // })

                const main = { "type": "update" }


                // soc.emit('message','{"type":"chat",  "chat_id":40, "message": "435345"} ')

                soc.emit('message', JSON.stringify(main))
                for (var i = 0; i < this.state.chat.active_chats.length; i++) {

                    if (this.state.chat.active_chats[i].id == data.chat.chat_id) {
                        // console.log(this.state.chat.active_chats[i].messages[l])


                        this.state.chat.active_chats[i].messages.push(data.chat)
                        this.setState({
                            // isLoaded: true
                        })

                        const messages = document.getElementById('messages');
                        // console.log(messages)
                        // messages.scrollTop = messages.scrollTop + 300

                        // messages.scrollTop = messages.scrollTop + 500
                        if (messages == null) {

                        } else {
                            console.log(messages.scrollHeight)
                            console.log(messages.scrollTop)
                            messages.scrollTop = messages.scrollTop + 500
                        }

                    }



                }




            }


            else if (data.chat_messages) {

                for (var i = 0; i < this.state.chat.active_chats.length; i++) {

                    if (this.state.chat.active_chats[i].id == sessionStorage.getItem('ms')) {
                        // console.log(this.state.chat.active_chats[i].messages[l])

                        // const lop =  [data.chat_messages]
                        // console.log(lop)
                        const test = this.state.chat.active_chats[i].messages.unshift(...data.chat_messages)
                        console.log(test)
                        this.state.chat.active_chats[i].messages.unshift(...data.chat_messages)
                        console.log(data.chat_messages)



                    }
                    // for(var l = 0; l < this.state.chat.active_chats[i].messages.length; l++){

                    // }






                }
            }



        }



        )





        fetch('https://api.mydars.uz/api/registration/', {


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

                setInterval(() => {
                    // const main = { "type": "update"}


                    // soc.emit('message','{"type":"chat",  "chat_id":40, "message": "435345"} ')

                    // soc.emit('message', JSON.stringify(main))

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


                                this.setState(() => ({
                                    notifer: data,


                                }));




                            }


                            // console.log(data)
                        }
                        )




                }, 1000);

                this.setState({
                    isLoaded: true,
                    create: data,
                    not: true,
                    add: data,
                    language: data.data.languages.available_languages,
                    levels: data.data.languages.levels,


                });


                // console.log(data.profile)
            }
            )
        this.setState({
            showChat: true
        })
    }

    send(obj) {
        console.log(obj)
        sessionStorage.setItem('ms', obj.id);
        sessionStorage.setItem('pags', obj.pag.all_pages);

        const main = { "type": "mark_all_message", "chat_id": obj.id }


        // soc.emit('message','{"type":"chat",  "chat_id":40, "message": "435345"} ')

        soc.emit('message', JSON.stringify(main))

        this.setState(() => ({
            isLoaded: true,
            showChat: true,


        }));
    }
    back() {
        console.log("ffffffffff")
        sessionStorage.setItem('ms', "")
        sessionStorage.setItem('pags', "")
        this.setState(() => ({
            isLoaded: true


        }));
    }


    main() {


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
                soc.emit('message', JSON.stringify(main))


                // this.setState({
                //     isLoaded: true
                // })





            };






        }

    };


    mesml() {
        const test = { "type": "mark_all_message", "chat_id": sessionStorage.getItem('ms') }
        soc.emit('message', JSON.stringify(test))

    }
    feed(obj) {
        console.log(obj)
        this.setState({
            notifer_bal: obj.id
        })
        // this.state.notifer_bal
    }
    sens0() {
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

                "teacher_lesson_id": this.state.notifer_bal,
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
                    window.location.reload();
                }


            }
            )
    }
    sens() {
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
                "teacher_lesson_id": this.state.notifer_bal


            })

        }
        )

            .then(res => res.json())

            .then((data) => {
                console.log(data)

                if (data.rate == "success") {
                    window.location.reload();
                }



            }
            )
    }
    buy = obj => {
        console.log(obj)


        fetch('https://api.mydars.uz/api/buy_lessons_packets/', {
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

                "order_id": obj.order,
                "lessons_count": obj.count,
                "topup": true


            })

        }
        )

            .then(res => res.json())

            .then((data) => {
                console.log(data)

                if (data.available_packets.length > 0) {
                    sessionStorage.setItem("pay", JSON.stringify(data))
                    window.location.replace("/pack/" + obj.order);

                }



            }
            )

    }
    render() {

        const rot = document.getElementById('root');
        if (!this.state.showModal3) {
            rot.className = 'view'
        } else {
            rot.className = 'test'
        }
        // console.log(this.state.boro)
        const messages = document.getElementById('messages');

        if (messages == null) {

        } else {
            // messages.ScrollToBottom = 0
            if (this.state.showChat == true) {
                messages.scrollTop = 500
                this.setState({
                    showChat: false
                })
            } else {
                if (messages.scrollTop == 0) {
                    setTimeout(() => {
                        this.setState({
                            langthe: this.state.langthe + 15,
                            selPage: this.state.selPage + 1,
                        });
                    }, 1500);
                    if (this.state.selPage >= sessionStorage.getItem('pags')) {

                    } else {
                        messages.scrollTop = 500
                        const main = { "type": "paginate", "chat_id": sessionStorage.getItem('ms'), "page": this.state.selPage }
                        soc.emit('message', JSON.stringify(main))
                    }

                } else {

                }
            }

            console.log(messages.scrollTop)

        }





        const { isLoaded, isMylod, langLoad } = this.state

        if (!isLoaded || !langLoad) {
            return (
                <p></p>
            )
        } else {

            return (
                <React.Fragment>
                    {this.state.showModal22 && <div onClick={this.handleToggleModal22} className="baccccccc">


                    </div>

                    }

                    {this.state.showModal3 && <div onClick={this.handleToggleModal3} className="baccccccc">


                    </div>

                    }
                    {this.state.showModal13 && <div onClick={this.handleToggleModal13} className="baccccccc">


                    </div>

                    }
                    {this.state.showModal10 && <div onClick={this.handleToggleModal10} className="baccccccc">


                    </div>

                    }
                    {this.state.showModal66 && <div className="modal  modal_trabl trabl_show_modules">


                        <div className={"ext_modal"} onClick={this.handleToggleModal66}>x</div>



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

                                        {/* <img alt="" className="img_tran" src={tran}></img> */}
                                        <p className="mopos_001">{this.state.lang.vasheobrashprinay.text}</p>
                                        <p className="mopos_002">{this.state.lang.miobrashpriyatn.text}
                                        </p>


                                        <Link onClick={this.handleToggleModal66} className={"ne_pa_data btn_cust_pup width_100 lop_00098090"}>
                                            {this.state.lang.returnmain.text} <img alt="" className={"ne_pa"} />
                                        </Link>


                                    </div>
                                )
                            }
                        })()}




                    </div>
                    }
                    <div>
                        {this.state.showModal22 && <div className=" chat_main00 chat_main null_feeds add_pop_matcheser">

                            <div className={"gr_top_chat_btns"}>


                                <div className={"chat_tittle new_semms new_semms11"}>{this.state.lang.mytimessss.text}</div>
                                <Link >
                                    <div className={"ext_modal chat_tittle_exit mainscgooll"} onClick={this.handleToggleModal22}>x</div>
                                </Link>



                                <p className={"tite_add_matasss"}>{this.state.lang.bistrokjj988.text}</p>







                                {(() => {

                                    if (this.state.add.profile.student_all_orders.length == 0) {
                                        return (
                                            <div></div>
                                        )
                                    } else {
                                        return (
                                            <div className={"osn_bl_mercup"}>

                                                {this.state.add.profile.student_all_orders.map((cont, idx) => (

                                                    <div className={"buy_now_list_te"}>

                                                        <div className={"lines_pop_fute111"}> </div>
                                                        <div className={"rown_width_fff rown_width_fff1"}>
                                                            <a href={"/view/" + cont.teacher_id}>
                                                                <img alt="" className={"img_kjalbasin"} src={cont.teacher__avatar_url}></img>
                                                            </a>

                                                            <div>
                                                                <p>
                                                                    <a className={"toppiop_ahrefmain"} href={"/view/" + cont.teacher_id}>

                                                                        {cont.teacher__name}
                                                                    </a>

                                                                </p>
                                                                <p>
                                                                    {cont.lesson__type_name}
                                                                </p>
                                                            </div>
                                                        </div>

                                                        <div className={"rown_width_fff rown_width_fff2"}>
                                                            {cont.lesson__teacherhaslesson__lesson_amount.toLocaleString()} {this.state.lang.sumsurokies.text}
                                                        </div>

                                                        <div className={"rown_width_fff rown_width_fff3"}>

                                                            {(() => {

                                                                if (cont.is_auto == true) {
                                                                    return (
                                                                        <Link className={"buy_pop_managers"}


                                                                            onClick={() =>
                                                                                this.buy({
                                                                                    count: cont.lessons_payment_count,
                                                                                    order: cont.id,
                                                                                })
                                                                            }

                                                                        >
                                                                            Купить
                                                                        </Link>
                                                                    )
                                                                } else {
                                                                    return (
                                                                        <a href={"/newtime/" + cont.teacher_lesson_id[0].id + "/" + cont.teacher_id} className={"buy_pop_managers"}>
                                                                            Купить
                                                                        </a>
                                                                    )
                                                                }

                                                            })()}
                                                        </div>

                                                    </div>
                                                ))}
                                                <div className={"lines_pop_fute111"}> </div>
                                            </div>
                                        )
                                    }

                                })()}

                            </div>

                            <div className={"pop9880101"}>


                                <div className={"bottom_bbut_lesson_pops"}>
                                    <img alt="" className={"img_shilds"} src={shield} />
                                    <div className={"osniviy_pop_buy"}>
                                        <p className={"osniviy_pop_buy1"}>{this.state.lang.NashewZachets.text}</p>
                                        <p className={"osniviy_pop_buy2"}>{this.state.lang.EskuroksMainchewnesootw.text}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>


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


                    {
                        this.state.showModal8 && <div onClick={this.handleToggleModal8} className="baccccccc">


                        </div>

                    }


                    {
                        this.state.showModal8 && <div className=" main_moodddd chat_main">



                            {(() => {

                                if (this.state.not == true) {
                                    return (
                                        <React.Fragment>
                                            <div className={"gr_top_chat_btns"}>


                                                <div className={"chat_tittle new_semms noti_mol_notifications"}>{this.state.lang.NotifeTextMaonm.text}</div>
                                                <Link>
                                                    <div className={"ext_modal chat_tittle_exit  notifersikx"}

                                                        onClick={this.handleToggleModal8}


                                                    >x</div></Link>
                                            </div>
                                            {(() => {
                                                if (this.state.notifer.notification_list.length == 0) {
                                                    return (<p></p>)
                                                } else {
                                                    return (
                                                        <div className={"over_main_notifer"}>
                                                            {console.log(this.state.create)}

                                                            {
                                                                this.state.notifer.notification_list.map((data, idx) => (
                                                                    <div >
                                                                        {(() => {



                                                                            if (data.is_rate == true & data.is_active == true & data.is_request == false) {
                                                                                if (this.state.create.profile.is_user == true) {
                                                                                    return (
                                                                                        <div className={"gr_ch mol_main_kills"}>
                                                                                            <div className={"dis_cgg"}>
                                                                                                <p>

                                                                                                    {data.description} {moment(data.teacher_lesson__lesson_start_timestamp_new * 1000).format("dddd, DD MMMM, В HH:mm")}?
                                                                                                </p>

                                                                                            </div>
                                                                                            <div className={"nameboost"}>

                                                                                                <Link className={"btn_mainLink"} onClick={() => {
                                                                                                    this.handleToggleModal10()
                                                                                                    this.feed({
                                                                                                        id: data.teacher_lesson_id
                                                                                                    })
                                                                                                }}
                                                                                                >

                                                                                                    <img alt="" className={"mart_chat_img"} src={ch_chat1}></img>
                                                                                                    {this.state.lang.OcenkaUrokoaas112.text}</Link>
                                                                                            </div>
                                                                                            <div className={"nameboost"}>
                                                                                                {console.log(data)}
                                                                                                <Link className={"btn_mainLink1"}
                                                                                                    onClick={() =>
                                                                                                        this.handleToggleModal66({
                                                                                                            id: data.teacher_lesson_id
                                                                                                        })

                                                                                                    }

                                                                                                >

                                                                                                    <img alt="" className={"mart_chat_img"} src={problem} ></img>
                                                                                                    {this.state.lang.soobshenitlopo.text} </Link>
                                                                                            </div>
                                                                                            <div className={"rg_time_chater"}>{moment(data.created_at_timestamp * 1000).format('L')}</div>
                                                                                            <div className={"line_chats line"}></div>
                                                                                        </div>
                                                                                    )
                                                                                } else {
                                                                                    return (
                                                                                        <p></p>
                                                                                    )
                                                                                }


                                                                            } else if (data.is_rate == true & data.is_active == false & data.is_request == false) {
                                                                                return (
                                                                                    <p>{console.log(data.is_rate)}</p>
                                                                                )

                                                                            }

                                                                            else if (data.is_request == true && data.is_active == true && data.is_rate == false) {
                                                                                if (this.state.create.profile.is_user == data.addresed_to_user) {
                                                                                    return (
                                                                                        <div


                                                                                            className={"gr_ch mol_main_kills"}>

                                                                                            <div className={"dis_cgg"}>
                                                                                                <p>
                                                                                                    {data.teacher__name} {data.description} {moment(data.teacher_lesson__lesson_start_timestamp_new * 1000).format('DD MMMM HH:mm')} на {moment(data.teacher_lesson__lesson_start_timestamp_temp * 1000).format('DD MMMM HH:mm')}
                                                                                                </p>

                                                                                            </div>
                                                                                            <div className={"nameboost"}>

                                                                                                <Link className={"flots_main"}


                                                                                                    onClick={() =>
                                                                                                        this.che(
                                                                                                            {
                                                                                                                obj: data.teacher_lesson_id,
                                                                                                                notif: data.id
                                                                                                            }
                                                                                                        )
                                                                                                    }
                                                                                                >
                                                                                                    <img alt="" className={"mart_chat_img"} src={ch_chat}></img>
                                                                                                    {this.state.lang.Pdrtcjhjh1.text} </Link>

                                                                                                <Link className={"flots_main1"} onClick={() =>
                                                                                                    this.otmena(
                                                                                                        {
                                                                                                            obj: data.teacher_lesson_id,
                                                                                                            id: data.id
                                                                                                        }
                                                                                                    )
                                                                                                }
                                                                                                >
                                                                                                    <img alt=""></img>
                                                                                                    {this.state.lang.canacan11.text}</Link>

                                                                                            </div>
                                                                                            <div className={"rg_time_chater"}>{moment(data.created_at_timestamp * 1000).format('L')}</div>
                                                                                            <div className={"line_chats line"}></div>
                                                                                        </div>
                                                                                    )
                                                                                } else if (data.is_active == true && data.addresed_to_user == false) {
                                                                                    return (
                                                                                        <div


                                                                                            className={"gr_ch mol_main_kills"}>


                                                                                        </div>

                                                                                    )
                                                                                }
                                                                            } else if (data.is_request == false && data.is_rate == false) {
                                                                                if (data.addresed_to_user == this.state.create.profile.is_user) {
                                                                                    return (
                                                                                        <div


                                                                                            className={"gr_ch mol_main_kills"}>
                                                                                            <div className={"dis_cgg"}>
                                                                                                <a href={"/lesson"}>  <p>{data.description}</p>
                                                                                                </a>
                                                                                            </div>
                                                                                            <div className={"rg_time_chater"}>{moment(data.created_at_timestamp * 1000).format('L')}</div>
                                                                                            <div className={"line_chats line"}></div>
                                                                                        </div>
                                                                                    )
                                                                                } else if (data.addresed_to_user == this.state.create.profile.is_user) {
                                                                                    return (
                                                                                        <div


                                                                                            className={"gr_ch mol_main_kills"}>
                                                                                            <div className={"dis_cgg"}>
                                                                                                <p>{data.description}</p>

                                                                                            </div>
                                                                                            <div className={"rg_time_chater"}>{moment(data.created_at_timestamp * 1000).format('L')}</div>
                                                                                            <div className={"line_chats line"}></div>
                                                                                        </div>
                                                                                    )
                                                                                }

                                                                            } else if (data.is_active == false && data.is_request == true) {
                                                                                return (
                                                                                    <p></p>
                                                                                )
                                                                            }

                                                                        })()}

                                                                    </div>


                                                                ))
                                                            }
                                                        </div>
                                                    )
                                                }
                                            })()}


                                        </React.Fragment>
                                    )
                                }
                            })()}




                        </div>
                    }




                    {
                        this.state.showModal3 && <div className=" main_moodddd chat_main">



                            {(() => {

                                if (sessionStorage.getItem('ms') == "" || sessionStorage.getItem('ms') == undefined) {
                                    return (
                                        <React.Fragment>
                                            <div className={"gr_top_chat_btns"}>


                                                <div className={"chat_tittle new_semms"}>{this.state.lang.SoobMEssagesemain.text}</div>
                                                <Link> <div className={"ext_modal chat_tittle_exit chat_tittle_exit111"} onClick={this.handleToggleModal3}>x</div></Link>
                                            </div>

                                            {this.state.chat.active_chats.map((data, idx) => (

                                                <div>
                                                    {(() => {
                                                        if (data.messages.length == 0) {

                                                        } else {
                                                            return (
                                                                <div


                                                                    onClick={() =>
                                                                        this.send({

                                                                            id: data.id,
                                                                            pag: data.messages_pagination
                                                                        })
                                                                    }
                                                                    className={"gr_ch"}>

                                                                    {(() => {

                                                                        if (data.user_status) {
                                                                            if (data.user_status.online == true) {
                                                                                return (
                                                                                    <span className={"onliners_11"}></span>
                                                                                )
                                                                            } else {
                                                                                return (
                                                                                    <span className={""}></span>
                                                                                )
                                                                            }
                                                                        }

                                                                    })()}

                                                                    <a href="#" >    <img alt="" className={"avatar_chats"} src={data.avatar}></img></a>
                                                                    <div className={"rg_chat_list"}>
                                                                        <a href="#">     <p className={"name_chats_lsss"}>{data.name}</p></a>
                                                                        <p className={"last_time_chats"}>{moment(data.last_message_in_chat * 1000).format('LT')}</p>
                                                                    </div>
                                                                    <div className={"rg_chat_list"}>

                                                                        {(() => {

                                                                            for (var i = 0; i < data.messages.length; i++) {
                                                                                if (data.messages[i].message_create_at == data.last_message_in_chat) {
                                                                                    return (
                                                                                        <Link className={"node_decorationtitle name_chats_lsss1 name_chats_lsss1333434"}>
                                                                                            {data.messages[i].content}
                                                                                        </Link>
                                                                                    )
                                                                                }
                                                                            }

                                                                        })()}

                                                                        {(() => {

                                                                            if (data.unread_count == 0) {
                                                                                return (
                                                                                    <p className={"last_time_chats1 unr_chat"}></p>
                                                                                )
                                                                            } else {
                                                                                return (
                                                                                    <p className={"last_time_chats1 unr_chat"}>{data.unread_count}</p>
                                                                                )
                                                                            }
                                                                        })()}

                                                                    </div>
                                                                </div>

                                                            )
                                                        }

                                                    })()}


                                                </div>

                                            ))}
                                        </React.Fragment>
                                    )
                                } else {
                                    return (
                                        <div className={"chat_heh_top"}>
                                            <div className={"gr_top_chat_btns"}>


                                                <Link className={"mom1212"} onClick={this.back}> <img alt="" src={bam}></img>
                                                </Link>

                                                <div className={"chat_tittle mom1213 "}>{this.state.lang.SoobMEssagesemain.text}</div>
                                                <Link className={"ext_modal chat_tittle_exit mom1214 grewg34g34g"} onClick={this.handleToggleModal3}>x</Link>


                                            </div>



                                            <ScrollToBottom debug={false} id="messages" className={"messsa"}>

                                                <div debug={false} id="messages" ref={(el) => { this.messagesEnd = el; }} className={"disp_wd"}>


                                                    {/* {console.log(this.state.chat.active_chats)} */}



                                                    {this.state.chat.active_chats.map((data, idx) => (


                                                        <div className={"disp_wd11555"}>

                                                            {(() => {




                                                                if (data.id == sessionStorage.getItem('ms')) {

                                                                    return (


                                                                        <div className={"disp_wd11"}>

                                                                            {data.messages.map((message, idx) => (

                                                                                <div className={"disp_wd11"}>




                                                                                    {(() => {

                                                                                        if (message.student_id == null & message.teacher_id == this.state.create.profile.id ||

                                                                                            message.student_id == this.state.create.profile.id & message.teacher_id == null
                                                                                        ) {

                                                                                            if (message.content_url == "") {
                                                                                                return (
                                                                                                    <div className={"mes_my"}>

                                                                                                        <p className={"mes_my_p"}>{message.content}   <span className={"time_meff123"}>{moment(message.message_create_at * 1000).format('LT')}</span></p>
                                                                                                        <img alt="" className={"mess_ff"} src={mess_ff} />
                                                                                                    </div>



                                                                                                )

                                                                                            } else {
                                                                                                return (
                                                                                                    <div className={"mes_my"}>

                                                                                                        <p className={"mes_my_p"}><a target="_blank" href={message.content_url} download>  {message.content}</a><span className={"time_meff123"}>{moment(message.message_create_at * 1000).format('LT')}</span></p>
                                                                                                        <img alt="" className={"mess_ff"} src={mess_ff} />

                                                                                                    </div>

                                                                                                )

                                                                                            }




                                                                                        } else {


                                                                                            if (message.content_url == "") {
                                                                                                return (
                                                                                                    <div className={"mes_my_no"}>
                                                                                                        <img alt="" className={"avat_chates"} src={message.avatar}></img>
                                                                                                        <p className={"mes_my_no_p"}>{message.content}<span className={"time_meff123"}>{moment(message.message_create_at * 1000).format('LT')}</span></p>
                                                                                                        <img alt="" className={"mess_ff1"} src={mess_ff1} />
                                                                                                    </div>
                                                                                                )


                                                                                            } else {
                                                                                                return (
                                                                                                    <div className={"mes_my_no"}>
                                                                                                        <img alt="" className={"avat_chates"} src={message.avatar}></img>
                                                                                                        <p className={"mes_my_no_p"}><a target="_blank" href={message.content_url} download>{message.content}</a><span className={"time_meff123"}>{moment(message.message_create_at * 1000).format('LT')}</span></p>
                                                                                                        <img alt="" className={"mess_ff1"} src={mess_ff1} />
                                                                                                    </div>
                                                                                                )


                                                                                            }




                                                                                        }

                                                                                    })()}




                                                                                </div>
                                                                            ))
                                                                            }


                                                                        </div>

                                                                    )
                                                                }


                                                            })()}
                                                        </div>






                                                    ))}


                                                </div>
                                            </ScrollToBottom>



                                            <label htmlFor="filePicker"
                                                className={"myst_uploads chat_file_btns"}>

                                                <img alt="" src={file_scripts_kj} />



                                            </label>
                                            <input className={"hid_poop"} id="filePicker"
                                                onChange={this.onImageChange}
                                                style={{ visibility: "hidden" }}
                                                type={"file"}>

                                            </input>

                                            <form id={'send'} className="form_mess" onSubmit={this.handleSubmit}>
                                                <label>

                                                    <input placeholder="Сообщение..." type="text" value={this.state.value} onChange={this.handleChange} />
                                                    <button className={"btn_nonedispla"} type={"submit"} onClick={"document.getElementById('send').submit();"}><img alt="" src={send} /></button>
                                                </label>

                                            </form>
                                        </div>
                                    )
                                }
                            })()}




                        </div>
                    }
                    <div className={"wrap header_wrap"}>
                        {/*{console.log(service)}*/}


                        <Navbar
                            // expand="xl"

                            navbar-expand
                            bg="" variant="dark" sticky="top">


                            <div>


                            </div>

                            <Navbar.Brand href="/">
                            {(() => {
                                                        if (localStorage.getItem('lang') == undefined || localStorage.getItem('lang') == "" || localStorage.getItem('lang') == 'ru') {
                                                            return (

                                                                <img alt=""
                                                                src={logoru}
                                                                width="200"
                            
                                                                className="d-inline-block align-top"
                                                                alt="React Bootstrap logo"
                                                            />


                                                            )
                                                        } else {
                                                            return (

                                                                <img alt=""
                                                                src={logo}
                                                                width="200"
                            
                                                                className="d-inline-block align-top"
                                                                alt="React Bootstrap logo"
                                                            />
                                                            )
                                                        }
                                                    })()}
                            
                            </Navbar.Brand>
                            <Navbar.Toggle id="responsive-navbar-nav " aria-controls="basic-navbar-nav" />


                            {(() => {
                                if (this.state.create.Exception == true) {
                                    return (
                                        <Navbar.Collapse id="basic-navbar-nav">

                                            <Nav className="ml-auto">
                                                <a href="/newas" data-rb-event-key=""
                                                    className="nav-link tops_link regimegi">

                                                    {this.state.lang.registrtxt.text}


                                                </a>
                                                <a href="/newa" data-rb-event-key="#home"
                                                    className="nav-link tops_link  regimegi213 ">

                                                    {this.state.lang.voyti.text}  </a>

                                            </Nav>

                                            {/* <FormControl onChange={this.seach} type="text" placeholder="Поиск" className="mr-sm-2 main_poisk_sikk" /> */}
                                            {(() => {
                                                if (this.state.boro == false) {
                                                    return (
                                                        <p></p>
                                                    )
                                                } else {
                                                    return (
                                                        <input className={"infjff"} onChange={this.seach} type="text" placeholder="поиск" />

                                                    )
                                                }

                                            })()}
                                            <Form inline>

                                                <Link onClick={this.bobo}>
                                                    <img alt="" src={seac}></img>
                                                </Link>

                                            </Form>
                                        </Navbar.Collapse>
                                    )
                                } else
                                    if (this.state.create.profile == undefined) {
                                        return (
                                            <Navbar.Collapse id="basic-navbar-nav">
                                                <Nav className="ml-auto">

                                                    <a href="/newas" data-rb-event-key="#home"
                                                        className="nav-link tops_link regimegi">

                                                        {this.state.lang.registrtxt.text}

                                                    </a>
                                                    <a href="/newa" data-rb-event-key="#home"
                                                        className="nav-link tops_link regimegi213 ">

                                                        {this.state.lang.voyti.text}  </a>





                                                </Nav>



                                                {/* {(() => {
                                                    if (this.state.boro == false) {
                                                        return (
                                                            <p></p>
                                                        )
                                                    } else {
                                                        return (
                                                            <input className={"infjff"} onChange={this.seach} type="text" placeholder="поиск" />

                                                        )
                                                    }

                                                })()}
                                                <Form inline>

                                                    <Link onClick={this.bobo}>
                                                        <img alt="" src={seac}></img>
                                                    </Link>
                                                    <form className={"form_confff"} action="" autocomplete="on">


                                                    </form>

                                                </Form> */}

                                                <div classname={"vtn_langs"}>
                                                    {(() => {
                                                        if (localStorage.getItem('lang') == undefined || localStorage.getItem('lang') == "" || localStorage.getItem('lang') == 'ru') {
                                                            return (

                                                                <NavDropdown title="Ru" className={"ki888"} id="basic-nav-dropdown">
                                                                    <NavDropdown.Item onClick={this.uz} >Uz</NavDropdown.Item>

                                                                </NavDropdown>



                                                            )
                                                        } else {
                                                            return (

                                                                <NavDropdown className={"ki888"} title="Uz" id="basic-nav-dropdown">
                                                                    <NavDropdown.Item onClick={this.ru} >Ru</NavDropdown.Item>

                                                                </NavDropdown>
                                                            )
                                                        }
                                                    })()}
                                                </div>
                                            </Navbar.Collapse>
                                        )
                                    } else if (this.state.create.profile.is_user == true) {
                                        return (
                                            <Navbar.Collapse id="basic-navbar-nav">
                                                <Nav className="mr-auto">



                                                    {(() => {
                                                        if (this.props.location.pathname == "/") {
                                                            return (
                                                                <a href="/" data-rb-event-key="#home"
                                                                    className="nav-link tops_link dub_link_actives">
                                                                    <span className={"top_poloska"}></span>
                                                                    {this.state.lang.poredomnon99.text} </a>
                                                            )
                                                        } else {
                                                            return (
                                                                <a href="/" data-rb-event-key="#home"
                                                                    className="nav-link tops_link ">
                                                                    {this.state.lang.poredomnon99.text}  </a>
                                                            )
                                                        }

                                                    })()}



                                                    {(() => {
                                                        if (this.props.location.pathname == "/profile/" || this.props.location.pathname == "/obzor/" || this.props.location.pathname == "/about/" || this.props.location.pathname == "/lesson/") {
                                                            return (
                                                                <a href="/profile/" data-rb-event-key="#home"
                                                                    className="nav-link tops_link dub_link_actives">

                                                                    <span className={"top_poloska"}></span>

                                                                    <img alt="" className={"icohome"} src={icohome} />



                                                                    <a href="/profile/">

                                                                    </a> {this.state.lang.mycabinets.text}</a>
                                                            )
                                                        } else {
                                                            return (
                                                                <a href="/profile/" data-rb-event-key="#home"
                                                                    className="nav-link tops_link">



                                                                    <img alt="" className={"icohome"} src={icohome} />



                                                                    <a href="/profile/">

                                                                    </a> {this.state.lang.mycabinets.text}</a>
                                                            )
                                                        }
                                                        console.log(this.props.location.pathname == "/")

                                                    })()}
                                                </Nav>
                                                <div className={"kokolll"}>
                                                    <img alt="" src={koshel}></img>
                                                    {this.state.create.profiles_count} {this.state.create.profile.total_paid_lessons_count} {this.sklonenie(this.state.create.profile.total_paid_lessons_count, [this.state.lang.Urokovmainlkl32423.text, this.state.lang.Urokovmainlkl324233434.text, this.state.lang.Urokovmainlkl32423343423423.text])}
                                                    {/* {this.state.lang.Urokovmainlkl32423.text} */}
                                                </div>
                                                <Link onClick={this.handleToggleModal22} className={"buy_urokssss"}>{this.state.lang.BuyUrokesmain.text}</Link>
                                                <div className={"vert_liness"}></div>
                                                {(() => {
                                                    if (this.state.boro == false) {
                                                        return (
                                                            <p></p>
                                                        )
                                                    } else {
                                                        return (
                                                            <input className={"infjff"} onChange={this.seach} type="text" placeholder="поиск" />

                                                        )
                                                    }

                                                })()}
                                                <Form inline>




                                                    <Link onClick={this.bobo}>
                                                        <img alt="" className={"buiut_seach"} src={seac}></img>
                                                    </Link>

                                                    <Button className={"bolopot"} onClick={() => { this.handleToggleModal8(); this.unrnotifers() }} variant="">
                                                        <img alt="" src={notif} />
                                                        {(() => {

                                                            if (this.state.notifer.get_count_unread == 0) {
                                                                return (
                                                                    <span className={""}></span>
                                                                )
                                                            } else {
                                                                return (
                                                                    <span className={"not_unresed"}></span>
                                                                )
                                                            }

                                                        })()}
                                                    </Button>
                                                    {(() => {


                                                        if (isMylod == false) {
                                                            return (
                                                                <p></p>
                                                            )
                                                        } else {
                                                            return (
                                                                <Button className={"bolopot"} onClick={this.handleToggleModal3} variant="">
                                                                    <img alt="" src={chat} />

                                                                </Button>
                                                            )
                                                        }
                                                    })()}




                                                    <Button className={"bolopot"} variant="">
                                                        <a href="/profile">
                                                            <img alt="" src={prof} />
                                                        </a>
                                                    </Button>
                                                    <div classname={"vtn_langs"}>
                                                        {(() => {
                                                            if (localStorage.getItem('lang') == undefined || localStorage.getItem('lang') == "" || localStorage.getItem('lang') == 'ru') {
                                                                return (

                                                                    <NavDropdown title="Ru" id="basic-nav-dropdown">
                                                                        <NavDropdown.Item onClick={this.uz} >Uz</NavDropdown.Item>

                                                                    </NavDropdown>



                                                                )
                                                            } else {
                                                                return (

                                                                    <NavDropdown title="Uz" id="basic-nav-dropdown">
                                                                        <NavDropdown.Item onClick={this.ru} >Ru</NavDropdown.Item>

                                                                    </NavDropdown>
                                                                )
                                                            }
                                                        })()}
                                                    </div>



                                                </Form>
                                            </Navbar.Collapse>
                                        )
                                    } else if (this.state.create.profile.is_user == false) {
                                        return (
                                            <Navbar.Collapse id="basic-navbar-nav">
                                                <Nav className="mr-auto">

                                                    {(() => {
                                                        if (this.props.location.pathname == "/") {
                                                            return (
                                                                <a href="/" data-rb-event-key="#home"
                                                                    className="nav-link tops_link dub_link_actives">
                                                                    <span className={"top_poloska"}></span>
                                                                    {this.state.lang.poredomnon99.text} </a>
                                                            )
                                                        } else {
                                                            return (
                                                                <a href="/" data-rb-event-key="#home"
                                                                    className="nav-link tops_link ">
                                                                    {this.state.lang.poredomnon99.text}  </a>
                                                            )
                                                        }
                                                        console.log(this.props.location)

                                                    })()}


                                                    {(() => {
                                                        // console.log(this.props.location)
                                                        if (this.props.location.pathname == "/profile/" || this.props.location.pathname == "/obzor/" || this.props.location.pathname == "/about/" || this.props.location.pathname == "/lesson/") {
                                                            return (
                                                                <a href="/profile/" data-rb-event-key="#home"
                                                                    className="nav-link tops_link dub_link_actives">

                                                                    <span className={"top_poloska"}></span>

                                                                    <img alt="" className={"icohome"} src={icohome} />



                                                                    <a href="/profile/">

                                                                    </a> {this.state.lang.mycabinets.text}</a>
                                                            )
                                                        } else {
                                                            return (
                                                                <a href="/profile/" data-rb-event-key="#home"
                                                                    className="nav-link tops_link">



                                                                    <img alt="" className={"icohome"} src={icohome} />



                                                                    <a href="/profile/">

                                                                    </a> {this.state.lang.mycabinets.text}</a>
                                                            )
                                                        }
                                                        console.log(this.props.location.pathname == "/")

                                                    })()}








                                                </Nav>


                                                {/* <FormControl onChange={this.seach}  type="text" placeholder="Поиск" className="mr-sm-2 main_poisk_sikk" /> */}

                                                {(() => {
                                                    if (this.state.boro == false) {
                                                        return (
                                                            <p></p>
                                                        )
                                                    } else {
                                                        return (
                                                            <input className={"infjff"} onChange={this.seach} type="text" placeholder="поиск" />

                                                        )
                                                    }

                                                })()}

                                                <Form inline>
                                                    {/* <FormControl onChange={this.seach} type="text" placeholder="Поиск" className="mr-sm-2 main_poisk_sikk" /> */}

                                                    <Link onClick={this.bobo}>
                                                        <img alt="" className={"buiut_seach"} src={seac}></img>
                                                    </Link>


                                                    <Button className={"bolopot"} onClick={() => { this.handleToggleModal8(); this.unrnotifers() }} variant="">
                                                        <img alt="" src={notif} />
                                                        {(() => {

                                                            if (this.state.notifer.get_count_unread == 0) {
                                                                return (
                                                                    <span className={""}></span>
                                                                )
                                                            } else {
                                                                return (
                                                                    <span className={"not_unresed"}></span>
                                                                )
                                                            }

                                                        })()}




                                                    </Button>
                                                    {(() => {


                                                        if (isMylod == false) {
                                                            return (
                                                                <p></p>
                                                            )
                                                        } else {
                                                            return (
                                                                <Button className={"bolopot"} onClick={this.handleToggleModal3} variant="">
                                                                    <img alt="" src={chat} />

                                                                </Button>
                                                            )
                                                        }
                                                    })()}



                                                    <Button className={"bolopot"} variant="">
                                                        <a href="/profile">
                                                            <img alt="" src={prof} />
                                                        </a>
                                                    </Button>
                                                </Form>
                                                <div classname={"vtn_langs"}>
                                                    {(() => {
                                                        if (localStorage.getItem('lang') == undefined || localStorage.getItem('lang') == "" || localStorage.getItem('lang') == 'ru') {
                                                            return (

                                                                <NavDropdown title="Ru" id="basic-nav-dropdown">
                                                                    <NavDropdown.Item onClick={this.uz} >Uz</NavDropdown.Item>

                                                                </NavDropdown>



                                                            )
                                                        } else {
                                                            return (

                                                                <NavDropdown title="Uz" id="basic-nav-dropdown">
                                                                    <NavDropdown.Item onClick={this.ru} >Ru</NavDropdown.Item>

                                                                </NavDropdown>
                                                            )
                                                        }
                                                    })()}
                                                </div>

                                            </Navbar.Collapse>
                                        )
                                    }
                            })()}


                        </Navbar>
                        <div className={"btn_color_bott"}></div>

                    </div>

                </React.Fragment >
            )


        }


    }
}

export default withRouter(props => <Header {...props} />);