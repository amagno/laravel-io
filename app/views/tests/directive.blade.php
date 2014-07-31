@extends('master')

@section('content')

<h1>Hello Directive Test</h1>

<hr/>
<div ng-app="RestModule">
    <div ng-controller="TestController">
    <test-directive type="text" name="name" label="Nome" errors="user.errors.name" model="user.data.name">
    </test-directive>
        <hr/>
        <p>{{ user.data.name }}</p>
        <hr/>
        <button ng-click="showError()">Click To Error</button>
    </div>
</div>

@stop