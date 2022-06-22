
function activeSlide(){
    
    const slides = document.querySelectorAll('.slide');
     
    slides.forEach((slide)=>slide.onclick = function (){
       if(slide.className.includes('active')){
        
        slides.forEach((slide)=>{
            slide.classList.remove('active')
        })

       } else {
        
           clearActiveClasses();
           slide.classList.add('active');
        }
        })

     
    function clearActiveClasses(){
        slides.forEach((slide)=>{
            slide.classList.remove('active')
        })
    }

}




activeSlide()