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