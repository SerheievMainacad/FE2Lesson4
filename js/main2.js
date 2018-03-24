$(document).ready(function(){

	$('#btn').click(function(){
		$.ajax({
			type: 'GET',
			url: 'parts/prt.html',
			success: function(data){
				$('#dataPlaceholder').html(data)
			},
			error: function(data){
				console.log(data)			
			}
		})
	})



})