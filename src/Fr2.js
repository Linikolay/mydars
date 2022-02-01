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



class Fr2 extends Component {

render(){
    return(
        <div className={"moooooooopppp"}>
            ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ, СОГЛАСИЕ 
НА ОБРАБОТКУ ПЕРСОНАЛЬНЫХ ДАННЫХ И ПОЛУЧЕНИЯ РАССЫЛОК

г. Ташкент                                                                                       

Стороны:

MY DARS – платформа (технологическая площадка) предоставляющая инфраструктуру для взаимодействия Преподавателей и Пользователей, в режиме онлайн через сайт mydars.uz (и субдомены). Владелец торговой маркой MY DARS является юридическое лицо OOO «My Dars»

Пользователь – физическое лицо, гражданин Республики Узбекистан, которое по собственному желанию, на возмездной основе пользуется услугами Преподавателя(ей) и услугами My Dars. Пользователем может быть частное физическое лицо, сотрудник компании (Клиента), конечный потребитель услуг Преподавателя и услуг My Dars
  
Клиент – физическое или юридическое лицо являющий плательщиком услуг Преподавателя и услуг My Dars. Физические лицо, которое выступает в качестве плательщика услуг Преподавателя в интересах Пользователя, должно быть совершеннолетним, дееспособным, имеющим все права на заключения сделки на оказание возмездных услуг. Клиент, осуществляющий оплату за Пользователя обязан предоставить документы, подтверждающие родство с Пользователем либо иное основание для права осуществления платежа за Пользователя (свидетельство о рождении, приказ о назначении на должность, справка с место работы и пр.).

Преподаватель - физическое лицо, которое имеет статус Самозанятого лица, по направления услуги репетитора, онлайн-тренер, онлайн-консультант, либо статус Индивидуального предпринимателя (ИП), действующий на основании свидетельства, выданного уполномоченным органом Узбекистана, на право осуществления деятельности по направлению Услуги репетитора. Преподаватель обязан самостоятельно оказывать Услуги Преподавателя Пользователям (учеников).

Посетитель – лицо, которое зашло на сайт mydars.uz без авторизации.

Предмет соглашения:

Посетитель, Клиент/Пользователь и Преподаватель, пользующееся сервисом My Dars на сайте mydars.uz (а также официальных страницах в социальных сетях, субдоменах и др.) дает свое согласие ООО «MY DARS» на обработку своих персональных данных и согласие на получение рассылок на следующих условиях:

а) Перечень персональных данных: фамилия, имя, отчество, пол, контактные данные (в том числе мобильный телефон, электронная почта), дата рождения, адрес проживания и почтовый индекс, ip адрес, тип браузера и иные доступные данные о гаджете, семейное положение, численность и состав семьи, профессия, доход, возраст, место работы.

б) Цели обработки персональных данных:
- Продвижение товаров и услуг MY DARS;
- Изучение конъюнктуры рынка;
- Получение и исследование статистических данных об объеме продаж и качестве услуг MY DARS; 

- Совершенствование уровня предоставляемых MY DARS услуг;
- Осуществление других видов деятельности в рамках законодательства РУз. с обязательным выполнением требований законодательства РУз. в области персональных данных.

в) Настоящее согласие дается на совершение следующих действий с персональными данными: сбор, систематизация, накопление, хранение, уточнение (обновление, изменение), использование: распространение в случаях и в объеме, предусмотренных законодательством РУз., в том числе предоставление в государственные органы и иные организации, в том числе в составе сведений об аффилированных лицах и группе лиц; обезличивание, блокирование, уничтожение персональных данных. А также для осуществления выплат вознаграждения за проведение услуг Преподавателей, и налоговых выплат/отчислений, а также на хранение всех вышеназванных данных на электронных носителях.

г) Персональные данные, полученные MY DARS, хранятся в соответствие с требованиями РУз. на условиях конфиденциальности. Посетитель, Клиент/Пользователь и Преподаватель соглашается с тем, что его персональные данные, полученные MY DARS, могут быть переданы третьим лицам с соблюдением требований законодательства РУз. и на условиях конфиденциальности в случае, если это необходимо для реализации вышеуказанных целей.

д) Настоящим Посетитель, Клиент/Пользователь и Преподаватель выражает свое согласие на получение от MY DARS рекламных материалов, связанных с продвижением товаров и услуг Продавца, путем осуществления прямых контактов с использованием всех средств связи, включая, но не ограничиваясь: почтовая рассылка, СМС-рассылка, голосовая рассылка, рассылка электронных писем, в том числе с использованием cookies, таргетированная реклама в социальных сетях, поисковиках и других сайтах.
е) Настоящее Согласие вступает в силу с момента нажатия Посетитель, Клиент/Пользователь и Преподаватель кнопки о согласии/принятии в процессе регистрации на сайте mydars.uz. Данное действие приравнивается к принятию всех условий настоящего Соглашения Пользователем, в соответствии со статьями 367-378 Гражданского кодекса Республики Узбекистан. Настоящее согласие действует до получения письменного отзыва данного согласия MY DARS. Посетитель, Клиент/Пользователь и Преподаватель настоящим подтверждает, что ознакомлен с порядком отзыва согласия на обработку персональных данных."
Посетитель, Клиент/Пользователь и Преподаватель подтверждает, что, давая согласие, он действует без принуждения, по собственной воле и в своих интересах на обработку своих персональных данных 
ж) В настоящее Соглашение могут вноситься изменения в одностороннем порядке, о чем будет опубликовано соответствующее уведомление на сайте mydars.uz для Посетителей, Клиентов/Пользователей и Преподавателей и/или отправлено уведомление на электронную почту, за 10 календарных дней до вступления в силу таких изменений. При этом акцептирование считается автоматическим.

        </div>
    )
}
}

export default Fr2;