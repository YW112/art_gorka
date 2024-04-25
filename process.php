<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Проверка наличия данных
    if (!empty($name) && !empty($email) && !empty($message)) {

        // Формирование сообщения
        $to = "адрес_почты_получателя@example.com";
        $subject = "Новое сообщение от пользователя: $name";
        $body = "Имя: $name\n";
        $body .= "Email: $email\n";
        $body .= "Сообщение:\n$message";

        // Отправка почты
        if (mail($to, $subject, $body)) {
            echo "Спасибо! Ваше сообщение отправлено.";
        } else {
            echo "Что-то пошло не так. Пожалуйста, повторите попытку.";
        }

    } else {
        echo "Пожалуйста, заполните все поля формы.";
    }
}

?>