function compute()
{
    p = document.getElementById("principal").value;
    n = document.getElementById("years").value;
    r = document.getElementById("rate").value;
    
    var a = (p*n*r)/100;
     document.getElementById("result").innerHTML = a;
    
}
        
