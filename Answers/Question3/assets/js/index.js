document.addEventListener('DOMContentLoaded', () => {
  const submitButton = document.querySelector('#submit');
  const inputchoiceA = document.querySelector('#choiceA');
  const inputchoiceB = document.querySelector('#choiceB');
  const inputchoiceC = document.querySelector('#choiceC');

  submitButton.addEventListener('click', (e) => {
    e.preventDefault();

    const choiceA = inputchoiceA.value;
    const choiceB = inputchoiceB.value;
    const choiceC = inputchoiceC.value;
    console.log(choiceA, choiceB, choiceC);

    let merged = choiceA + ' ' + choiceB + ' ' + choiceC;
    merged = merged.toLowerCase();

    if (!merged.includes('calculus')) {
      window.alert('You must include calculus as one of your choices');
      inputchoiceA.value = '';
      inputchoiceB.value = '';
      inputchoiceC.value = '';
      return;
    }

    const choicesArr = [choiceA, choiceB, choiceC];

    const choicestoSendDB = [];

    for (let choice of choicesArr) {
      if (choice === '') continue;
      choicestoSendDB.push(choice);
    }

    fetch('http://localhost:3434/choices', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        choices: choicestoSendDB,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  });
});
