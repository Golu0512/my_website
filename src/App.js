import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './pages/Header';
import Home from './pages/Home.js';
import About from './pages/About';
import Footer from './pages/Footer';
import DownloadAnime from './pages/DownloadAnime';
// import { useEffect, useState } from 'react';
// import axios from 'axios';

function App() {

  // const [inputVal, setInputVal] = useState();
  // const [data, setData] = useState([]);

  // const handleInput = (e) => {
  //   const {name, value} = e.target;
  //   setInputVal({...inputVal,[name]: value});
  // }

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const res = await fetch('http://localhost:8080/demo', {
  //     method: 'POST',
  //     body:JSON.stringify(inputVal),
  //     headers: {'Content-Type': 'application/json'}
  //   })

  //   console.log('data save in database', await res.json());

  //   // const data = await res.json();
  //   // console.log(data);
  // }

  // const getData = async () => {
  //   const res = await fetch('http://localhost:8080/demo', {
  //     method: 'GET'
  //   })

  //   const data = await res.json();
  //   setData(data);
  //   console.log('api',data);
  // }

  // useEffect(()=>{
  //   getData();
  // },[]);

  return (
    <>
    {/* <div className='bg-warning d-flex flex-column justify-content-center align-items-center text-capitalize fw-bold fs-4'>
      <form onSubmit={handleSubmit}>
        <div className='d-flex justify-content-between'>
          <span>user name</span>
          <input type="text" name='username' onChange={handleInput} />
        </div>
        <div>
          <span>password</span>
          <input type="password" name='password' onChange={handleInput} />
        </div>
        <button className='btn btn-primary'>submit</button>
      </form>
      <div className='bg-info'>
        <ul>
          {
            data.map((val,idx)=>{
              return <li key={val._id}>{val.username}</li>
            })
          }
        </ul>
      </div>
    </div> */}
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/downloadanime' element={<DownloadAnime />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
