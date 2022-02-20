module.exports = {
    lang: 'en-US',
    title: 'Client Builder Documentation',
    description: 'Next level productivity tool',
    head: [
        ['link', { rel: 'icon', type: 'image/x-icon', href: '_assets/favicons/favicon.ico' }],
        ['link', { rel: 'icon', type: 'image/png', href: '_assets/favicons/32x32.png' }],
        ['link', { rel: 'apple-touch-icon', href: '_assets/favicons/200x200.png' }],
        ['meta', { property: 'og:type', content: 'website' }],
        ['meta', { property: 'og:url', content: 'https://clientbuilder.dev/' }],
        ['meta', { property: 'og:image', content: 'https://clientbuilder.dev/_assets/images/logo-bg.jpg' }],
        ['meta', { property: 'og:image:alt', content: 'Client Builder Docs' }]
    ],
    themeConfig: {
        logo: '/_assets/images/logo.svg',
        repo: 'clientbuilder/clientbuilder',
        nav: [
            {
                text: 'Client Builder',
                link: 'https://clientbuilder.dev/'
            },
            {
                text: 'NuGet',
                link: 'https://www.nuget.org/packages/ClientBuilder/'
            }
        ],
        sidebar: [
            {
                text: 'Introduction',
                children: [
                    { text: 'What is Client Builder?', link: '/' },
                    { text: 'Getting Started', link: '/guide/getting-started' },
                    { text: 'Configuration', link: '/guide/configuration' },
                    { text: 'Generation', link: '/guide/generation' }
                ]
            },
            {
                text: 'Scaffold Modules',
                children: [
                    { text: 'Definition', link: '/scaffold-modules/definition' },
                    { text: 'Setup', link: '/scaffold-modules/setup' },
                    { text: 'File Templates', link: '/scaffold-modules/file-templates' },
                    { text: 'Source Data', link: '/scaffold-modules/source-data' }
                ]
            },
            {
                text: 'Assembly Scanning',
                children: [
                    { text: 'Ways To Implement', link: '/assembly-scanning/ways-to-implement' },
                    { text: 'Built-in Tools', link: '/assembly-scanning/built-in-tools' },
                    { text: 'Type Descriptions', link: '/assembly-scanning/type-descriptions' }
                ]
            }
        ]
    },
}
