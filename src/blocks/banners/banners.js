o2.banners = {

	slider: {
		container: null,
		nav: null,
		imgs: null,
		imgWidth: null,
		imgsLen: null,
		current: null,
		size: null,
    	way: 1,
	},

	init(){
		this.sliderrr = $('.banners__banner--first')
		this.slider.container = $('.banners__slider-canvas')
		this.slider.nav = $('.banners__buttons')
		this.slider.imgs = this.slider.container.find('img')
		this.slider.imgWidth = this.sliderrr.width()
		this.slider.imgsLen = this.slider.imgs.length
		this.slider.current = 0
		this.slider.size = $('.banners__navbar--elem').length
		this.slider.imgs.css('width', this.slider.imgWidth)
		this.auto()
		var objFirst = $('.banners__banner--first')
	
		$( window ).resize(() => {
			this.slider.imgWidth = objFirst.width()
			$('.banners__slider-canvas>li').css('width', this.slider.imgWidth)
			this.changeSize();
		});
	},

	setCurrent(dir)
	{
		var pos = this.slider.current
    	pos += ~~( dir == 1) || -1
    	this.slider.current = ( pos < 0 ) ? this.slider.imgsLen - 1 : pos % this.slider.imgsLen
	    
	    this.slider.container.animate({
	        'margin-left': -( this.slider.current * this.slider.imgWidth )
	    })
    	return pos
	},

	setBar( direct, elems )
	{	
	    var direction = direct
	    this.slider.way += ~~( direct == 1) || -1,
	    ( this.slider.way < 1 ) ? this.slider.way=this.slider.size : (this.slider.way > this.slider.size) ? this.slider.way=1 : this.slider.way = this.slider.way

	    var navBar = elems
	    for(var i = 0; i< this.slider.size; i++){
	        navBar[i].classList.remove("banners__navbar--elem--active")
	    }
	    navBar[this.slider.way - 1].classList.add("banners__navbar--elem--active")
	},

	changeSize()
	{
	    this.slider.container.animate({
	        'margin-left':  -( this.slider.current * this.slider.imgWidth )
	    }, 0);this.slider.imgs.css('width', this.slider.imgWidth);
	},

	auto()
	{
    	setTimeout(() =>
        {
    		var screen = $( window.innerWidth )
	        if(screen[0]<768){
				$('.banners__buttons>button:last-child').trigger('click');
			}
       		this.auto()
		}, 3000)        
   
	},
}
