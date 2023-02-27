var win = Math.floor(Math.random() * 9)
var lose = Math.floor(Math.random() * 9)

if(win === lose) {
    var win = Math.floor(Math.random() * 9)
    var lose = Math.floor(Math.random() * 9)
}

const treasure = (location) => {
    
    if(win === location){
        document.getElementById(location).innerHTML = "🎊"
        return alert("win!")
    }else if(lose === location){
        document.getElementById(location).innerHTML = "💥"
        return alert("You lose!!!!")
    }else {
        document.getElementById(location).innerHTML = "🎄"
        return alert("Try again!")
    }
}


