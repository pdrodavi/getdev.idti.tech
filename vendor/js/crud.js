var database = firebase.database()
var dbRefUsers = database.ref('devs')

devform.onsubmit = function (event) {

    event.preventDefault() // Evita o redirecionamento da página

    if (devform.username.value != '') {

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
        console.log('dev "' + data + '" adicionado com sucesso')
      }).catch(function (error) {
        showError('Falha ao adicionar tarefa: ', error)
      })

    } else {
      alert('O nome da tarefa não pode ser em branco para criar a tarefa!')
    }

}