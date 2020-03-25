var triangle1,triangle2,triangle3,triangle4,triangle5
var rect1,rect2,rect3,rect4,rect5,rect6,rect7,rect8
var flag1,flag2
var door1,door2
function setup() {
  createCanvas(800,500);
  triangle1=new Triangle(80,150,150,50,220,150)
  triangle2=new Triangle(580,150,650,50,720,150)
  triangle3=new Triangle(280,110,400,10,520,110)
  triangle4=new Triangle(150,40,150,10,190,40)
  triangle5=new Triangle(650,40,650,10,690,40)
  rect1=new myRectangle(200,350,400,150)
  
  rect2=new myRectangle(100,150,100,350)
  rect3=new myRectangle(600,150,100,350)
  
  rect4=new myRectangle(300,110,200,240)

  rect6=new myRectangle(130,180,40,40)
  rect7=new myRectangle(630,180,40,40)

  rect8=new myRectangle(375,160,50,50)
  door1=new myRectangle(360,370,40,130)
  door2=new myRectangle(400,370,40,130)
 
 }

function draw() {
  background(135,206,235);  
  fill(204,102,0)
  rect4.display()
  
  for(var i = 200;i<=600;i=i+62){
  rect5= new myRectangle(i,320,31,80)
  fill(102,51,0)
  rect5.display()
  }
  fill(204,102,0)
  rect1.display()
 
  rect2.display()
  rect3.display()
  
  fill(204,204,0)
  triangle1.display()
  triangle2.display()
  fill(153,153,0)
  triangle3.display()
  fill("red")
  triangle4.display()
  triangle5.display()
  fill(135,206,235)
  rect6.display()
  rect7.display()
  rect8.display()
  strokeWeight(2)
  flag1=line(150,50,150,10)
  flag2=line(650,50,650,10)
  fill(153,76,0)
  door1.display()
  door2.display()
}
