<?php
    $args = array(
        'post_type' => 'cpt_search',
        'post_status' => 'publish',
        'posts_per_page' => -1,
    );
    
    $selected_posts = get_posts($args);

	$taxonomy_terms = get_terms( array(
        'taxonomy' => 'cpt_search_category',
        'hide_empty' => false,
    ) );

	echo '<section id="cpt-filter">';
	echo '<button class="all-posts-button" data-filter="all">Alle</button>';
	foreach($taxonomy_terms as $term) {
		echo '<button class="cpt-filter-button" data-filter="' . $term -> term_taxonomy_id . '">' . $term -> name . '</button>';
	}
	echo '</section>';

    echo '<div id="post-container">';
    foreach($selected_posts as $post) {
        echo '<h4 class="eoss_fahrzeuge_article_title">' . $post->post_title . '</h4>';

        $terms = get_the_terms($post->ID, 'cpt_search_category');
        if ($terms && !is_wp_error($terms)) {
            foreach ($terms as $term) {
                echo '<p>' . $term->name . '</p>';
            }
        }
    }
    echo '</div>';
?>