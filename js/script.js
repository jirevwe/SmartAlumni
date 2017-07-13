$(document).ready(function() {

    $('.toggle-nav').click(function(e) {
        $(this).toggleClass('active');
        $('.nav-menu ul').toggleClass('active');

        e.preventDefault();
    });

    var modal = document.getElementById('beta-modal'); //modal

    //button
    var btn = document.getElementById('beta-btn');

    //close 
    var span = document.getElementsByClassName('close')[0];

    // When the user clicks the button, open the modal 
    btn.onclick = function() {
        modal.style.display = "flex";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

});
