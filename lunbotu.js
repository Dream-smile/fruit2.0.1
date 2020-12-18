//轮播图
		var i=1;
		var time;
		var banner1=document.getElementById('banner1');
		var banner2=document.getElementById('banner2');
		var banner3=document.getElementById('banner3');
		var banner4=document.getElementById('banner4');
		var banner5=document.getElementById('banner5');
		var banner=[banner1,banner2,banner3,banner4,banner5];
		banner1.style.height='550px';
		function begin(){
			time=setInterval(function(){
				//这里采用数组存放，按一定时间放映的方式，实现了一个伪轮播图
				if(i==5){
					banner5.style.height=0;
					banner1.style.height='550px';
					i=1;
				}else{
					banner[i].style.height='550px';
					banner[i-1].style.height=0;
					//当鼠标划上时使其暂停
					banner[i].onmouseover=function(){
						clearInterval(time);
					}
					//鼠标挪开时继续开始
					banner[i].onmouseout=function(){
						begin();
					}
					i++;
				}
			},2000)
			
		}
		window.onload=begin();
