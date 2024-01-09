import mediaCentre from '../Data/media-centre';
import '../Styles/MediaCentre.css';
import ReactPlayer from 'react-player';

export default function MediaCentre() {
  return (
    <div className="outer-container">
      <div className="media-inner-container">
        <div className="content">          
          <div className="headline">
            {mediaCentre.map((Img, index) => (
              <img key={index} src={Img.image} alt={Img.alt} className="img-size"/>
              )
            )}
          </div>
            
          <div className="screen">
            <div className='screen-back1'>
              <div id='screen_one'>
                <ReactPlayer 
                  className='react-player_one'
                  controls={true}
                  url="https://hohopevideoorg.s3.eu-west-2.amazonaws.com/Kids+Video/Kids+at+hope-2.mov"  
                  width="116%"
                  height="50%"  
                />    
              </div>
            </div>
          </div> 
          
          <div className="screen">
            <div className='screen-back2'>
              <div id='screen_two'>
                <ReactPlayer 
                  className='react-player_two'
                  controls={true}
                  url="https://hohopevideoorg.s3.eu-west-2.amazonaws.com/Media+Centre/Slot+2/Milan_v2_opera_full.mp4"
                  width="116%"
                  height="50%"
                />    
              </div>
            </div>
          </div> 

          <div className="screen">
            <div className='screen-back3'>
              <div id='screen_three'>
                <ReactPlayer 
                  className='react-player_three'
                  controls={true}
                  url="https://hohopevideoorg.s3.eu-west-2.amazonaws.com/Media+Centre/Slot+3/Ziggy+AR+Demo.mp4"
                  width="116%"
                  height="50%"
                />    
              </div>
            </div>
          </div> 

          <div className="screen">
            <div className='screen-back4'>
              <div id='screen_four'>
                <ReactPlayer 
                  className='react-player_four'
                  controls={true}
                  url="https://hohopevideoorg.s3.eu-west-2.amazonaws.com/Media+Centre/Slot+4/Rhino_introduction.mp4"
                  width="116%"
                  height="50%"
                />    
              </div>
            </div>
          </div> 

          <div className="screen">
            <div className='screen-back5'>
              <div id='screen_five'>
                <ReactPlayer 
                  className='react-player_five'
                  controls={true}
                  url="https://hohopevideoorg.s3.eu-west-2.amazonaws.com/Media+Centre/Slot+5/Gust+Garms_finalwords.mp4"
                  width="116%"
                  height="50%"
                />    
              </div>
            </div>
          </div> 

          <div className="screen">
            <div className='screen-back6'>
              <div id='screen_six'>
                <ReactPlayer 
                  className='react-player_six'
                  controls={true}
                  url="https://hohopevideoorg.s3.eu-west-2.amazonaws.com/Media+Centre/Slot+6/H264_Head+Teacher_.mp4"
                  width="116%"
                  height="50%"
                  
                />    
              </div>
            </div>
          </div> 

          <div className="screen" id="screen-seven">
            <div className='screen-back7'>
              <div id='screen_seven'>
                <ReactPlayer 
                  className='react-player_seven'
                  controls={true}
                  url="https://hohopevideoorg.s3.eu-west-2.amazonaws.com/Media+Centre/Slot+7/Sea+Turtle_introduction.mp4"
                  width="116%"
                  height="50%"
                />    
              </div>
            </div>
          </div> 

        </div>  
      </div>
    </div>
  );
}
