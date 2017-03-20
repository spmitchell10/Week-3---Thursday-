$.ajax({url: "https://gateway.marvel.com:443/v1/public/characters?limit=8&apikey=514aba9de2d628c8f5b8e097bfee3a26", 
        success: function(response){
        response.data.results.forEach(function(comic){
          $('#characters').append( `
            <div class="comic col-md-3">
              <h2 class="charactername">${comic.name}</h2>
              <img class="characterphoto" src="${comic.thumbnail.path}.${comic.thumbnail.extension}" />
              <h3 data-title="${comic.name}" data-content="${comic.description}" class="learnmore">Learn More</h3>
            </div>        
          `);
      })
}});

$.ajax({url: "https://gateway.marvel.com:443/v1/public/characters?limit=8&offset=8&apikey=514aba9de2d628c8f5b8e097bfee3a26", 
        success: function(response){
        response.data.results.forEach(function(comic){
          $('#characters2').append( `
            <div class="comic col-md-3">
              <h2 class="charactername">${comic.name}</h2>
              <img class="characterphoto" src="${comic.thumbnail.path}.${comic.thumbnail.extension}" />
              <h3 data-title="${comic.name}" data-content="${comic.description}" class="learnmore">Learn More</h3>
            </div>        
          `);
      })
}});

$.ajax({url: "https://gateway.marvel.com:443/v1/public/characters?limit=8&offset=16&apikey=514aba9de2d628c8f5b8e097bfee3a26", 
        success: function(response){
        response.data.results.forEach(function(comic){
          $('#characters3').append( `
            <div class="comic col-md-3">
              <h2 class="charactername">${comic.name}</h2>
              <img class="characterphoto" src="${comic.thumbnail.path}.${comic.thumbnail.extension}" />
              <h3 data-title="${comic.name}" data-content="${comic.description}"  class="learnmore">Learn More</h3>
            </div>        
          `);
      })
}});

// $('#myModal').modal(options)

$("body").on('click', ".learnmore", function(){
  var title = $(this).data("title");
  var content = $(this).data("content");
  
  $(".modal-title").html(title);
  $(".modal-body").html(content);
  $('.modal').modal('toggle')
  
})



    // Then just just say that you want your modal to show up. So if your modal has an id of myModal







    