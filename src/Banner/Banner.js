import React from 'react';

const Banner = () => {
    return (
       <div>
        <div className="carousel mx-auto rounded-xl mt-10 mb-10 w-3/5">
  <div id="item1" className="carousel-item w-full">
    <img src="https://images.unsplash.com/photo-1619177383949-f03975e50b19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y294c2JhemFyfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60" className="w-full" />
  </div> 
  <div id="item2" className="carousel-item w-full">
    <img src="https://images.unsplash.com/photo-1642913954997-4aec8d323f64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2FpbnRtYXJ0aW58ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" className="w-full" />
  </div> 
  <div id="item3" className="carousel-item w-full">
    <img src="https://images.unsplash.com/photo-1629739868151-d29aab8b4dd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2FqZWt8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" className="w-full" />
  </div> 
  <div id="item4" className="carousel-item w-full">
    <img src="https://images.unsplash.com/photo-1632579219536-24216cfad7f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGJhbmRhcmJhbnxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60" className="w-full" />
  </div>
</div> 
<div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
  <a href="#item3" className="btn btn-xs">3</a> 
  <a href="#item4" className="btn btn-xs">4</a>
</div>
       </div>
    );
};

export default Banner;