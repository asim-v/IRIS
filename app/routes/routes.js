import React from '../../deps/react.js'

import Article from './article.js'
import Category from './category.js'

import About from './about.js'
import Contact from './contact.js'
import Home from './home.js'

import NoMatch from '../modules/main/containers/noMatch.js'

export default [
    {
        path: '/blog',
        component: Home,
        exact: true,
    },
    {
        path: '/articles/:articleId/:slug',
        component: Article,
    },
    {
        path: '/categories/:categoryId',
        component: Category,
    },
    {
        path: '/about',
        component: About,
        exact: true,
    },
    {
        path: '/contact',
        component: Contact,
        exact: true,
    }
]
