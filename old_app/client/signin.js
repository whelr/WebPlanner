/**
    Conner Batson
    CS 320
    signin.js

*/

function isPassword(s1, s2){
    if(s1 === s2) return true;
    else return false;
}

function signin(s1, s2){
    if(!isPassword(s1, s2)){
        alert("Error. Invalid Password");
        return;
    }

    return;
}