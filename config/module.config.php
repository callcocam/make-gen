<?php
namespace Make;
return array(
    'controllers' => array(
        'factories' => array(
            'Make\Controller\Make' => 'Make\Controller\Factory\MakeControllerFactory'
        ),
    ),
    'router' => array(
        'routes' => array(
            'make' => array(
                'type'    => 'Literal',
                'options' => array(
                    'route'    => '/make',
                    'defaults' => array(
                        '__NAMESPACE__' => 'Make\Controller',
                        'controller'    => 'Make',
                        'action'        => 'createmodule',
                    ),
                ),
                'may_terminate' => true,
                'child_routes' => array(
                    'create' => array(
                        'type' => 'Literal',
                        'options' => array(
                            'route' => '/create',
                            'defaults' => array(
                                'controller' => 'Make',
                                'action'     => 'create',
                            ),
                        ),
                    ),
                	'view' => array(
                		'type' => 'segment',
                		'options' => array(
                			'route' => '/view[/:form]',
                            'constraints' => array(
                                'form' => '[a-zA-Z0-9_-]+'
                            ),
                			'defaults' => array(
                				'controller' => 'Make',
                				'action'     => 'view',
                			),
                		),
                	),
                    'input' => array(
                		'type' => 'Literal',
                		'options' => array(
                			'route' => '/input',
                			'defaults' => array(
                				'controller' => 'Make',
                				'action'     => 'input',
                			),
                		),
                	),
                	'paragraph' => array(
                		'type' => 'Literal',
                		'options' => array(
                			'route' => '/paragraph',
                			'defaults' => array(
                				'controller' => 'Make',
                				'action'     => 'paragraph',
                			),
                		),
                	),
                    'number' => array(
                		'type' => 'Literal',
                		'options' => array(
                			'route' => '/number',
                			'defaults' => array(
                				'controller' => 'Make',
                				'action'     => 'number',
                			),
                		),
                	),
                    'phone' => array(
                		'type' => 'Literal',
                		'options' => array(
                			'route' => '/phone',
                			'defaults' => array(
                				'controller' => 'Make',
                				'action'     => 'phone',
                			),
                		),
                	),
                    'checkbox' => array(
                		'type' => 'Literal',
                		'options' => array(
                			'route' => '/checkbox',
                			'defaults' => array(
                				'controller' => 'Make',
                				'action'     => 'checkbox',
                			),
                		),
                	),
                    'radio' => array(
                		'type' => 'Literal',
                		'options' => array(
                			'route' => '/radio',
                			'defaults' => array(
                				'controller' => 'Make',
                				'action'     => 'radio',
                			),
                		),
                	),
                    'dropdown' => array(
                		'type' => 'Literal',
                		'options' => array(
                			'route' => '/dropdown',
                			'defaults' => array(
                				'controller' => 'Make',
                				'action'     => 'dropdown',
                			),
                		),
                	),
                    'password' => array(
                        'type' => 'Literal',
                        'options' => array(
                            'route' => '/password',
                            'defaults' => array(
                                'controller' => 'Make',
                                'action'     => 'password',
                            ),
                        ),
                    ),
                    'passwordverify' => array(
                        'type' => 'Literal',
                        'options' => array(
                            'route' => '/passwordverify',
                            'defaults' => array(
                                'controller' => 'Make',
                                'action'     => 'passwordverify',
                            ),
                        ),
                    ),
                    'email' => array(
                        'type' => 'Literal',
                        'options' => array(
                            'route' => '/email',
                            'defaults' => array(
                                'controller' => 'Make',
                                'action'     => 'email',
                            ),
                        ),
                    ),
                    'date' => array(
                        'type' => 'Literal',
                        'options' => array(
                            'route' => '/date',
                            'defaults' => array(
                                'controller' => 'Make',
                                'action'     => 'date',
                            ),
                        ),
                    ),
                    'upload' => array(
                        'type' => 'Literal',
                        'options' => array(
                            'route' => '/upload',
                            'defaults' => array(
                                'controller' => 'Make',
                                'action'     => 'upload',
                            ),
                        ),
                    ),
                    'creditcard' => array(
                        'type' => 'Literal',
                        'options' => array(
                            'route' => '/creditcard',
                            'defaults' => array(
                                'controller' => 'Make',
                                'action'     => 'creditcard',
                            ),
                        ),
                    ),
                    'url' => array(
                        'type' => 'Literal',
                        'options' => array(
                            'route' => '/url',
                            'defaults' => array(
                                'controller' => 'Make',
                                'action'     => 'url',
                            ),
                        ),
                    ),
                    'hidden' => array(
                        'type' => 'Literal',
                        'options' => array(
                            'route' => '/hidden',
                            'defaults' => array(
                                'controller' => 'Make',
                                'action'     => 'hidden',
                            ),
                        ),
                    ),
                    'test' => array(
                		'type' => 'Literal',
                		'options' => array(
                			'route' => '/test',
                			'defaults' => array(
                				'controller' => 'Make',
                				'action'     => 'test',
                			),
                		),
                	),
                ),
            ),
        ),
    ),
    'view_manager' => array(
       'template_path_stack' => array(
            __DIR__ . '/../view',
        ),

    ),
);
