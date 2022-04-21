let y = 0
let z = 0
input.onButtonPressed(Button.A, function () {
    y += 1
    if (y == 1) {
        for (let x = 0; x <= 4; x++) {
            for (let index = 0; index <= 4; index++) {
                led.plot(x, index)
                basic.pause(50)
                led.plot(index, x)
            }
        }
    } else {
        for (let x = 0; x <= 4; x++) {
            for (let index = 0; index <= 4; index++) {
                led.unplot(x, index)
                basic.pause(50)
                led.unplot(index, x)
            }
        }
    }
})
input.onButtonPressed(Button.B, function () {
    z += 1
    if (z == 1) {
        for (let x = 0; x <= 4; x++) {
            for (let index = 0; index <= 4; index++) {
                led.plot(4 - x, 4 - index)
                basic.pause(50)
                led.plot(4 - index, 4 - x)
            }
        }
    } else {
        for (let x = 0; x <= 4; x++) {
            for (let index = 0; index <= 4; index++) {
                led.unplot(4 - index, 4 - x)
                basic.pause(50)
                led.unplot(4 - x, 4 - index)
            }
        }
    }
})
basic.forever(function () {
	
})
