
let votes = {
React: 50,
Vue: 30,
Angular: 20
};

function updateBars(){
const total = votes.React + votes.Vue + votes.Angular;

document.getElementById("reactBar").style.width =
(votes.React/total)*100 + "%";

document.getElementById("vueBar").style.width =
(votes.Vue/total)*100 + "%";

document.getElementById("angularBar").style.width =
(votes.Angular/total)*100 + "%";
}

function vote(option){
votes[option]++;
updateBars();
}

updateBars();

document.getElementById("themeBtn").addEventListener("click",()=>{
document.body.classList.toggle("dark-mode");
});
