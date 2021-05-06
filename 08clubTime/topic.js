let topic = [
    "尚未開學",
    "國定假日",
    "環境準備",
    "隨機性",
    "重複性"
]

let thismonth = prompt("month");
let thisday = prompt("day");

let startDate = new Date();

function setMonthAndDay(sMonth, sDay){
    startDate.setMonth(sMonth-1, sDay);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}

setMonthAndDay(thismonth,thisday);
