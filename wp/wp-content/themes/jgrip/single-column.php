<?php
/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package jgrip
 */

get_header();
?>

<section class="leadarea relative">
	<h1 class="en relative">
		<span class="en">WEB MARKETING</span>
		COLUMN
		<span>ウェブマーケティングコラム</span>
	</h1>
</section>

<div class="column_contents">
	<div class="in clearfix">
		<section class="colum_detail left outer_contents">
			<div class="thumb">
				<?php
if ( has_post_thumbnail() ) { // 投稿にアイキャッチ画像が割り当てられているかチェックします。
	the_post_thumbnail();
}
?>
			</div>
			<div class="cat_tag">
				<?php $cat = get_the_category(); $cat = $cat[0]; { echo $cat->cat_name; } ?>
			</div>
			<div class="txtarea">
				<h1><?php the_title(); ?></h1>
				<div class="column_in_contents">
					<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
					  <?php the_content(); ?>
					<?php endwhile; endif; ?>
				</div>
			</div>
			<div class="contact_area">
				<a href="/contact" class="en">CONTACT</a>
			</div>
		</section>

		<section class="column_side left">
			<div class="category_lists outer_contents">
				<h2 class="en">CATEGORY</h2>
				<ul>
					<li><a href="">全て</a></li>
					<li><a href="">WEBプロモーション全般</a></li>
					<li><a href="">HP制作</a></li>
					<li><a href="">LP制作・バナー制作</a></li>
					<li><a href="">SEO対策</a></li>
					<li><a href="">コンテンツマーケティング</a></li>
					<li><a href="">リスティング広告</a></li>
					<li><a href="">YouTube広告</a></li>
				</ul>
			</div>
		</section>
	</div>

</div>

<?php
get_footer();
