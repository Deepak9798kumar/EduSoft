<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

$conn = mysqli_connect('localhost', 'uncodemylandingpage', 'OkWRwPEJY0sT', 'uncodemylandingpage');


if (mysqli_connect_error()) {
    echo mysqli_connect_error();
    exit();
} else {
   
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $name = $_POST['name'];
        $email = $_POST['email'];
        $mobile = $_POST['mobile'];
        $location = $_POST['location'];
        $course = $_POST['course'];
        $mode = $_POST['mode'];

        $sql = "INSERT INTO uncodemyincontactform (name, email, mobile, location, course, mode) VALUES ('$name', '$email', '$mobile', '$location', '$course', '$mode')";
        $res = mysqli_query($conn, $sql);

        if ($res) {
            echo true;
        } else {
            echo false;
        }
    }
}

$conn->close();
?>
