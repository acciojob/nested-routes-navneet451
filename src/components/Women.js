import React from 'react';
import {Routes,Route,Link} from 'react-router-dom'; 
import Grooming from './Grooming';
import Shirts from './Shirts';
import Jewellery from './Jewellery';
import Trouser from './Trouser';

const Women = () => {
  return (
    <div>
        <div>
            <Link to={"grooming"}>Grooming</Link>br
            <Link to={"shirts"}>shirts</Link>br
            <Link to={"trouser"}>trousers</Link>br
            <Link to={"jewellery"}>jewellery</Link>br
        </div>
        <Routes>
           <Route path='grooming' element={<Grooming/>}/>
           <Route path='shirts' element={<Shirts />}/>
           <Route path='trouser' element={<Trouser />}/>
           <Route path='jewellery' element={<Jewellery />}/>
        </Routes>
    </div>
  )
}

export default Women
