games.heads.ui.Display = CT.Class({
	"CLASSNAME": "games.heads.ui.Display",
	_heads: {},
	_addHead: function(name) {
		this._heads[name] = CT.dom.node([
				CT.dom.node(name, "DIV", "centered"),
				CT.dom.iframe("http://45.79.138.63:8082/game0.html",
					"bot-iframe")
			], "DIV", "head-wrapper");
		this.headsNode.appendChild(this._heads[name]);
		this._resizeHeads();
	},
	_rmHead: function() {
		CT.dom.remove(this._heads[user.name]);
		delete this._heads[user.name];
		this._resizeHeads();
	},
	_resizeHeads: function() {
		if (this._heads.length > 0) {
			this.log("multiple heads");
		}
	},
	say: function(obj) {
		this.log("say", obj);
		//obj.name head issued message to say obj.message
		debugger;
		var iframe = this._heads[obj.user].children[1],
			msg = obj.message.data.message;
		CT.dom.getDoc(iframe).postMessage(msg, "*");
	},
	update: function(u) {
		this.log("update", u);
		if (u.message.action == "say")
			this.say(u);
		//call say
	},
	join: function(user) {
		this.log("join", user);
		this._addHead(user);
	},
	leave: function(user) {
		this.log("leave", user);
		this._rmHead(user.name);
	},
	_build: function() {
		this.view.classList.add("display-background");
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
