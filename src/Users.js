import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {withRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import openSocket from 'socket.io-client';
import {
    Button,
    FormControl,
    Form,
   
    NavItem,
    NavDropdown,
    MenuItem,
    Nav,

    Container,
    Row,
    Col, Carousel
} from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'
import './App.css'
import ScrollToBottom from 'react-scroll-to-bottom'
import logo from './images/logo.svg';
import icohome from './images/ico_home.svg';
import mol from './images/mol2.svg';
import not from './images/notife.svg';
import prof from './images/prof.svg';
import mess_ff1 from './images/mess_ff1.svg';
import mess_ff from './images/mess_ff.svg';
import bam from './images/bam.svg';
import file_scripts_kj from './images/file_scripts_kj.svg'



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
            create: {},
            language: "",
            levels: "",
            file: null,
            base64URL: "",
            
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
  
    
    
    handleToggleModal3 = () => this.setState({showModal3: !this.state.showModal3});


    handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        // alert('Отправленное имя: ' + this.state.value);
        event.preventDefault();
        const main = {"type":"chat", "chat_id":sessionStorage.getItem('ms'), "message":this.state.value}
  socket.emit('message',JSON.stringify(main))
  const messages = document.getElementById('messages');
  const shouldScroll = messages.scrollTop + messages.clientHeight == messages.scrollHeight;
  console.log(shouldScroll)
  if (!shouldScroll) {
    messages.scrollTop = messages.scrollHeight;

  }

  this.setState(prevState => {
   console.log(prevState)
   for(var i =0; i< prevState.chat.active_chats.length; i++){
if(
    prevState.chat.active_chats[i].messages.length == this.state.chat.active_chats[i].messages.length
){
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

        
        socket.on('connect', () =>{
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

            if(socket.connected == false){

                setTimeout(() => {
                    socket.connect();
                    // console.log(socket)
                  }, 1000);


//                 socket.on('message', (data) =>{
// console.log(data)
//                 })
            }
          });
        

 




        socket.on('message', (data) =>{

       
     
    
        console.log(data)
        
       
        if(data.active_chats){
            // console.log("99999999999999999+9999999999999999999999999999999999999999999")
    
            this.setState({
                chat:data,
                isLoaded: true,
             
            })
          
          
          
        }else   if(data.error == "no access"){
            socket.disconnect("disconnect", () => {
                console.log(socket.connected); // false
              });
              
              socket.on('connect', () =>{
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

send(obj){
    console.log(obj)
    sessionStorage.setItem('ms', obj.id);
    this.setState(() => ({
      isLoaded:true


    }));
}
back(){
    console.log("ffffffffff")
    sessionStorage.setItem('ms', "")
    this.setState(() => ({
       isLoaded: true


    }));
}


main(){

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
    if(imagedata.name.indexOf(".")){
     
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
        const test = {"type":"chat", "chat_id":3, "message":1111}

        const main = {"type":"chat", "message":file.name, "chat_id": sessionStorage.getItem('ms'), "file": {
            "file_type": imagedata.name.substr(imagedata.name.indexOf(".")+1),
            "file": baseURL.split(',')[1]
        }}
        socket.emit('message',JSON.stringify(main))
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

        const {isLoaded, isMylod} = this.state

        if (!isLoaded ) {
            return (
                <p>fff</p>
            )
        } else {

            return (
                <React.Fragment>

                  
                    {(() => {      

if(sessionStorage.getItem('ms') == "" || sessionStorage.getItem('ms') == undefined){
return(
    <React.Fragment>


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
                                    <p className={"name_chats_lsss"}>{data.name}</p>
                                    <p className={"last_time_chats"}>23:59</p>
                                </div>
                                <div className={"rg_chat_list"}>
                                   {console.log(data)}
                                    {(() => { 
                                        
                                        for(var i = 0; i < data.messages.length; i++){
                                            if(data.messages[i].message_create_at == data.last_message_in_chat)
                                            {
                                                return(
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
    </React.Fragment>
)
}else{
return(
    <div className={"chat_heh_top"}>

        

                
        {(() => {    
            console.log(this.state.chat)


        
            for(var l = 0; l < this.state.chat.active_chats.length; l++){

                for( var i = 0; i < this.state.chat.active_chats[l].messages.length; i++){


if(this.state.chat.active_chats[l].messages[i].chat_id == sessionStorage.getItem('ms')){
   console.log(this.state.chat.active_chats[l].messages[i])
  return(

    <ScrollToBottom className={"messsa"}>
   
      <div  id="messages"  ref={(el) => { this.messagesEnd = el; }} className={"disp_wd"}>

{this.state.chat.active_chats[l].messages.map((number) =>

<div className={"disp_wd11"}>

{(() => {    

if(number.student_id == this.state.create.profile.id || number.teacher_id == this.state.create.profile.id){

    if(number.content_url == null){
        return(
            <div className={"mes_my"}>
        
        <p className={"mes_my_p"}>{number.content}</p>
        <img alt="" className={"mess_ff"} src={mess_ff}/>
            </div>



        )
     
    }else{
        return(
            <div className={"mes_my"}>
        
        <p className={"mes_my_p"}><a href={number.content_url} download>{number.content}</a></p>
        <img alt="" className={"mess_ff"} src={mess_ff}/>
        
            </div>
        
        )
        const messages = document.getElementById('messages');
        const shouldScroll = messages.scrollTop + messages.clientHeight == messages.scrollHeight;
        console.log(shouldScroll)
        if (!shouldScroll) {
          messages.scrollTop = messages.scrollHeight;
          
        }
    }




}else{


    if(number.content_url == null){
        return(
            <div className={"mes_my_no"}>
        
        <p className={"mes_my_no_p"}>{number.content}</p>
        <img alt="" className={"mess_ff1"}  src={mess_ff1}/>
            </div>
        )
        const messages = document.getElementById('messages');
        const shouldScroll = messages.scrollTop + messages.clientHeight == messages.scrollHeight;
        console.log(shouldScroll)
        if (!shouldScroll) {
          messages.scrollTop = messages.scrollHeight;
          
        }
    }else{
        return(
            <div className={"mes_my_no"}>
        
        <p className={"mes_my_no_p"}><a href={number.content_url} download></a>{number.content}</p>
        <img alt="" className={"mess_ff1"}  src={mess_ff1}/>
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

                                                                                            <img alt="" src={file_scripts_kj}/>


                                                                                            
                                                                                        </label>
                                                                                        <input className={"hid_poop"} id="filePicker"
                                                                                               onChange={this.onImageChange}
                                                                                               style={{visibility: "hidden"}}
                                                                                               type={"file"}>

                                                                                        </input>
                                                                                        
 <form className="form_mess" onSubmit={this.handleSubmit}>
        <label>
       
          <input placeholder="Сообщение..." type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        {/* <input type="submit" value="Отправить" /> */}
      </form>
    </div>
)
}
                           })()}
                </React.Fragment>
            )
        
            const messages = document.getElementById('messages');
            messages.scrollTop = messages.scrollHeight;
        }


    }
}

export default withRouter(props => <Users {...props} />);