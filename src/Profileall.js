/**
 * Created by Nikolay on 17.01.2021.
 */
import React, {Component} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import {

    MenuItem,

} from 'react-bootstrap';

import './App.css'

class Auth extends Component {


    constructor() {
        super()
        this.state = {

            radio: true,
            radio1: true,
            of: false,
            of1: false,
            pass: "",
            email: "",
            phone: "",
            number: "",
            input: {},
            errors: {}
        }


    }




    render() {

    }
}


export default Auth;