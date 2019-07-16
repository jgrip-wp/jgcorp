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

<section class="main">
	<div class="bg"></div>
</section>

<div class="contents">

	<section class="leadarea relative">
		<h1 class="en relative">
			<span class="en">WEB MARKETING</span>
			COLUMN
			<span>ウェブマーケティングコラム</span>
		</h1>
	</section>

	<div class="column_contents">
		<div class="in clearfix">
			<section class="colum_lists left">
				<div class="columnlists_in">
				<?php
					if ( have_posts() ) : while ( have_posts() ) : the_post();
					$loopcounter++;
					if($loopcounter === 9){
						break;
					}
				?>
				<div class="list outer_contents">
					<a href="<?php the_permalink(); ?>">
					<div class="thumb">
						<?php
						if ( has_post_thumbnail() ) {
							the_post_thumbnail();
						}
						?>
					</div>
					<div class="cat_tag">
						<?php $cat = get_the_category(); $cat = $cat[0]; { echo $cat->cat_name; } ?>
					</div>
					<div class="txtarea">
						<h2><?php the_title(); ?></h2>
						<p><?php the_excerpt(); ?></p>
					</div>
					</a>
				</div>
				<?
					endwhile; endif;
				?>
				</div>
			<?php wp_pagenavi(); ?>
			</section>

			<section class="column_side left">
				<div class="category_lists outer_contents">
					<h2 class="en">CATEGORY</h2>
					<ul>
						<li><a href="/column">全て</a></li>
						<li><a href="promotion">WEBプロモーション全般</a></li>
						<li><a href="hp">HP制作</a></li>
						<li><a href="lp">LP制作・バナー制作</a></li>
						<li><a href="seo">SEO対策</a></li>
						<li><a href="contema">コンテンツマーケティング</a></li>
						<li><a href="listing">リスティング広告</a></li>
						<li><a href="youtube">YouTube広告</a></li>
					</ul>
				</div>
			</section>
		</div>

	</div>

</div>

<?php
get_footer();
