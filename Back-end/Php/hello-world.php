<?php echo "Hello World!";
$name = "Pedro";
$age = 28; 

echo $age;

$numberOne = 1;
$numberTwo = 2;
$numberTree = 5.55;

$plus = $numberOne + $numberTwo; 
$minus = $numberOne - $numberTwo;
$multiplication = $numberOne * $numberTwo;
$division = $numberOne / $numberTwo; 
$cube = $numberTwo ** 3;
$module = $numberTwo % 2;


echo $plus .PHP_EOL;
echo $minus .PHP_EOL;
echo $multiplication .PHP_EOL;
echo $division .PHP_EOL;
echo $cube .PHP_EOL;
echo $module .PHP_EOL;


echo getType($numberOne) .PHP_EOL;
echo getType($numberTree) .PHP_EOL;
echo getType($name) .PHP_EOL;

$verdadeiro = true;
$falso = false;
echo getType($verdadeiro) .PHP_EOL;
echo getType($falso) .PHP_EOL;

echo 'Hi, my name is '. $name . "\n";
echo "I am $age years old. \n";

// inline comment
/* multiple
lines
commment */
