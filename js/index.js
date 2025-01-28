document.addEventListener("DOMContentLoaded", event => {
    setTimeout(() => {
        const preloader = document.querySelector(".preloader");
        preloader.classList.add("preloader-deactive");

        const hamburger_button = document.querySelector("#hamburger_menu");
        hamburger_button.addEventListener("click", event => {
            const hamburger = document.querySelector(".hamburger-lines");
            const hamburger_menu = document.querySelector("#hamburger-active");
            if (!hamburger.classList.contains("hamburger-active")) {
                hamburger.classList.add("hamburger-active");
                hamburger_menu.classList.add("hamburger-active");
            }
            else {
                hamburger.classList.remove("hamburger-active");
                hamburger_menu.classList.remove("hamburger-active");
            }
        });

        const modal_functor = event => {
            const modals = document.querySelectorAll(".modal");
            modals.forEach(element => {
                if (location.hash == element.attributes.hash.value) {
                    element.style.display = "block";
                }

                const close_functor = event => {
                    element.style.display = "none";
                    location.hash = "";
                }

                const close = element.querySelector(".close");
                close.addEventListener("click", close_functor);

                element.addEventListener("click", event => {
                    if (event.target == element) {
                        close_functor(event);
                    }
                });
            });
        }

        modal_functor();
        addEventListener("hashchange", modal_functor);
    }, 50);
});