class Ctrl {

  posts = []
  users = []

  constructor() {
    this.init()
  }

  fetchUsers = () => {
    fetch("http://jsonplaceholder.typicode.com/users")
    .then((resp) => {
      if(resp.hasErr) {
        console.log('Error occured');
        return
      }
     return resp.json()
    }).then((json) => {
      this.users = json
    })
  }

  fetchPosts = () => {
    fetch("http://jsonplaceholder.typicode.com/posts")
    .then((resp) => {
      if(resp.hasErr) {
        console.log('Error occured');
        return
      }
     return resp.json()
    }).then((json) => {
      this.posts = json
    })
  }

  getUser = () => {
    return this.users
  }

  getPosts = () => {
    return this.posts
  }

  init(){
    this.fetchPosts()
    this.fetchUsers()
  }

}

const ctrl = new Ctrl()

export default ctrl