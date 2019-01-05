import React from 'react'
import { Button } from 'semantic-ui-react'
import InputExemple from './Input'
import TableRating from './Rating'
import './stylesheets/Article.scss'



const Article = ({author, title, abstract, nature, niveauhierarchie, support, transfert, onClick}) => (
    <div className="Article">

        <div className = "Presentation">

            <div className = "Donnees" onClick={() => onClick(Article)}>
            <p>Authors: {author}</p>
            <p>Title: {title} </p>
            <p>Abstract: {abstract}</p>
            </div>

            <div className="fitting">
            {//<p>nature: {nature}</p>
            //<p>niveau de hiérarchie: {niveauhierarchie}</p>
            //<p>support: {support}</p>
            //<p>transfert: {transfert}</p>
            }
            <TableRating></TableRating>
            </div>

        </div>

        <div className="avis">
        <Button> Donnez votre avis </Button>
        <InputExemple Info ="pos reviews" Entree ="12" ></InputExemple>
        <InputExemple Info ="nèg reviews" Entree ="1" ></InputExemple>
        </div>
    </div>
)

export default Article