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
  let audio = document.createElement('audio')
  let discNode = document.querySelector('.disc')
  let coverAnimation = document.querySelector('.cover')
  audio.src = "http://dl.stream.qqmusic.qq.com/C400002wJJpU0kLcQZ.m4a?fromtag=38&vkey=FFA46BADF3B7E98751F531B2F563EBD8AF08A11069692445CFA4E015B2E6587A3F1CCD8019B9DF1B217C3A64570BC3C3C217B98944E4EB2E&guid=8708071248"
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

