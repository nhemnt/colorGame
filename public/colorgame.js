var numSquare=6;
var color= [];
var colorSelect;

var displayColor=document.querySelectorAll(".square");
var mainColor=document.querySelector("#mainColor");
var q=document.querySelector("#gameStatus");
var h=document.querySelector("h1");
var rbtn=document.querySelector("#resetbtn")
var modebtn=document.querySelectorAll(".mode");

init();
function init(){
	//mode button event listner
	for(var i=0;i<modebtn.length;i++){
		modebtn[i].addEventListener("click",function(){
		modebtn[0].classList.remove("selected");
		modebtn[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent==="Easy"?numSquare=3 : numSquare=6;
		reset();
		});
	}

	for(var i=0;i<displayColor.length;i++){
	displayColor[i].addEventListener("click",function(){
		var clickedColor=this.style.background;
		if(clickedColor===colorSelect){
			changeColors(clickedColor);
			q.textContent="Correct!";
			h.style.background=clickedColor;
			rbtn.textContent="Play Again?";	 
			}
		else{
			q.textContent="Try Again!";
			this.style.background="black";
			}
		});	
	}
	reset();
}




function reset(){
	color=selectRandomColor(numSquare);
	colorSelect=colorSelector();
	mainColor.textContent=colorSelect;
	q.textContent="";
	h.style.background="steelblue";
	rbtn.textContent="New colors";
	for(var i=0;i<displayColor.length;i++){
		if (color[i]) {
		displayColor[i].style.display="block";
		displayColor[i].style.background=color[i];
		}else{
			displayColor[i].style.display="none";
		}
	}
	
}





mainColor.textContent=colorSelect;	


rbtn.addEventListener("click",function(){
	
	reset();

});





function changeColors(newcolor){
	for(var j=0;j<displayColor.length;j++){
		displayColor[j].style.background=newcolor;
	};
	
}
function colorSelector(){
	var rand=Math.floor(Math.random() * color.length);
	return color[rand];
}

function selectRandomColor(num){
	var arr=[];
	for(var i=0;i<num;i++){
	arr.push(randomColor());		
	}
	return arr;
}
function randomColor(){
	var r=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	return "rgb("+r+", "+g+", "+b+")";
}
