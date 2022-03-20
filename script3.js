console.log("Welcome to Food Guesser") ; 

var str  ; 
const imageUrl = "https://foodish-api.herokuapp.com/api/";
(async () => {
    const response = await fetch(imageUrl)
    const data = await response.json()
    // console.log(data)
    document.getElementById("imgFood").src = data.image ; 
    str = data.image ; 
  })();

function fn1(){
    let i = 41 ; 
    while(i < str.length){
        if(str.charAt(i) === '/'){
            break ; 
        }
        i++ ; 
    }
    str.substring(41,i) ; 
    var str2 = document.getElementById('guessInput').value ; 
    if(str === str2){
        alert("Correct Answer!") ;
    }
    else{
        alert("Wrong Answer!") ; 
    }
}