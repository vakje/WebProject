<?php
//shows errors for debugging 
error_reporting(E_ALL);
ini_set('display_errors', 1);
// 2. Strings, 3. Arrays, 5. File writing
//making info one styled
 // Trim, lowercase, then capitalize first name
$firstName = ucfirst(strtolower(trim($_POST['name'])));
 // Trim, lowercase, then capitalize last name
$lastName = ucfirst(strtolower(trim($_POST['last_name'])));
$email = strtolower(trim($_POST['email']));
//saving data which was submited in html form
$password = $_POST['password'];
$repeatPassword = $_POST['repeat_password'];

//using array for collectin errors
$errors = [];

if ($password !== $repeatPassword) {
    $errors[] = "Passwords do not match.";
}

if (strlen($password) < 6) {
    $errors[] = "Password too short.";
}
//if errors array is empty assign values to userdata and 
if (empty($errors)) {
    $userData = "$firstName $lastName | $email\n";
    //putting content in a file with automatic string concatanation
    file_put_contents("users.txt", $email . "|" . $password . "\n", FILE_APPEND);
    header("Location: Signin.html");
    exit();
} else {
    //display all elements in error array
    foreach ($errors as $e) {
        echo "<p>$e</p>";
    }
    //add link to go back if somehthing goes wrong
    echo '<a href="Signup.html">Go back</a>';
}
