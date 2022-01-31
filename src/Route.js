import React, { Component } from 'react';
import logo from './logo.svg';
// import './App.css';

import { Link } from 'react-router-dom';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header'
import Footer from './Footer'
import MainPAge from './MainPage'
import Gconf from './Gconf'
import TeachPage from './TeachPage'
import App from './App'
import View from './View'
import Profile from './Profile'
import Aps from './Aps'
import Auth from './Auth'
import Reg from './Reg'
import Payment from './Payment'
import Newtime from './Newtime'
import Groups from './Groups'
import Succ from './Succ'
import Conf from './Conf'
import Pack from './Pack'
import Users from './Users'
import poer from './images/poer.jpg'
import Maio from './Maio'
import Mains from './Mains'
import Newa from './Newa'
import Newas from './Newas'
import Headers from './Headers'
import Paygroup from './Paygroup'
import Footerm from './Footerm'

import Authp from './Authp'
import { createBrowserHistory } from 'history';

import "aos/dist/aos.css";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Fr1 from './Fr1'


import Fr2 from './Fr2'


import Fr3 from './Fr3'



import Fr4 from './Fr4'

import { Helmet } from "react-helmet";
import Fr5 from './Fr5'

import Rend from './Rend';
import Reset from './Reset';

class Inmy extends Component {

    constructor(props) {
        super()
        this.state = {

            isLoad: false,
            isHeader: false,
            showModal: true,
            isBody: false,
            width: window.innerWidth,
            height: window.innerWidth,
        }

    }
    updateDimensions = () => {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    };

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
    }

    componentDidMount() {
        window.addEventListener('resize', this.updateDimensions);
        console.log(this.state.wd)
        const self = this; //  this should not be double quoted;
        window.addEventListener('load', function () {
            self.setState({
                isLoad: true,
                isHeader: true,
            })

        })


    }
    handleToggleModal = () => this.setState({ showModal: !this.state.showModal });
    componentDidUpdate(prevProps, prevState) {

        // if (prevState.pokemons !== this.state.pokemons) {
        //   console.log('pokemons state has changed.')
        // }
        // if (prevState.isBody == this.state.isBody) {
        //     this.setState({
        //         isBody: true
        //     })
        // }
        console.log(prevState.isBody)
        console.log(this.state.isBody)
        // if(prevState.isLoad == this.state.isLoad){
        //     this.setState({
        //         isHeader: true
        //     })
        // }else 

    }

    render() {

        console.log(this.state.width)


        const { isLoad, isHeader } = this.state
        if (!isLoad || !isHeader) {
            return (
                <p></p>
            )
        } else {


            return(
                
                <Router>
 <Helmet>

 <meta name="viewport" content="width=1024"></meta>
</Helmet>
                <div className="page-wrap">
                    <div className="main-body">


                        {(() => {

                            if (this.state.isHeader == true) {

                                return (

                                    <div>
                                        <Header />
                                        {(() => {
                                            if (this.state.isBody == true && this.state.isHeader == true) {

                                            } else {
                                                setTimeout(function () { //Start the timer
                                                    this.setState({ isBody: true }) //After 1 second, set render to true
                                                }.bind(this), 1500)

                                            }
                                        })()}
                                    </div>
                                )

                            } else {
                                return (
                                    <p></p>
                                )
                            }

                        })()}



                        {(() => {

                            if (this.state.isBody == true) {
                               


                                return (
                                    <div>
                                        
                                    {(() => {
                                        if (this.state.width < 1200) {

                                    return(
                                        <div>
                                        
 
                                        {this.state.showModal && <div onClick={this.handleToggleModal} className="baccccccc">
 
 
                                                             </div>
 
                                                             }
 
                                                             {this.state.showModal && <div className="modal main_moodddd firstonepuip">
                                                                                                 <Link className={"ext_modal"} onClick={this.handleToggleModal}>x</Link>
                                                             <img alt="" src={poer}/>
                                                                                                 <div></div>
                                                             </div>
                                                             }
 
                                        </div>
                                     )
                                 }else{
                                     
                                 }
                                })()}
                                        <div className={"min_hghg"}>


                                            <Switch>

                                                {(() => {

                                                    if (localStorage.getItem('token')) {
                                                        if (localStorage.getItem('token').length > 0) {
                                                            return (
                                                                <Route exact path="/" component={MainPAge} />
                                                            )
                                                        }
                                                    } else {
                                                        if (this.state.width < 1200) {
                                                            return (
                                                                <Route exact path="/" component={MainPAge} />
                                                            )
                                                        }else{
                                                            return (
                                                                <Route exact path="/" component={Mains} />
                                                            )
                                                        }
                                                        
                                                    }

                                                })()}
                                                <Route exact path="/room/" component={App} />
                                                <Route exact path="/" component={MainPAge} />
                                                <Route exact path="/teachercreate/" component={TeachPage} />

                                                <Route exact path="/newa/" component={Newa} />
                                                <Route exact path="/profile/" component={Profile} />
                                                <Route exact path="/lesson/" component={Profile} />
                                                <Route exact path="/obzor/" component={Profile} />
                                                <Route exact path="/group/" component={Profile} />
                                                <Route exact path="/about/" component={Profile} />
                                                <Route exact path="/reset/" component={Reset} />
                                                <Route exact path="/view/:id" component={View} />
                                                <Route exact path="/Aps/" component={Aps} />
                                                <Route exact path="/rend/:id/:url" component={Rend} />
                                                <Route exact path="/newas/" component={Newas} />
                                                <Route exact path="/payment/" component={Payment} />
                                                <Route exact path="/auth/" component={Auth} />
                                                <Route exact path="/authp/" component={Authp} />
                                                <Route exact path="/reg/" component={Reg} />
                                                <Route exact path="/groups/:id/" component={Groups} />
                                                <Route exact path="/users/" component={Profile} />
                                                <Route exact path="/paygroup/:id/" component={Paygroup} />
                                                
                                                <Route exact path="/pack/:id/" component={Pack} />
                                                <Route exact path="/conference/:url/:id" component={Conf} />
                                                <Route exact path="/gconf/:gr/:te/:le/" component={Gconf} />
                                                <Route exact path="/newtime/:id/:url/" component={Newtime} />
                                                <Route exact path="/payment/?order_id=:url" component={Succ} />
                                                <Route exact path="/fr1" component={Fr1} />
                                                <Route exact path="/fr2" component={Fr2} />
                                                <Route exact path="/fr3" component={Fr3} />

                                                <Route exact path="/fr4" component={Fr4} />

                                                <Route exact path="/fr5" component={Fr5} />
                                            </Switch>
                                        </div>
                                        {(() => {
                                            if (localStorage.getItem('token')) {
                                                if (localStorage.getItem('token').length > 0) {
                                                    return (
                                                        <Footer />
                                                    )
                                                }
                                            } else {
                                                return (
                                                    <Footerm />
                                                )
                                            }

                                        })()}


                                    </div>
                                )
                            } else {
                                return (
                                    <p></p>
                                )
                            }
                        })()}


                    </div>
                </div>

            </Router>
            )
            if (this.state.width < 1200) {
                
/*
                return (





                    <Router>
                        <Helmet>


                        </Helmet>
                        <div className="page-wrap">
                            <div className="main-body">
                                <Headers />


                                <div>
                                    <div className={"min_hghg"}>


                                        <Switch>

                                            <Route exact path="*" component={Maio} />

                                        </Switch>
                                    </div>

                                </div>




                            </div>
                        </div>

                    </Router>

                );
                */
            } else {
               





                
            }

        }


    }

}

export default Inmy;
