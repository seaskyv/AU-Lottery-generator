function submitMagic() {
    var textVal = document.getElementById("magicNumber");
    document.getElementById('welcomeDiv').style.display = "block";
    if (textVal.value == ""){
        var d = new Date();
        var currentYear = d.getFullYear();
        currentYear =  currentYear.toString();
        currentYear = currentYear.fontcolor("green");
        document.getElementById("seed").innerHTML = '<font size="4">You did not input any magic number, curent year ' + currentYear +' will be used as your magic number.</font>';
    }else{
        var currentVal = textVal.value;
        var currentVal = currentVal.fontcolor("green");
        if (Number.isInteger(Number(textVal.value))){
	        if (Number(textVal.value) >0){
                document.getElementById("seed").innerHTML = '<font size="4">Your input magic number ' + currentVal + " will be used to generate numbers.</font>";
            }
            else{
                document.getElementById("seed").innerHTML = '<font size="4">Your input magic number ' + currentVal + " is not a positive integer, we will choose one for you.</font>";
            }
        }
        else{
            document.getElementById("seed").innerHTML = '<font size="4">Your input magic number ' + currentVal + " is not a integer, we will choose one for you.</font>";

        }
    }
}