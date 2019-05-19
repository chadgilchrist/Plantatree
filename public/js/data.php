<!--file data.php -->

<?php


	$connection = mysqli_connect("us-cdbr-iron-east-02.cleardb.net", "b44ace26fea6f3", "ea11b339", "heroku_c9cba001b0caa9d");

	if (!$connection) {
		echo "Error: Unable to connect to MySQL." . PHP_EOL;
		exit;
	} else {

		$name= $_POST['name'];
		$pwd = $_POST['pwd'];

		$query = "SELECT * FROM test";
		//$query = "SELECT * FROM test WHERE pwd = '".$pwd."' ";

		$result = mysqli_query($connection, $query);

		if(!$result) {
			echo "<p>Something wrong with the query</p>";
		} else {
			if (mysqli_num_rows($result)==0) {
				echo "<p>your account doesn't exist</p>";
			} else {
				echo "<table border=\"1\">";
				echo "<tr>\n"
					 ."<th scope=\"col\">ID</th>\n"
					 ."</tr>\n";

				while ($row = mysqli_fetch_assoc($result)){
					echo "<tr>";
					echo "<td>",$row["id"],"</td>";
					echo "<td>",$row["fname"],"</td>";
					echo "<td>",$row["lname"],"</td>";
					echo "</tr>";
				}
			}
		}
		mysqli_free_result($result);
	}

	mysqli_close($connection);

?>
