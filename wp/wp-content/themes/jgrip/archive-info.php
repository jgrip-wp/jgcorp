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
		<table>
			<?php if ( have_posts() ) : ?>
			<?php while ( have_posts() ) : the_post(); ?>
			<tr>
				<th class="en"><?php the_time('Y.m.d'); ?></th>
				<td><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></td>
			</tr>
			<?php endwhile; ?>
			<?php endif; ?>
		</table>
		<?php wp_pagenavi(); ?>
	</div>
</section>

<?php
get_footer();
