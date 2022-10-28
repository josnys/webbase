<?php

return [
     'groups' => [
          'admin' => ['admin.*', 'user.*', 'logout'],
          'user' => ['user.*', 'admin.dash', 'logout', 'login'],
     ]
];
