import React, { ReactNode } from 'react'

import { useSiteMetadata } from '../hooks/use-site-metadata'

type IPropsSeo = {
    title?: string
    description?: string
    pathname?: string
    children?: ReactNode
}

export const SEO = ({ title, description, pathname, children }: IPropsSeo) => {
    const {
        title: defaultTitle,
        description: defaultDescription,
        siteUrl,
    } = useSiteMetadata()

    const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        url: `${siteUrl}${pathname || ``}`,
    }

    return (
        <>
            <title>{seo.title}</title>
            <meta name="description" content={seo.description} />
            <meta name="twitter:title" content={seo.title} />
            <meta name="twitter:url" content={seo.url} />
            <meta name="twitter:description" content={seo.description} />
            {children}
        </>
    )
}
