// SCSS import 
import '../scss/main.scss';

// List up of Champion's name and positions
const championNames = {
  'random' : 'all', 
  'aatrox' : 'top', 
  'ahri' : 'mid',
  'akali' : 'mid top', 
  'akshan' : 'mid',
  'alistar' : 'sup',
  'amumu' : 'sup',   
  'anivia' : 'mid sup',
  'annie' : 'mid', 
  'aphelios' : 'ad', 
  'ashe' : 'sup ad', 
  'aurelionsol' : 'mid', 
  'azir' : 'mid', 
  'bard' : 'sup', 
  'belveth' : 'jung', 
  'blitzcrank': 'sup', 
  'brand' : 'mid sup', 
  'braum' : 'sup', 
  'caitlyn' : 'ad', 
  'camille' : 'top' , 
  'cassiopeia' : 'mid ad', 
  'chogath' : 'mid top', 
  'corki' : 'mid', 
  'darius' : 'top', 
  'diana' : 'jung', 
  'draven' : 'ad', 
  'ekko' : 'jung', 
  'elise' : 'jung', 
  'evelynn' : 'jung', 
  'ezreal' : 'ad', 
  'fiddlestick' : 'jung', 
  'fiora' : 'top', 
  'fizz' : 'mid', 
  'galio' : 'mid sup', 
  'gangplank' : 'top', 
  'garen' : 'top', 
  'gnar' : 'top', 
  'gragas' : 'mid jung', 
  'graves': 'jung', 
  'gwen' : 'top', 
  'hecarim' : 'jung', 
  'heimerdinger' : 'mid ad', 
  'illaoi' : 'top', 
  'irellia' : 'mid top', 
  'ivern' : 'jung', 
  'janna' : 'sup', 
  'jarvanIV' : 'jung', 
  'jax' : 'top', 
  'jayce' : 'top', 
  'jhin' : 'ad', 
  'jinx' : 'ad', 
  'kaisa' : 'ad', 
  'kalista' : 'ad', 
  'karma' : 'sup', 
  'kassadin' : 'mid', 
  'katarina' : 'mid', 
  'kathus' : 'jung', 
  'kayle' : 'top', 
  'kayn' : 'jung', 
  'kennen' : 'top', 
  'khazix' : 'jung', 
  'kindred' : 'ad jung', 
  'kled' : 'top', 
  'kogmaw' : 'ad', 
  'leblanc' : 'mid', 
  'leesin' : 'jung', 
  'leona' : 'sup',
  'lillia' : 'top jung', 
  'lissandra' : 'mid', 
  'lucian' : 'top ad', 
  'lulu' : 'sup', 
  'lux' : 'sup', 
  'malphite' : 'top', 
  'malzahar' : 'mid', 
  'maokai' : 'sup', 
  'masterYi' : 'jung', 
  'missfortune' : 'ad', 
  'mordekaiser' : 'top', 
  'morgana' : 'sup', 
  'mundo' : 'top', 
  'nami' : 'sup', 
  'nasus' : 'top', 
  'nautilus' : 'sup', 
  'neeko' : 'top', 
  'nidalee' : 'jung', 
  'nocturne' : 'jung', 
  'nunu' : 'jung', 
  'olaf' : 'top jung', 
  'oriana' : 'mid', 
  'ornn' : 'top', 
  'pantheon' : 'mid sup', 
  'poppy' : 'top', 
  'pyke' : 'mid sup', 
  'qiyana' : 'mid', 
  'quinn' : 'top', 
  'rakan' : 'sup', 
  'rammus' : 'jung', 
  'reksai' : 'jung', 
  'rell' : 'sup', 
  'renataglasc' : 'sup', 
  'renekton' : 'top', 
  'rengar' : 'top jung', 
  'riven' : 'top', 
  'rumble' : 'top jung', 
  'ryze' : 'mid top', 
  'samira' : 'ad', 
  'sejuani' : 'jung', 
  'senna' : 'sup ad', 
  'seraphine': 'sup', 
  'sett': 'sup top', 
  'shaco' : 'jung', 
  'shen' : 'top', 
  'shyvana' : 'jung', 
  'singed' : 'top', 
  'sion' : 'top', 
  'sivir' : 'ad', 
  'skarner' : 'jung', 
  'sona' : 'sup', 
  'soraka' : 'sup', 
  'swain' : 'mid ad', 
  'sylas' : 'mid', 
  'syndra' : 'mid', 
  'tahmkench' : 'sup top',  
  'tailyah' : 'jung',  
  'talon' : 'mid jung', 
  'taric' : 'sup', 
  'teemo' : 'top', 
  'thresh' : 'sup', 
  'tristana' : 'ad', 
  'trundle' : 'top', 
  'tryndamere' : 'top', 
  'twistedfate' : 'mid', 
  'twitch' : 'ad', 
  'udyr' : 'jung', 
  'urgot' : 'top', 
  'varus' : 'ad', 
  'vayne' : 'ad', 
  'veigar' : 'mid', 
  'velkoz' : 'sup'
};

// DOM
let chmp_container = document.getElementById('champions_container');
let search = document.getElementById('searchBar');
const cntBx = document.getElementById('cntDown');
const positionBtn = document.getElementsByClassName('positionF')
const lockInBtn = document.getElementById('chmpPick')
let chmpBx = document.querySelectorAll('.champion_box')
// Initial Set values
let cnt = 30;

pageInit();

function pageInit(){
  let HTMLel = '';

  for ( let i = 0; i < 139 ;  i++){
    let names = Object.keys(championNames);
    let positions = Object.values(championNames);
    
    HTMLel += `<div class="champion_box ${positions[i]}" tabindex="0">
    <div class="champion_focused_circle"></div>
    <div class="champion_portrait${i}"></div>  
    <span class="champion_name">${names[i]}</span>
  </div>`;
    
  }
  chmp_container.innerHTML = HTMLel;

  setInterval(() => {
    if(cnt < 0 ){
      cntBx.innerText = 'Get Ready for the War !'
      return window.close();
    }
    setTimeout(() => cntBx.style.transform = "scale(2)", 500);
    cntBx.style.transform = "scale(1)";
    cntBx.innerText= cnt; 
    cnt--;
  }, 1000);
}


// 포지션 버튼 감지 이벤트 리스너

for (var i = 0; i < positionBtn.length; i++) {
  positionBtn[i].addEventListener("click", (e) => {
    filterChampion(e.target.value);
  })
}

// 검색창 감지 이벤트 리스너

search.addEventListener('input', (e)=>{
  let c = document.querySelectorAll(".champion_name");
  removeHide()
  c.forEach((v,i)=>{
    if(v.innerText.indexOf(e.target.value) > -1 )
    {
       searchedChampion(i)
    }
  })
});



// 포지션버튼에 따른 챔피언 필터링함수

function filterChampion(c) {
  let x = document.querySelectorAll(`.${c}`);
  removeHide();
  for ( let i = 0; i < x.length; i++) {
    x[i].classList.remove('hide');
    x[i].classList.add('show');
  }
};

// 모든 요소에서 'hide' 클래스이름 제거 함수

function removeHide(i){
  let champBx = document.querySelectorAll('.champion_box');
  for (let  j = 0 ; j < champBx.length; j++){
    champBx[j].classList.remove('show');
    champBx[j].classList.add('hide');
  }      
};


//  넘겨받은 익덱스의 해당 요소 'show' 클래스이름 추가 함수

function searchedChampion(i){
  let champBx = document.querySelectorAll('.champion_box');
  champBx[i].classList.remove('hide');
  champBx[i].classList.add('show');
};





