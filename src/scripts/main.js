document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('form').addEventListener('submit', function(evento){
        evento.preventDefault();

        let numA = parseInt(document.getElementById('numA').value);
        let numB = parseInt(document.getElementById('numB').value);
        
        document.getElementById('result-val').innerText = numA+numB;
        document.querySelector('.result').style.display = 'block';
    })
})