let observer = new IntersectionObserver((parm)=>{
  parm.forEach((box)=>{
    box.targer.style.opacity = 1;
  })
})

 let div = document.querySelectorAll('div');
 observer.observe(div[0]);