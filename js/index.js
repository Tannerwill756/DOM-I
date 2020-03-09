const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//nav
const links = document.querySelectorAll('a');

Array.from(links).forEach ( element => {
  element.textContent = siteContent['nav']['i'];
})


//cta
const mainHeading = document.querySelector('.cta-text h1');
  mainHeading.textContent = siteContent['cta']['h1'];

const mainButton = document.querySelector('.cta-text button');
mainButton.textContent = siteContent['cta']['button'];

const headerImg = document.getElementById("cta-img");
headerImg.setAttribute('src', siteContent['cta']['img-src']);


//main-content

const topHeader = document.querySelector('.top-content .text-content:first-child h4');
topHeader.textContent = siteContent['main-content']['features-h4'];

document.querySelector('.top-content .text-content:first-child p').textContent = siteContent['main-content']['features-content'];

document.querySelector('.top-content .text-content:last-child h4').textContent = siteContent['main-content']['about-h4'];

document.querySelector('.top-content .text-content:last-child p').textContent = siteContent['main-content']['about-content'];


//middle-img

document.getElementById('middle-img').setAttribute('src', siteContent['main-content']['middle-img-src']);


//bottom-content

document.querySelector('.bottom-content .text-content:first-child h4').textContent = siteContent['main-content']['services-h4'];

document.querySelector('.bottom-content .text-content:first-child p').textContent = siteContent['main-content']['services-content'];


document.getElementsByTagName('h4')[4].textContent = siteContent['main-content']['product-h4'];

document.getElementsByTagName('p')[4].textContent = siteContent['main-content']['product-content'];

document.getElementsByTagName('h4')[5].textContent = siteContent['main-content']['vision-h4'];

document.getElementsByTagName('p')[5].textContent = siteContent['main-content']['vision-content'];


//contact

document.querySelectorAll('.contact').textContent = siteContent['contact']['contact-h4'];

document.getElementsByTagName('p')[6].textContent = siteContent['contact']['address'];

document.getElementsByTagName('p')[7].textContent = siteContent['contact']['phone'];

// document.querySelector('.contact:last-child p').textContent = siteContent['contact']['email'];

document.getElementsByTagName('p')[8].textContent = siteContent['footer']['copyright'];