<?php
/**
 * The template for displaying archive pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package jgrip
 */

get_header();
?>


<section class="leadarea relative">
	<h1 class="en relative">
		NEWS & RELEASE
		<span>ニュース・リリース</span>
	</h1>
</section>

<section class="news_content">
	<div class="outer_contents">
		<div class="news_title_area">
			<h1><?php the_title(); ?></h1>
			<p class="date en"><?php the_time('Y.m.d'); ?></date>
		</div>
		<div class="contents">
			<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
			  <?php the_content(); ?>
			<?php endwhile; endif; ?>
		</div>
	</div>
</section>

<?php
get_footer();