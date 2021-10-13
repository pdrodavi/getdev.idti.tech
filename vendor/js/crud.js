var database = firebase.database()
var dbRefUsers = database.ref('devs')

devform.onsubmit = function (event) {

    //var database = firebase.database()
    //var dbRefUsers = database.ref('devs')

    event.preventDefault() // Evita o redirecionamento da página

    if (devform.username.value != '') {

      var data = {
        firstname: devform.firstName.value,
        lastname: devform.lastName.value,
        username: devform.username.value
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