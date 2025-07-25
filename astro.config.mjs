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
					label: 'DP Patterns',
					items: [
						{ label: 'Pattern 1', link: '/dp/group1/' },
					],
				},
				{
				label: 'Reverse Tracing Question',
				items: [
					{ label: 'Reverse Tracing Question', link: '/reversetechnique/process_string_explanation/' },
				],
				},
				{
				label: 'Rotated Array',
				items: [
					{ label: 'Approach 1', link: '/rotatedarray/approach1/' },
					{ label: 'Approach 2', link: '/rotatedarray/approach2/' },
					{ label: 'Approach 3 - No Extra Space', link: '/rotatedarray/approach3/' },

				],
				},

			],
		}),
	],
});
