import React, { Component } from 'react';
//import logo from './logo.svg';
import Customer from './components/Customer';
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
       {customers.map(c => { return( <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} /> ); }) }
      </div>
    );
}
}

export default App;