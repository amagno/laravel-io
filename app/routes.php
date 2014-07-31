<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

Route::get('/testing', function()
{
    //var_dump(Session::all());

    $redis = Redis::connection();

    $session_redis = $redis->get('laravel:' . Session::getId());

    //Session::put('testeusername', 'alexandre');

    $s = unserialize($session_redis);
    $ss = unserialize($s);
    var_dump($ss);

    //var_dump($ss['testeusername']);
});
Route::get('/testing/exclude', function()
{
    Session::flush();
    return 'ok';
});

Route::get('/', function()
{
    return View::make('main');
});

Route::get('/queue', function()
{
     Queue::push('Jobs\MyFirstJob', ['message' => 'test']);
});

Route::get('/pub', function(){

    return View::make('tests.main');
});

Route::post('/pubb' , function(){
    $r = Redis::connection();

    $msg = Input::get('msg');

    if($msg){
        $r->publish('laravel_messages', $msg);
        $r->quit();
        return Redirect::to('/pub')->with('laravel_return', 'Menssagem "' . $msg . '" enviada! ');
    }

});