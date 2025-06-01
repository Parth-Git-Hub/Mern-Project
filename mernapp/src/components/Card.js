import React from 'react'

export default function Card() {
    return (

      <div>
        <div>
        <div className="card" style={{ width: "18rem" }}>
          {/* <img src="..." className="card-img-top" alt="..."/> */}
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              cards
            </p>

            <div>
              <select className="m-2">
                {Array.from(Array(6)).map((_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
              <select className=''>
                <option value="half">Half</option>
                <option value="full">Full</option>
              </select>

              <div>
                
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
    )
}
