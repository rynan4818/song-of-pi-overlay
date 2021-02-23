var pi_flag = false;
var pi_time = 0;
var pi_digit = 0;
var pi_index = 0;
var pi_suuji_ima = document.getElementById("pi_suuji_ima");
var pi_nokori = document.getElementById("pi_nokori");
var pi_suuji_mae = document.getElementById("pi_suuji_mae");
var pi_suuji_ima = document.getElementById("pi_suuji_ima");
var pi_suuji_ushiro = document.getElementById("pi_suuji_ushiro");
var pi_ima = document.getElementById("pi_ima");
var pi_nokori = document.getElementById("pi_nokori");
var pi_suuji_text = document.getElementById("pi_suuji_text");
var pi_nokori_text = document.getElementById("pi_nokori_text");

function op_beatmap(data) {
	if (data.status.beatmap.songName == "Song of Pi (10238 Digits Ver.)"){
		pi_suuji_text.setAttribute("style", "display: block");
		pi_nokori_text.setAttribute("style", "display: block");
		pi_flag = true;
		pi_digit = 10238;
		pi_index = 0;
		//pi_nokori.innerText = pi_digit.toString();
		pi_ima.innerText = note_list[0].toString() + "桁";
		pi_nokori.innerText = "(あと" + pi_digit.toString() + "桁)";
		pi_suuji_mae.innerText = pi_list.charAt(pi_index - 10);
		pi_suuji_mae.innerText += pi_list.charAt(pi_index - 9);
		pi_suuji_mae.innerText += pi_list.charAt(pi_index - 8);
		pi_suuji_mae.innerText += pi_list.charAt(pi_index - 7);
		pi_suuji_mae.innerText += pi_list.charAt(pi_index - 6);
		pi_suuji_mae.innerText += pi_list.charAt(pi_index - 5);
		pi_suuji_mae.innerText += pi_list.charAt(pi_index - 4);
		pi_suuji_mae.innerText += pi_list.charAt(pi_index - 3);
		pi_suuji_mae.innerText += pi_list.charAt(pi_index - 2);
		pi_suuji_mae.innerText += pi_list.charAt(pi_index - 1);
		pi_suuji_ima.innerText = pi_list.charAt(pi_index);
		pi_suuji_ushiro.innerText = pi_list.charAt(pi_index + 1);
		pi_suuji_ushiro.innerText += pi_list.charAt(pi_index + 2);
		pi_suuji_ushiro.innerText += pi_list.charAt(pi_index + 3);
		pi_suuji_ushiro.innerText += pi_list.charAt(pi_index + 4);
		pi_suuji_ushiro.innerText += pi_list.charAt(pi_index + 5);
		pi_suuji_ushiro.innerText += pi_list.charAt(pi_index + 6);
		pi_suuji_ushiro.innerText += pi_list.charAt(pi_index + 7);
		pi_suuji_ushiro.innerText += pi_list.charAt(pi_index + 8);
		pi_suuji_ushiro.innerText += pi_list.charAt(pi_index + 9);
		pi_suuji_ushiro.innerText += pi_list.charAt(pi_index + 10);
	} else {
		pi_nokori.innerText = "";
		pi_suuji_ima.innerText = "";
		pi_flag = false;
		pi_suuji_text.setAttribute("style", "display: none");
		pi_nokori_text.setAttribute("style", "display: none");
	}
}

function pi(noteCut) {
	if (pi_flag) {
		pi_index = note_list[noteCut.noteID]
		if (pi_index > 1) pi_digit = 10238 - note_list[noteCut.noteID] + 1;
			pi_suuji_mae.innerText = pi_list.charAt(pi_index - 10);
			pi_suuji_mae.innerText += pi_list.charAt(pi_index - 9);
			pi_suuji_mae.innerText += pi_list.charAt(pi_index - 8);
			pi_suuji_mae.innerText += pi_list.charAt(pi_index - 7);
			pi_suuji_mae.innerText += pi_list.charAt(pi_index - 6);
			pi_suuji_mae.innerText += pi_list.charAt(pi_index - 5);
			pi_suuji_mae.innerText += pi_list.charAt(pi_index - 4);
			pi_suuji_mae.innerText += pi_list.charAt(pi_index - 3);
			pi_suuji_mae.innerText += pi_list.charAt(pi_index - 2);
			pi_suuji_mae.innerText += pi_list.charAt(pi_index - 1);
			pi_suuji_ima.innerText = pi_list.charAt(pi_index);
			pi_suuji_ushiro.innerText = pi_list.charAt(pi_index + 1);
			pi_suuji_ushiro.innerText += pi_list.charAt(pi_index + 2);
			pi_suuji_ushiro.innerText += pi_list.charAt(pi_index + 3);
			pi_suuji_ushiro.innerText += pi_list.charAt(pi_index + 4);
			pi_suuji_ushiro.innerText += pi_list.charAt(pi_index + 5);
			pi_suuji_ushiro.innerText += pi_list.charAt(pi_index + 6);
			pi_suuji_ushiro.innerText += pi_list.charAt(pi_index + 7);
			pi_suuji_ushiro.innerText += pi_list.charAt(pi_index + 8);
			pi_suuji_ushiro.innerText += pi_list.charAt(pi_index + 9);
			pi_suuji_ushiro.innerText += pi_list.charAt(pi_index + 10);
		pi_ima.innerText = note_list[noteCut.noteID].toString() + "桁";
		pi_nokori.innerText = "(あと" + pi_digit.toString() + "桁)";
	}
}
