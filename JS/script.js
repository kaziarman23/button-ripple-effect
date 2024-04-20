const btnEl = document.querySelector(".btn");

btnEl.addEventListener("mouseover", function (event) {
    const x = event.pageX - btnEl.offsetLeft;
    const y = event.pageY - btnEl.offsetTop;

    btnEl.style.setProperty("--Xpos", x + "px");
    btnEl.style.setProperty("--Ypos", y + "px");
});

// event.pageX = this will count the  position from the left of the page
// btnEl.offsetLeft = this will count the  position from the left of the Button

// event.pageY = this will count the  position from the top of the page
// btnEl.offsetTop = this will count the  position from the top of the Button

// set property is for seting the variables in the css and others
