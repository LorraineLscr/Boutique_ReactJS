function fancyTimeFormat(duration)
{   
    // Hours, minutes and seconds
    var hrs = ~~(duration / 3600);
    var mins = ~~((duration % 3600) / 60);
    var secs = ~~duration % 60;

    // Output like "1:01" or "4:03:59" or "123:03:59"
    var ret = "";

    if (hrs > 0) {
        ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }

    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    return ret;
}

const timeManager = () => {
    setInterval(() => {
        // cons ole.log(fancyTimeFormat(audio.currentTime));
        //console.log(fancyTimeFormat(audio.duration));
        time.innerHTML = fancyTimeFormat(audio.currentTime)+" | "
        +fancyTimeFormat(audio.duration); 
    }, 1000
     )
}

export {
    timeManager
}