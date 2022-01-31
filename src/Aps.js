import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {withRouter} from "react-router-dom";
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

    Container,
    Row,
    Col, Carousel
} from 'react-bootstrap';

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

class Aps extends Component {
    state = {showModal: false,
        showModal1: false
    };

    handleToggleModal = () => this.setState({showModal: !this.state.showModal});
    handleToggleModal1 = () => this.setState({showModal1: !this.state.showModal1});
    render() {


        return (
            <div className={"wrap"}>
                <div className={"container main_container"}>
                    <div className="row row-cols-lg-12 row-cols-md-12 row-cols-12 block_main-2">
                        {this.state.showModal && <div className="modal">
                            <div className={"ext_modal"} onClick={this.handleToggleModal}>x</div>
                            <p className={"pops_top_tittle"}>Предмет</p>


                        </div>}

                        <div onClick={this.handleToggleModal}  className={"view_2main_block"}>

                            <div className={"bols_mod"}>
                                <div className={"left_bl_2"}><p className={"pclassikc pclassikc_top"}>Предмет</p>
                                    <p className={"pclassikc bot_cclassic"}>Ангийсуий язык</p></div>
                                <div className={"right_bl_2"}><img alt="" className={"im_tab_bar"} src={back_ico}/>

                                    <div className={"line_bar"}></div>
                                </div>
                            </div>
                        </div>


                        <div className={"view_2main_block"}>
                            <div className={"bols_mod"}>
                                <div className={"left_bl_2"}><p className={"pclassikc pclassikc_top"}>Стоимость</p>
                                    <p className={"pclassikc bot_cclassic"}>$5 - $35</p></div>
                                <div className={"right_bl_2"}><img alt="" className={"im_tab_bar"} src={back_ico}/>

                                    <div className={"line_bar"}></div>
                                </div>
                            </div>


                        </div>

                        <div className={"view_2main_block"}>
                            <div className={"bols_mod"}>
                                <div className={"left_bl_2"}><p className={"pclassikc pclassikc_top"}>Время</p>
                                    <p className={"pclassikc bot_cclassic"}>09:00 - 12:00</p></div>
                                <div className={"right_bl_2"}><img alt="" className={"im_tab_bar"} src={back_ico}/>

                                    <div className={"line_bar"}></div>
                                </div>
                            </div>


                        </div>


                        <div className={"view_2main_block"}>
                            <div className={"bols_mod"}>
                                <div className={"left_bl_2"}><p className={"pclassikc pclassikc_top"}>Старана
                                    преподователя</p>
                                    <p className={"pclassikc bot_cclassic"}>Любая</p></div>
                                <div className={"right_bl_2"}><img alt="" className={"im_tab_bar"} src={back_ico}/>

                                    <div className={"line_bar"}></div>
                                </div>
                            </div>
                        </div>


                        <div className={"view_2main_block"}>
                            <div className={"bols_mod"}>
                                <div className={"left_bl_2"}><p className={"pclassikc pclassikc_top"}>Направление</p>
                                    <p className={"pclassikc bot_cclassic"}>Бизнес</p></div>
                                <div className={"right_bl_2"}><img alt="" className={"im_tab_bar"} src={back_ico}/>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"container main_container"}>
                    <div className="row row-cols-lg-12 row-cols-md-12 row-cols-12 ">
                        <div className=" row-cols-lg-8 row-cols-md-12 row-cols-12 ">
                            <div className={"block_desp_moun_main"}>
                                <p className={"tittle_Main"}>
                                    Заявки по английскому языку
                                </p>
                                <p className={"tittle_Main_rep"}>
                                    87 заявок
                                </p>
                            </div>
                            <div className={"filt_main_all"}>
                                <div className={"filt_main_all1"}>

                                    <img alt="" className={"left_main_mount_all"} src={cen_icon_main}/>
                                    <p className={"left_main_mount_all"}>Показывать цену за урок</p>
                                    <img alt="" className={"left_main_mount_all img_icon_top_row_mains"} src={row_top}/>

                                </div>


                                <div className={"filt_main_all2"}>
                                    <img alt="" className={"left_main_mount_all "} src={star_filter_ico}/>
                                    <p className={"left_main_mount_all"}>Показывать цену за урок</p>
                                    <img alt="" className={"left_main_mount_all img_icon_top_row_mains"} src={row_top_down}/>


                                </div>
                            </div>
                        </div>


                    </div>
                    <div className="row row-cols-lg-12 row-cols-md-12 row-cols-12 ">
                        <div className=" col-lg-9 col-md-4 col-sm-6 col-6 bg_all_white ">
                            <div className={"desck_post row heover_mylight"}>
                                <div className={"rep_cart  col-lg-2 col-md-4 col-sm-6 col-6 "}>
                                    <div className={"left_block_main_teacher"}>
                                        <img alt="" className={"prof_ics"} src={profile_icon}>

                                        </img>


                                    </div>




                                </div>
                                <div className={"rep_cart1 col-lg-9 col-md-4 col-sm-6 col-6 "}>
                                    <div className={"lopon"}>
                                        <p className={"name_teachers_main"}>Audrey Wilson</p> <img alt=""
                                        className={"check_img_teacher_main"} src={checked_profile_ico}/>
                                        <p className={"cents_main_titile"}>110.000/урок</p>
                                    </div>

                                    <div className={"lopon"}>
                                        <div className={"class_teach_seconds_ttil"}>
                                            <p className={"tittle_top_main_detail_moon"}>Родной язык</p>
                                            <p className={"class_teach_seconds_ttil_bots"}>Португальский</p>
                                        </div>





                                    </div>

                                    <div className={"line_child"}>
                                        <div className={"line_new_main"}></div>
                                    </div>
                                    <p className={"description_text_main_card"}>Do you need to learn English? Today this
                                        is key to success. Maybe it's just
                                        something that you've always wanted to be able to do . . . for your job, a
                                        promotion, work . . . I am a Native English teacher from New York, offering
                                        Classes with a high affinity for the student's specific needs.</p>
                                    <div className={"btn_group_card"}>


                                        <div className={"trial_btns trial_btns003"}>
                                            <img alt="" className={"trial_btns002 "} src={ico_msg}/>
                                            <p className={"trial_btns001 trial_btns004"}>Написать</p>


                                        </div>



                                    </div>


                                </div>
                                <div className={"line_child top_line_mgs"}>
                                    <div className={"line_new_main "}></div>
                                </div>
                            </div>
                            <div className={"desck_post row heover_mylight"}>
                                <div className={"rep_cart  col-lg-2 col-md-4 col-sm-6 col-6 "}>
                                    <div className={"left_block_main_teacher"}>
                                        <img alt="" className={"prof_ics"} src={profile_icon}>

                                        </img>


                                    </div>




                                </div>
                                <div className={"rep_cart1 col-lg-9 col-md-4 col-sm-6 col-6 "}>
                                    <div className={"lopon"}>
                                        <p className={"name_teachers_main"}>Audrey Wilson</p> <img alt=""
                                        className={"check_img_teacher_main"} src={checked_profile_ico}/>
                                        <p className={"cents_main_titile"}>110.000/урок</p>
                                    </div>

                                    <div className={"lopon"}>
                                        <div className={"class_teach_seconds_ttil"}>
                                            <p className={"tittle_top_main_detail_moon"}>Родной язык</p>
                                            <p className={"class_teach_seconds_ttil_bots"}>Португальский</p>
                                        </div>





                                    </div>

                                    <div className={"line_child"}>
                                        <div className={"line_new_main"}></div>
                                    </div>
                                    <p className={"description_text_main_card"}>Do you need to learn English? Today this
                                        is key to success. Maybe it's just
                                        something that you've always wanted to be able to do . . . for your job, a
                                        promotion, work . . . I am a Native English teacher from New York, offering
                                        Classes with a high affinity for the student's specific needs.</p>
                                    <div className={"btn_group_card"}>


                                        <div className={"trial_btns trial_btns003"}>
                                            <img alt="" className={"trial_btns002 "} src={ico_msg}/>
                                            <p className={"trial_btns001 trial_btns004"}>Написать</p>


                                        </div>



                                    </div>


                                </div>
                                <div className={"line_child top_line_mgs"}>
                                    <div className={"line_new_main "}></div>
                                </div>
                            </div>




                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-6 bg_all_white">
                            <div className={"block_right_bg_white_type"}>

                                <div className={""}>
                                    <div className={"class_bords_main_right_type"}>
                                        <p className={"titl_right_main_blocks"}>Для вас</p>
                                        <img alt="" className={"ico_quest_image_main"} src={question_ico}/>

                                    </div>
                                    <p>Открытые уроки преподавателей, которые следует посетить</p>

                                    <div className="line_child">
                                        <div className="line_new_main"></div>
                                    </div>
                                </div>
                                <div className={""}>
                                    <div className={"row no_padding"}>
                                        <div className={"col-lg-2 col-md-4 col-sm-6 col-6"}>
                                            <img alt="" src={avatar_mini}/>
                                        </div>
                                        <div className={"col-lg-10 col-md-4 col-sm-6 col-6"}>
                                            <p className={"no_margin dats_main_trail_right_block0"}>12 апр, 15:00</p>
                                            <p className={"no_margin dats_main_trail_right_block1"}>Английский</p>
                                            <p className={"no_margin dats_main_trail_right_block2"}>Do you need to learn
                                                English? Today this is key to success.</p>

                                        </div>
                                        <div className="line_child pads">
                                            <div className="line_new_main"></div>
                                        </div>
                                    </div>

                                </div>
                                <div className={""}>
                                    <div className={"row no_padding"}>
                                        <div className={"col-lg-2 col-md-4 col-sm-6 col-6"}>
                                            <img alt="" src={avatar_mini}/>
                                        </div>
                                        <div className={"col-lg-10 col-md-4 col-sm-6 col-6"}>
                                            <p className={"no_margin dats_main_trail_right_block0"}>12 апр, 15:00</p>
                                            <p className={"no_margin dats_main_trail_right_block1"}>Английский</p>
                                            <p className={"no_margin dats_main_trail_right_block2"}>Do you need to learn
                                                English? Today this is key to success.</p>

                                        </div>
                                        <div className="line_child pads">
                                            <div className="line_new_main"></div>
                                        </div>
                                    </div>

                                </div>
                                <div className={""}>
                                    <div className={"row no_padding"}>
                                        <div className={"col-lg-2 col-md-4 col-sm-6 col-6"}>
                                            <img alt="" src={avatar_mini}/>
                                        </div>
                                        <div className={"col-lg-10 col-md-4 col-sm-6 col-6"}>
                                            <p className={"no_margin dats_main_trail_right_block0"}>12 апр, 15:00</p>
                                            <p className={"no_margin dats_main_trail_right_block1"}>Английский</p>
                                            <p className={"no_margin dats_main_trail_right_block2"}>Do you need to learn
                                                English? Today this is key to success.</p>

                                        </div>
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

export default Aps;