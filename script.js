// open menu

$('#toggle').click(function () {
    $(this).toggleClass('active');
    $('.burger').toggleClass('change');
    $('#overlay').toggleClass('open');
    $('body').addClass('no-scroll');
});


/*
var todasAsImgs = $('img');

for(let i = 0; i < todasAsImgs.length; i++){
    console.log(todasAsImgs[i]);
    var tempSrc = todasAsImgs[i].attr('src');
    if (!tempSrc.includes("unsplash")) {
        var finalSrc = "https://raw.githubusercontent.com/kasterni/musemotion/master/"+tempSrc;
        todasAsImgs[i].attr('src',finalSrc);
    }
}

todasAsImgs.forEach(i => {
    console.log(i);
    var tempSrc = i.attr('src');
    if (!tempSrc.includes("unsplash")) {
        var finalSrc = "https://raw.githubusercontent.com/kasterni/musemotion/master/"+tempSrc;
        i.attr('src',finalSrc);
    }
});

$(window).on("load", function () {
    var cursor = $(".cursor"),
        mouseX = 0,
        mouseY = 0,
        currentX = 0,
        currentY = 0;

    $(this).on("mousemove", function (e) {
        mouseX = e.pageX;
        mouseY = e.pageY;
    });

    $(this).on("mousedown", function (e) {
        cursor.addClass("grab");
        startX = e.pageX;
        dragActive = true;
    });

    $(this).on("mouseup", function () {
        cursor.removeClass("grab");
        dragActive = false;
    });

    function animate() {
        var accelerationX = mouseX - currentX,
            accelerationY = mouseY - currentY;

        currentX += accelerationX / 10;
        currentY += accelerationY / 10;

        var cursorScale = 1 - Math.abs(accelerationX / 1000);

        if (cursorScale < 0.6) {
            cursorScale = 0.6;
        }

        cursor.css(
            "transform",
            " translate3d(-50%, -50%, 0) translate3d(" +
            currentX +
            "px, " +
            currentY +
            "px, 0) scaleY(" +
            cursorScale +
            ")"
        );

        var leftX = accelerationX;
        if (accelerationX > 0) {
            leftX = 0;
        }

        var rightX = accelerationX;
        if (accelerationX < 0) {
            rightX = 0;
        }

        window.requestAnimationFrame(animate);
    }

    window.requestAnimationFrame(animate);
}); */

//// contact validation
//
//$(function () {
//    // Initialize form validation on the registration form.
//    // It has the name attribute "registration"
//    $("form[name='registration']").validate({
//        // Specify validation rules
//        rules: {
//            // The key name on the left side is the name attribute
//            // of an input field. Validation rules are defined
//            // on the right side
//            name: "required",
//            assunto: "required",
//            email: {
//                required: true,
//                // Specify that email should be validated
//                // by the built-in "email" rule
//                email: true
//            },
//        },
//
//        // Specify validation error messages
//        messages: {
//            firstname: "Please enter your email",
//            lastname: "Please enter your lastname",
//            email: "Please enter a valid email address"
//        },
//        // Make sure the form is submitted to the destination defined
//        // in the "action" attribute of the form when valid
//        submitHandler: function (form) {
//            form.submit();
//        }
//    });
//});

// FILTER

$(function () {
    var selectedClass = "";
    $(".fil-cat").click(function () {
        selectedClass = $(this).attr("data-rel");
        $("#products").fadeTo(100, 0.1);
        $("#products div").not("." + selectedClass).fadeOut().removeClass('scale-anm');
        setTimeout(function () {
            $("." + selectedClass).fadeIn().addClass('scale-anm');
            $("#products").fadeTo(300, 1);
        }, 300);

    });
});


// SKEW WEBSITE
//window.onload = function () {
//    const section = document.querySelector('section');
//    let currentPixel = window.pageYOffset;
//
//    const looper = function () {
//        const newPixel = window.pageYOffset;
//        const diff = newPixel - currentPixel;
//        const top = 10;
//        const intensity = 0.01;
//        const speed = top * ((2 / (1 + Math.exp(-1 * intensity * diff))) - 1);
//
//        section.style.transform = `skewY(${speed}deg)`;
//        currentPixel = newPixel;
//
//        requestAnimationFrame(looper);
//    }
//
//    looper();
//};

//window.onload = function () {
//    var offsetHeight = document.getElementById("main").offsetHeight;
//    document.getElementsByClassName("pattern").style.height = offsetHeight + 'px';
//}



window.onload = function () {
    var bodyHeight = $('section').outerHeight();
    $('.pattern').css('height', bodyHeight);
    $('.decolines').css('height', bodyHeight);
    console.log(bodyHeight);
}

var bodyHeight = $('.categories-list img').outerHeight();
$('.categories-caption').css('height', bodyHeight);
