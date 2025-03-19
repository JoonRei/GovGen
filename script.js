document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");
    let lastScrollTop = 0;

    window.addEventListener("scroll", function () {
        let scrollTop = window.scrollY || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            navbar.classList.add("hidden"); 
        } else {
            navbar.classList.remove("hidden"); 
        }
        if (scrollTop > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

        lastScrollTop = scrollTop;
    });
});
    document.addEventListener("DOMContentLoaded", function () {
        const leafContainer = document.querySelector(".falling-leaves");

        function createLeaf() {
            const leaf = document.createElement("div");
            leaf.classList.add("leaf");

            const size = Math.random() * 20 + 30;
            leaf.style.width = `${size}px`;
            leaf.style.height = `${size}px`;

            leaf.style.left = `${Math.random() * 100}vw`; 
            leaf.style.animationDuration = `${Math.random() * 3 + 5}s`; 

            leafContainer.appendChild(leaf);

            setTimeout(() => {
                leaf.remove();
            }, 8000);
        }

        setInterval(createLeaf, 600); 
    });
    window.onscroll = function() { scrollIndicator() };

    function scrollIndicator() {
        let winScroll = document.documentElement.scrollTop;
        let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let scrolled = (winScroll / height) * 100;
        document.querySelector(".scroll-indicator").style.width = scrolled + "%";
    }
    
