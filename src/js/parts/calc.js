function calc() {
  // Калькулятор		

  let persons = document.querySelectorAll('.counter-block-input')[0],
    restDays = document.querySelectorAll('.counter-block-input')[1],
    place = document.getElementById('select'),
    totalValue = document.getElementById('total'),
    
    personsSum = 0,
    daysSum = 0,
    total = 0;


  totalValue.textContent = 0;

  persons.addEventListener('change', function () {
    personsSum = +this.value;
    if (restDays.value == '' || persons.value == '') return 
    total = (daysSum + personsSum) * 4000;

    if (restDays.value == '' || this.value == 0) {
      totalValue.textContent = 0;
    } else {
      totalValue.textContent = total;
    }
  });

  restDays.addEventListener('change', function () {
    console.log('restDays.value', restDays.value, 'persons.value', persons.value)
    daysSum = +this.value;
    if (restDays.value == '' || persons.value == '') return
    total = (daysSum + personsSum) * 4000;

    if (persons.value == '' || this.value == 0) {
      totalValue.textContent = 0;
    } else {
      totalValue.textContent = total;
    }
  });

  place.addEventListener('change', function () {
    if (restDays.value == '' || persons.value == '') {
      totalValue.textContent = 0;
    } else {
      let a = total;
      totalValue.textContent = a * this.options[this.selectedIndex].value;
    }
  })

  let a;
  if (restDays.value != '') {
    a = restDays.value;
  }

}

export default calc;