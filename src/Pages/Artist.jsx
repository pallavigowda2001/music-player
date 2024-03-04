import React from 'react'
import { Link } from 'react-router-dom'

function Artist(props) {
  const {id, name, images, popularity, followers, genres} = props.info


  if(!props.info){
    return (
      <div className="container  p-5">
        <div className="row">
          <div className="col-md-12 text-center">
            <h6 className="text-secondaary">Search for an Artist</h6>
          </div>
        </div>
      </div>
    )
  }
  return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-sm-12">
            <div className="row">
              <div className="col-md-4 col-lg-8 col-sm-12">
                <div className="card mt-3 mb-2">
                  <img src={images ? images[0].url : ''} alt="" className='card-img-top'  />
                </div>
              </div>
              <div className="col-md-8 col-lg-9 col-sm-12">
                <div className="card mt-3 mb-2">
                  <div className="card-header">
                    <h6 className="text-success text-center"> {name}</h6>
                  </div>
                  <div className="card-body">
                    <ul className="list-group">
                      <li className="list-group-item">
                        <strong>Popularity</strong>
                        <span className="float-end text-success">{popularity}%</span>
                      </li>
                      <li className="list-group-item">
                        <strong>Followers</strong>
                        <span className="float-end text-success">{ followers?.total}%</span>
                      </li>
                      <li className="list-group-item">
                        <strong>Genres</strong>
                        <span className="float-end text-success">{genres?.join(',')}</span>
                      </li>
                    </ul>
                  </div>
                  <div className="card-footer">
                    <Link to={`/tracks/${id}`} className="btn btn-success">Tracks</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Artist
