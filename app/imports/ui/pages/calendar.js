import { FlowRouter } from 'meteor/kadira:flow-router';
import { Template } from 'meteor/templating';
import { Stuff } from '../../api/stuff/stuff.js';


var currentDate = new Date();
var currentYear = currentDate.getFullYear();
var currentMonth = currentDate.getMonth();
var showingYear;
var showingMonth;
var monthList =["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//var dayList = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function getHeaderLabel(month, year){
  var getLabel = document.getElementById("monthAndYearLabel");
  getLabel.innerText = monthList[month] + " " + year;
}
function getMonthLayout(month, year){
  var mainCalendar = document.getElementById("mainCalendar");
  var firstDay  =  new Date(year, month).getDay();
  showingMonth = month;
  showingYear = year;
  var daysInMonth = 32 - new Date(year, month, 32).getDate();
  var date = 1;
  for (var i = 0; i<5; i++){
    var newRow = mainCalendar.insertRow(i);
    for(var j = 0; j<7; j++){
      var newCell = newRow.insertCell(j);
      if( i==0 && j<firstDay){
        newCell.innerText = " ";
      } else if( date > daysInMonth){
        break;
      }else {
        var formattedDate = showingMonth + "/" + Date + "/" + showingYear
        var dates_stuff = Stuff.find({EventDate: formattedDate}).fetch()
        var StringOfEvents = ""
        for (date in dates_stuff ) {
          StringOfEvents.append(date.EventTitle + "\n")
        }
        newCell.innerText = date + "\n" + StringOfEvents;
        date++;
      }
    }
  }
}
function showCalendar(month, year){
  //show current month and year label
  getHeaderLabel(month, year);
  //get the current month layout displayed
  getMonthLayout(month, year);
}

function nextMonth(month, year){
  var newMonth = month;
  var newYear = year;
  if(newMonth == 11){
    newMonth = 0;
    newYear = year +1;
  }else{
    newMonth = month +1;
  }
  clearMainCalendar();
  showCalendar(newMonth, newYear);
}
function previousMonth(month,year){
  var newMonth = month;
  var newYear = year;
  if(newMonth == 0){
    newMonth = 11;
    newYear = year-1;
  }else{
    newMonth = month -1;
  }
  clearMainCalendar();
  showCalendar(newMonth, newYear);
}

function clearMainCalendar(){
  var table = document.getElementById("mainCalendar");
  for (var i=0; i <5; i++){
    table.deleteRow(0);
  }
}

function goToToday(){
  clearMainCalendar();
  showCalendar(currentMonth, currentYear);
}


window.onload = function(){
 getHeaderLabel(currentMonth, currentYear);
 showCalendar(currentMonth, currentYear);
}


