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
    Dropdown,
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

import back_ico1 from './images/back_ico.svg'
import ent from './images/ent.svg'

import {
    ReactiveBase,
    RangeSlider,
    SelectedFilters,
    ResultList,
    MultiRange,
    DynamicRangeSlider
} from "@appbaseio/reactivesearch";

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

import {NotificationContainer, NotificationManager} from 'react-notifications';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import moment from 'moment'
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css'
import next from "./images/next1.svg";
import openSocket from 'socket.io-client';



class Fr3 extends Component {

render(){
    return(
        <div className={"moooooooopppp"}>
            Этический Кодекс 
для преподавателей на онлайн-платформе «My Dars».

Настоящий Этический Кодекс (далее по тексту - Кодекс) определяет взаимоотношения Сторон на онлайн-платформе «My Dars», а именно Преподавателей и Пользователей и создан для того, чтобы Пользователи могли повышать свой уровень знаний в комфортных и безопасных для них условиях, а Преподавателем в свою очередь было удобно работать на онлайн-платформе «My Dars».
Настоящий Кодекс определяет основные нормы профессиональной этики, которые:
- улучшают отношения между Преподавателями и Пользователями;
- защищают их человеческую ценность и достоинство обеих Сторон;
- поддерживают качество профессиональной деятельности Преподавателей.
- создают культуру образовательной платформы, основанную на доверии, ответственности, справедливости и безопасности.

ОСНОВНЫЕ НОРМЫ
1. Личность Преподавателя.
1.1. Профессиональная этика Преподавателя требует призвания, преданности своей работе и чувства ответственности при исполнении своих обязанностей.
1.2. Для Преподавателя необходимо постоянное саморазвитие. Он занимается своим образованием, повышением квалификации и поиском наилучших методов работы.
2. Ответственность.
2.1. Преподаватель несет ответственность за качество и результаты доверенной ему Преподавательской работы – образования Пользователей. 
2.2. Преподаватель несет ответственность за интеллектуальное, эмоциональное развитие Пользователей - клиентов онлайн-платформы «My Dars» в процессе проведения Занятий и коммуникации с Пользователями.
2.3. Преподаватель несет ответственность за сохранность психологического состояния Пользователя, а также его безопасность во время занятия. В случае обнаружения возможной угрозы, должен незамедлительно сообщить в компетентные органы и постараться оказать помощь Пользователю.
2.4. Преподаватель следит за своей пунктуальностью и старается всегда начинать урок вовремя.
2.5. Урок, ранее запланированный с Пользователем, находится в приоритете на платформе «My Dars», следовательно, переносить, опаздывать, более того отменять урок по инициативе Преподавателя крайне нежелательно, такие действия будут понижать рейтинг Преподавателя. Однако, такие действия возможны и допустимы в экстренных случаях и по инициативе Пользователя, без негативного влияния на рейтинг Преподавателя.
2.6. Преподаватель не имеет право договариваться об оказании своих услуг с Пользователями, которых  он нашёл благодаря Платформе My Dars, в обход платформы, принимать оплату от Пользователей и проводить занятия с Пользователями вне платформы, это является грубым нарушением настоящего Кодекса и Договора заключенного с Преподавателем, и является основанием для одностороннего расторжению с таким Преподавателем всех взаимоотношений и блокированию его аккаунта на платформе «My Dars». Если предложение об уроке вне платформы поступило от Пользователя, Преподаватель обязан ему отказать и сообщить об этом в службу поддержки по следующему адресу support@mydars.uz.
3. Взаимоотношения с другими лицами.
Общение Преподавателя с Пользователями.
3.1. Преподаватель сам выбирает подходящий стиль общения с учениками, основанный на взаимном уважении, этике и программе обучения.
3.2. Преподаватель постоянно заботится о культуре своей речи и способе (методике) общения.
3.3. Преподавателю запрещается распространять третьим лицам информацию об Пользователе (личные данные и другие персональные сведения, которые ему стали доступны в процессе занятия и коммуникации с Пользователем)
3.4. Преподаватель не может злоупотребляет своим служебным положением. Он не может использовать Пользователей, требовать от них о каких-либо услуг, одолжений, поручать какие-либо задания, не связанные с обучением.
3.5. Преподаватель не имеет права навязывать Пользователям свои религиозные, политические, моральные и иные взгляды.
3.6. Преподаватель не имеет права требовать от своего Пользователя вознаграждения за свою работу, помимо той которая указана в профиле Преподавателя и предусмотрена в рамках платформы «My Dars».
3.7. Преподаватель не имеет права повышать голос, оскорблять, принижать самооценку Пользователя во время Занятия и/или при общении.
Отношения с родителями (опекунами, законными представителями) Пользователей.
3.8. Консультация родителей по проблемам образования детей – важнейшая часть деятельности Преподавателя. Он устраняет причины пробелов в знаниях на основе этических принципов.
3.9. Преподаватель не разглашает высказанное детьми мнение о своих родителях или мнение родителей о детях, как по этическим нормам, так и по педагогическим нормам. 
3.10. Преподавателю следует в рамках своих возможностей приложить усилия по сохранению здоровой атмосферы в семье, в окружении Пользователя.  
4. Академическая свобода и свобода слова
4.1. Преподаватель имеет право пользоваться различными источниками информации, с обязательным условием соблюдения авторских и смежных прав источников.
4.2. При отборе и передаче информации Пользователям, Преподаватель соблюдает принципы объективности, пригодности и пристойности. 
5. Авторитет, честь, репутация.
5.1. Своим поведением Преподаватель поддерживает и защищает профессиональную честь Преподавателя и статус платформы.
5.2. В общении с Пользователями Преподаватель уважителен, тактичен, вежлив и корректен. 
5.3. Авторитет Преподавателя основывается на компетенции, справедливости, такте, умении заботиться о Пользователей.
5.4. Преподаватель дорожит своей репутацией.

Несоблюдение положения, условий настоящего Кодекса и профессиональной этики Преподавателя в целом, могут обсуждаться и рассматриваться на личной встрече с Преподавателем. 
Соглашение и сотрудничество с Преподавателем, нарушивший Этический Кодекс может быть досрочно расторгнуто, в одностороннем порядке.

Согласие с данным Кодексом вступает в силу с момента нажатия Преподавателем кнопки о согласии/принятии в процессе регистрации на сайте mydars.uz. Данное действие приравнивается к принятию всех условий настоящего Кодекса Преподавателем, в соответствии со статьями 367-378 Гражданского кодекса Республики Узбекистан.

В настоящий Кодекс могут вноситься изменения в одностороннем порядке, о чем будет опубликовано соответствующее уведомление на сайте mydars.uz для Клиентов/Пользователей и Преподавателей и/или отправлено уведомление на электронную почту, за 10 календарных дней до вступления в силу таких изменений. При этом акцептирование считается автоматическим.


        </div>
    )
}
}

export default Fr3;