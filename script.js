function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //if(html.classList.contains('light')){
   // html.classList.remove('light')
  // } else {
   // html.classList.add('light')
  //}
  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./Assets/avatar-light.png")
  } else{
    //set tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./Assets/avatar.png")
  }
}
 
//pegar a tag img 
//se tiver em light mode, adicionar a imagem light
// set tiver sem light mode, manter a imagem normal 
