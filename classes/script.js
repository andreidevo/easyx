$('div').click(function() { 
	let newWin = window.open('http://easyx.site/spb/30/classes/', '')
	let sName = this.innerHTML
	newWin.onload = function() {
		newWin.run(sName)
	}
})

