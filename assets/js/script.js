AOS.init();

window.onscroll=function(){
let winScroll=document.documentElement.scrollTop;
let height=document.documentElement.scrollHeight-document.documentElement.clientHeight;
let scrolled=(winScroll/height)*100;
document.getElementById("progress-bar").style.width=scrolled+"%";
};

const text=["Software Developer","Frontend Engineer","ML Enthusiast"];
let count=0,index=0,currentText="",letter="";
(function type(){
if(count===text.length){count=0;}
currentText=text[count];
letter=currentText.slice(0,++index);
document.querySelector(".typing").textContent=letter;
if(letter.length===currentText.length){
count++;
index=0;
}
setTimeout(type,150);
})();