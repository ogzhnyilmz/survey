function survey() {
    let questions = [
        {
            question: "En sevdiğiniz yemek nedir?",
        },
        {
            question: "Hangi spor türlerini seversiniz?",
        },
        {
            question: "En sevdiğiniz tatlı nedir?",
        }
    ];

    const savedAnswers = JSON.parse(localStorage.getItem("answers")) || [];

    let answers = {};

    const name = prompt("İsminiz nedir?");
    const surname = prompt("Soyisminiz nedir?");

    answers.name = name;
    answers.surname = surname;

    for (let i = 0; i < questions.length; i++) {
        const askQuestion = questions[i];
        const answer = prompt(`${askQuestion.question}`);
        answers[`soru${i + 1}`] = answer;
    }

    savedAnswers.push(answers);

    localStorage.setItem("answers", JSON.stringify(savedAnswers));

}

survey();
