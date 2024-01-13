const headline = document.querySelector(".headline");

console.log(headline.innerHTML); //returns the content which is inside .headline

headline.innerHTML = "<h1>Hello I am kuldeep</h1>"; //Change the inner html
headline.innerHTML += "<button class=\"btn\">Kuldeep Jhala</button>" //add content inside inner html

