console.log("hi im runnng");



  // ----------------------------------- modal ----------------------------------------------------




  // ----------------------------------- follow ----------------------------------------------------

  $(document).mousemove(function(e){
    $("#image").css({left:e.pageX, top:e.pageY});
});
$( document ).on( "mousemove", function( event ) {
  $( "#log" ).text( "pageX: " + event.pageX - ", pageY: " + event.pageY );
  $( "#tooltip" ).css({ "left" : event.pageX - 50, "top" : event.pageY - 50});
  $( "#image" ).css({ "left" : event.pageX - 50, "top" : event.pageY - 50});
});






  // --------------------------------------------------------- time and date at top




  $(document).ready(function() {
    // Create two variables with names of months and days of the week in the array
    var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]; 
    var dayNames= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    
    
  
    
    setInterval( function() {
        // Create an object newDate () and extract the second of the current time
        var seconds = new Date().getSeconds();
        // Add a leading zero to the value of seconds
        $("#sec").html(( seconds < 10 ? "0" : "" ) + seconds);
        },1000);
        
    setInterval( function() {
        // Create an object newDate () and extract the minutes of the current time
        var minutes = new Date().getMinutes();
        // Add a leading zero to the minutes
        $("#min").html(( minutes < 10 ? "0" : "" ) + minutes);
        },1000);
        
    setInterval( function() {
        // Create an object newDate () and extract the clock from the current time
        var hours = new Date().getHours();
        // Add a leading zero to the value of hours
        $("#hours").html(( hours < 10 ? "0" : "" ) + hours);
        }, 1000);
        
    }); 
  
  
  
  
  // Date
  function updateDate() {
    let today = new Date();
  
    // return number
    let dayName = today.getDay(),
      dayNum = today.getDate(),
      month = today.getMonth();
      // year = today.getFullYear();
  
    const months = [
      "Jan",
      "Feb",
      "March",
      "April",
      "May",
      "June",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const dayWeek = [
      "Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"
    ];
    // value -> ID of the html element
    const IDCollection = ["day", "daynum", "month"];
    const IDCollection2 = ["day2", "daynum2"];
    // return value array with number as a index
    const val = [dayWeek[dayName], dayNum, months[month], ];
    for (let i = 0; i < IDCollection.length; i++) {
      document.getElementById(IDCollection[i]).firstChild.nodeValue = val[i];
    }
  
    const val2 = [dayWeek[dayName], dayNum, months[month], ];
    for (let i = 0; i < IDCollection2.length; i++) {
      document.getElementById(IDCollection2[i]).firstChild.nodeValue = val[i];
    }
  }
  
  updateDate();
  





 
  