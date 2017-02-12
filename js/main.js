$(document).ready(function(){
	$('#searchUser').on('keyup', function(e){
		let username = e.target.value;

		$.ajax({
			url : 'https://api.github.com/users/'+username,
			data:{
				client_id:'3712796d8b1de4fd3893',
				client_secret:'71e610879de7db9e2cd9d7c1b2a91cde5f45d0e8'
			}
		}).done(function(user){
			// if (user.error) {
			// 	$('#profile').html(`
			// 		<div class="panel panel-default">
			// 		<div class="panel-heading">
			// 		<h3 class="panel-title">User Not Found</h3>
			// 		</div>
			// 			<div class="panel-body">
			// 				<div class="row">
			// 				<div class="col-md-3">
			// 				<img class="thumbnail avatar" src="images/git.png">
			// 			</div>
			// 			<div class="col-md-9">
			// 			</div>
			// 		</div>
			// 		</div>
			// 		</div>`);
			// }
			// else{
				$('#profile').html(`
				<div class="panel panel-default">
				<div class="panel-heading">
				<h3 class="panel-title">${user.name}</h3>
				</div>
				<div class="panel-body">
				<div class="row">
					<div class="col-md-3">
					<img class="thumbnail avatar" src="${user.avatar_url}">
					</div>
					<div class="col-md-9">
					</div>
				</div>
				</div>
				</div>
				`);
			// }
		});
	});
});
// https://api.github.com/users/pranaypaine