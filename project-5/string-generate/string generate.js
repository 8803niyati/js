function generate() {
    let randomString = Math.random().toString(36).slice(2); 
    document.getElementById("string-ans").innerHTML = "${randomString}";
}