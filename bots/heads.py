import random, chatterbox

peeps = [
	"Peewee Herman",
	"Marilyn Monroe",
	"Hillary Clinton",
	"Max Headroom (character)",
	"Gandhi"
]

class Heads(chatterbox.ChatterBox):
	def __init__(self, server, channel, name=None):
		chatterbox.ChatterBox.__init__(self, server,
			channel, name or random.choice(peeps), 2)