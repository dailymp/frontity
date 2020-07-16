const settings = {
	name: 'daytypescript',
	state: {
		frontity: {
			url: 'https://test.frontity.org',
			title: 'Test Frontity Blog',
			description: 'WordPress installation for Frontity development'
		}
	},
	packages: [
		{
			name: '@frontity/frontity-org-theme',
			state: {
				theme: {
					featured: {
						showOnList: false,
						showOnPost: false
					}
				}
			}
		},
		{
			name: '@frontity/wp-source',
			state: {
				source: {
					api: 'https://frontity.org/wp-json/wp/v2'
				}
			}
		},
		'@frontity/tiny-router',
		'@frontity/html2react'
	]
};

export default settings;
