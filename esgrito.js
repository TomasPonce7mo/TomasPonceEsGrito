function EsGrito(n){
    let ss = 0, se = 0, r = false;
    for(let i=0;i<n.length;i++){
        if(n.charAt(i) == '!'){
            ss = ss + 1;
        }
        else {
            se = se + 1;
        }
    }
    if(ss>se){
        r = true;
    }
    return r;
}