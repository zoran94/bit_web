var search = document.querySelector('input');
var imgs = document.querySelectorAll('img');

search.addEventListener('keydown', searchUsers);

function searchUsers(e) {
    if (e.keyCode === 13) {

        var searchValue = search.value;

        var request = new XMLHttpRequest;
        request.open('GET', "https://api.github.com/search/users?q=" + searchValue);

        request.setRequestHeader('Accept', 'application/vnd.github.v3+json');

        request.onload = function (e) {
            var obj = JSON.parse(request.responseText);
            

            for (var i = 0; i < imgs.length; i++) {
                var element = imgs[i];
                imgs[i].setAttribute('src', 'https://via.placeholder.com/300');
            }

            for (var i = 0; i < obj.items.length; i++) {
                var element = obj.items[i];
                imgs[i].setAttribute('src', element.avatar_url);
            }

        }

        request.send();
    } else {
        return;
    }
}