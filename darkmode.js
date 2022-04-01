let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector("label");

console.log(darkMode);


const enableDarkMode = () => {
    /*  add the class to the body  */
    document.body.classList.add("darkmode");
    /*  update darkMode in the localStorage */
    localStorage.setItem("darkMode", 'enabled');

};

const disableDarkMode = () => {
    /*  remove the class to the body  */
    document.body.classList.remove("darkmode");
    /*  update darkMode in the localStorage */
    localStorage.setItem("darkMode", null);

};


/*  when someone clicks the button */
darkModeToggle.addEventListener("click", () => {
    /*  get their darkMode setting */
    darkMode = localStorage.getItem("darkMode");

    /* if it not currently enabled, enable it */
    if (darkMode !== 'enabled') {
        enableDarkMode();
        /* if it has been enabled, turn it off */
    }   else {
        disableDarkMode();
    }

});

/*  */

var audio = new Audio("audio/clickswitch.wav");

document.onclick = function() {
  audio.play();
}