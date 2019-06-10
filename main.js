    function changecolor(id) {

        document.getElementById("c").style.background = document.getElementById(id).innerHTML
    }


    $(document).ready(function () {

        $('.all').hide();

        $("#scroll-indicator").click(function () {
            $('html,body').animate({
                    scrollTop: $(".all").offset().top
                },
                'slow');

            $('.ins').hide();
            $('.all').delay(200).fadeIn();

        });




        $('form').hide();
        $('menu').hide();

        $(".indicator0").delay(800).fadeIn();
        $(".indicator1").delay(1000).fadeIn();

        $(".colorcontainer").delay(2000).fadeIn();

        $("#next").click(function () {
            $(".colorcontainer").fadeOut();

            $(".indicator1").fadeOut();

            $(".indicator2").fadeIn();
            $("#images").fadeIn();


        });

        $("#next1").click(function () {
            $(".indicator2").fadeOut();
            $(".indicator3").delay("500").fadeIn();

            $("#images2").delay("500").fadeIn();


        });

        $("#next2").click(function () {
            $(".indicator3").fadeOut();
            $(".indicator4").fadeIn();
            $("#drawingmode").fadeIn();
            $("#drawing-mode-options").fadeIn();

        });


        $("#drawing-mode").click(function () {
            $(".indicator4").fadeOut();
            $('menu').fadeIn();
        });


        $("#clear-canvas").click(function () {
            location.reload();
        });


        $('#finish').click(function () {
            $('form').show("slow");
            $('.all').hide('slow');
            $('.ins').hide('slow');



            /* $('body,html').animate({
                 scrollTop: $(this.hash).offset().top
               }, 1000 );*/

            /* $(".save").click(function () {
                 alert($("form").scrollTop() + " px");
             });*/


        });







    });