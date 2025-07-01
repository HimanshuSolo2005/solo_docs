// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Solo Docs',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/HimanshuSolo2005' }],
			sidebar: [
				{ label: 'Home', link: '/' },
				{
					label: 'Generative AI',
					items: [
						{ label: 'Introduction', link: '/genai/introduction/' },
						{ label: 'Environment-Setup', link: '/genai/environment-setup/' },
						{ label: 'LLM Services', link: '/genai/llm-services/' },
					],
				},


			],
		}),
	],
});
