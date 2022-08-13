let submit = document.getElementById('submit')
let commit = document.getElementById('commit')
let addMore = document.getElementById('addMore')
console.log(submit)
const formName = 'consultationFee'
console.log('form: ' + formName)
let newForm = {}
let client = ''
let start = 0
let timeEntries = []
let dates = []
let goals = []
let mins = []
let hrs =[]
let serviceSummaries = []
submit.style.display = 'none'
addMore.style.display = 'none'
submission = {}

class TimeEntry {
    constructor(date, goal, time, hours, minutes, summary) {
        this.date = date;
        this.goal = goal;
        this.hours = hours;
        this.minutes = minutes;
        this.summary = summary;
        this.time = this.hours + ':' + this.minutes
    }

}

commit.addEventListener('click', (e) => {
    let timeEntries = getTimeEntries()
    console.log(timeEntries)
    submission.timeEntries = timeEntries
    submit.style.display = 'inline'
    addMore.style.display = 'inline'
    
})

function getTimeEntries() {
     dates[1] = document.getElementById('date1').value
     dates[2] = document.getElementById('date2').value
     dates[3] = document.getElementById('date3').value
     mins[1] = document.getElementById('min1').value
     mins[2] = document.getElementById('min2').value
     mins[3] = document.getElementById('min3').value
     goals[1] = document.getElementById('goal1').value
     goals[2] = document.getElementById('goal2').value
     goals[3] = document.getElementById('goal3').value
     hrs[1] = document.getElementById('hour1').value
     hrs[2] = document.getElementById('hour2').value
     hrs[3] = document.getElementById('hour3').value
     serviceSummaries[1] = document.getElementById('serviceSummary1').value
     serviceSummaries[2] = document.getElementById('serviceSummary2').value
     serviceSummaries[3] = document.getElementById('serviceSummary3').value
    for (let i = start; i < start + 3; i++) {
        let entry = new TimeEntry
        if (dates[i+1]) {
            entry = {
                date: dates[i+1],
                goal: goals[i + 1],
                hours: hrs[i + 1],
                minutes: mins[i + i],
                summary: serviceSummaries[i + 1]
            }
        } else {
            entry = {
                date: '',
                goal: '',
                hours: '',
                minutes: '',
                summary: ''
            }
        }
        console.log(entry)
        timeEntries.push(entry);
                    
    }
    start = start + 3
    return timeEntries
}

let clientId = document.querySelector('input#clientName')
clientId.addEventListener('change', (e) => {
submission.clientName = e.target.value})

let employeeName = document.querySelector('input#employeeName')
employeeName.addEventListener('change', (e) => {
submission.employeeName = e.target.value})

let printForm = document.getElementById('printToPDF')
printForm.style.display = 'none'

document.getElementById('submit').addEventListener("click", async (event) => {
    console.log('click')
	  addMore.style.display = 'none'
    submitForm(submission, formName);
      
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
    .then(response => response.json())
    .then(data => respond(data)) 
    .catch((err) => showError(err))
}

function respond(data) {
  let id = data.key
  if (id) {
    showSuccess(id)
    sendNotification(id, newForm.clientId, 'individual', 'not urgent')
    sendNotification(id, newForm.employeeName, 'individual', 'not urgent')
    sendNotification(id, 'admin', 'staff', 'not urgent')
    clearForm()	
		}
  }

function showSuccess(id) {
	document.getElementById('returnMessage').style.display = 'block'
  document.getElementById('returnMessage').innerHTML = 'Form has been successfully submitted'
  printForm.style.display = 'inline'
  printForm.addEventListener('click', (e) => {
		console.log(`https://phoenix-freedom-foundation-backend.webflow.io/completed-forms/consultation-fee-summary?id=${id}`)     
    location.href = `https://phoenix-freedom-foundation-backend.webflow.io/completed-forms/consultation-fee-summary?id=${id}`})
}

function showError(err) {
    console.error
    document.getElementById('returnMessage').innerHTML = `An error occurred when submitting this form, which was ${err}. Please contact the administrator for help.`
}

async function sendNotification(id, recipient, type, priority) {
  let message = `You have a new <br/><a href=phoenix-freedom-foundation-backend.webflow.io/completed-forms/consultation-fee-summary?formId=${id}>Consultation Fee Summary</a>`
  console.log(message)
  const url = 'https://pffm.azurewebsites.net/notices'
  let notification = {
    'name': recipient,
    'notice': message,
    'type': type,
    'priority': priority
  }
  const header = {
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin" : "*"
  }
  
  fetch(url, {
    method: "POST",
    headers: header,
    body: JSON.stringify(notification)
  })
    .then(() => console.log('notice sent'))
    .catch(console.error)
}
 
function clearForm() {
  for (let i = 1; i < 4; i++) {
    document.getElementById(`date${i}`).innerHTML = ''
    document.getElementById(`min${i}`).innerHTML = ''
    document.getElementById(`goal${i}`).innerHTML = ''
    document.getElementById(`hour${i}`).innerHTML = ''
    document.getElementById(`serviceSummary${i}`).innerHTML = ''
  }
}
