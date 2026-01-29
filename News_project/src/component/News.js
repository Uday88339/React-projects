import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'

export class News extends Component {

  static defaultProps = {
    country: "us",
    pageSize: 6,
    catagory: "general",
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    catagory: PropTypes.string, 
  }

  constructor() {
    super();
    console.log("hello I am a constructer from news component");
    this.state = {
      articles: [],
      loading: false,
      page: 1

    }
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=60135030e06b4b00b28cffa9fa9bac31&page=${this.state.page + 1}
    &pageSize=${this.props.pageSize}`;

    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles, totalArticles: parsedData.totalResults })
  }

  handlePrevClcik = async () => {
    console.log("previous");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=60135030e06b4b00b28cffa9fa9bac31&page=${this.state.page + 1}
    &pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData); 
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles
    })

  }
  handleNextClick = async () => {
    console.log("next");
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {

    } else {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=60135030e06b4b00b28cffa9fa9bac31&page=${this.state.page + 1}
        &pageSize=${this.props.pageSize}`
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        // this.setState({articles: parsedData.articles})  
        this.setState({
          page: this.state.page + 1,
          articles: parsedData.articles
      })   

    }
  }


  render() {
    return (
      <div className='container my-3'>
        <h1 className='text-center'>News Ever - Top Headlines</h1>
        <div className="row">
          {this.state.articles.map((element) => {
            return <div className="col-md-4" key={element.url} >
              <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author = {element.author} date = {element.publishedAt} source = {element.source.name} />
            </div>
          })}


        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type='button' className='btn btn-dark' onClick={this.handlePrevClick}> &larr; Previous</button>
          <button disabled={this.state.page +1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type='button' className='btn btn-dark' onClick={this.handleNextClcik}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News


