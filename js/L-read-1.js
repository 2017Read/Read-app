$(function(){
	let art=document.querySelector('.art');
	let set=document.querySelector('.set');
	let nig=document.querySelector('.nig');
	let wor=document.querySelectorAll('p');
	let one=document.querySelector('.one');
	let two=document.querySelector('.two');
	let three=document.querySelector('.three');
	let four=document.querySelector('.four');
	let five=document.querySelector('.five');
	//点击页面，菜单显示出来
	art.addEventListener('touchend',function(){
		set.classList.toggle('first')
	});
	//点击夜间模式
	nig.addEventListener('touchend',function(){
		art.classList.toggle('night');
		wor.forEach(function(value,index){
			value.classList.toggle('wordcolor');
		})
	})
	//点击亮度
	let light=document.querySelector('.light');
	let lig=document.querySelector('.lig');
	lig.addEventListener('touchend',function(value){
		fon.classList.remove('font');
		light.classList.toggle('font');
		console.log(1)
	})
	//点击字体
	let font=document.querySelector('.wenzi');
	let fon=document.querySelector('.fon');
	console.log(font)
	font.addEventListener('touchend',function(value){
		light.classList.remove('font');
		fon.classList.toggle('font');
		console.log(1)
	})
	
	
	
	
	one.addEventListener('touchend',function(){
		wor.forEach(function(value,index){
			$(value).removeClass();
			value.classList.toggle('onecolor');
		})
	})
	two.addEventListener('touchend',function(){
		wor.forEach(function(value,index){
			$(value).removeClass();
			value.classList.toggle('twocolor');
		})
	})
	three.addEventListener('touchend',function(){
		wor.forEach(function(value,index){
			$(value).removeClass();
			value.classList.toggle('threecolor');
		})
	})
	four.addEventListener('touchend',function(){
		wor.forEach(function(value,index){
			$(value).removeClass();
			value.classList.toggle('fourcolor');
		})
	})
	five.addEventListener('touchend',function(){
		wor.forEach(function(value,index){
			$(value).removeClass();
			value.classList.toggle('fivecolor');
		})
	})
	//改变字体大小
	let reduce=document.querySelector('.wordreduce');
	let increase=document.querySelector('.wordincrease');
	let n=$(wor).css('fontSize');
	let m=parseInt(n);
	console.log(m)
	reduce.addEventListener('touchend',function(){
		m++;
		if(m>22){
			m=22
		};
		$(wor).css('font-size',m+'px');
	});
	increase.addEventListener('touchend',function(){
		m--;
		$(wor).css('font-size',m+'px');
	});
	
	
	
	
	
	
})
