window.addEventListener('load',function(){
    var d = JSON.parse(localStorage.getItem('loginUser'))
    var logged = document.getElementById('name');
    logged.textContent =  d['name']
    var form=document.getElementById('form');
    form.addEventListener('submit',addTransactions)
    
})

function loadData(key) {
    return JSON.parse(localStorage.getItem(key))
}
function saveData(key, data) {
    localStorage.setItem(key, JSON.stringify(data))
}


function addTransactions(){
    event.preventDefault();
    var form=new FormData(event.target);

    var title=form.get('title');
    var type=form.get('type') ;
    var amount= Number(form.get('amount'))

   var data= JSON.parse(localStorage.getItem('data'))
    
    var transaction={title: title, type:type, amount:amount, timestamp:new Date().toUTCString()}
    var d = JSON.parse(localStorage.getItem('loginUser'))
     
    var email=d['email']
    // console.log(email)
    for(var i=0;i<data.length;i++){
        if(email==data[i]['email']){
            localStorage.setItem('dash',JSON.stringify(data[i]))
            data[i].transactions.push(transaction)
            saveData('data',data)
            showTransactions(data[i]['transactions'] )
        }
    }
}

function showTransactions(details ){
    // var details= JSON.parse(localStorage.getItem('data'))[0]['transactions']
    // console.log(details)
    // var tbody=document.getElementById('tbody');
    
    // tbody.innerHTML=""
    let count=details.length-5;
    for(let i=details.length-1;i>=count;i--) {
        
        var tbody=document.getElementById('tbody');
         
        var tag=document.createElement('tr');
        
        var td=document.createElement('td');
        

        var td1=document.createElement('td');
        td1.textContent=details[i]['title']
        
        var td2=document.createElement('td');
        td2.textContent=details[i]['type']
        
        var td3=document.createElement('td');
        td3.textContent=details[i]['amount']

        var td4=document.createElement('td');
        td4.textContent= details[i]['timestamp']
         
        tag.append(td,td1,td2,td3,td4);
        
        
        tbody.append(tag)
    };

    
}
