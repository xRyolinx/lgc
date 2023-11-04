//------------------- functions -----------------------//

//Initialize navbar en fonction de window
async function show_hide_nav()
{
    //Hide - Show
    let nav = document.querySelector('nav');
    let nav_add = document.querySelector('#nav_add');
    let nav_button = document.querySelector('#nav_button');

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


// Couleur du link de la page actuelle dans nav bar
async function nav_el_selected() {
    let pathname = window.location.pathname;

    if (pathname == '/')
    {
        document.querySelector('#nav_home').classList.add('nav_el_selected');
    }
    else
    {
        links = document.querySelectorAll('.nav_el');
        links.forEach(link => {
            if (pathname.includes(link.dataset.name))
            {
                link.classList.add('nav_el_selected');
            }    
        });
    }
}



// --------------------------------------------------- //


let nav_bar_toggle = false;



// ----------------START------------
document.addEventListener('DOMContentLoaded', function() {
    //Initialize navbar
    show_hide_nav();
    nav_el_selected();

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
    window.addEventListener('resize', show_hide_nav);
});