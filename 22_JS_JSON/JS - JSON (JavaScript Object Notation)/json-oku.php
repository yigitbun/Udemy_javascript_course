<?php 
//appserv =>


$veri=json_decode($_GET['veri']);

//echo $veri->ad;

foreach ($veri as $key ) {

	echo $key;
	
}

 ?>