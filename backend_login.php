<?php
//session will start 
session_start();
//this vars will have values that were submited in login form
$email = $_POST['email'];
$password = $_POST['password'];

// Fake validation: just check if email exists in file
$userData = file_exists("users.txt") ? file("users.txt") : [];

//iterate through userdata array
$found = false;
foreach ($userData as $line) {
    //splitting data with | delimeter to get email and password seperately
    list($storedEmail, $storedPassword) = explode('|', trim($line));
    //simple validation
    if ($storedEmail === $email && $storedPassword === $password) {
        $found = true;
        break;
    }
}

if ($found) {
    // saving  in session email if validation is succesfull
    $_SESSION["email"] = $email;
    //Set a cookie to remember the user (expires in 1 hour)
    setcookie("user_email", $email, time() + 3600); // 1 hour
    header("Location: checkout.html");
    exit(); // required to stop further execution
} else {
    header("Location: Signin.html");
    exit(); // required to stop further execution
}
