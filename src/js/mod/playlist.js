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

getJSON('../src/js/lib/song.json').then(function(response){
		let items = response
		items.forEach( (ele) => {
		let li = `
		<li>
            <div>${ele.id}</div>
          	<a href="../../../bin/song.html?id=${ele.id}">
            	<h3>${ele.name}</h3> 
            	<p>${ele.author}-${ele.info}</p>
              	<svg class="playCl">
                    <use xlink:href="#icon-play-circle"></use>
     	 		</svg>
            </a>
      	</li>
		`
		document.querySelector("#playListPage >.playList >.songItems").innerHTML += li
	});
}, function(){})