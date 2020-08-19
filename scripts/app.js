//grab the differnet elements 
let portfolioBtn = document.getElementById("view-portfolio")
let cvBtn = document.getElementById("view-cv")
let wrapper = document.getElementById('wrapper')
let portfolio = document.getElementById("portfolio")

// Event Listeners for the variious elements

portfolioBtn.addEventListener('click', function(){
    if  (portfolio.style.display === "none"){
        portfolio.style.display = "block";
        portfolioBtn.innerText = "Close Portfolio";
    } else {
        portfolio.style.display = "none";
    }
       
})

cvBtn.addEventListener('click', function(){
 if  (wrapper.style.display === "none"){
     wrapper.style.display = "block";
    cvBtn.innerText = "Close CV";
 } else {
     wrapper.style.display = "none";
 }
    
})