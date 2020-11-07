var size=32;
var sizeX=36
var nextToReach;
shiftx=136;
shifty=161;
var lawnmower;
var fuelcan;
var speed=16;
var currentRect;
var color;
var x=14;
var y=11;
var arr = [];
let order=[];
let play=false;
let drawthis=false;
var routeTaken=[];
var bestScore=100000;
var change=true;
var bestOrder=[[],[],[],[],[],[],[],[],[],[]];

var oldxclick=0;
var oldyclick=0;
var thecolor;
//saveroute
//importroute

//routelength.



var showgrid=true;

var levels=0;
var progress=0;
var savedOrder=[];

var lawns=[[[0]],
//1
[[0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,1,1,1,1,1,1,1,1,1,1,1,1,0],
[0,1,1,1,1,1,1,1,1,1,1,1,1,0],
[0,1,1,1,1,1,1,1,1,1,1,1,1,0],
[0,1,1,1,1,0,0,0,0,1,1,1,1,0],
[0,1,1,1,1,0,5,0,0,1,1,1,1,0],
[0,1,1,1,1,0,0,0,0,1,1,1,1,0],
[0,1,1,1,1,1,1,1,1,1,1,1,1,0],
[0,1,1,1,1,1,1,1,1,1,1,1,1,0],
[0,1,1,1,1,1,1,1,1,1,1,1,1,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0]],
//2
[[1,1,1,1,1,1,1,1,1,1,1,1,1,1],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1],
[1,1,2,2,2,2,2,2,1,2,2,2,1,1],
[1,1,2,1,1,1,1,1,1,1,1,2,1,1],
[1,1,2,1,1,0,0,0,0,1,1,2,1,1],
[1,1,1,1,1,0,5,0,0,1,1,1,1,1],
[1,1,2,1,1,0,0,0,0,1,1,2,1,1],
[1,1,2,1,1,1,1,1,1,1,1,2,1,1],
[1,1,2,2,2,1,2,2,2,2,2,2,1,1],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1]],
//3
[[1,1,1,1,1,1,1,1,1,1,1,1,1,1],
[1,2,2,2,1,3,1,1,3,1,2,2,2,1],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1],
[1,1,3,1,1,1,1,1,1,1,1,3,1,1],
[1,1,1,1,1,0,0,0,0,1,1,1,1,1],
[1,1,1,1,1,0,5,0,0,1,1,1,1,1],
[1,1,1,1,1,0,0,0,0,1,1,1,1,1],
[1,1,3,1,1,1,1,1,1,1,1,3,1,1],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1],
[1,2,2,2,1,3,1,1,3,1,2,2,2,1],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1]],
//4
[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
[1,1,2,2,2,1,1,1,1,1,1,1,1,1,1,2,2,2,1,1],
[1,1,2,1,1,1,1,1,2,2,2,2,1,1,1,1,1,2,1,1],
[1,1,2,1,0,0,0,1,1,1,1,1,1,1,1,1,1,2,1,1],
[1,1,1,1,0,5,0,1,1,1,1,1,1,1,1,1,1,1,1,1],
[1,1,2,1,0,0,0,1,1,1,1,1,1,1,1,1,1,2,1,1],
[1,1,2,1,1,1,1,1,2,2,2,2,1,1,1,1,1,2,1,1],
[1,1,2,2,2,1,1,1,1,1,1,1,1,1,1,2,2,2,1,1],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],
//5
[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
[1,2,2,1,1,1,3,1,1,1,1,1,1,3,1,1,1,2,2,1],
[1,2,2,1,1,1,3,1,1,1,1,1,1,3,1,1,1,2,2,1],
[1,1,1,1,1,1,3,1,1,2,2,1,1,3,1,1,1,1,1,1],
[1,0,0,0,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1],
[1,0,5,0,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1],
[1,0,0,0,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1],
[1,1,1,1,1,1,3,1,1,2,2,1,1,3,1,1,1,1,1,1],
[1,2,2,1,1,1,3,1,1,1,1,1,1,3,1,1,1,2,2,1],
[1,2,2,1,1,1,3,1,1,1,1,1,1,3,1,1,1,2,2,1],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],
//6
[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
[1,1,1,1,3,1,1,1,1,1,1,1,1,1,3,1,1,1,1,1,1,1,3,1,1],
[1,3,1,1,1,1,1,1,3,1,1,1,1,1,1,1,1,3,1,1,1,1,1,1,1],
[1,1,1,1,1,1,3,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,1,1,1],
[1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,3,1],
[1,1,3,1,1,1,1,1,1,1,1,0,5,0,1,1,1,1,3,1,1,1,1,1,1],
[1,1,1,1,1,3,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1],
[1,1,1,1,1,1,1,1,3,1,1,1,1,1,1,1,1,1,1,1,3,1,1,1,1],
[1,3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,1,1,1,1,1,1,1],
[1,1,1,1,3,1,1,1,1,1,1,3,1,1,1,1,1,1,1,1,1,1,3,1,1],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],
//7
[
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
[1,2,2,2,2,2,1,2,2,2,2,2,1,2,1,1,1,2,1,2,2,2,2,2,1],
[1,2,1,1,1,2,1,2,1,1,1,2,1,2,1,1,1,2,1,2,1,1,1,2,1],
[1,1,1,1,1,2,1,2,1,1,1,2,1,2,1,1,1,2,1,2,1,1,1,1,1],
[1,0,0,0,1,1,1,2,1,1,1,2,1,2,2,2,2,2,1,1,1,1,1,1,1],
[1,0,5,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
[1,0,0,0,1,1,1,2,2,2,2,2,1,2,1,1,1,2,1,1,1,1,1,1,1],
[1,1,1,1,1,2,1,2,1,1,1,2,1,2,1,1,1,2,1,2,1,1,1,1,1],
[1,2,1,1,1,2,1,2,1,1,1,2,1,2,1,1,1,2,1,2,1,1,1,2,1],
[1,2,2,2,2,2,1,2,1,1,1,2,1,2,2,2,2,2,1,2,2,2,2,2,1],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],
//8
[
[1,1,1,1,1,1,3,1,1,1,1,1,1,1,1,1,1,1,3,1,1,1,1,1,1],
[1,1,1,1,1,1,3,1,2,2,2,1,1,1,2,2,2,1,3,1,1,1,1,1,1],
[1,1,1,1,1,1,3,1,2,2,2,1,1,1,2,2,2,1,3,1,1,1,1,1,1],
[1,1,1,1,1,1,3,1,1,1,1,1,3,1,1,1,1,1,3,1,1,1,1,1,1],
[1,0,0,0,1,1,1,1,1,1,1,1,3,1,1,1,1,1,1,1,1,1,1,1,1],
[1,0,5,0,1,1,1,1,1,1,1,1,3,1,1,1,1,1,1,1,1,1,1,1,1],
[1,0,0,0,1,1,1,1,1,1,1,1,3,1,1,1,1,1,1,1,1,1,1,1,1],
[1,1,1,1,1,1,3,1,1,1,1,1,3,1,1,1,1,1,3,1,1,1,1,1,1],
[1,1,1,1,1,1,3,1,2,2,2,1,1,1,2,2,2,1,3,1,1,1,1,1,1],
[1,1,1,1,1,1,3,1,2,2,2,1,1,1,2,2,2,1,3,1,1,1,1,1,1],
[1,1,1,1,1,1,3,1,1,1,1,1,1,1,1,1,1,1,3,1,1,1,1,1,1]],
//9
[
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
[1,2,1,1,2,1,1,2,1,1,2,2,2,1,1,1,1,2,2,2,1,1,2,1,1,2,1,1,2,1],
[1,2,1,1,2,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,2,1,1,2,1],
[1,2,1,1,2,1,1,2,1,1,2,2,2,1,1,1,1,2,2,2,1,1,2,1,1,2,1,1,2,1],
[1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1],
[1,3,3,1,3,3,1,3,1,1,1,1,1,0,5,0,0,1,1,1,1,1,3,3,3,3,3,1,3,1],
[1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1],
[1,2,1,1,2,1,1,2,1,1,2,2,2,1,1,1,1,2,2,2,1,1,2,1,1,2,1,1,2,1],
[1,2,1,1,2,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,2,1,1,2,1],
[1,2,1,1,2,1,1,2,1,1,2,2,2,1,1,1,1,2,2,2,1,1,2,1,1,2,1,1,2,1],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],
//10
[
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
[1,1,3,1,3,1,1,1,1,1,2,2,2,1,1,1,1,2,2,2,1,1,1,1,1,3,1,3,1,1],
[1,1,1,1,1,1,1,1,3,1,2,2,2,1,1,1,1,2,2,2,1,3,1,1,1,1,1,1,1,1],
[1,1,3,1,1,1,1,1,3,1,1,1,1,1,1,1,1,1,1,1,1,3,1,1,1,1,1,3,1,1],
[1,1,1,1,2,2,2,1,3,1,1,1,1,0,0,0,0,1,1,1,1,3,1,2,2,2,1,1,1,1],
[1,1,1,1,2,3,2,1,3,1,1,1,1,0,5,0,0,1,1,1,1,3,1,2,3,2,1,1,1,1],
[1,1,1,1,2,2,2,1,3,1,1,1,1,0,0,0,0,1,1,1,1,3,1,2,2,2,1,1,1,1],
[1,1,3,1,1,1,1,1,3,1,1,1,1,1,1,1,1,1,1,1,1,3,1,1,1,1,1,3,1,1],
[1,1,1,1,1,1,1,1,3,1,1,2,2,2,2,2,2,2,2,1,1,3,1,1,1,1,1,1,1,1],
[1,1,3,1,3,1,1,1,1,1,1,1,2,2,2,2,2,2,1,1,1,1,1,1,1,3,1,3,1,1],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]]
];

