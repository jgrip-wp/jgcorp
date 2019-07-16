<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package jgrip
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>

<head>
<meta charset="UTF-8">
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="profile" href="https://gmpg.org/xfn/11">
<?php wp_head(); ?>
<link rel="stylesheet" type="text/css" href="/common/css/reset.css">
<link rel="stylesheet" type="text/css" href="/common/css/style_common.css">
<link href="/common/css/slider/jquery.bxslider.css" rel="stylesheet" type="text/css">
<link rel="stylesheet" type="text/css" href="/common/css/style_news.css">
<link rel="stylesheet" type="text/css" href="/common/css/style_column.css">
</head>

<body class="page <?php type_class(); ?>">

<div class="wrap  aaaaa">
<div class="clearfix">
  <div id="contents_area">
    <div class="breadcrumbs" typeof="BreadcrumbList" vocab="https://schema.org/">
      <?php if(function_exists('bcn_display')){bcn_display();}?>
    </div>
    <div class="contents">



