import { Link } from 'react-router-dom';
import '../Styles/userFeedbackAlert.css';

function UserFeedbackAlert(props) {
  return <div className='user-feedback-container'>{props.text}</div>;
}
export default UserFeedbackAlert;
