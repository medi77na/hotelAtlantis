const navbar = document.querySelector(".navbar")

navbar.addEventListener("click", (e) => {

    e.preventDefault()
    if (e.target.classList.contains("btn-primary")) {
        window.location.href = "./src/pages/login.html"
    }else if (e.target.classList.contains("btn-secondary")) {
        window.location.href = "./src/pages/register.html"
    }

})


