<!DOCTYPE html>
<html>
<head lang="pt-BR">
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title></title>

    @include('assets.styles')

</head>
<body>
<div class="container">
    <!--CONTENT-->
    @yield('content')
    <!--CONTENT-->
</div>

    @include('assets.scripts')


    @include('assets.angular')

</body>
</html>