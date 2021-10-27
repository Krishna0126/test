var xhr = new XMLHttpRequest();

xhr.onload = function()
{

    if (xhr.status>=200 && xhr.status<300) 
    {
    var t = JSON.parse(this.response);
    let ans = t.filter(asian =>asian.region =="Asia")
    console.log("countries in asia are:");
    for(i=0;i<ans.length;i++)
    {
        console.log(`${i+1} ${ans[i].name}
        `)
    }
    
    console.table(ans);
            
    }
    else{
        console.log(xhr.responseText);
    }
};



xhr.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
xhr.send();