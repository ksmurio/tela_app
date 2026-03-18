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

export function writeEffect(element, text,duration) {
    const totalChars = text.length
    let i = 0
    element.textContent = ''

    const interval = setInterval(() => {
        element.textContent += text[i]
        i++
        if (i >= totalChars) clearInterval(interval)
    }, duration)
}