import React, { Component } from 'react'
export class NewsItems extends Component {

  render() {
    let { title, description, imgUrl, newsUrl, author, date, source } = this.props;
    return (
      <div className='my-3'>
        <div className="card">
          <img src={!imgUrl ? "https://cdn.pixabay.com/photo/2016/02/01/00/56/news-1172463_1280.jpg" : imgUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <button type="button" class="btn btn-primary position-relative">
              Inbox
              <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: '90%', zIndex:'1'}}>
                {source}
              </span>
            </button>
            <p class="card-text"><small class="text-body-secondary">By {!author ? 'Unknown' : author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-dark">Read more...</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItems
