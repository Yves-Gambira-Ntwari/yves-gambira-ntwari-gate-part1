const small = document.querySelector("#small")
const big = document.querySelector("#big")
const menu = document.querySelector("#menu")
const close = document.querySelector("#close")
menu.addEventListener("click", ()=>{
  small.classList.add("bottom-0")
  small.classList.remove("bottom-full")
  big.classList.add("h-120")
  big.classList.remove("h-0")
  close.classList.remove("hidden")
  
})
close.addEventListener("click", ()=>{
  small.classList.remove("bottom-0")
  small.classList.add("bottom-full")
  big.classList.remove("h-120")
  big.classList.add("h-0")
  close.classList.add("hidden")
})