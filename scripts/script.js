// JavaScript Document
console.log("test");

function slideCarousel () {
    // Intersection observer

    const slides = document.querySelectorAll(".portfolio-work ul li"); // "slides" carousel
    const slideDatum = document.querySelector(".portfolio-work h3") // h3, data events

    const observer = new IntersectionObserver(entries => 
        {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
        
                    slideDatum.textContent = entry.target.dataset.date;
                    
                } else {
                    entry.target.classList.remove("show");
                }
            });
        },
        { // percentage of li in threshold
            root: document.querySelector('.portfolio-work ul'),

            threshold: 0.5
        }
    )
    
    // observe each slide
    slides.forEach(slide => {
        observer.observe(slide)
    })

   console.log(observer)

}

slideCarousel();
