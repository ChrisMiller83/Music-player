

var curOffset = 0;
var limitPerPage = 1;


document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("search").addEventListener("click", function(e){
        e.preventDefault()
    const access_token = localStorage.getItem('access_token')
    const searchString = document.querySelector('.form-control').value
    const urlEncodedSearchString = encodeURIComponent(searchString)
    const searchedSong = 'q=' + urlEncodedSearchString + '&type=track%2Cartist&market=US&limit=10&offset=5'
    console.log(access_token)
        if (!access_token) {
            alert('Please Login again');
            return
        } else {
            //Start access to Spotify API
            $.ajax({
                
                url: 'https://api.spotify.com/v1/search?' + searchedSong,
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
                    const musicContainer = document.querySelector('.music-container');
                    let musicHTML = renderSongs(response.tracks.items)
                    musicContainer.innerHTML = musicHTML
                    // hasNext = (curOffset + limitPerPage) < response.tracks.total;
                    // hasPrev = (curOffset - limitPerPage) >= 0;
                    console.log(response)
                    // response contains search data
                }
            });
        }

    })
})

function renderSongs(songs) {
    const musicHtmlArray = songs.map(function(currentSong){
        return `<div class="result">
            <div>${currentSong.name}</div>
            <div>${currentSong.popularity}</div>
            <div>${currentSong.artists[0].name}</div>
            <a href="${currentSong.preview_url}">Click Here For a Preview</a>
            </div>`
        });
        return musicHtmlArray.join('')
        
    }





