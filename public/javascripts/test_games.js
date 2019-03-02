function numOfGames(){
    var numOfGamesVal = document.getElementById("numOfGamesToPlay");
    var defaultInput = numOfGamesVal.defaultValue;
    var aInput = numOfGamesVal.value;
    console.log(aInput);
    if(Number.isInteger(aInput)){
        if (aInput > 0){
            document.getElementById("showNums").innerHTML = '<table id="numbers"><tr><th>Game</th><th>Numbers</th></tr>';
            document.getElementById('showNums').style.display = "block";
        }else{
            document.getElementById('showNums').style.display = "block";
            document.getElementById("showNums").innerHTML = '<div class="panel">Please input a positive number.</div>';
            console.log("output is " + aInput);
        }
    }else{
        document.getElementById("showNums").innerHTML = '<div class="panel">Please input a positive number.</div>';
    }
}