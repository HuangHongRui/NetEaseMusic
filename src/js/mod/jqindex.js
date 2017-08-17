$(function() {
	setTimeout(function(){
		$.get('../src/js/lib/song.json').then(function(response){
			// console.log(response)
			let items = response
			items.forEach((ele)=>{
			let judge = Math.random()>0.5?'sq':''
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

	$('.siteNav').on('click','ol.tabItems>li',function(e){
		let $li = $(e.currentTarget).addClass('active')
			$li.siblings().removeClass('active')
		let index = $li.index()
		$li.trigger('tabChange', index)
		$('.tabContent >li').eq(index).addClass('active')
			.siblings().removeClass('active')
	})
	$('.siteNav').on('tabChange',function(e, index) {
		let $li = $('.tabContent >li').eq(index)
		if ($li.attr('data-downloaded') === 'yeah') return
		if (index === 1) {
			$.get('../src/js/lib/page2.json').then((response)=>{
				$li.text(response.text)
				$li.attr('data-downloaded','yeah')
			})
		} else if (index ===2) {	//函数节流
			$.get('../src/js/lib/page3.json').then((response)=>{
				$li.text(response.text)	
				$li.attr('data-downloaded','yeah')
			})
		}
	})

	let clockLock = undefined;
	$('input#searchMusic').on('input', function(e){
		let $input = $(e.currentTarget)
		let value = $input.val().trim()
		if(value === '') return
		if (clockLock) {
			clearTimeout(clockLock)
		}
		clockLock = setTimeout(function(){
			search(value).then((result)=>{
				if (result.length !== 0){
					$('#output').text(result.map((r)=>r.name ).join(','))
				} else {
					$('#output').text('没有')
				}
			})
		},1000)
	})

	function search(keyword) {
		return new Promise((resolve,reject)=>{
			console.log('搜索'+keyword)
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
			let result = database.filter(function(item) {
				return item.name.indexOf(keyword) >= 0
			})
			setTimeout(function(){
				console.log('结果'+keyword)
				console.log(resolve(result))
			},(Math.random()*1000+200))
		})
	}
	window.search = search
})




