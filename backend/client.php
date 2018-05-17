<?php

//error_reporting(E_ALL); ini_set('display_errors', 1);

include "security.php";

$path = "../../../../../data/protocle.com/cdk/joseph";
$id = sanitize($_GET['id']);
$data = sanitize($_GET['data']);
$spin = sanitize($_GET['spin']);

if ($id)
{
    if ($id && $data)
    {
        if (file_exists("$path/$id"))
        {
            if (is_numeric($data))
            {
                if ($spin && $spin == TRUE)
                {
                    $spinner = json_decode(file_get_contents("$path/$id"));
                    $spinner->code = 200;
                    file_put_contents("$path/$id", json_encode($spinner));
                }
                if (!$spin)
                {
                    file_put_contents("$path/$id", respond($data, 100, TRUE));
                    respond($data);
                }
            }
            else
            {
                respond('we can only display numbers');
            }
        }
    }
    if ($id && !$data)
    {
        if (file_exists("$path/$id"))
        {
            file_put_contents("$path/$id", respond('Enter Number to Display', 0, TRUE));
            respond('scoreboard exists, good to go');
        } else {
            respond('please enter a valid id', 0);
        }
    }
}
else
{
    respond('please enter an id', 0);
}

?>