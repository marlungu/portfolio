// class Circle {
//     constructor(opts) {
//         this.ctx = opts.ctx
//         this.size = opts.size
//         this.position = {}
//         this.position.x = opts.width
//         this.position.y = opts.height
//     }
//
//     draw() {
//         var ctx = this.ctx
//         ctx.save()
//         ctx.translate(this.position.x, this.position.y)
//
//         ctx.beginPath()
//         ctx.shadowOffsetX = 3;
// 		ctx.shadowOffsetY = 3;
// 		ctx.shadowBlur = 10
// 		ctx.shadowColor = '#fe0000'
//         ctx.lineWidth = 10;
//         ctx.arc(0, 0, this.size, Math.PI * 2, false)
//         ctx.stroke()
//
//         ctx.closePath()
//         ctx.restore()
//     }
//
// }
//
// var canvas = document.querySelector('canvas')
// var ctx = canvas.getContext('2d')
// canvas.height = window.innerHeight
// canvas.width = window.innerWidth
//
// var circles = []
//
// for ( var i = 0 ; i < 26; i++){
//
// var opts = {
//     ctx : ctx,
//     size : 30 * i ,
//     width : canvas.width / 2,
//     height : canvas.height / 2
// }
//
// if (i == 0){
//     opts.size = 1
// }
//
// circles[i] = new Circle(opts)
// circles[i].draw()
//
// }
//
// start()
//
// function start() {
//     requestAnimationFrame(start)
//     ctx.clearRect(0, 0, canvas.width, canvas.height)
//     for (var w = 1; w < circles.length; w++){
//         if (circles[w].size < 750){
//             circles[w].size += 1
//         } else {
//             circles[w].size = 0
//         }
//     circles[w].draw()
//     }
// }
//
// window.onresize = resizeIt
// function resizeIt(){
//   canvas.height = window.innerHeight
//   canvas.width = window.innerWidth
// }
