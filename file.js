let daily= document.querySelector('.daily');
let weekly= document.querySelector('.weekly');
let yearly= document.querySelector('.yearly');

let hours=document.querySelectorAll('.numHour');

let period= document.querySelectorAll('.period');

//my json format text
//daily,weekly,yearly
let myText= `{"Progress" : [{"work" : "9","play":"3","study":"4","exercise":"3","social":"2","selfCare":"1"},{"work" : "30","play":"18","study":"5","exercise":"12","social":"9","selfCare":"6"},{"work" : "1000","play":"300","study":"500","exercise":"200","social":"100","selfCare":"90"}]}`;
let lastData= `{"lastHours" : [{"work" : "7","play":"4","study":"3","exercise":"4","social":"3","selfCare":"3"},{"work" : "25","play":"18","study":"4","exercise":"10","social":"10","selfCare":"6"},{"work" : "900","play":"400","study":"600","exercise":"200","social":"90","selfCare":"90"}]}`;
//convert json to object file
const userProgress= JSON.parse(myText);
const userLastData= JSON.parse(lastData);

let mykeys= Object.keys(userProgress.Progress[0])


daily.addEventListener('click', function(){
    for(let i=0;i<hours.length;i++){
        hours[i].innerHTML=`${userProgress.Progress[0][mykeys[i]]}hrs`;  
    }
    for(let j=0;j<period.length;j++){
        period[j].innerHTML=`lastday-${userLastData.lastHours[0][mykeys[j]]}hrs`;
    }
})
weekly.addEventListener('click', function(){
    for(let i=0;i<hours.length;i++){
        hours[i].innerHTML=`${userProgress.Progress[1][mykeys[i]]}hrs`;
    }

    for(let j=0;j<period.length;j++){
        period[j].innerHTML=`lastweek-${userLastData.lastHours[1][mykeys[j]]}hrs`;
    }
})
yearly.addEventListener('click', function(){
    for(let i=0;i<hours.length;i++){
        hours[i].innerHTML=`${userProgress.Progress[2][mykeys[i]]}hrs`;
    }

    for(let j=0;j<period.length;j++){
        period[j].innerHTML=`lastyear-${userLastData.lastHours[2][mykeys[j]]}hrs`;
    }
})