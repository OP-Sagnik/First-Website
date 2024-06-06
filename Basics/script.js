function Exit() {
    let closeAlert = confirm("Do you really want to close this Window?")
    if (closeAlert == true) {
        window.close()
    }
}


function TypeAnimation() {
    var typed = new Typed('#element', {
        strings: ['Hi. My Name is Sagnik Majumder.', 'This is my First HTML Website'],
        typeSpeed: 50,
    });
}


function FadeInAnimation(){
    document.addEventListener('DOMContentLoaded', function () {
        var image = document.getElementsByClassName('image')[0];
        image.classList.add('fade-in');
    });
}




TypeAnimation()
FadeInAnimation()

