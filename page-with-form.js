const SendmailTransport = require("nodemailer/lib/sendmail-transport");

const form = document.getElementById('form');
const result = document.getElementById('result');

form.addEventListener('submit', function(e) {
e.preventDefault();
const formData = new FormData(form);
const object = Object.fromEntries(formData);
const json = JSON.stringify(object);
result.innerHTML = "Please wait..."

    fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                result.innerHTML = "Form submitted successfully";
            } else {
                console.log(response);
                result.innerHTML = json.message;
            }
        })
        .catch(error => {
            console.log(error);
            result.innerHTML = "Something went wrong!";
        })
        .then(function() {
            form.reset();
            setTimeout(() => {
                result.style.display = "none";
            }, 3000);
        });
});

//Различные обработчики данных:

form.addEventListener('submit', function(event) {
    // Предотвращаем отправку формы по умолчанию
    event.preventDefault();

    // Получаем значение поля ввода
    var inputField = document.getElementById('message').value;

    // Пример валидации: проверяем, что поле не пустое
    if (inputField.trim() === '') {
        alert('Пожалуйста, заполните поле');
        return;
    }

    // Если прошли валидацию, можно отправить форму
    form.submit();

})

    function processData() {
        let data = document.getElementById('message').value;
        console.log(data1);
        return false; 
    }

    document.getElementById('feedbackForm').addEventListener('submit', function(event) {
        event.preventDefault(SendmailTransport); 
        let data = document.getElementById('email').value;
        console.log(data2);
    });

    document.getElementById('feedbackForm').addEventListener('click', function(event) {
        if (event.target.tagName == 'BUTTON') {
            event.preventDefault();
            let data = document.getElementById('message').value;
            console.log(data3);
        }
    });


    $('#feedbackForm').on('submit', function(event) {
        event.preventDefault();
    let data = $('#name').val();
console.log(data4);
    })