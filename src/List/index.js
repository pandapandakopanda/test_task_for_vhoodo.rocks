import * as React from 'react'
import { observer } from 'mobx-react'

import Card from '../Card'
import { isNull } from './hlp'
import search from '../assets/search.png'

import './styles.scss'


 class List extends React.Component {
  state = {
    inputValue:'',
  }

  getAuthorById = (id) => {
    const { store } = this.props
    const {users} = store
    if( users.length === 0 ) return null

    const author = users.filter((user) => user.id === id)[0]?.name 
    return isNull(author) ? null : author
  }

  showCard = (author) => {
    const {inputValue} = this.state
    return inputValue === '' || author.toLowerCase().includes(inputValue.toLocaleLowerCase())
  }

  renderCards = () => {
    const { store } = this.props
    const { posts } = store
    if ( posts.length === 0 ) return null

    return posts.map((item) => {
      const author = this.getAuthorById(item.userId)
      if(isNull(author)) return null

    return this.showCard(author) ?
      <Card text={item.body} title={item.title} author={author} key={item.id}/>
      : null
    })
  }

  onInputChange = (ev) => {
    this.setState({inputValue:ev.target.value})
  }

  render(){

    return (
      <>
        <div className='inputWrapper' >
          <div className='input-group'>
            <div className="input-group-prepend">
              <span className="input-group-text"><img src={search} alt="Logo" /></span>
            </div>
            <input 
              type="search" 
              className="form-control"
              placeholder="Filter by author..." 
              aria-label="Search"
              aria-describedby="search-addon" 
              onChange={this.onInputChange}
              value = {this.state.inputValue}
            />
          </div>
        </div>
        
        <div className='container d-flex flex-wrap'>
            {this.renderCards()}
        </div>
      </>
    )
  }

}

export default ( observer( List ) )