<?php
    if(isset($_POST['submit'])){
        
        // Declaring the variables
        $name = $_POST['fullname'];
        $email = $_POST['email'];
        $message = $_POST['message'];


        $mailTo = 'muhammed@mmxclusive.com';
        $subject = 'Form Submission';
        $message = "Name: ".$name."\n"."Email: ".$email."\n". "Wrote the following: "."\n\n".$message;
        $headers = "From: ".$email;

        if(mail($mailTo, $subject, $message, $headers)){

            echo"<h1>Message Sent Successfully! Thank You"." ".$name.", You will hear back shortly!</h1>";
        }
        else{
            echo"Something went wrong!";
        }


    }
?>