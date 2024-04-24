//from- final to initial
//to- initial to final
//timeline- to trigger animation on elements in a sequence.

var tl = gsap.timeline();

tl.from("nav h3",{ 
    y: -50,
    opacity: 0,
    delay: .4,
    duration: 1,
    stagger: 0.2 //this will give all same elememts delay of 0.1.
})
tl.from("#center h1",{
    y: -150,
    opacity: 0,
    delay: 0.1,
    duration: .8,
    stagger: 0.1
})
tl.from("#img1",{
    x: 500,
    opacity: 0,
    rotate: 50,
    duration: .5,
    stagger: 0.5
})
tl.from("#img2",{
    y: 500,
    opacity: 0,
    rotate: 50,
    duration: .5,
    stagger: 0.5
})
tl.from("#img3",{
    x: -500,
    opacity: 0,
    rotate: 45,
    duration: .5,
    stagger: 0.5
})
tl.from("#footer h3",{ 
    y: -50,
    opacity: 0,
    delay: .4,
    duration: 1,
    stagger: 0.2
})