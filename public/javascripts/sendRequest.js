function showNumbers(magic,game,number) {
    var xhttp;
    var system=document.getElementById("myDropDown").value;
    system=Number(system);
    console.log(system);
    if (number == "") {
      document.getElementById("warning").innerHTML = "Please input something";
      return;
    }
    if (Number.isInteger(Number(number))){
      if (Number(number) >0){
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            document.getElementById("postHint").innerHTML = "Here are your lucky numbers :"
            document.getElementById("postNubmers").innerHTML = this.responseText;
            document.getElementById("warning").innerHTML = "";
          }
        };
        xhttp.open("POST", "/"+game, true);
        xhttp.setRequestHeader("Content-type", "application/json");
        //xhttp.open("GET", "/ajax/test2"+str, true);
        var data = JSON.stringify({"Magic":magic,"game":game,"number":number,"system":system});
        xhttp.send(data);
      }
      else{
        document.getElementById("warning").innerHTML = "Please input a postive integer, OK ?";
        document.getElementById("postHint").innerHTML = "";
        document.getElementById("postNubmers").innerHTML = "";
		    return;
      }
    }else{
       document.getElementById("postHint").innerHTML = ""
       document.getElementById("postNubmers").innerHTML = "";
       document.getElementById("warning").innerHTML = "Please input a postive integer";
    }
}
