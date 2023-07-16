import './css/style.css';
import { gsap } from 'gsap';

const navLink = document.querySelectorAll('.nav--link');
const navToggle = document.querySelector('.header--menu-toggle');
const nav = document.querySelector('nav');
let navState = false;

const navTL = gsap.timeline().reverse();

navTL.fromTo(
    nav,
    {yPercent : -100},
    {
        yPercent : 0,
        duration : .6
    }
)

navToggle.addEventListener('click', () => {
    navState ? navTL.timeScale(.6).reversed(navState) : navTL.timeScale(.8).reversed(navState);

    navState = !navState

    if(navState === true){
        navLink.forEach(link => {
            const navText = link.querySelector('.link--text-overlay .text--container');
            const navChar = navText.querySelectorAll('.text--animate');
            
        gsap.fromTo(
            navChar,
            {yPercent : 100},
            {
                yPercent : 0,
                duration : .6,
                stagger : .1,
                delay : .5
            }
        )
        })
    } else {
        navLink.forEach(link => {
            const navText = link.querySelector('.link--text-overlay .text--container');
            const navChar = navText.querySelectorAll('.text--animate');
            
        gsap.fromTo(
            navChar,
            {yPercent : 0},
            {
                yPercent : 100,
                duration : .6,
                stagger : .1
            }
        )
        })
    };
})



navLink.forEach(link => {
    const navText = link.querySelector('.link--text-overlay .text--container');
    const navChar = navText.querySelectorAll('.text--animate');
    const blinderTop = link.querySelector('.blinder .top');
    const blinderBottom = link.querySelector('.blinder .bottom');
    const textOverlay = link.querySelector('.link--text-overlay');

    const hoverTL = gsap.timeline().reverse()

    hoverTL.to(
        navChar,
        {
            yPercent : -100,
            duration : .6,
            stagger : .1
        }
    )
    .to(
        blinderTop,
        {
            "clip-path" : "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
            background : "#850000",
            duration : 1
        }, .1
    )
    .to(
        blinderBottom,
        {
            "clip-path" : "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
            background : "#850000",
            duration : 1
        }, .1
    )
    .to(
        textOverlay,
        {
            background : 'rgba(51, 51, 51, .4)',
            duration : 0,
        }, 0
    )

    link.addEventListener('mouseenter', () => {
        hoverTL.reversed(false)
    })
    link.addEventListener('mouseleave', () => {
        hoverTL.reversed(true)
    })
})
