const url = document.querySelector("#url");
const but = document.querySelector("#but");
let res="";
but.addEventListener('click',async (e)=>{
    e.preventDefault();
    res = await axios.post("http://localhost:5000/api/url/shorten",{
        longUrl:url.value
    })
    .then(function (response) {
      return response.data.shortUrl
    })

    document.getElementById("myAnchor").href = res;
    document.getElementById("myAnchor").text = res;


})

