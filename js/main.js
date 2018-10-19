$(document).ready(function(){


	var posts = [
		{
			title: "Los Fundamentos",
			img: "images/fundamentos.png",
			content: "¿Eres nuevo programando? Estás en el lugar indicado."
		},
		{
			title: "Desarrollo Web",
			img: "images/web.png",
			content: "Domina HTML, CSS y JavaScript en el frontend. JavaScript, Go, Ruby y más en el backend."
		},
		{
			title: "Creación de apps",
			img: "images/apps.png",
			content: "Vuélvete un experto desarrollando apps para Android y iOS."
		},
		{
			title: "Vuélvete pro.",
			img: "images/pro.png",
			content: "Desarrolla tus habilidades y estarás listo para trabajar en una empresa."
		},

	]

	for( let item of posts ){
		var post = `
			<article>
				<h3 class="title">${item.title}</h3>
				<img class="thumb" src="${item.img}" alt="thumb1">
				<p>${item.content}</p>
			</article>`;
			$('#contenido').append(post);

		
	}

	$('.login form').submit(function(){
		var name = $('#name').val();
		console.log(name)
		localStorage.setItem('nombre', name)
	})

	var name = localStorage.getItem('nombre')

	if (name != null && name != undefined && name.length >= 1) {
		var singup = $('.singup');

		singup.html("<br><br><h3>Biembenido: "+ name +"</h3><br><br>")

		singup.append("<button type='submit' id='logout' class='btn'>Singout</button>");

		$('.login').hide();

		$('#logout').click(function(){
			localStorage.clear();
			window.reload();
		})
	}
	
	console.log(name)

})


