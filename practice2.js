/*
function myFunction() {
  location.replace("https://www.w3schools.com")
}
*/
html = () =>{
    location.replace("https://html.com/");
}
css = () =>{
    location.replace("https://www.w3.org/Style/CSS/Overview.en.html");
}
js = () =>{
    location.replace("https://www.javascript.com/");
}
nodejs = () =>{
    location.replace("https://nodejs.org/en/");
}
mongodb = () =>{
    location.replace("https://www.mongodb.com/cloud/atlas/lp/try4?utm_source=google&utm_campaign=search_gs_pl_evergreen_atlas_general-phrase_prosp-brand_gic-null_ww-multi_ps-all_desktop_eng_lead&utm_term=mongodb&utm_medium=cpc_paid_search&utm_ad=p&utm_ad_campaign_id=11295578158&adgroup=116363205048&gclid=Cj0KCQiAzeSdBhC4ARIsACj36uEftaWLmkM2ce6uwdDE2QNaJajjuHBSqs-rKEqx96KSRZx7w8lR6JkaAh6qEALw_wcB");
}
react = () =>{
    location.replace("https://reactjs.org/");
}
vuejs = () =>{
    location.replace("https://vuejs.org/");
}

let box = document.querySelectorAll(".box");
let btns = document.querySelectorAll(".icon");
let n = 7;
arr = [];
let obj;
for(i=0; i<=n; i++){
    arr.push(obj = {parent: box[i], child: btns[i]});
}
let clas;

/*btns.forEach(a => {
    a.addEventListener('click',()=>{
        for(i=0; i<=n; i++){
            if(arr[i].child === a){
                arr[i].parent.classList.add("red2");
            }
        }
    })
});

let head = document.querySelector(".head");
let b = document.querySelectorAll(".box");
let list = b[0].classList;*/