var img_intro;
var img_1;
var img_2;
var img_3;
var img_4;
var img_5;
var img_6;
var img_7;
var img_8;
var img_9;
var img_10;

function preload() {
  img_intro = loadImage('assets/flowers.png');
  img_1 = loadImage('assets/lawn1.png');
  img_2 = loadImage('assets/lawn2.png');
  img_3 = loadImage('assets/lawn3.png');
  img_4 = loadImage('assets/lawn4.png');
  img_5 = loadImage('assets/lawn5.png');
  img_6 = loadImage('assets/lawn6.png');
  img_7 = loadImage('assets/lawn7.png');
  img_8 = loadImage('assets/lawn8.png');
  img_9 = loadImage('assets/lawn9.png');
  img_10 = loadImage('assets/lawn10.png');
  
}

function setup(){
	thecolor=color(0);
	frameRate(120);
	levels=0;
	y=lawns[1].length;
	x=lawns[1][0].length;
  input = createSlider(8, 64, 16,1);
  speed=input.value();
  input.position(shiftx, 20);
  button = createButton('Start');
  button.position(20, 40);
  button.mousePressed(Start);
    button = createButton('Restart');
  button.position(100, 40);
  button.mousePressed(restart);
  button = createButton('Reset');
  button.position(180, 40);
  button.mousePressed(rese);
  
    
	button = createButton('1');
  button.position(20,70);
  button.mousePressed(level1);
  	button = createButton('2');
  button.position(40,70);
  button.mousePressed(level2);
  	button = createButton('3');
  button.position(60,70);
  button.mousePressed(level3);
  	button = createButton('4');
  button.position(80,70);
  button.mousePressed(level4);
  	button = createButton('5');
  button.position(100,70);
  button.mousePressed(level5);
  	button = createButton('6');
  button.position(120,70);
  button.mousePressed(level6);
  	button = createButton('7');
  button.position(140,70);
  button.mousePressed(level7);
  	button = createButton('8');
  button.position(160,70);
  button.mousePressed(level8);
  	button = createButton('9');
  button.position(180,70);
  button.mousePressed(level9);
  	button = createButton('10');
  button.position(200,70);
  button.mousePressed(level10);

  //text('Size', shiftx + input.width+10, 35);
  lmx=0;
  lmy=0;
	

	nextToReach=1;
	textSize(15);
	color=0;
  canvas = createCanvas(x*100, y*100);
}

