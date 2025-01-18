// JavaScript Document

$('#subscribeform').submit(function() {



    var action = $(this).attr('action');



    $("#mesaj").slideUp(750, function() {







        $('#mesaj').hide();



        $('#subsubmit')







        .after('')







        .attr('disabled', 'disabled');



        $.post(action, {







                email: $('#subemail').val()







            },







            function(data) {







                document.getElementById('mesaj').innerHTML = data;







                $('#mesaj').slideDown('slow');







                $('#subscribeform img.subscribe-loader').fadeOut('slow', function() { $(this).remove() });







                $('#subsubmit').removeAttr('disabled');







                if (data.match('success') != null) $('#subscribeform').slideUp('slow');



            }







        );







    });







    return false;







});


$(document).ready(function() {
    $("body").mousemove(function(t) {
        var i = $(".js-search").find(".eye:hover").length,
            n = $(".eye"),
            o = n.offset().left + n.width() / 2,
            s = n.offset().top + n.height() / 2,
            r = Math.atan2(t.pageX - o, t.pageY - s),
            a = r * (180 / Math.PI) * -1 + 180;
        1 !== i && n.css({
            "-webkit-transform": "rotate(" + a + "deg)",
            "-moz-transform": "rotate(" + a + "deg)",
            "-ms-transform": "rotate(" + a + "deg)",
            transform: "rotate(" + a + "deg)"
        });
    });
    $('#search').click(function() {
        $('.searchs').css('display', 'block');
        // alert('g');

    });

    $('#cl-search').click(function() {
        $('.searchs').css('display', 'none');
    })
});