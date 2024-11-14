function toggleMenu() {
    const menu = document.querySelector('.menu');
    if (menu.style.maxHeight && menu.style.maxHeight !== "0px") {
        menu.style.maxHeight = "0px";
    } else {
        menu.style.maxHeight = menu.scrollHeight + "px";
    }
}
