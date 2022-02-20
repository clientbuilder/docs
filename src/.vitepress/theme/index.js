import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import NotFound from './NotFound.vue'
import './styles/variables.css'
import './styles/base.css'

const theme = {
    ...DefaultTheme,
    Layout,
    NotFound,
    enhanceApp({ app, router, siteData }) {
    }
}

export default theme
