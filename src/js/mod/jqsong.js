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
	audio.src = "http://m10.music.126.net/20170813160923/c287b9b9ed026565247c87a17208d9c2/ymusic/80c6/33f5/6746/727b26cdc9d91748077edb4a540c7fe7.mp3"
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

