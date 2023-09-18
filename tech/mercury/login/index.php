<!-- Blueberry Tech - Last Update: 221208 - riley -->

<?php
require_once '../data/includes/config_session.inc.php';
require_once '../data/includes/login_view.inc.php';
?>

<!DOCTYPE html>
<html lang="en-us">

<head>
  <meta charset="UTF-8" />
  <!-- Sets the locale of the site -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="../data/CSS/mainPage.css" />
  <link rel="stylesheet" href="../data/CSS/mobileCss.css" />
  <link rel="icon" type="image/x-icon" href="../data/Images/favicon.ico" />
  <!-- Sets the CSS file. This is a global file -->
  <title>Blueberry Technologies - Login to Portal</title>
  <!-- This sets the title of the website (where the tab is)-->
</head>

<!--
        =========================================================================
        =========================================================================
        =========================================================================

        THE END OF THE HEAD SECTION (SHOULD BE THE SAME FOR ALL THE PAGES)

        =========================================================================
        =========================================================================
        =========================================================================
    -->

<body>
  <header>
    <div class="Mobile-Container">
      <div class="Mobile-Header" id="Mobile-Header">
        <a href="../" class="active"><img class="Logo-Image" src="../data/Images/logotransparent.png" /></a>
        <div id="Nav-Links">
          <a href="../aboutus/">About</a>
          <a href="../contactus/">Contact</a>

          <a href="../news/">News & Updates</a>
          <a class="products" href="../products/">Products & Services</a>
        </div>
        <a href="javascript:void(0);" class="icon" onclick="collapseMenu()">
          ☰
        </a>
      </div>

      <!-- End of header. -->
    </div>
    <div class="Desktop-Container">
      <a href="../"><img class="HeaderImage" src="../data/Images/header.png" /></a>
      <div class="navbar">
        <!-- Centered link -->
        <div class="navbar-centered">
          <a href="../" class="active">Home</a>
        </div>

        <!-- Left-aligned links (default) -->
        <a href="../aboutus/">About</a>
        <a href="../contactus/">Contact</a>

        <a href="../news/">News & Updates</a>

        <!-- Right-aligned links -->
        <div class="navbar-right">
          <a class="products" href="../products/">Products & Services</a>
        </div>
      </div>
    </div>
  </header>

  <!--

        THIS IS THE MAIN
        
    -->
  <main>
    <div class="products-html-main">
      <h2 style="font-size: 50px">Login.</h2>
      <form action="../data/includes/login.inc.php" method="POST">
        <input type="text" name="username" placeholder="Username" />
        <input type="password" name="pwd" placeholder="Password" />
        <button>Login</button>
      </form>

      <?php
      check_login_errors();
      ?>

      <div class="new-user">
        <a href="new-user">New Employee? Click here.</a>
        <!--
            When the user submits a valid ID number, and they don't have an existing
            account this will query the database and make a password for the user.

            If the user has an account, this will query the database and check the password field
            if not null, then return error message.

            If the password is set correctly, then throw user back to login screen with a
            notice message.

            In the admin console, they will be able to create new users and assign an incremental
            ID number, reset password, and modify users permissions.
          -->
      </div>
    </div>
  </main>
</body>

<!--
        =========================================================================
        =========================================================================
        =========================================================================

        THE START OF THE FOOTER SECTION (SHOULD BE THE SAME FOR ALL THE PAGES)

        =========================================================================
        =========================================================================
        =========================================================================
        -->

<!--
        =========================================================================
        =========================================================================
        =========================================================================

        THE END OF THE FOOTER SECTION (SHOULD BE THE SAME FOR ALL THE PAGES)

        =========================================================================
        =========================================================================
        =========================================================================
    -->
<footer class="index-html-footer">
  <div class="left">
    <div class="copyright-information">
      <p>
        Version 1 - © Copyright 2022 - 2023 Blueberry Technologies. All rights
        reserved.
      </p>
    </div>
  </div>
  <div class="right">
    <a href="https://www.facebook.com/people/Blueberry-Technologies/100090421412317/"><img class="footer-pic" src="../data/Images/facebookLogo.png" alt="Facebook" /></a>
    <a href="https://www.tiktok.com/@blueberrytechs"><img class="footer-pic" src="../data/Images/tiktokLogo.png" alt="TikTok" /></a>
    <a href="https://twitter.com/BlueberryTechs"><img class="footer-pic" src="../data/Images/twitterLogo.png" alt="Twitter" /></a>
    <div class="changelog">
      <a href="../changelog/">Changelog</a>
    </div>
  </div>
  <script src="../data/Scripts/navbarScripts.js"></script>
</footer>

</html>