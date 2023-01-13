<?php
include_once './header.php';
$is_invalid = false;

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    
    $mysqli = require __DIR__ . "/db.php";
    
    $sql = sprintf("SELECT * FROM users
                    WHERE email = '%s'",
                    $mysqli->real_escape_string($_POST["email"]));
    
    $result = $mysqli->query($sql);
    
    $user = $result->fetch_assoc();
    print_r($_SESSION["user_id"]);
    print_r($user);
    if ($user) {
        
        if (password_verify($_POST["password"], $user["password"])) {
            
            session_start();
            
            session_regenerate_id();
            
            $_SESSION["user_id"] = $user["id"];
            
            header("Location: homepage.php");
            exit;
        }
    }
    
    $is_invalid = true;
}

?>
<section class="login-section">
    <div class="login-form">
        <h1 class="form-title">Log in</h1>
        <?php if ($is_invalid): ?>
        <em>Invalid login</em>
         <?php endif; ?>
        <form  method="post">
            <div class="input-text-box">
                <div class="form-group">
                    <label for="username" id="name-label">Email:</label>
                    <input type="text" id="email"  name="email" class="input-text" placeholder="Enter Emai" value="<?= htmlspecialchars($_POST["email"] ?? "") ?>">
                </div>
                 <div class="form-group">
                    <label for="username" id="name-label">Username:</label>
                    <input type="text" id="username" name="username" class="input-text" placeholder="Enter your  user name" value="<?= htmlspecialchars($_POST["username"] ?? "") ?>">
                </div>
                <div class="form-group">
                    <label for="password" id="password-label">Password:</label>
                    <input type="password" id="password" name="password" class="input-text" placeholder="Enter your password">
                </div>
            </div>
            <div class="form-submit-btn">
                <input type="submit" value="Log in">
            </div>
        </form>
    </div>
</section>
<?php
include_once './footer.php'
?>