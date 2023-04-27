import React, { Component } from 'react'
import NewsItem from './newsItem'
import Loading from './loading';
import PropTypes from 'prop-types'

export class news extends Component {
      
static defaultProps={
      category: 'general'
}

static propTypes={
      category: PropTypes.string
}

capitalize(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
  }
      constructor(props) {
            super(props);
            this.state = {
                  articles: [],
                  loading: false,
                  page:1
            }
            document.title=`${this.capitalize(this.props.category)} News`
      }
   

      async componentDidMount() {
            this.props.setProgress(10)
            let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=in&apiKey=${this.props.apiKey}&page=1&pageSize=21`
            this.setState({loading:true});
            let data = await fetch(url)
            let parsedData = await data.json();
            this.setState({
                   articles: parsedData.articles,
                   loading:false 
                  })
                  this.props.setProgress(100)
      }

      handlePrev=async()=>{
            this.props.setProgress(10)
            let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=in&apiKey=${this.props.apiKey}&page=${this.state.page-1}&pageSize=21`;
            this.setState({loading:true});
            let data = await fetch(url)
            let parsedData = await data.json();
            this.setState({
                  page:this.state.page-1,
                  articles: parsedData.articles,
                  loading:false
            })
            this.props.setProgress(100)
      }
      
      handleNext=async()=>{
            this.props.setProgress(10)
            let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=in&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pageSize=21`
            this.setState({loading:true});
            let data = await fetch(url)
            let parsedData = await data.json();
            this.setState({
                  page:this.state.page+1,
                  articles: parsedData.articles,
                  loading:false
            })
            this.props.setProgress(100)
      }

      render() {
            return (
                  <>
                       <h2 className='text-center bg-success p-2 bg-opacity-75'>{this.props.heading} News Lines</h2>
                        {this.state.loading && <Loading/>}
                        <div className='container'>
                              <div className='row '>
                                    {!this.state.loading && this.state.articles.map((e) => {
                                          return <div className="col-xl-4 col-lg-6  my-3 d-flex justify-content-center" key={e.url}>
                                                <NewsItem title={e.title ? e.title : ''} description={e.description ? e.description : ''} imgurl={e.urlToImage} fullnews={e.url} author={e.author} date={e.publishedAt} source={e.source.name} />
                                          </div>

                                    })}
                              </div>
                        </div>
                        <div>
                              <div className="container d-flex justify-content-between">
                                    <button disabled={this.state.page<=1} className="btn btn-dark my-3" type="button"  onClick={this.handlePrev}> &larr; Previous</button>
                                    <button disabled={this.state.page>=3} className="btn btn-dark my-3" type="button"  onClick={this.handleNext}>Next &rarr;</button>
                              </div>
                        </div>
                  </>

            )
      }
}

export default news
