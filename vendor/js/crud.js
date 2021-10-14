var database = firebase.database()
var dbRefUsers = database.ref('devs')

function checkDev(userId) {
  var devRef = firebase.database().ref('devs/' + userId);
    devRef.on('value', (snapshot) => {
      const data = snapshot.val();
      console.log(data.uid)
    });
}

devform.onsubmit = function (event) {

    event.preventDefault() // Evita o redirecionamento da página

    var userId = devform.username.value;

  if (userId != '') {

    var devRef = firebase.database().ref('devs/' + userId);

    return devRef.once('value').then((snapshot) => {

      var username = (snapshot.val()) || 'Anonymous';
      
      if (username == null) {

        var data = {
          firstname: devform.firstName.value,
          lastname: devform.lastName.value,
          username: devform.username.value,
          email: devform.email.value,
          country: devform.country.value,
          state: devform.state.value,
          zipcode: devform.zip.value,
          education: devform.education.value,
          edustate: devform.edustate.value,
          edunivel: devform.edunivel.value,
          edustart: devform.edustart.value,
          eduend: devform.eduend.value,
          academy: devform.academy.value,
          acting: devform.acting.value,
          primarylang: devform.primarylang.value,
          secondarylang: devform.secondarylang.value,
          secondarylang: devform.secondarylang.value
        }
  
        dbRefUsers.child(data.username).push(data).then(function () {
          console.log(data)
        }).catch(function (error) {
          console.log('Error: ', error)
        })

      } else {
        alert('Usuário já existe!')
      }
    
    });  

  } else {
    alert('O username Github é obrigatório!')
  }

    if (devform.username.value != '') {

      

    } else {
      alert('O username Github é obrigatório!')
    }

}