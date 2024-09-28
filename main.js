let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
  cursor: "<span style='color: #d36775;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #d36775;"> Soy egresada de Ingeniería en Computación y estoy espercializandome en Front End </span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
