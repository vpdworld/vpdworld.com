<script>
	import Footer from '../lib/components/Footer.svelte';

	import Header from '../lib/components/Header.svelte';
</script>

<div class="boxed_wrapper ltr">
	<Header />

	<!-- Start Main Slider -->
	<section class="main-slider style1">
		<div class="slider-box">
			<!-- Banner Carousel -->
			<div class="banner-carousel owl-theme owl-carousel text-center">
				<!-- Slide -->
				<div class="slide">
					<div class="image-layer" style="background-image:url(images/slides/v1-1.jpg)"></div>
					<div class="auto-container">
						<div class="content">
							<div class="icon"><img src="images/icon/jikjak.png" alt="Awesome Image" /></div>
							<div class="text">Welcome to Yacht Charter</div>
							<div class="big-title">
								The Ultimate<br /> Yahting <span class="thm-clr1">Experience</span>
							</div>
							<div class="btn-box">
								<a href="#">Discover More</a>
							</div>
						</div>
					</div>
				</div>
				<!-- Slide -->
				<div class="slide">
					<div class="image-layer" style="background-image:url(images/slides/v1-2.jpg)"></div>
					<div class="auto-container">
						<div class="content">
							<div class="icon"><img src="images/icon/jikjak.png" alt="Awesome Image" /></div>
							<div class="text">Welcome to Yacht Charter</div>
							<div class="big-title">
								The Ultimate<br /> Yahting <span class="thm-clr1">Experience</span>
							</div>
							<div class="btn-box">
								<a href="#">Discover More</a>
							</div>
						</div>
					</div>
				</div>
				<!-- Slide -->
				<div class="slide">
					<div class="image-layer" style="background-image:url(images/slides/v1-3.jpg)"></div>
					<div class="auto-container">
						<div class="content">
							<div class="icon"><img src="images/icon/jikjak.png" alt="Awesome Image" /></div>
							<div class="text">Welcome to Yacht Charter</div>
							<div class="big-title">
								The Ultimate<br /> Yahting <span class="thm-clr1">Experience</span>
							</div>
							<div class="btn-box">
								<a href="#">Discover More</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!-- End Main Slider -->

	<!--Start About Style1 Area-->
	<section class="about-style1-area">
		<div class="container">
			<div class="row">
				<div class="col-xl-7 col-lg-10">
					<div class="about-style1-left-content clearfix">
						<ul class="image-box">
							<li>
								<img src="images/resources/about-1.jpg" alt="Awesome Image" />
							</li>
							<li>
								<img src="images/resources/about-2.jpg" alt="Awesome Image" />
							</li>
						</ul>
						<div class="text-holder">
							<span>About Yacher</span>
							<h1>Welcome to Best Yachting Platform</h1>
							<p>
								There are many variations of passages of Lorem Ipsum available, but the majority
								have in some form by injected humour randomised words which don't look even slightly
								believable quis nostrud exercitation ullamco laboris nisi ut aliquip.
							</p>
						</div>
					</div>
				</div>
				<div class="col-xl-5 col-lg-12">
					<div class="boats-skipper-search-box text-center">
						<div class="title">
							<i class="flaticon-rudder"></i>
							<span>Search here</span>
							<h1>Boats and Your<br /> Skipper</h1>
						</div>
						<form class="boats-skipper-form" name="boats-skipper-form" action="#" method="post">
							<div class="input-box">
								<input
									type="text"
									name="form_desti"
									value=""
									placeholder="Destinations"
									required=""
								/>
								<div class="icon-box">
									<span class="flaticon-pin-1"></span>
								</div>
							</div>
							<div class="input-box">
								<input type="text" name="date" placeholder="Any Date" id="datepicker" />
								<div class="icon-box">
									<span class="flaticon-calendar"></span>
								</div>
							</div>
							<div class="input-box">
								<input type="text" name="time" placeholder="Any Time" />
								<div class="icon-box">
									<span class="flaticon-clock"></span>
								</div>
							</div>
							<div class="need-skipper">
								<input type="checkbox" name="skipper1" id="skipper" checked />
								<label for="skipper"><span></span>Do you need a skipper?</label>
							</div>
							<div class="button-box">
								<button type="submit">Search now</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!--End About Style1 Area-->

	<!--Start Fact Counter Area-->
	<section class="fact-counter-area thm_bgclr3">
		<div class="icon-holder">
			<img src="images/icon/direction.png" alt="Icon" />
		</div>
		<div class="container">
			<div class="row">
				<!--Start Single Fact Counter-->
				<div class="col-xl-3 col-lg-6 col-md-6 col-sm-12">
					<div
						class="single-fact-counter text-left wow fadeInLeft"
						data-wow-delay="100ms"
						data-wow-duration="1500ms"
					>
						<div class="count-box">
							<h1>
								<span
									class="timer"
									data-from="1"
									data-to="493"
									data-speed="5000"
									data-refresh-interval="50">493</span
								>
							</h1>
							<div class="icon"><span class="flaticon-boat"></span></div>
						</div>
						<div class="title">
							<h3>yachts</h3>
						</div>
					</div>
				</div>
				<!--End Single Fact Counter-->
				<!--Start Single Fact Counter-->
				<div class="col-xl-3 col-lg-6 col-md-6 col-sm-12">
					<div
						class="single-fact-counter text-left wow fadeInLeft"
						data-wow-delay="200ms"
						data-wow-duration="1500ms"
					>
						<div class="count-box">
							<h1>
								<span
									class="timer"
									data-from="1"
									data-to="1750"
									data-speed="5000"
									data-refresh-interval="50">1750</span
								>
							</h1>
							<div class="icon"><span class="flaticon-beach"></span></div>
						</div>
						<div class="title">
							<h3>destination</h3>
						</div>
					</div>
				</div>
				<!--End Single Fact Counter-->
				<!--Start Single Fact Counter-->
				<div class="col-xl-3 col-lg-6 col-md-6 col-sm-12">
					<div
						class="single-fact-counter text-left wow fadeInLeft"
						data-wow-delay="300ms"
						data-wow-duration="1500ms"
					>
						<div class="count-box">
							<h1>
								<span
									class="timer"
									data-from="1"
									data-to="2158"
									data-speed="5000"
									data-refresh-interval="50">2158</span
								>
							</h1>
							<div class="icon"><span class="flaticon-smile"></span></div>
						</div>
						<div class="title">
							<h3>satisfied</h3>
						</div>
					</div>
				</div>
				<!--End Single Fact Counter-->
				<!--Start Single Fact Counter-->
				<div class="col-xl-3 col-lg-6 col-md-6 col-sm-12">
					<div
						class="single-fact-counter text-left wow fadeInLeft"
						data-wow-delay="400ms"
						data-wow-duration="1500ms"
					>
						<div class="count-box">
							<h1>
								<span
									class="timer"
									data-from="1"
									data-to="670"
									data-speed="5000"
									data-refresh-interval="50">670</span
								>
							</h1>
							<div class="icon"><span class="flaticon-sailor"></span></div>
						</div>
						<div class="title">
							<h3>skippers</h3>
						</div>
					</div>
				</div>
				<!--End Single Fact Counter-->
			</div>
		</div>
	</section>
	<!--End Fact Counter Area-->

	<!--Start Yachts Area-->
	<section class="yachts-area">
		<div
			class="yachts-bg banner-animate"
			style="background-image: url(images/pattern/water-wave.png);"
		></div>
		<div class="container">
			<div class="sec-title text-center">
				<div class="icon"><span class="flaticon-rudder"></span></div>
				<p>our popular boats</p>
				<div class="big-title"><h1>Yachts for Charter</h1></div>
			</div>
			<div class="row">
				<div
					class="col-xl-4 col-lg-4 col-md-12 col-sm-12 wow fadeInUp"
					data-wow-delay="0ms"
					data-wow-duration="1500ms"
				>
					<!--Start Single Yachts Box-->
					<div class="siingle-yachts-box">
						<div class="img-holder">
							<div class="inner">
								<img src="images/yachts/yachts-1.jpg" alt="Awesome Image" />
								<div class="overlay-style-one bg1"></div>
							</div>
							<div class="rate-box thm-bgclr1">
								<h5>$780</h5>
								<h6>Week</h6>
							</div>
						</div>
						<div class="title-holder">
							<h2><a href="yachts-details.html">Maestrale</a></h2>
							<span>Italy Ocean</span>
							<div class="meta-box">
								<ul>
									<li><span class="flaticon-art-and-design"></span>89 ft</li>
									<li><span class="flaticon-boat-1"></span>4 cabins</li>
									<li><span class="flaticon-user"></span>2 berths</li>
								</ul>
							</div>
						</div>
					</div>
					<!--End Single Yachts Box-->
				</div>
				<div
					class="col-xl-4 col-lg-4 col-md-12 col-sm-12 wow fadeInUp"
					data-wow-delay="300ms"
					data-wow-duration="1500ms"
				>
					<!--Start Single Yachts Box-->
					<div class="siingle-yachts-box">
						<div class="img-holder">
							<div class="inner">
								<img src="images/yachts/yachts-2.jpg" alt="Awesome Image" />
								<div class="overlay-style-one bg1"></div>
							</div>
							<div class="rate-box thm-bgclr1">
								<h5>$960</h5>
								<h6>Week</h6>
							</div>
						</div>
						<div class="title-holder">
							<h2><a href="yachts-details.html">Sovereign</a></h2>
							<span>Italy Ocean</span>
							<div class="meta-box">
								<ul>
									<li><span class="flaticon-art-and-design"></span>89 ft</li>
									<li><span class="flaticon-boat-1"></span>4 cabins</li>
									<li><span class="flaticon-user"></span>2 berths</li>
								</ul>
							</div>
						</div>
					</div>
					<!--End Single Yachts Box-->
				</div>
				<div
					class="col-xl-4 col-lg-4 col-md-12 col-sm-12 wow fadeInUp"
					data-wow-delay="600ms"
					data-wow-duration="1500ms"
				>
					<!--Start Single Yachts Box-->
					<div class="siingle-yachts-box">
						<div class="img-holder">
							<div class="inner">
								<img src="images/yachts/yachts-3.jpg" alt="Awesome Image" />
								<div class="overlay-style-one bg1"></div>
							</div>
							<div class="rate-box thm-bgclr1">
								<h5>$470</h5>
								<h6>Week</h6>
							</div>
						</div>
						<div class="title-holder">
							<h2><a href="yachts-details.html">Lauren</a></h2>
							<span>Italy Ocean</span>
							<div class="meta-box">
								<ul>
									<li><span class="flaticon-art-and-design"></span>89 ft</li>
									<li><span class="flaticon-boat-1"></span>4 cabins</li>
									<li><span class="flaticon-user"></span>2 berths</li>
								</ul>
							</div>
						</div>
					</div>
					<!--End Single Yachts Box-->
				</div>
			</div>
		</div>
	</section>
	<!--End Yachts Area-->

	<!--Start Slogan Area-->
	<section class="slogan-area">
		<div class="container">
			<div class="row">
				<div class="col-xl-12">
					<div class="slogan-content thm_bgclr2 wow slideInUp" data-wow-delay="100ms">
						<div class="title">
							<h1>We provide high-quality services</h1>
						</div>
						<div class="button">
							<a class="btn-one" href="services.html">Learn More</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!--End Slogan Area-->

	<!--Start Testimonial Area -->
	<section class="testimonial-area">
		<div class="container">
			<div class="sec-title black">
				<div class="icon"><span class="flaticon-rudder"></span></div>
				<p>Testimonials</p>
				<div class="big-title black"><h1>What Clients Say</h1></div>
			</div>
			<div class="row">
				<div class="col-xl-12">
					<div class="testimonial-carousel owl-carousel owl-theme owl-nav-style-one">
						<!--Start single testimonial style1-->
						<div class="single-testimonial-style1">
							<div class="row">
								<div class="col-xl-4">
									<div class="img-box">
										<div class="bg-color"></div>
										<div class="inner">
											<img src="images/testimonial/tes-v1-1.jpg" alt="Awesome Image" />
											<div class="overlay-style-one bg1"></div>
										</div>
										<div class="quote-icon thm-bgclr1">
											<img src="images/icon/quote.png" alt="Quote" />
										</div>
									</div>
								</div>
								<div class="col-xl-8">
									<div class="text-box">
										<p>
											I had a wonderful time and a lot of fun with Yacher. The staff was especially
											friendly, the boat was great and the meals were delicious I didn’t miss
											anything. This experience gave me another perspective of Halhidiki. I will
											never forget that day and definitely I will do it again. I strongly recommend
											these guys to everyone! Best of luck to the whole crew!
										</p>
										<h3>Christine Eve <span>/ Customer</span></h3>
									</div>
								</div>
							</div>
						</div>
						<!--End single testimonial style1-->
						<!--Start single testimonial style1-->
						<div class="single-testimonial-style1">
							<div class="row">
								<div class="col-xl-4">
									<div class="img-box">
										<div class="bg-color"></div>
										<div class="inner">
											<img src="images/testimonial/tes-v1-1.jpg" alt="Awesome Image" />
											<div class="overlay-style-one bg1"></div>
										</div>
										<div class="quote-icon thm-bgclr1">
											<img src="images/icon/quote.png" alt="Quote" />
										</div>
									</div>
								</div>
								<div class="col-xl-8">
									<div class="text-box">
										<p>
											I had a wonderful time and a lot of fun with Yacher. The staff was especially
											friendly, the boat was great and the meals were delicious I didn’t miss
											anything. This experience gave me another perspective of Halhidiki. I will
											never forget that day and definitely I will do it again. I strongly recommend
											these guys to everyone! Best of luck to the whole crew!
										</p>
										<h3>Christine Eve <span>/ Customer</span></h3>
									</div>
								</div>
							</div>
						</div>
						<!--End single testimonial style1-->
					</div>
				</div>
			</div>
		</div>
	</section>
	<!--End Testimonial Area-->

	<!--Start Discover Area-->
	<section
		class="discover-area"
		style="background-image:url(images/parallax-background/discover-bg.jpg);"
	>
		<div class="icon-holder">
			<img src="images/icon/big-icon-1.png" alt="Icon" />
		</div>
		<div class="container">
			<div class="row">
				<div class="col-xl-12">
					<div class="discover-content text-center">
						<p>Best destinations available online</p>
						<h1>Yacher is a World Leading<br /> Online Yachtcharter Platform</h1>
						<div class="button">
							<a class="btn-one" href="#">Discover More</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!--End Discover Area-->

	<!--Start Benefits Area-->
	<section class="benefits-area">
		<div class="container">
			<div class="row">
				<div class="col-xl-12">
					<div class="benefits-content">
						<ul>
							<li>
								<div class="icon-holder thm_bgclr2">
									<span class="flaticon-boat-2"></span>
								</div>
								<h3>22,375 boats in the best<br /> travel destinations</h3>
							</li>
							<li>
								<div class="icon-holder thm_bgclr2">
									<span class="flaticon-stamp"></span>
								</div>
								<h3>22,375 boats in the best<br /> travel destinations</h3>
							</li>
							<li>
								<div class="icon-holder thm_bgclr2">
									<span class="flaticon-sailor"></span>
								</div>
								<h3>22,375 boats in the best<br /> travel destinations</h3>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!--End Benefits Area-->

	<!--Start Destinations Area-->
	<section class="destinations-area">
		<div class="auto-container-box">
			<div class="sec-title black text-center">
				<div class="icon"><span class="flaticon-rudder"></span></div>
				<p>Have a look at our</p>
				<div class="big-title black"><h1>Popular Destinations</h1></div>
			</div>
			<div class="row">
				<div class="col-xl-3 col-lg-6 col-md-6">
					<!--Start Single Destinations Box-->
					<div class="single-destination-box">
						<div class="img-holder">
							<div class="inner">
								<img src="images/resources/destination-1.jpg" alt="Awesome Image" />
								<div class="overlay-title">
									<h1><a href="#">Aegean Sea</a></h1>
									<p>780 Boats</p>
								</div>
							</div>
						</div>
					</div>
					<!--End Single Destinations Box-->
				</div>
				<div class="col-xl-3 col-lg-6 col-md-6">
					<!--Start Single Destinations Box-->
					<div class="single-destination-box">
						<div class="img-holder">
							<div class="inner">
								<img src="images/resources/destination-2.jpg" alt="Awesome Image" />
								<div class="overlay-title">
									<h1><a href="#">Ionian Greece</a></h1>
									<p>846 Boats</p>
								</div>
							</div>
						</div>
					</div>
					<!--End Single Destinations Box-->
				</div>
				<div class="col-xl-3 col-lg-6 col-md-6">
					<!--Start Single Destinations Box-->
					<div class="single-destination-box">
						<div class="img-holder">
							<div class="inner">
								<img src="images/resources/destination-3.jpg" alt="Awesome Image" />
								<div class="overlay-title">
									<h1><a href="#">North Europe</a></h1>
									<p>438 Boats</p>
								</div>
							</div>
						</div>
					</div>
					<!--End Single Destinations Box-->
				</div>
				<div class="col-xl-3 col-lg-6 col-md-6">
					<!--Start Single Destinations Box-->
					<div class="single-destination-box">
						<div class="img-holder">
							<div class="inner">
								<img src="images/resources/destination-4.jpg" alt="Awesome Image" />
								<div class="overlay-title">
									<h1><a href="#">Caribbean Sea</a></h1>
									<p>349 Boats</p>
								</div>
							</div>
						</div>
					</div>
					<!--End Single Destinations Box-->
				</div>
			</div>
		</div>
	</section>
	<!--End Destinations Area-->

	<!--Start Boat Area-->
	<section class="boat-area">
		<div class="container">
			<div class="row">
				<div class="col-xl-6">
					<div class="boat-content-box">
						<div class="sec-title black">
							<div class="icon"><span class="flaticon-rudder"></span></div>
							<p>Checkout all boats</p>
							<div class="big-title black"><h1>Explore Our Boat<br /> Types</h1></div>
						</div>
						<div class="inner-content-box">
							<p>
								There are many variations of passages of lorem ipsum available, but the majority
								have in some form by randomised words which don't look even slightly believable quis
								nostrud exercitation ullamco laboris nisi ut aliquip.
							</p>
							<ul>
								<li>
									<span class="flaticon-boat-2"></span>
									<h3>Sailing Boat</h3>
								</li>
								<li>
									<span class="flaticon-catamaran"></span>
									<h3>Catamaran</h3>
								</li>
								<li>
									<span class="flaticon-boat-3"></span>
									<h3>Power Boat</h3>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div class="col-xl-6">
					<div class="boat-image-box">
						<img src="images/resources/boat-image.jpg" alt="Awesome Image" />
					</div>
				</div>
			</div>
		</div>
	</section>
	<!--End Boat Area-->

	<!--Start latest blog area -->
	<section class="latest-blog-area">
		<div class="icon-holder">
			<img src="images/icon/big-icon-2.png" alt="Icon" />
		</div>
		<div class="container">
			<div class="sec-title black text-center">
				<div class="icon"><span class="flaticon-rudder"></span></div>
				<p>checkout news</p>
				<div class="big-title black"><h1>News & Articles</h1></div>
			</div>
			<div class="row">
				<!--Start single blog post-->
				<div class="col-xl-3 col-lg-6 col-md-6 col-sm-12">
					<div
						class="single-blog-post wow fadeInLeft"
						data-wow-delay="0ms"
						data-wow-duration="1500ms"
					>
						<div class="img-holder">
							<img src="images/blog/blog-v1-1.jpg" alt="Awesome Image" />
							<div class="overlay-style-one bg1"></div>
							<ul class="meta-info">
								<li><a href="#"><span class="flaticon-user-1"></span>Admin</a></li>
								<li>
									<a href="#"
										><span class="flaticon-speech-bubbles-comment-option"></span>2 Comments</a
									>
								</li>
							</ul>
						</div>
						<div class="text-holder">
							<h3 class="blog-title">
								<a href="blog-single.html">7 Days Itinerary Discovering Elba Island</a>
							</h3>
							<div class="post-date">
								<span>19 Nov, 2019</span>
							</div>
						</div>
					</div>
				</div>
				<!--End single blog post-->
				<!--Start single blog post-->
				<div class="col-xl-3 col-lg-6 col-md-6 col-sm-12">
					<div
						class="single-blog-post wow fadeInLeft"
						data-wow-delay="200ms"
						data-wow-duration="1500ms"
					>
						<div class="img-holder">
							<img src="images/blog/blog-v1-2.jpg" alt="Awesome Image" />
							<div class="overlay-style-one bg1"></div>
							<ul class="meta-info">
								<li><a href="#"><span class="flaticon-user-1"></span>Admin</a></li>
								<li>
									<a href="#"
										><span class="flaticon-speech-bubbles-comment-option"></span>2 Comments</a
									>
								</li>
							</ul>
						</div>
						<div class="text-holder">
							<h3 class="blog-title">
								<a href="blog-single.html">7 Days Itinerary Discovering Elba Island</a>
							</h3>
							<div class="post-date">
								<span>19 Nov, 2019</span>
							</div>
						</div>
					</div>
				</div>
				<!--End single blog post-->
				<!--Start single blog post-->
				<div class="col-xl-3 col-lg-6 col-md-6 col-sm-12">
					<div
						class="single-blog-post wow fadeInLeft"
						data-wow-delay="600ms"
						data-wow-duration="1500ms"
					>
						<div class="img-holder">
							<img src="images/blog/blog-v1-3.jpg" alt="Awesome Image" />
							<div class="overlay-style-one bg1"></div>
							<ul class="meta-info">
								<li><a href="#"><span class="flaticon-user-1"></span>Admin</a></li>
								<li>
									<a href="#"
										><span class="flaticon-speech-bubbles-comment-option"></span>2 Comments</a
									>
								</li>
							</ul>
						</div>
						<div class="text-holder">
							<h3 class="blog-title">
								<a href="blog-single.html">7 Days Itinerary Discovering Elba Island</a>
							</h3>
							<div class="post-date">
								<span>19 Nov, 2019</span>
							</div>
						</div>
					</div>
				</div>
				<!--End single blog post-->
				<!--Start single blog post-->
				<div class="col-xl-3 col-lg-6 col-md-6 col-sm-12">
					<div
						class="single-blog-post wow fadeInLeft"
						data-wow-delay="800ms"
						data-wow-duration="1500ms"
					>
						<div class="img-holder">
							<img src="images/blog/blog-v1-4.jpg" alt="Awesome Image" />
							<div class="overlay-style-one bg1"></div>
							<ul class="meta-info">
								<li><a href="#"><span class="flaticon-user-1"></span>Admin</a></li>
								<li>
									<a href="#"
										><span class="flaticon-speech-bubbles-comment-option"></span>2 Comments</a
									>
								</li>
							</ul>
						</div>
						<div class="text-holder">
							<h3 class="blog-title">
								<a href="blog-single.html">7 Days Itinerary Discovering Elba Island</a>
							</h3>
							<div class="post-date">
								<span>19 Nov, 2019</span>
							</div>
						</div>
					</div>
				</div>
				<!--End single blog post-->
			</div>
		</div>
	</section>
	<!--End latest blog area-->

	<!--Start Partner Area-->
	<section class="partner-area">
		<div class="container">
			<div class="row">
				<div class="col-xl-12">
					<div class="partner-box">
						<!--Start Single Partner Logo Box-->
						<div class="single-partner-logo-box">
							<a href="#"><img src="images/brand/1.png" alt="Awesome Image" /></a>
						</div>
						<!--End Single Partner Logo Box-->
						<!--Start Single Partner Logo Box-->
						<div class="single-partner-logo-box">
							<a href="#"><img src="images/brand/2.png" alt="Awesome Image" /></a>
						</div>
						<!--End Single Partner Logo Box-->
						<!--Start Single Partner Logo Box-->
						<div class="single-partner-logo-box">
							<a href="#"><img src="images/brand/3.png" alt="Awesome Image" /></a>
						</div>
						<!--End Single Partner Logo Box-->
						<!--Start Single Partner Logo Box-->
						<div class="single-partner-logo-box">
							<a href="#"><img src="images/brand/4.png" alt="Awesome Image" /></a>
						</div>
						<!--End Single Partner Logo Box-->
						<!--Start Single Partner Logo Box-->
						<div class="single-partner-logo-box">
							<a href="#"><img src="images/brand/5.png" alt="Awesome Image" /></a>
						</div>
						<!--End Single Partner Logo Box-->
					</div>
				</div>
			</div>
		</div>
	</section>
	<button class="scroll-top scroll-to-target" data-target="html">
        <span class="icon-angle"></span>
	</button>
</div>
<Footer />
