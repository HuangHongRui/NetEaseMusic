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
			return div
		}
	});
		let loadNode = document.querySelector("#loading")
		document.querySelector(".lastestMusic").removeChild(loadNode)

	}, function(){
		console.log('读取失败')
	})
},1000)

	

	document.querySelectorAll('.tabItems >li').forEach(function(li){
		let lis = document.querySelectorAll('.tabItems >li') 
		let tabLis = document.querySelectorAll('.tabContent >li')
		let index 
		li.onclick = function(e){
			let target = e.currentTarget
			index = [].indexOf.call(lis, target)
			lis.forEach(function(li){
				li.classList.remove('active')
			})
			target.classList.add('active')
			tabLis.forEach(function(li){
				li.classList.remove('active')
			})
			tabLis[index].classList.add('active')

			let tabLisNow = tabLis[index]
			if (tabLisNow.getAttribute('data-downloaded') === 'yeah'){
				console.log('hahaha')
				return
			}
			if (index === 1) {
				getJSON('../src/js/lib/page2.json').then((response)=>{
					// tabLisNow.innerText = response.text
					tabLisNow.setAttribute('data-downloaded', 'yeah')
				})
			} else if (index === 2) {
				getJSON('../src/js/lib/page3.json').then((response)=>{
					// tabLisNow.innerText = response.text
					// tabLisNow.setAttribute('data-downloaded', 'yeah')
				})
			}
		}
	})

	let clockLock = undefined
	document.querySelector('#searchMusic').addEventListener('input', function(e){
		let inputNode = e.target
		let value = inputNode.value.trim()
		let output = document.querySelector('#output')
		if( value === '') return
		if (clockLock) {
			clearTimeout(clockLock)
		}
		clockLock = setTimeout(function(){
			search(value).then((result)=>{
				if (result.length !== 0){
					output.innerText = result.map((arg)=>arg.name).join('\n')
				}else{
					output.innerText = '抱歉, 没有'
				}
			})
		})
		// console.log(value)
	})

	function search(keyword){
		return new Promise((resolve, reject) => {
			// console.log('搜索' + keyword)
			var database = [
				{"id":"1", "name":"Strip That Down" },
				{"id":"2", "name":"Despacito" },
				{"id":"3", "name":"We Will Rock You" },
				{"id":"4", "name":"Versace On The Floor" },
				{"id":"5", "name":"The Show" },
				{"id":"6", "name":"Rap God" },
				{"id":"7", "name":"告白气球" },
				{"id":"8", "name":"I Just Wanna Run" },
				{"id":"9", "name":"Take Me to Your Heart" },
				{"id":"10", "name":"Shape of You" }
			]
			let result = database.filter(function(item){
				// console.log(item)
				return item.name.indexOf(keyword) >= 0
			})
			setTimeout(function(){
				// console.log('搜索结果' + keyword)
				// console.log(resolve(result))
				resolve(result)
			},(Math.random()*1000+200))
		})
	}


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