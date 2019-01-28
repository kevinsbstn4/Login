var objPeople = [
    {
        username: 'kevin',
        password: 123
    },
    {
        username: 'caesar',
        password: 456
    }
]

function goLogin() {
    var username = document.getElementById('username')
    var password = document.getElementById('password')

    for(i = 0; i < objPeople.length; i++){
        if(username.value == objPeople[i].username && password.value == objPeople[i].password){
            alert("berhasil")
        }else{
            alert("Tidak Berhasil")
        }
    }
}
