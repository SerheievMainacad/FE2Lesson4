window.onload = function(){


	var btn = document.getElementById('btn');
	var dataPlaceholder = document.getElementById('dataPlaceholder');

	btn.onclick = function(){

		
			var xhr = new XMLHttpRequest();

			xhr.open('GET', 'parts/part.html', true)
			xhr.onreadystatechange = function(){
				if(xhr.readyState == 4){
					if(xhr.status == 200){
						dataPlaceholder.innerHTML += xhr.response;
						console.log(xhr)			
					}
					if(xhr.status == 404){
						console.log(xhr.responseText)			
					}
				}
			}

			xhr.send();
			
	}
}