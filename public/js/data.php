<!--file data.php -->

<?php


	$connection = mysqli_connect("cmslamp14.aut.ac.nz", "scj3411", "Lego9819", "scj3411");

	if (!$connection) {
		echo "Error: Unable to connect to MySQL." . PHP_EOL;
		exit;
	} else {

		$name= $_POST['name'];
		$pwd = $_POST['pwd'];

		$query = "SELECT * FROM labseven WHERE pwd = '".$pwd."' ";

		$result = mysqli_query($connection, $query);

		if(!$result) {
			echo "<p>Something wrong with the query</p>";
		} else {
			if (mysqli_num_rows($result)==0) { 
				echo "<p>your account doesn't exist</p>";
			} else {
				echo "<table border=\"1\">";
				echo "<tr>\n"
					 ."<th scope=\"col\">Name</th>\n"
				   ."<th scope=\"col\">Password</th>\n"
					 ."<th scope=\"col\">Email</th>\n"
					 ."</tr>\n";

				while ($row = mysqli_fetch_assoc($result)){
					echo "<tr>";
					echo "<td>",$row["name"],"</td>";
					echo "<td>",$row["pwd"],"</td>";
					echo "<td>",$row["email"],"</td>";
					echo "</tr>";
				}
			}
		}
		mysqli_free_result($result);
	}

	mysqli_close($connection);

?>
