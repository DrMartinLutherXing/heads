games.heads.game = new CT.Class({
	"CLASSNAME": "games.heads.game",
	"_data": {},
	"_heads": null,
	"_initHead": function(h) {
		this._data[h] = {
			"stat": "active"
		};
	},
	"_build": function() {
		this._heads.forEach(this._initHead);
		this._data[this._host.name] = {};
	},
	"_handleUpdate": function(h, msg) {
		this.log("_handleUpdate", h, msg);
	},
	"_summary": function() {
		var summary = {};
		mgc.core.actor.emit(this._host.channel, "summary", summary);
	},
	"start": function() {
		this.log("start", arguments);
	},
	"load": function(obj) {
		this.log("load", obj);
		this._heads = obj.presence.slice();
		CT.data.remove(this._heads, this._host.name);
		this._build();
	},
	"update": function(obj) {
		this.log("update", obj);
		this._handleUpdate(obj.user, obj.message);
	},
	"join": function(user) {
		this.log("join", user);
		if (user != this._host.name) {
			this._heads.push(user);
			this._initHead(user);
		}
	},
	"leave": function(user) {
		this.log("leave", user);
		this._heads.splice(this._heads.indexOf(user), 1);
	},
	"init": function() {
		this.log("init", arguments);
		this._host = mgc.core.actor;
	}
}, mgc.core.Base);
