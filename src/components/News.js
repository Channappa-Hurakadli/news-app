import React, { Component } from 'react'
import NewsItem from './NewsItem'
// BASE_URL = "https://saurav.tech/NewsAPI/"
// top_headlines_api = "<BASE_URL>/top-headlines/category/<category>/<country_code>.json"
// everything_api = "<BASE_URL>/everything/<source_id>.json"
export class News extends Component {
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
    // let url="https://newsapi.org/v2/top-headlines?country=us&apiKey=f41a114a7a3c4601b1b44da103ea1807";
    let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=f41a114a7a3c4601b1b44da103ea1807&page=${this.state.page}`;
    let response=await fetch(url);
    const data=await response.json();
    this.setState({articles:data.articles,totalResults:data.totalResults});
    let totalPages=Math.ceil(this.state.totalResults/20);
    // console.log(totalPages);
    
    this.setState({totalPages:totalPages});
    }catch(error){
        console.error("Error Fetching data : ",error);
    }

  }

  handleNext=async()=>{
    
    let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=f41a114a7a3c4601b1b44da103ea1807&page=${this.state.page+1}`;
    let response=await fetch(url);
    const data=await response.json();
    this.setState({articles:data.articles});
    this.setState({
      page:this.state.page+1
    })
  }

    
  handlePrev=async()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=f41a114a7a3c4601b1b44da103ea1807&page=${this.state.page-1}&pageSize=20`;
    let response=await fetch(url);
    const data=await response.json();
    this.setState({articles:data.articles});
    this.setState({
      page:this.state.page-1
    })
  }
  

  render() {
    return (
      <div className='container'>
        <h1 className='my-4 text-center'>NewsMonkey Top Headlines</h1>
        <div className="row">
            {this.state.articles.map((element)=>{return(<div className="col-md-4  col-sm-6 my-3" key={element.url}>
                <NewsItem title={!element.title?"":element.title.slice(0,45)} description={!element.description?"":element.description.slice(0,88)} imgUrl={element.urlToImage} url={element.url} />
            </div>)}
            )}
        </div>
        
        <div className="d-grid gap-2">
  <button className="btn btn-outline-primary mt-3" type="button" disabled={this.state.page<=1?true:false} onClick={this.handlePrev}>&larr; Previous</button>
  <button className="btn btn-outline-primary mb-3" type="button" disabled={this.state.page===this.state.totalPages?true:false} onClick={this.handleNext}>Next &rarr;</button>
</div>
      </div>
    )
  }
}

export default News
