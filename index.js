let assignedValues=[],gameStatus=true,i,cc,bestScores=[],levelValue,levelValue2,tempLevelValue;
let gradientValues=["3d004d","660080","8f00b3","cc00ff","e580ff","b3daff","80c1ff","4da9ff","0077e6","005cb3","004280","004d00","006600","009900","00b300","00cc00","00ff00","80ff80","b3ffb3","b3d1ff","66a3ff","3385ff","0066ff","0047b3","003380","800000","b30000","e60000","ff6666"];
let gradientValues2=["ff6666","ff4d4d","ff3333","cc0000","b30000","990000","800000","4d94ff","3385ff","1a75ff","0066ff","0052cc","003d99","80ff80","66ff66","00cc00","00b300","009900","008000"];
gradientCount=0;
let sw=document.querySelector(".num").offsetWidth;
let sw2=document.querySelector(".leftHiding").offsetWidth;
if(screen.width>=320&&screen.width<=1024)
{
  document.querySelector(".leftHiding").style.left="0px";
  document.querySelector(".rightHiding").style.right="0px";
  document.querySelector(".container").style.position="absolute";
  document.querySelector(".container").style.left=sw2+"px";

}
document.querySelectorAll(".b1")[1].style.width="0px";
document.querySelectorAll(".b1")[1].style.height="0px";
document.querySelectorAll(".b2")[1].style.width="0px";
document.querySelectorAll(".b2")[1].style.height="0px";
document.querySelectorAll(".b3")[1].style.width="0px";
document.querySelectorAll(".b3")[1].style.height="0px";
document.querySelectorAll(".b4")[1].style.width="0px";
document.querySelectorAll(".b4")[1].style.height="0px";
document.querySelectorAll(".b5")[1].style.width="0px";
document.querySelectorAll(".b5")[1].style.height="0px";
document.querySelectorAll(".b6")[1].style.width="0px";
document.querySelectorAll(".b6")[1].style.height="0px";
document.querySelectorAll(".b7")[1].style.width="0px";
document.querySelectorAll(".b7")[1].style.height="0px";
document.querySelectorAll(".b8")[1].style.width="0px";
document.querySelectorAll(".b8")[1].style.height="0px";
document.querySelectorAll(".b9")[1].style.width="0px";
document.querySelectorAll(".b9")[1].style.height="0px";
document.querySelectorAll(".b10")[1].style.width="0px";
document.querySelectorAll(".b10")[1].style.height="0px";
document.querySelectorAll(".b11")[1].style.width="0px";
document.querySelectorAll(".b11")[1].style.height="0px";
document.querySelectorAll(".b12")[1].style.width="0px";
document.querySelectorAll(".b12")[1].style.height="0px";
document.querySelectorAll(".b13")[1].style.width="0px";
document.querySelectorAll(".b13")[1].style.height="0px";
document.querySelectorAll(".b14")[1].style.width="0px";
document.querySelectorAll(".b14")[1].style.height="0px";
document.querySelectorAll(".b15")[1].style.width="0px";
document.querySelectorAll(".b15")[1].style.height="0px";
document.querySelectorAll(".b16")[1].style.width="0px";
document.querySelectorAll(".b16")[1].style.height="0px";
document.querySelectorAll(".b17")[1].style.width="0px";
document.querySelectorAll(".b17")[1].style.height="0px";
document.querySelectorAll(".b18")[1].style.width="0px";
document.querySelectorAll(".b18")[1].style.height="0px";
document.querySelectorAll(".b19")[1].style.width="0px";
document.querySelectorAll(".b19")[1].style.height="0px";
document.querySelectorAll(".b20")[1].style.width="0px";
document.querySelectorAll(".b20")[1].style.height="0px";
document.querySelectorAll(".b1")[1].style.opacity="0";
document.querySelectorAll(".b2")[1].style.opacity="0";
document.querySelectorAll(".b3")[1].style.opacity="0";
document.querySelectorAll(".b4")[1].style.opacity="0";
document.querySelectorAll(".b5")[1].style.opacity="0";
document.querySelectorAll(".b6")[1].style.opacity="0";
document.querySelectorAll(".b7")[1].style.opacity="0";
document.querySelectorAll(".b8")[1].style.opacity="0";
document.querySelectorAll(".b9")[1].style.opacity="0";
document.querySelectorAll(".b10")[1].style.opacity="0";
document.querySelectorAll(".b11")[1].style.opacity="0";
document.querySelectorAll(".b12")[1].style.opacity="0";
document.querySelectorAll(".b13")[1].style.opacity="0";
document.querySelectorAll(".b14")[1].style.opacity="0";
document.querySelectorAll(".b15")[1].style.opacity="0";
document.querySelectorAll(".b16")[1].style.opacity="0";
document.querySelectorAll(".b17")[1].style.opacity="0";
document.querySelectorAll(".b18")[1].style.opacity="0";
document.querySelectorAll(".b19")[1].style.opacity="0";
document.querySelectorAll(".b20")[1].style.opacity="0";
let conNode1,conNode2,conNode3,conNode4,conNode5,conNode6,conNode7,conNode8,conNode9,conNode10,conNode11,conNode12,conNode13,conNode14,conNode15,conNode16,conNode17,conNode18,conNode19,conNode20,conNode21,conNode22,conNode23,conNode24,conInterval,conInterval2,conInterval3,conInterval4,conFlag=1,conFlag2=1,conFlag3=1,conFlag4=1,conCount=0,conCount2=0,conCount3=1,conCount4=1,conTemp,conTemp2,conTemp3,conTemp4;
for(let w=0;w<5;w++)
{
  localStorage.setItem(bestScores[w],+(0));
}
document.querySelector("#ng").style.opacity="0.3";

