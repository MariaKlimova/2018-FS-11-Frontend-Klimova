var say = function (name) {
    var div = document.createElement("div");
    div.style.width = "100px";
    div.style.height = "100px";
    div.style.background = "red";
    div.style.color = "white";
    div.innerHTML = "hello World";

    document.body.appendChild(div);
    //return say();   
    
};

export default say;

