window.onload = () => {
    const collapsible = document.getElementsByClassName('collapsible')[0];
    const menuList = document.querySelectorAll('nav > ul >li');

    const expandableMenu = () => {
        var content = collapsible.previousElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
            collapsible.innerHTML = '<i class="fas fa-angle-down"></i>';
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
            collapsible.innerHTML = '<i class="fas fa-angle-up"></i>';
        }
    };

    collapsible.onclick = expandableMenu;
    if (window.innerWidth <= 768) {
        menuList.forEach(li => li.onclick = expandableMenu)
    }
}