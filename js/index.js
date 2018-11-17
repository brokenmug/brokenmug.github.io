$(document).ready(function() {
    $('.subscribe').click(function () {
        if($(this).hasClass('btn-primary')) {
            $('.form-email').addClass('hidden');
            $(this).removeClass('btn-primary');

            $(this).html('Subscribed <i class="fas fa-check"></i>');
            $(this).addClass('btn-success');
            $(this).parent().parent().append('<span style="color: lavender">Just kidding, this is just a test :D</span>');
        }
    });
});

