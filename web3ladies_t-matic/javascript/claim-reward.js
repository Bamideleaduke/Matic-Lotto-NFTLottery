const connect = document.getElementById('connect')

function myFunction() {
    document.querySelectorAll('.connect-container')[0].style.display= 'block';
}


function nextConnect() {
    document.querySelectorAll('.connect-container')[0].style.display= 'none';
    document.querySelectorAll('.connect-container')[1].style.display= 'block';
    
}