@extends('header')

@section('content')

<h1>Hello Directive Test</h1>

<hr/>

<div ng-app="PostModule">
    <div ng-controller="TestController">
        <form action="" name="teste">
        <test-directive type="email" name="email" label="e-mail" model="user.post.email" errors="user.errors.email" validation="required min:3" ></test-directive>
            <input type="submit"/>
        </form>
        {{ user.post.email }}
        <button ng-click="testefu()">Teste</button>
    </div>
</div>

@stop