function level1(){
	changelevel(1);
}
function level2(){
	changelevel(2);
}
function level3(){
	changelevel(3);
}
function level4(){
	changelevel(4);
}
function level5(){
	changelevel(5);
}
function level6(){
	changelevel(6);
}
function level7(){
	changelevel(7);
}
function level8(){
	changelevel(8);
}
function level9(){
	changelevel(9);
}
function level10(){
	changelevel(10);
}

function changelevel(n){
	bestScore=10000;
	change=true;
levels=n;
	y=lawns[levels].length;
	x=lawns[levels][0].length;
rese();
}

function Start(){
	change=true;
	savedOrder=[];
	for (i = 0; i < order.length; i++) {
		savedOrder[i] = order[i];
	}
	if(!play){play=true;
  for(var i = 0; i < arr.length; i++){
    for(var j = 0; j < arr[i].length; j++){
     arr[i][j].setcolor()
    }
  }
	}else{play=false;
	}
}

function draw(){
	if(levels!=0){
		if(change){
			switch (levels){
			case 1:
			stroke('white');
			fill('white');
			rect(98,198,1156,436);
				image(img_1,100,100);
				break;
			case 2:
			stroke('white');
						fill('white');
			rect(100,100,1152,429);
				image(img_2,100,100);
				break;
			case 3:		stroke('white');	fill('white');
			rect(100,100,1152,429);
				image(img_3,100,100);
				break;
			case 4:		stroke('white');	fill('white');
			rect(100,100,1152,429);
				image(img_4,100,100);
				break;
			case 5:		stroke('white');	fill('white');
			rect(100,100,1152,429);
				image(img_5,100,100);
				break;
			case 6:		stroke('white');	fill('white');
			rect(100,100,1152,429);
				image(img_6,100,100);
				break;
			case 7:		stroke('white');	fill('white');
			rect(100,100,1152,429);
				image(img_7,100,100);
				break;
			case 8:		stroke('white');	fill('white');
			rect(100,100,1152,429);
				image(img_8,100,100);
				break;
			case 9:		stroke('white');	fill('white');
			rect(100,100,1152,429);
				image(img_9,100,100);
				break;
			case 10:	stroke('white');		fill('white');
			rect(100,100,1152,429);
				image(img_10,100,100);
				break;
			}
			change=false;
			//draw grid : 	
			for (var i = 0; i < x+1; i ++) {
				for (var j = 0; j < y+1; j ++ ) {
				stroke(0);
				strokeWeight(1);
				line(0+shiftx, j*32+shifty, x*sizeX+shiftx,j*32+shifty);
                  line(i*36+shiftx, 0+shifty, i*36+shiftx,y*32+shifty);
				}
			}
		}
	
	// if(size!=input.value()){
	// fill('rgb(255,255,255)');
	// noStroke();
	// rect(shiftx-1,shifty-1,x*size+5,y*size+5);	
	
	// }
	speed=input.value();
	if(false){
	for(var i = 0; i < arr.length; i++){
		for(var j = 0; j < arr[i].length; j++){
			arr[i][j].show()
		}
	}
	}
  if(play){
	  lawnmower.move(speed);
	  if(lawnmower.currentfuelmoves>39){
		  fuelcan.takable=true;
	  }
  }

  if(fuelcan.takable){
	  fuelcan.drawF();
  }
  
  lawnmower.showLM();
  
  //progressbarfuel
noStroke();
  fill('black');
  rect(100+238,100+7,135,12);
  fill(rgb(234,158,34));
  rect(100+240,100+8,Math.floor(lawnmower.fuel*131/240),10);
noStroke();
  fill('white');
    rect(100+240,100+10,Math.floor(lawnmower.fuel*131/240),2);
  rect(249,40,700,30);
  fill('black')
  text(lawnmower.totalmoves, 301, 52);
fill('black');
  text("moves :",250,52);
  text("best :",321,52);	
  text("Route Length :",420,52);	
  text(order.length,540,52);
  text(bestScore,360,52);
  

	}
	else{
		if(change){
			image(img_intro,100,100);
			change=false;
		}
	}
}

