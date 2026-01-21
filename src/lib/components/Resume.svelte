<script>
	import "@fontsource-variable/roboto-flex/standard.css";
	import { resumeVersion } from "$lib/consts";
	import preview from "$lib/assets/Viktor-Shchelochkov-Resume-preview.jpeg?inline";
	import GlobeIcon from "@/icons/GlobeIcon.svelte";
	import GeoPinIcon from "@/icons/GeoPinIcon.svelte";
	import EmailIcon from "@/icons/EmailIcon.svelte";
	import MessageIcon from "@/icons/MessageIcon.svelte";
	import LinkedIn from "@/icons/LinkedIn.svelte";
</script>

<div
	class="fix-corner-radius-blur @container relative m-auto aspect-595/842 h-auto w-full max-w-fullsize"
>
	<div class="absolute top-0 left-0 size-full overflow-clip rounded-[4.3697479cqw]">
		<picture>
			<source srcset="/{resumeVersion}/background.avif" type="image/avif" />
			<source srcset="/{resumeVersion}/background.webp" type="image/webp" />
			<img
				src="/{resumeVersion}/background.jpeg"
				alt=""
				class="pointer-events-none absolute top-0 left-0 z-1 size-full text-[0px] backdrop-blur-sm select-none"
				loading="lazy"
				decoding="async"
				draggable="false"
			/>
		</picture>
		<img
			src={preview}
			alt=""
			class="animate-loading pointer-events-none absolute top-0 left-0 z-0 size-full"
			role="presentation"
			aria-hidden="true"
			draggable="false"
		/>
	</div>
	<div
		class="frame absolute top-0 left-0 z-1 flex size-full flex-col gap-[cqw(24)] p-[cqw(32)] pt-[cqw(88)] [&_div]:bg-foreground-soft/0"
	>
		<div class="flex h-[cqw(404)] w-full gap-[cqw(24)]">
			<div class="flex w-[cqw(761)] flex-col gap-[cqw(32)] px-[cqw(44)] py-[cqw(36)]">
				<div class="flex h-[cqw(178)] flex-col gap-[cqw(16)]">
					<div class="flex h-[cqw(110)] w-full flex-col gap-[cqw(10)]">
						<h1 class="name h-[cqw(67)] w-full fs-56 leading-[cqw(67)]">Viktor Shchelochkov</h1>
						<div class="flex h-[cqw(33)] items-center justify-between">
							<h2 class="role fs-28 font-semibold capitalize">Senior full stack web developer</h2>
							<div class="flex h-[cqw(26)] items-center gap-[cqw(10)]">
								<GeoPinIcon class="size-[cqw(16)]" />
								<span class="location pr-[cqw(6)] fs-22">Barcelona, Spain</span>
							</div>
						</div>
					</div>
					<p class="intro h-[cqw(52)] w-full fs-22 leading-[cqw(26)]">
						I’ve been creating progressive web applications that work everywhere and designing
						websites accessible for everyone for over 5 years
					</p>
				</div>
				<div class="contacts flex flex-col gap-[cqw(6)] fs-22">
					<div>
						<GlobeIcon class="size-[cqw(16)]" />
						<span>
							<a href="https://hloth.dev">hloth.dev</a>
						</span>
					</div>
					<div>
						<EmailIcon class="size-[cqw(16)]" />
						<span>
							<a href="mailto:hi@hloth.dev">hi@hloth.dev</a>
						</span>
					</div>
					<div>
						<MessageIcon class="size-[cqw(16)]" />
						<span>
							Matrix:
							<a href="https://matrix.to/#/@hloth:hloth.dev">@hloth:hloth.dev</a>
						</span>
					</div>
					<div>
						<LinkedIn class="size-[cqw(16)]" />
						<span>
							LinkedIn: <a href="https://www.linkedin.com/in/hloth/">in/hloth</a>
						</span>
					</div>
				</div>
			</div>
		</div>
		<div class="flex h-[cqw(462)] w-full flex-col gap-[cqw(24)] px-[cqw(32)] py-[cqw(28)]">
			<h2 class="section-title">Work experience</h2>
			<div
				class="work-experience-section grid h-[cqw(349)] w-full grid-flow-col grid-cols-2 grid-rows-3 gap-[cqw(16)]"
			>
				<div>
					<div>
						<h4>Business Estate Solutions, Remote</h4>
						<span>10/2025—01/2026</span>
					</div>
					<span>Senior Full Stack Developer and Leading Frontend Developer</span>
					<p>
						I designed a Telegram-integrated Svelte web app for a real estate agency that allows
						agents to manage contacts lists and share it internally, implemented contact book
						importing algorithm for both iPhone’s iOS and Android and conversational questionnaire
						for contact import via bot chat
					</p>
				</div>
				<div>
					<div>
						<h4>
							<a href="https://hloth.dev/showcase/nock-trade">Nock Trade</a>, British Virgin
							Islands, Remote
						</h4>
						<span>05/2025—09/2025</span>
					</div>
					<span>Senior Full Stack Developer and Leading Frontend Developer</span>
					<p>
						I designed a crypto exchange from scratch using SvelteKit working with BTCPayServer and
						RabbitMQ, created UI kit using shadcn/ui based on bits-ui, deployed micro services-based
						backend, custom Bitcoin signet and configured two testing environments for downtime
						updates
					</p>
				</div>
				<div>
					<div>
						<h4>
							<a href="https://hloth.dev/showcase/moreofme">Moreof.me</a>, Melbourne, Australia,
							Remote
						</h4>
						<span>10/2024—01/2025</span>
					</div>
					<span>Senior Full Stack Developer and Leading Frontend Developer</span>
					<p>
						I created a web application designed for phones, which could render videos on
						client-side, optimizing server workload, deployed scalable backend and configured
						micro‐services with GCM, implemented real-time analytics, notifications system and
						client-side video compression
					</p>
				</div>
				<div>
					<div>
						<h4><a href="https://hloth.dev/showcase/unddit">Unddit & RYO Coin</a>, Remote</h4>
						<span>01/2025—05/2025</span>
					</div>
					<span>Senior Frontend Developer</span>
					<p>
						I created a web application on Svelte to view removed posts and comments on Reddit with
						sorting, filtering and viewing logic. Also created 4 landing pages and a detailed API
						reference website for cryptocurrency RYO Coin with code examples and CURL request
						command snippets
					</p>
				</div>
				<div>
					<div>
						<h4><a href="https://hloth.dev/showcase/lufin">Freelance jobs</a></h4>
						<span>05/2022—10/2024</span>
					</div>
					<span>
						Full Stack Developer, System Administrator, Frontend Developer, Backend developer
					</span>
					<p>
						I implemented several micro frontends, analytics views based on 2M+ rows and GBs of raw
						data, charts for B2B, created a browser extension scraping pages, added AI to auto tag
						and translate content to 23 languages, which improved SEO, mentored junior developer,
						did code reviews
					</p>
				</div>
				<div>
					<div>
						<h4><a href="https://hloth.dev/showcase/jswitcher">Joom, Designers team</a>, Remote</h4>
						<span>11/2021—12/2021</span>
					</div>
					<span>Developer on contract</span>
					<p>
						I created a Figma plugin using Webpack and React that made it much easier for Joom’s
						designers to create cross-platform UI design. Implemented OAuth that connects to team’s
						self&nbsp;hosted components library, resulting in a 50% more efficient and faster layout
						designing
					</p>
				</div>
			</div>
		</div>
		<div class="flex h-[cqw(650)] w-full gap-[cqw(24)]">
			<div
				class="hard-skills-section flex w-[cqw(716)] flex-col gap-[cqw(24)] py-[cqw(28)] pr-[cqw(30)] pl-[cqw(32)]"
			>
				<h2 class="section-title">Hard skills</h2>
				<div
					class="stack grid h-[cqw(317)] w-full grid-cols-2 grid-rows-5 gap-x-[cqw(11)] gap-y-[cqw(16)] pb-[cqw(3)]"
				>
					<div>
						<h3>React & Next.js</h3>
						<p>
							Using in production for 5+ years, have in‐depth ex‐pertise with micro frontends and
							module federation
						</p>
					</div>
					<div>
						<h3>Svelte & SvelteKit</h3>
						<p>
							Strongly prefer it over React for better performance, ergonomics and DX, learned both
							Svelte 4 and 5
						</p>
					</div>
					<div>
						<h3>TailwindCSS</h3>
						<p>
							Using in frontend production for 3+ years, learned both v3 and v4, familiar with
							Tailwind Prettier plugins
						</p>
					</div>
					<div>
						<h3>Vite & Rollup</h3>
						<p>
							Implemented several Vite build-time and compile-time plugins for progressive
							enhancement in web
						</p>
					</div>
					<div>
						<h3>TypeScript</h3>
						<p>
							Always using it for JS development: Frontend, back‐end, SSR, database integrations,
							service workers
						</p>
					</div>
					<div>
						<h3>Drizzle ORM</h3>
						<p>
							Using in production for 2+ years, familiar Drizzle Studio and both Drizzle Queries and
							sql requests
						</p>
					</div>
					<div>
						<h3>PostgreSQL</h3>
						<p>
							Implemented TimescaleDB extension, full text search in 33M+ rows, speed optimization
							using indexes
						</p>
					</div>
					<div>
						<h3>MongoDB</h3>
						<p>
							Applied text search indexes, row expiration, big data indexing with 5M+ rows and
							gigabytes of raw data
						</p>
					</div>
					<div>
						<h3>Docker, Podman</h3>
						<p>
							Using orchestration for my <a href="https://hloth.dev/showcase/lufin">lufin</a> open source
							project, also used GHCR and GCR for deployment
						</p>
					</div>
					<div>
						<h3>Swift & SwiftUI</h3>
						<p>
							Pivoted into mobile development in early 2025, released a couple of macOS and iOS
							apps, widgets
						</p>
					</div>
				</div>
				<div class="claims flex h-[cqw(192)] flex-col gap-[cqw(16)]">
					<p>
						I have over 200 public repositories with free, libre, open source software on <a
							href="https://github.com/VityaSchel">my GitHub</a
						>
						mirroring my self-hosted Git server & contributed
						<a href="https://www.npmjs.com/~vityaschel">20+ packages</a> to npm and JSR registries
					</p>
					<p>
						I aim to create accessible, privacy & progressive enhanced SEO modular frontend by
						writing semantic HTML markup, accessibility media queries and ensuring color contrast
					</p>
					<p>
						I can deploy scalable applications on any machine, tech stack and runtime: Serverless,
						Edge, Bun, Deno, Node.js, Docker, Google Artifact Registry, Google Kubernetes Engine
					</p>
					<p>
						I follow DRY & KISS principles, adhere to best practices and use linters and formatters
						to write consistent code and design maintainable applications for your business
						requirements
					</p>
				</div>
			</div>
			<div class="flex w-[cqw(386)] flex-col gap-[cqw(24)]">
				<div
					class="soft-skills-section grid h-[cqw(382)] w-full grid-cols-2 grid-rows-2 gap-[cqw(2)] p-[cqw(2)]"
				>
					<p>
						I prioritize ergonomic tools for efficiency, use time-management tools and accurately
						estimate task duration thanks to my extensive experience
					</p>
					<p>
						I can explain complex technical concepts in simple terms, write clear docs, do code
						reviews, collaborate with product managers, designers and devs
					</p>
					<p>
						I have a problem-solving mindset and can identify potential vulnerabilities, edge cases,
						performance issues and find creative solutions
					</p>
					<p>
						I’m open to learning and comfortable with change, respect different perspectives and
						handle criticism but I don’t tolerate discrimination
					</p>
				</div>
				<div
					class="other-section flex h-[cqw(244)] flex-col gap-[cqw(10)] px-[cqw(26)] py-[cqw(24)]"
				>
					<div class="h-[cqw(48)]">
						<h4>High School Equivalent</h4>
						<p class="desc">
							Opted for career advancement instead of pursuing higher education, independently
							mastered IT skills
						</p>
					</div>
					<div class="h-[cqw(35)]">
						<h4>Work authorization</h4>
						<p class="desc">Authorized to work in Spain, have EU bank account</p>
					</div>
					<div class="h-[cqw(48)]">
						<h4>Honors & awards</h4>
						<p class="tight-desc">
							ITMO CYS 04/21, “Clever” IT Hackathon (gold) 11/20, “Potential” (2nd) 12/21, ITMO CYS
							IX 04/20, ITMO Open Code (diploma) 04/19
						</p>
					</div>
					<div class="h-[cqw(35)]">
						<h4>Ready to relocate</h4>
						<p class="desc">Within Spain or Western Europe</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	@reference "../../routes/layout.css";

	.fix-corner-radius-blur {
		clip-path: inset(0 round 1px);
	}

	.animate-loading {
		animation: loading 1s ease-in-out forwards infinite;
	}
	@keyframes loading {
		0% {
			filter: brightness(100%);
		}
		50% {
			filter: brightness(110%);
		}
		100% {
			filter: brightness(100%);
		}
	}

	.frame {
		font-family:
			"SF Pro",
			-apple-system,
			BlinkMacSystemFont,
			"Roboto Flex Variable",
			system-ui,
			sans-serif;

		.name {
			font-variation-settings:
				"wdth" 132,
				"wght" 760,
				"opsz" 28;
			white-space: nowrap;
			letter-spacing: -0.005em;
		}

		.role {
			/* top: 1;
			bottom: 0;
			haha funny nevermind */
			font-variation-settings:
				"wdth" 100,
				"wght" 590,
				"opsz" 28;
			letter-spacing: -0.01em;
		}

		.intro {
			font-variation-settings:
				"wdth" 100,
				"wght" 400,
				"opsz" 22;
			@apply tracking-[-0.045em] @px380:tracking-[-0.035em] @px580:tracking-[-0.01em] @px700:tracking-[0.003em] @px800:tracking-[0.009em];
		}

		.location {
			font-variation-settings:
				"wdth" 60,
				"wght" 650,
				"opsz" 22;
			letter-spacing: 0.015em;
		}

		.contacts {
			font-variation-settings:
				"wdth" 60,
				"wght" 650,
				"opsz" 22;
			letter-spacing: 0.02em;

			a {
				text-decoration: underline;
				text-underline-offset: 5%;
				text-decoration-thickness: 5%;
			}
		}
	}
	.section-title {
		@apply h-[cqw(33)] w-full fs-28 tracking-normal capitalize;
		font-variation-settings:
			"wdth" 132,
			"wght" 540,
			"opsz" 28;
		line-height: cqw(33);
		letter-spacing: -0.01em;
	}
	.contacts {
		& > div {
			@apply flex h-[cqw(26)] items-center gap-[cqw(10)];
		}
	}
	.work-experience-section {
		h4 {
			@apply fs-16 leading-[cqw(19)] font-[510] tracking-[0.0075em];
			font-variation-settings:
				"wdth" 100,
				"wght" 510,
				"opsz" 17;

			a {
				text-decoration: underline;
				text-underline-offset: 11%;
				text-decoration-thickness: 6.5%;
			}
		}
		& > div {
			@apply flex flex-col gap-[cqw(4)] p-[cqw(12)] pr-[cqw(11)];
			& > p {
				@apply fs-11 leading-[cqw(13)] tracking-[-0.045em] @px700:tracking-[-0.035em] @px880:tracking-[-0.025em] @px980:tracking-[-0.0175em] @fullsize:tracking-[-0.0054em];
			}
			& > span {
				@apply fs-12 leading-[cqw(14)] font-medium tracking-[-0.03em] italic @px700:tracking-[-0.02em] @px880:tracking-[-0.01em] @fullsize:tracking-normal;
			}
		}
		& > div > div {
			@apply flex items-center justify-between;
			& > span {
				@apply fs-14 leading-[cqw(17)] font-semibold;
				letter-spacing: 0.01em;
			}
			& + span {
				@apply mb-[cqw(2)];
			}
		}
	}
	.hard-skills-section {
		.stack div {
			@apply flex flex-col gap-[cqw(3)] pl-[cqw(52)];
			h3 {
				@apply fs-18 leading-[cqw(21)] font-bold tracking-[-0.02em] @px580:tracking-[-0.01em] @px800:tracking-[0.01em] @fullsize:tracking-[0.02em];
			}
			p {
				@apply fs-11 leading-[cqw(13)] tracking-[-0.05em] @px750:tracking-[-0.045em] @px980:tracking-[-0.03em] @fullsize:tracking-[-0.015em];
			}
		}
		.claims > p {
			@apply h-[cqw(36)] pl-[cqw(36)] fs-15 leading-[cqw(18)] tracking-[-0.06em] @px580:tracking-[-0.048em] @px750:tracking-[-0.035em] @px880:tracking-[-0.024em] @px980:tracking-[-0.0175em] @fullsize:tracking-[-0.007em];

			a {
				text-decoration: underline;
				text-underline-offset: 14.5%;
			}
		}
	}
	.soft-skills-section {
		p {
			@apply mt-auto px-[cqw(8)] pb-[cqw(12)] text-center fs-9 leading-[cqw(10)] tracking-[-0.04em] @px800:tracking-[-0.03em] @px980:tracking-[-0.02em] @fullsize:tracking-[-0.015em];
			font-variation-settings:
				"wdth" 100,
				"wght" 510,
				"opsz" 17;
		}
	}
	.other-section {
		div {
			@apply flex w-full flex-col gap-[cqw(3)];
			h4 {
				@apply pl-[cqw(21)] fs-16 leading-[cqw(19)] font-medium tracking-[-0.01em] @px580:tracking-normal @px980:tracking-[0.01em] @fullsize:tracking-[0.02em];
			}
			p {
				@apply fs-11 leading-[cqw(13)];

				&.desc {
					@apply tracking-[-0.015em];
				}
				&.tight-desc {
					@apply tracking-[-0.06em] @px700:tracking-[-0.05em] @px800:tracking-[-0.048em] @px880:tracking-[-0.042em] @px980:tracking-[-0.035em] @fullsize:tracking-[-0.025em];
				}
			}
		}
	}
</style>
