window.onload = () => {
    var coll = document.getElementsByClassName("collapsible")[0];
    coll.onclick = function () {
        var content = this.previousElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
            this.innerText = "˅";
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
            this.innerText = "˄";
        }
    };
}