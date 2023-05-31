// onload accordion collapse
const accordionButton = document.querySelectorAll('.fb-footer__linksec .accordion-button');
const accordionCnt = document.querySelectorAll('.fb-footer__linksec .accordion-collapse');
window.addEventListener('resize',()=>{
    if(window.innerWidth < 1024){
        accordionButton.forEach((e)=>{
            e.classList.add('collapsed');
        })
        accordionCnt.forEach((e)=>{
            e.classList.remove('show');
        })
    }else{
         accordionButton.forEach((e)=>{
            e.classList.remove('collapsed');
        })
        accordionCnt.forEach((e)=>{
            e.classList.add('show');
        })
    }
})