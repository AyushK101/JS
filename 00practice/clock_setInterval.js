setInterval(dateFun , 1000);

function dateFun() {
    let d = new Date() ;
    document.getElementById("demo").innerHTML=
  d.getHours() + ":" +
  d.getMinutes() + ":" +
  d.getSeconds();
}
