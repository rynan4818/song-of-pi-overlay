const events = {
	hello(data) {
		console.log("Connected to Beat Saber");

		if (data.status.beatmap && data.status.performance) {
			ui.beatmap(data);
			ui.show();
		}
	},

	songStart(data) {
		ui.beatmap(data);
		ui.show();
	},

	noteCut(data) {
		pi(data.noteCut);
	},

	noteMissed(data) {
		pi(data.noteCut);
	},

	menu(data) {
		ui.hide();
	}
}