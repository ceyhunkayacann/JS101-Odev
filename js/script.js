let greetings = document.querySelector("#greetings");
console.log(greetings);



let card = document.getElementById("card");
let loginBar = document.getElementById("loginBar");
let dateNow = document.getElementById("dateNow");

setInterval(function currentTime() {
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;

    let time = hh + "." + mm + "." + ss + " ";

    // document.getElementById("dateNow").innerText = time;
   

}, 1000);

console.log(dateNow)
console.log(card)

card.style.display = "none";

function loginFunc() {
    let userName = document.getElementById("userName").value;
    console.log(userName);
    card.style.display = "block";
    loginBar.style.display = "none"
    greetings.innerHTML = `Merhaba, ${userName}`
}






var Clock = (function(){

	var exports = function(element) {
		this._element = element;
		var html = '';
		for (var i=0;i<6;i++) {
			html += '<span>&nbsp;</span>';
		}
		this._element.innerHTML = html;
		this._slots = this._element.getElementsByTagName('span');
		this._tick();
	};

	exports.prototype = {

		_tick:function() {
			var time = new Date();
			this._update(this._pad(time.getHours()) + this._pad(time.getMinutes()) + this._pad(time.getSeconds()));
			var self = this;
			setTimeout(function(){
				self._tick();
			},1000);
		},

		_pad:function(value) {
			return ('0' + value).slice(-2);
		},

		_update:function(timeString) {

			var i=0,l=this._slots.length,value,slot,now;
			for (;i<l;i++) {

				value = timeString.charAt(i);
				slot = this._slots[i];
				now = slot.dataset.now;

				if (!now) {
					slot.dataset.now = value;
					slot.dataset.old = value;
					continue;
				}

				if (now !== value) {
					this._flip(slot,value);
				}
			}
		},

		_flip:function(slot,value) {

			// setup new state
			slot.classList.remove('flip');
			slot.dataset.old = slot.dataset.now;
			slot.dataset.now = value;

			// force dom reflow
			slot.offsetLeft;

			// start flippin
			slot.classList.add('flip');

		}

	};

	return exports;
}());

var i=0,clocks = document.querySelectorAll('.clock'),l=clocks.length;
for (;i<l;i++) {
	new Clock(clocks[i]);
}

















