<?php 
$desc = "Amet et sed dolores justo sed eirmod quod amet dolor";
$test =  array();

for ($i=0; $i < 50; $i++) { 
    $adding = array("title" => "Product ".($i+1),
                    "desc" => $desc,
                    "pricing" => strval(rand(100,10000)/100),
                    "ID" => strval(rand(1000, 10000)));
    array_push($test, $adding);
}
echo json_encode($test);