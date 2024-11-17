document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById('menuToggle');
    const closeMenu = document.getElementById('closeMenu');
    const navMenu = document.getElementById('navMenu');

    if (menuToggle && navMenu && closeMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        closeMenu.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    }
});
/* why choose us section */

const chooses = [
        { image: "assets/img.png", title: "Payment methods", description: "We have a lot of them, from cryptocurrencies to barter for potatoes" },
        { image: "assets/img (1).png", title: "Simple search process", description: "We checked it out, even the kid did it,<br> but it was my mom's friend's son" },
        { image: "assets/img (2).png", title: "24/7 Support", description: "Is there something you don't <br>understand? Feel free to call us. <br>Phone number in the footer" },
        { image: "assets/img (3).png", title: "We are nice", description: "Fantasy is over, there will be something really convincing here" },
    ];

    const renderChooses = chooses => {
        const container = document.getElementById("chooseContainer");
        chooses.forEach(choose => {
            container.innerHTML += `
                <div>
                    <img class="image" src="${choose.image}" alt="${choose.image}">
                    <h3 class="title">${choose.title}</h3>
                    <p class="description">${choose.description}</p>
                </div>
            `;
        });
    }
    
    renderChooses(chooses);
    /* end of why choose us section */ 

    /* special offers section */
        const specialoffers = [
            { Rectangle: 'assets/Rectangle 1.png', rate: 'assets/rating.png', favorite: 'assets/favorite.png', SpecialofferDescription: 'Wilderness Club at Big <br> Ceddar', months:"28 October — 1 November", price:"$2016", night:"/6 night"},
            { Rectangle: 'assets/Rectangle 2.png', rate: 'assets/rating.png', favorite: 'assets/favorite.png', SpecialofferDescription: "Wilderness Club at Big <br> Ceddar", months:"28 October — 1 November", price:"$2016", night:"/6 night"},
            { Rectangle: 'assets/Rectangle 3.png', rate: 'assets/rating.png', favorite: 'assets/favorite.png', SpecialofferDescription: 'Wilderness Club at Big <br> Ceddar', months:"28 October — 1 November", price:"$2016", night:"/6 night"},
        ];
    
        const renderSpecialoffers = specialoffers => {
            const container = document.getElementById('specialofferContainer');
            specialoffers.forEach(specialoffer => {
                container.innerHTML += `
                    <div>
                        <img class="Rectangle" src="${specialoffer.Rectangle}" width="100%" alt="${specialoffer.Rectangle}">
                        <img class="rate" src="${specialoffer.rate}" alt="${specialoffer.rate}">
                        <img class="favorite" src="${specialoffer.favorite}" alt="${specialoffer.favorite}">
                        <p class="SpecialofferDescription">${specialoffer.SpecialofferDescription}</p>
                        <p class="months">${specialoffer.months}</p>
                        <p class="price">${specialoffer.price}</p>
                        <p class="night">${specialoffer.night}</p>
                    </div>
                `;
            });
        }
        
        renderSpecialoffers(specialoffers);
        /* end of special offers section */