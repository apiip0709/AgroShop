new Glider(document.querySelector('.glider-per'), {
    slidesToScroll: 1,
    slidesToShow: 4,
    draggable: true,
    dots: '.dots',
    arrows: {
        prev: '.glider-prev',
        next: '.glider-next'
    },

    responsive: [
        {            
            breakpoint: 1200,
            settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: 4.5,
                slidesToScroll: 2,
            }
        }, {
            breakpoint: 900,
            settings: {
                slidesToShow: 3.5,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 640,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 304,
            settings: {
                slidesToShow: 2.5,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 0,
            settings: {
                slidesToShow: 2.5,
                slidesToScroll: 1,
            }
        }
    ]
});

new Glider(document.querySelector('.glider-kel'), {
    slidesToScroll: 1,
    slidesToShow: 4,
    draggable: true,
    dots: '.dots',
    arrows: {
        prev: '#prev-kel',
        next: '#next-kel'
    },

    responsive: [
        {            
            breakpoint: 1200,
            settings: {
                slidesToShow: 4.5,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 900,
            settings: {
                slidesToShow: 3.5,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 640,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 304,
            settings: {
                slidesToShow: 2.5,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 0,
            settings: {
                slidesToShow: 2.5,
                slidesToScroll: 1,
            }
        }
    ]
});