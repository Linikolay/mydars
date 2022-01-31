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

import seac from './images/seac.png';
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



class Headers extends Component {

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






                 
                    <div className={"wrap header_wrap mogonorick"}>
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


                          
                                            <Navbar.Collapse id="basic-navbar-nav">
                                                <Nav className="ml-auto">

                                           


                                                </Nav>



                          
                                                <div classname={"vtn_langs"}>
                                                    {(() => {
                                                        if (localStorage.getItem('lang') == undefined || localStorage.getItem('lang') == "" || localStorage.getItem('lang') == 'ru') {
                                                            return (

                                                                <NavDropdown  className={"uzinkes ki888"} title="Ru" id="basic-nav-dropdown">
                                                                    <NavDropdown.Item className={"uzinkes"} onClick={this.uz} >Uz</NavDropdown.Item>

                                                                </NavDropdown>



                                                            )
                                                        } else {
                                                            return (

                                                                <NavDropdown  className={"uzinkes ki888"} title="Uz" id="basic-nav-dropdown">
                                                                    <NavDropdown.Item className={"uzinkes"} onClick={this.ru} >Ru</NavDropdown.Item>

                                                                </NavDropdown>
                                                            )
                                                        }
                                                    })()}
                                                </div>
                                            </Navbar.Collapse>
                           


                        </Navbar>

                        <Navbar.Collapse id="basic-navbar-nav">
                                  
                                                <div classname={"vtn_langs"}>
                                                    {(() => {
                                                        if (localStorage.getItem('lang') == undefined || localStorage.getItem('lang') == "" || localStorage.getItem('lang') == 'ru') {
                                                            return (

                                                                <NavDropdown className={"uzinkes ki888"} title="Ru" id="basic-nav-dropdown">
                                                                    <NavDropdown.Item className={"uzinkes"} onClick={this.uz} >Uz</NavDropdown.Item>

                                                                </NavDropdown>



                                                            )
                                                        } else {
                                                            return (

                                                                <NavDropdown  className={"uzinkes ki888"} title="Uz" id="basic-nav-dropdown">
                                                                    <NavDropdown.Item className={"uzinkes"} onClick={this.ru} >Ru</NavDropdown.Item>

                                                                </NavDropdown>
                                                            )
                                                        }
                                                    })()}
                                                </div>

                                            </Navbar.Collapse>
                        <div className={"btn_color_bott"}></div>

                    </div>

                </React.Fragment >
            )


        }


    }
}

export default withRouter(props => <Headers {...props} />);