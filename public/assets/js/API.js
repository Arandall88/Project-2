



$("#apisearchbutton").on("click", function(){
     var value = $("#apisearch").val();
        
    $.ajax("/api/search/" + value, {
      type: "GET",
    }).then(function(response) {
      console.log(response.data[1].result_object); 

          //  console.log(response[0].entities)
        $("#todo").text(response.data[1].result_object.category)
        $("#places").text(response.data[1].result_object.subcategory[0].category_counts)
        $("#pictures").attr(response.response.data[1].result_object.photo.images.small)
    });
    // $.ajax("/api/post/" + value, {
    //   type: "POST",
    // }).then(function(response) {
    //   console.log(response);
    // });
  });


  // <h3 id="places">
  //                     Destination?
  //                 </h3>
  //                 <p id="todo">
  //                   Hotels And Things to do.
  //                 </p>
  //                 <img id="pictures"