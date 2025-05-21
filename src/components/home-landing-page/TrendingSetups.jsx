import React from 'react';
import img1 from '../../assets/home-img/img1.png';
import img2 from '../../assets/home-img/img2.png';
import img3 from '../../assets/home-img/img3.png';

const setups = [
  {
    title: 'Pro Streamer Setup',
    desc: 'Triple monitor, RGB lighting, Stream deck',
    price: '$49/day',
    img: img1,
  },
  {
    title: 'Competitive Setup',
    desc: '240Hz monitor, Pro mouse & keyboard',
    price: '$39/day',
    img: img2,
  },
  {
    title: 'Casual Setup',
    desc: 'Console, 4K TV, Comfort chair',
    price: '$29/day',
    img: img3,
  },
  {
    title: 'Pro Streamer Setup',
    desc: 'Triple monitor, RGB lighting, Stream deck',
    price: '$49/day',
    img: img1,
  }
];

const TrendingSetups = () => {
  return (
    // <div className="container my-5">
    //   <h3 className="fw-bold mb-4">Trending Setups</h3>
    //   <div className="row gy-4">
    //     {setups.map((setup, index) => (
    //       <div className="col-md-4" key={index}>
    //         <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
    //           <img
    //             src={setup.img}
    //             className="card-img-top"
    //             alt={setup.title}
    //             style={{ height: '220px', objectFit: 'cover' }}
    //           />
    //           <div className="card-body d-flex flex-column justify-content-between">
    //             <div>
    //               <h5 className="fw-semibold">{setup.title}</h5>
    //               <p className="text-muted mb-3">{setup.desc}</p>
    //             </div>
    //             <div className="d-flex justify-content-between align-items-center mt-auto">
    //               <span className="fw-bold text-primary">{setup.price}</span>
    //               <button className="btn btn-primary px-3 py-1">Rent Now</button>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>

    <div className="container my-3">
  <h4 className="fw-bold mb-3">Trending Setups</h4>
  <div className="row gy-3">
    {setups.map((setup, index) => (
      <div className="col-sm-6 col-md-4 col-lg-3" key={index}>
        <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
          <img
            src={setup.img}
            className="card-img-top"
            alt={setup.title}
            style={{ height: '160px', objectFit: 'cover' }}
          />
          <div className="card-body p-3 d-flex flex-column justify-content-between">
            <div>
              <h6 className="fw-semibold mb-1" style={{ fontSize: '1rem' }}>
                {setup.title}
              </h6>
              <p className="text-muted mb-2" style={{ fontSize: '0.9rem' }}>
                {setup.desc}
              </p>
            </div>
            <div className="d-flex justify-content-between align-items-center mt-auto">
              <span className="fw-bold text-primary" style={{ fontSize: '0.95rem' }}>
                {setup.price}
              </span>
              <button className="btn btn-sm btn-primary px-3 py-1">Rent Now</button>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

  );
};

export default TrendingSetups;
