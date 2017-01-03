<?php
namespace {$module};
return [
    'router' => [
        'routes' => [
            "{$moduleLower}" => [
                "type" => "Literal",
                "options" => [
                    "route" => "/{$moduleLower}",
                    "defaults" => [
                        "__NAMESPACE__" => "{$module}\Controller",
                        "controller" => "{$module}",
                        "action" => "index",
                    ],
                ],
                "may_terminate" => true,
                "child_routes" => [
                    "default" => [
                        "type" => "Segment",
                        "options" => [
                            "route" => "/[:controller[/:action][/:id]]",
                            "constraints" => [
                                "controller" => "[a-zA-Z][a-zA-Z0-9_-]*",
                                "action" => "[a-zA-Z][a-zA-Z0-9_-]*",
                            ],
                            "defaults" => [

                            ],
                        ],
                    ],
                ],
            ],

        ],
    ],
    'controllers' => [
        'factories' => [
            '{$module}\Controller\{$module}' =>  '{$module}\Controller\Factory\{$module}ControllerFactory',
        ],
    ],
    'view_manager' => [
        'template_path_stack' => [
            __DIR__ . '/../view',
        ],
    ],
];