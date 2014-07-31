<!DOCTYPE html>
<html>
<head lang="pt-BR">
    <meta charset="UTF-8">
    <title></title>

    @include('assets.styles')
</head>
<body>
<div class="container" ng-app="ChatApp">
    <p>Contador: <h3>{{ client_count }}</h3></p>
    <hr/>
    <div class="row" ng-controller="ChatController">
        <div class="col-sm-4">
            <ul>
                <li ng-repeat="msg in s_messages track by $index" class="text-info" style="font-size: 12px">
                    {{ msg }}
                </li>
            </ul>
        </div>

    </div>
</div>

@include('assets.scripts')

</body>
</html>