
// simple logic

function isLeapYeat(year){
    if(year % 4 === 0){
        return true;
    }
    else{
        return false;
    }
}
const leapYear =isLeapYeat(2025);
console.log(leapYear);



// accorate logic

function isLeapYeat2(year){
    if(year % 100 !== 0 && year % 4 === 0){
        return true;
    }
    if(year % 100 === 0 && year % 400 === 0){
        return true;
    }
    else{
        return false;
    }
}
const isleap1 = isLeapYeat2(2100);
const isleap2 = isLeapYeat2(2400);
const isleap3 = isLeapYeat2(1900);
const isleap4 = isLeapYeat2(2052);
console.log(isleap1, isleap2, isleap3, isleap4)