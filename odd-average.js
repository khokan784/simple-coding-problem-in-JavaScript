function oddAverage(numbers){
    let odds = [];
    for(const number of numbers){
        if(number % 2 === 1){
            odds.push(number);
        }
    }
    let sum = 0;
    for(const number of odds){
        sum = sum + number;
    }
    const count = odds.length;
    console.log(sum, count);
    const avg = sum / count;
    return avg;


}
const numbers = [ 5, 8, 3, 7, 6, 9, 2]
const average = oddAverage(numbers);
console.log('average of the odds number is:', average);