function bar() {
	const element = document.getElementById("navcolumn");
	element.innerHTML = `<div class='internav' id='nav'><b style='font-size:18;'>Navigation</b><br><br>
											<a class='link' href='../index.html'>Homepage</a><br>
											<div hidden>Random Page</div>
											<a class='link' href='../'>Updates</a><br>
										</div>
										<div class='internav' id='content'><b style='font-size:18;'>Content</b><br><br>
											<a class='link' href='../chars.html'>Characters</a><br>
											<a class='link' href='../events.html'>Events</a><br>
											<a class='link' href='../factions.html'>Factions</a><br>
											<a class='link' href='../locations.html'>Locations</a><br>
											<a class='link' href=',,/misc.html'>Other</a>----------------<br>
											<a class='link' href='../themes.html'>Themes</a><br>
											<a class='link' href='../units.html'>Units</a><br></div>
										<div class='internav' id=''><b style='font-size:18;'>Discord</b><br><br>
											<a class="link" href="https://discord.gg/9YnMcJz8Gm" target="_blank">The Achromatic Collective</a></div>`
											
	const BAR = document.getElementById("bar");
	BAR.innerHTML = `<div style='margin-top:4;margin-left:4;font-size:24;display:flex;justify-content:center'><img src='../ast/yicon.png' height='30'><a style='margin-left:10;'>Providence Wiki</a></div>`
}

document.addEventListener("DOMContentLoaded", function() {
    bar();
});