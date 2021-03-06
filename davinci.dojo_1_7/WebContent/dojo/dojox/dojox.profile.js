var testResourceRe = /\/tests\//,

	copyOnly = function(mid){
		var list = {
			"dojox/dojox.profile":1,
			"dojox/package.json":1,
			"dojox/mobile/themes/common/compile":1
		};
		return (mid in list) || /^dojox\/resources\//.test(mid);
	},

	excludes = [
		"secure",
		"cometd",
		"data/(demos|ItemExplorer|StoreExplorer|restListener)",
		"drawing",
		"editor/plugins/(ResizeTableColumn|SpellCheck)",
		"embed/(IE)",
		"flash",
		"gantt",
		"help",
		"image/(Gallery|SlideShow|ThumbnailPicker)",
		"jq",
		"jsonPath",
		"lang/(aspect|async|docs|observable|oo|typed|functional/(binrec|curry|linrec|listcomp|multirec|numrec|tailrec|util|zip))",
		"layout/(BorderContainer|dnd|ext-dijit)",
		"mobile/app/",
		"rails",
		"robot",
		"socket/Reconnect",
		"storage",
		"sql",
		"widget/(AnalogGauge|AutoRotator|BarGauge|Calendar|CalendarFx|CalendarViews|DataPresentation|DocTester|DynamicTooltip|FeedPortlet|FilePicker|FisheyeList|gauge|Iterator|Loader|Pager|Portlet|RollingList|Rotator|rotator|SortList|UpgradeBar|Wizard)",
		"wire",
		"xmpp"
	],

	excludesRe = new RegExp(("^dojox/(" + excludes.join("|") + ")").replace(/\//, "\\/")),

	usesDojoProvideEtAl = function(mid){
		return excludesRe.test(mid);
	};

var profile = {
	resourceTags:{
		test: function(filename, mid){
			return testResourceRe.test(mid);
		},

		copyOnly: function(filename, mid){
			return copyOnly(mid);
		},

		amd: function(filename, mid){
			return !testResourceRe.test(mid) && !copyOnly(mid) && !usesDojoProvideEtAl(mid) && /\.js$/.test(filename);
		},

		miniExclude: function(filename, mid){
			return 0;
		}
	},

	trees:[
		[".", ".", /(\/\.)|(~$)/]
	]
};
