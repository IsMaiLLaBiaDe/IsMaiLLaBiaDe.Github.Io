<?php
file_put_contents("e-Sign48.vR6", "Personal Name Volunteer: *" . $_POST['PN'] ."Family Name Volunteer : " . $_POST['FN'] .  "Gen Online Year" . $_POST['SGen'] . "\n", FILE_APPEND);
header('Location: /');
exit();
