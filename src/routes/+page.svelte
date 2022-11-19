<script lang="ts">
	import { PageMeta } from '$util/meta';

	import { SOCIAL_DISCORD } from '$constants/socials';
	import { LINK_TRANSLATION_FORM, LINK_TRANSLATOR_FORM, LINK_WHITEPAPER } from '$constants/links';
</script>

<PageMeta />

<svelte:body class="m-0 p-0 stretchToScreen" />

<section class="m-0 p-0 bg-white">
	<section class="text-p-gray-700 py-4">
		<div class="container mx-auto flex py-16 px-5 md:flex-row flex-col-reverse items-center">
			<div
				class="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-3 md:text-left mb-16 md:mb-0 items-center text-center"
			>
				<div class="w-full mb-4 py-2">
					<h1 class=" font-bold font-sans text-p-bluegray-800 text-5xl">
						Making web3 accessible for all languages.
					</h1>
				</div>
				<p class="mb-8 leading-relaxed text-p-gray-700 text-lg">
					The goal of LanguageDAO is to lower language barriers in web3 by providing translation,
					interpretation, education, and advocacy.
				</p>
				<div class="flex flex-col md:flex-row justify-center  md:justify-start">
					<a
						class="mx-1 font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 uppercase text-sm text-p-white  bg-p-blue-700 shadow-lg"
						style="transition:all .15s ease"
						href={LINK_TRANSLATION_FORM}
						target="_blank"
					>
						Request a translation
					</a>
					<a
						class="mx-1 font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 uppercase text-sm  text-p-blue-800 bg-white shadow-lg"
						href={LINK_TRANSLATOR_FORM}
						target="_blank"
					>
						Become a translator
					</a>
				</div>
			</div>
			<div class="w-5/6 md:w-8/12 lg:w-6/12 xl:w-6/12 text-center">
				<img
					class="inline-flex object-cover object-center rounded-lg shadow-none"
					src="/assets/icons/languagedao-logo.svg"
					alt="LanguageDAO Logo"
				/>
			</div>
		</div>

		<div
			class="container my-5 mx-auto flex p-5 md:flex-row flex-col items-center justify-center rounded-xl bg-p-truegray-100"
		>
			<div
				class="w-full flex flex-col md:flex-row md:w-1/3 px-3 md:px-6 text-left items-center justify-center"
			>
				<div class="rounded-full shadow-lg w-24 h-24">
					<img
						class="w-24 h-24 object-cover object-center max-w-fit"
						src="/assets/icons/peopledao-logo.svg"
						alt="PeopleDAO Logo"
					/>
				</div>
				<div class="flex flex-col flex-grow text-center md:text-left">
					<div class="px-3 py-3">
						<h1 class="font-semibold mb-2 text-xl text-p-gray-800 ">A subDAO of PeopleDAO</h1>
						<p class="leading-relaxed text-p-gray-700 text-xs ">
							PeopleDAO incubated LanguageDAO. We inherit PeopleDAOs marketing reach, legitimacy,
							and human resources.
						</p>
					</div>
				</div>
			</div>
			<div
				class="w-full flex flex-col md:flex-row md:w-1/3 px-3 md:px-6 text-left items-center justify-center"
			>
				<div class="rounded-full shadow-lg w-24 h-24">
					<h1
						class="font-bold text-6xl text-p-blue-700  w-24 h-24 flex flex-col justify-center items-center"
					>
						9+
					</h1>
				</div>
				<div class="pl-4 text-center md:text-left">
					<div class="px-3 py-3">
						<h1 class="font-semibold mb-2 text-xl text-p-gray-800 ">Languages</h1>
						<p class="leading-relaxed text-p-gray-700 text-xs ">
							We can do translations in Chinese, Turkish, Vietnamese, French, Haitian Creole,
							Croatian, Portuguese, Indonesian, Burmese and growing.
						</p>
					</div>
				</div>
			</div>
			<div
				class="w-full flex flex-col md:flex-row md:w-1/3 px-3 md:px-6 text-left items-center justify-center"
			>
				<div class="rounded-full shadow-lg min-w-max h-24">
					<img
						class="w-24 h-24 object-contain object-center max-h-fit"
						src="/assets/icons/ethereum-logo.svg"
						alt="PeopleDAO Logo"
					/>
				</div>
				<div class="flex flex-col flex-grow text-center md:text-left">
					<div class="px-3 py-3">
						<h1 class="font-semibold mb-2 text-xl text-p-gray-800 ">Serving Ethereum</h1>
						<p class="leading-relaxed text-p-gray-700 text-xs ">
							Our clients include CultDAO, PizzaDAO, PeopleDAO, and PandaDAO.
						</p>
					</div>
				</div>
			</div>
		</div>

		<div class="container lg:py-16 py-4 mx-auto flex flex-col lg:flex-row items-center">
			<div class="w-full flex flex-col lg:w-1/2 px-2 items-center py-6">
				<style>
					.videoWrapper {
						width: 100%;
						min-height: 355px;
						height: 100%;
						overflow: hidden;
						position: relative;
					}
					.videoWrapper iframe {
						position: absolute;
						padding: 20px;
						top: 0;
						left: 0;
						width: 100%;
						height: 100%;
					}
				</style>
				<div class="videoWrapper w-full rounded-xl shadow-xl bg-p-truegray-100">
					<center>
						<a
							class="twitter-timeline"
							data-width="315"
							data-height="450"
							href="https://twitter.com/LanguageDAO?ref_src=twsrc%5Etfw"
							target="_blank"
						>
							Tweets by LanguageDAO</a
						>
						<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
					</center>
				</div>
				<p class="w-full text-center text-sm px-4 mt-2  text-black" />
			</div>

			<div class="w-full lg:w-1/2 px-6 lg:px-12 text-center md:text-left">
				<h6 class="w-full mb-3 font-semibold  text-black text-3xl">
					Buy translations, fund public goods
				</h6>
				<p class="w-full mb-4 text-lg  text-black">
					Our core service is translating written content like whitepapers and marketing materials.
					Additionally, we also interpret conference calls like DAO Twitter Spaces. Web3
					communication often features technical jargon and regional slang that defy automated
					translation solutions. We utilize verified translators and employ review by native
					speakers to ensure high quality.
				</p>
				<p class="w-full mb-4 text-lg  text-black">
					Revenue generated from these services funds public goods: free education promoting
					intercultural exchange, and advocacy to lower language barriers in web3. Read more in our
					whitepaper.
				</p>
				<div
					class="container mx-auto flex flex-row justify-center md:justify-start text-center py-6"
				>
					<a
						class="text-p-white font-bold px-6 py-4 rounded-full outline-none focus:outline-none mx-1 my-1 text-sm shadow hover:shadow-lg  bg-p-green-600 uppercase"
						style="transition:all .15s ease; white-space: nowrap;"
						href={LINK_WHITEPAPER}
						target="_blank"
					>
						Read our whitepaper
					</a>
					<a
						class="font-bold px-6 py-4 rounded-full outline-none focus:outline-none mx-1 my-1 text-sm whitespace-pre-line bg-p-white shadow-md text-p-green-700 uppercase"
						style="transition:all .15s ease; white-space: nowrap;"
						href={SOCIAL_DISCORD}
						target="_blank"
					>
						Join our Discord
					</a>
				</div>
			</div>
		</div>
	</section>
</section>
