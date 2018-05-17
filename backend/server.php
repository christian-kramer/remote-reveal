<?php

//error_reporting(E_ALL); ini_set('display_errors', 1);

include "security.php";

class ScoreBoard
{
    public $id;
    public $value;
    public $path;

    function __construct($path)
    {
        $this->path = $path;
        if (!file_exists("$this->path"))
        {
            mkdir("$this->path", 0775, TRUE);
        }
    }

    function initiate()
    {
        $this->id = mt_rand(1,9);
        for ($i = 0; $i < 5; $i++)
        {
            $this->id .= mt_rand(0,9);
        }

        if (!file_exists("$this->path/$this->id"))
        {
            file_put_contents("$this->path/$this->id", respond('Waiting for Remote', 0, TRUE));
            respond("$this->id");
        }
        else
        {
            initiate();
        }
    }

    function connect($id)
    {
        if (file_exists("$this->path/$id"))
        {
            $this->value = file_get_contents("$this->path/$id");
        }
        else
        {
            respond('no such scoreboard', 0);
        }
    }
}

$path = "../../../../../data/protocle.com/cdk/joseph";
$id = sanitize($_GET['id']);

$scoreboard = new ScoreBoard($path);

if (!$id)
{
    $scoreboard->initiate();
}
else
{
    $scoreboard->connect($id);
    respond($scoreboard->value);
}

?>