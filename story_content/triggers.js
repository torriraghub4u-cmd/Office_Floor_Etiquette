function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5janRElihPM":
        Script1();
        break;
      case "6Bij8aATYtn":
        Script2();
        break;
      case "6mU2RsFeja8":
        Script3();
        break;
      case "63EslNxTyby":
        Script4();
        break;
      case "6XqWwq8GVzQ":
        Script5();
        break;
      case "6CSuRxf8jmC":
        Script6();
        break;
      case "6e4uxhx0bqI":
        Script7();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
var getKeyDown = player.getKeyDown;
var keydown = player.keydown;
var keyup = player.keyup;
window.Script1 = function()
{
  const target = object('5oFe9qMluAe');
const duration = 250;
const easing = 'ease-out';
const id = '5nP3FsqWU2Z';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script2 = function()
{
  const target = object('5oFe9qMluAe');
const duration = 250;
const easing = 'ease-out';
const id = '5nP3FsqWU2Z_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script3 = function()
{
  const target = object('6mTX0DkfLqN');
const duration = 250;
const easing = 'ease-out';
const id = '5nP3FsqWU2Z';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script4 = function()
{
  const target = object('6mTX0DkfLqN');
const duration = 250;
const easing = 'ease-out';
const id = '5nP3FsqWU2Z_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script5 = function()
{
  const target = object('6aqYRW7Pwn2');
const duration = 750;
const easing = 'ease-out';
const id = '5aCyg106KSo';
const teeterAmount = 4;
player.addForTriggers(
id,
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script6 = function()
{
  const target = object('5szx4DNCsjH');
const duration = 750;
const easing = 'ease-out';
const id = '6qpMA08hUhD';
const teeterAmount = 4;
player.addForTriggers(
id,
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

};
