import React, { Component } from 'react';
//import logo from './logo.svg';
import Customer from './src/components/Customer';
import './App.css';


const customers = [
  {
  'id':1,
  'image': 'https://fastly.picsum.photos/id/184/200/300.jpg?hmac=dCgm4a8do6DWvjUWcFvft3Kd1srf1f_TyIZoWGrgu48',  
  'name': '김천호',
  'birthday':'961212',
  'gender': '남자',
  'job':'대학생'

  },  
  {
  'id':2,
  'image': 'https://fastly.picsum.photos/id/350/200/300.jpg?hmac=lAscVz0d1YWlAi5moOrwmJ0E7KNtxtLyHkE2pq3qnh8',  
  'name': '김희수',
  'birthday':'961212',
  'gender': '여자',
  'job':'대학생'

  },
  {
  'id':3,
  'image': 'https://fastly.picsum.photos/id/350/200/300.jpg?hmac=lAscVz0d1YWlAi5moOrwmJ0E7KNtxtLyHkE2pq3qnh8 ',  
  'name': '김희수',
  'birthday':'961212',
  'gender': '여자',
  'job':'대학생'

  }
]

class App extends Component {  // 그려지게 될 최소단위 
  render(){
    return(
      <div>
        <Customer
        id={customers[0].id}
        image={customers[0].image}
        name={customers[0].name}
        birthday={customers[0].birthday}
        gender={customers[0].gender}
        job={customers[0].job}
        />
        <Customer
        id={customers[1].id}
        image={customers[1].image}
        name={customers[1].name}
        birthday={customers[1].birthday}
        gender={customers[1].gender}
        job={customers[1].job}
        />
        <Customer
        id={customers[2].id}
        image={customers[2].image}
        name={customers[2].name}
        birthday={customers[2].birthday}
        gender={customers[2].gender}
        job={customers[2].job}
        />
      </div>
      
    );
  }


}



// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Hello React Project
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
