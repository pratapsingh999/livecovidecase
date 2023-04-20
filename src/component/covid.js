import React, { useEffect, useState  } from 'react'

const Covid = () => {

    
    const [data , setdata] = useState([]);
    const getCovidData = async() =>{
        try{
            
            const res = await fetch('https://data.covid19india.org/data.json');
            const actualdata = await res.json();
       
            setdata(actualdata.statewise[0])
        }catch(error){
           console.log(error)
        }
  
    }
    useEffect( () => {
     getCovidData();
    },[])
  return (
   <>
   <div className="text">
    <h1>Live</h1>
    <h1>covid track</h1>
    </div>

    <div class="row">
  <div class="col-sm-4 mb-3 mb-sm-0">
    <div class="card1">
      <div class="card-body">
      <p className="card__name"><span>OUR</span>COUNTRY</p>
     <p className='card__total card__small'>INDIA</p>
      </div>
    </div>
  </div>

  <div class="col-sm-4">
    <div class="card2">
      <div class="card-body">
      <p className="card__name"><span>TOTAL</span>RECOVERED</p>
      <p className='card__total card__small'>{data.recovered}</p>
      </div>
    </div>
  </div>

  <div class="col-sm-4">
    <div class="card3">
      <div class="card-body">
        <p className="card__name"><span>TOTAL</span>CONFIRMED</p>
        <p className='card__total card__small'>{data.confirmed}</p>
      </div>
    </div>
  </div>
</div>


<div class="row">
  <div class="col-sm-4 mb-3 mb-sm-0">
    <div class="card4">
      <div class="card-body">
      <p className="card__name"><span>TOTAL</span>DEATHS</p>
      <p className='card__total card__small'>{data.deaths}</p>
      </div>
    </div>
  </div>

  <div class="col-sm-4">
    <div class="card5">
      <div class="card-body">
      <p className="card__name"><span>TOTAL</span>ACTIVE</p>
      <p className='card__total card__small'>{data.active}</p>
      </div>
    </div>
  </div>

  <div class="col-sm-4">
    <div class="card6">
      <div class="card-body">
      <p className="card__name"><span>LAST</span>UPDATED</p>
      <p className='card__total card__small'>{data.lastupdatedtime}</p>
      </div>
    </div>
  </div>
</div>

    {/* <ul className='card'>
        <li className='card'>
        <div className="card__main">
            <div className="card__inner">
                <p className="card__name"><span>OUR</span>COUNTRY</p>
                <p className='card__total card__small'>{data.country}</p>
            </div>
        </div>
        </li>

        <li className='card'>
        <div className="card__main">
            <div className="card__inner">
                <p className="card__name"><span>TOTAL</span>RECOVERED</p>
                <p className='card__total card__small'>{data.recovered}</p>
            </div>
        </div>
        </li>

        <li className='card'>
        <div className="card__main">
            <div className="card__inner">
                <p className="card__name"><span>TOTAL</span>CONFIRMED</p>
                <p className='card__total card__small'>{data.confirmed}</p>
            </div>
        </div>
        </li>

        <li className='card'>
        <div className="card__main">
            <div className="card__inner">
                <p className="card__name"><span>TOTAL</span>DEATHS</p>
                <p className='card__total card__small'>{data.deaths}</p>
            </div>
        </div>
        </li>

        <li className='card'>
        <div className="card__main">
            <div className="card__inner">
                <p className="card__name"><span>TOTAL</span>ACTIVE</p>
                <p className='card__total card__small'>{data.active}</p>
            </div>
        </div>
        </li>

        <li className='card'>
        <div className="card__main">
            <div className="card__inner">
                <p className="card__name"><span>LAST</span>UPDATED</p>
                <p className='card__total card__small'>{data.lastupdatedtime}</p>
            </div>
        </div>
        </li>
    </ul> */}
   </>
  )
}

export default Covid
