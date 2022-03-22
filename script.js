function themetoggle() {
    let curr_stylesheet = document.
    getElementById("dark")
    if(curr_stylesheet.href.match("style.css")){
        curr_stylesheet.href = "stylesheet2.css";
    }else{
        curr_stylesheet = "style.css";
        
    }
}