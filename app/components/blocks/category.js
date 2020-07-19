import { html } from '../../../deps/react.js'
import { Link } from '../../../deps/react-router-dom.js'

let Category = ({ category }) => html`
    <style>
        .category-block {
            height: 30rem;
            background-position: center center;
            background-size: cover;
            width: 100%;
            border-radius:15px;
            position: relative;
            margin-bottom: 2rem;
            margin-top:2rem;
            display: flex;
            align-items: flex-end;
            cursor: pointer;
            box-shadow:3px 3px 10px #b1b1b1;
        }
        .category-block .title {
            backdrop-filter:blur(3px);
            border-bottom-left-radius: 15px;
            border-bottom-right-radius: 15px;
            background: rgba(50,50,50,.2);
            width: 100%;
            font-size: 2rem;
            color: #fff;
            padding: 10px;
            font-weight: 700;
            line-height: 1.1;
            margin-bottom:0;
            font-family: Montserrat,Helvetica,Arial,sans-serif;
            text-decoration: none;
        }
        .category-block:hover .title { 
            text-decoration: none;
            outline: 0;
            color: #333337;;
            transition: all .15s;
            background: rgba(250,250,250,.5);
        }
        @media (min-width: 768px) {
            .category-block {
                width: 100%;
            }       
        }
        @media (min-width: 992px) {
            .category-block {
                width: 48%;
            }
        }
    </style>
    
    <${Link}
        to=${category.uri}
        class="category-block"
        style=${{
            backgroundImage: `url(${category.image})`,
        }}
    >
        <h2 
            class="title"
            title=${category.title}
        >
            ${category.title}
        </h2>
    <//>
`

export default Category
