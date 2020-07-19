import { html, PureComponent } from '../../deps/react.js'
import { StyleSheet, css } from '../../deps/aphrodite.js'
import { connect } from '../../deps/react-redux.js'
import { bindActionCreators } from '../../deps/redux.js'

import { getLocation } from '../modules/route/selectors.js'

import Page from '../components/layout/page.js'
import DisqusCount from '../components/disqus/disqusCount.js'
import Article from '../components/blocks/article.js'
import Category from '../components/blocks/category.js'
import blocks from '../styles/blocks.js'
import resolveAsset from '../utils/resolveAsset.js'

class Home extends PureComponent {
    constructor() {
        super()
        this.setActivePanel = this.setActivePanel.bind(this)
        this.state = {
            activePanel: 'Proyectos',
        }
    }

    setActivePanel(event) {
        let panel = event.target.dataset.panel
        this.setState({
            activePanel: panel,
        })
    }

    render() {
        let { location, categories, articles } = this.props
        let { activePanel } = this.state
        return html`
            <${Page}
                title="Desarrollo"
                subtitle="Solucionamos tus problemas mecanotecnológicos"
                description="Aqui puedes encontrar los proyectos, contratos y maquinaria desarrollada por IRIS Tech."
                sidebarImage=${resolveAsset('/assets/design.gif')}
                showLinks=${true}
            >
                <div className=${css(styles.subNav)}>
                    <button
                        className=${css(
                            styles.button,
                            activePanel === 'Proyectos' && styles.buttonActive
                        )}
                        onClick=${this.setActivePanel}
                        data-panel="Proyectos"
                    >
                        Proyectos
                    </button>
                    <button
                        className=${css(
                            styles.button,
                            activePanel === 'Categorias' && styles.buttonActive
                        )}
                        onClick=${this.setActivePanel}
                        data-panel="Categorias"
                    >
                        Categorias
                    </button>
                </div>
                <div
                    className=${css(
                        styles.list,
                        activePanel === 'Proyectos' ? blocks.fadein : styles.hide
                    )}
                >
                    ${Object.values(articles).map(
                        (article) => html`
                            <${Article}
                                key=${article.id}
                                article=${article}
                                category=${categories[article.categoryId]}
                            />
                        `
                    )}
                </div>
                <div
                    className=${css(
                        styles.list,
                        activePanel === 'Categorias'
                            ? blocks.fadein
                            : styles.hide
                    )}
                >
                    ${Object.values(categories).map(
                        (category) => html`
                            <${Category}
                                key=${category.id}
                                category=${category}
                            />
                        `
                    )}
                </div>
                <${DisqusCount} />
            <//>
        `
    }
}

function mapStateToProps(state) {
    return {
        location: getLocation(state),
        categories: state.category.categories,
        articles: state.article.articles,
    }
}

function mapDispatchToProps(dispatch) {
    return Object.assign(
        bindActionCreators({}, dispatch), { dispatch })
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

let styles = StyleSheet.create({
    subNav: {
        borderBottom: 'solid 1px #f5f5f5',
        lineHeight: '3rem',
    },
    button: {
        transition : 'all 0.2s',
        borderBottom: 'solid 2px #000',
        display: 'inline-block',
        fontWeight: 700,
        marginRight: '10px',
        fontSize: '1.2rem',
        fontFamily: '"Montserrat",Helvetica,Arial,sans-serif',
        textTransform: 'uppercase',
        cursor: 'pointer',
        backgroundColor: 'transparent',
        outline: 0,
        lineHeight: '30px',
        letterSpacing: '2pt',
        textDecoration: 'none',
        color: '#b6b6b6',
        border: 'none',
        ':active': {
            borderBottom: 'solid 2px #9500ff',
            color: '#9500ff',
        },
        ':hover': {
            borderBottom: 'solid 2px #9500ff',
            color: '#9500ff',
        },
        ':focus': {
            outline: 0,
        },
    },
    buttonActive: {
        borderBottom: 'solid 2px #9500ff',
        color: '#9500ff',
    },
    list: {
        animation: 'fadein 0.15s',
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%',
        justifyContent: 'space-between',
    },

    hide: {
        position: 'absolute',
        top: '-9999px',
        left: '-9999px',
        display: 'none',
    },
})
