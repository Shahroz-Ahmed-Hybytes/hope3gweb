import underDev from '../Data/under-development';
import '../Styles/UnderDev.css';

export default function PageUnderDev() {
  return (
    <div className="temp-outer-container">
      <div className="temp-inner-container">
        <div className="content">
          <div className="under-dev-img">
            {underDev.map((underDev, index) => (
              <img
                key={index}
                src={underDev.pageImg}
                alt={underDev.pageAlt}
                className="img-size"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
