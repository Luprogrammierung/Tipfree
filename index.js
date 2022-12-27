function removeItems(){
const frontodds = document.querySelectorAll('.bg-main-200');
console.log(frontodds.length)
for(var i = 0; i<frontodds.length;i++){
    
    frontodds[i].style.display ='none';
}
}
function main(){

var Iframe = document.getElementById('odsp_wdg_iframeoddspedia-widget-odds-comparison-popular-false-sports-false-leagues-false');

    removeItems();

}
setTimeout(function () {
    main()
  }, 500)

