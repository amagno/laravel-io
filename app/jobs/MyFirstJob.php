<?php

namespace Jobs;



class MyFirstJob {


    public function fire(\Illuminate\Queue\Jobs\Job $job, $data)
    {
        return $job->delete();
    }

}