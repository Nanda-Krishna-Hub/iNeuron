var year =1900

leapYear(year)
function leapYear(year){
    if((0 == year%4) && (0 != year %100 )||(0 == year %400)){
        console.log(year+' is a leap year')
    } else {
        console.log(year + ' is not a leap year')
    }
}