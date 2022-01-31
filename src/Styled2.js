import styled from "styled-components";


export const CalendarStyle = styled.div`
  font-family: "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI",
    "Roboto", "Oxygen", "Ubuntu", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;

  color: #5e6c84;

  font-weight: 600;


  
.fc-event-main {
    font-size: 12px;
}

.day.today {
    color: black;
    float: left;
    font-size: 14px;
    padding-top: 4px;
    padding-right: 4px;
    
}
.fc-col-header-cell-cushion{
color: black;
}
.day-name {
    font-size: 12px;
    line-height: 16px;
    text-transform: uppercase;
    padding-right: 4px;
    
}
.fc-scroller{
    overflow: hidden;
}
.mmooday{
   color: #757575;
float: left;
font-size: 14px;
padding-top: 4px;
}
.day-number {
    font-size: 14px;
    line-height: 28px;
    float: left;
    color: #757575;
}
.calendar-hour {
    font-size: 11px;
}
.fc-timegrid-slot {
    height: 30px;
}

.fc-timegrid-slot-label {
    vertical-align: top;
    top: -6px;
    position: relative;
}
.fc-timegrid-slot-minor {
    border-style: none !important;
   
}
.fc-timegrid-slot.fc-timegrid-slot-lane {
    border-top: 1px solid #dfe1e6;
 
}
.fc td
.fc th {
    // border-style: none;
}

// .fc-scrollgrid {
//     border-style: none;
// }
.fc-col-header {
    border-style: solid;
    border-bottom: 3px solid #dfe1e6;
}
.fc-day-today {
    background: none !important;
}
.fc-event-main {
    padding: 8px;
}

.fc-col-header-cell {
    padding: 8px;
}

.fc-theme-standard td, .fc-theme-standard th{

// border: 0px;

}
.fc-timegrid-slot-label{
    top: 0px;
}


.fc-timegrid-slot{
    border: 0px;
} 
.fc-timegrid-slot-label{
    border: 0px;
} 
.fc-timegrid-slot-minor{
    border: 0px;
}





















::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 0px rgba(0,0,0,0.0);
	background-color: #F5F5F5;
	border-radius: 10px;
}

::-webkit-scrollbar
{
	width: 0px;
	background-color: red !important;
}

::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	background-image: -webkit-gradient(linear,
									   left bottom,
									   left top,
									   color-stop(0.44, rgba(145, 129, 243, 1)),
									   color-stop(0.72, rgba(145, 129, 243, 1)),
									   color-stop(0.86, rgba(145, 129, 243, 1)));
}


::-webkit-scrollbar {
    width: 100px;
    background-color: red !important;
}

.fc {
    height: 544px;
}


`;
/**
 * Created by Nikolay on 29.01.2021.
 */


