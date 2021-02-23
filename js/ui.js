const ui = (() => {
	var main = document.getElementById("overlay");
	const beatmap = (() => {
		return (data) => {
			op_beatmap(data);
		}
	})();

	return {
		hide() {
			main.classList.add("hidden");
		},

		show() {
			main.classList.remove("hidden");
		},

		beatmap
	}
})();
