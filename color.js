var span = document.querySelectorAll("button");
var options=document.querySelectorAll(".options");
var question=document.querySelector("h2");
var sco=document.querySelector("h4");
var button=document.querySelector("button");
var header=document.querySelector(".header")
var circle=document.querySelector(".circle");
var a,color;
var lives=3;
var gameOver=false;
var score=0;
header.style.background='rgb(' + (Math.floor(Math.random() * 256)) + ', ' + (Math.floor(Math.random() * 256)) + ', ' + (Math.floor(Math.random() * 256)) + ')';
var interval=setInterval(generate,100);
for(var i=1;i<span.length;i++){
	span[i].addEventListener("click",function(){
		this.classList.toggle("span1");

	});
	span[1].addEventListener("click",function(){
		span[2].classList.remove("span1");
	});
	span[2].addEventListener("click",function(){
		span[1].classList.remove("span1");
		lives=2;
	});}
	span[0].addEventListener("mouseover",function(){
		this.classList.add("span1");
	});
	span[0].addEventListener("mouseout",function(){
		this.classList.remove("span1");
	});

	circle.addEventListener("click",function(){
		clearInterval(interval);
		header.style.height="25%";
		score=0;
		gameOver=false;
		lives=3;
		sco.textContent="SCORE = "+score;
		generate();
	});
	circle.addEventListener("mouseover",function(){
		this.style.backgroundSize="40% 50%";
		this.style.border="2px solid white";
	});
	circle.addEventListener("mouseout",function(){
		this.style.border="";
	});
	span[0].addEventListener("click",function(){
		score=0;
		sco.textContent="SCORE = "+score;
		lives=3;
		gameOver=false;
		generate();
	});
function generate(){
a=Math.floor(Math.random()*6);
console.log(a);
for(var i=0;i<options.length;i++){
	color='rgb(' + (Math.floor(Math.random() * 256)) + ', ' + (Math.floor(Math.random() * 256)) + ', ' + (Math.floor(Math.random() * 256)) + ')';
	options[i].style.background=color;
	if(i===a){
		question.textContent=color;
		
	}
	options[i].addEventListener("click",add)
}}
function add(){

		if(this.style.background===question.textContent&&!gameOver){
		header.style.background=this.style.background;
		score=score+1;
		sco.textContent="SCORE= "+score;
		generate();}
		else if(!gameOver && lives!=0 &&question.textContent!=this.style.background){
			this.style.background="#0000";
			lives=lives-1;
			if(lives==0){
			score=0;
			sco.textContent="Game Over";
			header.style.height="100%";
			gameOver=true;}
		}
}