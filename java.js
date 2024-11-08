// capital.js
const questions = [
        { country: "Azua", capital: "Azua de Compostela" },
        { country: "Barahona", capital: "Santa Cruz de Barahona" },
        { country: "La Altagracia", capital: "Higüey" },
        { country: "Santiago", capital: "Santiago de los Caballeros" },
        { country: "Peravia", capital: "Baní" },
        { country: "Duarte", capital: "San Francisco de Macorís" },
        { country: "La Vega", capital: "Concepción de La Vega" },
        { country: "San Cristóbal", capital: "San Cristóbal" },
        { country: "San Juan", capital: "San Juan de la Maguana" },
        { country: "Puerto Plata", capital: "Puerto Plata" },
        { country: "El Seibo", capital: "Santa Cruz de El Seibo" },
        { country: "Hato Mayor", capital: "Hato Mayor del Rey" },
        { country: "Monseñor Nouel", capital: "Bonao" },
        { country: "Monte Cristi", capital: "San Fernando de Monte Cristi" },
        { country: "Samaná", capital: "Santa Bárbara de Samaná" },
        { country: "Sánchez Ramírez", capital: "Cotuí" },
        { country: "Espaillat", capital: "Moca" },
        { country: "Independencia", capital: "Jimaní" },
        { country: "La Romana", capital: "La Romana" },
        { country: "San Pedro de Macorís", capital: "San Pedro de Macorís" },
        { country: "Santiago Rodríguez", capital: "Sabaneta" },
        { country: "Valverde", capital: "Mao" },
        { country: "Monte Plata", capital: "Monte Plata" },
        { country: "Pedernales", capital: "Pedernales" },
        { country: "Elías Piña", capital: "Comendador" },
        { country: "Dajabón", capital: "Dajabón" },
        { country: "María Trinidad Sánchez", capital: "Nagua" },
        { country: "Bahoruco", capital: "Neiba" },
        { country: "Hermanas Mirabal", capital: "Salcedo" },
        { country: "Santo Domingo", capital: "Santo Domingo" },
        { country: "Distrito Nacional", capital: "Santo Domingo" }
    ];
    
let currentQuestionIndex = 0;

function showQuestion() {
    const questionDiv = document.querySelector('.question');
    questionDiv.textContent = `¿Cuál es la capital de ${questions[currentQuestionIndex].country}?`;
}

function checkAnswer() {
    const answerInput = document.getElementById('answer');
    const resultDiv = document.querySelector('.result');
    const userAnswer = answerInput.value.trim().toLowerCase();
    const correctAnswer = questions[currentQuestionIndex].capital.toLowerCase();

    if (userAnswer === correctAnswer) {
        resultDiv.textContent = "Correcto!";
        resultDiv.style.color = "green";
    } else {
        resultDiv.textContent = `Incorrecto. La respuesta correcta es ${questions[currentQuestionIndex].capital}.`;
        resultDiv.style.color = "white";
    }
}

function nextQuestion() {
    const answerInput = document.getElementById('answer');
    const resultDiv = document.querySelector('.result');
    answerInput.value = "";
    resultDiv.textContent = "";

    currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
    showQuestion();
}

// Inicializar la primera pregunta
showQuestion();

