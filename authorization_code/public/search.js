

var curOffset = 0;
var limitPerPage = 1;

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("search").addEventListener("click", function(e){
        e.preventDefault()
    const access_token = localStorage.getItem('access_token')
    console.log(access_token)
        if (!access_token) {
            alert('Please Login again');
            return
        } else {
            //Start access to Spotify API
            $.ajax({
                url: 'https://api.spotify.com/v1/search?q=Hello&type=track%2Cartist&market=US&limit=10&offset=5',
                headers: {
                    'Authorization': 'Bearer ' + access_token,
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                // data: {
                //     q: query,
                //     type: 'track',
                //     limit: limitPerPage,
                //     offset: curOffset
                //   },
                success: function (response) {
                    // hasNext = (curOffset + limitPerPage) < response.tracks.total;
                    // hasPrev = (curOffset - limitPerPage) >= 0;
                    console.log(response)
                    // response contains search data
                }
            });
        }

    })
})







// const searchString = document.querySelector('.form-control.search-bar').value
//          const urlEncodedSearchString = encodeURIComponent(searchString);
//          console.log(urlEncodedSearchString)
//          fetch("http://www.omdbapi.com/?apikey=59354c85&s=" + urlEncodedSearchString)
//          .then(res => res.json())
//          .then(data => {
//             console.log(data.Search)
//             const moviesContainer = document.querySelector('.movies-container');
//             var movieHTML = renderMovies(data.Search)
//             moviesContainer.innerHTML = movieHTML;
//             movieData = data.Search
//             })
//     })
// })