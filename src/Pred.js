import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import {

    MenuItem,

} from 'react-bootstrap';

import './App.css'

import qus from './images/qus.svg'
import reg_check from './images/reg_check.svg'
import reg_uncheck from './images/reg_uncheck.svg'
import bx_chevron_right from './images/bx-chevron-right.svg'
import mini from "./images/mini.svg"
import pl_white from "./images/pl_white.svg"
import next from "./images/next1.svg"
import {Editor} from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import {EditorState, convertToRaw} from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css'; // ES6
// import 'react-widgets/dist/css/react-widgets.css';

import CreatableSelect from 'react-select/creatable';

class Pred extends Component {
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
            lesson_direction_list: [{lesson_direction_list: []}],
            shareholders: [{
                lesson_description: '',
                lesson_type_id: "",
                amount: "",
                duration: "",
                showModal: false,
                lesson_direction_list: []
            }],
            lgstate: "",
            contstate: "",
            monst: [{language_id: "111", level: ""}],
            phone: "",
            sum: "",
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
            showModal: false,
            timers: "",
            predest:"",
            of: false,
            editorState: EditorState.createEmpty(),
            theme: 'snow',
            main: "",
            opt: [],
            reg_page: "",
            test: [],

        }
        this.handleChangeed = this.handleChangeed.bind(this)
        this.handleChange = this.handleChange.bind(this);
        this.handleemailChange = this.handleemailChange.bind(this);
        this.handlephoneChange = this.handlephoneChange.bind(this);
        this.handleengChange = this.handleengChange.bind(this);
        this.onImageChange = this.onImageChange.bind(this);
        this.handleChangecn = this.handleChangecn.bind(this);
        this.handleChangeln = this.handleChangeln.bind(this);
        this.back = this.back.bind(this);
        this.handlepassChange = this.handlepassChange.bind(this);
        this.handlepass1Change = this.handlepass1Change.bind(this);

        this.handleradioChange = this.handleradioChange.bind(this);
        this.handleradio1Change = this.handleradio1Change.bind(this);
        this.handler = this.handler.bind(this);


        this.handleChange1 = this.handleChange1.bind(this);

        this.handleChange2 = this.handleChange2.bind(this);
        this.handleChangesel = this.handleChangesel.bind(this);

        this.handleChangeed1 = this.handleChangeed1.bind(this)


    }




    back(){
        fetch('https://api.mydars.uz/api/registration/change_reg_page/', {
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

                "reg_page": this.state.reg_page - 1,
             
            })

        })


            .then(res => res.json())

            .then((data) => {
                    console.log(data)
                    // this.props.mainPage.changeUnit(3)
                if(data.error == 0){
                  
                    window.location.reload();

                }


                }
            )
    }







    handleAddShareholder = () => {
        this.setState({
            shareholders: this.state.shareholders.concat([{
                lesson_description: '',
                lesson_type_id: "",
                amount: "",
                duration: "",
                showModal: false,
                lesson_direction_list: []
            }])
        });


        this.setState({
            lesson_direction_list: this.state.lesson_direction_list.concat([{lesson_direction_list: []}])
        });
    }


    handleChangeed1 = e => {

    }
    handleChangesel = e => {

        console.log(e)
    }

    handleemailChange(event) {
//         console.log(event.target.value)
// console.log(event.target.name)
this.setState({
    sum: event.target.value
})
        const {shareholders} = this.state

        const clonePhoneNumbers = [...shareholders];


        const contact = clonePhoneNumbers[event.target.name]
        console.log(contact)
        if (contact) {
            contact.amount = Number(event.target.value)

        }

        this.setState({
            main: clonePhoneNumbers,

        })


    }

    checkDropdownChoice = (newValue: any, actionMeta: any) => {
        // console.group('Value Changed');
        // console.log(newValue);


        const {shareholders} = this.state

        const clonePhoneNumbers = [...shareholders];

        const contact = shareholders[newValue[0].idx]
        if (contact) {
            contact.lesson_direction_list = newValue
        }
        this.setState({
            main: clonePhoneNumbers,

        })
        console.log(clonePhoneNumbers)
        // console.log(`action: ${actionMeta.action}`);
        console.groupEnd();
    };


    handleChangeln = e => {
        let obj = JSON.parse(e.target.value);
        console.log(obj)
        // console.log(e.target)
this.setState({
    timers: obj.min
})

        const {shareholders} = this.state

        const clonePhoneNumbers = [...shareholders];

        // console.log(tags)
        // console.log(html)
        console.log(clonePhoneNumbers)

        const contact = clonePhoneNumbers[obj.id]
        if (contact) {
            contact.duration = obj.min

        }

        this.setState({
            main: clonePhoneNumbers,

        })


    }


    handleChangecn = e => {
        let obj = JSON.parse(e.target.value);
        console.log(obj)
        // console.log(e.target)
        this.setState({
            predest: obj.id
        })


        const {shareholders} = this.state

        const clonePhoneNumbers = [...shareholders];

        // console.log(tags)
        // console.log(html)


        const contact = clonePhoneNumbers[obj.idx]
        if (contact) {
            contact.lesson_type_id = obj.id

        }

        this.setState({
            main: clonePhoneNumbers,

        })


    }

    handleChangeed = tags => (html) => {

        const {shareholders} = this.state

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
    saveMobile1 = obj => {
        console.log(obj)

        this.setState({
            namebirth: obj.value
        })
    }

    handleToggleModal = () => this.setState({showModal: !this.state.showModal});

    onEditorStateChange: Function = (editorState) => {
        this.setState({
            editorState,
            // txtmain: draftToHtml(convertToRaw(editorState.getCurrentContent()))
        });
        // console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())))
    };

    handleChange1(event) {
        // console.log(event.target.value)
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

    handler = (e) => {
        const {target} = e;
        const value = target.type == 'checkbox' ? target.checked : target.value;
        const {name} = target;
        console.log(value)
        if (value == false) {
            this.setState({
                of: false
            })
        } else {
            this.setState({
                of: true
            })
        }
    };


    handleradioChange(event) {
        // console.log(event.target.value)
        this.setState({
            radio: true
        })
    }

    handleradio1Change(event) {
        // console.log(event.target.value)
        this.setState({
            radio: false
        })
    }

    handlepassChange(event) {
        // console.log(event.target.value)
        this.setState({
            pass: event.target.value
        })
    }


    handlepass1Change(event) {
        // console.log(event.target.value)
        this.setState({
            pass1: event.target.value
        })
    }


    onImageChange = e => {
        const data = new FormData();
        const imagedata = e.target.files[0];
        data.append('myfile', imagedata);
        console.log(data)

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
                    this.setState({
                        avatar: data.avatar,
                        isLoaded: true
                    })
                    console.log(data)

                }
            )

    };

    handleengChange(event) {
        console.log(event.target.value)
        this.setState({
            code: event.target.value
        })

    }

    handlephoneChange(event) {
        // console.log(event.target.value)
        this.setState({
            phone: event.target.value
        })

    }

    handleChange = e => {
        // let obj = JSON.parse(e.target.id);
        console.log(e)
    }


    saveMobile0 = obj => {
        //console.log(obj)
        const main = {"lessons_list": this.state.main, "reg_page": 5}
        console.log({"lessons_list": this.state.main})


        var newObj = {};

        Object.assign(newObj, this.state.main)

        const lop = {
            "list_id": newObj
        }

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

                "lessons_list": this.state.main,
                "reg_page": 6


            })



            // body:main

        })


            .then(res => res.json())

            .then((data) => {
                    console.log(data)
                    this.props.mainPage.changeUnit(6)

                }
            )


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
    lang:data.translates,
    langLoad: true,
})

            }
        )

        window.scrollTo(0, 0);




        fetch('https://api.mydars.uz/api/registration/', {

            headers: {
                // 'auth': 'ef899a6d-29d6-4130-8b59-3d95dfbcc9bd',
                'lang': localStorage.getItem('lang'),
                'Content-Type': 'application/json',
                'auth': "ef899a6d-29d6-4130-8b59-3d95dfbcc9bd",
                // 'lang': "uz"
                'token': localStorage.getItem('token')
            },
        })


            .then(res => res.json())

            .then((data) => {
                    this.setState({
                        create: data,
                        isLoaded: true,
                        language: data.data.languages.available_languages,
                        levels: data.data.languages.levels,
                        opt: data.data.lesson_direction,
                      reg_page: data.profile.reg_page

                    });


                    console.log(data)
                }
            )
    }


    saveMobile2 = obj => {


        console.log(obj.index)
        const {shareholders} = this.state

        const clonePhoneNumbers = [...shareholders];

        const contact = clonePhoneNumbers[obj.idx]

        const contact2 = clonePhoneNumbers[obj.idx]

        if (contact) {
            contact.language_id = obj.id
        }

        console.log(contact2)
        if (contact2) {
            clonePhoneNumbers.push(
                {
                    title: obj.value
                }
            )

        }
        this.setState(() => ({
            shareholders: clonePhoneNumbers


        }));
    }

    saveMobile3 = obj => {
        console.log(obj)


        const {shareholders} = this.state

        const clonePhoneNumbers = [...shareholders];

        const contact = clonePhoneNumbers[obj.idx]
        if (contact) {
            contact.level = obj.id
        }
        console.log(contact)

    }

    transeLate() {

        // {"name":"1TEST TEACHER3", "birth_country_id":2, "email":"tenr@ya.ri", "language":
        //     [{"language_id": 1, "level": 1}, {"language_id": 5, "level": 1}]
        // }

    }


    handleRemoveShareholder = (idx) => () => {
        this.setState({shareholders: this.state.shareholders.filter((s, sidx) => idx !== sidx)});
    }

    render() {
        console.log(this.state.lesson_direction_list)

        const customStyles = {
            option: (provided, state) => ({
                ...provided,
                borderBottom: '1px dotted pink',
                color: state.isSelected ? '#0D0C21' : '#9E9EA7',
                padding: 10,
            }),
            multiValue: () => ({
                top: -1000
            }),
            control: () => ({
                // none of react-select's styles are passed to <Control />
                width: 0,
                height: 0,
                top: -1000
            }),
            singleValue: (provided, state) => {
                const opacity = state.isDisabled ? 0.5 : 1;
                const transition = 'opacity 300ms';

                return {...provided, opacity, transition};
            }
        }


        const options = [
            {label: "All", value: 0, "name": "fdsfsdf"},
            {label: "provider 1", value: 1},
            {label: "provider 1", value: 2},
            {label: "provider 1", value: 3},
            {label: "provider 1", value: 4},
            {label: "Thing 2", value: 5},
            {label: "Thing 2", value: 6}
        ];

        console.log(this.state.create)
        const {create, isLoaded, editorState, langLoad} = this.state;
        console.log(this.state.main)
        if (!isLoaded || !langLoad) {
            return <p></p>
        } else {
            return (
                <div className={"wrap"}>


                    <div className={"top_page_regist"}>
                        <img alt="" src={mini}/> {this.state.lang.numberphonesreg.text} <img alt="" src={bx_chevron_right}/>
                        <img alt="" src={mini}/>{this.state.lang.lichniydamomn.text}   <img alt="" src={bx_chevron_right}/>

                        <img alt="" src={mini}/> {this.state.lang.Rezumi.text} <img alt="" src={bx_chevron_right}/>

                        <img alt="" src={reg_check}/> {this.state.lang.Descriptionmainfull.text} <img alt="" src={bx_chevron_right}/>

                        <img alt="" src={reg_uncheck}/> {this.state.lang.myVideoRolik.text} <img alt="" src={bx_chevron_right}/>
                        <img alt="" src={reg_uncheck}/> {this.state.lang.Vereficationname.text}
                    </div>
                    <div className={"container "}>
                        <div className={"row"}>
                            <div className={" col-lg-12 col-md-4 col-sm-6 col-6 "}>
                                <p className={"tittle_top_page_regst desc_reg_page_09 "}>{this.state.lang.PredmetPredomoban.text}</p>
                                <p>{this.state.lang.UKAjitechtoprodayot.text}</p>
                            </div>
                        </div>
                    </div>

                    {this.state.shareholders.map((shareholder, idx) => (


                        <div className={"container  cs_cont_main_unkn"}>

                            {this.state.shareholders[idx].showModal && <div className="myclass">

                                <div className={"bg_exit"} onClick={this.handleToggleModal}></div>


                            </div>}

                            {this.state.shareholders[idx].showModal && <div className="modal">
                                <div className={"ext_modal"} onClick={this.handleToggleModal}>x</div>
                                <p className={"pops_top_tittle"}>{this.state.lang.predmet.text}</p>

                                
                            </div>}


                            <div className={"row"}>
                                <div className={" col-lg-12 col-md-4 col-sm-6 col-6 "}>

                                    <div className={"first_reg col-lg-12 col-md-4 col-sm-6 col-6 "}>


                                        <div className={"row"}>
                                            <div className={"first_reg col-lg-12 col-md-4 col-sm-6 col-6 "}>
                                                <div className={"container"}>

                                                    <p className={"main_sql_change"}>{this.state.lang.PREDMET.text}</p>


                                                    <div className="row">
                                                        <div className={"first_reg col-lg-6 col-md-4 col-sm-6 col-6 "}>


                                                            <select className={"sects_1111"}
                                                                    onChange={this.handleChangecn}>
                                                                <option


                                                                >

{this.state.lang.UKAJOFf0980.text}
                                                                </option>
                                                                {
                                                                    this.state.create.data.available_lessons.map((item, index) =>

                                                                        <option
                                                                            value={JSON.stringify({
                                                                                "id": item.id,
                                                                                "name": item.type_name,
                                                                                "idx": idx
                                                                            })}


                                                                        >

                                                                            {item.type_name}
                                                                        </option>
                                                                    )
                                                                }


                                                            </select>


                                                        </div>
                                                        <div className={"first_reg col-lg-5 col-md-4 col-sm-6 col-6 "}>

                                                            <p className={"undef_txt_right"}>{this.state.lang.POPOdjeNOMoook.text} </p>


                                                        </div>

                                                    </div>


                                                </div>
                                            </div>
                                        </div>
                                        <div className={"register_super_line"}></div>


                                        <div className="row max_containert">
                                            <div className="container">
                                            <p className={"main_sql_change"}>{this.state.lang.OPISKRS213.text}</p>

                                                <ReactQuill
                                                    theme={this.state.theme}
                                                    onChange={this.handleChangeed(idx)}
                                                    name="fdsfsdfdsfd"

                                                    modules={Editor.modules}
                                                    formats={Editor.formats}
                                                    bounds={'.app'}
                                                    placeholder="Например: «Hey guys! I'm D.J. I'm an outgoing person with many different interests and hobbies, and enjoy discussing a variety of topics with my students, and see every conversation as an opportunity to learn something new.»"
                                                />
                                            </div>
                                        </div>

                                        <div className={"container  cs_cont_main_unkn"}>
                                            <div className={"row"}>
                                                <div className={" col-lg-12 col-md-4 col-sm-6 col-6 "}>

                                                    <p className={"main_sql_change"}>{this.state.lang.KOROTKOEOPISANIME.text} <img alt="" src={qus}/>


                                                    </p>

                                                </div>
                                            </div>
                                        </div>


                                        <div className={"register_super_line"}></div>


                                        <div className={"row"}>
                                            <div
                                                className={"first_reg first_reg_90098 col-lg-12 col-md-4 col-sm-6 col-6 "}>
                                                <div className={"container"}>


                                                    <div className="row">
                                                        <div className={"first_reg col-lg-4 col-md-4 col-sm-6 col-6 "}>
                                                            <p className={"main_sql_change"}>{this.state.lang.DLITELNOST1UROKS.text}
                                                            </p>
                                                            <select className={"sects_1111"}
                                                                    onChange={this.handleChangeln}>
                                                                <option


                                                                >

{this.state.lang.UKAZ1FMMMMM22.text}
                                                                </option>
                                                             

                                                                <option
                                                                    value={JSON.stringify({
                                                                        "min": 60,
                                                                        "id": idx
                                                                    })}


                                                                >

{this.state.lang.minutes60.text}   
                                                                </option>
                                                          
                                                                <option
                                                                    value={JSON.stringify({
                                                                        "min": 90,
                                                                        "id": idx
                                                                    })}


                                                                >

{this.state.lang.chasik30minutese.text}
                                                                </option>

                                                                <option
                                                                    value={JSON.stringify({
                                                                        "min": 120,
                                                                        "id": idx
                                                                    })}


                                                                >

{this.state.lang.chasa2.text}    
                                                                </option>


                                                            </select>


                                                        </div>

                                                        <div className={"first_reg col-lg-3 col-md-4 col-sm-6 col-6 "}>
                                                            <p className={"main_sql_change"}>{this.state.lang.STOIM1UROKESS.text}
                                                            
                                                            </p>
                                                            <input pattern='[0-9]{0,5}' name={idx}
                                                                   onChange={this.handleemailChange}
                                                                   placeholder="0.00 сум" type="number"
                                                                   
                                                                   className="form-control email_input"/>

                                                        </div>

                                                        <div
                                                            className={"first_reg  first_reg_1212 col-lg-4 col-md-4 col-sm-6 col-6 "}>
                                                            <p></p>
                                                            <p className={"undef_txt_right"}>{this.state.lang.PODJE1UROKIREDAKTIROVAt.text}</p>


                                                        </div>

                                                    </div>


                                                </div>
                                            </div>
                                        </div>

                                   


                                    </div>

                                </div>

                            </div>
                        </div>
                    ))}


                    {/* <div className={"container "}>
                        <div className={"row"}>
                            <div className={" col-lg-12 col-md-4 col-sm-6 col-6 "}>
                                <div className={"polloo"}>
                                    <div type="button" onClick={this.handleAddShareholder}
                                         className="add_ts dedect_btn_mol">
                                        <img alt="" className={"plu_cret pl_1111"} src={pl_white}/>
                                        {this.state.lang.ADDPREDMETEAK.text}    
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div> */}

<div className={"container "}>
                                                    <div className={"row"}>
                                                        <div className={" col-lg-12 col-md-4 col-sm-6 col-6 "}>
                                                            <div className={"polloo"}>
                                                              
<div className={"grregister_buts"}>

<Link onClick={() =>
       this.back({})
   } className={"next_all no_hover back_btuuomhovers"}>
     Назад

   </Link>
 
{(() => {
                                            if (this.state.timers == "" || this.state.predest == "" || this.state.sum == "" ||  this.state.shareholders[0].language_id == "" || this.state.shareholders[0].level == "") {
                                                return (<p></p>)
                                            } else {
                                                return (
                                                    <Link onClick={() =>
                                                        this.saveMobile0({})
                                                    } className={"no_hover next_cs next_all"}>
                                                      {this.state.lang.NEXTTONEXT.text}  
                                                        <img alt="" src={next}/>
                                                    </Link>
                                           
                            
                                                 
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
Editor.modules = {
    toolbar: [
        [{'header': '1'}, {'header': '2'}, {'font': []}],
        [{size: []}],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{'list': 'ordered'}, {'list': 'bullet'},
            {'indent': '-1'}, {'indent': '+1'}],
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

/*
 * PropType validation
 */

export default Pred;