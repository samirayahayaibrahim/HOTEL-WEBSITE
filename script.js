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

                
const reviews = [
        { Ellipse: 'assets/Ellipse 1.png', reviewDescription: 'I quickly found the right tour for me, but I had a few questions about the hotel, I wrote to tech support and they answered all my questions within an hour. The vacation itself was perfect. Thank you very much. I will come back again and again.', work: "Publisher", scholars: 'Jannike Borg,'},
        { Ellipse: 'assets/Ellipse 2.png', reviewDescription:'I quickly found the right tour for me, but I had a few questions about the hotel, I wrote to tech support and they answered all my questions within an hour. The vacation itself was perfect. Thank you very much. I will come back again and again.', work: "Publisher", scholars: 'Jannike Borg,'},
        { Ellipse: 'assets/Ellipse 3.png', reviewDescription: 'I quickly found the right tour for me, but I had a few questions about the hotel, I wrote to tech support and they answered all my questions within an hour. The vacation itself was perfect. Thank you very much. I will come back again and again.', work: "Publisher", scholars: 'Jannike Borg,' },
    ];

    const renderReviews = reviews => {
        const container = document.getElementById('reviewContainer');
        reviews.forEach(review => {
            container.innerHTML += `
                <div>
                    <img class="Ellipse" src="${review.Ellipse}" alt="${review.Ellipse}">
                    <h3 class="reviewDescription">${review.reviewDescription}</h3>
                    <p class="scholars">${review.scholars}<span class="work">${review.work}</span></p>
                    
                </div>
            `;
        });
    }
    
    renderReviews(reviews);

    
    const recents = [
            { Rectangle2: 'assets/Rectangle 4.png', recentDate: 'May 23, 2022 ', minutes: 'assets/time.png', titlerecent:"My trip to Athens", recentDescription: 'It would seem that in a city where Theseus, Plato and Epicurus once walked, the very idea of the subway is alien to the city, but already...' },
            { Rectangle2: 'assets/Rectangle 5.png', recentDate: "May 22, 2022", minutes: 'assets/time (1).png', titlerecent:"Vilnius resorts", recentDescription: "I haven't seen any resorts in Vilnius, but there are wonderful people and pubs" },
            { Rectangle2: 'assets/Rectangle 6.png', recentDate: 'May 20, 2022', minutes: 'assets/time (2).png', titlerecent:"Tips for flying on a plane", recentDescription: "If you have a fear of flying, here's a helpful tip: bring your co-pilot so you can take a nap while he steers the plane for you" },
        ];
    
        const renderRecents = recents => {
            const container = document.getElementById('recentContainer');
            recents.forEach(recent => {
            container.innerHTML += `
                    <div>
                        <img class="Rectangle2" src="${recent.Rectangle2}" alt="${recent.Rectangle2}">
                        <p class="recentDate">${recent.recentDate}</p>
                        <img class="minutes" src="${recent.minutes}" alt="${recent.minutes}">
                        <h5 class="titlerecent">${recent.titlerecent}</h>
                        <p class="recentDescription">${recent.recentDescription}</p>
                    </div>
                `;
            });
        }
        
        renderRecents(recents);

