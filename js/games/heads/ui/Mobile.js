games.heads.ui.Mobile = CT.Class({
	"CLASSNAME": "games.heads.ui.Mobile",
	update: function(obj) {
		this.log("update", obj);
	},
	load: function(obj) {
		this.log("load", obj);
	},
	join: function(obj) {
		this.log("join", obj);
	},
	leave: function(obj) {
		this.log("leave", obj);
	},
	say: function() {
		var message = this.text_input.value || "";
		mgc.core.actor.emit(this.name, "say", {
				message: message
			});
	},
	_build: function() {
		this.view.classList.add("mobile-background");
		CT.dom.addContent(this.view,
			CT.dom.node([
				this.text_input = CT.dom.field(),
				this.say_btn = CT.dom.button("SAY", this.say)
			]));
	},
	init: function(view) {
		this.acc_name = mgc.core.actor.name;
		this._build();
	}
}, mgc.core.UI);