document.querySelector(".lookControl").innerHTML="<br>choose the difficulty";
document.querySelector(".lookControl").addEventListener("click",function(){
  if(levelValue){
    audioObject1.play();
    setTimeout(function(){audioObject1.pause();audioObject1.load();},4000);

  setTimeout(function(){document.querySelector(".lookControl").innerHTML="<br><br>3";},0);
  setTimeout(function(){document.querySelector(".lookControl").innerHTML="<br><br>2";},1000);
  setTimeout(function(){document.querySelector(".lookControl").innerHTML="<br><br>1";},2000);
  setTimeout(function(){document.querySelector(".lookControl").innerHTML="";},3000);


  setTimeout(function(){document.querySelector(".lookControl").style.height="0";},3000);
  setTimeout(function(){document.querySelector(".lookControl").style.width="0";},3000);
  setTimeout(function(){timerObject.start();changePos();},3000);
}

});
document.querySelector("#ng").addEventListener("click",function(){



  for(let lll=1;lll<=20;lll++)
  {
    document.querySelectorAll(".b"+lll)[0].classList.remove("cover");
    document.querySelectorAll(".b"+lll)[1].classList.remove("cover");

  }
  for(let lll=1;lll<=20;lll++)
  {
    document.querySelectorAll(".b"+lll)[0].style.backgroundColor="#400082";
    document.querySelectorAll(".b"+lll)[1].style.backgroundColor="#400082";

  }

  if(count===(40+(levelValue-1)*20+1))
  {
    conCount=0,conCount2=0,conCoun3=0,conCoun4=0;

    for(let lll=1;lll<=20;lll++)
    {
      var old_element = document.querySelectorAll(".b"+lll)[0];
      var new_element = old_element.cloneNode(true);
      old_element.parentNode.replaceChild(new_element, old_element);
      var old_element3 = document.querySelectorAll(".b"+lll)[1];
      var new_element3 = old_element3.cloneNode(true);
      old_element3.parentNode.replaceChild(new_element3, old_element3);


    }


    document.querySelector("#l1").style.opacity="1.0";
    document.querySelector("#l2").style.opacity="1.0";
    document.querySelector("#l3").style.opacity="1.0";

    levelValue=0;
    for(let nnn=0;nnn<5;nnn++)
    {
      document.querySelector("#el"+(nnn+1)).textContent="";
    }
    timerObject.reset();
    document.querySelector(".lookControl").innerHTML="<br>choose the difficulty";
    if(screen.width>=320&&screen.width<=1024)
    {
      document.querySelector(".lookControl").style.width="500px";
      document.querySelector(".lookControl").style.height="400px";
    }
    else{
        setTimeout(function(){document.querySelector(".lookControl").style.height="400px";},0);
        setTimeout(function(){document.querySelector(".lookControl").style.width="500px";},0);
    }
  av();
  ae();
}

});


let xx,yy,ff,flag,bb,count=1;


function av()
{
  assignedValues.length=0;
  for(i=0;i<20;i++)
  {
    xx=(Math.floor(Math.random()*20)+1);
    if(!assignedValues.includes(xx))
    {
      assignedValues.push(xx);
      flag=0;
    }
    else{
      ff=1;
      while(ff)
      {
        yy=(Math.floor(Math.random()*20)+1);
        if(!assignedValues.includes(yy))
        {
          assignedValues.push(yy);
          ff=0;
        }
      }


    }
  }

  for(i=0;i<20;i++)
  {
    document.querySelectorAll(".b"+(i+1))[0].textContent=assignedValues[i];
    document.querySelectorAll(".b"+(i+1))[1].textContent=assignedValues[i];


  }
}

