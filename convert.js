function inchToFeet(inch){
    const feet = inch / 12;
    return feet;
}
// const shuboHeight = inchToFeet(66);
// console.log(shuboHeight);



function inchToFeet2(inch2){
    const feetFraction = inch2 / 12;
    const feetNumber = parseInt(feetFraction);
    const inchRemaining = inch2 % 12;
    const result = feetNumber + ' ft ' + inchRemaining + ' inch ';
    return result;
}
const shuboHeight2 = inchToFeet2(66);
// console.log(shuboHeight2);




function mileToKillo(mile){
    const kilo = mile * 1.60934;
    return kilo;
}
const kiloMeter = mileToKillo(15);
console.log(kiloMeter);
