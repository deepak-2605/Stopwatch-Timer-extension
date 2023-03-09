var displaytime="";
// Code to play the stopwatch
function displayTime(timeinsecods){
var hours=Math.trunc(timeinsecods/(3600));
var minutes=Math.trunc((timeinsecods-(hours*3600))/60);
var seconds=Math.trunc(timeinsecods-(hours*3600)-(minutes*60));
// console.log("H:"+hours+"M:"+minutes+"S:"+seconds);
var timestring="";
    if(Number(hours)==0){
        timestring+="00:"
    }else if(Number(hours)<10){
        timestring+="0"+Number(hours)+":"
    }else{
        timestring+=Number(hours)+":";
    }
    if(Number(minutes)==0){
        timestring+="00:"
    }else if(Number(minutes)<10){
        timestring+="0"+Number(minutes)+":"
    }else{
        timestring+=Number(minutes)+":";
    }
    if(Number(seconds)==0){
        timestring+="00"
    }else if(seconds<10){
        timestring+="0"+Number(seconds);
    }else{
        timestring+=Number(seconds);
    }
    //  time.innerHTML=timestring;
    // console.log('hello');
    return timestring;
    
}
var flag=0;
var runningtime;
function runTime(timeinseconds){
     if(flag==1){
      runningtime=setInterval(function(){
        timeinseconds++;
        console.log(timeinseconds);
         time.innerHTML=displayTime(timeinseconds);
     },1000);
    }else{
       time.innerHTML=displayTime(timeinseconds);
        flag=0;
    }
}

play.addEventListener("click",function(){
    if(flag==0){
        flag=1;
    var timestring=time.innerHTML;
     var hours=Number(timestring.slice(0,2));
     var minutes=Number(timestring.slice(3,5));
     var seconds=Number(timestring.slice(6,8));
    var timeinseconds=hours*3600+minutes*60+seconds;
    // console.log(timeinsecods);
    runTime(timeinseconds);
    }
    else{
        console.log('play button disabled');
    }

})
pause.addEventListener("click",function(){
    if(flag==1){
        var timestring=time.innerHTML;
        console.log(timestring);
        var hours=Number(timestring.slice(0,2));
        var minutes=Number(timestring.slice(3,5));
        var seconds=Number(timestring.slice(6,8));
       var timeinsecods=hours*3600+minutes*60+seconds;
      
       var temp=timeinsecods;
       flag=0;
       clearInterval(runningtime);
       console.log(timeinsecods);
        timeinsecods=temp;
        runTime(timeinsecods);
    }else{
        console.log(' pause button disabled')
    }
})
reset.addEventListener("click",function(){
    flag=0;
    clearInterval(runningtime);
    runTime(0);
})
// Timer
var flagtimer=0;
var runtime
function startTimer(timeinseconds){
    if(flagtimer==1){
       runtime= setInterval(function(){
        timeinseconds--;
        if(timeinseconds==0||timeinseconds==-1){
              clearInterval(runtime);
              console.log("Hello");
              flagtimer=0;
              timer.readOnly=false;
              alert("Time's up");
        }
        timer.value=displayTime(timeinseconds);
       },1000);
    }else{
        timer.value=displayTime(timeinseconds);
        
    }
}
var counter=0;
var originaltime=0;
Start.addEventListener("click",function(){
    if(flagtimer==0){
      timer.readOnly=true;
      counter++;
      if(counter==1){
        originaltime=timer.value;
      }
       var timeinseconds=Number(timer.value.slice(0,2))*60*60+Number(timer.value.slice(3,5))*60+Number(timer.value.slice(6,8));
      flagtimer=1;
      startTimer(timeinseconds);
    }else{
        console.log("Start button is disabled");
    }
})
Stop.addEventListener("click",function(){
    if(flagtimer==1){
            clearInterval(runtime);
            flagtimer=0;
            var timeinseconds=Number(timer.value.slice(0,2))*60*60+Number(timer.value.slice(3,5))*60+Number(timer.value.slice(6,8));
            startTimer(timeinseconds);
    }else{
        console.log("Stop button is disabled");
    }
})
Reset.addEventListener("click",function(){
    clearInterval(runtime);
    flagtimer=0;
    counter=0;
    timer.readOnly=false;
    if(originaltime!=""){
        timer.value=originaltime;
    }else{
        timer.value="00:00:00";
    }
})
// Hover between stopwatch and timer
var hoverflag=1;
Stopwatch.addEventListener("click",function(){
    hoverflag=1;
    if(hoverflag==1){
        document.getElementById("stopwatch").style.display="flex";
        document.getElementById("timer2").style.display="none";
        document.getElementById("Timer").style.textDecoration="none";
            document.getElementById("Stopwatch").style.textDecoration="underline";
            document.getElementById("Timer").style.color="white";
            document.getElementById("Stopwatch").style.color="rgb(189, 188, 188)";
        console.log("btn 1 working");
    }
})
Timer.addEventListener("click",function(){
        hoverflag=0;
        if(hoverflag==0){
            document.getElementById("stopwatch").style.display="none";
            document.getElementById("timer2").style.display="flex";
            document.getElementById("Timer").style.textDecoration="underline";
            document.getElementById("Stopwatch").style.textDecoration="none";
            document.getElementById("Stopwatch").style.color="white";
            document.getElementById("Timer").style.color="rgb(189, 188, 188)";
            console.log("btn2 working");
        }
})


