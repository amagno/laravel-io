@extends('header')

@section('content')

<h1>Hello Directive Test</h1>

<hr/>

<div ng-app="PostModule">
    <div ng-controller="TestController">
        <test-directive model="user.errors.email" name="email" click="testefu()"></test-directive>
        <div class="form-group" ng-class="{ 'has-error' : user.errors.email }"></div>
    </div>
</div>

@stop