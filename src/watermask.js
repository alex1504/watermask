export default class WaterMask {
    constructor(options) {
        let container = document.querySelector("#watermask")
        let defaultOpts = {
            font: "",
            fontType: 'Microsoft YaHei',
            size: 24,
            container: container,
            color: "#333",
            alpha: 0.2,
            rotate: 340,
            scale: 1,
            startX: 20,
            startY: 20,
            rows: 10,
            cols: 10,
            xGap: 200,
            yGap: 100,
            image: '',
            repeat: true
        }
        this.options = Object.assign(defaultOpts, options)
        this.canvas = this.options.container
        this.ctx = this.canvas && this.canvas.getContext('2d')
        this.checkOptions()
        this.initStyle()
        this.autoResize()
        this.render()
    }

    checkOptions() {
        if (!this.canvas) {
            throw Error('Canvas element is not found, default selector is #watermask')
        }
        if (!this.options.font && !this.options.image) {
            throw Error('Options.font or Options.image is required')
        }
    }

    initStyle() {
        this.canvas.style['position'] = 'fixed';
        this.canvas.style['left'] = 0;
        this.canvas.style['top'] = 0;
        this.canvas.style['pointer-events'] = 'none';
        this.canvas.style['overflow'] = 'hidden';
        this.canvas.style['z-index'] = 99999;
    }

    autoResize() {
        if (this.canvas.width === 300 && this.canvas.height === 150) {
            this.canvas.width = window.innerWidth
            this.canvas.height = window.innerHeight
            window.addEventListener('resize', () => {
                this.canvas.width = window.innerWidth
                this.canvas.height = window.innerHeight
                this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
                this.render()
            })
        }
    }


    render() {
        this.ctx.globalAlpha = this.options.alpha

        if (!this.options.image) {
            this.drawFont()
        } else {
            this.drawImage()
        }
    }

    drawFont() {
        const font = this.options.font
        const width = this.canvas.width
        const height = this.canvas.height

        this.ctx.font = this.options.size + 'px ' + this.options.fontType
        if (this.options.repeat) {
            for (let i = 0; i < this.options.cols; i++) {
                for (let ii = 0; ii < this.options.rows; ii++) {
                    this.ctx.save()
                    this.ctx.translate(this.options.startX + (this.options.xGap) * i, this.options.startY + (this.options.yGap) * ii)
                    this.ctx.rotate(this.options.rotate / 180 * Math.PI)
                    this.ctx.scale(this.options.scale, this.options.scale)
                    this.ctx.fillText(font, 0, 0)
                    this.ctx.restore()
                }
            }
        } else {
            this.ctx.save()
            this.ctx.fillStyle = this.options.color
            this.ctx.translate(width / 2, height / 2)
            this.ctx.rotate(this.options.rotate / 180 * Math.PI)
            this.ctx.scale(this.options.scale, this.options.scale)
            this.ctx.textAlign = 'center'
            this.ctx.fillText(font, 0, 0)
            this.ctx.restore()
        }
    }

    drawImage() {
        const width = this.canvas.width
        const height = this.canvas.height

        if (this.options.repeat) {
            for (let i = 0; i < this.options.cols; i++) {
                for (let ii = 0; ii < this.options.rows; ii++) {
                    const image = new Image()
                    image.src = this.options.image
                    image.onload = function () {
                        this.ctx.save()
                        this.ctx.translate(this.options.startX + (this.options.xGap) * i, this.options.startY + (this.options.yGap) * ii)
                        this.ctx.rotate(this.options.rotate / 180 * Math.PI)
                        this.ctx.scale(this.options.scale, this.options.scale)
                        this.ctx.drawImage(image, -image.width / 2, -image.height / 2)
                        this.ctx.restore()
                    }.bind(this)
                }
            }
        } else {
            const image = new Image()
            image.src = this.options.image
            image.onload = function () {
                this.ctx.save()
                this.ctx.translate(width / 2, height / 2)
                this.ctx.rotate(this.options.rotate / 180 * Math.PI)
                this.ctx.scale(this.options.scale, this.options.scale)
                this.ctx.drawImage(image, -image.width / 2, -image.height / 2)
                this.ctx.restore()
            }.bind(this)
        }
    }
}