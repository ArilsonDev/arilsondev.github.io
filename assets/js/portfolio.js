

(function(){
  /*const scrollHeader = (e) => {
    let header = document.querySelector("header")
    let top = document.documentElement.scrollTop
    if(top >= window.innerHeight){
      header.style.height = -100
      header.style.position = "fixed"
      header.style.height = 100
    }else{
      header.style.position = "relative"
      header.style.height = 100
    }
  }
  window.addEventListener("scroll", scrollHeader)*/
})();

document.addEventListener("DOMContentLoaded", console.log("load"));

const loadEvent = () => {
  console.log("Loaded content.")
}

window.addEventListener("load", loadEvent)