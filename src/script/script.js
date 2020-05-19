const GreetTyper = function(ObjGreet){
    this.ObjGreet = ObjGreet
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(2000, 10);
    this.typing();
    this.checkIfEx();
    this.isDeleting = false;
}

GreetTyper.prototype.checkIfEx = function(){
    let blackList = ['mantan', 'doi', 'dee', 'gebetan'];
    let check = this.ObjGreet[this.wordIndex].category.split(' ');
    let string = ``;
    check.forEach(item => {
        if (blackList.includes(item.toLowerCase())) {
            string += `<span class="warning">${item}</span> `
        } else {
            string += `${item} `
        }
    });

    return string;
}
// fungsi typing
GreetTyper.prototype.typing = function() {
    const fullTxt = this.ObjGreet[this.wordIndex].greeting;

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1)
        if (this.txt === '') {
            document.getElementById("title").innerHTML = this.checkIfEx()
        }
    } else {
        document.getElementById("title").innerHTML = this.checkIfEx()
        this.txt = fullTxt.substring(0, this.txt.length + 1)
    }

    document.getElementById("greet").innerHTML = `<span class="txt">${this.txt}</span>`;

    let speed = 300;

    if (this.isDeleting) {
        speed /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
        speed = this.wait;

        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        if (this.wordIndex === this.ObjGreet.length-1) {
            this.wordIndex = 0;
        } else {
            this.wordIndex++
        }
        speed = 500;
    }

    setTimeout(() => this.typing(), speed);
}
// init DOM
document.addEventListener("DOMContentLoaded", init)

// obj greeting
const greeting = [{
    category: "Ucapan lebaran",
    greeting: 'Selamat Hari Raya Idul Fitri 1441 H'
}]

// fungsi init
function init() {
    let history = JSON.parse(localStorage.getItem('greeting_data')) === null ? greeting : JSON.parse(localStorage.getItem('greeting_data')) ;
    new GreetTyper(history)
    addToList()
}
