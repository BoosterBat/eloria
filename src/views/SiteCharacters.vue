<template>
	<div class="container">
		<div class="row g-5">
			<div class="col-sm-12 col-xl-6 character" v-for="character in characters" :key="character.name">
				<div class="card">
					<div class="card-body">
						<div class="container">
							<div class="row character_about">
								<div class="col-4">
									<img
										v-if="character.portrait"
										:src="
											require(`@/assets/images/characters/${character.portrait}`)
										"
										class="card-img-top"
									/>
								</div>

								<div class="col-8">
									<div class="character_item">
										<div class="character_value card-title">
											{{ character.ancestry }}
										</div>
										<div class="character_key card-subtitle mb-2 text-muted">
											Volk
										</div>
										<div class="clear"></div>
									</div>

									<div class="character_item">
										<div class="character_value card-title">
											{{ character.gender }}
										</div>
										<div class="character_key card-subtitle mb-2 text-muted">
											Geschlecht
										</div>
										<div class="clear"></div>
									</div>

									<div class="character_item">
										<div class="character_value card-title">
											{{ character.age }}
										</div>
										<div class="character_key card-subtitle mb-2 text-muted">
											Alter
										</div>
										<div class="clear"></div>
									</div>

									<div class="character_item">
										<div class="character_value card-title">
											{{ character.class }}
										</div>
										<div class="character_key card-subtitle mb-2 text-muted">
											Klasse
										</div>
										<div class="clear"></div>
									</div>

									<div class="character_item">
										<div class="character_value card-title">
											{{ character.languages }}
										</div>
										<div class="character_key card-subtitle mb-2 text-muted">
											Sprachen
										</div>
										<div class="clear"></div>
									</div>
								</div>
							</div>

							<div class="row">
								<div class="character_item col-2">
									<div class="character_value card-title">
										{{ character.level }}
									</div>
									<div class="character_key card-subtitle mb-2 text-muted">
										Level
									</div>
									<div class="clear"></div>
								</div>

								<div class="character_item col-2">
									<div class="character_value card-title">
										{{ character.hit_points }}
									</div>
									<div class="character_key card-subtitle mb-2 text-muted">
										Lebenspunkte
									</div>
									<div class="clear"></div>
								</div>

								<div class="character_item col-2">
									<div class="character_value card-title">
										{{ character.armor_class }}
									</div>
									<div class="character_key card-subtitle mb-2 text-muted">
										Rüstungsklasse
									</div>
									<div class="clear"></div>
								</div>

								<div class="character_item col-2">
									<div class="character_value card-title">
										{{ character.shield }}
									</div>
									<div class="character_key card-subtitle mb-2 text-muted">
										Schild
									</div>
									<div class="clear"></div>
								</div>

								<div class="character_item col-2">
									<div class="character_value card-title">
										{{ character.class_dc }}
									</div>
									<div class="character_key card-subtitle mb-2 text-muted">
										Class DC
									</div>
									<div class="clear"></div>
								</div>

								<div class="character_item col-2">
									<div class="character_value card-title">
										{{ character.perception }}
									</div>
									<div class="character_key card-subtitle mb-2 text-muted">
										Perception
									</div>
									<div class="clear"></div>
								</div>

								<div class="character_headline">Rettungswürfe</div>

								<div class="character_item col-4">
									<div class="character_value card-title">
										{{ character.fortitude }}
									</div>
									<div class="character_key card-subtitle mb-2 text-muted">
										Fortitude
									</div>
									<div class="clear"></div>
								</div>

								<div class="character_item col-4">
									<div class="character_value card-title">
										{{ character.reflex }}
									</div>
									<div class="character_key card-subtitle mb-2 text-muted">
										Reflex
									</div>
									<div class="clear"></div>
								</div>

								<div class="character_item col-4">
									<div class="character_value card-title">
										{{ character.will }}
									</div>
									<div class="character_key card-subtitle mb-2 text-muted">
										Wille
									</div>
									<div class="clear"></div>
								</div>

								<div class="character_headline">Stats</div>

								<div class="character_item col-3">
									<div class="character_value card-title">
										{{ character.strength }}
									</div>
									<div class="character_key card-subtitle mb-2 text-muted">
										Stärke
									</div>
									<div class="clear"></div>
								</div>

								<div class="character_item col-3">
									<div class="character_value card-title">
										{{ character.dexterity }}
									</div>
									<div class="character_key card-subtitle mb-2 text-muted">
										Geschicklichkeit
									</div>
									<div class="clear"></div>
								</div>

								<div class="character_item col-3">
									<div class="character_value card-title">
										{{ character.constitution }}
									</div>
									<div class="character_key card-subtitle mb-2 text-muted">
										Verfassung
									</div>
									<div class="clear"></div>
								</div>

								<div class="character_item col-3">
									<div class="character_value card-title">
										{{ character.intelligence }}
									</div>
									<div class="character_key card-subtitle mb-2 text-muted">
										Intelligenz
									</div>
									<div class="clear"></div>
								</div>

								<div class="character_item col-3">
									<div class="character_value card-title">
										{{ character.wisdom }}
									</div>
									<div class="character_key card-subtitle mb-2 text-muted">
										Weisheit
									</div>
									<div class="clear"></div>
								</div>

								<div class="character_item col-3">
									<div class="character_value card-title">
										{{ character.charisma }}
									</div>
									<div class="character_key card-subtitle mb-2 text-muted">
										Charisma
									</div>
									<div class="clear"></div>
								</div>

								<div class="character_headline">Skills</div>

								<div class="character_item col-3">
									<div class="character_value card-title">
										{{ character.acrobatics }}
									</div>
									<div class="character_key card-subtitle mb-2 text-muted">
										Akrobatik
									</div>
									<div class="clear"></div>
								</div>

								<div class="character_item col-3">
									<div class="character_value card-title">
										{{ character.arcana }}
									</div>
									<div class="character_key card-subtitle mb-2 text-muted">
										Arkanes
									</div>
									<div class="clear"></div>
								</div>

								<div class="character_item col-3">
									<div class="character_value card-title">
										{{ character.athletics }}
									</div>
									<div class="character_key card-subtitle mb-2 text-muted">
										Athletik
									</div>
									<div class="clear"></div>
								</div>

								<div class="character_item col-3">
									<div class="character_value card-title">
										{{ character.crafting }}
									</div>
									<div class="character_key card-subtitle mb-2 text-muted">
										Crafting
									</div>
									<div class="clear"></div>
								</div>

								<div class="character_item col-3">
									<div class="character_value card-title">
										{{ character.deception }}
									</div>
									<div class="character_key card-subtitle mb-2 text-muted">
										Täuschung
									</div>
									<div class="clear"></div>
								</div>

								<div class="character_item col-3">
									<div class="character_value card-title">
										{{ character.diplomacy }}
									</div>
									<div class="character_key card-subtitle mb-2 text-muted">
										Diplomatie
									</div>
									<div class="clear"></div>
								</div>

								<div class="character_item col-3">
									<div class="character_value card-title">
										{{ character.intimidation }}
									</div>
									<div class="character_key card-subtitle mb-2 text-muted">
										Einschüchterung
									</div>
									<div class="clear"></div>
								</div>

								<div class="character_item col-3">
									<div class="character_value card-title">
										{{ character.medicine }}
									</div>
									<div class="character_key card-subtitle mb-2 text-muted">
										Medizin
									</div>
									<div class="clear"></div>
								</div>

								<div class="character_item col-3">
									<div class="character_value card-title">
										{{ character.nature }}
									</div>
									<div class="character_key card-subtitle mb-2 text-muted">
										Natur
									</div>
									<div class="clear"></div>
								</div>

								<div class="character_item col-3">
									<div class="character_value card-title">
										{{ character.occultism }}
									</div>
									<div class="character_key card-subtitle mb-2 text-muted">
										Okkultismus
									</div>
									<div class="clear"></div>
								</div>

								<div class="character_item col-3">
									<div class="character_value card-title">
										{{ character.performance }}
									</div>
									<div class="character_key card-subtitle mb-2 text-muted">
										Performance
									</div>
									<div class="clear"></div>
								</div>

								<div class="character_item col-3">
									<div class="character_value card-title">
										{{ character.religion }}
									</div>
									<div class="character_key card-subtitle mb-2 text-muted">
										Religion
									</div>
									<div class="clear"></div>
								</div>

								<div class="character_item col-3">
									<div class="character_value card-title">
										{{ character.society }}
									</div>
									<div class="character_key card-subtitle mb-2 text-muted">
										Society
									</div>
									<div class="clear"></div>
								</div>

								<div class="character_item col-3">
									<div class="character_value card-title">
										{{ character.stealth }}
									</div>
									<div class="character_key card-subtitle mb-2 text-muted">
										Schleichen
									</div>
									<div class="clear"></div>
								</div>

								<div class="character_item col-3">
									<div class="character_value card-title">
										{{ character.survival }}
									</div>
									<div class="character_key card-subtitle mb-2 text-muted">
										Survival
									</div>
									<div class="clear"></div>
								</div>

								<div class="character_item col-3">
									<div class="character_value card-title">
										{{ character.thievery }}
									</div>
									<div class="character_key card-subtitle mb-2 text-muted">
										Diebstahl
									</div>
									<div class="clear"></div>
								</div>

								<div class="character_item col-3" v-if="character.lore_name">
									<div class="character_value card-title">
										{{ character.lore_value }}
									</div>
									<div class="character_key card-subtitle mb-2 text-muted">
										Lore {{ character.lore_name }}
									</div>
									<div class="clear"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- <div v-for="character in characters" :key="character.name">
    <h2>{{ character.name }}</h2>
  </div> -->

	<!-- <carousel :items-to-show="2" :wrapAround="true">
		<slide v-for="character in characters" :key="character.name">
			<div class="carousel__item carousel_characters card">

				<div class="card-body">
					<div class="container">

						<div class="row character_about">
							<div class="col-4">
								<img
									v-if="character.portrait"
									:src="
										require(`@/assets/images/characters/${character.portrait}`)
									"
									class="card-img-top"
								/>
							</div>

							<div class="col-8">
								<div class="character_item">
									<div class="character_value card-title">
										{{ character.ancestry }}
									</div>
									<div class="character_key card-subtitle mb-2 text-muted">
										Volk
									</div>
									<div class="clear"></div>
								</div>

								<div class="character_item">
									<div class="character_value card-title">
										{{ character.gender }}
									</div>
									<div class="character_key card-subtitle mb-2 text-muted">
										Geschlecht
									</div>
									<div class="clear"></div>
								</div>

								<div class="character_item">
									<div class="character_value card-title">
										{{ character.age }}
									</div>
									<div class="character_key card-subtitle mb-2 text-muted">
										Alter
									</div>
									<div class="clear"></div>
								</div>

								<div class="character_item">
									<div class="character_value card-title">
										{{ character.class }}
									</div>
									<div class="character_key card-subtitle mb-2 text-muted">
										Klasse
									</div>
									<div class="clear"></div>
								</div>

								<div class="character_item">
									<div class="character_value card-title">
										{{ character.languages }}
									</div>
									<div class="character_key card-subtitle mb-2 text-muted">
										Sprachen
									</div>
									<div class="clear"></div>
								</div>
							</div>
            </div>

            <div class="row">
							<div class="character_item col-2">
								<div class="character_value card-title">
									{{ character.level }}
								</div>
								<div class="character_key card-subtitle mb-2 text-muted">
									Level
								</div>
								<div class="clear"></div>
							</div>

							<div class="character_item col-2">
								<div class="character_value card-title">
									{{ character.hit_points }}
								</div>
								<div class="character_key card-subtitle mb-2 text-muted">
									Lebenspunkte
								</div>
								<div class="clear"></div>
							</div>

							<div class="character_item col-2">
								<div class="character_value card-title">
									{{ character.armor_class }}
								</div>
								<div class="character_key card-subtitle mb-2 text-muted">
									Rüstungsklasse
								</div>
								<div class="clear"></div>
							</div>

							<div class="character_item col-2">
								<div class="character_value card-title">
									{{ character.shield }}
								</div>
								<div class="character_key card-subtitle mb-2 text-muted">
									Schild
								</div>
								<div class="clear"></div>
							</div>

							<div class="character_item col-2">
								<div class="character_value card-title">
									{{ character.class_dc }}
								</div>
								<div class="character_key card-subtitle mb-2 text-muted">
									Class DC
								</div>
								<div class="clear"></div>
							</div>

							<div class="character_item col-2">
								<div class="character_value card-title">
									{{ character.perception }}
								</div>
								<div class="character_key card-subtitle mb-2 text-muted">
									Perception
								</div>
								<div class="clear"></div>
							</div>

							<div class="character_headline">Rettungswürfe</div>

							<div class="character_item col-4">
								<div class="character_value card-title">
									{{ character.fortitude }}
								</div>
								<div class="character_key card-subtitle mb-2 text-muted">
									Fortitude
								</div>
								<div class="clear"></div>
							</div>

							<div class="character_item col-4">
								<div class="character_value card-title">
									{{ character.reflex }}
								</div>
								<div class="character_key card-subtitle mb-2 text-muted">
									Reflex
								</div>
								<div class="clear"></div>
							</div>

							<div class="character_item col-4">
								<div class="character_value card-title">
									{{ character.will }}
								</div>
								<div class="character_key card-subtitle mb-2 text-muted">
									Wille
								</div>
								<div class="clear"></div>
							</div>

							<div class="character_headline">Stats</div>

							<div class="character_item col-3">
								<div class="character_value card-title">
									{{ character.strength }}
								</div>
								<div class="character_key card-subtitle mb-2 text-muted">
									Stärke
								</div>
								<div class="clear"></div>
							</div>

							<div class="character_item col-3">
								<div class="character_value card-title">
									{{ character.dexterity }}
								</div>
								<div class="character_key card-subtitle mb-2 text-muted">
									Geschicklichkeit
								</div>
								<div class="clear"></div>
							</div>

							<div class="character_item col-3">
								<div class="character_value card-title">
									{{ character.constitution }}
								</div>
								<div class="character_key card-subtitle mb-2 text-muted">
									Verfassung
								</div>
								<div class="clear"></div>
							</div>

							<div class="character_item col-3">
								<div class="character_value card-title">
									{{ character.intelligence }}
								</div>
								<div class="character_key card-subtitle mb-2 text-muted">
									Intelligenz
								</div>
								<div class="clear"></div>
							</div>

							<div class="character_item col-3">
								<div class="character_value card-title">
									{{ character.wisdom }}
								</div>
								<div class="character_key card-subtitle mb-2 text-muted">
									Weisheit
								</div>
								<div class="clear"></div>
							</div>

							<div class="character_item col-3">
								<div class="character_value card-title">
									{{ character.charisma }}
								</div>
								<div class="character_key card-subtitle mb-2 text-muted">
									Charisma
								</div>
								<div class="clear"></div>
							</div>

							<div class="character_headline">Skills</div>

							<div class="character_item col-3">
								<div class="character_value card-title">
									{{ character.acrobatics }}
								</div>
								<div class="character_key card-subtitle mb-2 text-muted">
									Akrobatik
								</div>
								<div class="clear"></div>
							</div>

							<div class="character_item col-3">
								<div class="character_value card-title">
									{{ character.arcana }}
								</div>
								<div class="character_key card-subtitle mb-2 text-muted">
									Arkanes
								</div>
								<div class="clear"></div>
							</div>

							<div class="character_item col-3">
								<div class="character_value card-title">
									{{ character.athletics }}
								</div>
								<div class="character_key card-subtitle mb-2 text-muted">
									Athletik
								</div>
								<div class="clear"></div>
							</div>

							<div class="character_item col-3">
								<div class="character_value card-title">
									{{ character.crafting }}
								</div>
								<div class="character_key card-subtitle mb-2 text-muted">
									Crafting
								</div>
								<div class="clear"></div>
							</div>

							<div class="character_item col-3">
								<div class="character_value card-title">
									{{ character.deception }}
								</div>
								<div class="character_key card-subtitle mb-2 text-muted">
									Täuschung
								</div>
								<div class="clear"></div>
							</div>

							<div class="character_item col-3">
								<div class="character_value card-title">
									{{ character.diplomacy }}
								</div>
								<div class="character_key card-subtitle mb-2 text-muted">
									Diplomatie
								</div>
								<div class="clear"></div>
							</div>

							<div class="character_item col-3">
								<div class="character_value card-title">
									{{ character.intimidation }}
								</div>
								<div class="character_key card-subtitle mb-2 text-muted">
									Einschüchterung
								</div>
								<div class="clear"></div>
							</div>

							<div class="character_item col-3">
								<div class="character_value card-title">
									{{ character.medicine }}
								</div>
								<div class="character_key card-subtitle mb-2 text-muted">
									Medizin
								</div>
								<div class="clear"></div>
							</div>

							<div class="character_item col-3">
								<div class="character_value card-title">
									{{ character.nature }}
								</div>
								<div class="character_key card-subtitle mb-2 text-muted">
									Natur
								</div>
								<div class="clear"></div>
							</div>

							<div class="character_item col-3">
								<div class="character_value card-title">
									{{ character.occultism }}
								</div>
								<div class="character_key card-subtitle mb-2 text-muted">
									Okkultismus
								</div>
								<div class="clear"></div>
							</div>

							<div class="character_item col-3">
								<div class="character_value card-title">
									{{ character.performance }}
								</div>
								<div class="character_key card-subtitle mb-2 text-muted">
									Performance
								</div>
								<div class="clear"></div>
							</div>

							<div class="character_item col-3">
								<div class="character_value card-title">
									{{ character.religion }}
								</div>
								<div class="character_key card-subtitle mb-2 text-muted">
									Religion
								</div>
								<div class="clear"></div>
							</div>

							<div class="character_item col-3">
								<div class="character_value card-title">
									{{ character.society }}
								</div>
								<div class="character_key card-subtitle mb-2 text-muted">
									Society
								</div>
								<div class="clear"></div>
							</div>

							<div class="character_item col-3">
								<div class="character_value card-title">
									{{ character.stealth }}
								</div>
								<div class="character_key card-subtitle mb-2 text-muted">
									Schleichen
								</div>
								<div class="clear"></div>
							</div>

							<div class="character_item col-3">
								<div class="character_value card-title">
									{{ character.survival }}
								</div>
								<div class="character_key card-subtitle mb-2 text-muted">
									Survival
								</div>
								<div class="clear"></div>
							</div>

							<div class="character_item col-3">
								<div class="character_value card-title">
									{{ character.thievery }}
								</div>
								<div class="character_key card-subtitle mb-2 text-muted">
									Diebstahl
								</div>
								<div class="clear"></div>
							</div>

							<div class="character_item col-3" v-if="character.lore_name">
								<div class="character_value card-title">
									{{ character.lore_value }}
								</div>
								<div class="character_key card-subtitle mb-2 text-muted">
									Lore {{ character.lore_name }}
								</div>
								<div class="clear"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</slide>

		<template #addons>
			<navigation />
			<pagination />
		</template>
	</carousel> -->
</template>

<script>
import characters from "../characters.json";
// import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
// import "vue3-carousel/dist/carousel.css";

export default {
	name: "App",
	components: {
		// Carousel,
		// Slide,
		// Pagination,
		// Navigation,
	},
	data() {
		return {
			characters: characters,
		};
	},
};
</script>