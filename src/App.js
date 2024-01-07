import React, { Component } from 'react'; // eslint-disable-line no-unused-vars
//import logo from './logo.svg';
import Customer from './components/Customer';
import './App.css';
// eslint-disable-next-line
import Paper from '@material-ui/core/Paper'; 
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

const style = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX:'auto'
  },
  table:{
    minWidth: 1080
  }
})

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
  'image': 'https://fastly.picsum.photos/id/48/200/300.jpg?hmac=p1L57uKWk-HOLxkodQjf0Q4BpaqgWYhEgWyGaeIpG_k ',  
  'name': '김희수',
  'birthday':'961212',
  'gender': '여자',
  'job':'대학생'

  }
]

class App extends Component {  // 그려지게 될 최소단위 
  render(){
    const { classes } = this.props;
    return(
      <paper className={classes.root}> 
        <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableRow>
        </TableHead>
        
        <TableBody>
             {customers.map(c => { return( <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} /> ); }) }
        </TableBody>
      
      </Table>



      </paper>
      
    );
  }
}

export default withStyles(style)(App);