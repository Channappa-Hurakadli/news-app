import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description,imgUrl,url,author,date,source}=this.props;

    return (
      <div>
        <div className="card" >
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {source}
          </span>
              <img src={imgUrl?imgUrl:"https://imgs.search.brave.com/YEzyZe7Bq8v-IFEf6gywAyqMCcXIPBtQBJ8K1QifmZg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA3LzkxLzIyLzU5/LzM2MF9GXzc5MTIy/NTkyN19jYVJQUEg5/OUQ2RDFpRm9ua0NS/bUNHemtKUGYzNlFE/dy5qcGc"} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <p className="card-text"><small className="text-body-secondary">Author: <span className='name'>{author?author:"Unknown"}</span><br/> <span>Date: <span className='date'>{new Date(date).toLocaleDateString()}</span></span></small></p>
                <a href={url} target='_blank' className="btn btn-dark">Read More</a>
              </div>
        </div>
      </div>
    )
  }
}

export default NewsItem

