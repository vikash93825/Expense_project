window.addEventListener('load',function(){
    var d = JSON.parse(localStorage.getItem('loginUser'))
    var logged = document.getElementById('name');
    logged.textContent = d.email
    /*var user = localdata('data') || "";
    if(user=""){
        document.body.innerHTML = "<h1>Invalid valid<h1>"
    }
    else{

    }*/
})
