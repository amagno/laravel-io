@extends('header')

@section('content')

<h1>Hello Directive Test</h1>

<hr/>

<div ng-app="PostModule">
    <div ng-controller="TestController">
        <form action="" name="teste">

        </form>
        {{ user.post.email }}
        <button ng-click="testefu()">Teste</button>
    </div>
</div>

@stop