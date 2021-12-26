const updateProfile = (firstName, lastName, token) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
    "firstName": firstName,
    "lastName": lastName
    });

    var requestOptions = {
    method: 'PUT',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    fetch("http://localhost:3001/api/v1/user/profile", requestOptions)
    .then(response => response.json())
    .then(result => {
        return result
    })
    .catch(error => console.log('error', error));

}

export default updateProfile