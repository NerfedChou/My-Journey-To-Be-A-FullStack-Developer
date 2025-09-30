<?php
// Simple signup validation (for demonstration only)
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'] ?? '';
    $email = $_POST['email'] ?? '';
    $password = $_POST['password'] ?? '';

    // Dummy check (in real apps, save to DB and hash password)
    if ($username && $email && $password) {
        echo "Registration successful! Welcome, $username.";
    } else {
        echo "Please fill in all fields.";
    }
} else {
    echo "Invalid request.";
}
?>
<?php
// Simple login validation (for demonstration only)
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = $_POST['email'] ?? '';
    $password = $_POST['password'] ?? '';

    // Dummy validation
    if ($email === 'test@example.com' && $password === 'password') {
        echo "Login successful! Welcome, $email.";
    } else {
        echo "Invalid email or password.";
    }
} else {
    echo "Invalid request.";
}
?>

