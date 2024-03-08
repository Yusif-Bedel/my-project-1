const clock=document.querySelector('.clock');

const time=()=>{
    const date=new Date();
    const hour=date.getHours()
    const minute=date.getMinutes();
    const second=date.getSeconds();
    const html=`
    <span>${formatTime(hour)}</span>:
    <span>${formatTime(minute)}</span>:
    <span>${formatTime(second)}</span>
    `
    clock.innerHTML=html
}

const formatTime=(time)=>{
    return time<10 ? "0"+time:time

}
setInterval(time,1000);
