token = localStorage.getItem("token");
const entryId = Number(location.pathname.match(/\d+/)[0])
const url = `https://diaryapi-v2.herokuapp.com/mydiary/v1/entries/${entryId}`;
fetch(`${url}`,{
  method:"GET",
  headers:{
    "Content-Type":"application/json",
    Authorization: `Bearer ${token}`
  }

})
.then(res =>res.json())
.then(data => {
   let msg =`Entry fetched Successuflly`;
  document.getElementById("title").innerHTML = data[msg][2];
  document.getElementById("date").innerHTML = data[msg][1];
  document.getElementById("content").innerHTML = data[msg][3];

});
