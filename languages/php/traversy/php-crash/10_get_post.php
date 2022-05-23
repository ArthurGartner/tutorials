<?php
/* --- $_GET & $_POST Superglobals -- */

/*
  We can pass data through urls and forms using the $_GET and $_POST superglobals.
*/

//Prevent errors from being shown if no submission has been made
if(isset($_POST['submit'])) {
    echo $_POST['name'];
    echo $_POST['age'];
}
?>


<a href="<?php echo $_SERVER['PHP_SELF']; ?>" >Click</a>
<!-- Don't need GET because it is default -->
<!-- forms -->
<form action="<?php echo $_SERVER['PHP_SELF'];?>" method="POST">
<div>
<label for="name">Name: </label>
<input type="text" name="name">
</div>
<div>
<label for="age">Age: </label>
<input type="text" name="age">
</div>
<input type="submit" value="Submit" name="submit">
</form>