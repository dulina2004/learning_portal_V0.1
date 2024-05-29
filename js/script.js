let menuBtn = document.querySelector("#menu-btn");
let navbar = document.querySelector(".header .flex .navbar");

menuBtn.onclick = () => {
    menuBtn.classList.toggle("fa-times");
    navbar.classList.toggle("active");
};

window.onscroll = () => {
    menuBtn.classList.remove("fa-times");
    navbar.classList.remove("active");
};

var swiper = new Swiper(".course-slider", {
    spaceBetween: 20,
    grabCursor: true,
    loop: true,

    /////////////////////////////
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },

    ////////////////////////////
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        540: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".teachers-slider", {
    spaceBetween: 20,
    grabCursor: true,
    loop: true,

    /////////////////////////////
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    },

    ////////////////////////////
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        540: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".reviews-slider", {
    spaceBetween: 20,
    grabCursor: true,
    loop: true,

    /////////////////////////////
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },

    ////////////////////////////
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        540: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

// sign in process

function signIn() {
    var name = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    // alert(name);
    // alert(password);

    if (name != "user") {
        alert("Invalid Username");
    } else if (password != "user") {
        alert("Invalid Password");
    } else {
        // alert("success");
        window.location = "index.html";
    }
}

function forgot() {
    alert("enter 'user' as your username and password");
}
