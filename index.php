<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>ELIN</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
    <script type="text/javascript" src="https://code.jquery.com/jquery-1.11.3.min.js"></script>
    <link rel="stylesheet" href="https://formden.com/static/cdn/bootstrap-iso.css" />
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.4.1/js/bootstrap-datepicker.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.4.1/css/bootstrap-datepicker3.css"/>
    <link rel="stylesheet" href="assets/css/main.css">
</head>
<body>
 <!-- Settings for options bar -->
<div class="bootstrap-iso">
 <div class="container-fluid">
  <div class="row">
   <div class="col-md-6 col-sm-6 col-xs-12">

    <!-- Form code begins -->
    <form method="post">
      <div class="form-group"> <!-- Date input -->
        <label class="control-label" for="date">Pick a Date <heart>❤</heart></label>
        <input class="form-control" id="date" name="date" placeholder="MM/DD/YYY" type="text" autocomplete="off"/>
        <button class="btn btn-primary " name="submit" type="submit">Submit</button>
      </div>
     </form>
    </div>
  </div>    
 </div>
<div class="hideKey">V</div>
</div>

<!-- Date Countdown -->
<div class="container">
    <div class="jumbotron jumbotron-fluid">
        <div class="container">
            <h1 class="display-5">Countdown</h1>
            <p class="lead">hejsan <span id="counter"></span><p>
        </div>
    </div>
</div>
<script src="assets/js/core.js"></script>    
</body>
</html>