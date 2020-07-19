// => Waves data
	let waves = [];

// => Animate function
	function animateOver () {
		waves.forEach(wave => {
			dynamics.animate(wave.el, {
				d: wave.from
			}, {
				type: dynamics.bezier,
				points: [{
					'x': 0,
					'y': 0,
					'cp': [{
						'x': 0.488,
						'y': -0.334
					}]
				}, {
					'x': 1,
					'y': 1,
					'cp': [{
						'x': 0.566,
						'y': 1.33
					}]
				}],

				complete: this.animateOut,
				duration: Math.floor(15000 - Math.random() * (15000 - 11000))
			})
		})
	}
	function animateOut () {
		waves.forEach(wave => {
			dynamics.animate(wave.el, {
				d: wave.to
			}, {
				type: dynamics.bezier,
				points: [{
					'x': 0,
					'y': 0,
					'cp': [{
						'x': 0.488,
						'y': -0.334
					}]
				}, {
					'x': 1,
					'y': 1,
					'cp': [{
						'x': 0.566,
						'y': 1.33
					}]
				}],

				complete: this.animateOver,
				duration: Math.floor(150000 - Math.random() * (150000 - 11000))
			})
		})
	}

// => Get all wave name
	document.getElementsByClassName('waves')[0].childNodes.forEach(wave => {
		if (wave.nodeName === 'svg') {
			waves.push({
				name: wave.getAttribute('id')
			})			
		}
	})

// => Get all path waves (from and to)
	waves.forEach(wave => {
		wave['el'] = document.getElementById(wave.name).querySelector('path')
		wave['from'] = wave['el'].getAttribute('d-from')
		wave['to'] = wave['el'].getAttribute('d-to')
	})

// => Start waves animations
	this.animateOver()