av();
ae();
function ae(){
count=1;
for(let j=1;j<=20;j++)
{

  document.querySelectorAll(".b"+j)[0].addEventListener("click",function(){

    cc=document.querySelectorAll(".b"+j)[0].textContent;
    if(cc==count)
    {
      audioObject2.play();
      //setTimeout(function(){audioObject2.pause();audioObject2.load();},1000);

      setTimeout(function(){document.querySelectorAll(".b"+j)[0].classList.add("tapped");document.querySelectorAll(".b"+j)[1].classList.add("tapped");},0);
      setTimeout(function(){document.querySelectorAll(".b"+j)[0].classList.remove("tapped");document.querySelectorAll(".b"+j)[1].classList.remove("tapped");},200);
      if(cc==1)
      {
        timerObject.start();
      }
      else if(cc==(40+(levelValue-1)*20))
      {
        timerObject.stop();


        if(screen.width>=320&&screen.width<=1024)
         {
            document.querySelector(".lookControl").style.width="500px";
            document.querySelector(".lookControl").style.height="400px";
          }
        else{
           setTimeout(function(){document.querySelector(".lookControl").style.height="400px";},0);

           setTimeout(function(){document.querySelector(".lookControl").style.width="500px";},0);
           }
          document.querySelector(".lookControl").innerHTML="<br>press new game to restart";
        if(localStorage.getItem(levelValue+"bt1")==null)
          {
          localStorage.setItem(levelValue+"bt1",document.querySelector(".timerSpan").textContent);

        }
        else if(localStorage.getItem(levelValue+"bt2")==null)
        {
          localStorage.setItem(levelValue+"bt2",document.querySelector(".timerSpan").textContent);
        }
        else if(localStorage.getItem(levelValue+"bt3")==null)
        {
          localStorage.setItem(levelValue+"bt3",document.querySelector(".timerSpan").textContent);
        }
        else if(localStorage.getItem(levelValue+"bt4")==null)
        {
          localStorage.setItem(levelValue+"bt4",document.querySelector(".timerSpan").textContent);
        }
        else if(localStorage.getItem(levelValue+"bt5")==null)
        {
          localStorage.setItem(levelValue+"bt5",document.querySelector(".timerSpan").textContent);
        }
        else if(localStorage.getItem(levelValue+"bt6")==null||localStorage.getItem(levelValue+"bt6")=="?")
        {

          localStorage.setItem(levelValue+"bt6",document.querySelector(".timerSpan").textContent);
        }
        if(localStorage.getItem(levelValue+"bt6")!=null||localStorage.getItem(levelValue+"bt6")=="?")
        {

          for(x1=1;x1<6;x1++)
          {
            for(x2=x1+1;x2<=6;x2++)
            {
              if(Number(localStorage.getItem(levelValue+"bt"+x2))<Number(localStorage.getItem(levelValue+"bt"+x1)))
              {
                temp=localStorage.getItem(levelValue+"bt"+x1);
                localStorage.setItem(levelValue+"bt"+x1,localStorage.getItem(levelValue+"bt"+x2));
                localStorage.setItem(levelValue+"bt"+x2,temp);
              }

            }
          }
          for(y1=1;y1<=5;y1++)
          {
            document.querySelector("#el"+y1).textContent=localStorage.getItem(levelValue+"bt"+y1);

          }
          localStorage.setItem(levelValue+"bt6","?");


        }
        else if(localStorage.getItem(levelValue+"bt5")!=null)
        {
          for(x1=1;x1<5;x1++)
          {
            for(x2=x1+1;x2<=5;x2++)
            {
              if(Number(localStorage.getItem(levelValue+"bt"+x2))<Number(localStorage.getItem(levelValue+"bt"+x1)))
              {
                temp=localStorage.getItem(levelValue+"bt"+x1);
                localStorage.setItem(levelValue+"bt"+x1,localStorage.getItem(levelValue+"bt"+x2));
                localStorage.setItem(levelValue+"bt"+x2,temp);
              }

            }
          }
          for(y1=1;y1<=5;y1++)
          {
            document.querySelector("#el"+y1).textContent=localStorage.getItem(levelValue+"bt"+y1);
          }



        }

        else if(localStorage.getItem(levelValue+"bt4")!=null)
        {
          for(x1=1;x1<4;x1++)
          {
            for(x2=x1+1;x2<=4;x2++)
            {
              if(Number(localStorage.getItem(levelValue+"bt"+x2))<Number(localStorage.getItem(levelValue+"bt"+x1)))
              {
                temp=localStorage.getItem(levelValue+"bt"+x1);
                localStorage.setItem(levelValue+"bt"+x1,localStorage.getItem(levelValue+"bt"+x2));
                localStorage.setItem(levelValue+"bt"+x2,temp);
              }

            }
          }
          for(y1=1;y1<=4;y1++)
          {
            document.querySelector("#el"+y1).textContent=localStorage.getItem(levelValue+"bt"+y1);
          }



        }

        else if(localStorage.getItem(levelValue+"bt3")!=null)
        {
          for(x1=1;x1<3;x1++)
          {
            for(x2=x1+1;x2<=3;x2++)
            {
              if(Number(localStorage.getItem(levelValue+"bt"+x2))<Number(localStorage.getItem(levelValue+"bt"+x1)))
              {
                temp=localStorage.getItem(levelValue+"bt"+x1);
                localStorage.setItem(levelValue+"bt"+x1,localStorage.getItem(levelValue+"bt"+x2));
                localStorage.setItem(levelValue+"bt"+x2,temp);
              }

            }
          }
          for(y1=1;y1<=3;y1++)
          {
            document.querySelector("#el"+y1).textContent=localStorage.getItem(levelValue+"bt"+y1);
          }



        }
        else if(localStorage.getItem(levelValue+"bt2")!=null)
        {
          for(x1=1;x1<2;x1++)
          {
            for(x2=x1+1;x2<=2;x2++)
            {
              if(Number(localStorage.getItem(levelValue+"bt"+x2))<Number(localStorage.getItem(levelValue+"bt"+x1)))
              {
                temp=localStorage.getItem(levelValue+"bt"+x1);
                localStorage.setItem(levelValue+"bt"+x1,localStorage.getItem(levelValue+"bt"+x2));
                localStorage.setItem(levelValue+"bt"+x2,temp);
              }

            }
          }
          for(y1=1;y1<=2;y1++)
          {
            document.querySelector("#el"+y1).textContent=localStorage.getItem(levelValue+"bt"+y1);
          }



        }
        else if(localStorage.getItem(levelValue+"bt1")!=null)
        {

          for(y1=1;y1<=1;y1++)
          {
            document.querySelector("#el"+y1).textContent=localStorage.getItem(levelValue+"bt"+y1);
          }



        }


        document.querySelector("#ng").style.opacity="1.00";




      }
    if(cc<=(20*levelValue))
    {
      setTimeout(function(){document.querySelectorAll(".b"+j)[0].textContent=(+cc)+(+20);document.querySelectorAll(".b"+j)[1].textContent=(+cc)+(+20);},200);
      document.querySelectorAll(".b"+j)[0].style.background="#"+gradientValues2[gradientCount];
      document.querySelectorAll(".b"+j)[1].style.background="#"+gradientValues2[gradientCount];

      gradientCount++;
      if(gradientCount==gradientValues2.length)
      {
        gradientCount=0;
      }
    }
    else{
      document.querySelectorAll(".b"+j)[0].classList.add("cover");
      document.querySelectorAll(".b"+j)[1].classList.add("cover");

    }

    count++;
    }
    else{
      audioObject3.play();
      document.querySelectorAll(".b"+j)[0].classList.add("wronged");
      document.querySelectorAll(".b"+j)[1].classList.add("wronged");

      setTimeout(function(){document.querySelectorAll(".b"+j)[0].classList.remove("wronged");document.querySelectorAll(".b"+j)[1].classList.remove("wronged");},200)
      //setTimeout(function(){audioObject3.pause();audioObject3.load();},500);

    }

  });
  document.querySelectorAll(".b"+j)[1].addEventListener("click",function(){

    cc=document.querySelectorAll(".b"+j)[1].textContent;
    if(cc==count)
    {
      audioObject2.play();
      //setTimeout(function(){audioObject2.pause();audioObject2.load();},1000);

      setTimeout(function(){document.querySelectorAll(".b"+j)[0].classList.add("tapped");document.querySelectorAll(".b"+j)[1].classList.add("tapped");},0);
      setTimeout(function(){document.querySelectorAll(".b"+j)[0].classList.remove("tapped");document.querySelectorAll(".b"+j)[1].classList.remove("tapped");},200);
      if(cc==1)
      {
        timerObject.start();
      }
      else if(cc==(40+(levelValue-1)*20))
      {
        timerObject.stop();
        if(screen.width>=320&&screen.width<=1024)
         {
            document.querySelector(".lookControl").style.width="500px";
            document.querySelector(".lookControl").style.height="400px";
          }
        else{
           setTimeout(function(){document.querySelector(".lookControl").style.height="400px";},0);

           setTimeout(function(){document.querySelector(".lookControl").style.width="500px";},0);
           }
          document.querySelector(".lookControl").innerHTML="<br>press new game to restart";
        if(localStorage.getItem(levelValue+"bt1")==null)
          {
          localStorage.setItem(levelValue+"bt1",document.querySelector(".timerSpan").textContent);

        }
        else if(localStorage.getItem(levelValue+"bt2")==null)
        {
          localStorage.setItem(levelValue+"bt2",document.querySelector(".timerSpan").textContent);
        }
        else if(localStorage.getItem(levelValue+"bt3")==null)
        {
          localStorage.setItem(levelValue+"bt3",document.querySelector(".timerSpan").textContent);
        }
        else if(localStorage.getItem(levelValue+"bt4")==null)
        {
          localStorage.setItem(levelValue+"bt4",document.querySelector(".timerSpan").textContent);
        }
        else if(localStorage.getItem(levelValue+"bt5")==null)
        {
          localStorage.setItem(levelValue+"bt5",document.querySelector(".timerSpan").textContent);
        }
        else if(localStorage.getItem(levelValue+"bt6")==null||localStorage.getItem(levelValue+"bt6")=="?")
        {

          localStorage.setItem(levelValue+"bt6",document.querySelector(".timerSpan").textContent);
        }
        if(localStorage.getItem(levelValue+"bt6")!=null||localStorage.getItem(levelValue+"bt6")=="?")
        {

          for(x1=1;x1<6;x1++)
          {
            for(x2=x1+1;x2<=6;x2++)
            {
              if(Number(localStorage.getItem(levelValue+"bt"+x2))<Number(localStorage.getItem(levelValue+"bt"+x1)))
              {
                temp=localStorage.getItem(levelValue+"bt"+x1);
                localStorage.setItem(levelValue+"bt"+x1,localStorage.getItem(levelValue+"bt"+x2));
                localStorage.setItem(levelValue+"bt"+x2,temp);
              }

            }
          }
          for(y1=1;y1<=5;y1++)
          {
            document.querySelector("#el"+y1).textContent=localStorage.getItem(levelValue+"bt"+y1);

          }
          localStorage.setItem(levelValue+"bt6","?");


        }
        else if(localStorage.getItem(levelValue+"bt5")!=null)
        {
          for(x1=1;x1<5;x1++)
          {
            for(x2=x1+1;x2<=5;x2++)
            {
              if(Number(localStorage.getItem(levelValue+"bt"+x2))<Number(localStorage.getItem(levelValue+"bt"+x1)))
              {
                temp=localStorage.getItem(levelValue+"bt"+x1);
                localStorage.setItem(levelValue+"bt"+x1,localStorage.getItem(levelValue+"bt"+x2));
                localStorage.setItem(levelValue+"bt"+x2,temp);
              }

            }
          }
          for(y1=1;y1<=5;y1++)
          {
            document.querySelector("#el"+y1).textContent=localStorage.getItem(levelValue+"bt"+y1);
          }



        }

        else if(localStorage.getItem(levelValue+"bt4")!=null)
        {
          for(x1=1;x1<4;x1++)
          {
            for(x2=x1+1;x2<=4;x2++)
            {
              if(Number(localStorage.getItem(levelValue+"bt"+x2))<Number(localStorage.getItem(levelValue+"bt"+x1)))
              {
                temp=localStorage.getItem(levelValue+"bt"+x1);
                localStorage.setItem(levelValue+"bt"+x1,localStorage.getItem(levelValue+"bt"+x2));
                localStorage.setItem(levelValue+"bt"+x2,temp);
              }

            }
          }
          for(y1=1;y1<=4;y1++)
          {
            document.querySelector("#el"+y1).textContent=localStorage.getItem(levelValue+"bt"+y1);
          }



        }

        else if(localStorage.getItem(levelValue+"bt3")!=null)
        {
          for(x1=1;x1<3;x1++)
          {
            for(x2=x1+1;x2<=3;x2++)
            {
              if(Number(localStorage.getItem(levelValue+"bt"+x2))<Number(localStorage.getItem(levelValue+"bt"+x1)))
              {
                temp=localStorage.getItem(levelValue+"bt"+x1);
                localStorage.setItem(levelValue+"bt"+x1,localStorage.getItem(levelValue+"bt"+x2));
                localStorage.setItem(levelValue+"bt"+x2,temp);
              }

            }
          }
          for(y1=1;y1<=3;y1++)
          {
            document.querySelector("#el"+y1).textContent=localStorage.getItem(levelValue+"bt"+y1);
          }



        }
        else if(localStorage.getItem(levelValue+"bt2")!=null)
        {
          for(x1=1;x1<2;x1++)
          {
            for(x2=x1+1;x2<=2;x2++)
            {
              if(Number(localStorage.getItem(levelValue+"bt"+x2))<Number(localStorage.getItem(levelValue+"bt"+x1)))
              {
                temp=localStorage.getItem(levelValue+"bt"+x1);
                localStorage.setItem(levelValue+"bt"+x1,localStorage.getItem(levelValue+"bt"+x2));
                localStorage.setItem(levelValue+"bt"+x2,temp);
              }

            }
          }
          for(y1=1;y1<=2;y1++)
          {
            document.querySelector("#el"+y1).textContent=localStorage.getItem(levelValue+"bt"+y1);
          }



        }
        else if(localStorage.getItem(levelValue+"bt1")!=null)
        {

          for(y1=1;y1<=1;y1++)
          {
            document.querySelector("#el"+y1).textContent=localStorage.getItem(levelValue+"bt"+y1);
          }



        }


        document.querySelector("#ng").style.opacity="1.00";

        clearInterval(conInterval);clearInterval(conInterval2);clearInterval(conInterval3);clearInterval(conInterval4);






      }
    if(cc<=(20*levelValue))
    {
      setTimeout(function(){document.querySelectorAll(".b"+j)[0].textContent=(+cc)+(+20);document.querySelectorAll(".b"+j)[1].textContent=(+cc)+(+20);},200);
      document.querySelectorAll(".b"+j)[0].style.background="#"+gradientValues2[gradientCount];
      document.querySelectorAll(".b"+j)[1].style.background="#"+gradientValues2[gradientCount];

      gradientCount++;
      if(gradientCount==gradientValues2.length)
      {
        gradientCount=0;
      }
    }
    else{
      document.querySelectorAll(".b"+j)[0].classList.add("cover");
      document.querySelectorAll(".b"+j)[1].classList.add("cover");

    }

    count++;
    }
    else{
      audioObject3.play();
      document.querySelectorAll(".b"+j)[0].classList.add("wronged");
      document.querySelectorAll(".b"+j)[1].classList.add("wronged");

      setTimeout(function(){document.querySelectorAll(".b"+j)[0].classList.remove("wronged");document.querySelectorAll(".b"+j)[1].classList.remove("wronged");},200)
      //setTimeout(function(){audioObject3.pause();audioObject3.load();},500);

    }

  });
}
}
var Stopwatch = function(elem, options) {

  var timer       = createTimer(),
      offset,
      clock,
      interval;
  options = options || {};
  options.delay = options.delay || 1;
  elem.appendChild(timer);
  reset();
  timer.classList.add("timerSpan");
  function createTimer() {
    return document.createElement("span");
  }



  function start() {
    if (!interval) {
      offset   = Date.now();
      interval = setInterval(update,1);
    }
  }

  function stop() {
    if (interval) {
      clearInterval(interval);
      interval = null;
    }
  }

  function reset() {
    clock = 0;
    render(0);
  }

  function update() {
    clock +=delta();
    render();
  }

  function render() {
    timer.innerHTML = clock/1000;
  }

  function delta() {
    var now = Date.now(),
        d   = now - offset;

    offset = now;
    return d;
  }
  this.start  = start;
  this.stop   = stop;
  this.reset  = reset;
};
let timerObject=new Stopwatch(document.querySelector(".timerr"));
let audioObject1=new Audio("audioFiles/audio1.mp3");
let audioObject2=new Audio("audioFiles/new1.mp3");
let audioObject3=new Audio("audioFiles/metallic.mp3");

