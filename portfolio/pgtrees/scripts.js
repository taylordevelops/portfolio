function setup() {
    vw = window.innerWidth;
    vh = window.innerHeight;
    createCanvas(vw, vh);
    angleMode(DEGREES);


    noLoop();
  }
  
  function draw() {
        
        /* Background Gradient */
       
        c1 = color(15, 15, 255, 10);
        c2 = color(1, 50, 32, 50);
        
        for(let y=0; y<height; y++){
          n = map(y,0,height,0,1);
          let newc = lerpColor(c1,c2,n);
          stroke(newc);
          line(0,y,width, y);
        }
        /* END Background Gradient */





   /* Draw The Sun */
   
push()
translate(width / 2, height + 300);
   let sunnyGlow = color(100, 204, 200, 15);
   fill(sunnyGlow);
   noStroke()
   triangle(0, 0, -width/0.75, -height*2, width /0.75, -height*2);
   pop()
   push()

   /*
   translate(width / 2, height);
   let sunColor = color(255, 204, 0);
   fill(sunColor);
   noStroke()
   ellipse(0, 0, 175, 150);

   let blazeColor = color(255, 130, 0);
   fill(blazeColor);
   noStroke()
   ellipse(0, 0, 165, 150);

   translate(1, -1)
   let sunGlow = color(255, 204, 0, 80);
   fill(sunGlow);
   noStroke()
   ellipse(0, 0, 160, 155);

*/

   pop()
   /* END of The Sun */

   

   /* Draw Small trees for shrubbery */
    translate(width / 2, height);
    branch(135)
    
    scale(0.5)
    push()
    translate(-100, +100);
    branch(35)
    translate(-100, 0);
    branch(35)
    translate(-100, 0);
    branch(35)
    translate(-100, 0);
    branch(35)
    translate(-100, 0);
    branch(35)
    translate(-100, 0);
    branch(35)
    pop()
    translate(100, +100);
    branch(35)
    translate(100, 0);
    branch(35)
    translate(100, 0);
    branch(35)
    translate(100, 0);
    branch(35)
    translate(100, 0);
    branch(35)
    translate(100, 0);
    branch(35)
   /* END of Small trees for shrubbery */

   


/* Draw Large Tree in Center */
  function branch(len) {
          
      push()
        if (len > 8) {
            strokeWeight(map(len, 10, 100, 1, 25 ))
            stroke(70, 30, 15)
            line(0, 0, 0, -len)
            translate(0, -len)
            rotate(random(-20, -30))
            branch(len * random(0.7, 0.9))
            rotate(random(50, 60))
            branch(len * random(0.7, 0.9))
        }
        else{
          scale(1.1)
            var r = 80 + random(-20, 20)
            var g = 120 +  random(-20, 20)
            var b = 40 + random(-20, 20)
            fill(r, g, b, 255)
            noStroke()

     
            beginShape()
            for (var i = 45; i < 135;  i++){
                var rad = 15
                var x = rad * cos(i)
                var y = rad * sin(-i) + 20
                vertex(x, y)
            }
            for (var i = 135; i < 35;  i--){
                var rad = 15
                var x = rad * cos(i)
                var y = rad * sin(-i) - 20
                vertex(x, y)
            }
           
            endShape(CLOSE)
        }
        pop()
  }}
  /* END of Large Tree in Center */
  function mouseReleased() {
    
    background(255);

    redraw();
  }


  