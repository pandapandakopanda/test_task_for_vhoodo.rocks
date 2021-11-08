import * as React from 'react'
import './styles.scss'
import ctrl from'./ctrl'
import Card from '../Card'



export default class List extends React.Component {
  state = {
    inputValue:'',
  }

  getAuthorById = (id) => {
    const {users} = ctrl
    return users.filter((user) => user.id === id)[0].name
  }

  getCards = () => {
    const {inputValue} = this.state
    const { posts } = ctrl
    posts.length = 10
    return posts.map((item) => {
      const author = this.getAuthorById(item.id)
      if (inputValue === '' || author.toLowerCase().includes(inputValue)){
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
        <div className='inputWrapper'>
          <input 
            type="search" 
            className="form-control rounded"
            placeholder="Search" 
            aria-label="Search"
            aria-describedby="search-addon" 
            onChange={this.onInputChange}
            value = {this.inputValue}
          />
        </div>
        <div className='container'>
          <div className='cardsWrapper'>
            {cards}
          </div>
        </div>
      </>
    )
  }




}