function restart(){
	change=true;
	if(lawnmower.totalmoves<bestScore){
		bestScore=lawnmower.totalmoves;
		bestOrder[levels]=savedOrder;
		//WRITE FILE AS JSON
	}
	order=[];
	for (i = 0; i < savedOrder.length; i++) {
		order[i] = savedOrder[i];
	}
	arr=[];
	  for(var j = 0; j < y; j++){
    var inArr = [];
    for(var i = 0; i < x; i++){
          var rect = new Rect(i,j,lawns[levels][j][i]);
		  		  if(lawns[levels][j][i]==5){
			  lmx=i;
			  lmy=j;
		  }
      inArr.push(rect);
    }
    arr.push(inArr)  
  }
  	lawnmower = new Lawnmower(lmx,lmy);
	  oldxclick=lawnmower.x+16;
  oldyclick=lawnmower.y+16;
	currentRect=new Rect(lawnmower.i,lawnmower.j,5);
    	fuelcan=new Fuelcan();
		play=true;
}

function rese(){
color=0;
bestScore=10000;
change=true;
	play=false;
	order=[];
	arr=[];
	  for(var j = 0; j < y; j++){
    var inArr = [];
    for(var i = 0; i < x; i++){
          var rect = new Rect(i,j,lawns[levels][j][i]);
		  		  if(lawns[levels][j][i]==5){
			  lmx=i;
			  lmy=j;
		  }
      inArr.push(rect);
    }
    arr.push(inArr)  
  }
  	lawnmower = new Lawnmower(lmx,lmy);
	  oldxclick=lawnmower.x+16;
  oldyclick=lawnmower.y+16;
	currentRect=new Rect(lawnmower.i,lawnmower.j,5);
    	fuelcan=new Fuelcan();
		nextToReach=1;
}

