var getJSON = function(url) {
  var promise = new Promise(function(resolve, reject){
    var client = new XMLHttpRequest();
    client.open("GET", url);
    client.onreadystatechange = handler;
    client.responseType = "json";
    client.setRequestHeader("Accept", "application/json");
    client.send();

    function handler() {
      if (this.readyState !== 4) {
        return;
      }
      if (this.status === 200) {
        resolve(this.response);
      } else {
        reject(new Error(this.statusText));
      }
    };
  });
  return promise;
};

getJSON("../src/js/lib/song.json").then(function(response){
  let id = parseInt(location.search.match(/\bid=([^&]*)/)[1],10)
  let songs = response
  let song = songs.filter(s=>s.id == id)[0]
  let {url, cover, filter, lyric, name, author} = song
  initText(name, author, lyric, url, cover, filter)
})

function initText(name, author, lyric, url, cover, filter) {
  let musicName = document.querySelector('.musicName')
  musicName.innerHTML=`${name} - <span>${author}</span>`
  document.querySelector('.cover').setAttribute("src", cover);
  var page = document.querySelector('.page')
  page.style.cssText="background:url("+filter+") no-repeat; background-size: cover; transform-origin:center top; background-position:50%; transition : opacity .3s linear"
  autoPlay(url) 
  initLyric(lyric)
}

function autoPlay(url){
  let audio = document.createElement('audio')
  let discNode = document.querySelector('.disc')
  audio.src = url
  audio.oncanplay = function(){
    audio.play()
    discNode.className += " playing"
  }

  let play = document.querySelector('.icon-play')
  play.onclick = function() {
    // console.log("点到我了")
    audio.play()
    discNode.className += " playing"
  }
  let pause = document.querySelector('.icon-pause')
  pause.onclick = function() {
    // console.log("点到我了")
    audio.pause()
    discNode.classList.remove('playing')
  }
//*********
let playbtn = document.querySelector('.play')
playbtn.onclick = function(e) {
  audio.play()
  discNode.className += " playing"
  e.stopPropagation()
}
let pausebtn = document.querySelector('.pause')
pausebtn.onclick = function(e) {
  audio.pause()
  discNode.classList.remove('playing')
  e.stopPropagation()
}
//*********

setInterval(()=>{
  let linesNode = document.querySelector('.lines')
  let seconds = audio.currentTime
  let munites = ~~(seconds / 60)
  let left = seconds - munites * 60
  let time = `${pad(munites)}:${pad(left)}`
  let lines = linesNode.children
  let whichLine
  

  for(let i = 0; i < lines.length; i++) {
    let currentLineTime = lines[i].getAttribute('data-time')
    let nextLineTime
    if (lines[i+1]){
      nextLineTime = lines[i+1].getAttribute('data-time')
    }
    if ( lines[i+1]!== undefined && currentLineTime < time && nextLineTime > time){
      whichLine = lines[i]
      // console.log(whichLine) 
      break
    }
  }
  if (whichLine) {

    whichLine.classList.add('active')
    if (whichLine.previousElementSibling){
       whichLine.previousElementSibling.classList.remove('active')
    }
    
    let lyricHeight = document.querySelector('.lyric').clientHeight/3

    let top = getOffset1(whichLine).top
    let linesTop = getOffset1(linesNode).top
    // let delta = top - linesTop - lyricHeight
    // console.log(top, linesTop, lyricHeight, delta)
    // linesNode.setAttribute("style",`transform : translateY(-${delta}px)`)


        // $(whichLine).addClass('active').prev().removeClass('active')

        // let top = $(whichLine).offset().top
        // let linesTop = $('.lines').offset().top

        // console.log(top1,":分111开:",top)
        // console.log(linesTop1,":分222开:",linesTop)

        let delta = top - linesTop - lyricHeight
    linesNode.setAttribute("style",`transform : translateY(-${delta}px)`)
  }
},300)
}


  let getOffset1 = (elem) => {    
    let docElem = document.documentElement; 
    let box = elem.getBoundingClientRect();  
    return {  
            top: box.top  +  docElem.scrollTop ,  
            left: box.left + docElem.scrollLeft   
      }
    }

  function getOffset(Node, offset) {    
    if (!offset) {        
          offset = {};
          offset.top = 0; 
          offset.left = 0;
    }
    if (Node == document.body) {      
            return offset;   
     }
    offset.top += Node.offsetTop;    offset.left += Node.offsetLeft;
    return getOffset(Node.parentNode, offset);
  }

  function pad(num) {
    return num > 10 ? num+'' : '0'+num
  }

function initLyric(lyric){
  let array = lyric.split('\n')
  let regex = /^\[(.+)\](.*)/
  array = array.map(function(string, index) {
    let matches = string.match(regex)
    // console.log(matches)
    if (!matches) return
      return {time: matches[1], words: matches[2]}
  })
  // console.log(array)
  let lyricNode = document.querySelector('.lines')
  array.map(function(object){
    // console.log(object)
    if(!object) return
    let lyricP = document.createElement('p')
    let lyricText = document.createTextNode(object.words)

    lyricP.setAttribute('data-time', object.time)
    lyricP.appendChild(lyricText)
    lyricNode.appendChild(lyricP)
    let allP = lyricNode.children
    for(let i in allP){
      if(allP[i].innerText === ""){
        allP[i].remove()
      }
    }
  })
}


/*
for (var i in ac) {
  if (ac[i].innerText === ""){
  ac[i].remove()
}
}

*/

// getJSON("../src/js/lib/lyric.json").then(function(json) {
//   let {lyric} = json
//   let array = lyric.split('\n')
//   let regex = /^\[(.+)\](.*)/
//   array = array.map(function(string, index) {
//   	let matches = string.match(regex)
//   	// console.log(matches)
//   	if (!matches) return
//   	return {time: matches[1], words: matches[2]}
//   })
//   // console.log(array)
//   let lyricNode = document.querySelector('.lines')
//   array.map(function(object){
//   	// console.log(object)
//   	if(!object) return
//   	let lyricP = document.createElement('p')
//   	let lyricText = document.createTextNode(object.words)
//   	lyricP.setAttribute('data-time', object.time)
//   	lyricP.appendChild(lyricText)
//   	lyricNode.appendChild(lyricP)
//   })
//   // console.log(lyricNode)

// }, function(error) {
//   console.error('出错了', error);
// });




// let xhr = new XMLHttpRequest()
// xhr.open("get","../src/js/lib/lyric.json")
// xhr.onreadystatechange = function() {
// 	if (xhr.readyState == 4) {
// 		if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
// 			// console.log(xhr.responseText)
// 			lyric
// 		}
// 	}
// }

// xhr.send()

