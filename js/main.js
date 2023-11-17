
// IIFE
(function(){
    //code starts here
    document.getElementById("myHeading").innerHTML ="Changed";
    document.querySelector("nav ul li").setAttribute('class', 'currentPage');
    // silly example
    document.querySelector("nav ul li a").setAttribute("href", "https://www.google.co.uk");

    document.getElementById('myTestEvent').addEventListener('click', myFunction(ev)); 

    document.querySelector(".red colPicker").addEventListener('click', function(ev){
        document.queryselector('body').setAttribute("class","redBack");
    });
    document.querySelector(".blue colPicker").addEventListener('click', function(ev){
        document.queryselector('body').setAttribute("class","blueBack");
    });
    document.querySelector(".green colPicker").addEventListener('click', function(ev){
        document.queryselector('body').setAttribute("class","greenBack");
    });
    document.querySelector(".reset colPicker").addEventListener('click', function(ev){
        document.queryselector('body').removeAttribute("class","redBack");
    });
    


    

    //code ends here
})();

function myFunction(ev){
    console.dir(ev);
}

