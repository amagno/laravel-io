<?php

namespace Jobs;


class MyFirstJob {

    public function __construct()
    {
        echo 'MyFirstJob Class';
    }

    public function fire($job, $data)
    {
        var_dump($job);
        var_dump($data);
    }

}