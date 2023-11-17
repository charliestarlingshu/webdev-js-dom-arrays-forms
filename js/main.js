
// IIFE
(function(){
    //code starts here
    document.getElementById("myHeading").innerHTML ="Changed";
    document.querySelector("nav ul li").setAttribute('class', 'currentPage');
    // silly example
    document.querySelector("nav ul li a").setAttribute("href", "https://www.google.co.uk");

    document.getElementById('myTestEvent').addEventListener('click', myFunction()); 

    document.querySelector(".red").addEventListener('click', function(ev){
        document.querySelector('body').setAttribute("class","redBack");
    });
    document.querySelector(".blue").addEventListener('click', function(ev){
        document.querySelector('body').setAttribute("class","blueBack");
    });
    document.querySelector(".green").addEventListener('click', function(ev){
        document.querySelector('body').setAttribute("class","greenBack");
    });
    document.querySelector(".reset").addEventListener('click', function(ev){
        document.querySelector('body').removeAttribute("class","redBack");
    });
    


    

    //code ends here
})();

function myFunction(){
    console.info("hi");
}

