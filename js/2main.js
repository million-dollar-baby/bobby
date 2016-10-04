function initialize() {
    $('#container').fadeOut("fast", function(){
                            $('#container').html('<section id="photos"></section>');
                            loadImages();
                            });
    $('#container').fadeIn("slow");
}

function loadImages() {
    var t = 100; //Change this to Number of Images in the folder
    var i = 1;
    for(var i=1; i<t;i++){
        $('#photos').append('<div id="img-container"><img id="' + i + '" onmouseleave="hideInfo(' + i + ')"  onmouseover="showInfo(' + i +')" onmousedown="showImg(' + i + ')"src="2images/' + i + '.jpg" onError="this.remove();"/></div>');
    }
}

function showInfo(id) {
    var divID = '#' + id;
    $(divID).animate({opacity: 0.5}, 100);
}

getElementById('img-container').addEventListener("mouseleave", hideInfo);

function hideInfo(id) {
    var divID = '#' + id;
    $(divID).animate({opacity: 1}, 300);
}

function showImg(id) {
    $('#container').fadeOut("fast", function(){
                            $('#container').append('<img style="display: block; margin-left: auto; margin-right: auto;" src="2images/' + id + '.jpg" onmousedown="initialize()"/>');
                            $('#photos').css('display', 'none');
                            });
    $('#container').fadeIn("slow");
}