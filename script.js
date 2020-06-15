CSSPlugin.defaultTransformPerspective = 400; 

function start(){
  const htmlLines = document.querySelectorAll('.html span');
htmlLines.forEach((el, i)=>{
  const val = Math.round(Math.random() * 70) + 50;
  gsap.to(el, {duration: 0.5, width: val, delay: i * 0.2});
});

gsap.to('.logo div', {opacity:1, delay: htmlLines.length * 0.2, duration: 1, onComplete: htmlComplete});
}

function htmlComplete(){
  const cssLines = document.querySelectorAll('.css span');
  cssLines.forEach((el, i)=>{
    const val = Math.round(Math.random() * 70) + 50;
    gsap.to(el, {duration: 0.5, width: val, delay: i * 0.2});
  });
  
  const bounceTime = 0.5;
  gsap.to('.anim', {
    backgroundImage:"-webkit-linear-gradient(top,#015e88, #2196F3)",
    delay: cssLines.length * 0.2, duration: 1
  });
  
  var tl = gsap.timeline({
    repeat: 1, 
    delay: cssLines.length * 0.1, 
    onComplete: cssComplete
  });
  tl.to(".logo", {y: -20, duration: bounceTime, ease: "power1.out"});
  tl.to(".shadow", {opacity: 0.1, duration: bounceTime}, '-=0.8');
  tl.to(".logo", {y: 0, duration: bounceTime, ease: "power1.in"});
  tl.to(".shadow", {opacity: 0.4, duration: bounceTime}, '-=0.8');
}

function cssComplete(){
  const jsLines = document.querySelectorAll('.js span');
  jsLines.forEach((el, i)=>{
    const val = Math.round(Math.random() * 70) + 50;
    gsap.to(el, {duration: 0.5, width: val, delay: i * 0.2});
  });
  const delayLen = jsLines.length * 0.2;
  gsap.to(".columns", {height: 0, opacity: 0, duration: 0.5, delay: delayLen});
  gsap.to('.anim', {
    backgroundImage:"-webkit-linear-gradient(top,#ffc700, #f37721)",
    delay: jsLines.length * 0.2, duration: 0.5
  });
  gsap.to('.left-front', {y: 60, x: 60, rotation: 60, delay: delayLen});
  gsap.to('.right-front', {y: -60, x: -60, rotation: -60, delay: delayLen});
  gsap.to('.left-back', {y: 80, x: 80, rotation: -60, delay: delayLen});
  gsap.to('.right-back', {y: -160, x: -160, rotation: 60, delay: delayLen});
  gsap.to(".logo", {rotation: 270, scale: 8, opacity: 0, duration: 2, ease: "power1.out", delay: delayLen});
  gsap.to(".shadow", {opacity: 0, duration: 0.4}, '-=0.5');
  gsap.to('.cplogo', {opacity: 1, delay: delayLen + 1});
}

start();