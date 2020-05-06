$("#apisearchbutton").on("click", function () {
  var value = $("#apisearch").val();

  $.ajax("/api/search/" + value, {
    type: "GET",
  }).then(function (response) {
    //  console.log(response[0].entities)
    $("#todo").attr("src",response.data[1].result_object.category.name);
    $("#places").attr("src",response.data[1].result_object.subcategory[0].name);
    $("#pictures").attr("src",response.data[1].result_object.photo.images.small.url);
    console.log(response.data[1].result_object.photo.images.small.url);
  });
});
