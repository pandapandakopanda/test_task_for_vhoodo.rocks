import * as React from 'react'
import './styles.scss'


export default class Card extends React.Component {

  capitalizeFirstLetter(string) {
    if(string === undefined) return ''
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  render(){

    const {title, text, author} = this.props

    return (
      <div className='card'>
          <div className="card-body">
            <h5 className="card-title">{this.capitalizeFirstLetter(title)}</h5>
            <p className="card-text">{this.capitalizeFirstLetter(text)}</p>
            <h6 className="card-subtitle mb-2 text-muted">{author}</h6>
        </div>
      </div>
    )
  }

}