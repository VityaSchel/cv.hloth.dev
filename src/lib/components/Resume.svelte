<script>
	import { resumeVersion } from "$lib/consts";
	import preview from "$lib/assets/Viktor-Shchelochkov-Resume-preview.jpeg?inline";
	import GlobeIcon from "@/icons/GlobeIcon.svelte";
	import GeoPinIcon from "@/icons/GeoPinIcon.svelte";
	import EmailIcon from "@/icons/EmailIcon.svelte";
	import MessageIcon from "@/icons/MessageIcon.svelte";
	import LinkedIn from "@/icons/LinkedIn.svelte";
</script>

<div
	class="container-inline fix-corner-radius-blur relative m-auto aspect-595/842 h-auto w-full max-w-297.5"
>
	<div class="absolute top-0 left-0 size-full overflow-clip rounded-[4.3697479cqw]">
		<picture>
			<source srcset="/{resumeVersion}/background.avif" type="image/avif" />
			<source srcset="/{resumeVersion}/background.webp" type="image/webp" />
			<img
				src="/{resumeVersion}/background.jpeg"
				alt="Resume background"
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
		class="absolute top-0 left-0 z-1 flex h-full w-full flex-col gap-[calc(24*var(--cqw))] p-[calc(32*var(--cqw))] pt-[calc(88*var(--cqw))] [&_div]:bg-foreground-soft/20"
	>
		<div class="flex h-[calc(404*var(--cqw))] w-full gap-[calc(24*var(--cqw))]">
			<div
				class="flex w-[calc(761*var(--cqw))] flex-col gap-[calc(32*var(--cqw))] px-[calc(44*var(--cqw))] py-[calc(36*var(--cqw))]"
			>
				<div class="flex h-[calc(178*var(--cqw))] flex-col gap-[calc(16*var(--cqw))]">
					<div class="flex h-[calc(110*var(--cqw))] w-full flex-col gap-[calc(10*var(--cqw))]">
						<h1 class="h-[calc(67*var(--cqw))] w-full">Viktor Shchelochkov</h1>
						<div class="flex h-[calc(33*var(--cqw))] items-center justify-between">
							<h2>Senior full stack web developer</h2>
							<div class="flex h-[calc(26*var(--cqw))] items-center gap-[calc(10*var(--cqw))]">
								<GeoPinIcon width="16" height="16" />
								<span>Barcelona, Spain</span>
							</div>
						</div>
					</div>
					<p class="w-full">
						I’ve been creating progressive web applications that work everywhere and designing
						websites accessible for everyone for over 5 years
					</p>
				</div>
				<div
					class="flex flex-col gap-[calc(6*var(--cqw))] [&_div]:flex [&_div]:h-[calc(26*var(--cqw))] [&_div]:items-center [&_div]:gap-[calc(10*var(--cqw))]"
				>
					<div>
						<GlobeIcon width="16" height="16" />
						<a href="https://hloth.dev">hloth.dev</a>
					</div>
					<div>
						<EmailIcon width="16" height="16" />
						<a href="mailto:hi@hloth.dev">hi@hloth.dev</a>
					</div>
					<div>
						<MessageIcon width="16" height="16" />
						Matrix:
						<a href="https://matrix.to/#/@hloth:hloth.dev">@hloth:hloth.dev</a>
					</div>
					<div>
						<LinkedIn width="16" height="16" />
						LinkedIn: <a href="https://www.linkedin.com/in/hloth/">in/hloth</a>
					</div>
				</div>
			</div>
		</div>
		<div
			class="flex h-[calc(462*var(--cqw))] w-full flex-col gap-[calc(24*var(--cqw))] px-[calc(32*var(--cqw))] py-[calc(28*var(--cqw))]"
		>
			<h2 class="h-[calc(33*var(--cqw))] w-full">Work Experience</h2>
			<div
				class="grid h-[calc(349*var(--cqw))] w-full grid-cols-2 grid-rows-3 gap-[calc(16*var(--cqw))] [&>div]:flex [&>div]:flex-col [&>div]:gap-[calc(4*var(--cqw))] [&>div]:p-[calc(12*var(--cqw))] [&>div>div]:flex [&>div>div]:items-center [&>div>div]:justify-between [&>div>div+span]:mb-[calc(2*var(--cqw))]"
			>
				<div>
					<div>
						<h4>Business Estate Solutions, Remote</h4>
						<span>10/2025—01/2025</span>
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
						<h4><a href="https://hloth.dev/showcase/lufin">Freelance jobs</a></h4>
						<span>05/2022—10/2024</span>
					</div>
					<span
						>Full Stack Developer, System Administrator, Frontend Developer, Backend developer</span
					>
					<p>
						I implemented several micro frontends, analytics views based on 2M+ rows and GBs of raw
						data, charts for B2B, created a browser extension scraping pages, added AI to auto tag
						and translate content to 23 languages, which improved SEO, mentored junior developer,
						did code reviews
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
						<h4><a href="https://hloth.dev/showcase/jswitcher">Joom, Designers team</a>, Remote</h4>
						<span>11/2021—12/2021</span>
					</div>
					<span>Developer on contract</span>
					<p>
						I created a Figma plugin using Webpack and React that made it much easier for Joom’s
						designers to create cross-platform UI design. Implemented OAuth that connects to team’s
						self hosted components library, resulting in a 50% more efficient and faster layout
						designing
					</p>
				</div>
			</div>
		</div>
		<div class="flex h-[calc(650*var(--cqw))] w-full gap-[calc(24*var(--cqw))]">
			<div
				class="flex w-[calc(716*var(--cqw))] flex-col gap-[calc(24*var(--cqw))] px-[calc(32*var(--cqw))] py-[calc(28*var(--cqw))]"
			>
				<h2 class="h-[calc(33*var(--cqw))] w-full">Hard skills</h2>
				<div
					class="grid h-[calc(317*var(--cqw))] w-full grid-cols-2 grid-rows-5 gap-x-[calc(12*var(--cqw))] gap-y-[calc(16*var(--cqw))] [&_div]:flex [&_div]:flex-col [&_div]:gap-[calc(3*var(--cqw))]"
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
							Using orchestration for my lufin open source project, also used GHCR and GCR for
							deployment
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
				<div
					class="[&>p]h-[calc(36*var(--cqw))] flex h-[calc(192*var(--cqw))] flex-col gap-[calc(16*var(--cqw))] [&>p]:pl-[calc(36*var(--cqw))]"
				>
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
			<div class="flex w-[calc(386*var(--cqw))] flex-col gap-[calc(24*var(--cqw))]">
				<div
					class="grid h-[calc(382*var(--cqw))] w-full grid-cols-2 grid-rows-2 gap-[calc(2*var(--cqw))] p-[calc(2*var(--cqw))]"
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
					class="flex h-[calc(244*var(--cqw))] flex-col gap-[calc(10*var(--cqw))] px-[calc(26*var(--cqw))] py-[calc(24*var(--cqw))] [&_div]:flex [&_div]:w-full [&_div]:flex-col [&_div]:gap-[calc(3*var(--cqw))] [&_h4]:pl-[calc(21*var(--cqw))]"
				>
					<div class="h-[calc(48*var(--cqw))]">
						<h4>High School Equivalent</h4>
						<p>
							Opted for career advancement instead of pursuing higher education, independently
							mastered IT skills
						</p>
					</div>
					<div class="h-[calc(35*var(--cqw))]">
						<h4>Work authorization</h4>
						<p>Authorized to work in Spain, have EU bank account</p>
					</div>
					<div class="h-[calc(48*var(--cqw))]">
						<h4>Honors & awards</h4>
						<p>
							ITMO CYS 04/21, “Clever” IT Hackathon (gold) 11/20, “Potential” (2nd) 12/21,ITMO CYS
							IX 04/20, ITMO Open Code (diploma) 04/19
						</p>
					</div>
					<div class="h-[calc(35*var(--cqw))]">
						<h4>Ready to relocate</h4>
						<p>Within Spain or Western Europe</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
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
</style>
