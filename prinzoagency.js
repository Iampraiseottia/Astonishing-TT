function MyFunction(){
    var x;
    x = alert("Thanks for Contacting PRINZO's AGENCY | We would get back to you Shortly!. Relax and Travel safe")
    return x;
}
1
function MyFunction$1(){
    
    var message = document.getElementById('result');
    message.innerHTML = '';
    var result = document.getElementById('message').value;
    try{
        if (result == ''){
            throw 'Invalid!!! input, Please re-enter Input';
        }
        else if (Number(result)){
            throw 'Enter a text!!!, Number is invalid';
        }
        else{
            throw 'ok'
        }
        
    }

    catch(err){
        message.innerHTML = 'Please' + err;
    }

    finally{
        document.getElementById('message').value;
    }
    
}