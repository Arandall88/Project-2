$(document).ready(function () {
  $("#hotel-search-button").on("click", function (event) {
    event.preventDefault();
    console.log("search button");
    const searchTerm = $("#hotel-search-bar").val();
    console.log(searchTerm);
    window.location.replace(`/search/${searchTerm}`);
  });
});
