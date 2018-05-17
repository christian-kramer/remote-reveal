<?php

    class Response
    {
        public $code;
        public $data;

        function __construct($code, $data)
        {
            $this->code = $code;
            $this->data = $data;
        }
    }

    function json_return($data, $code = 200)
    {

    }

    function respond($data, $code = 200, $inline = FALSE)
    {
        $response = new Response($code, $data);

        if (!$inline)
        {
            echo json_encode($response);
            exit;
        }

        if ($inline)
        {
            return json_encode($response);
        }

    }

    function sanitize($data)
    {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }
?>