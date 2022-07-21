const infosManager = () => {
    const title = document.querySelector(".title");
    title.innerHTML = playlist[currentTrack].artist + " - <br> " + playlist[currentTrack].title;
    title.innerHTML = playlist[currentTrack].artist + " - <br> " + playlist[currentTrack].title;
    next.addEventListener(
        "click",
        function () {
            title.innerHTML = playlist[currentTrack].artist + " - <br> " + playlist[currentTrack].title;
            title.innerHTML = playlist[currentTrack].artist + " - <br> " + playlist[currentTrack].title;
        }
    )
    prev.addEventListener(
        "click",
        function () {
            title.innerHTML = playlist[currentTrack].artist + " - <br> " + playlist[currentTrack].title;
            title.innerHTML = playlist[currentTrack].artist + " - <br> " + playlist[currentTrack].title;
        }
    )

    const genre = document.querySelector(".infos");
    genre.innerHTML = playlist[currentTrack].annee + " <br> " + playlist[currentTrack].genre;
    genre.genreinnerHTML = playlist[currentTrack].annee + " <br> " + playlist[currentTrack].genre;
    next.addEventListener(
        "click",
        function () {
            genre.innerHTML = playlist[currentTrack].annee + " <br> " + playlist[currentTrack].genre;
            genre.innerHTML = playlist[currentTrack].annee + " <br> " + playlist[currentTrack].genre;
        }
    )
    prev.addEventListener(
        "click",
        function () {
            genre.innerHTML = playlist[currentTrack].annee + " <br> " + playlist[currentTrack].genre;
            genre.innerHTML = playlist[currentTrack].annee + " <br> " + playlist[currentTrack].genre;
        }
    )
}




export { infosManager }