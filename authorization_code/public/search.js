document.addEventListener('DOMContentLoaded', () => {
    const access_token = localStorage.getItem('access_token')
console.log(access_token)
    if (!access_token) {
        alert('Please Login again');
        return
    } else {
        //Start access to Spotify API
        $.ajax({
            url: 'https://api.spotify.com/v1/search?q=Foo%20Fighters&type=artist',
            headers: {
                'Authorization': 'Bearer ' + access_token
            },
            success: function (response) {
                console.log(response)
                // response contains search data
            }
        });
    }

})