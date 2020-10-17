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

    var form = document.querySelector('form');
    form.addEventListener('submit',handleDashboard);
})


function handleDashboard(){
    event.preventDefault();
    //console.log(event.target)
    var form = new FormData(event.target);
    var title = form.get('title');
    var type = form.get('type')
    var amount = form.get('amount')

    var tran  = JSON.parse(localStorage.getItem('loginUser'));
    console.log(tran)
    tran['transactions'].push({title,type,amount})

    var data = JSON.parse(localStorage.getItem('data'));

    data[data.length-1]['transactions'].push({title,type,amount})

    console.log(data)
}