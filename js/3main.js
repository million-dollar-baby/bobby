function initialize() {
    $('#container').fadeOut("fast", function(){
        $('#container').html('<section id="photos"></section>');
        loadImages();
    });
    $('#container').fadeIn("slow");
}

function loadImages() {
    var numOfImages = 150; // Change this to the number of images in the folder
    var photosDiv = $('#photos');
    
    for (var i = numOfImages; i >= 1; i--) {
        photosDiv.append('<div class="img-container"><img id="' + i + '" onmouseleave="hideInfo(' + i + ')" onmouseover="showInfo(' + i + ')" onmousedown="showImg(' + i + ')" src="3images/' + i + '.jpg" onError="this.remove();"/></div>');
    }
}

function showInfo(id) {
    var divID = '#' + id;
    $(divID).animate({ opacity: 0.5 }, 100);
}

function hideInfo(id) {
    var divID = '#' + id;
    $(divID).animate({ opacity: 1 }, 300);
}

function showImg(id) {
    $('#container').fadeOut("fast", function(){
        $('#container').html('<img style="display: block; margin-left: auto; margin-right: auto;" src="3images/' + id + '.jpg" onmousedown="initialize()"/>');
        $('#photos').css('display', 'none');
    });
    $('#container').fadeIn("slow");
}

$(document).ready(function() {
    initialize();
});
