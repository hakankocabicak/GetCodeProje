
let currentStep = 1;

function nextStep(step) {
  if (validateStep(step)) {
    document.getElementById(`step${step}`).classList.remove('active');
    currentStep++;
    document.getElementById(`step${currentStep}`).classList.add('active');
  } else {
    alert('Lütfen zorunlu alanları doldurun.');
  }
}

function prevStep(step) {
  // Eğer summary adımındaysak, currentStep'i 3 yapalım ve summary'yi gizleyip, 3. adımı gösterelim
  if (currentStep === 4) {
    document.getElementById('summary').classList.remove('active');
    currentStep = 3; // summary'ye geri dönüyoruz
    document.getElementById('step3').classList.add('active');
  } else {
    // Diğer adımlarda olduğu gibi bir adım geri git
    document.getElementById(`step${currentStep}`).classList.remove('active');
    currentStep--;
    document.getElementById(`step${currentStep}`).classList.add('active');
  }
}

function validateStep(step) {
  let valid = true;
  const stepDiv = document.getElementById(`step${step}`);
  const inputs = stepDiv.querySelectorAll('input');

  inputs.forEach(input => {
    if (!input.value) {
      valid = false;
      input.classList.add('is-invalid');
    } else {
      input.classList.remove('is-invalid');
    }
  });

  return valid;
}

function showSummary() {
  document.getElementById('summaryName').textContent = document.getElementById('name').value;
  document.getElementById('summaryDob').textContent = document.getElementById('dob').value;
  document.getElementById('summaryEmail').textContent = document.getElementById('email').value;
  document.getElementById('summaryPhone').textContent = document.getElementById('phone').value;
  document.getElementById('summaryAddress').textContent = document.getElementById('address').value;

  document.getElementById(`step3`).classList.remove('active');
  document.getElementById(`summary`).classList.add('active');
  currentStep = 4;
}

document.getElementById('multiStepForm').addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Form başarıyla gönderildi!');
});
