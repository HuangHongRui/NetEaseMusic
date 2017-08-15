$(function(){

	let id = parseInt(location.search.match(/\bid=([^&]*)/)[1],10)

	$.get('../src/js/lib/song.json').then(function(response){
		let songs = response
		let song = songs.filter(s => s.id == id)[0]
		let {url, cover, filter} = song
		$('.cover').attr("src",cover)
		$('.page').css({"background":"url("+filter+") no-repeat","background-size": "cover", "transform-origin": "center top","background-position": "50%","transition": "opacity .3s linear"})
		let audio = document.createElement('audio')
		audio.src = url
		audio.oncanplay = function(){
			audio.play()
			$('.disc').addClass('playing')
		}
		$('.icon-pause').on('click',function(){
			audio.pause()
			$('.disc').removeClass('playing')
		})
		$('.icon-play').on('click', function(){
			audio.play()
			$('.disc').addClass('playing')
		})

	})

	$.get('../src/js/lib/lyric.json').then(function(object){
		let {lyric} = object
		let array = lyric.split('\n')
		let regex = /^\[(.+)\](.*)/
		array = array.map(function(string, index){
			let matches = string.match(regex)
			if (matches){
				return {time: matches[1], words: matches[2]}
			}
		})
		// console.log(array)
		let $lyric = $('.lyric')
		array.map(function(object){
			if(!object){return}
				let $p = $('<p/>')
			$p.attr('data-time', object.time).text(object.words)
			$p.appendTo($lyric)
		})
	})
})

