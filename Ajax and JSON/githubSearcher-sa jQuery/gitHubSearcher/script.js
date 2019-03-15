$("input").on("keydown", function (e) {
    if (e.keyCode === 13) {
        e.preventDefault();

        var searchValue = $("input").val();
        $.ajax({
            url: "https://api.github.com/search/users?q=" + searchValue,
            headers: {
                'Accept': 'application/vnd.github.v3+json'
            }
        }).done(function (data) {
            $('img').each(function (index, element) {
                $(element).attr("src", data.items[index].avatar_url)
            })
        })
    }
})

