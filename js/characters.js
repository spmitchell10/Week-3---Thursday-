$.ajax({url: "https://gateway.marvel.com:443/v1/public/characters?limit=12&apikey=514aba9de2d628c8f5b8e097bfee3a26", 
        success: function(response){
        response.data.results.forEach(function(comic){
          $('#characters').append( `
            <div class="comic col-md-3">
              <h2 class="charactername">${comic.name}</h2>
              <img class="characterphoto" src="${comic.thumbnail.path}.${comic.thumbnail.extension}" />
              <h3 class="learnmore">Learn More</h3>
            </div>        
          `);
      })
}});

$.ajax({url: "https://gateway.marvel.com:443/v1/public/characters?limit=12&offset=12&apikey=514aba9de2d628c8f5b8e097bfee3a26", 
        success: function(response){
        response.data.results.forEach(function(comic){
          $('#characters2').append( `
            <div class="comic col-md-3">
              <h2 class="charactername">${comic.name}</h2>
              <img class="characterphoto" src="${comic.thumbnail.path}.${comic.thumbnail.extension}" />
              <h3 class="learnmore">Learn More</h3>
            </div>        
          `);
      })
}});

$("body").on("click",".learnmore",function(response){
    response.data.results.forEach(function(comic)
    $("#myModal").modal()
})

    // Then just just say that you want your modal to show up. So if your modal has an id of myModal