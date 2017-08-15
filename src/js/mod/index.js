var getJSON = function(url) {
	var promise = new Promise(function(resolve, reject) {
		var client = new XMLHttpRequest();
		client.open('GET', url);
		client.onreadystatechange = handler;
		client.responseType = "json";
		client.setRequestHeader("Accept", "application/json");
		client.send();

		function handler() {
			if(this.readyState !== 4) {
				return;
			}
			if(this.status === 200) {
				resolve(this.response);
			} else {
				reject (new Error(this.statusText));
			}
		};
	});
	return promise;
}

setTimeout(function(){
	getJSON('../src/js/lib/song.json').then(function(json){
		let items = json
		items.forEach( (ele) => {
		// console.log(ele.id)
		let judge = Math.random()>0.5?'sq':''
		let li = `
		<a href="../../../bin/song.html?id=${ele.id}">
		<h3>${ele.name}</h3>
		<p>
		<svg class="${judge} hide">
		<use xlink:href="#icon-sq"></use>
		</svg>
		${ele.author}-${ele.info}</p>
		<svg class="playCl">
		<use xlink:href="#icon-play-circle"></use>
		</svg>
		</a>
		`
		let liDom = parseToDom(li)
		document.querySelector("#songItems").appendChild(liDom)
		function parseToDom(str){
			let div = document.createElement("li")
			if (typeof str == "string")
				div.innerHTML = li
			// console.log(div.children)
			return div
		}
	});
		let loadNode = document.querySelector("#loading")
		document.querySelector(".lastestMusic").removeChild(loadNode)

	}, function(){

	})
},1000)







/*
<li>
    <a href="">
			<h3>歌曲名9</h3>
			<p>
      <svg class="sq">
        <use xlink:href="#icon-sq"></use>
      </svg>
    演唱者9-专辑9</p>
      <svg class="playCl">
        <use xlink:href="#icon-play-circle"></use>
    </svg>
    </a>
</li>
*/