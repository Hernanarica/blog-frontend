export async function login(email, password) {
	return fetch('http://localhost:9001/api/user/auth', {
		method: "POST",
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			email, password
		})
	});
}

export async function getUsers() {
	return fetch('http://localhost:9001/api/user/users', {
		method: "GET",
		headers: {
			'Content-Type': 'application/json',
			'auth-token': localStorage.getItem('token')
		}
	})
		.then(res => res.json());
}