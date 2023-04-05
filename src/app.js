const tl = gsap.timeline({defaults: {ease: 'power2.out'}})
console.log(tl);
tl.to('.slider', {duration: 1.2, y: '-100%'})
tl.to('.intro .info', {duration: 1.2, y: '0%'}, "-=1")
tl.fromTo('.nav', {opacity: 0, rotateY: '180deg'}, {opacity: 1, duration: 1, rotateY: '0deg'})
tl.fromTo('.intro .info .info-left h2', {opacity: 0, color: '#ffe1fa', rotateX: '180deg'}, {
    opacity: 1, duration: 1.8, rotateX: '0deg'
})