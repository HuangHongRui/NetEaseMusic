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
  let {url, cover, filter} = song
  let audio = document.createElement('audio')
  let discNode = document.querySelector('.disc')
  document.querySelector('.cover').setAttribute("src", cover);
  var a = document.querySelector('.page')
  a.style.cssText="background:url("+filter+") no-repeat; background-size: cover; transform-origin:center top; background-position:50%; transition : opacity .3s linear"
  audio.src = url
  audio.oncanplay = function(){
    audio.play()
    discNode.className += " playing"
  }

  let play = document.querySelector('.icon-play')
  play.onclick = function() {
    console.log("点到我了")
    audio.play()
    discNode.className += " playing"
  }
  let pause = document.querySelector('.icon-pause')
  pause.onclick = function() {
    console.log("点到我了")
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
})

getJSON("../src/js/lib/lyric.json").then(function(json) {
  let {lyric} = json
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
  })
  // console.log(lyricNode)

}, function(error) {
  console.error('出错了', error);
});




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

