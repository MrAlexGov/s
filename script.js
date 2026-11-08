// Temporary wedding details live in one place and can be replaced later.
const weddingDate = new Date("2027-08-18T16:00:00+03:00");
function updateCountdown(){
 const now=new Date(),diff=Math.max(0,weddingDate-now);
 const days=Math.floor(diff/86400000),hours=Math.floor(diff%86400000/3600000),minutes=Math.floor(diff%3600000/60000);
 document.getElementById("days").textContent=String(days).padStart(2,"0");
 document.getElementById("hours").textContent=String(hours).padStart(2,"0");
 document.getElementById("minutes").textContent=String(minutes).padStart(2,"0");
}
updateCountdown();setInterval(updateCountdown,60000);