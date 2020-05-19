function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    const list = document.querySelectorAll('.input-style');
    list.forEach(item => item.style.opacity = '1')
}

function closeNav() {
    const list = document.querySelectorAll('.input-style');
    list.forEach(item => item.style.opacity = '0')
    document.getElementById("mySidenav").style.width = "0";
}

let button = document.getElementById("sub");
button.addEventListener('click', btnHandler)

function btnHandler(){
    if (typeof(Storage) !== "undefined") {
        const CACHE_KEY = 'greeting_data' 
        let history = JSON.parse(localStorage.getItem(CACHE_KEY));
        // Retrieve
        if (history === null) {
            history = [];
        }
        let category = document.getElementById("kategori").value
        let greeting = document.getElementById("ucapan").value

        if (category === '' && greeting === '') {
            alert("isi semua form nya ya akhi/ukhty !!!");
            return
        } else if (greeting.length > 50) {
            alert("Maksimal karakter cuma 50 ya akhi/ukthy");
            return
        }

        data = {
            category: category,
            greeting: greeting
        }

        if (history.length < 3) {
            history.push(data)
        }
        
        localStorage.setItem(CACHE_KEY, JSON.stringify(history));
        addToList(history)
        location.reload();

    } else {
       alert("Sorry, your browser does not support Web Storage...");
       return
    }
    
    document.getElementById("myForm").reset();
}