<?php
    class query
    {
        function s($i)
        {
            include 'db.php';
            $q = mysqli_query($c, $i);
            $r = array();
            while($d = $q->fetch_assoc()){
				if(!is_object($d)){
					$r[] = (array)$d;
				}
            }
            return $r;
            mysqli_free_result($q);
            mysqli_close($c);
        }
        function u($i)
        {
            include 'db.php';
            $q = mysqli_query($c, $i);
            mysqli_close($c);
        }
    }
?>