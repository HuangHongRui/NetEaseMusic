$(function() {
	setTimeout(function(){
		$.get('../src/js/lib/song.json').then(function(response){
			console.log(response)
			let items = response
			let judge = Math.random()>0.5?'sq':''
			items.forEach((i)=>{
				let $li = $(`
					<li>
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
					</li>
					`)
				$('#songItems').append($li)
			})
			$('#loading').remove()
		},function(){
			alert("读取失败")
		})
	},2000)
})