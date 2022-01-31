import styles from "styled-components";


export const CalendarStyle = styles.div`
  font-family: "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI",
    "Roboto", "Oxygen", "Ubuntu", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;

  color: #5e6c84;

  font-weight: 600;


  
.fc-event-main {
    font-size: 12px;
}

.day.today {
    color: #2055c5;
    
}
.fc-col-header-cell-cushion{
color: black;
}
.day-name {
    font-size: 12px;
    line-height: 16px;
    text-transform: uppercase;
    
}
.mmooday{
color: #9C9CA5;
}
.day-number {
    font-size: 24px;
    line-height: 28px;
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
    border-style: none;
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
`;
/**
 * Created by Nikolay on 29.01.2021.
 */


