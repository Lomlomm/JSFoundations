let username = prompt("Username: ")
if (username == 'Admin'){
    let password = prompt("Password: ")
    if (password == 'TheMaster'){
        alert("Welcome!")
    }
    else if(password == '' || password == null){
        alert('Canceled')
    }
    else{
        alert('Wrong answer')
    }
}