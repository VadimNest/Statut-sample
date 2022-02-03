o2.books = {
	
	carousel: {
		container: null,
		nav: null,
		imgs: null,
		imgWidth: null,
		imgsLen: null,
		current: null,
    	way: 1,
	},

	object: null,


	init(){
		this.object = $('.books__books--first')
		this.carousel.container = $('div.books__wrapper-div--first')
		this.carousel.nav = $('.books__header--first>ul')
		this.carousel.imgs = this.carousel.container.find('ul.books__main--first-ul')
		this.carousel.imgWidth = this.object.width()
		this.carousel.imgsLen = this.carousel.imgs.length
		this.carousel.current = 0
		$('.books__main--first').css('width', this.carousel.imgWidth)
	


		$( window ).resize(() => {
			this.carousel.imgWidth = this.object.width()
			$('.books__main--first-ul').css('width', this.carousel.imgWidth)
			this.changeSize();
		});
	},

	
	setCurrent(dir)
	{
		var pos = this.carousel.current
    	pos += ~~( dir == 1) || -1
    	this.carousel.current = ( pos < 0 ) ? this.carousel.imgsLen - 1 : pos % this.carousel.imgsLen
	    

	    this.carousel.container.animate({
	        'margin-left': -( this.carousel.current * this.carousel.imgWidth )
	    })
    	return pos
	},

	changeSize()
	{
	    this.carousel.container.animate({
	        'margin-left':  -( this.carousel.current * this.carousel.imgWidth )
	    }, 0);
	},
}
