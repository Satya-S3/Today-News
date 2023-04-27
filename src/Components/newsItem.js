import React from 'react'
import './newsItemcss.css'

const newsItem =(props)=>{


     
            let { title, description, imgurl, fullnews, author, date,source } =props;
            return (
                  <div>
                        <div className="card shadow p-3 mb-5 bg-body rounded" style={{ width: '20rem' }}>
                              <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:'90%' , zIndex:'1'}}>{source}</span>
                              <img src={!imgurl ? 'https://s.yimg.com/ny/api/res/1.2/JD039zayTex8mf7.hCFxVg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU-/https://media.zenfs.com/en/fox_business_text_367/0471890d084a06dda3f061901a0056ee' : imgurl} className="card-img-top" alt="..." />
                              <div className="card-body">
                                    <h5 className="card-title">{title}...</h5>
                                    <p className="card-text">{description}...</p>
                                    <p className="card-text"><small className="text-muted">By {author ? author : 'Unknown'} on {new Date(date).toGMTString()}</small></p>

                                    <a href={fullnews} target='_blank' rel="noreferrer" className="bttn btn btn-primary">Read More</a>
                              </div>
                        </div>
                  </div>
            )
      
}

export default newsItem
