$(document).ready(function() {
	
    $('.toggle-nav').click(function(e) {
        $(this).toggleClass('active');
        $('.nav-menu ul').toggleClass('active');

        e.preventDefault();
    });
});
