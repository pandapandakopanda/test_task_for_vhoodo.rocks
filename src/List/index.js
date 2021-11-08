import * as React from 'react'
import { observer } from 'mobx-react'

import ctrl from'./ctrl'
import Card from '../Card'
import search from '../assets/search.png'

import './styles.scss'


 class List extends React.Component {
  state = {
    inputValue:'',
  }

  getAuthorById = (id) => {
    const {users} = ctrl
    if(users.length === 0) return null

    const author = users.filter((user) => user.id === id)[0]?.name
    return author === undefined ? '' : author
  }

  getCards = () => {
    const {inputValue} = this.state
    const { posts } = ctrl
    if ( posts.length === 0 ) return null

    return posts.map((item) => {
      const author = this.getAuthorById(item.userId)
      if (inputValue === '' || author.toLowerCase().includes(inputValue.toLocaleLowerCase())){
        return <Card text={item.body} title={item.title} author={author} key = {item.id}/>
      } else return null
    })
  }

  onInputChange = (ev) => {
    this.setState({inputValue:ev.target.value})
  }

  render(){

    const cards = this.getCards()

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
            {cards}
        </div>
      </>
    )
  }

}

export default ( observer( List ) )