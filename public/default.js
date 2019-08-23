var spins = 0;

function windowOnload(){
    var vid = document.getElementById("catVideo");
    vid.play();
    vid.onended = function() {
        updateCounter();
        var vid = document.getElementById("catVideo");
        vid.play();
    };
}

function updateCounter(){
    spins++;
    var topText = document.getElementById("topText");
    var newText = "Number of full spins : " + spins;
    topText.innerHTML = newText;
}