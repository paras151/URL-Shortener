const url = document.querySelector("#url");
const but = document.querySelector("#but");
let res="";
but.addEventListener('click',async (e)=>{
  console.log("yes  ")
    e.preventDefault();
    res = await axios.post("/api/url/shorten",{
        longUrl:url.value
    })
    .then(function (response) {
      return response.data.shortUrl
    })
    console.log(res)
    document.getElementById("myAnchor").href = res;
    document.getElementById("myAnchor").text = res;


})

