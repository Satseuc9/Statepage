function validate() {
    let i1 = document.querySelector("#i1").value;
    let i2 = document.querySelector("#i2").value;
    if(i1 === i2){
        alert("Values matched");
    }else{
            alert("Values not matching");
        }
    }