function loco(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

}

loco();

document.querySelectorAll(".h6_line")
.forEach(function(elm){
    var line = elm.children[1];
    elm.addEventListener("mouseenter",function(){
        gsap.to(line,{
            width:"100%",
            opacity:1,
            ease:Expo.easeInout,
            duration:.2
        })

    })
})

document.querySelectorAll(".h6_line")
.forEach(function(elm){
    var line = elm.children[1];
    elm.addEventListener("mouseleave",function(){
        gsap.to(line,{
            width:"0%",
            left:"100%",
            opacity:0,
            ease:Expo.easeInout,
            duration:1,
            
            onComplete:function(){
               line.style.left=0;
            }
    })
  })
})

function m_nav(){
    var i = 0;
var hoveri = document.querySelector(".m_nav .link i")

hoveri.addEventListener("click",function(){
    if(i===0){
        hoveri.classList= ('ri-arrow-up-s-line')
        gsap.to(".m_nav .ao a",{
            opacity:1,
            stagger:.1,
            ease:Expo.easeInout,
            duration:1,
            
       })
       i=1;
    }else{

        gsap.to(".m_nav .ao a",{
            opacity:0,
            stagger:.1,
            ease:Expo.easeInout,
            duration:1,
            
       })
       hoveri.classList= ('ri-arrow-down-s-line')
       i=0;
    }
    
})

var m = 0;
var menu = document.querySelector("#menu")
menu.addEventListener("click",function(){
    if(m === 0){
        gsap.to(".m_nav",{
            x:0,
            ease:Expo.easeInout,
       })
       m = 1;
    }else{
        gsap.to(".m_nav",{
            x:-850,
            ease:Expo.easeInout,
       })
       m = 0;
    }
     
})

document.querySelector("#closeM")
.addEventListener("click",function(){
    gsap.to(".m_nav",{
        x:-850,
        ease:Expo.easeInout,
   })
})
}
m_nav();

var tl = gsap.timeline()
tl

.to("#fs .pink",{
    top:"50%",
    ease:Expo.easeInout,
    duration:1
})
.to("#fs img",{
    y:0,
    ease:Expo.easeInout,
    duration:1
})
.to("#fs .img",{
     overflow:"initial",
})
.to("#fs img",{
    scale:5,
    ease:Expo.easeInout,
    duration:2,
    // opacity:0
})
.to("#fs img",{
    delay:-1,
    opacity:0,
    duration:.1
})
.to("#fs",{
    delay:-.5,
    height:"0vh",
    borderBottomLeftRadius: '100%',
    borderBottomRightRadius: '100%',
    display:"none",
    ease:Expo.easeInout,
    duration:1
})