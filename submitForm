let submit = document.getElementById('submit')
console.log(submit)
const formName = 'consultationFeeSummary'
console.log('form: ' + formName)
let newForm = {}

let clientName = document.querySelector('input#clientName')
clientName.addEventListener('change', (e) => {
	console.log('changed')
	newForm.clientName = e.target.value;
  console.log(newForm.clientName);
  })
  
let employeeEmail = document.querySelector('input#employeeEmail')
employeeEmail.addEventListener('change', (e) => {
	newForm.employeeEmail = e.target.value;
  console.log(newForm.employeeEmail);
})

let membersPresent = document.querySelector('input#membersPresent')
membersPresent.addEventListener('change', (e) => {
	newForm.membersPresent = e.target.value;
  console.log(newForm.membersPresent);
})

let date = document.querySelector('input#date')
date.addEventListener('change', (e) => {
	newForm.date = e.target.value;
  console.log(newForm.date);
})

let start = document.querySelector('input#start')
start.addEventListener('change', (e) => {
	newForm.start = e.target.value;
  console.log(newForm.start);
})

let end = document.querySelector('input#end')
end.addEventListener('change', (e) => {
	newForm.end = e.target.value;
  console.log(newForm.end);
})

let parentalConcern1 = document.querySelector('input#parentalConcern1')
parentalConcern1.addEventListener('change', (e) => {
	newForm.parentalConcern1 = e.target.value;
  console.log(newForm.parentalConcern1);
})

let resolution1 = document.querySelector('input#resolution1')
resolution1.addEventListener('change', (e) => {
	newForm.resolution1 = e.target.value;
  console.log(newForm.resolution1);
})

let nextSteps1 = document.querySelector('input#nextSteps1')
nextSteps1.addEventListener('change', (e) => {
	newForm.nextSteps1 = e.target.value;
  console.log(newForm.nextSteps1);
})

let parentalConcern2 = document.querySelector('input#parentalConcern2')
parentalConcern2.addEventListener('change', (e) => {
	newForm.parentalConcern2 = e.target.value;
  console.log(newForm.parentalConcern2);
})

let resolution2 = document.querySelector('input#resolution2')
resolution2.addEventListener('change', (e) => {
	newForm.resolution2 = e.target.value;
  console.log(newForm.resolution2);
})

let nextSteps2 = document.querySelector('input#nextSteps2')
nextSteps2.addEventListener('change', (e) => {
	newForm.nextSteps2 = e.target.value;
  console.log(newForm.nextSteps1);
})

let parentalConcern3 = document.querySelector('input#parentalConcern3')
parentalConcern3.addEventListener('change', (e) => {
	newForm.parentalConcern3 = e.target.value;
  console.log(newForm.parentalConcern3);
})

let resolution3 = document.querySelector('input#resolution3')
resolution3.addEventListener('change', (e) => {
	newForm.resolution3 = e.target.value;
  console.log(newForm.resolution3);
})

let nextSteps3 = document.querySelector('input#nextSteps3')
nextSteps3.addEventListener('change', (e) => {
	newForm.nextSteps3 = e.target.value;
  console.log(newForm.nextSteps1);
})

let followUp = document.querySelector('input#followUp')
followUp.addEventListener('change', (e) => {
    newForm.followUp = e.target.value;
    console.log(newForm.followUp)
})
    
let notes = document.querySelector('input#notes')
notes.addEventListener('change', (e) => {
    newForm.notes = e.target.value;
    console.log(newForm.notes)
})
    
let staffName = document.querySelector('input#staffName')
staffName.addEventListener('change', (e) => {
    newForm.staffName = e.target.value;
    console.log(newForm.staffName)
    })

document.getElementById('submit').addEventListener("click", async (event) => {
  submitForm(newForm, 'consultationFeeSummary')
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