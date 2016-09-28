CT.require();

games.heads.ui.Display = CT.Class({
	"CLASSNAME": "games.heads.ui.Display",
	_heads: [],
	_resizeHeads: function() {
		if (this._heads.length > 0) {
			this.log("multiple heads");
		}
	},
	say: function(obj) {
		//obj.name head issued message to say obj.message
	},
	update: function(u) {
		this.log("update", u);
		//call say

	},
	join: function(user) {
		this.log("join", user);
		//create head
		this._resizeHeads();
	},
	leave: function(user) {
		this.log("leave", user);
		//remove head
		this._resizeHeads();
	},
	_build: function() {
		this.view.classList.add("display-background w1 h1");
		CT.dom.addContent(this.view,
			CT.dom.node([
					CT.dom.node("HEADS", "DIV", "centered"),
					this.headsNode = CT.dom.node()
				]));
	},
	init: function(obj) {
		this.log("init", obj);
		this._build();
	}
}, mgc.core.UI);
