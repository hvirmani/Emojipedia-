		function Search() {
			var input = document.getElementById("input").value.toLowerCase();
			//var element=document.getElementsByClassName("col-md-3");
			//var inside=element[0].document.getElementsByTagName("div")[0];
			//console.log(element[0]);
			var element = document.getElementsByTagName("h4");
			for (i = 0; i < element.length; i++) {
				var str_1 = element[i].textContent.toLowerCase();
				var str_2 = element[i].parentElement.className;
				var a = str_1.indexOf(input);
				var b = str_2.indexOf(input);
				if (a > -1 || b > -1)
					element[i].parentElement.parentElement.style.display = '';
				else
					element[i].parentElement.parentElement.style.display = 'none';

			}

		}
		const url = "https://emoji-api.com/emojis?access_key=22386c480db6cb702c2900ac4496f76fb3617996";

		fetch(url)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				for (i = 0; i < 1533; i++) {
					var main_element = document.createElement("div");
					main_element.className = "text-center col-md-3 col-sm-4 col-xs-6";

					var element = document.createElement("div");
					main_element.appendChild(element);
					var title = document.createElement("h4");
					var main = document.createElement("h1");
					var btn = document.createElement("button");
					var icon = document.createElement("i");
					icon.className = "fas fa-copy copy";
					btn.appendChild(icon);
					//btn.appendChild(btn_content);
					btn.className = "btn";

					element.appendChild(title);
					element.appendChild(main);
					element.appendChild(btn);
					var txt_1 = document.createTextNode(data[i].slug);
					title.appendChild(txt_1);
					var txt_2 = document.createTextNode(data[i].character);
					if (data[i].character == '🥸' || data[i].character == '🥲' || data[i].character == '🤌' || data[i].character == '🫀' || data[i].character == '🫁' || data[i].character == '🥷' || data[i].character == '🫂' || data[i].character == '🦬' || data[i].character == '🦣' || data[i].character == '🦫' || data[i].character == '🦤' || data[i].character == '🪶' || data[i].character == '🦭' || data[i].character == '🪲') {
						continue;
					}

					main.appendChild(txt_2);
					//var txt_3=document.createTextNode(data[0].subGroup);
					element.className = data[i].subGroup;
					var a = document.getElementById("row");
					a.appendChild(main_element);
				}
				var copy = document.getElementsByTagName("button");
				for (i = 0; i < copy.length; i++) {
					copy[i].onclick = function () {
						var copyText = this.parentElement.children[1].textContent;
						const element = document.createElement('textarea');
						element.value = copyText;
						document.body.appendChild(element);
						element.select();
						document.execCommand('copy');
						document.body.removeChild(element);
					}
				}
				var loader = document.getElementById("loading");
				loader.style.display = "none";
				var content = document.getElementById("main_content");
				content.style.display = "block";
			})

		//}