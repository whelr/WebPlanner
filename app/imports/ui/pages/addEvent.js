/*
Title:        addEvent.js
Description:  Primary code for adding an event in the WebPlanner.
              Contains only one program, addEvent(), and utilizes
              several error checks to ensure no conflicts.
Author:       Conner Batson
Instructor:   Zhao Xinghui
Course:       CS 320-01
Date:         11/28/2019
Last Edit:    11/28/2019 at 6:30 PM
 */
import { Stuff } from '../../api/stuff/stuff.js';

function eventExists(string){
  // search algorithm for events of same name

  // will return true if event exists; otherwise, false
  // requires additional data about database handling
}

function isCategory(string){
  // checks if input is a valid category
  switch(string){
    case "Academic": return true;
    case "Financial": return true;
    case "Exercise": return true;
    case "Misc": return true;
    case "Miscellaneous": return true;
    default: return false;
  }
}

function isDigit(char){

  switch(char){
    case '0': return true;
    case '1': return true;
    case '2': return true;
    case '3': return true;
    case '4': return true;
    case '5': return true;
    case '6': return true;
    case '7': return true;
    case '8': return true;
    case '9': return true;
    default: return false;
  }

  return false;
}

console.log(isDigit('0'));
console.log(isDigit('/'));
console.log(isDigit('a'));

function parseDate(string){
  // function to parse date string; assume formatting is always mm/dd/yyyy
  let retval = [];
  let temp = '';

  for(let i = 0; i < string.length; i++){
    //console.log(i);
    //console.log('value: '+string[i]);
    if(isDigit(string[i])){
      temp = temp + string[i];
    }else{
      if(string[i] === '/'){
        retval.push(temp);
        temp = [];
      }else{
        return null;
      }
    }
  }
  retval.push(temp);
  return retval;
}

console.log('parseDate tests: ');
console.log(parseDate('12/03/2019')); // returns array of 3 string values
console.log(parseDate('12/03/201a')); // returns null (invalid character year)
console.log(parseDate('12/a3/2019')); // returns null (invalid character day)
console.log(parseDate('1a/03/2019')); // returns null (invalid character month)
console.log(parseDate('12a03/2019')); // returns null (invalid non-digit character);

function isCurrentDate(string){
  var today = new Date();
  var yyyy = today.getFullYear();
  var mm = (today.getMonth()+1);
  var dd = today.getDate();
  //console.log(yyyy+' '+mm+' '+dd);
  let input = parseDate(string);
  if(input === null){
    //console.log('condition 1: empty variable');
    return false;
  }else{
    //console.log(input);
    //console.log('input: '+input[2]+' current: '+yyyy);
    //console.log('input: '+input[0]+' current: '+mm);
    //console.log('input: '+input[1]+' current: '+dd);
    if(input[2] < yyyy){
      //console.log('smaller input year');
      return false;
    }else{
      if(input[2] > yyyy){
        //console.log('larger input year');
        return true;
      }else{
        // input[2] === yyyy
        if(input[0] < mm){
          //console.log('smaller input month');
          return false;
        }else{
          if(input[0] > mm){
            //console.log('larger input month');
            return true;
          }else{
            if(input[1] < dd){
              //.log('smaller input day');
              return false;
            }else{
              //console.log('larger or equal input day');
              return true;
            }
          }
        }
      }
    }
  }
}
console.log('isCurrentDate tests: ');
console.log(isCurrentDate('11/29/2019')); // should return true (larger day)
console.log(isCurrentDate('12/03/2019')); // should return true (larger month)
console.log(isCurrentDate('11/29/2020')); // should return true (larger year)
console.log(isCurrentDate('11/03/2019')); // should return false (smaller day)
console.log(isCurrentDate('10/29/2019')); // should return false (smaller month)
console.log(isCurrentDate('11/29/2018')); // should return false (smaller year)
console.log(isCurrentDate(''));           // should return false (empty value)

function charSearch(string, char){
  for(let i = 0; i < string.length; i++){
    if(string[i] === char) return true;
  }
  return false;
}

let truth = charSearch('8:00-12:30', '-');
let lie = charSearch('abcdefg', '-');
console.log("charSearch1: "+truth);
console.log("charSearch2: "+lie);

function legalDescription(char){
  if(char === 'a' || char === 'A'){return true;}
  if(char === 'p' || char === 'P'){return true;}
  if(char === 'm' || char === 'M'){return true;}
  return false;
}

