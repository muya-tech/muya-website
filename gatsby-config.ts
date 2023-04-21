import type { GatsbyConfig } from 'gatsby'

const config: GatsbyConfig = {
    siteMetadata: {
        title: `Muya - Digital Talent for the Future`,
        siteUrl: `https://muyatechnology.com`,
        description:
            'Helping create the technology talent for the future of work.',
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
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'pages',
                path: './src/pages/',
            },
        },
        `gatsby-transformer-gitinfo`,
        {
            resolve: 'gatsby-plugin-sitemap',
            options: {
                query: `{
                    site {
                      siteMetadata {
                        siteUrl
                      }
                    }
                    allSitePage {
                      nodes {
                        path
                      }
                    }
                    allFile(filter: {sourceInstanceName: {eq: "pages"}}) {
                      edges {
                        node {
                          fields {
                            gitLogLatestDate
                          }
                          name
                        }
                      }
                    }
                  }`,
                resolvePages: ({
                    allSitePage: { nodes: sitePages },
                    allFile: { edges: pageFiles },
                }) => {
                    return sitePages.map((page) => {
                        const pageFile = pageFiles.find(({ node }) => {
                            const fileName =
                                node.name === 'index' ? '/' : `/${node.name}/`
                            return page.path === fileName
                        })

                        return { ...page, ...pageFile?.node?.fields }
                    })
                },
                serialize: ({ path, gitLogLatestDate }) => {
                    return {
                        url: path,
                        lastmod: gitLogLatestDate,
                    }
                },
            },
        },
    ],
}

export default config
