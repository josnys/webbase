<!DOCTYPE html>
<html class="h-full bg-gray-400">
     <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
          <link href="{{ mix('/css/app.css') }}" rel="stylesheet">
          <script src="{{ mix('/js/app.js') }}" defer></script>
          @routes
     </head>
     <body class="font-sans text-gray-900 antialiased">
          @inertia
     </body>
</html>