function mousePressed(){
  arr.forEach(function(e, index){
    e.forEach(function(d,index2){
      arr[index][index2].clicked()
    });
  });
}

function Rect(i,j,type=0,texto="",suppr=true){
	this.supprimable=suppr;
	if(i>10){
	}
  this.i = i;
  this.j = j;
  this.x = shiftx+i * sizeX;
  this.y = shifty+j * size;
  this.text="";
  this.textcolor=0;
  this.state=type;

  //0=mowed, 1=grass, 2=flower, 3=rock, 5=lawnmower (4 = flower mowed if needed)
	this.setcolor=function(type=this.state){
  if(type==0){
	this.r=0;
	this.g=85;
	this.b=0;
  } else if (type==1) {
	 this.r=0;
	this.g=255;
	this.b=0;
  } else if (type==2) {
	 this.r=255;
	this.g=255;
	this.b=50;
  }else if (type==2) {
	this.r=100;
	this.g=100;
	this.b=100;
  }
  else if (type==5) {
	this.r=0;
	this.g=85;
	this.b=0;
  }
	}
	  this.setcolor();
  this.clicked = function(){
	  if(play)return;
	    this.x = shiftx+this.i * sizeX;
		this.y = shifty+this.j * size;
		let x1 = this.x, x2 = x1 + sizeX,
        y1 = this.y, y2 = y1 + size;
    
    if((mouseX>x1&&mouseX<x2)&&(mouseY>y1&&mouseY< y2)){
		if(this.i==currentRect.i&&this.j!=currentRect.j){
			if(this.j<currentRect.j){
				for(var k=currentRect.j-1;k>this.j-1;k--){
					arr[k][this.i].activate();
				}
			}else{
				for(var k=currentRect.j+1;k<this.j+1;k++){
					arr[k][this.i].activate();
				}
			}
			
			
			
		}else if(this.j==currentRect.j&&this.i!=currentRect.i){
			if(this.i<currentRect.i){
				for(var k=currentRect.i-1;k>this.i-1;k--){
					arr[this.j][k].activate();
				}
			}else{
				for(var k=currentRect.i+1;k<this.i+1;k++){
					arr[this.j][k].activate();
				}
			}
			
			//draw line.

		}else{return;}
					stroke('red');
			line(oldxclick, oldyclick, x1+16, y1+16);
			oldxclick=x1+16;
			oldyclick=y1+16;
			console.log(oldxclick);
			console.log(oldyclick);
		nextToReach++;
		currentRect=this;

		}
	};
	
	this.activate=function(){
		this.r=Math.floor(color);
		this.g=Math.floor(color);
		this.b=Math.floor(color);
		color+=256/(x*y*2);
		order.push(this);
		this.show();
	};
	
	this.mow=function(){
		if(this.state!=3){
			this.state=0;
			this.setcolor();
		}
	};
	
    this.show = function(){
		this.x = shiftx+this.i * sizeX;
		this.y = shifty+this.j * size;
		if(play){thecolor.setAlpha(255);
		fill(rgb(this.r,this.g,this.b));
		}else
		{thecolor.setAlpha(100);
		
        fill(thecolor);
		}
        stroke('black')
        rect(this.x, this.y, sizeX, size)
	
    }
	
	    this.showdebug = function(i){

		this.x = shiftx+this.i * sizeX;
		this.y = shifty+this.j * size;
        fill('yellow');
        stroke('white')
        rect(this.x, this.y, sizeX, size)
		fill('red')
		text(i,this.x, this.y);
	
    }
}

