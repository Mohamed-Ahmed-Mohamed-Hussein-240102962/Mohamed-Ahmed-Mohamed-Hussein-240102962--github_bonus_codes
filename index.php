<?php
    include("database.php");

    $sql = "INSERT INTO users (user, password)
            VALUES ('mohammed', 'password123')";

    try{
        mysqli_query($conn, $sql);
        echo"User is now registered";
    }
    catch(mysqli_sql_exception){
        echo"Could not register user";
    }

    mysqli_close($conn);
?>