function pac(){
    var vi= parseInt(document.getElementById('vi').value);
    var vf= parseInt(document.getElementById('vf').value);
    var ra= parseInt(document.getElementById('ra').value);
    var res= document.getElementById('res');
    res.innerHTML="";
    if(vi<vf){
        for(let i= vi; i<=vf; i= i+ra){
            res.innerHTML+=i+"-";
        }
    }else{
        for(let i= vf; i<=vi; i= i+ra){
            res.innerHTML+=i+"-";
        }
    }

}

function pad(){
    var vi= parseInt(document.getElementById('vi').value);
    var vf= parseInt(document.getElementById('vf').value);
    var ra= parseInt(document.getElementById('ra').value);
    var res= document.getElementById('res');
    res.innerHTML="";
    if(vi<vf){
        for(let i = vf; i >= vi; i = i-ra ){
            res.innerHTML+=i+"-";
        }
    }else{
        for(let i = vi; i >= vf; i = i-ra ){
            res.innerHTML+=i+"-";
        }
    }

}