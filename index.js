function loadData(callbackF) {
    // create a new request
    const xhr = new XMLHttpRequest();

    // what to do when response arrives
    xhr.onload = function() {
        callbackF(this);
    };

    // prepare request - methods: GET, POST, PUT, PATCH, DELETE, OPTIONS
    xhr.open("GET", "./data/data.txt");


    xhr.send();

}

function myCallback1(xhr) {
    const container = document.getElementById("demo");
    container.innerHTML = xhr.responseText;
}

function myCallback2(xhr) {
    const container = document.getElementById("demo2");
    container.innerHTML = xhr.responseText;
}