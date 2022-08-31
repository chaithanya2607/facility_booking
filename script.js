let form = document.getElementById("form");

var table = document.createElement("table");//Creating a table
table.style.border = "1px solid #000";//table border
table.style.width="500px";//table width
var thead = document.createElement("thead");
var tr = document.createElement("tr");
tr.style.border = "1px solid #000";
var th1 = document.createElement("th"); //Input 
th1.innerText = "Booking Details";
th1.style.border = "1px solid #000";
var th2 = document.createElement("th"); //Output
th2.innerText = "Status";
tr.append(th1, th2);
thead.append(tr);
var price1 = 300;
var price2 = 500;
var price3 = 150;
var arr = [];


function Facilitytable(event) {
  event.preventDefault();
 
  if (
    facility.value == 0 ||
    date.value == 0 ||
    time1.value == 0 ||
    time2.value == 0
  ) {
    alert("Please enter the date and time");
    result.innerText = ``;
  } //To avoid entering incomplete values into table.

  var tbody = document.createElement("tbody");
  var tr = document.createElement("tr");
  var input = document.createElement("td");
  input.style.border = "1px solid #000";
  var inputfacility = document.getElementById("facility").value;
  var inputdate = document.getElementById("date").value;
  var inputfrom = document.getElementById("time1").value;
  var inputto = document.getElementById("time2").value;
  input.innerText =inputfacility + "," + inputdate + "," + inputfrom + "-" + inputto;
  var result = document.createElement("td");
  result.style.border = "1px solid #000";
  tr.append(input, result);
  tbody.append(tr);
  table.append(thead, tbody);
  document.body.append(table);

  var t1= parseFloat(time1.value);
  var t2= parseFloat(time2.value);
  var total=t2-t1;
 

    if (facility.value == "Clubhouse" && time1.value >= "16:00") {
      var price = price2*total;
    }
    //assuming facilities only starts from 10:00  and above
     else if (facility.value == "Clubhouse" && time1.value >= "10:00" && time1.value<="16:00") {
      var price =  price1*total;
    } 
    else if (facility.value == "Tennis Court"  && time1.value >= "10:00") {
      var price = price3*total;
    } 
    else {
          alert("please enter correct time");
    }

    result.innerText = `Booked, Rs ${price}/-`;
    for (var i=0;i<arr.length;i++){
        if(arr[i]==`${facility.value},${date.value},${t1},${t2}`){
            result.innerText="Booking Failed,Already booked";
        }
        else{
            console.log("booked");
        }
    }
    arr.push(`${facility.value},${date.value},${t1},${t2}`);
    console.log(arr);
    
  }
  
