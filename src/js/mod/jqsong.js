$(function(){
  	let id = parseInt(location.search.match(/\bid=([^&]*)/)[1],10)
	$.get('../src/js/lib/song.json').then(function(response){
		let songs = response
		let song = songs.filter(s => s.id == id)[0]
		let {url, cover, filter, lyric, name, author} = song
		initText(name, author, lyric, url, cover, filter)
	})

	function initText(name, author, lyric, url, cover, filter) {
		$('.cover').attr("src",cover)
		$('.page').css({"background":"url("+filter+") no-repeat","background-size": "cover", "transform-origin": "center top","background-position": "50%","transition": "opacity .3s linear"})
		let musicName = $('.song-description h1')
		musicName.html(`${name} - <span>${author}</span>`)
		initLyric(lyric)
		autoPlay(url)
	}

	function autoPlay(url) {
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
    setInterval(()=>{
    	let seconds = audio.currentTime
    	let munites = ~~(seconds / 60)
    	let left = seconds - munites * 60
    	let time = `${pad(munites)}:${pad(left)}`
    	let $lines = $('.lines > p')
    	let $whichLine
      // console.log($lines)
      for (let i = 0; i<$lines.length; i++){
      	let currentLineTime = $lines.eq(i).attr('data-time')
      	let nextLineTime = $lines.eq(i+1).attr('data-time')
      	if ( $lines.eq(i+1).length !== 0 && currentLineTime < time && nextLineTime > time){
      		$whichLine = $lines.eq(i)
      		break
      	}
      }
      if($whichLine){
      	$whichLine.addClass('active').prev().removeClass('active')
      	let top = $whichLine.offset().top
      	let linesTop = $('.lines').offset().top
      	let delta = top - linesTop - $('.lyric').height()/3
      	console.log(top, linesTop, ($('.lyric').height()/3), delta)
      	$('.lines').css('transform', `translateY(-${delta}px)`)
      	// console.log(top,linesTop)
      }
  },300)
}

	function pad(num) {
		return num > 10 ? num + '' : '0' + num
	}

	function initLyric(lyric) {
		let array = lyric.split('\n')
		let regex = /^\[(.+)\](.*)/
		array = array.map(function(string, index){
			let matches = string.match(regex)
			if (matches){
				return {time: matches[1], words: matches[2]}
			}
		})
		let $lines = $('.lines')
		array.map(function(object){
			if(!object){return}
				let $p = $('<p/>')
			$p.attr('data-time', object.time).text(object.words)
			$p.appendTo($lines)
		})
	}
})