console.log("legalDescription(\'a\'): "+legalDescription('a'));
console.log("legalDescription(\'A\'): "+legalDescription('A'));
console.log("legalDescription(\'p\'): "+legalDescription('p'));
console.log("legalDescription(\'P\'): "+legalDescription('P'));
console.log("legalDescription(\'m\'): "+legalDescription('m'));
console.log("legalDescription(\'M\'): "+legalDescription('M'));
console.log("legalDescription(\'b\'): "+legalDescription('b'));
console.log("legalDescription(\'\'): "+legalDescription(''));
console.log("legalDescription(\'0\'): "+legalDescription('0'));

function parseTimeValid(array){
  for(let i = 0; i < array[0].length; i++){
    //console.log(array[0][i]);
    if(!isDigit(array[0][i]) && array[0][i] !== ':'){
      //console.log('first loop trip')
      return false;
    }
  }
  for(let i = 0; i < array[1].length; i++){
    if(!legalDescription(array[1][i])){
      //console.log('second loop trip');
      return false;
    }
  }
  return true;
}

console.log("parseTimeValid(['8:00', 'AM']): "+parseTimeValid(['8:00','AM']));
console.log("parseTimeValid(['8:0a', 'AM']): "+parseTimeValid(['8:0a','AM']));
console.log("parseTimeValid(['B:00', 'AM']): "+parseTimeValid(['B:00','AM']));
console.log("parseTimeValid(['8:00', 'Ab']): "+parseTimeValid(['8:00','Ab']));
console.log("parseTimeValid(['8:00', 'TM']): "+parseTimeValid(['8:00','TM']));

function parseTime(string){
  // string parser for exact time
  // assumes all strings are formatted as "8:00 AM to 12:00 PM" or follows the basic
  // grammar "tt:tt T to tt:tt T", where t is a time digit and T can be 'AM' or 'PM'
  if(string === '') return null;

  let retval = [];
  let elements;

  if(string.search(' to ')){
    elements = string.split(' to ');
  }else{
    return null;
  }
  let start = elements[0].split(' ');
  if(parseTimeValid(start)){
    retval.push(start);
  }else{
    return null;
  }
  let end = elements[1].split(' ');
  if(parseTimeValid(end)){
    retval.push(end);
  }else{
    return null;
  }
  return retval;
}

let returned = parseTime('8:00 AM to 12:00 PM');
console.log('Return of \'8:00 AM to 12:00 PM\' from parseTime: '+returned);
console.log('Entry 0: '+returned[0]);
console.log('Entry 1: '+returned[1]);
let fail = parseTime('');
console.log('Return of fail: '+fail);
returned = parseTime('8:t0 AM to 12:00 PM');
console.log('Return of \'8:t0 AM to 12:00 PM\' from parseTime: '+returned);
returned = parseTime('8:00 AM to 12:00 KM');
console.log('Return of \'8:00 AM to 12:00 KM\' from parseTime: '+returned);
returned = parseTime('8:00 AM to 1P:00 KM');
console.log('Return of \'8:00 AM to 1P:00 PM\' from parseTime: '+returned);

function isTimeConflict(string){

}

function addEvent(s1, s2, s3, s4){
  if(s1 === "" || s2 === "" || s3 === "" || s4 === ""){
    alert("Error. Required fields not filled in.");
    return;
  }
  
  if(isCategory(s2) == false){
    alert("Error. Event Category is illegal name." + s2);
    return;
  }
  
  if(isCurrentDate(s3) === false){
    alert("Error. Illegal format of event date.");
    return;
  }
  
  let timeArray = parseTime(s4);
  console.log(timeArray)

  let startTime = null
  let endTime = null
  
  if(timeArray === null){
    alert("Error. Illegal format of event time.");
    return;
  }else{
    let startTime = ''+timeArray[0][0]+timeArray[0][1];
    let endTime = ''+timeArray[1][0]+timeArray[1][1];
  }
  
  var newEvent={
    EventTitle: s1,
    EventType: s2,
    EventDate: s3,
    EventTimeS: startTime,
    EventTimeF: endTime,
    EventDescription: ''
  }
  
  Stuff.insert(newEvent);
  console.log(Stuff)
  alert("Successfully updated schedule.");
  return;
}
