(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 10,
	color: "#FFFFFF",
	manifest: []
};

// stage content:
(lib.sbc_flash_canvas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var isplay = false;
		stage.addEventListener("click", fl_MouseClickHandler.bind(this));
		
		function fl_MouseClickHandler(){
			if(isplay) {
				this.stop();
				this.btn.visible = true;
			}else{
				this.play();
				this.btn.visible = false;
			}
			isplay = !isplay;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(80));

	// 按鈕
	this.btn = new lib.按鈕();
	this.btn.setTransform(277.5,201.5);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(80));

	// 小齒輪
	this.instance = new lib.小齒輪();
	this.instance.setTransform(401.5,194);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:-9.1},0).wait(1).to({rotation:-18.2},0).wait(1).to({rotation:-27.3},0).wait(1).to({rotation:-36.5},0).wait(1).to({rotation:-45.6},0).wait(1).to({rotation:-54.7},0).wait(1).to({rotation:-63.8},0).wait(1).to({rotation:-72.9},0).wait(1).to({rotation:-82},0).wait(1).to({rotation:-91.1},0).wait(1).to({rotation:-100.3},0).wait(1).to({rotation:-109.4},0).wait(1).to({rotation:-118.5},0).wait(1).to({rotation:-127.6},0).wait(1).to({rotation:-136.7},0).wait(1).to({rotation:-145.8},0).wait(1).to({rotation:-154.9},0).wait(1).to({rotation:-164.1},0).wait(1).to({rotation:-173.2},0).wait(1).to({rotation:-182.3},0).wait(1).to({rotation:-191.4},0).wait(1).to({rotation:-200.5},0).wait(1).to({rotation:-209.6},0).wait(1).to({rotation:-218.7},0).wait(1).to({rotation:-227.8},0).wait(1).to({rotation:-237},0).wait(1).to({rotation:-246.1},0).wait(1).to({rotation:-255.2},0).wait(1).to({rotation:-264.3},0).wait(1).to({rotation:-273.4},0).wait(1).to({rotation:-282.5},0).wait(1).to({rotation:-291.6},0).wait(1).to({rotation:-300.8},0).wait(1).to({rotation:-309.9},0).wait(1).to({rotation:-319},0).wait(1).to({rotation:-328.1},0).wait(1).to({rotation:-337.2},0).wait(1).to({rotation:-346.3},0).wait(1).to({rotation:-355.4},0).wait(1).to({rotation:-364.6},0).wait(1).to({rotation:-373.7},0).wait(1).to({rotation:-382.8},0).wait(1).to({rotation:-391.9},0).wait(1).to({rotation:-401},0).wait(1).to({rotation:-410.1},0).wait(1).to({rotation:-419.2},0).wait(1).to({rotation:-428.4},0).wait(1).to({rotation:-437.5},0).wait(1).to({rotation:-446.6},0).wait(1).to({rotation:-455.7},0).wait(1).to({rotation:-464.8},0).wait(1).to({rotation:-473.9},0).wait(1).to({rotation:-483},0).wait(1).to({rotation:-492.2},0).wait(1).to({rotation:-501.3},0).wait(1).to({rotation:-510.4},0).wait(1).to({rotation:-519.5},0).wait(1).to({rotation:-528.6},0).wait(1).to({rotation:-537.7},0).wait(1).to({rotation:-546.8},0).wait(1).to({rotation:-555.9},0).wait(1).to({rotation:-565.1},0).wait(1).to({rotation:-574.2},0).wait(1).to({rotation:-583.3},0).wait(1).to({rotation:-592.4},0).wait(1).to({rotation:-601.5},0).wait(1).to({rotation:-610.6},0).wait(1).to({rotation:-619.7},0).wait(1).to({rotation:-628.9},0).wait(1).to({rotation:-638},0).wait(1).to({rotation:-647.1},0).wait(1).to({rotation:-656.2},0).wait(1).to({rotation:-665.3},0).wait(1).to({rotation:-674.4},0).wait(1).to({rotation:-683.5},0).wait(1).to({rotation:-692.7},0).wait(1).to({rotation:-701.8},0).wait(1).to({rotation:-710.9},0).wait(1).to({rotation:-720},0).wait(1));

	// 大齒輪
	this.instance_1 = new lib.符號1();
	this.instance_1.setTransform(204,196);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:-0.5,regY:-1,rotation:4.6,x:203.6,y:194.9},0).wait(1).to({rotation:9.1},0).wait(1).to({rotation:13.7,x:203.7},0).wait(1).to({rotation:18.2,x:203.8},0).wait(1).to({rotation:22.8,x:203.9},0).wait(1).to({rotation:27.3,x:204,y:194.8},0).wait(1).to({rotation:31.9,x:204.1,y:194.9},0).wait(1).to({rotation:36.5,x:204.2},0).wait(1).to({rotation:41},0).wait(1).to({rotation:45.6,x:204.3},0).wait(1).to({rotation:50.1,x:204.4},0).wait(1).to({rotation:54.7,x:204.5,y:195},0).wait(1).to({rotation:59.2,x:204.6},0).wait(1).to({rotation:63.8,x:204.7,y:195.1},0).wait(1).to({rotation:68.4,y:195.2},0).wait(1).to({rotation:72.9,x:204.8},0).wait(1).to({rotation:77.5,x:204.9,y:195.3},0).wait(1).to({rotation:82},0).wait(1).to({rotation:86.6,y:195.4},0).wait(1).to({rotation:91.1,x:205,y:195.5},0).wait(1).to({rotation:95.7,y:195.6},0).wait(1).to({rotation:100.3,x:205.1,y:195.7},0).wait(1).to({rotation:104.8},0).wait(1).to({rotation:109.4,y:195.9},0).wait(1).to({rotation:113.9},0).wait(1).to({rotation:118.5,y:196},0).wait(1).to({rotation:123,y:196.1},0).wait(1).to({rotation:127.6,y:196.2},0).wait(1).to({rotation:132.2,y:196.3},0).wait(1).to({rotation:136.7,x:205,y:196.4},0).wait(1).to({rotation:141.3,y:196.5},0).wait(1).to({rotation:145.8,x:204.9},0).wait(1).to({rotation:150.4,y:196.6},0).wait(1).to({rotation:154.9,x:204.8,y:196.7},0).wait(1).to({rotation:159.5},0).wait(1).to({rotation:164.1,x:204.7,y:196.8},0).wait(1).to({rotation:168.6,y:196.9},0).wait(1).to({rotation:173.2,x:204.6},0).wait(1).to({rotation:177.7,x:204.5,y:197},0).wait(1).to({rotation:182.3,x:204.4},0).wait(1).to({rotation:186.8},0).wait(1).to({rotation:191.4,x:204.3,y:197.1},0).wait(1).to({rotation:195.9,x:204.2},0).wait(1).to({rotation:200.5,x:204.1},0).wait(1).to({rotation:205.1,x:204},0).wait(1).to({rotation:209.6,x:203.9},0).wait(1).to({rotation:214.2,x:203.8},0).wait(1).to({rotation:218.7,x:203.7},0).wait(1).to({rotation:223.3,x:203.6},0).wait(1).to({rotation:227.8,y:197},0).wait(1).to({rotation:232.4,x:203.5},0).wait(1).to({rotation:237,x:203.4,y:196.9},0).wait(1).to({rotation:241.5,x:203.3},0).wait(1).to({rotation:246.1,y:196.8},0).wait(1).to({rotation:250.6,x:203.2},0).wait(1).to({rotation:255.2,y:196.7},0).wait(1).to({rotation:259.7,x:203.1},0).wait(1).to({rotation:264.3,x:203,y:196.6},0).wait(1).to({rotation:268.9,y:196.5},0).wait(1).to({rotation:273.4,x:202.9,y:196.4},0).wait(1).to({rotation:278,y:196.3},0).wait(1).to({rotation:282.5},0).wait(1).to({rotation:287.1,y:196.2},0).wait(1).to({rotation:291.6,x:202.8,y:196.1},0).wait(1).to({rotation:296.2,x:202.9,y:196},0).wait(1).to({rotation:300.8,y:195.9},0).wait(1).to({rotation:305.3,y:195.8},0).wait(1).to({rotation:309.9,y:195.7},0).wait(1).to({rotation:314.4,y:195.6},0).wait(1).to({rotation:319},0).wait(1).to({rotation:323.5,x:203,y:195.5},0).wait(1).to({rotation:328.1,y:195.4},0).wait(1).to({rotation:332.7,x:203.1,y:195.3},0).wait(1).to({rotation:337.2},0).wait(1).to({rotation:341.8,x:203.2,y:195.2},0).wait(1).to({rotation:346.3,y:195.1},0).wait(1).to({rotation:350.9,x:203.3},0).wait(1).to({rotation:355.4,x:203.4,y:195},0).wait(1).to({rotation:360,x:203.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(339.1,249.8,415.7,292.2);


// symbols:
(lib.小齒輪 = function() {
	this.initialize();

	// 圖層1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#251815").ss(5).p("ACCAAQAAA2gmAmQgmAmg2AAQg1AAgmgmQgmgmAAg2QAAg1AmgmQAmgmA1AAQA2AAAmAmQAmAmAAA1g");
	this.shape.setTransform(0.1,-0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F1ECEC").s().p("AhaBcQgngmAAg2QAAg1AngmQAmgmA0AAQA1AAAnAmQAmAmAAA1QAAA2gmAmQgnAmg1AAQg0AAgmgmg");
	this.shape_1.setTransform(0.1,-0.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#251815").ss(5).p("AFbAAQAACQhlBlQhmBmiQAAQiPAAhlhmQhmhlAAiQQAAiPBmhlQBlhmCPAAQCQAABmBmQBlBlAACPg");
	this.shape_2.setTransform(0,-0.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E1DFD8").s().p("Aj0D1QhmhlAAiQQAAiPBmhlQBlhmCPAAQCQAABmBmQBlBlAACPQAACQhlBlQhmBmiQAAQiPAAhlhmg");
	this.shape_3.setTransform(0,-0.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#251815").ss(5).p("ALTBLQAEgoAAgjQAAgjgEgoIjdhBQgIgdgFgLICMi2QgmhDgzg4IjZBNQgNgLgVgOIAGjmQhHgghJgPIiCC+IgpAAIiCi+QhKAPhGAgIAGDmQgVAOgNALIjZhNQgyA3gnBEICMC2QgGARgHAXIjdBBQgEAoAAAjQAAAjAEAoIDdBBQAHAYAGARIiMC2QAnBDAyA4IDZhNQATAOAPALIgGDmQBDAeBNARICCi+IApAAICCC+QBMgRBEgeIgGjmQAPgLATgOIDZBNQAzg5AmhCIiMi2QAFgMAIgdg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E1DFD8").s().p("AAVIJIgpAAIiCC+QhNgRhDgeIAGjmIgigZIjZBNQgyg3gnhEICMi2QgGgRgHgYIjdhBQgEgoAAgjQAAgjAEgoIDdhBQAHgXAGgRIiMi2QAnhEAyg3IDZBNQANgLAVgOIgGjmQBGggBKgPICCC+IApAAICCi+QBJAPBHAgIgGDmQAVAOANALIDZhNQAzA4AmBDIiMC2QAFAMAIAcIDdBBQAEAoAAAjQAAAjgEAoIjdBBQgIAdgFAMICMC2QgmBCgzA5IjZhNIgiAZIAGDmQhEAehMARg");

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-75.2,-73.9,150.5,147.9);


(lib.按鈕 = function() {
	this.initialize();

	// 圖層2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjwkVIHhEVInhEWg");
	this.shape.setTransform(7.1,1);

	// 圖層 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(204,204,204,0.8)").s().p("An4H5QjRjSAAknQAAkmDRjSQDSjREmAAQEnAADSDRQDRDSAAEmQAAEnjRDSQjSDRknAAQkmAAjSjRg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-71.5,-71.5,143,143);


(lib.符號1 = function() {
	this.initialize();

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#251815").ss(5).p("ACCAAQAAA2gmAmQgmAmg2AAQg1AAglgmQgngmAAg2QAAg1AnglQAlgnA1AAQA2AAAmAnQAmAlAAA1g");
	this.shape.setTransform(-0.5,-0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F1ECEC").s().p("AhaBcQgngmAAg2QAAg1AnglQAmgnA0AAQA1AAAnAnQAmAlAAA1QAAA2gmAmQgnAmg1AAQg0AAgmgmg");
	this.shape_1.setTransform(-0.5,-0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#251815").ss(5).p("ALHAAQAACRg4CEQg2B/hiBjQjQDQknAAQklAAjRjQQhihjg2h/Qg4iEAAiRQAAiQA4iDQA2iABihjQDRjQElAAQEnAADQDQQBiBjA2CAQA4CDAACQg");
	this.shape_2.setTransform(-0.5,-0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F1ECEC").s().p("An2H3Qhihjg2h/Qg4iEAAiRQAAiPA4iEQA2iABihiQDRjRElAAQEnAADQDRQBiBiA2CAQA4CEAACPQAACRg4CEQg2B/hiBjQjQDQknAAQklAAjRjQg");
	this.shape_3.setTransform(-0.5,-0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#251815").ss(5).p("ARqAAQAAgngDgoIDkg6QgHhJgQhMIjrAQQgThPgehLIDGh9QgdhCgnhEIjbBXQgrhFgzg9ICWi1Qg0g5g3gxIi0CWQg/g1hDgqIBWjaQg9gkhIghIh+DHQhKgehPgUIAPjqQhLgQhKgIIg6DkQgsgDgkAAQgiAAgtADIg6jkQhJAIhLAQIAPDqQhPAUhKAeIh+jHQhKAhg8AkIBXDaQhBAohBA3Ii1iWQg3AxgzA5ICWC1QgzA9gsBFIjahXQgoBFgcBBIDGB9QgfBOgTBMIjqgQQgQBMgIBJIDkA6QgDAoAAAnQAAAoADAoIjkA6QAIBJAQBMIDqgQQATBMAfBOIjGB9QAcBBAoBFIDahXQAsBFAzA9IiWC1QAzA5A3AxIC1iWQBBA3BBAoIhXDaQA8AkBKAhIB+jHQBKAeBPAUIgPDqQBLAQBJAIIA6jkQAtADAiAAQAkAAAsgDIA6DkQBKgIBLgQIgPjqQBPgUBKgeIB+DHQBIggA9glIhWjaQBDgqA/g1IC0CWQA3gxA0g5IiWi1QAzg9ArhFIDbBXQAnhEAdhCIjGh9QAehLAThPIDrAQQAQhMAHhJIjkg6QADgoAAgog");
	this.shape_4.setTransform(-0.5,-1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F1ECEC").s().p("ABQRnQgsADgkAAQgiAAgtgDIg6DkQhKgIhKgQIAOjqQhOgUhLgeIh9DHQhLghg7gkIBXjaQhBgohBg3Ii1CWQg3gxgzg5ICVi1Qgyg9gshFIjaBXQgohFgdhBIDHh9QgghOgShMIjrAQQgPhMgIhJIDkg6QgDgoAAgoQAAgnADgoIjkg6QAIhJAPhMIDrAQQAShMAghOIjHh9QAdhBAohFIDaBXQAshFAyg9IiVi1QAzg5A3gxIC1CWQBBg3BBgoIhXjaQA7gkBLghIB9DHQBLgeBOgUIgOjqQBKgQBKgIIA6DkQAtgDAiAAQAkAAAsADIA6jkQBKAIBKAQIgODqQBPAUBKAeIB+jHQBIAhA9AkIhWDaQBDAqA+A1IC1iWQA3AxAzA5IiVC1QAyA9AsBFIDahXQAnBEAeBCIjGB9QAdBLAUBPIDqgQQARBMAHBJIjkA6QADAoAAAnQAAAogDAoIDkA6QgHBJgRBMIjqgQQgUBPgdBLIDGB9QgeBCgnBEIjahXQgsBFgyA9ICVC1QgzA5g3AxIi1iWQg+A1hDAqIBWDaQg9AlhIAgIh+jHQhKAehPAUIAODqQhKAQhKAIg");
	this.shape_5.setTransform(-0.5,-1);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-138.7,-139.2,276.5,276.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;