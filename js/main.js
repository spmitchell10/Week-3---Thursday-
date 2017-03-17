$.ajax({url: "https://gateway.marvel.com:443/v1/public/characters?limit=4&apikey=514aba9de2d628c8f5b8e097bfee3a26", 
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

$.ajax({url: "https://gateway.marvel.com:443/v1/public/comics?limit=4&apikey=514aba9de2d628c8f5b8e097bfee3a26", 
        success: function(response){
        response.data.results.forEach(function(comic){
          $('#comics').append( `
            <div class="comic col-md-3">
              <h2 class="comicname">${comic.title}</h2>
              <img class="comicimage" src="${comic.thumbnail.path}.${comic.thumbnail.extension}" />
              <h3 class="comicprice">$${comic.prices[0].price}</h3>
            </div>        
          `);
      })
}});