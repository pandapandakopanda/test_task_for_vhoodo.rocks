import { action, makeObservable, observable } from 'mobx'

export default class Store {

  posts = []
  users = []

  constructor( ) {
    makeObservable( this, {
      setUsers: action,
      setPosts: action,
      posts: observable,
      users: observable
    } )

    this.init()
  }

  fetchUsers(){
    fetch("http://jsonplaceholder.typicode.com/users")
    .then((resp) => {
      if(!resp.ok) {
        throw new Error(resp.status)
      }
     return resp.json()
    }).then((json) => {
      this.setUsers(json)
    })
  }

  fetchPosts(){
    fetch("http://jsonplaceholder.typicode.com/posts")
    .then((resp) => {
      if(!resp.ok) {
        throw new Error(resp.status)
      }
     return resp.json()
    }).then((json) => {
      this.setPosts(json)
    })
  }

  setUsers = (users) => {
    this.users = users
  }

  setPosts = (posts) => {
    this.posts = posts
  }

  init(){
    this.fetchPosts()
    this.fetchUsers()
  }

}