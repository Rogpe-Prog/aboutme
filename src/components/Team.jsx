import React from 'react';
export const Team = (props) => {
  return (
    <div id='team' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Books and Articles</h2>
          <p>
            Here, some pages beyond understanding, seeking to precede.
          </p>
        </div>
        <div className='team-grid'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='team team-grid-item'>
                  <div className='thumbnail'>
                    {' '}
                    <img src={d.img} alt='...' className='team-img' />
                    <div className='caption'>
                      <h4>{d.name}</h4>
                      <p>{d.job}</p>
                    </div>
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
