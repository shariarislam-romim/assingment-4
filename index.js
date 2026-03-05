let currentTab = "all";
const tabActive = ["bg-blue-900", "border-blue-900","text-white"];
const tabInactive = ["bg-transparent","text-black",]

function switchTab (tab) {
    const tabs = ["all","interview","rejected"];

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
}