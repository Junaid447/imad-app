console.log('Loaded!');
var element=document.getElementById('main-text');
element.innerHTML='New value';

var img=document.getElementById('madi');
marginRight=0;
function moveRight()
{
    marginRight=marginRight+1;
    img.style.marginRight=marginRight+'px';
}
img.onclick=function()
{
    var interval=setInterval(moveLeft,'50');
   
};