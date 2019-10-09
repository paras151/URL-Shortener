const url = document.querySelector("#url");
const but = document.querySelector("#but");
let res="";
const baseUrl = config.get('baseUrl');
baseUrl = baseUrl+"/api/url/shorten";
but.addEventListener('click',async (e)=>{
    e.preventDefault();
    res = await axios.post(baseUrl,{
        longUrl:url.value
    })
    .then(function (response) {
      return response.data.shortUrl
    })

    document.getElementById("myAnchor").href = res;
    document.getElementById("myAnchor").text = res;


})

