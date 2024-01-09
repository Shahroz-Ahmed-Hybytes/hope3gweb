import learnMoreFeedBack from '../Data/learn-more-feedback';
import '../Styles/LearnMore.css';

const LearnMoreFeedBack = () => {
return(
    <div className="learn-feed-inner-container">
        <div className="content">
          <div className="learn-more-feedback-img">
            {learnMoreFeedBack.map((feedBack, index) => (
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

export default LearnMoreFeedBack;