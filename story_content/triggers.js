function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6V8URSnMD0h":
        Script1();
        break;
      case "6IqfpvUMzG0":
        Script2();
        break;
      case "6drJTFWJQNJ":
        Script3();
        break;
      case "5VWdnLkWIF0":
        Script4();
        break;
      case "6iXATDcGUam":
        Script5();
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

};
