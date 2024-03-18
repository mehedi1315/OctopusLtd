
// =====================Menu Sec===================
const btn = document.querySelector(".mobile-menu-btn")
const menu = document.querySelector(".mobile-menu")

btn.addEventListener("click", function(){
    menu.classList.toggle("hidden")
})

//==============================resize the navbar on scroll=========================
window.onscroll = function() {
    if(window.innerWidth > 1023) {
        scrollFunction()
    }
    else {}
    };

function scrollFunction() {
  if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
   
    document.getElementById("sec01").classList.remove("lg:flex");
    document.getElementById("logo").style.width = "100px";
    document.getElementById("spacing").classList.remove("md:space-y-4");
  } else {
    document.getElementById("sec01").classList.add("lg:flex")
    document.getElementById("logo").style.width = "100%";
    document.getElementById("spacing").classList.add("md:space-y-4");
  }
}

if(window.innerWidth < 1023) {
  document.getElementById("sec01").style.display = "none";
}

// ======================Sub-menu========================

const menus = document.querySelectorAll(".menus");
const menuLinks = document.querySelectorAll("#sec02 li a");
const subMenus = document.querySelectorAll("ul li ul");


menus.forEach((menu) => {
  menu.addEventListener("mouseenter", () => {
    let subs = menu.querySelector(".menuItems")
    if(subs) {
      subs.classList.add("block");
      subs.classList.remove("hidden");
      menu.childNodes[0].style.backgroundColor = "#007acc";
      menu.childNodes[0].style.borderRadius = "4px"
    }
  })

  menu.addEventListener("mouseleave", () => {
    let subs = menu.querySelector(".menuItems")
    if(subs) {
      subs.classList.add("hidden");
      subs.classList.remove("block");
      menu.childNodes[0].style.backgroundColor = "";
      menu.childNodes[0].style.borderRadius = "";
    }
  })
})




// js code for accordian 
class Accordion {
  constructor(options){
      this.options = {}
      this.options.accordionGroup = options.accordionGroup ? options.accordionGroup : '.accordions';
      this.options.accordion = options.accordion ? options.accordion : '.accordion';
      this.options.icon = options.icon ? options.icon : '.toggle-icon';
      this.options.accordionContent = options.accordionContent ? options.accordionContent : '.content';
      this.options.openIcon = options.openIcon ? options.openIcon : '+';
      this.options.closeIcon = options.closeIcon ? options.closeIcon : '-';
      this.options.hiddenClass = options.hiddenClass ? options.hiddenClass : 'hidden';
      // this.options.openedAccordionClass = options.openedAccordionClass ? options.openedAccordionClass : 'open';

      this.initialization();
  }

  initialization() {
      let $this = this;
      let accordions = document.querySelectorAll(this.options.accordionGroup);
      for(let i=0; i<accordions.length;i++){
          let accordion = accordions[i].querySelectorAll(this.options.accordion);
          let contents = accordions[i].querySelectorAll(this.options.accordionContent);
          let icons = accordions[i].querySelectorAll(this.options.icon);
          for(let x=0; x<accordion.length; x++){
              let singleAccordion = accordion[x];
              let icon = accordion[x].querySelector(this.options.icon);
              icon.addEventListener('click',function(event){
                  for(let z = 0; z < contents.length; z++){
                      contents[z].classList.add('hidden');
                  }
                  for(let z = 0; z < icons.length; z++){
                      icons[z].innerHTML = $this.options.openIcon;
                  }
                  if(icon.classList.contains($this.options.openedAccordionClass)){
                      icon.innerHTML = $this.options.openIcon;
                      singleAccordion.querySelector($this.options.accordionContent).classList.add($this.options.hiddenClass);
                  }
                  else{
                      icon.innerHTML = $this.options.closeIcon;
                      singleAccordion.querySelector($this.options.accordionContent).classList.remove($this.options.hiddenClass);
                  }
                  icon.classList.toggle($this.options.openedAccordionClass);
              })
          }
      }
  }
}
let a = new Accordion({});

//js for text annimation

// const text = document.querySelector(".element")
//    const textLoad = ()=>{
//     setTimeout(()=>{
//       text.textContent = "Happy"
//     },0)
//     setTimeout(() =>{
//       text.textContent = "Excited"
//     },2000)
//    }
//     textLoad()
//     setInterval(textLoad,4000)

    //============= counters==============
let displayValues = document.querySelectorAll('.num')
let interval = 300

displayValues.forEach((displayValue)=>{
    let startValue=0
    let endValue = parseInt(displayValue.getAttribute("data-val"))
    let duration = Math.floor(interval / endValue)
    let counter =setInterval(function(){
        startValue += 1
        displayValue.textContent = startValue + "+"
        if( startValue == endValue){
            clearInterval(counter)
        }
    }, duration)
})