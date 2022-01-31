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



class Fr4 extends Component {

render(){
    return(
        <div className={"moooooooopppp"}>
        Соглашение об оказании конечным Пользователям услуг по использованию
 технологической площадки и инфраструктуры My Dars  
(«Пользовательское соглашение»)

г. Ташкент  

Стороны:

ООО «My Dars», созданная и действующая по законодательству Республики Узбекистан, ИНН 307897255, расположенная по почтовому адресу: Республика Узбекистан 100031, ул. Кухинур, Богсарой махаля, Яккасарайский район, дом 1/1, осуществляющий деятельность по предоставлению технологической площадки и инфраструктуры для взаимодействия Преподавателей и Пользователей, расположенная по веб-адресу mydars.uz (далее именуемая — «MY DARS»), и Лицо, пользующееся данным сервисом для поиска Преподавателей и взаимодействия с ним (далее — «Пользователь»).

MY DARS – платформа (технологическая площадка) предоставляющая инфраструктуру для взаимодействия Преподавателей и Пользователей, в режиме онлайн. Владелец торговой маркой MY DARS является юридическое лицо OOO «My Dars»
 
Пользователь – физическое лицо, гражданин Республики Узбекистан, которое по собственному желанию, на возмездной основе пользуется услугами Преподавателя(ей) и услугами My Dars. Пользователем может быть частное физическое лицо, сотрудник компании (Клиента), конечный потребитель услуг Преподавателя и услуг My Dars
  
Клиент – физическое или юридическое лицо являющий плательщиком услуг Преподавателя и услуг My Dars. Физические лицо, которое выступает в качестве плательщика услуг Преподавателя в интересах Пользователя, должно быть совершеннолетним, дееспособным, имеющим все права на заключения сделки на оказание возмездных услуг. Клиент, осуществляющий оплату за Пользователя обязан предоставить документы, подтверждающие родство с Пользователем либо иное основание для права осуществления платежа за Пользователя (свидетельство о рождении, приказ о назначении на должность, справка с место работы и пр.).

Преподаватель - физическое лицо, которое имеет статус Самозанятого лица, по направления услуги репетитора, онлайн-тренер, онлайн-консультант, либо статус Индивидуального предпринимателя (ИП), действующий на основании свидетельства, выданного уполномоченным органом Узбекистана, на право осуществления деятельности по направлению Услуги репетитора. Преподаватель обязан самостоятельно оказывать Услуги Преподавателя Пользователям (учеников). 

Услуга MY DARS – My Dars - которая предоставляет Пользователям (ученикам), Клиентам и Преподавателям услуги по использованию инфраструктуры онлайн-платформы, в виде ведения учета рейтинга Преподавателей; допустимой информации о Преподавателе(ей); предоставления технологических возможностей общаться через текстовые сообщения и видеосвязь в режиме онлайн на платформе My Dars; обеспечение приёма оплаты от Клиента и произведение выплат Преподавателям. Также My Dars предоставляет возможный (негарантированный) поток Клиентов/Пользователей для Преподавателей, и Преподавателей для Клиентов/Пользователей. Платформа My Dars, ни его создатели (разработчики, акционеры, учредители иные аффилированные лица), не предоставляют образовательные услуги и не имеет в штате Преподавателей. 

Услуга Преподавателя – репетиторская услуга в режиме онлайн на платформе My Dars по различным темам и направлениям, которая оказывается самостоятельно Преподавателем(ями). Услуга оказывается лицами, имеющими все разрешительные документы, образование, квалификацию, навыки. Преподаватель предоставляет Пользователю качественный контент, занятия, в выбранном, оплаченном Клиентом/Пользователем объёме и сроках. Преподаватель самостоятельно несет ответственность за качество Занятия.   

Занятие/урок – промежуток времени в течение которого Преподаватель оказывает свои услуги Пользователю, в онлайн режиме через платформу My Dars, а также в оффлайн режиме, согласно условиям, определенным в настоящем Соглашении (п.4.1.).

1.	Принятие и изменение настоящего Соглашения
1.1.	Зарегистрировавшись на сайте mydars.uz (далее — «Сайт») Пользователь тем самым принимает настоящее Соглашение полностью, безоговорочно и безусловно.
1.2.	Любой Пользователь, принимающий Соглашение, заверяет MY DARS о следующих обстоятельствах:
1.2.1.	он является совершеннолетним (достиг возраста полной дееспособности) согласно законодательству своей страны и обладает полной договорной дееспособностью; или 
1.2.2.	если Пользователь несовершеннолетний: он является эмансипированным несовершеннолетним, либо получил законное согласие родителя или законного опекуна, или попечителя на заключение Соглашения в форме, установленной действующим законодательством, и обладает полной правоспособностью и дееспособностью для заключения и исполнения настоящего Соглашения; или
1.2.3.	если Пользователь является родителем или законным опекуном или попечителем несовершеннолетнего и заключает Соглашение от его имени: давая несовершеннолетнему разрешение пользоваться услугами, родители и опекуны (попечители) соглашаются с условиями Соглашения от имени несовершеннолетнего и несут ответственность за надзор за использованием услуг несовершеннолетним. Если вы не давали своему ребёнку разрешения, просим Вас немедленно связаться с нами, чтобы мы могли отключить доступ; 
1.2.4.	для заключения и выполнения Пользователем настоящего Соглашения не требуется согласия или одобрения каких-либо третьих лиц.
MY DARS вправе в любой момент потребовать от Пользователя предоставить информацию и документы, подтверждающие вышеприведённые заверения об обстоятельствах, а Пользователь обязуется предоставить такую информацию и документы в течение 14 (четырнадцать) дней с даты запроса. Информация и документы могут быть предоставлены в электронном (сканированном) варианте; 
 

2.	Предмет Соглашения
2.1.	Предметом настоящего Соглашения является оказание услуг по использованию технологической платформы и инфраструктуры MY DARS для поиска и взаимодействия с Преподавателем, потреблению репетиторских услуг по выбранному Пользователем направлениям, которые оказываются исключительно Преподавателями (индивидуальный предприниматель, самозанятые лица). MY DARS привлекает физических и юридических лиц для организации платных услуг на своей платформе (площадке) по Соглашению. 
2.3.	Услуги оказываются по выбору Пользователя согласно условиям настоящего Соглашения,    

3.	Выбор и замена преподавателя, составление расписания занятий
3.1.	Пользователь выбирает доступного Преподавателя по своему усмотрению, принимая во внимание цели изучения выбранного предмета, и промежутков времени, в которые Пользователь может заниматься. Методика проведения уроков определяется Преподавателем самостоятельно. 
3.2.	Пользователь вправе поменять Преподавателя и обязан изложить причины такого запроса, направляя его в техническую поддержку MY DARS. Запрос рассматривается в течение 72 (семидесяти двух) часов с момента его получения либо при наличии уважительных на то причин, продлить время рассмотрения запроса (отсутствие доступного Преподавателя и пр.).
3.3.	Пользователь также самостоятельно выбирает удобное для него дату и время занятий, которые в свою очередь свободны у Преподавателя. 	

4.	Занятия
4.1.	Все занятия проходят на специально разработанной интерактивной платформе MY DARS. В случаи если при оказании Услуг Преподавателя, возникнут технические неполадки (не получается соединиться через внутреннюю систему видеосвязи и через сторонние сервисы), Преподаватель вправе провести занятие с Пользователем используя сторонние программы и сервисы, такие как Skype, Zoom и др., также в режиме оффлайн (встречи), в удобном месте и времени. При этом, за организацию, оплату и иные последствия таких (оффлайн) занятий Платформа (MY DARS) ответственности не несет.  
4.2.	Пользователь и Преподаватель дают свое согласие на то, что MY DARS вправе вести аудио и видео запись занятий с целью контроля качества и повышения качества обслуживания. My Dars не передаёт данные записи третьим лицам. My Dars может предоставить записи, в случае официального обращения правоохранительных органов.
4.3.	Если в установленное расписанием время начала занятия Пользователю не удаётся связаться с Преподавателем, Пользователь обязан направить соответствующее уведомление через свой Личный кабинет нажав кнопку Сообщить о проблеме и изложив ситуацию.  Занятие, не проведённое по вине Преподавателя, переносится на другое приемлемое для Пользователя время. 
4.4.	В случае если в течение пяти минут после запланированного начала занятия Пользователь не выходит на связь с Преподавателем, и отсутствует уважительная на то причина занятие считается начатым. Занятие считается начатым по расписанию, независимо от того, когда установлена связь. В случае если, несмотря на соблюдение положений данного пункта, преподавателю не удаётся связаться с Пользователем, занятие считается успешно проведенным и оплачивается в размере 100% от стоимости.
4.5.	Занятие считается проведённым надлежащим образом, если в течение 1 (одного) часа после его окончания Пользователь не подаст в MY DARS претензию относительно качества занятия или пунктуальности преподавателя, нажав на кнопку Сообщить о проблеме, напротив не надлежаще проведенного занятия. 
	 

5.	Перенос занятий и пропуск занятий
5.1.	Пользователь вправе перенести или отменить занятие не менее чем за 8 (восемь) часов до начала занятия. Несоблюдение указанного срока Пользователем означает, что Пользователь согласен на предлагаемое время проведения занятия, и если Пользователь пропускает занятие, то уплаченные за это занятие деньги не возвращаются. Пользователь может отменить не более 2х занятий в месяц, количество переносов занятий не ограничено. Перенос осуществляется Пользователем самостоятельно через Личный кабинет: перенести занятие можно только на свободное время, отмеченное доступным для переноса в расписании Преподавателя.  
5.2.	Пробный урок подлежит оплате. Количество пробного урока 1 (один). Далее необходимо приобрести один из Пакетов занятий (согласно п. 7.7). 
5.3.	Преподаватели, вправе изменить расписание занятий с предварительным уведомлением Пользователя не менее чем за 24 (двадцать четыре) часа через свой Личный кабинет. Соответствующее уведомление автоматически направляется в Личный кабинет Пользователя.
5.4. В случаи если Пользователь имеет не израсходованные, но оплаченные занятия (часы), которые перенесены как по инициативе Преподавателя, так и Пользователя, и при этом долгое время (более 6 календарных месяцев со дня оплаты) не воспользовался правом получить услуги Преподавателя, стоимость таких занятий подлежат возврату плательщику (Клиенту/Пользователя), согласно п. 7.8., 12.3. настоящего Соглашения. При этом, Клиент/Пользователь подтверждают и гарантируют, что не будут требовать проценты за использование сумм не израсходованных занятий, согласно ст. 327 ГК РУз.    

6.	Технические требования
6.1.	Пользователь и Преподаватель несут ответственность за соблюдение минимальных технических требований на протяжении всего занятия и за организацию рабочего места перед занятием. MY DARS не несёт ответственности за непредоставление услуг или их ненадлежащее качество, если причиной стало отсутствие необходимого программного обеспечения или технические проблемы с подключением к Интернету.
6.2.	Минимальные системные требования для ПК:
    • Операционная система: Windows 7/8/8.1/10, Mac OS X 10.12 и новее;
    • Браузер: Google Chrome последней стабильной версии;
    • Оперативная память: от 4 ГБ и выше;
    • Процессор: intel i3, i5, i7 не ниже 4-го поколения или AMD Ryzen 3, 5, 7 любого поколения;
    • Интернет-соединение: от 5 Мбит/сек;
    • Наличие микрофона и веб-камеры.
6.3.	Рекомендованные системные требования для ПК:
    • Операционная система: Windows 10, MacOS 10.13 и новее;
    • Браузер: Google Chrome последней стабильной версии;
    • Оперативная память: от 6 ГБ и выше;
    • Процессор: intel i3, i5, i7 не ниже 5-го поколения или AMD Ryzen 3, 5, 7 любого поколения;
    • Интернет-соединение: от 10 Мбит/сек;
    • Наличие микрофона и веб-камеры.
6.4.	Минимальные системные требования для мобильных устройств (смартфон / планшет):
    • Версия OS: Android 7, iOS 12.3 или новее;
    • Браузеры: актуальная версия Chrome;

    • Оперативная память: 2 ГБ или больше;
    • Процессор: 1.5 ГГц (4-х ядерный) или мощнее;
    • Интернет-соединение: от 5 Мбит/сек.
6.5.	Рекомендуемые системные требования для мобильных устройств (смартфон/планшет):
    • Версия OS: Android 9, iOS 13 или новее;
    • Браузеры: актуальная версия Chrome;

    • Оперативная память: 3 ГБ или больше;
    • Процессор: 2 ГГц (4-х ядерный) или мощнее;
    • Интернет-соединение: от 10 Мбит/сек.
6.6.	Требования к организации рабочего места:
6.6.1.	Закрыть все программы, которые могут занять большую часть интернет-канала либо отвлекать от занятия (например, файлообменники, различные мессенджеры);
6.6.2.	Для проведения урока Пользователь должен обеспечить доступ к микрофону и камере на своем техническом устройстве.

7.	Цена
7.1.	Услуги -  оплачиваются на условиях 100% предоплаты. Стоимость услуг Преподавателя устанавливается Преподавателями самостоятельно.  Цены и способы оплаты публикуются на странице каждого Преподавателя 
7.2.	Оплата считается произведенной, когда деньги зачисляются на счёт MY DARS или третьего лица, взимающего плату от имени MY DARS.
7.3.	Пользователь несёт единоличную ответственность за корректность осуществляемых платежей и уплату применимых комиссий (налогов).
7.4.	Пользователь несёт единоличную ответственность за оплату услуг третьих лиц (таких как услуги связи, Интернет и т.д.), необходимых для получения услуг MY DARS и Преподавателя.
7.5.	  Все права и обязанности, возникающие в процессе расчётов между Пользователем и Преподавателем, возникают непосредственно между Процессинговым центром и плательщиком.
7.6.	MY DARS не обрабатывает персональные данные плательщиков, предоставленные в связи с проведением Процессинговым центром расчётов по платежам. MY DARS не хранит реквизиты банковских карт Пользователей на своих ресурсах, в том числе серверах, облачных хранилищах и т.д.
7.7. Пользователю, выбравшему Пакет занятий в количестве 5 уроков, не предоставляется скидка; при выборе 10 уроков, предоставляется 2% скидка; при покупке 20 уроков 5% скидка. 
7.8. Возврат стоимости не израсходованных занятий осуществляется в порядке, определенным п. 12.3. настоящего Соглашения. В случаи отсутствия обратной связи со стороны Клиента/Пользователя на сообщение о возврате стоимости не израсходованных занятий более 3 (трех) календарных месяцев со дня направления соответствующего сообщения, My Dars вправе засчитать данную сумму в свой доход.


8.	Данные Пользователя
8.1.	Пользователь обязуется предоставлять MY DARS все данные, запрашиваемые Сайтом или компанией MY DARS, которые необходимы для предоставления услуг.
8.2.	MY DARS обрабатывает данные Пользователя в соответствии с Политикой конфиденциальности и Соглашением об обработке персональных данных, которые можно найти на сайте https://mydars.uz/docs/privacy_policy и которое включено в настоящее Соглашение путём отсылки.
8.3.	MY DARS обязуется не разглашать конфиденциальную информацию, предоставленную Пользователем в связи с выполнением Соглашения (за исключением общедоступной информации или информации, предоставленной Пользователем при регистрации на Сайте), третьим лицам без предварительного согласия Пользователя. При этом, MY DARS вправе без согласия Пользователя предоставить конфиденциальную информацию, персональные данные Пользователя и Преподавателя правоохранительным органам и иным государственным органам, в рамках законодательства РУз. 
8.4.	MY DARS вправе использовать электронную почту, номер телефона, логин и другие данные, предоставленные Пользователем при регистрации на Сайте, для отправки Пользователю информации и рекламных материалов, в том числе для информирования Пользователя о деятельности компании MY DARS и о ходе исполнения настоящего Соглашения.

9.	Конфиденциальность
9.1.	Пользователь обязуется не разглашать конфиденциальную информацию и иные данные, предоставленные компанией MY DARS в ходе исполнения Соглашения (за исключением общедоступной информации), третьим лицам без предварительного письменного согласия компании MY DARS.

10.	Информационное взаимодействие
10.1.	Уведомление об отмене, переносе занятий или иные события автоматически передаются в Личный Кабинет Преподавателя/Пользователя, а также на их электронную почту, указанную в персональных данных

11.	Ответственность
11.1.	Ответственность Преподавателя за отмену занятий ограничивается возвратом уплаченной за них суммы Пользователю или переносом занятия на другое удобное для Сторон время.
11.2.	Стороны не несут ответственности за нарушение своих обязательств по Соглашению, если такое нарушение явилось следствием обстоятельств или событий, которые нарушившая Сторона не могла обоснованно ожидать (обстоятельства непреодолимой силы), включая наводнения, другие стихийные бедствия, военные действия, решения и действия, и ограничения органов государственной власти или иные события.  
11.3.	MY DARS /Преподаватель вправе отказать в оказании услуг, если имеет разумные основания полагать, что Пользователь:
11.3.1.	Вёл себя неподобающе во время занятия (например, грубил преподавателю, отвлекался, не принимал меры по устранению замечаний преподавателя и пр.);
11.4.	При предоставлении Пользователю в качестве бонуса или поощрения дополнительных занятий, Пользователь не может требовать денежной компенсации в случае, если такое дополнительное занятие по какой-либо причине не было проведено, или если Пользователь отказывается от такого занятия. Такие дополнительные бонусные занятия проводятся после прохождения всех оплаченных Пользователем занятий.
 

12.	Расторжение Соглашения Прекращение участия в Соглашении
12.1.	Пользователь вправе расторгнуть настоящее Соглашение в одностороннем порядке, письменно уведомив MY DARS/Преподавателя о своем намерении расторгнуть Соглашение и причинах расторжения, путем направления такого уведомления support@mydars.uz.   Вопрос о возврате Пользователю ранее оплаченных Пользователем денежных средств в размере, равном стоимости услуг, не оказанных Преподавателем, но при условии удержания расходов на обработку платежей (комиссий банка и др.).
12.2      Все стороны соглашения обязуются следовать процедуре и Политике возврата денежных средств https://mydars.uz/docs/refound_and_cancelation 
12.3.	В случае положительного решения возврат средств производится в течение 30 (тридцати) банковских дней с даты расторжения Соглашения. При наличии претензии к качеству оказанных услуг такая претензия рассматривается в течение 15 (пятнадцати) рабочих дней. Чтобы получить возврат денежных средств Пользователь заполняет заявление о возврате денежных средств в свободной форме как это описано в Политике возврата денежных средств https://mydars.uz/docs/refound_and_cancelation , подписывает заявление и отправляет его электронную (сканированную) копию вместе с электронной копией удостоверения личности Пользователя При возврате Пользователь не сохраняет за собой право на бонусные занятия, предоставленные ему и не использованные с момента любых платежей за Услуги или в рамках маркетинговых акций. Пользователь не может получить возврат денежных средств за не использованные бонусные занятия. 
12.4.	В случае если Пользователь решит возобновить занятия после расторжения Соглашения, стоимость занятий определяется в соответствии с ценами, действующими на момент возобновления.  

13.	Применимое законодательство и порядок разрешения споров
13.1.	Настоящее Соглашение регулируется и толкуется в соответствии с законодательством Республики Узбекистан.
13.2.	Все споры и разногласия, возникающие из настоящего Соглашения или в связи с ним, разрешаются путём переговоров в следующем порядке:
13.2.1.	Пострадавшая Сторона по электронной почте направляет другой Стороне письменную претензию;
13.2.2.	В случае если в течение 15 (пятнадцати) календарных дней потерпевшая Сторона не получит ответа или Стороны не придут к соглашению, потерпевшая Сторона вправе передать спор на рассмотрение суда.
13.3.	 Стороны соглашаются, что, если иск предъявляется к компании ООО «My Dars», он должен быть представлен на рассмотрение Ташкентского межрайонного экономического суда.  

14.	Прочие положения
14.1.	В случае если какое-либо положение Соглашения признаётся недействительным, ничтожным или неисполнимым, все прочие положения Соглашения остаются действительными и подлежат исполнению в полном объёме.
14.2.	MY DARS вправе переуступить настоящее Соглашение третьим лицам, и Пользователь настоящим соглашается с такой переуступкой.
14.3.	Пользователь проинформирован и соглашается с тем, что его домашние задания могут быть полностью либо частично проверены и/или оценены с использованием средств автоматической проверки.
14.4. В настоящее Соглашение могут вноситься изменения в одностороннем порядке, о чем будет опубликовано соответствующее уведомление на сайте mydars.uz для Клиентов/Пользователей и/или отправлено уведомление на электронную почту Пользователей, за 10 календарных дней до вступления в силу таких изменений. При этом акцептирование считается автоматическим.
14.5. Настоящее Соглашение вступает в силу с момента нажатия Пользователем кнопки о согласии/принятии в процессе регистрации на сайте mydars.uz. Данное действие приравнивается к принятию всех условий настоящего Соглашения Пользователем, в соответствии со статьями 367-378 Гражданского кодекса Республики Узбекистан. 

Контакты для связи: 
support@mydars.uz 
+998 71 205 87 00


        </div>
    )
}
}

export default Fr4;