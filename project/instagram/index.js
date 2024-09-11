function handleEvent(a) {
    if (a.value == "") {
        document.getElementById("spnId").style.top = "35%"
    } else {
        
        document.getElementById("spnId").style.top = "22%"
        document.getElementById("spnId").style.fontSize = "10px"
    }
}