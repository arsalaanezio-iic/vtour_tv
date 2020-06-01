$(document).ready(function () {
    // Handler for .ready() called.

    $("#contact-form").submit(function (e) {
        e.preventDefault();
    });



    $(".howitworks-button").click(function () {
        $('html,body').animate({
            scrollTop: $(".howitworks-section").offset().top - 150
        },
            2000);
    });

    $(".contacts-button").click(function () {
        $('html,body').animate({
            scrollTop: $(".contacts-section").offset().top - 50
        },
            2000);
    });

    $(".anchorTop").click(function () {
        $('html,body').animate({
            scrollTop: $(".backgroundLayer").offset().top - 50
        },
            2000);
    });

});





function valdateContactform() {
    var body = {
        name: $("#name").val(),
        email: $("#email").val(),
        message: $("#message").val(),
    }

    $.ajax({
        url: '/contactusmail',
        type: 'POST',
        data: body,
        beforeSend: function () {
            $(".overlay").css("display", "flex");
            $(".overlay").html("Sending Please Wait !!");
            $("body").css("overflow-y", "hidden");
        },
        success: function (data, status) {
            if (data.status) {
                $("#contact-form").trigger("reset");
                $(".overlay").html("Mail Sent Successfully !!");

                setTimeout(function () {
                    $(".overlay").html("");
                    $(".overlay").css("display", "none");
                    $("body").css("overflow-y", "auto");
                }, 2000)
            }
        }
    });
}