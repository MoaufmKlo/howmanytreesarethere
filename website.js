setInterval(function() {
    // Get seconds between 2015 and now
    const seconds = (new Date().getTime() - new Date(2015, 1).getTime()) / 1000;

    // Set the trees text to the trees counted in 2015 subtracted by the number of seconds between now and 2015 multiplied by the amount of trees cut down every second
    document.getElementById("total").innerHTML = "There are<br><strong>" + Math.round(3204668000000 - (seconds * 475.64)).toLocaleString("de-CH") + "</strong><br>trees worldwide. 🌳";
}, 20); // Repeat counter every 20ms (50x a second)