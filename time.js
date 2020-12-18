	    var box = document.getElementById("box");
	    var now = new Date();
	    box.innerHTML = dateToString(now);
	    // 开启定时器
	    setInterval(function() {
           now = new Date();
           box.innerHTML = dateToString(now);
	    }, 1000);
	   // 将日期格式转成字符串
       	function  dateToString(d) {
       		var weekArr = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"]
            // 获取年月日
	   		var year = d.getFullYear();
	   		//alert(year);
       		var month = d.getMonth()+1;
       		//alert(month); // 10 月份是0-11 0表示1月份 
       		var day = d.getDate();
       		//alert(day); // 1-31
       		// 获取时分秒
       		var h = toTwo(d.getHours());
       		var m = toTwo(d.getMinutes());
       		var s = toTwo(d.getSeconds()); 
       		var str = "当前时间："+year + "年" + month + "月" + day + "日" + " ";
             str += h + ":" + m + ":" + s;
             str += " " + weekArr[d.getDay()];
             return str;
       }

       function toTwo(num) {
       	    return num<10?"0"+num:num;
       }
