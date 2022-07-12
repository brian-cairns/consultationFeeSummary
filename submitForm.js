let submit = document.getElementById('submit')
console.log(submit)
const formName = 'consultationFeeSummary'
console.log('form: ' + formName)
let newForm = {}

let clientId = document.querySelector('input#clientName')
clientId.addEventListener('change', (e) => {
	console.log('changed')
	newForm.clientId = e.target.value;
  console.log(newForm.clientId);
  })
  
let employeeName = document.querySelector('input#employeeName')
employeeName.addEventListener('change', (e) => {
	newForm.employeeName = e.target.value;
  console.log(newForm.employeeName);
  })
  
let date1 = document.getElementById('date1')
date1.addEventListener('change', (e) => {
	newForm.date1 = e.target.value;
  console.log(newForm.date1);
})
  
let date2 = document.getElementById('date2')
date2.addEventListener('change', (e) => {
	newForm.date2 = e.target.value;
  console.log(newForm.date2);
})
  
let date3 = document.getElementById('date3')
date3.addEventListener('change', (e) => {
	newForm.date3 = e.target.value;
  console.log(newForm.date3);
  })
  
  let min1 = document.getElementById('min1')
min1.addEventListener('change', (e) => {
	newForm.min1 = e.target.value;
  console.log(newForm.min1);
})
  
let min2 = document.getElementById('min2')
min2.addEventListener('change', (e) => {
	newForm.min2 = e.target.value;
  console.log(newForm.min2);
})
  
let min3 = document.getElementById('min3')
min3.addEventListener('change', (e) => {
	newForm.min3 = e.target.value;
  console.log(newForm.date3);
})
  
let goal1 = document.getElementById('goal1')
goal1.addEventListener('change', (e) => {
	newForm.goal1 = e.target.value;
  console.log(newForm.goal1);
})
  
let goal2 = document.getElementById('goal2')
goal2.addEventListener('change', (e) => {
	newForm.goal2 = e.target.value;
  console.log(newForm.goal2);
})
  
let goal3 = document.getElementById('goal3')
goal3.addEventListener('change', (e) => {
	newForm.goal3 = e.target.value;
  console.log(newForm.goal3);
})
  
let hour1 = document.getElementById('hour1')
hour1.addEventListener('change', (e) => {
	newForm.hour1 = e.target.value;
  console.log(newForm.hour1);
})
  
let hour2 = document.getElementById('hour2')
hour2.addEventListener('change', (e) => {
	newForm.hour2 = e.target.value;
  console.log(newForm.hour2);
})
  
let hour3 = document.getElementById('hour3')
hour3.addEventListener('change', (e) => {
	newForm.hour3 = e.target.value;
  console.log(newForm.hour3);
})

let serviceSummary1 = document.getElementById('serviceSummary1')
serviceSummary1.addEventListener('change', (e) => {
	newForm.serviceSummary1 = e.target.value;
  console.log(newForm.serviceSummary1);
})
  
let serviceSummary2 = document.getElementById('serviceSummary2')
serviceSummary2.addEventListener('change', (e) => {
	newForm.serviceSummary2 = e.target.value;
  console.log(newForm.serviceSummary2);
})
  
let serviceSummary3 = document.getElementById('serviceSummary3')
serviceSummary3.addEventListener('change', (e) => {
	newForm.serviceSummary3 = e.target.value;
  console.log(newForm.serviceSummary3);
})


document.getElementById('submit').addEventListener("click", async (event) => {
		console.log('click')
    submitForm(newForm, form)
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
}
