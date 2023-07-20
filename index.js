
$(function () { // jQuery ready

    $("#toggleMenuButton").on("click", () => {
        $("#main-nav").toggleClass("collapsed");
    })
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
    
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    let scrollBackButton = document.getElementById("scrollBackButton");
    
    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollBackButton.style.display = "block";
        } else {
            scrollBackButton.style.display = "none";
        }
    };
    
    // On blur validation listener for form elements
    $('input,select,textarea').on('focusout', function () {
        // check element validity and change class
        this.checkValidity()
        $(this).removeClass('is-valid is-invalid')
               .addClass(this.checkValidity() ? 'is-valid' : 'is-invalid');
    });

    $("#contactform").on("submit", function () {
        let data = $(this).serializeArray().reduce((accumulator, item) => {
            return {...accumulator, [item.name]: item.value};
          }, {})
        window.location.href = `mailto:faridtesting@yopmail.com?subject=${data.subject}&body=${data.message}`
    })
})