let submit = document.getElementById('submit')
console.log(submit)
const formName = 'trainingTracker'
console.log('form: ' + formName)
let newForm = {}

let clientId = document.querySelector('input#clientName')
clientId.addEventListener('change', (e) => {
	console.log('changed')
	newForm.clientId = e.target.value;
  console.log(newForm.clientId);
  })
  
let date = document.querySelector('input#date')
date.addEventListener('change', (e) => {
	newForm.date = e.target.value;
  console.log(newForm.date);
  })
  
let behaviors = document.getElementById('behaviors')
behaviors.addEventListener('change', (e) => {
	newForm.behaviors = e.target.value;
  console.log(newForm.behaviors);
  })
  
let sensory = document.getElementById('sensoryActivity')
sensory.addEventListener('change', (e) => {
	newForm.sensory = e.target.value;
  console.log(newForm.sensory);
  })
  
let movement = document.getElementById('movement')
movement.addEventListener('change', (e) => {
	newForm.movement = e.target.value;
  console.log(newForm.movement);
  })

let learning = document.getElementById('learning')
learning.addEventListener('change', (e) => {
	newForm.learning = e.target.value;
  console.log(newForm.learning);
  })

let dataCollection = document.getElementById('dataCollection')
dataCollection.addEventListener('change', (e) => {
	newForm.dataCollection = e.target.value;
  console.log(newForm.dataCollection);
  })

let client = document.getElementById('client')
client.addEventListener('change', (e) => {
	newForm.client = e.target.value;
  console.log(newForm.client);
  })

let thingsNeeds = document.getElementById('thingsNeeds')
thingsNeeds.addEventListener('change', (e) => {
	newForm.thingsNeeds = e.target.value;
  console.log(newForm.thingsNeeds);
  })
  
let followUp = document.getElementById('followUp')
followUp.addEventListener('change', (e) => {
	newForm.followUp = e.target.value;
  console.log(newForm.followUp);
  })

let notes = document.getElementById('notes')
notes.addEventListener('change', (e) => {
	newForm.notes = e.target.value;
  console.log(newForm.notes);
  })

let smoothMoves = document.getElementById('smoothMoves')
smoothMoves.addEventListener('change', (e) => {
	newForm.smoothMoves = e.target.value;
  console.log(newForm.smoothMoves);
  })

document.getElementById('submit').addEventListener("click", async (event) => {
		console.log('click')
    submitForm(newForm, 'trainingTracker')
})

async function submitForm(data, form) {
  const document = {
    'form': form,
    'data': data
  }
  console.log(document)
  fetch('https://pffm.azurewebsites.net/form', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin" : "*"
    },
    body: JSON.stringify(document)
  })
    .then((response) => {
      if (response.status == 200) {
      showSuccess()
      } else {
        showError(response.body)
      }
    })
    .catch((err) => showError(err))
}


function showSuccess() {
    document.getElementById('returnMessage').innerHTML = 'Form has been successfully submitted'
}

function showError(err) {
    console.error
    document.getElementById('returnMessage').innerHTML = `An error occurred when submitting this form, which was ${err}. Please contact the administrator for help.`
}