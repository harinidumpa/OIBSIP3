function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");

  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  function funct(){
    document.getElementById("drop").textContent="celsius ⏬";
  }
  function funct2(){
    document.getElementById("drop").textContent="fahrenheit⏬";
  }
  function funct3(){
    document.getElementById("drop").textContent="kelvin ⏬";
  }
  function function_clear(){
    document.getElementById("input").value="";
    document.getElementById("drop").textContent="celsius ⏬";
    document.getElementById("res2").value="";
    document.getElementById("res1").value="";
    document.getElementById("resp1").innerHTML="Temperature in fahrenheit";
        document.getElementById("resp2").innerHTML="Temperature in kelvin";

  }
  function function_convert()
  {     if (/^(-?)(\d+)(\.{1}\d+)?$/.test(document.getElementById("input").value)){
    let converter=parseInt(document.getElementById("input").value);
    if(document.getElementById("drop").textContent==="celsius ⏬")
    {
        document.getElementById("resp1").innerHTML="Temperature in fahrenheit";
        document.getElementById("resp2").innerHTML="Temperature in kelvin";
        let valuen= (converter * 1.8) + 32;
        let kelval=(converter+273.15);
        document.getElementById("res2").value=kelval.toFixed(2)+"\u00B0"+"K";
        document.getElementById("res1").value=valuen.toFixed(2)+"\u00B0"+"F";
    }
    else if(document.getElementById("drop").textContent==="fahrenheit⏬")
    {
        document.getElementById("resp1").innerHTML="Temperature in celsius";
        document.getElementById("resp2").innerHTML="Temperature in kelvin";
        let valuen = (converter - 32) / 1.8;
        document.getElementById("res1").value=valuen.toFixed(2)+"\u00B0"+"C";
        let kelval=valuen+273.15;
        document.getElementById("res2").value=kelval.toFixed(2)+"\u00B0"+"K";
    }
    else if(document.getElementById("drop").textContent==="kelvin ⏬")
    {
        document.getElementById("resp1").innerHTML="Temperature in celsius";
        document.getElementById("resp2").innerHTML="Temperature in fahrenheit";
        let celval=converter - 273.15 ;
        document.getElementById("res1").value=celval.toFixed(2)+"\u00B0"+"C";
        let farval=(celval * 1.8) + 32;
        document.getElementById("res2").value=farval.toFixed(2)+"\u00B0"+"F";
    }
}
else{
    alert("Invalid data entered. Please provide a number.");
    function_clear();
}
  }