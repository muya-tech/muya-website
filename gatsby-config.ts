import type { GatsbyConfig } from 'gatsby'

const config: GatsbyConfig = {
    siteMetadata: {
        title: `Focus - Build Better Software`,
        siteUrl: `https://focusconsulting.io`,
        description:
            'We help government and industry partners build human-centered, high value, and highly maintainable digital services at scale.',
    },
    // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
    // If you use VSCode you can also use the GraphQL plugin
    // Learn more at: https://gatsby.dev/graphql-typegen
    graphqlTypegen: true,
    plugins: [
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                icon: 'src/images/favicon.ico',
            },
        },
        {
            resolve: 'gatsby-plugin-google-analytics',
            options: {
                trackingId: 'UA-138306969-1',
            },
        },
        {
            resolve: '@chakra-ui/gatsby-plugin',
            options: {
                /**
                 * @property {boolean} [resetCSS=true]
                 * if false, this plugin will not use `<CSSReset />
                 */
                resetCSS: true,
                /**
                 * @property {boolean} [isUsingColorMode=true]
                 * if false, this plugin will not use <ColorModeProvider />
                 */
                isUsingColorMode: true,
            },
        },
    ],
}

export default config
