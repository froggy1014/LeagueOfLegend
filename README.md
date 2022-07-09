# League Of Legend 
> ### I cloned League of Legend champion Pick screen to practice SCSS which I just learn and bundle this files by Webpack and deploy it on Netlify. Unfortunately it's not reponsive website. so Please access on PC. Thank you. 
>> this is the link [League of Legend](https://spiffy-khapse-5518ee.netlify.app)

<br>
<br>


## 📺 Layout 
---
<br>

<img src="./static/images/untitled folder/screen.png">

<br>
<br>
<br>

## Features 💅
---
<br>

<img src="./static/images/untitled folder/category.gif" width=350px> 
<img src="./static/images/untitled folder/search.gif" width=350px >

<br>

### I didn't want to spend too much time for this. So it doesn't have many features that it should be. I will just attach Code that I use for these features. 
<br>
<br>

```javascript
// EventListener of Position Btns 

for (var i = 0; i < positionBtn.length; i++) {
  positionBtn[i].addEventListener("click", (e) => {
    filterChampion(e.target.value);
  })
}

// EventListener of Search Bar 

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

// Champion Filtering Function

function filterChampion(c) {
  let x = document.querySelectorAll(`.${c}`);
  removeHide();
  for ( let i = 0; i < x.length; i++) {
    x[i].classList.remove('hide');
    x[i].classList.add('show');
  }
};

// 'hide' className remove function from all Elements

function removeHide(i){
  let champBx = document.querySelectorAll('.champion_box');
  for (let  j = 0 ; j < champBx.length; j++){
    champBx[j].classList.remove('show');
    champBx[j].classList.add('hide');
  }      
};


// 'show' className add function to filtered Elements

function searchedChampion(i){
  let champBx = document.querySelectorAll('.champion_box');
  champBx[i].classList.remove('hide');
  champBx[i].classList.add('show');
};
```



