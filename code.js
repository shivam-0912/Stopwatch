var t=0;
lap=0;
ms=0;
s=0;
m=0;
f=0;
msr=0;
sr=0;
mr=0;

var counter;
var counter2;
$(function start(){
    $('#start').click(function(){
        if(f==0){
            $(this).html('Stop');
            $('#laptext').html('Lap');
            f=1;
            
            counter=setInterval(time,'1');
            counter2=setInterval(timer,'1')
            return;
        }
        else if(f==1){
            $(this).html('Resume');
            $('#laptext').html('Reset');
            clearInterval(counter);
            clearInterval(counter2)
            f=0;
        }
        
       
        
        
        
    })
    $('#laptext').click(function(){
        if(f==1){
            lap++
            $('#count').prepend('<div id="lapdiv"><span id="lapno">Lap '+lap+'</span><span id="laptime">'+mpr+':'+spr+':'+mspr+'</span></div><div class="clear"></div>')
            
            msr=0;
            sr=0;
            mr=0;
           

        }
        else if(f==0){
            window.location.reload();
        }
    })
})
function time(){
            
    ms++;
    if(ms==100)
    {
        ms=0;
        s++;
    }
    if(s==60){
        s=0;
        m++;
    }
    msp=ms<10?'0'+ms:ms;
    sp=s<10?'0'+s:s;
    mp=m<10?'0'+m:m;
    $('#time').html(mp+':'+sp+':'+msp);
    
}
function timer(){
  
    
    msr++;
    if(msr==100)
    {
        msr=0;
        sr++;
    }
    if(sr==60){
        sr=0;
        mr++;
    }  
    mspr=msr<10?'0'+msr:msr;
    spr=sr<10?'0'+sr:sr;
    mpr=mr<10?'0'+mr:mr;
    $('#lap').html(mpr+':'+spr+':'+mspr);
    
    
}