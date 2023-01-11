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
*/
let text = document.querySelectorAll(".info");
let box2 = document.querySelectorAll(".small_box2");
let color = document.querySelectorAll(".colorr");
/*
box2[0].addEventListener('onmouseover',k=()=>{
    text[0].style.display = 'block';
    color[0].classList.add('layer');
});
for(let a=0; a<=2; a++){
    box2[a].addEventListener('onmouseover',()=>{
        text[a].style.display = 'block';
        color[a].classList.add('layer');
    })
}
for(let a=0; a<=2; a++){
    box2[a].addEventListener('onmouseleave',()=>{
        text[a].style.display = 'block';
        color[a].classList.add('layer');
    })
}*/
f1=()=>{
    text[0].style.display = 'block';
    color[0].classList.add('layer');
}
f2=()=>{
    text[1].style.display = 'block';
    color[1].classList.add('layer');
}
f3=()=>{
    text[2].style.display = 'block';
    color[2].classList.add('layer');
}
f11=()=>{
    text[0].style.display = 'none';
    color[0].classList.remove('layer');
}
f22=()=>{
    text[1].style.display = 'none';
    color[1].classList.remove('layer');
}
f33=()=>{
    text[2].style.display = 'none';
    color[2].classList.remove('layer');
}