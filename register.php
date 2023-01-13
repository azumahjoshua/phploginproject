<?php
include_once './header.php';
?>
<section class="register-section">
    <div class="registeration-form">
        <h1 class="form-title">Registration From</h1>
        <form id="form-registeration" action="process-signup.php" method="post">
            <div class="input-text-box">
                <div class="form-group">
                    <label for="username" id="name-label">Username:</label>
                    <input type="text" id="username" name="username" class="input-text" placeholder="Enter your  user name">
                    <small>Error message</small>

                </div>
                <div class="form-group">
                    <label for="password" id="password-label">Password:</label>
                    <input type="password" id="password" name="password" class="input-text" placeholder="Enter your password">
                    <small>Error message</small>
                </div>
                <div class="form-group">
                    <label for="repeat-password" id="password-label"> Confirm Password:</label>
                    <input type="password" id="repeat-password" name="repeat_password" class="input-text" placeholder="Repeat your password">
                    <small>Error message</small>
                </div>
                <div class="form-group">
                    <label for="email" id="email-label">Email:</label>
                    <input type="email" id="email" class="input-text" name="email" placeholder="Enter your email">
                    <small>Error message</small>
                </div>
            </div>
            <div class="form-submit-btn">
                <!-- <button type="submit" name="submit" id="submit-form" value="Register">Register here</button> -->
                <input type="submit" name="submit" id="submit-form" value="Register" placeholder="Register here">
            </div>
        </form>
    </div>
</section>
<?php
include_once './footer.php'
?>