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

function eventExists(string){
  // search algorithm for events of same name

  // will return true if event exists; otherwise, false
  // requires additional data about database handling
}

function isCategory(string){
  // checks if input is a valid category
  switch(string){
    case "School": return true;
    case "Financial": return true;
    case "Exercise": return true;
    case "Misc": return true;
    case "Miscellaneous": return true;
    default: return false;
  }
  return false;
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

function parseTime(string){
  // string parser for exact time

}

parseTime('')

function isTimeConflict(string){

}