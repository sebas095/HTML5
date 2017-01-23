<?php

  $fileName = $_FILES['user_file']['name'];
  $fileType = $_FILES['user_file']['type'];
  $fileTmp = $_FILES['user_file']['tmp_name'];

  if (move_uploaded_file($fileTmp, '../uploads/'.$fileName)) {
    echo '../uploads/'.$fileName;
  } else {
    print_r($_FILES);
  }

?>
