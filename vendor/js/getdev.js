var database = firebase.database()
var dbRefUsers = database.ref('devs')

var userContent = document.getElementById('userContent')
var userEmail = document.getElementById('userEmail')
var firstName = document.getElementById('firstName')
var userName = document.getElementById('userName')
var userImg = document.getElementById('userImg')
var getDev = document.getElementById('getdev')
var todoCount = document.getElementById('todoCount')
var ulTodoList = document.getElementById('ulTodoList')


getdevform.onsubmit = function (event) {

    event.preventDefault() // Evita o redirecionamento da página
  
    var userId = getdevform.username.value;
  
  if (userId != '') {
  
    var devRef = firebase.database().ref('devs/' + userId);
  
    return devRef.once('value').then((snapshot) => {
  
      var username = (snapshot.val()) || 'Anonymous';
      
      if (username == 'Anonymous') {
        alert('Dev não existe na base!')
        window.location.replace("getdev.html");
      } else {
        snapshot.forEach(function (item) { // Percorre todos os elementos
            var value = item.val()
            firstName.innerHTML = value.firstname
            userEmail.innerHTML = value.email
            userName.innerHTML = value.username
          })
      }

      hideItem(getDev)
      showItem(userContent)
    
    });  
  
  } else {
    alert('O username Github é obrigatório!')
  }
  
  }

// Simplifica a exibição de elementos da página
function showItem(element) {
    element.style.display = 'block'
  }
  
  // Simplifica a remoção de elementos da página
  function hideItem(element) {
    element.style.display = 'none'
  }  