document.querySelector("#l1").addEventListener("click",function(){
  document.querySelector("#l1").classList.add("tapped");
  setTimeout(function(){document.querySelector("#l1").classList.remove("tapped");},200);
  if(count===1)
  {
    if(!levelValue)
    {
      levelValue=1;
      document.querySelector("#l1").classList.add("tapped");
      setTimeout(function(){document.querySelector("#l1").classList.remove("tapped");},200);
      document.querySelector(".lookControl").innerHTML="<br><br>click to start";
      document.querySelector("#l2").style.opacity="0.3";
      document.querySelector("#l3").style.opacity="0.3";
    }
  }
});
document.querySelector("#l2").addEventListener("click",function(){
  document.querySelector("#l2").classList.add("tapped");

  setTimeout(function(){document.querySelector("#l2").classList.remove("tapped");},200);

  if(count===1)
  {
    if(!levelValue)
    {
      levelValue=2;
      document.querySelector("#l1").classList.add("tapped");
      setTimeout(function(){document.querySelector("#l1").classList.remove("tapped");},200);
      document.querySelector(".lookControl").innerHTML="<br><br>click to start";
      document.querySelector("#l1").style.opacity="0.3";
      document.querySelector("#l3").style.opacity="0.3";
    }
  }
});
document.querySelector("#l3").addEventListener("click",function(){
  document.querySelector("#l3").classList.add("tapped");

  setTimeout(function(){document.querySelector("#l3").classList.remove("tapped");},200);

  if(count===1)
  {
    if(!levelValue)
    {
      levelValue=3;
      document.querySelector("#l1").classList.add("tapped");
      setTimeout(function(){document.querySelector("#l1").classList.remove("tapped");},200);
      document.querySelector(".lookControl").innerHTML="<br><br>click to start";
      document.querySelector("#l2").style.opacity="0.3";
      document.querySelector("#l1").style.opacity="0.3";
    }
  }
});
function changePos(){
if(screen.width>1024){
  conNode1=document.querySelectorAll(".b1")[0];
  conNode2=document.querySelectorAll(".b2")[0];
  conNode3=document.querySelectorAll(".b3")[0];
  conNode4=document.querySelectorAll(".b4")[0];
  conNode5=document.querySelectorAll(".b5")[0];
  conNode21=document.createElement("button");
  document.querySelector(".container").appendChild(conNode21);
  conNode21.classList.add("num");
  conNode1.style.top="0px";
  conNode1.style.right="400px";
  conNode2.style.top="0px";
  conNode2.style.right="300px";
  conNode3.style.top="0px";
  conNode3.style.right="200px";
  conNode4.style.top="0px";
  conNode4.style.right="100px";
  conNode5.style.top="0px";
  conNode5.style.right="0px";
  conNode21.style.top="0px";
  conNode21.style.right="-100px";
  conInterval=setInterval(function(){
    conCount++;
    conNode1.style.right=400+conCount*1+"px";
    conNode2.style.right=300+conCount*1+"px";
    conNode3.style.right=200+conCount*1+"px";
    conNode4.style.right=100+conCount*1+"px";
    conNode5.style.right=0+conCount*1+"px";
    conNode21.style.right=-100+conCount*1+"px";
    if(Number(conNode1.style.right.slice(0,3))>=400&&conFlag==1)
    {
      conFlag=2;
      /*conTemp=conNode6;
      document.querySelector(".container").removeChild(conTemp);
      conNode6=conNode1.cloneNode(true);
      document.querySelector(".container").appendChild(conNode6);*/
      conNode21.style.height="0px";
      conNode21.style.width="0px";
      conNode21.style.opacity="0";
      conClass=conNode1.classList[1];
      document.querySelectorAll("."+conClass)[1].style.height="100px";
      document.querySelectorAll("."+conClass)[1].style.width="100px";
      document.querySelectorAll("."+conClass)[1].style.opacity="1";

      conNode21=document.querySelectorAll("."+conClass)[1];
      conNode21.style.top="0px";






    }

    if(Number(conNode1.style.right.slice(0,3))>=500)
    {
      conFlag=1;
      conTemp=conNode1;
      conNode1=conNode2;
      conNode2=conNode3;
      conNode3=conNode4;
      conNode4=conNode5;
      conNode5=conTemp;
      conCount=0;

    }
    if(count==40+(levelValue-1)*20)
    {
      clearInterval(conInterval);
    }



  },10);
  conNode6=document.querySelectorAll(".b6")[0];
  conNode7=document.querySelectorAll(".b7")[0];
  conNode8=document.querySelectorAll(".b8")[0];
  conNode9=document.querySelectorAll(".b9")[0];
  conNode10=document.querySelectorAll(".b10")[0];
  conNode22=document.createElement("button");
  document.querySelector(".container").appendChild(conNode22);
  conNode22.classList.add("num");
  conNode6.style.top="100px";
  conNode6.style.left="0px";
  conNode7.style.top="100px";
  conNode7.style.left="100px";
  conNode8.style.top="100px";
  conNode8.style.left="200px";
  conNode9.style.top="100px";
  conNode9.style.left="300px";
  conNode10.style.top="100px";
  conNode10.style.left="400px";
  conNode22.style.top="100px";
  conNode22.style.left="-100px";
  conInterval2=setInterval(function(){
    conNode6.style.top="100px";

    conNode7.style.top="100px";

    conNode8.style.top="100px";

    conNode9.style.top="100px";

    conNode10.style.top="100px";

    conNode22.style.top="100px";


    conCount2++;
    conNode10.style.left=400+conCount2*1+"px";
    conNode9.style.left=300+conCount2*1+"px";
    conNode8.style.left=200+conCount2*1+"px";
    conNode7.style.left=100+conCount2*1+"px";
    conNode6.style.left=0+conCount2*1+"px";
    conNode22.style.left=-100+conCount2*1+"px";
    if(Number(conNode10.style.left.slice(0,3))>=400&&conFlag2==1)
    {
      conFlag2=2;
      /*conTemp=conNode6;
      document.querySelector(".container").removeChild(conTemp);
      conNode6=conNode1.cloneNode(true);
      document.querySelector(".container").appendChild(conNode6);*/
      conNode22.style.height="0px";
      conNode22.style.width="0px";
      conNode22.style.opacity="0";
      conClass2=conNode10.classList[1];
      document.querySelectorAll("."+conClass2)[1].style.height="100px";
      document.querySelectorAll("."+conClass2)[1].style.width="100px";
      document.querySelectorAll("."+conClass2)[1].style.opacity="1";

      conNode22=document.querySelectorAll("."+conClass2)[1];
      conNode22.style.top="0px";






    }

    if(Number(conNode10.style.left.slice(0,3))>=500)
    {
      conFlag2=1;
      conTemp2=conNode10;
      conNode10=conNode9;
      conNode9=conNode8;
      conNode8=conNode7;
      conNode7=conNode6;
      conNode6=conTemp2;
      conCount2=0;

    }
    if(count==40+(levelValue-1)*20+1)
    {
      clearInterval(conInterval2);
    }



  },10);

  conNode11=document.querySelectorAll(".b11")[0];
  conNode12=document.querySelectorAll(".b12")[0];
  conNode13=document.querySelectorAll(".b13")[0];
  conNode14=document.querySelectorAll(".b14")[0];
  conNode15=document.querySelectorAll(".b15")[0];
  conNode23=document.createElement("button");
  document.querySelector(".container").appendChild(conNode23);
  conNode23.classList.add("num");
  conNode11.style.top="0px";
  conNode11.style.right="400px";
  conNode12.style.top="0px";
  conNode12.style.right="300px";
  conNode13.style.top="0px";
  conNode13.style.right="200px";
  conNode14.style.top="0px";
  conNode14.style.right="100px";
  conNode15.style.top="0px";
  conNode15.style.right="0px";
  conNode23.style.top="0px";
  conNode23.style.right="-100px";
  conInterval3=setInterval(function(){

    conNode11.style.top="200px";

    conNode12.style.top="200px";

    conNode13.style.top="200px";

    conNode14.style.top="200px";

    conNode15.style.top="200px";

    conNode23.style.top="200px";

    conCount3++;
    conNode11.style.right=400+conCount3*1+"px";
    conNode12.style.right=300+conCount3*1+"px";
    conNode13.style.right=200+conCount3*1+"px";
    conNode14.style.right=100+conCount3*1+"px";
    conNode15.style.right=0+conCount3*1+"px";
    conNode23.style.right=-100+conCount3*1+"px";
    if(Number(conNode11.style.right.slice(0,3))>=400&&conFlag3==1)
    {
      conFlag3=2;
      /*conTemp=conNode6;
      document.querySelector(".container").removeChild(conTemp);
      conNode6=conNode1.cloneNode(true);
      document.querySelector(".container").appendChild(conNode6);*/
      conNode23.style.height="0px";
      conNode23.style.width="0px";
      conNode23.style.opacity="0";
      conClass3=conNode11.classList[1];
      document.querySelectorAll("."+conClass3)[1].style.height="100px";
      document.querySelectorAll("."+conClass3)[1].style.width="100px";
      document.querySelectorAll("."+conClass3)[1].style.opacity="1";

      conNode23=document.querySelectorAll("."+conClass3)[1];
      conNode23.style.top="0px";






    }

    if(Number(conNode11.style.right.slice(0,3))>=500)
    {
      conFlag3=1;
      conTemp3=conNode11;
      conNode11=conNode12;
      conNode12=conNode13;
      conNode13=conNode14;
      conNode14=conNode15;
      conNode15=conTemp3;
      conCount3=0;

    }
    if(count==40+(levelValue-1)*20+1)
    {
      clearInterval(conInterval3);
    }



  },10);

  conNode16=document.querySelectorAll(".b16")[0];
  conNode17=document.querySelectorAll(".b17")[0];
  conNode18=document.querySelectorAll(".b18")[0];
  conNode19=document.querySelectorAll(".b19")[0];
  conNode20=document.querySelectorAll(".b20")[0];
  conNode24=document.createElement("button");
  document.querySelector(".container").appendChild(conNode24);
  conNode24.classList.add("num");
  conNode16.style.top="300px";
  conNode16.style.left="0px";
  conNode17.style.top="300px";
  conNode17.style.left="100px";
  conNode18.style.top="300px";
  conNode18.style.left="200px";
  conNode19.style.top="300px";
  conNode19.style.left="300px";
  conNode20.style.top="300px";
  conNode20.style.left="400px";
  conNode24.style.top="300px";
  conNode24.style.left="-100px";
  conInterval4=setInterval(function(){
    conNode16.style.top="300px";

    conNode17.style.top="300px";

    conNode18.style.top="300px";

    conNode19.style.top="300px";

    conNode20.style.top="300px";

    conNode24.style.top="300px";


    conCount4++;
    conNode20.style.left=400+conCount4*1+"px";
    conNode19.style.left=300+conCount4*1+"px";
    conNode18.style.left=200+conCount4*1+"px";
    conNode17.style.left=100+conCount4*1+"px";
    conNode16.style.left=0+conCount4*1+"px";
    conNode24.style.left=-100+conCount4*1+"px";
    if(Number(conNode20.style.left.slice(0,3))>=400&&conFlag4==1)
    {
      conFlag4=2;
      /*conTemp=conNode6;
      document.querySelector(".container").removeChild(conTemp);
      conNode6=conNode1.cloneNode(true);
      document.querySelector(".container").appendChild(conNode6);*/
      conNode24.style.height="0px";
      conNode24.style.width="0px";
      conNode24.style.opacity="0";
      conClass4=conNode20.classList[1];
      document.querySelectorAll("."+conClass4)[1].style.height="100px";
      document.querySelectorAll("."+conClass4)[1].style.width="100px";
      document.querySelectorAll("."+conClass4)[1].style.opacity="1";

      conNode24=document.querySelectorAll("."+conClass4)[1];
      conNode24.style.top="0px";






    }

    if(Number(conNode20.style.left.slice(0,3))>=500)
    {
      conFlag4=1;
      conTemp4=conNode20;
      conNode20=conNode19;
      conNode19=conNode18;
      conNode18=conNode17;
      conNode17=conNode16;
      conNode16=conTemp4;
      conCount4=0;

    }
    if(count==(40+(levelValue-1)*20+1))
    {
      clearInterval(conInterval4);
    }



  },10);

}

  if(screen.width<=1024&&screen.width>=320)
  {

      document.querySelector(".leftHiding").style.left="0px";
      document.querySelector(".rightHiding").style.right="0px";
      document.querySelector(".container").style.position="absolute";
      document.querySelector(".container").style.left=sw2+"px";



    conNode1=document.querySelectorAll(".b1")[0];
    conNode2=document.querySelectorAll(".b2")[0];
    conNode3=document.querySelectorAll(".b3")[0];
    conNode4=document.querySelectorAll(".b4")[0];
    conNode5=document.querySelectorAll(".b5")[0];
    conNode21=document.createElement("button");
    document.querySelector(".container").appendChild(conNode21);
    conNode21.classList.add("num");
    conNode1.style.top="0px";
    conNode1.style.right=sw*4+"px";
    conNode2.style.top="0px";
    conNode2.style.right=sw*3+"px";
    conNode3.style.top="0px";
    conNode3.style.right=sw*2+"px";
    conNode4.style.top="0px";
    conNode4.style.right=sw*1+"px";
    conNode5.style.top="0px";
    conNode5.style.right="0px";
    conNode21.style.top="0px";
    conNode21.style.right=-sw+"px";
    conInterval=setInterval(function(){
      conCount++;
      conNode1.style.right=sw*4+conCount*1+"px";
      conNode2.style.right=sw*3+conCount*1+"px";
      conNode3.style.right=sw*2+conCount*1+"px";
      conNode4.style.right=sw+conCount*1+"px";
      conNode5.style.right=0+conCount*1+"px";
      conNode21.style.right=-sw+conCount*1+"px";
      if(Number(conNode1.style.right.slice(0,3))>=sw*4&&conFlag==1)
      {
        conFlag=2;
        /*conTemp=conNode6;
        document.querySelector(".container").removeChild(conTemp);
        conNode6=conNode1.cloneNode(true);
        document.querySelector(".container").appendChild(conNode6);*/
        conNode21.style.height="0px";
        conNode21.style.width="0px";
        conNode21.style.opacity="0";
        conClass=conNode1.classList[1];
        document.querySelectorAll("."+conClass)[1].style.height="200px";
        document.querySelectorAll("."+conClass)[1].style.width="13%";
        document.querySelectorAll("."+conClass)[1].style.opacity="1";

        conNode21=document.querySelectorAll("."+conClass)[1];
        conNode21.style.top="0px";






      }

      if(Number(conNode1.style.right.slice(0,3))>=sw*5)
      {
        conFlag=1;
        conTemp=conNode1;
        conNode1=conNode2;
        conNode2=conNode3;
        conNode3=conNode4;
        conNode4=conNode5;
        conNode5=conTemp;
        conCount=0;

      }
      if(count==40+(levelValue-1)*20)
      {
        clearInterval(conInterval);
      }



    },10);
    conNode6=document.querySelectorAll(".b6")[0];
    conNode7=document.querySelectorAll(".b7")[0];
    conNode8=document.querySelectorAll(".b8")[0];
    conNode9=document.querySelectorAll(".b9")[0];
    conNode10=document.querySelectorAll(".b10")[0];
    conNode22=document.createElement("button");
    document.querySelector(".container").appendChild(conNode22);
    conNode22.classList.add("num");
    conNode6.style.top="200px";
    conNode6.style.left="0px";
    conNode7.style.top="200px";
    conNode7.style.left=sw+"px";
    conNode8.style.top="200px";
    conNode8.style.left=sw*2+"px";
    conNode9.style.top="200px";
    conNode9.style.left=sw*3+"px";
    conNode10.style.top="200px";
    conNode10.style.left=sw*4+"px";
    conNode22.style.top="200px";
    conNode22.style.left=-sw+"px";
    conInterval2=setInterval(function(){
      conNode6.style.top="200px";

      conNode7.style.top="200px";

      conNode8.style.top="200px";

      conNode9.style.top="200px";

      conNode10.style.top="200px";

      conNode22.style.top="200px";


      conCount2++;
      conNode10.style.left=sw*4+conCount2*1+"px";
      conNode9.style.left=sw*3+conCount2*1+"px";
      conNode8.style.left=sw*2+conCount2*1+"px";
      conNode7.style.left=sw+conCount2*1+"px";
      conNode6.style.left=0+conCount2*1+"px";
      conNode22.style.left=-sw+conCount2*1+"px";
      if(Number(conNode10.style.left.slice(0,3))>=sw*4&&conFlag2==1)
      {
        conFlag2=2;
        /*conTemp=conNode6;
        document.querySelector(".container").removeChild(conTemp);
        conNode6=conNode1.cloneNode(true);
        document.querySelector(".container").appendChild(conNode6);*/
        conNode22.style.height="0px";
        conNode22.style.width="0px";
        conNode22.style.opacity="0";
        conClass2=conNode10.classList[1];
        document.querySelectorAll("."+conClass2)[1].style.height="200px";
        document.querySelectorAll("."+conClass2)[1].style.width="13%";
        document.querySelectorAll("."+conClass2)[1].style.opacity="1";

        conNode22=document.querySelectorAll("."+conClass2)[1];
        conNode22.style.top="0px";






      }

      if(Number(conNode10.style.left.slice(0,3))>=sw*5)
      {
        conFlag2=1;
        conTemp2=conNode10;
        conNode10=conNode9;
        conNode9=conNode8;
        conNode8=conNode7;
        conNode7=conNode6;
        conNode6=conTemp2;
        conCount2=0;

      }
      if(count==40+(levelValue-1)*20+1)
      {
        clearInterval(conInterval2);
      }



    },10);

    conNode11=document.querySelectorAll(".b11")[0];
    conNode12=document.querySelectorAll(".b12")[0];
    conNode13=document.querySelectorAll(".b13")[0];
    conNode14=document.querySelectorAll(".b14")[0];
    conNode15=document.querySelectorAll(".b15")[0];
    conNode23=document.createElement("button");
    document.querySelector(".container").appendChild(conNode23);
    conNode23.classList.add("num");
    conNode11.style.top="400px";
    conNode11.style.right=sw*4+"px";
    conNode12.style.top="400px";
    conNode12.style.right=sw*3+"px";
    conNode13.style.top="400px";
    conNode13.style.right=sw*2+"px";
    conNode14.style.top="400px";
    conNode14.style.right=sw+"px";
    conNode15.style.top="400px";
    conNode15.style.right="0px";
    conNode23.style.top="400px";
    conNode23.style.right=-sw+"px";
    conInterval3=setInterval(function(){

      conNode11.style.top="400px";

      conNode12.style.top="400px";

      conNode13.style.top="400px";

      conNode14.style.top="400px";

      conNode15.style.top="400px";

      conNode23.style.top="400px";

      conCount3++;
      conNode11.style.right=sw*4+conCount3*1+"px";
      conNode12.style.right=sw*3+conCount3*1+"px";
      conNode13.style.right=sw*2+conCount3*1+"px";
      conNode14.style.right=sw+conCount3*1+"px";
      conNode15.style.right=0+conCount3*1+"px";
      conNode23.style.right=-sw+conCount3*1+"px";
      if(Number(conNode11.style.right.slice(0,3))>=sw*4&&conFlag3==1)
      {
        conFlag3=2;
        /*conTemp=conNode6;
        document.querySelector(".container").removeChild(conTemp);
        conNode6=conNode1.cloneNode(true);
        document.querySelector(".container").appendChild(conNode6);*/
        conNode23.style.height="0px";
        conNode23.style.width="0px";
        conNode23.style.opacity="0";
        conClass3=conNode11.classList[1];
        document.querySelectorAll("."+conClass3)[1].style.height="200px";
        document.querySelectorAll("."+conClass3)[1].style.width="13%";
        document.querySelectorAll("."+conClass3)[1].style.opacity="1";

        conNode23=document.querySelectorAll("."+conClass3)[1];
        conNode23.style.top="0px";






      }

      if(Number(conNode11.style.right.slice(0,3))>=sw*5)
      {
        conFlag3=1;
        conTemp3=conNode11;
        conNode11=conNode12;
        conNode12=conNode13;
        conNode13=conNode14;
        conNode14=conNode15;
        conNode15=conTemp3;
        conCount3=0;

      }
      if(count==40+(levelValue-1)*20+1)
      {
        clearInterval(conInterval3);
      }



    },10);

    conNode16=document.querySelectorAll(".b16")[0];
    conNode17=document.querySelectorAll(".b17")[0];
    conNode18=document.querySelectorAll(".b18")[0];
    conNode19=document.querySelectorAll(".b19")[0];
    conNode20=document.querySelectorAll(".b20")[0];
    conNode24=document.createElement("button");
    document.querySelector(".container").appendChild(conNode24);
    conNode24.classList.add("num");
    conNode16.style.top="600px";
    conNode16.style.left="0px";
    conNode17.style.top="600px";
    conNode17.style.left=sw+"px";
    conNode18.style.top="600px";
    conNode18.style.left=sw*2+"px";
    conNode19.style.top="600px";
    conNode19.style.left=sw*3+"px";
    conNode20.style.top="600px";
    conNode20.style.left=sw*4+"px";
    conNode24.style.top="600px";
    conNode24.style.left=-sw+"px";
    conInterval4=setInterval(function(){
      conNode16.style.top="600px";

      conNode17.style.top="600px";

      conNode18.style.top="600px";

      conNode19.style.top="600px";

      conNode20.style.top="600px";

      conNode24.style.top="600px";


      conCount4++;
      conNode20.style.left=sw*4+conCount4*1+"px";
      conNode19.style.left=sw*3+conCount4*1+"px";
      conNode18.style.left=sw*2+conCount4*1+"px";
      conNode17.style.left=sw+conCount4*1+"px";
      conNode16.style.left=0+conCount4*1+"px";
      conNode24.style.left=-sw+conCount4*1+"px";
      if(Number(conNode20.style.left.slice(0,3))>=sw*4&&conFlag4==1)
      {
        conFlag4=2;
        /*conTemp=conNode6;
        document.querySelector(".container").removeChild(conTemp);
        conNode6=conNode1.cloneNode(true);
        document.querySelector(".container").appendChild(conNode6);*/
        conNode24.style.height="0px";
        conNode24.style.width="0px";
        conNode24.style.opacity="0";
        conClass4=conNode20.classList[1];
        document.querySelectorAll("."+conClass4)[1].style.height="200px";
        document.querySelectorAll("."+conClass4)[1].style.width="13%";
        document.querySelectorAll("."+conClass4)[1].style.opacity="1";

        conNode24=document.querySelectorAll("."+conClass4)[1];
        conNode24.style.top="0px";






      }

      if(Number(conNode20.style.left.slice(0,3))>=sw*5)
      {
        conFlag4=1;
        conTemp4=conNode20;
        conNode20=conNode19;
        conNode19=conNode18;
        conNode18=conNode17;
        conNode17=conNode16;
        conNode16=conTemp4;
        conCount4=0;

      }
      if(count==(40+(levelValue-1)*20+1))
      {
        clearInterval(conInterval4);
      }



    },10);


  }



}
