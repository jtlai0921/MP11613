var Spec = {}
Spec.container;
Spec.maxWidth = 767;
Spec.isMobile;
Spec.resultSortArray = [];
Spec.mobile_sort_list; // 於行動裝置顯示結果用的容器div
Spec.currentItem = "size";
Spec.select;
Spec.data = [
	{name: "機種A", img: "./thumb/thumb_A.png", url:"#", size: [69, 133, 9.5], weight: "139g", displaySize: "4.7吋", camera: "808萬畫素", waterResist: false, oneSeg: false},
	{name: "機種B", img: "./thumb/thumb_B.png", url:"#", size: [52, 130, 12.3], weight: "106g", displaySize: "3.2吋", camera: "804萬畫素", waterResist: false, oneSeg: true},
	{name: "機種C", img: "./thumb/thumb_C.png", url:"#", size: [66, 126, 11.9], weight: "149g", displaySize: "4.3吋", camera: "1200萬畫素", waterResist: true, oneSeg: false},
	{name: "機種D", img: "./thumb/thumb_D.png", url:"#", size: [64, 118, 9.9], weight: "130g", displaySize: "4.0吋", camera: "800萬畫素", waterResist: false, oneSeg: false}
];
Spec.init = function (id) {
	Spec.container = document.getElementById(id);
	Spec.mobile_sort_list = $(".mobile_sort_list");
	for(var i=0; i<Spec.data.length; i++) {
		Spec.resultSortArray.push(i);
	}
	Spec.initCheck();
	$(window).bind("resize", Spec.sizeCheck);
	Spec.select = $("#spec_mobile .item");
	Spec.select.bind("change", Spec.selectChange);
	if (!Array.indexOf) {
		Array.prototype.indexOf = function(o) {
			for (var i in this) {
				if (this[i] == o) { return i; }
			}
			return -1;
		}
	}
}

Spec.initCheck = function () {
	var wsize = $("body").width();
	if( Spec.maxWidth < wsize) { // PC
		Spec.isMobile = false;
		Spec.pcVer();
	}else if( wsize <= Spec.maxWidth){ // Mobile
		Spec.isMobile = true;
		Spec.mobileVer();
	}
}

Spec.sizeCheck = function () {
	var wsize = $("body").width();
	if( Spec.maxWidth < wsize && Spec.isMobile ) { // PC
		Spec.isMobile = false;
		Spec.pcVer();
	}else if( wsize <= Spec.maxWidth && !Spec.isMobile ){ // Mobile
		Spec.isMobile = true;
		Spec.mobileVer();
	}
}

Spec.pcVer = function () {
	$("#spec_pc").remove();
	var table = $("<table id='spec_pc'></table>").appendTo(Spec.container);
	for (var i=0; i<Spec.data.length; i++) {
		var tr = $("<tr></tr>").appendTo(table);
		var th = $("<th></th>").appendTo(tr);
		th.append("<a href='"+Spec.data[i]["url"]+"'><img src ='"+Spec.data[i]["img"]+"' alt='"+Spec.data[i]["name"]+"'><span>"+Spec.data[i]["name"]+"</span></a>");
		for (var t in Spec.data[i]) {
			if(t !== "name" && t !== "img" && t !== "url") {
				var td = $("<td></td>").appendTo(tr);
				var key = Spec.data[i][t];
				if(typeof key == "boolean") {
					(key) ? td.append("◎") : td.append("―");
				} else if(typeof key == "string") {
					td.append(key);
				} else if(t == "size") {
					td.append("寬"+key[0]+"mm "+"長"+key[1]+"mm "+"高"+key[2]+"mm");
				}
			}
		}
	}
}

Spec.mobileVer = function () {
	$("#spec_pc").remove();
	var ul = Spec.mobile_sort_list.find("ul"), oldLankVal=0, oldLankNum=0, kuriage=0;
	ul.empty();
	for(var i=0; i<Spec.resultSortArray.length; i++) {
		var index = Spec.resultSortArray[i];
		var li = $("<li></li>").appendTo(ul);
		var dl = $("<dl></dl>").appendTo(li);
		var dt = $("<dt></dt>").appendTo(dl);
		var dd = $("<dd></dd>").appendTo(dl);
		dt.append("<a href='"+Spec.data[index]["url"]+"'><img src ='"+Spec.data[index]["img"]+"' alt='"+Spec.data[index]["name"]+"'></a>");
		dd.append("<a href='"+Spec.data[index]["url"]+"'></a>");
		dd.find("a").append("<h1>"+Spec.data[index]["name"]+"</h1>");
		var key = Spec.data[index][Spec.currentItem];
		if(Spec.currentItem === "size") {
			if (oldLankVal !== key[0]*key[1]*key[2]) {
				oldLankNum++;
				oldLankNum+=kuriage;
				kuriage = 0;
			}else{
				kuriage++;
			};
			oldLankVal = key[0]*key[1]*key[2];
			dd.find("a").append("<p class='value' style='font-size: 70%'>"+"寬"+key[0]+"mm "+"長"+key[1]+"mm "+"高"+key[2]+"mm"+"</p>");	
		}else{
			if (oldLankVal !== key) {
				oldLankNum++;
				oldLankNum+=kuriage;
				kuriage = 0;
			}else{
				kuriage++;
			};
			dd.find("a").append("<p class='value'>"+key+"</p>");
		}
		//console.log(oldLankNum,kuriage)
		dd.find("a").append("<div class='etc'></div>");
		var etc = dd.find("a div.etc");
		for (var j in Spec.data[index]) {
			if(j !== "name" && j !== "img" && j !== "url" && j !== Spec.currentItem && Spec.data[index][j] !== false ){
				if(j === "size") {
					etc.append("<span>尺寸: "+Spec.data[index][j].join("×")+"</span>");
				}else if(j==="weight"){
					etc.append("<span>重量: "+Spec.data[index][j]+"</span>");
				}else if(j==="displaySize"){
					etc.append("<span>螢幕尺寸: "+Spec.data[index][j]+"</span>");
				}else if(j==="camera"){
					etc.append("<span>相機: "+Spec.data[index][j]+"</span>");
				}else if(j==="waterResist"){
					etc.append("<span>防水功能</span>");
				}else if(j==="oneSeg"){
					etc.append("<span>OneSeg功能</span>");
				}
			}
		}
		li.addClass("lank"+oldLankNum);
	}
}

Spec.selectChange = function (e) {
	Spec.currentItem = e.target.value;
	var prelist = [];
	var i;
	var dotList = [];
	for (i=0; i<Spec.data.length; i++) {
		if(Spec.currentItem === "size") {
			var arr = Spec.data[i][Spec.currentItem];
			prelist.push( arr[0] * arr[1] * arr[2] );
		} else {
			prelist.push( parseFloat(Spec.data[i][Spec.currentItem]) );
		}
	}
	prelist.sort(function(a,b){return b - a;});
	Spec.resultSortArray.length = 0;
	for (var i=0; i<prelist.length; i++ ) {
		for (var t=0; t<Spec.data.length; t++) {
			//如果是體積尺寸的話
			if(Spec.currentItem === "size") {
				var arr = Spec.data[t][Spec.currentItem];
				if(prelist[i] === arr[0] * arr[1] * arr[2] && dotList.indexOf(i)==-1) {
					Spec.resultSortArray.push(t);
					dotList.push(i);
				}
			}else if(prelist[i] === parseFloat(Spec.data[t][Spec.currentItem]) && dotList.indexOf(i)==-1) {
				Spec.resultSortArray.push(t);
				dotList.push(i);
			}
		}
	}
	Spec.mobileVer();
}

