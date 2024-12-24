function showTime(){
    const date= new Date();
    const days =["Sunday","Monday","Tuesday","Wednesday","Thusday","Friday","Saturday"]
    let day=days[date.getDay()]; 
    console.log("date",date);
    document.getElementById('day').innerHTML= day;
    document.getElementById('minute').innerHTML=date.getMinutes();
    document.getElementById('hour').innerHTML=date.getHours();
    document.getElementById('second').innerHTML=date.getSeconds();
    document.getElementById('second').innerHTML=date.getSeconds();
    document.getElementById('date').innerHTML=date.getDate();
    document.getElementById('year').innerHTML=date.getFullYear();
}
const stopclock=setInterval(showTime,1000);



function stopClock(){
   clearInterval(stopclock);

}
