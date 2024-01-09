import buyNowFeedBack from '../Data/buy-now-feedback';
import '../Styles/BuyNow.css';

const BuyNowFeedBack = () => {
return(
      <div className="buy-feed-inner-container">
        <div className="content">
          <div className="buy-now-feedback-img">
            {buyNowFeedBack.map((feedBack, index) => (
              <img
                key={index}
                src={feedBack.pageImg}
                alt={feedBack.pageAlt}
                className="img-size"
              />
            ))}
          </div>
        </div>
    </div>
)
}

export default BuyNowFeedBack;