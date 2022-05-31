import React, { Component } from 'react'

export default class Tutor extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      count: 0
    }
  }

  render() {
    return (
      <div>
          Count {this.state.count}
      </div>
    )
  }
}

// import React, {useState} from 'react'


// const Tutor = () => {
//     const [handle, setHandle] = useState(second)


//   return (
//     <div>
//         <button>Decrease</button>
//         <p>Count 0</p>
//         <button>Increase</button>
//     </div>
//   )
// }

// export default Tutor
// import React, { Component } from 'react'

// export default class Tutor extends Component {

//     constructor() {
//         super() 
//         this.state = {
//             message: 'Welcome Visitors'
//         }
//     }

//     changeMessage() {
//         this.setState({
//             message: 'Thank you for subscribing'
//         })
//     }

//   render() {
//     return (
//       <div>
//           {this.state.message}
//           <button onClick={() => this.changeMessage()}>Subscribe</button>
//      </div>
//     )
//   }
// }
