import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class News extends Component {
  static defaultProps={
    category:'general'
  }

  static propTypes={
    category:PropTypes.string.isRequired
  }


  constructor(){
    super();
    this.state={
      articles:[],
      loading: false,
      page:1
    }
  }

  async componentDidMount(){
    try{
    let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=f41a114a7a3c4601b1b44da103ea1807&page=${this.state.page}&pageSize=18&category=${this.props.category}`;
    this.setState({loading:true});
    let response=await fetch(url);
    const data=await response.json();
    this.setState({articles:data.articles,
      totalResults:data.totalResults,
      loading:false
    });
    let totalPages=Math.ceil(this.state.totalResults/20);
    // console.log(totalPages);
    
    this.setState({totalPages:totalPages});
    }catch(error){
        console.error("Error Fetching data : ",error);
    }

  }

  handleNext=async()=>{
    
    let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=f41a114a7a3c4601b1b44da103ea1807&page=${this.state.page+1}&pageSize=18&category=${this.props.category}`;
    this.setState({loading:true});
    let response=await fetch(url);
    const data=await response.json();
    this.setState({articles:data.articles});
    this.setState({
      page:this.state.page+1,
      loading:false
    })
  }

    
  handlePrev=async()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=f41a114a7a3c4601b1b44da103ea1807&page=${this.state.page-1}&pageSize=18&category=${this.props.category}`;
    this.setState({loading:true});
    let response=await fetch(url);
    const data=await response.json();
    this.setState({articles:data.articles});
    this.setState({
      page:this.state.page-1,
      loading:false
    })
  }
  

  render() {
    return (
      <div>
        <div className="container">
        {this.state.loading &&<Spinner/>}
        <h1 className='my-4 text-center'>NewsMonkey Top Headlines - {this.props.category.toUpperCase()}</h1>
        <div className="row">
            {!this.state.loading && this.state.articles.map((element)=>{return(<div className="col-md-4 my-3" key={element.url}>
                <NewsItem title={!element.title?"":element.title.slice(0,45)} description={!element.description?"":element.description.slice(0,88)} imgUrl={element.urlToImage} url={element.url} />
            </div>)}
            )}
        </div>
        
        <div className="d-grid gap-2">
  <button className="btn btn-outline-dark mt-3" type="button" disabled={this.state.page<=1?true:false} onClick={this.handlePrev}>&larr; Previous</button>
  <button className="btn btn-outline-dark mb-3" type="button" disabled={this.state.page===this.state.totalPages?true:false} onClick={this.handleNext}>Next &rarr;</button>
</div>
</div>
      </div>
    )
  }
}

export default News