function rgb(r,g,b){
	return('rgb('+r+','+g+','+b+')');
}

function Lawnmower(i,j){
	this.totalmoves=0;
	this.currentfuelmoves=0;
	this.i=i;
	this.j=j;
	this.x=(i*sizeX)+shiftx;
	this.y=j*size+shifty;
	this.moving=false;
	this.fuel=240;
	this.rock=0;
	this.flower=0;
	//refuel = 80-34=46
	this.totalmove=0;
	this.newSpace=false;
	this.oldi=i;
	this.oldj=j;
	
	
	
	this.showLM=function(){
		arr[this.oldj][this.oldi].show();
		arr[this.j][this.i].show();
		fill('rgb(255,150,0)');
		rect(this.x,this.y,sizeX,size);
	};
	this.move=function(K){
		if(this.fuel<0){
			console.log("OUT OF FUEL");
			this.totalmoves=1000000;
			restart();
			
			return;
		}
		if(K==0){
			return;
		}
		if(order.length==0){
			this.moving=false;
			play=false;
			restart();
			return;
		}else{
			this.moving=true;
			var horiz=true;  			
			if(horiz){
			if(order[0].i==this.i){
				var nextj=this.j;
				if(order[0].j>this.j){
					this.y++;
					if(this.j*size+shifty==this.y-size)nextj=this.j+1;
				}else{
					this.y--;
					if(this.j*size+shifty==this.y+size)nextj=this.j-1;
				}
				if(nextj!=this.j){
					this.oldj=this.j;
					this.oldi=this.i;
					this.j=Math.max(nextj,0);
					this.fuel-=3;
					this.totalmoves++;
					this.currentfuelmoves++
					this.newSpace=true;
				}
				
			}else {
				var nexti=this.i;
				if(order[0].i>this.i){
					this.x++;
					if(this.i*sizeX+shiftx==this.x-sizeX)nexti=this.i+1;
				}else{
					this.x--;
					if(this.i*sizeX+shiftx==this.x+sizeX)nexti=this.i-1;
				}
				if(nexti!=this.i){
					this.oldi=this.i;
					this.oldj=this.j;
					this.i=nexti;
					this.fuel-=3;
					this.totalmoves++;
					this.currentfuelmoves++
					this.newSpace=true;
				}	
			}
		}
		
		//test fuel
		if(this.i==fuelcan.selectedRect.i && this.j==fuelcan.selectedRect.j&&fuelcan.takable){
			fuelcan=new Fuelcan();
			this.fuel=240;
			this.rock=0;
			this.flower=0;
			this.currentfuelmoves=0;
			var neworder=[];
			for(var k=0;k<order.length;k++){
				if(arr[order[k].j][order[k].i].state==1){
					neworder.push(order[k]);
				}
			}
			order=[];
			for(var k=0;k<neworder;k++){
				order.push(neworder[k]);
			}
			order=neworder;
		}
		
		if(this.newSpace){
		if(arr[this.j][this.i].state==3){
				this.rock++;
				this.fuel-=80;
			}
			if(arr[this.j][this.i].state==2){
				this.flower++;
				this.fuel-=40;
			}
			arr[this.j][this.i].mow();
			this.newSpace=false;
		
			
		if(order.length>0&&order[0].i==this.i&&order[0].j==this.j){
			routeTaken.push(order[0]);
		
			while(order.length>0&&order[0].i==this.i&&order[0].j==this.j){
				order.shift();
				
			}
		}
			
			
			if(order.length>0){
				var timetorefuel=this.timeToRefuel();
				var roger=arr[order[0].j][order[0].i];
				while(roger.state!=1&&order.length>0&&dista(this,order[0]>1)){
					order.shift();
					roger=arr[order[0].j][order[0].i];
				}
				if(timetorefuel){
					order.unshift(fuelcan.selectedRect);
				}

			}

		
			
				if(order.length>0&&dista(lawnmower,order[0])>1){
					
				var etape = this.calcEuh();
				if(etape!=undefined){
				if(etape.length>0&&dista(lawnmower,etape[0])>1){
					console.log("ERREUR")
				}else{
				console.log(etape.length)
				for(var k=0;k<etape.length;k++){
				//etape[k].showdebug(k);
				}
				for(var k=etape.length-1;k>-1;k--){
					order.unshift(etape[k]);
				}
				order.shift();

				}
				}
				if(dista(lawnmower,order[0])>1){
					console.log("ERREUR")
				}
				}
		}
		this.move(K-1);
		}
	}

	this.calcEuh=function(){
		var bestcoef=10000;
		var coef;
		var etapes=[];
		var etape=[];
		var selectedk;
		for(var k=0;k<x;k++){
			etape=[];
			coef=0;

			//order[0].i=8
			//order[0].j=8
			//this.i=8
			//this.j=2
			//k=0
			if(this.i<k){
				//non
				for(var i=Math.max(this.i+1,0);i<k+1;i++){
					coef+=evalinterest(arr[this.j][i].state);
					etape.push(new Rect(i,this.j));
				}
			} else if(this.i>k){
				//oui

				for(var i=Math.min(this.i-1,x-1);i>k-1;i--){
					
					coef+=evalinterest(arr[this.j][i].state);
					etape.push(new Rect(i,this.j));
				}
			}
			if(order[0].j>this.j){
				for(var j=this.j;j<order[0].j+1;j++){
					
					coef+=evalinterest(arr[j][k].state);
					etape.push(new Rect(k,j));
				}
			} else if(order[0].j<this.j){

				for(var j=this.j;j>order[0].j-1;j--){

					coef+=evalinterest(arr[j][k].state);
					etape.push(new Rect(k,j));
				}
			}
			if(order[0].i<k){
				for(var i=k;i>order[0].i;i--){
					coef+=evalinterest(arr[this.j][i].state);
					etape.push(new Rect(k,order[0].j));
				}
			} else if(order[0].i>k){
				for(var i=k;i<order[0].i;i++){
					coef+=evalinterest(arr[this.j][i].state);
					etape.push(new Rect(i,order[0].j));
				}
			}
			etapes.push(etape);
			console.log(coef);
			if(coef<bestcoef){
				bestcoef=coef;
				selectedk=k;
			}
			
		}
		console.log(etapes);
		console.log(selectedk);
		return etapes[selectedk];

		
	}
	
	this.timeToRefuel=function(){
		var isMyPositionlTheClosest=true;
		if(order.length<1)return false;
		if(!fuelcan.takable){
			return false;
		}
		//I need fuel ?
		if(order.length*3<this.fuel){
			return false;
		}
		isMyPositionlTheClosest=true;
		for(var k=0;k<min(lawnmower.fuel/3-9,order.length);k++){
			isMyPositionlTheClosest=(dista(this,fuelcan.selectedRect)<dista(order[k],fuelcan.selectedRect))&&isMyPositionlTheClosest;
		}
		//mode panique
		return isMyPositionlTheClosest;
	}
	
}

