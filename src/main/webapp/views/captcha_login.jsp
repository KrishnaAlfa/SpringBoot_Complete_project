<html>
  <head>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  
  
  
      <script src="https://www.google.com/recaptcha/api.js" async defer></script>
  
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>

#error
{
text-align: center;
font-size: 20px;
color: red;
}

body {font-family: Arial, Helvetica, sans-serif;}
form {border: 3px solid #f1f1f1;}

input[type=text], input[type=password] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

button {
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}

button:hover {
  opacity: 0.8;
}

.cancelbtn {
  width: auto;
  padding: 10px 18px;
  background-color: #f44336;
}

.imgcontainer {
  text-align: center;
  margin: 24px 0 12px 0;
}

img.avatar {
  width: 40%;
  border-radius: 50%;
}

.container {
  padding: 16px;
}

span.psw {
  float: right;
  padding-top: 16px;
}

/* Change styles for span and cancel button on extra small screens */
@media screen and (max-width: 300px) {
  span.psw {
     display: block;
     float: none;
  }
  .cancelbtn {
     width: 100%;
  }
}
</style>
</head>
  <h2>Login Form</h2>
  
  <button class="btn btn-danger" style="width: 80px; float: right;">
  <a href="/"> Home</a>
  </button>
  
<div id="error">
${failed}
</div>
<form action="/cap/capRegistration" method="post">
  <div class="imgcontainer">
    <img src="/images/img.png" alt="Avatar" class="avatar" height="150px" width="150px">
  </div>
  <div class="container">
    <label for="uname"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="uname" required>
    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required>
         <div class="g-recaptcha" data-sitekey="6Lev6OQUAAAAADyPjCZHhE5eV3-CR04lbTybi77K"></div>
        <br/>
    <input type="submit" value="Login" class="btn btn-primary"/>
  </div>
</form>
</body>
</html>