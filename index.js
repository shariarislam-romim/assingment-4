let currentTab = "all";
const tabActive = ["bg-blue-900", "border-blue-900","text-white"];
const tabInactive = ["bg-transparent"];

const allCon = document.getElementById("all-container");
const interviewCon = document.getElementById("interview-container");
const rejectedCon = document.getElementById("rejected-container");

function switchTab (tab) {
    const tabs = ["all","interview","rejected"];
    currentTab = tab;

    for(const t of tabs){
       const tabName = document.getElementById("tab-" + t);
       if(t === tab) {
        tabName.classList.remove(...tabInactive);
        tabName.classList.add(...tabActive);
       }
       else{
        tabName.classList.add(...tabInactive);
        tabName.classList.remove(...tabActive)
       }
    }

    const pages = [allCon,interviewCon,rejectedCon];
    for(const section of pages){
        section.classList.add("hidden")
    }

    noStat.classList.add("hidden");

    if(tab === "all"){
        allCon.classList.remove("hidden");
        if(allCon.children.length < 1){
            noStat.classList.remove("hidden");
        }
    }
    else if(tab === "interview"){
        interviewCon.classList.remove("hidden");
        if(interviewCon.children.length < 1){
            noStat.classList.remove("hidden");
        }
    }
    else{
        rejectedCon.classList.remove("hidden");
        if(rejectedCon.children.length < 1){
            noStat.classList.remove("hidden");
        }
    }
    updateStat();
}

//stat update
const totalStat = document.getElementById("stat-total");
const interviewStat = document.getElementById("stat-interview");
const rejectedStat = document.getElementById("stat-rejected");
const noStat = document.getElementById("no-jobs");
const availableStat = document.getElementById("available");

//totalStat.innerText = allCon.children.length;

switchTab(currentTab);

document.getElementById("jobs-container").addEventListener("click",function(event){
    const clickEl = event.target;
    const card = clickEl.closest(".card");
    const status = card.querySelector(".status");
    const parent = card.parentNode;


    if(clickEl.classList.contains("interview")){
        interviewCon.appendChild(card);
        status.innerText = "Interview";
       // updateStat();
    }
    if(clickEl.classList.contains("reject")){
        rejectedCon.appendChild(card);
        status.innerText = "Rejected";
       // updateStat();
    }
    if(clickEl.classList.contains("delete")){
        parent.removeChild(card);
       // updateStat();
    }
     updateStat();
});

function updateStat(){
    // totalStat.innerText = allCon.children.length;
    // interviewStat.innerText = interviewCon.children.length;
    // rejectedStat.innerText = rejectedCon.children.length;delete

    const counts = {
        all : allCon.children.length,
        interview : interviewCon.children.length,
        rejected : rejectedCon.children.length,
    };

    totalStat.innerText = counts["all"];
    interviewStat.innerText = counts["interview"];
    rejectedStat.innerText = counts["rejected"];

    availableStat.innerText = counts[currentTab];

    if(counts[currentTab] < 1){
        noStat.classList.remove("hidden");
    }else{
        noStat.classList.add("hidden");
    }
}
updateStat();