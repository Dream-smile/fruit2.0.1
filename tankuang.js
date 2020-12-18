//网页链接和搜索框
		var submit001=document.getElementById('submit001');
		var submit002=document.getElementById('submit002');
		var prev=document.getElementById('prev');
		var next=document.getElementById('next');
		submit001.onclick=function(){
			window.alert("此功能尚未开发，请耐心等待！");
		}
		submit002.onclick=function(){
			window.alert('你的订单已提交！');
		}
		prev.onclick=function(){
			window.alert("程序猿写完后，发现它写的按钮事件还有一些bug，所以暂时还没有绑定")
		}
		next.onclick=function(){
			window.alert("程序猿写完后，发现它写的按钮事件还有一些bug，所以暂时还没有绑定")
		}
		prev.onmouseover=function(){
			prev.style.height='150px';
			prev.style.width='150px';
		}
		prev.onmouseout=function(){
			prev.style.height='106px';
			prev.style.width='106px';
		}
		next.onmouseover=function(){
			next.style.height='150px';
			next.style.width='150px';
		}
		next.onmouseout=function(){
			next.style.height='106px';
			next.style.width='106px';
		}
