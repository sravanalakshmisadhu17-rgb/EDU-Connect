
document.addEventListener("DOMContentLoaded", () => {
  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("nav a").forEach(a => {
    if (a.getAttribute("href") === path) a.classList.add("active");
  });
  const today = document.getElementById("today");
  if (today) today.textContent = new Date().toLocaleDateString("en-IN",{weekday:"long",day:"numeric",month:"long",year:"numeric"});
});

function toggleSidebar(){
  document.querySelector(".sidebar")?.classList.toggle("open");
}
function logout(){
  localStorage.removeItem("slmsLoggedIn");
  showToast("Logged out successfully");
  setTimeout(()=>location.href="index.html",700);
}
function showToast(message){
  const old=document.querySelector(".toast"); if(old) old.remove();
  const t=document.createElement("div"); t.className="toast"; t.textContent=message;
  document.body.appendChild(t); setTimeout(()=>t.remove(),2200);
}
function filterAssignments(){
  const value=document.getElementById("assignmentFilter")?.value || "all";
  document.querySelectorAll(".assignment").forEach(card=>{
    card.style.display=(value==="all"||card.dataset.status===value)?"grid":"none";
  });
}
function filterResources(){
  const q=(document.getElementById("resourceSearch")?.value||"").toLowerCase();
  document.querySelectorAll(".resource-card").forEach(card=>{
    card.style.display=card.dataset.name.toLowerCase().includes(q)?"flex":"none";
  });
}
function filterCourses(){
  const q=(document.getElementById("courseSearch")?.value||"").toLowerCase();
  document.querySelectorAll(".course-card").forEach(card=>{
    card.style.display=card.dataset.name.toLowerCase().includes(q)?"block":"none";
  });
}
