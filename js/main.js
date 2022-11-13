AOS.init();

(function() {
  // Создаём таймер
  setTimeout(function() {
    document.getElementById("videoNone").style.display = 'none';
    document.getElementById("rigthShow").style.display = 'block';
    document.getElementById("leftShow").style.display = 'flex'; 
    
    

    
   
  }, 4000); // 10000 мсек = 10 сек
})();



// Скрипт для header 

let lastScroll = 0;
const defaultOffset = 100;
const header = document.querySelector('.header');

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => header.classList.contains('hide');

window.addEventListener('scroll', () => {
    if(scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
        //scroll down
        header.classList.add('hide');
    }
    else if(scrollPosition() < lastScroll && containHide()){
        //scroll up
        header.classList.remove('hide');
    }

    lastScroll = scrollPosition();
})


document.addEventListener('scroll', () => {
  if (scrollPosition() > defaultOffset) {
  header.classList.add('small-hide');
  } else if (scrollPosition() < defaultOffset) {
  header.classList.remove('small-hide');
  lastScroll = scrollPosition();
  }
  })



// Скрипт для анимации

AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
  
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: true, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
  });


  // блок мой expirience



  function Upstatement() {
    document.getElementById('exp-1').classList.add('color-hover-experience');
    document.getElementById('exp-1').classList.remove('color-hover-experience2');
    document.getElementById('text-onclick1').innerHTML='Engineer ';
    document.getElementById('text-onclick1-1').innerHTML=' @ Upstatement';
    document.getElementById('text-onclick2').innerHTML='May 2018 - Present';
    document.getElementById('text-onclick3-1').innerHTML='Write modern, performant, maintainable code for a diverse array of client and internal projects';
    document.getElementById('text-onclick3-2').innerHTML='Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify';
    document.getElementById('text-onclick3-3').innerHTML='Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis';

    document.getElementById('exp-2').classList.add('color-hover-experience2');
    document.getElementById('exp-2').classList.remove('color-hover-experience');

    document.getElementById('exp-3').classList.add('color-hover-experience2');
    document.getElementById('exp-3').classList.remove('color-hover-experience');

    document.getElementById('exp-4').classList.add('color-hover-experience2');
    document.getElementById('exp-4').classList.remove('color-hover-experience');

    document.getElementById('exp-5').classList.add('color-hover-experience2');
    document.getElementById('exp-5').classList.remove('color-hover-experience');

    document.getElementById('exp-6').classList.add('color-hover-experience2');
    document.getElementById('exp-6').classList.remove('color-hover-experience');
    
  }



  function scout() {
    document.getElementById('exp-2').classList.add('color-hover-experience');
    document.getElementById('exp-2').classList.remove('color-hover-experience2');
    document.getElementById('text-onclick1').innerHTML='Studio Developer';
    document.getElementById('text-onclick1-1').innerHTML=' @ Scout';
    document.getElementById('text-onclick2').innerHTML='January - April 2018';
    document.getElementById('text-onclick3-1').innerHTML='Worked with a team of three designers to build a marketing website and e-commerce platform for blistabloc, an ambitious startup originating from Northeastern';
    document.getElementById('text-onclick3-2').innerHTML='Helped solidify a brand direction for blistabloc that spans both packaging and web';
    document.getElementById('text-onclick3-3').innerHTML='Interfaced with clients on a weekly basis, providing technological expertise';

    document.getElementById('exp-1').classList.add('color-hover-experience2');
    document.getElementById('exp-1').classList.remove('color-hover-experience');

    document.getElementById('exp-3').classList.add('color-hover-experience2');
    document.getElementById('exp-3').classList.remove('color-hover-experience');

    document.getElementById('exp-4').classList.add('color-hover-experience2');
    document.getElementById('exp-4').classList.remove('color-hover-experience');

    document.getElementById('exp-5').classList.add('color-hover-experience2');
    document.getElementById('exp-5').classList.remove('color-hover-experience');

    document.getElementById('exp-6').classList.add('color-hover-experience2');
    document.getElementById('exp-6').classList.remove('color-hover-experience');
    
  }


  function apple() {
    document.getElementById('exp-3').classList.add('color-hover-experience');
    document.getElementById('exp-3').classList.remove('color-hover-experience2');
    document.getElementById('text-onclick1').innerHTML='UI Engineer Co-op ';
    document.getElementById('text-onclick1-1').innerHTML=' @ Apple';
    document.getElementById('text-onclick2').innerHTML='July - December 2017';
    document.getElementById('text-onclick3-1').innerHTML='Developed and shipped highly interactive web applications for Apple Music using Ember.js';
    document.getElementById('text-onclick3-2').innerHTML='Built and shipped the Apple Music Extension within Facebook Messenger leveraging third-party and internal APIs';
    document.getElementById('text-onclick3-3').innerHTML='Architected and implemented the front-end of Apple Music embeddable web player widget, which lets users log in and listen to full songs in the browser';

    document.getElementById('exp-1').classList.add('color-hover-experience2');
    document.getElementById('exp-1').classList.remove('color-hover-experience');

    document.getElementById('exp-2').classList.add('color-hover-experience2');
    document.getElementById('exp-2').classList.remove('color-hover-experience');

    document.getElementById('exp-4').classList.add('color-hover-experience2');
    document.getElementById('exp-4').classList.remove('color-hover-experience');

    document.getElementById('exp-5').classList.add('color-hover-experience2');
    document.getElementById('exp-5').classList.remove('color-hover-experience');

    document.getElementById('exp-6').classList.add('color-hover-experience2');
    document.getElementById('exp-6').classList.remove('color-hover-experience');
    
  }



  function scout2() {
    document.getElementById('exp-4').classList.add('color-hover-experience');
    document.getElementById('exp-4').classList.remove('color-hover-experience2');
    document.getElementById('text-onclick1').innerHTML='Studio Developer ';
    document.getElementById('text-onclick1-1').innerHTML=' @ Scout';
    document.getElementById('text-onclick2').innerHTML='January - June 2017';
    document.getElementById('text-onclick3-1').innerHTML='Collaborated with a small team of student designers to spearhead a new brand and design system for Scout’s inaugural student-led design conference at Northeastern';
    document.getElementById('text-onclick3-2').innerHTML='Worked closely with designers and management team to develop, document, and manage the conference’s marketing website using Jekyll, Sass, and JavaScript';
    document.getElementById('text-onclick3-3').innerHTML='Interfaced with clients on a weekly basis, providing technological expertise';

    document.getElementById('exp-1').classList.add('color-hover-experience2');
    document.getElementById('exp-1').classList.remove('color-hover-experience');

    document.getElementById('exp-2').classList.add('color-hover-experience2');
    document.getElementById('exp-2').classList.remove('color-hover-experience');

    document.getElementById('exp-3').classList.add('color-hover-experience2');
    document.getElementById('exp-3').classList.remove('color-hover-experience');

    document.getElementById('exp-5').classList.add('color-hover-experience2');
    document.getElementById('exp-5').classList.remove('color-hover-experience');

    document.getElementById('exp-6').classList.add('color-hover-experience2');
    document.getElementById('exp-6').classList.remove('color-hover-experience');
    
  }


  function starry() {
    document.getElementById('exp-5').classList.add('color-hover-experience');
    document.getElementById('exp-5').classList.remove('color-hover-experience2');
    document.getElementById('text-onclick1').innerHTML='Software Engineer Co-op ';
    document.getElementById('text-onclick1-1').innerHTML=' @ Starry';
    document.getElementById('text-onclick2').innerHTML='July - December 2016';
    document.getElementById('text-onclick3-1').innerHTML='Engineered and maintained major features of Starrys customer-facing web app using ES6, Handlebars, Backbone, Marionette and CSS';
    document.getElementById('text-onclick3-2').innerHTML='Proposed and implemented scalable solutions to issues identified with cloud services and applications responsible for communicating with Starry Station';
    document.getElementById('text-onclick3-3').innerHTML='Interfaced with user experience designers and other developers to ensure thoughtful and coherent user experiences across Starry’s iOS and Android mobile apps';

    document.getElementById('exp-1').classList.add('color-hover-experience2');
    document.getElementById('exp-1').classList.remove('color-hover-experience');

    document.getElementById('exp-2').classList.add('color-hover-experience2');
    document.getElementById('exp-2').classList.remove('color-hover-experience');

    document.getElementById('exp-3').classList.add('color-hover-experience2');
    document.getElementById('exp-3').classList.remove('color-hover-experience');

    document.getElementById('exp-4').classList.add('color-hover-experience2');
    document.getElementById('exp-4').classList.remove('color-hover-experience');

    document.getElementById('exp-6').classList.add('color-hover-experience2');
    document.getElementById('exp-6').classList.remove('color-hover-experience');
    
  }


  function millenlowe() {
    document.getElementById('exp-6').classList.add('color-hover-experience');
    document.getElementById('exp-6').classList.remove('color-hover-experience2');
    document.getElementById('text-onclick1').innerHTML='Creative Technologist Co-op  ';
    document.getElementById('text-onclick1-1').innerHTML=' @ MullenLome';
    document.getElementById('text-onclick2').innerHTML='July - December 2015';
    document.getElementById('text-onclick3-1').innerHTML='Developed and maintained code for in-house and client websites primarily using HTML, CSS, Sass, JavaScript, and jQuery';
    document.getElementById('text-onclick3-2').innerHTML='Manually tested sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness';
    document.getElementById('text-onclick3-3').innerHTML='Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more';

    document.getElementById('exp-1').classList.add('color-hover-experience2');
    document.getElementById('exp-1').classList.remove('color-hover-experience');

    document.getElementById('exp-2').classList.add('color-hover-experience2');
    document.getElementById('exp-2').classList.remove('color-hover-experience');

    document.getElementById('exp-3').classList.add('color-hover-experience2');
    document.getElementById('exp-3').classList.remove('color-hover-experience');

    document.getElementById('exp-4').classList.add('color-hover-experience2');
    document.getElementById('exp-4').classList.remove('color-hover-experience');

    document.getElementById('exp-5').classList.add('color-hover-experience2');
    document.getElementById('exp-5').classList.remove('color-hover-experience');
    
  }