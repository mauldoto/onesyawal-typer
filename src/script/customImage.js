function checkBackgreen () {
    if (typeof(Storage) !== "undefined") {
        const CACHE_KEY = 'bg_data' 

        let bgImg = document.getElementById("backgreen").files[0];
        readURL(bgImg);

        // localStorage.setItem(CACHE_KEY, JSON.stringify(bgImg));

    } else {
       alert("Sorry, your browser does not support Web Storage...");
       return
    }
}

function readURL(files){
    var reader = new FileReader();
    reader.onloadend = function(){
       document.querySelector('body').style.backgroundImage = "url(" + reader.result + ")";        
    }

    if(files){
       reader.readAsDataURL(files);
    }
 }

let ctrImg = document.getElementById("backgreen");
ctrImg.addEventListener('change', checkBackgreen, true)


