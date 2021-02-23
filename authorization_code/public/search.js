document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("search").addEventListener("click", function(e){
        e.preventDefault()
    const access_token = localStorage.getItem('access_token')
    const searchString = document.querySelector('.form-control').value
    const urlEncodedSearchString = encodeURIComponent(searchString)
    const searchedSong = 'q=' + urlEncodedSearchString + '&type=track%2Cartist&market=US&limit=9&offset=5'
    console.log(access_token)
        if (!access_token) {
            alert('Please Login again');
            return
        } else {
            $.ajax({
                url: 'https://api.spotify.com/v1/search?' + searchedSong,
                headers: {
                    'Authorization': 'Bearer ' + access_token,
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                success: function (response) {
                    const musicContainer = document.querySelector('.music-container');
                    let musicHTML = renderSongs(response.tracks.items)
                    musicContainer.innerHTML = musicHTML
                    console.log(response)
                }
            });
        }
    })
})

    function renderSongs(songs) {
        const musicHtmlArray = songs.map(function(currentSong){
            return `<div class = "song pb-3 col-12 col-md-6 col-lg-4 col-xl-4">
            <div class="card bg-secondary">
            <img src="${currentSong.album.images[0].url}" class="col-12  pt-3">
            <div class="card-body">
            <h5 class="card-title text-center text-info">${currentSong.name}</h5>
            <p class="card-text col-12 text-center text-info">${currentSong.artists[0].name}</p>
            <h6> <div class="icon-bar">
            <a class ="songPreview" href="${currentSong.preview_url}">Click Here For a Preview</a>
            </div></h6>
            </div>
            </div>
            </div>`
            });
            return musicHtmlArray.join('')
        }