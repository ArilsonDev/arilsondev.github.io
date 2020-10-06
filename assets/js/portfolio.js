

(function(){
  console.log("load")

})();

document.addEventListener("DOMContentLoaded", console.log("load"));

const loadEvent = () => {
  console.log("Loaded content.")
}

window.addEventListener("load", loadEvent)