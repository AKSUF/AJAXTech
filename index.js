function loadData() {
    // create a request
    const xhr = new XMLHttpRequest();
    //request preparation
    xhr.onload = function() {
        const container = document.getElementById('demo');
        demo.innerHTML = xhr.responseText;
    };
    //prepare request-method :GET,POST,PATCH,DEETE
    xhr.open("GET", "./data/data.txt");
    //send request
    xhr.send();

}