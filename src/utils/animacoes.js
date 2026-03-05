import gsap from 'gsap'

export function flutuar(element){
    gsap.to(element,{
        y:-30,
        rotation:10,
        duration: 2,
        repeat: -1,
        yoyo:true,
        ease: "power1.inOut"
    })
}