function Fuelcan(){

	
	this.r=220;
	this.g=20;
	this.b=20;

	this.takable=false;
	
	
	this.spawnF=function(){
			var possibleSpaces=[];
	
	for(var i = 0; i < arr.length; i++){
		for(var j = 0; j < arr[i].length; j++){
			if(arr[i][j].state==0){
				possibleSpaces.push(arr[i][j]);
			}
		}
	}
	return possibleSpaces[Math.floor(possibleSpaces.length*Math.random())];
	}

	this.selectedRect=this.spawnF();
	this.selectedRect.supprimable=false;
	
	
	
	this.drawF=function(){
		fill(rgb(this.r,this.g,this.b));
		rect(this.selectedRect.x,this.selectedRect.y,sizeX,size);
	};
	

}

function dista(Rect1,Rect2){

	return(Math.abs(Rect1.i-Rect2.i)+Math.abs(Rect1.j-Rect2.j));
}

function timetodivert(orig,goal,fuel){
	//do better.
	if(orig.i==goal.i){
		if(orig.j==fuel.j){
			return true;
		}
	} else if (orig.j==goal.j){
		if(orig.i==fuel.i){
			return true;
		}
	} else {
		return false;
	}
}

function evalinterest(r){
	if(r==0){
		return 10;
	}
	if(r==1){
		return 9;
	}
	if(r==2){
		return 80;
	}
	if(r==3){
		return 200000;
	}
	return 0;
}

