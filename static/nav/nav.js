//------------------- functions -----------------------//

//Initialize navbar en fonction de window
function show_hide_nav()
{
    //Hide - Show
    let nav = document.querySelector('nav');
    let nav_add = document.querySelector('#nav_add');
    let nav_button = document.querySelector('#nav_button');

    // reset nav add margin
    nav_add.removeAttribute('style');

    // Hide add on mobile
    if (window.matchMedia("(max-width: 992px)").matches)
    {
        nav.after(nav_add);
        nav_button.style.display = 'block';
    }
    // Hide button on pc
    else
    {
        nav_button.before(nav_add);
        nav_button.style.display = 'none';
    }
}

//Changer couleur de bordure top/bot
function nav_element_border_color(element, color) {
    // element.style.borderBottom = "solid " + color + " 2px";    
    element.style.borderBottomColor = color;    
}

// Couleur du link de la page actuelle, dans nav
function nav_element_page(color) {
    let window_path_name = window.location.pathname;
    // Home page
    if (window_path_name == '/')
    {
        nav_home = document.querySelector('#nav_home');
        nav_element_border_color(nav_home, Ivory_White);
    }
    // Autre pages
    else
    {
        pages = document.querySelectorAll('.nav_el');
        pages.forEach(page => {
            if ((window_path_name.includes(page.id.replace('nav_', ''))) && (page.id != 'nav_home'))
            {
                nav_element_border_color(page, color);
            }    
        });
    }
}

//Change la couleur du link de la page actuelle
function adapt_element_page_size()
{
    // Mobile
    if (window.matchMedia("(max-width: 992px)").matches)
    {
        nav_element_page('transparent');
    }
    // PC
    else
    {
        nav_element_page(Black);
    }
}

// Reset la page
function nav_resize() {
    show_hide_nav();
    adapt_element_page_size();
}
// --------------------------------------------------- //


// ---------GLOBAL VAR--------------
let nav_bar_toggle = false;

// colors
let Rose_Gold = "#B76E79";
let Ivory_White = "#FDFDFD";
let Dusty_Rose = "#D4A6B1";
let Charcoal_Gray = "#333333";
let Black = "#4d504a"



// ----------------START------------
document.addEventListener('DOMContentLoaded', function() {
    //Initialize navbar
    nav_resize();

    //Nav button in mobile
    let nav_button = document.querySelector('#nav_button');
    nav_button.addEventListener('click', function() {
        let nav_add = document.querySelector('#nav_add');
        //Show
        if (!nav_bar_toggle)
        {
            //Suite de navbar
            nav_add.setAttribute('style', 'margin-top: 0;')
            nav_bar_toggle = true;
        }
        // Hide
        else
        {
            nav_add.setAttribute('style', 'margin-top: -300px;')
            nav_bar_toggle = false;
        }
    });

    //Reset la page
    window.addEventListener('resize', nav_resize);
});