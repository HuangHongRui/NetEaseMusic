$(function() {
	setTimeout(function(){
		$.get('../src/js/lib/song.json').then(function(response){
			console.log(response)
			let items = response
			items.forEach((i)=>{
				let $li = $(`
					<li>
					<a href="../../../bin/song.html?id=${i.id}">
					<h3>${i.name}</h3>
					<p>演唱者-专辑</p>
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