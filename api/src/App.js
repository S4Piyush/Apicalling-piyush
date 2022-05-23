import logo from './logo.svg';

import {useEffect,useState,} from 'react';
import Header from './Header';
import Main from './Main';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Card , Row , Col} from 'react-bootstrap';
import './App.css';
const axios = require('axios')










function App() {

  let [charter,setcharter] = useState([]);


 useEffect(()=>{

   axios.get('https://rickandmortyapi.com/api/character')
   .then(function (response) {
       
      console.log(response.data.results);
      setcharter(response.data.results);
     })
   .catch(function (error) {
       // handle error
     console.log(error);
   })
 },[]);
 return (
   <div className="App">

     <Header/>
    <Main/>
     
          <Row>
           {

             charter.map((item,i)=>{
               return(
                 
                 <div className='col-6'>

              <Card >
              
                <Row className='align-items-center'>
                  <Col xs={'6'}>
                  <img src={item.image}></img>
                  </Col>
                  <Col xs={'6'}>
                  <Card.Body>
                  <Card.Text>
                   <p><span className='card_title'>NAME</span>:{item.name}</p>
                   <p><span className='card_title'>Status</span>Status:{item.status}</p>
                   <p><span  className='card_title'>Location</span>:{item.location.name}</p>
                   <p><span   className="card_title">Gender</span>:{item.gender}</p>
                  </Card.Text>
                </Card.Body>
                  </Col>
                </Row>
              </Card>         





                </div>

                  
            

                //  <div key={i}>
                //        <img src={item.image}></img>
                //        <h1>Name : {item.name}</h1>
                //        <p>Status: {item.status}</p>
                //        <p>Location : {item.location.name}</p>
                //        <p>Gender : {item.gender}</p>
                       
                //  </div>
               )
             })
           }
           </Row>


  <div class="container">
  <footer class="py-3 my-4"  >
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Home</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Features</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Pricing</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">FAQs</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">About</a></li>
    </ul>
    <p class="text-center text-muted">&copy; 2021 Company, Inc</p>
  </footer>
</div>

   </div>
 );
}

export default App;
