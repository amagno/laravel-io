@extends('header')


@section('content')
<div class="row" style="padding: 50px;"></div>
<div class="row">
    <div class="col-lg-6">
        <div class="panel panel-default" ng-app="PostModule">
            <div class="panel-heading">Panel heading without title</div>
            <div class="panel-body" ng-controller="TestController">
                <form action="" ng-submit="submit()">
                    <div class="form-group" ng-class="{ 'has-error' : user.errors.name }">
                        <label for="name">Nome</label>
                        <input ng-model="user.name" id="name" name="name" type="text" class="form-control"/>
                        <p class="help-block" ng-show="user.errors.name" ng-repeat="error in user.errors.name">
                            {{ error }}
                        </p>
                    </div>
                    <div class="form-group" ng-class="{ 'has-error' : user.errors.email }">
                        <label for="email">E-mail</label>
                        <input ng-model="user.email" id="email" name="email" type="text" class="form-control"/>
                        <p class="help-block" ng-show="user.errors.email" ng-repeat="error in user.errors.email">
                            {{ error }}
                        </p>
                    </div>
                    <button type="submit" class="btn btn-default">Submit</button>

                </form>

                <ng-form-group></ng-form-group>
            </div>
        </div>
    </div>
</div>

@stop