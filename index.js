function removeItems(){
const frontodds = document.querySelectorAll('.bg-main-200');
console.log(frontodds.length)
for(var i = 0; i<frontodds.length;i++){
    
    frontodds[i].style.display ='none';
}
}
function main(){
    removeItems();

}

function init(){
    var Iframe = null;
    while(Iframe == null){ Iframe = document.getElementById('odsp_wdg_iframeoddspedia-widget-odds-comparison-popular-false-sports-false-leagues-false');}
    
    setTimeout(function () {
        main();
    }, 500)
}
init();

