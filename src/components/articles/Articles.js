import React from 'react'
import './articles.css'
import articlesImg from './Rectangle 553.png'

const Articles = () => {
    return (
        <section className='articles'>

            <div className="articles-title">
                <h1>Enjoy our articles</h1>
                <p></p>

            </div>

            <div className="articles-texts">

                <div className="articles-text">
                    <h1>Manhattan Pià-terre for a new Chicago apartment</h1>
                    <p>Interior designer Sarah Vaile remembers eyeing a New York City apartment—one with bold colors and a personality as distinct as its chic owner—in a 2014 issue of House Beautiful, and tucking it away for future design inspiration. Years later, in a serendipitous turn of events, the woman she’d seen in the magazine—a stylish figure now in her 30s—just moved to Chicago.</p>
                    <span>READ ARTICLE</span>
                </div>

                <div className="articles-img">
                    <img src={articlesImg} alt="articlesImg" />
                </div>



            </div>




            <div className="articles-title">
                <p></p>
                <h4>SEE ALL ARTICLES</h4>
                <p></p>
            </div>


        </section>
    )
}

export default Articles
