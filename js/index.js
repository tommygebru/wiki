$(document).ready(function() {
  //click on Search
  
  
  /*fix up a version without search button
  
$( "#searchBar" ).keypress(function( event ) {
  if ( event.which == 13 ) {
     event.preventDefault();

}*/
  
  
  $("#search").click(function() {
    //use the search term
    var searchTerm = $("#searchBar").val();
    //new url with the Search Term
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&format=json&callback=?";

    //the api call

    $.ajax({
      type: "GET",
      url: url,
      asynch: false,
      dataType: "json",
      success: function(data) {
     //var getterm = data[1][0];
     //console.log(getterm);
 
    // var getdef = data[2][0].substring(0, 140) + "...";
     //console.log(getdef);
            
    //var getlink = data[3][0];
    //console.log(getlink);
        
        
        
        
        $("#output").html("");
        for(var i=0; i<data[1].length; i++){
        $("#output").append("<li><a href='" + data[3][i] + "'>"+data[1][i]+"</a><p>"+data[2][i].substring(0, 140) + "..."+"</p></li>");
        }//end loop
        
        
        
        
      },
      error: function(errorMessage) {
        alert("Error");
      }
    }); //ajax

  }); //search

}); //document