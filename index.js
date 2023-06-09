function loadData(callbackF) {
    // create a new request
    const xhr = new XMLHttpRequest();

    // what to do when response arrives
    xhr.onload = function() {
        const container = document.getElementById("demo");
        container.innerHTML = this.responseText;
        console.log(this.getAllResponseHeaders("etag"));
    };

    // prepare request - methods: GET, POST, PUT, PATCH, DELETE, OPTIONS
    xhr.open("GET", "./data/data.txt");


    xhr.send();

}