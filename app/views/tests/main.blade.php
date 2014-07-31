<!DOCTYPE html>
<html>
<head lang="pt-BR">
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap 101 Template</title>
    <title></title>


    @include('assets.scripts')
</head>
<body>
<div>
    <div class="container" ng-app="ChatApp">
        <div class="row" ng-controller="ChatController">
            <h1>Teste pub/sub</h1>
            <hr/>
            <form action="/pubb" method="post">
                <input type="text" name="msg"/>
                <input type="submit" value="enviar"/>
            </form>
            @if(Session::has('laravel_return'))
            <p class="bg-info" style="padding: 10px; border-radius: 5px; margin: 5px;"><% Session::get('laravel_return') %></p>
            @endif
        </div>

    </div>




</div>


@include('assets.styles')
</body>
</html>