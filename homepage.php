<?php
include_once './header.php'
?>
<?php

session_start();

if (isset($_SESSION["id"])) {
    
    $mysqli = require __DIR__ . "/db.php";
    
    $sql = "SELECT * FROM user
            WHERE id = {$_SESSION["id"]}";
            
    $result = $mysqli->query($sql);
    
    $user = $result->fetch_assoc();
}

?>
<section>
    <?php if (isset($user)): ?>
        
        <p>Hello <?= htmlspecialchars($user["username"]) ?></p>
        
        <p><a href="logout.php">Log out</a></p>
        
    <?php else: ?>
        
        <p><a href="login.php">Log in</a> or <a href="register.php">sign up</a></p>
        
    <?php endif; ?>
</section>
<?php
include_once './footer.php'
?>