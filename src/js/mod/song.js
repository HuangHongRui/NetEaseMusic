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
  let lyricNode = document.querySelector('.lyric')
  array.map(function(object){
  	// console.log(object)
  	if(!object) return
  	let lyricP = document.createElement('p')
  	let lyricText = document.createTextNode(object.words)
  	lyricP.setAttribute('data-time', object.time)
  	lyricP.appendChild(lyricText)
  	lyricNode.appendChild(lyricP)
  })

  console.log(lyricNode)

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

