import scheduleDemoFeedBack from '../Data/schedule-demo-feedback';
import '../Styles/ScheduleADemo.css';

const ScheduleADemoFeedBack = () => {
return(
      <div className="schedule-feed-inner-container">
        <div className="content">
          <div className="schedule-feedback-img">
            {scheduleDemoFeedBack.map((feedBack, index) => (
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

export default ScheduleADemoFeedBack;