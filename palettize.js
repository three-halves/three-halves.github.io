// root = document.querySelector(':root');

async function palettize(value)
{
    document.documentElement.setAttribute('data-theme', value);
}

// load preference
document.addEventListener('DOMContentLoaded', function () {
    var input = document.getElementById('palette-selector');
    if (localStorage['palette']) {
        input.value = localStorage['palette']; // set value
    }
    input.onchange = function () {
        localStorage['palette'] = this.value; // change on selector change
        palettize(this.value);
    }

    // unhide palette selector if JS is running
    document.getElementById('palette-selector').style.visibility = "visible";

});

palettize(localStorage['palette'])