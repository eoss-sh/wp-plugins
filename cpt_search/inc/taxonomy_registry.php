<?php

/* 
* Add Custom Tyxonomy to filter
*/
function cpt_search_taxonomy() {
    $labels = [
        'name' => _x( 'Categories', 'taxonomy general name' ),
        'singular_name' => _x( 'Category', 'taxonomy singular name' ),
    ];

    $args = [
        'labels' => $labels,
        'hierarchical' => true,
        'public' => true,
        'show_ui' => true,
        'show_in_rest' => true,
        'show_admin_column' => true,
    ];

    register_taxonomy( 'cpt_search_category', 'cpt_search', $args );
}
add_action( 'init', 'cpt_search_taxonomy', 0 );

