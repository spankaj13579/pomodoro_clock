var times= document.querySelector(".times");
var sessionNo= document.querySelector(".sessionNo");
var sTime= document.querySelector(".sTime");
var sPlus= document.querySelector(".sPlus");
var bTime= document.querySelector(".bTime");
var sMinus= document.querySelector(".sMinus");
var bPlus= document.querySelector(".bPlus");
var bMinus= document.querySelector(".bMinus");
var start= document.querySelector(".start");
var resett= document.querySelector(".resett");
var pause= document.querySelector(".pause");
document.addEventListener('click', fun);
sessionTime=20;
breakTime=5;
var timer,second=0, minute=0;
var sessions,breaks, min,sec,text,flag= false,counter=1;
var sessionTimeCopy= sessionTime*60, BreakTimeCopy=breakTime*60;
function fun(e)
{
    if(e.target== sPlus)
    {
            sessionTime++;
            sTime.innerText= sessionTime+" min";
            if(sessionTime<10)
            {
                times.innerText= "0"+sessionTime+ ":00";
            }
            else{
                times.innerText= sessionTime+ ":00";
            }
            sessionTimeCopy= sessionTime*60, BreakTimeCopy=breakTime*60;
        
        console.log("sPlus");
    }
    if(e.target == sMinus)
    {
        if(sessionTime>1)
        {
        sessionTime--;
        
        sTime.innerText= sessionTime+" min";
        if(sessionTime<10)
        {
            times.innerText= "0"+sessionTime+ ":00";
        }
        else{
            times.innerText= sessionTime+ ":00";
        }
        sessionTimeCopy= sessionTime*60, BreakTimeCopy=breakTime*60;
        }
        
        console.log("sMinus");
    }
    if(e.target== bPlus)
    {
        breakTime++;
        bTime.innerText= breakTime+" min";
        console.log("bPlus");
        sessionTimeCopy= sessionTime*60, BreakTimeCopy=breakTime*60;
    }
    if(e.target == bMinus)
    {
        if(breakTime>1)
        {
            breakTime--;
            bTime.innerText= breakTime+" min";
        }
        sessionTimeCopy= sessionTime*60, BreakTimeCopy=breakTime*60;
        console.log("bMinus");
    }

    if(e.target == start)
    {
        interval();
        pause.classList.remove('hide');
        start.classList.add('hide');
    }

    if(e.target==pause)
    {
        clearInterval(timer);
        start.classList.remove('hide');
        pause.classList.add('hide');
    }
    if(e.target == resett)
    {
        sMinus.disabled= false;
        sPlus.disabled= false;
        bMinus.disabled= false;
        bPlus.disabled= false;
        min=0;
        sec=0;
        minute=0;
        second=0;
        sessionTime=20;
        breakTime=5;
        sessionTimeCopy= 20*60;
        BreakTimeCopy=5*60;
        flag= false;
        counter=1;
        sessionNo.innerText= "Session "+ counter; 
        times.innerText="20:00";
        sTime.innerText="20 min";
        bTime.innerText= "5 min";
        clearInterval(timer);
        times.classList.remove('red');
        times.classList.add('blue');
        pause.classList.add('hide');
        start.classList.remove('hide');
        sessionNo.classList.remove('red');
    }
}


function interval()
{
    sMinus.disabled= true;
    sPlus.disabled= true;
    bMinus.disabled= true;
    bPlus.disabled= true;
    timer= setInterval(
    function()
        {
            // calculating time
            
            if(second>=59)
            {
                minute++;
                second=0;
            }
            second++;
            
            // calculating time ends
            if(flag == false)
            {
                console.log(sessionTimeCopy);
                sessionTimeCopy--; 
                sec= 60-second;
                // if(minute >0)
                
                min= (sessionTime-1)-minute;
                if(min<0)
                {
                    min=0;
                }
                // else
                // min=sessionTime-1;
                if(sessionTimeCopy == 0)
                {
                    flag=true;
                    sessionTimeCopy=sessionTime*60;
                    minute=0;
                    second=0;
                }
            }

            // for break
            if(flag== true)
            {
                console.log("eeeeeeeeeeeeee");
                BreakTimeCopy--;
                sec= 60-second;
                // if(minute >0)
                
                min= (breakTime-1)-minute;
                if(min<0)
                {
                    min=0;
                }
                if(BreakTimeCopy==0)
                {
                    flag= false;
                    BreakTimeCopy= breakTime*60;
                    counter++;
                    minute=0;
                    second=0;
                }
            }


            if(min<10)
            {
                min="0"+min;
            }
            if(sec<10)
            {
                sec="0"+sec;
            }
            text= min+":"+sec;
            times.innerText= text;
            if(flag==false)
            {
                times.classList.add('blue');
                times.classList.remove('red');
                sessionNo.innerText= "Session "+ counter; 
                sessionNo.classList.remove('red');
            }
            if(flag== true)
            {
                sessionNo.innerText= "Break!"; 
                sessionNo.classList.add('red');
                times.classList.add('red');
                times.classList.remove('blue');
            }
            console.log(text);
        },1000);
}
