var topic = [
    "Heavy Metal", "New Wave Of British Heavy Metal", "Speed Metal", "Hair Metal", "Doom Metal", "Grindcore","Thrash Metal", "Stoner Metal", "Nu Metal", "Black Metal"
];
function alertGenreName() {
    var genre = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        genre + "&api_key=dc6zaTOxFJmzC&limit=10";
        $.ajax({
            url: queryURL,
            method: "GET"
          }).then(function(response) {
                
            var results = response.data;
           
            var results = response.data;
        for (var i = 0; i < results.length; i++) {
           var gifDiv = $("<div class = 'item'>");
  

    
        var p = $("<p>").text("Rating" + results[i].rating); 
          var metalImage = $("<img>");  
    
          metalImage.attr("src", results[i].images.fixed_height.url );
        
          gifDiv.prepend(p);
          gifDiv.prepend(metalImage);
          $("#gifArea").prepend(gifDiv);
            $("#gifArea").on("click", function()
        {
         //how to change sources for image here?
        }

        )
            
    
            }
        }
           ) }

  function renderButtons() {
    $("#buttonArea").empty();
        for (var i = 0; i < topic.length; i++) {
         var a = $("<button>");
         a.addClass("rock");
         a.attr("data-name", topic[i]);
         a.text(topic[i]);
         $("#buttonArea").append(a);}}

    $("#add-button").on("click", function(event) {
        event.preventDefault();
        var genre = $("#genre-input").val().trim();
        genre.push(topic);
        renderButtons(); });



  
  $(document).on("click", ".rock", alertGenreName);


  renderButtons();
  
  $("#newButton").on("click", function(event) {
    event.preventDefault();
    var userPick = $("#genre").val().trim();
    topic.push(userPick);
    renderButtons();
  });
 renderButtons();

