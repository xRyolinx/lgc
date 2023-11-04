// global vars
let testimonial = {
    object : null,
    titles : null,

    slide : 1,
    slides_num : 3,

    pre : null,
    suiv : null,

    disabled_color : 'var(--black)'
};


function carousel_bg(container)
{
    let width = container.object.clientWidth / container.slides_num;
    container.object.setAttribute('style', 'left: -' + (width * (container.slide - 1)).toString() + 'px;');
}

function carousel_title(object)
{
    // reset hero.titles
    object.titles.forEach(title => {
        title.removeAttribute('style');
    });

    // show title
    let title = object.titles[object.slide - 1];
    title.setAttribute('style', "display: block !important; animation: visible 1.5s; opacity: 1");
}

// start
document.addEventListener('DOMContentLoaded', function() {
    // height of testimonials
    let height_testi = document.querySelector('#testimonials-total').clientHeight;
    document.querySelector('#testimonials').style.height = height_testi.toString() + 'px';

    // save testimonial's objects
    testimonial.object = document.getElementById('testimonials-total');
    testimonial.titles = document.querySelectorAll('.testimonial');
    testimonial.pre = document.getElementById('test-but-pre');
    testimonial.suiv = document.getElementById('test-but-suiv');

    // resize testimonials
    window.addEventListener('resize', () => {
        carousel_bg(testimonial);
    });


    // go back testimonial
    testimonial.pre.addEventListener('click', function() {
        testimonial.suiv.removeAttribute('style');

        if (testimonial.slide != 1)
        {
            // slide
            testimonial.slide--;
            carousel_bg(testimonial);
            carousel_title(testimonial);

            if (testimonial.slide == 1)
            {
                this.style.color = testimonial.disabled_color;
                this.style.cursor = 'default';
            }
        }
    })
    
    // go forth testimonial
    testimonial.suiv.addEventListener('click', function() {
        testimonial.pre.removeAttribute('style');

        if (testimonial.slide != testimonial.slides_num)
        {
            // slide
            testimonial.slide++;
            carousel_bg(testimonial);
            carousel_title(testimonial);

            if (testimonial.slide == testimonial.slides_num)
            {
                this.style.color = testimonial.disabled_color;
                this.style.cursor = 'default';
            }
        }
    });
});