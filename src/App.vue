<template>
	<nav class="navbar navbar-expand-lg navbar-light bg-light">
		<div class="container-fluid">
			<a class="navbar-brand" href="#">Eloria</a>
			<button
				class="navbar-toggler"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarNavAltMarkup"
				aria-controls="navbarNavAltMarkup"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
				<div class="navbar-nav">
					<router-link to="/" class="nav-link">Home</router-link>
					<router-link to="/characters" class="nav-link"
						>Characters</router-link
					>
				</div>
			</div>
		</div>
	</nav>
	<router-view></router-view>
</template>

<script>
import "./css/normalize.scss";
import "./css/carousel.scss";
import "./css/characters.sass";

export default {
	name: "App",
	components: {},
};
</script>
