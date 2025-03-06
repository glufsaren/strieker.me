var bg, a, b;
var ao, bo;

function ready() {
  elements = document.getElementsByClassName("bg");
  a = document.getElementById("a");
  // b = document.getElementById("b");

  ao = setPosition(a);
  // bo = setPosition(b);

  if (elements.length){
    bg = elements[0];
  } else {
    return;
  }

  setBg(bg);
  bg.style.visibility = 'visible';
};

function resize() {
}

// in case the document is already rendered
if (document.readyState!='loading') ready();
// modern browsers
else if (document.addEventListener) document.addEventListener('DOMContentLoaded', ready);
// IE <= 8
else document.attachEvent('onreadystatechange', function(){
  if (document.readyState=='complete') ready();
});

//window.addEventListener("touchstart", ready);
window.addEventListener("touchmove", handler);
window.addEventListener("resize", resize);

function handler(e) {
  e = e || window.event;

  var pageX = e.pageX;
  var pageY = e.pageY;

  // IE 8
  if (pageX === undefined) {
      pageX = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
      pageY = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
  }

  var amountMovedX = (pageX * -1 / 100);
  var amountMovedY = (pageY * -1 / 100);


  a.style.top = `${ao.top - amountMovedY}px`;
  a.style.left = `${ao.left - amountMovedX}px`;

  b.style.top = `${bo.top - amountMovedY * 2}px`;
  b.style.left = `${bo.left - amountMovedX * 2}px`;

  if (bg) {
    bg.style.backgroundPosition = `${amountMovedX}px ${amountMovedY}px`;;
  }
}

if (document.attachEvent) document.attachEvent('onmousemove', handler);
else document.addEventListener('mousemove', handler);

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function preloadImage(url)
{
  new Image().src = url;
}

function setBg(bg) {
  var source = sources[getRandomInt(7)];
  preloadImage(source);
  bg.style.backgroundImage = `url('${source}')`;
}

function setPosition(element) {
  return { 'top': element.style.top, 'left': element.style.left };
}

var sources = [
  './img/ai-generated-8298924_1280.webp',
  './img/ai-generated-8298925_1280.webp',
  './img/cosmos-5809271_1280.webp',
  './img/floral-8018201_1280.webp',
  './img/honeycomb-6147355_1280.webp',
  './img/leaves-5737499_1280.webp',
  './img/orange-background-6712124_1280.webp'
];