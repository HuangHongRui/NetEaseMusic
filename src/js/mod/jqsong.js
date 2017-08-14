$(function(){
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
		console.log(array)
		let $lyric = $('.lyric')
		array.map(function(object){
			if(!object){return}
			let $p = $('<p/>')
			$p.attr('data-time', object.time).text(object.words)
			$p.appendTo($lyric)
		})
	})

	let audio = document.createElement('audio')
  audio.src = "//ounk79p86.bkt.clouddn.com/C400002wJJpU0kLcQZ.m4a"
	audio.oncanplay = function(){
		audio.play()
		$('disc').addClass('playing')
	}

	$('.icon-pause').on('click',function(){
		audio.pause()
		$('.disc').removeClass('playing')
	})
	$('.icon-play').on('click', function(){
		audio.play()
		$('.dosc').addClass('playing')
	})

})

