document.querySelectorAll(".nav-toggle").forEach((toggle)=>{
  toggle.addEventListener("click", toggleNav);
});
function toggleNav(){
  const nav=document.getElementById("myNav");
  if( nav.getBoundingClientRect().width===0){
    nav.style.width="100%";
  }
  else{
    nav.style.width="0";
  }
};