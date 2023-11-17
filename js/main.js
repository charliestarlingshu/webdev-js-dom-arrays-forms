
// IIFE


(function(){
    //code starts here
    document.getElementById("myHeading").innerHTML ="Changed";
    document.querySelector("nav ul li").setAttribute('class', 'currentPage');
    // silly example
    document.querySelector("nav ul li a").setAttribute("href", "https://www.google.co.uk");

    document.getElementById('myTestEvent').onclick = myFunction; 
    //code ends here
})();


function myFunction(){
    console.info('hi');
}

