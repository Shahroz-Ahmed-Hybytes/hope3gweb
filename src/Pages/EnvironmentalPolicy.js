import environmental from '../Data/environmental-policy';
import '../Styles/EnvironmentalPolicy.css';

export default function EnvironmentalPolicy() {
  return (    
    <div className="outer-container"> 
      <div className="environmental-inner-container">
        <div className="content">
          <h1 className='top-spacing'>Environmental Policy</h1>
          <div className="env-policy-intro text-block white-text sideImg">
            {environmental.filter(img => img.section === "intro").map(Img => (
              <div key={Img.id} id={Img.id} className={Img.pos}>
                <img src={Img.image} alt={Img.alt} className="img-size"/>
              </div>
              )
            )}
            <p>I'm Barnaby, HOPE's 14-year-old environmental legal guru. It's important to know our environmental policies coz then you can understand properly about how your donations help to make our planet better. Coz we're a charity, and not doing this for ourselves, you can actually be sure we'll use all donations received responsibly.</p>
            <p>HOPE follows all the important international environmental laws that we know about so that the work we do is really really professional and the best it can possibly be. Recently, we joined the Mayor of London's Business Climate Challenge to help make London a zero-carbon city by 2030. We are trying to do our best and you can judge us and read more below, it's important!</p>
          </div>
          <div className="centerImg top-spacing">
            {environmental.filter(img => img.id === "earth").map(Img => (
              <div key={Img.id} id={Img.id}>
                <img src={Img.image} alt={Img.alt} className="img-size"/>
              </div>
              )
            )}
          </div>
          <div className="slim-text-block white-text centered-text top-spacing">
            <p>'HOPE' is the umbrella organisation that embodies the ethos of Humanitarian Operations CIO and includes Humanitarian Operations CIO, HOPE 5D Ltd and HOPE 3G Ltd.</p>
            <p>One of our key responsibilities and an essential part of how we conduct our activities is to care for the environment and contribute towards tackling climate change. We are dedicated to reducing our environmental footprint and continually enhancing our sustainability.</p>
          </div>
          <div className="centerImg">
            {environmental.filter(img => img.id === "jungle_plants").map(Img => (
              <div key={Img.id} id={Img.id}>
                <img src={Img.image} alt={Img.alt} className="img-size"/>
              </div>
              )
            )}
          </div>
          <div className="slim-text-block white-text sideImg top-spacing">
            {environmental.filter(img => img.section === "one").map(Img => (
              <div key={Img.id} id={Img.id} className={Img.pos}>
                <img src={Img.image} alt={Img.alt} className="img-size"/>
              </div>
              )
            )}
            <h2 className='centered-text heading-bottom-spacing'>Our aims</h2>
            <p>As part of our aim to being a more environmentally friendly organisation, we commit to:</p>
            <ul className="list-content">
              <li>Complying with all relevant environmental legislation, regulations and approved codes of practice.</li>
              <li>Regularly review our policies to ensure that they remain properly aligned to the need to reduce waste and encourage the most effective utilisation of scarce resources.</li>
              <li>Identifying our environmental risks, including climate change, and developing plans to mitigate them.</li>
              <li>Communicate internally our environmental policy and performance, on a regular basis, and encourage feedback.</li>
              <li>Provide all staff with the knowledge and tools needed to meet the goals of this policy and to actively participate in efforts to prevent negative environmental impacts.</li>
              <li>Seeking to keep wastage to a minimum and maximise the efficient use of materials and resources.</li>
              <li>Providing training for our staff so that we all work in accordance with this policy and within an environmentally aware culture.</li>
              <li>Ensuring that goods and materials purchased comply fully with UK government and EU legislation and recognised environmental best practice.</li>
              <li>Monitoring and continuously improving our environmental performance.</li>
              <li>Dealing with suppliers and employees/volunteers in a responsible way that enables us to promote best practice. We would do this by being honest and transparent about our products/services.</li>
            </ul>
          </div>
          <div className="text-block blue-text">
            <p>As part of our commitment, we are excited to be part of the Mayor of London's Business Climate Challenge. This programme is in partnership with Better Bankside Business Improvement District in Southwark which aims to tackle the climate emergency by making buildings more energy efficient on their pathway of zero carbon emission. The launch will witness businesses reducing their energy consumption by 10 percent within the first year.</p>
            <p>HOPE currently operates in a participating building at 1 Paris Garden, London SE1 8ND. We support the mayor's timely call of improving places of work's environmental performance. We are proud to be part of this effort to make London a zero-carbon city by 2030.</p>
          </div>
          <div className="centerImg">
            {environmental.filter(img => img.id === "earth").map(Img => (
              <div key={Img.id} id={Img.id}>
                <img src={Img.image} alt={Img.alt} className="img-size"/>
              </div>
              )
            )}
          </div>
          <div className="slim-text-block blue-text sideImg top-spacing">
            {environmental.filter(img => img.section === "two").map(Img => (
              <div key={Img.id} id={Img.id} className={Img.pos}>
                <img src={Img.image} alt={Img.alt} className="img-size"/>
              </div>
              )
            )}
            <h2 className='centered-text heading-bottom-spacing'>Our Environmental Action Plan</h2>
            <p>HOPE identified four areas in which we as an organisation have a direct or indirect environmental impact and where we can implement initiatives to manage and minimise these effects.The areas and our strategy to tackle the issue, is illustrated below:</p>
            <h3 className='centered-text heading-bottom-spacing top-spacing'>Paper Use</h3>
            <ul className="list-content">
              <li>We encourage staff through regular communication to maximise our use of available technologies and use paper as little as possible.</li>
              <li>Our target is to reduce our consumption of paper per staff member year on year.</li>
            </ul>
            <h3 className='centered-text heading-bottom-spacing top-spacing'>Travel</h3>
            <ul className="list-content">
              <li>We encourage the use of public transport rather than use of private cars.</li>
              <li>We encourage the use of video conference rather than air transport for meetings overseas.</li>
              <li>We have cycle storage facilities in our office and encourage staff to cycle to work whenever possible.</li>
            </ul>
            <h3 className='centered-text heading-bottom-spacing top-spacing'>Energy Use</h3>
            <ul className="list-content">
              <li>We encourage, through regular communication, changes in individual behaviour to reduce usage</li>
              <li>We have features in our offices to help reduce energy use such as, LED lighting and motion-sensitive lighting.</li>
              <li>Our target is to reduce the energy consumption per staff member year on year.</li>
            </ul>
            <h3 className='centered-text heading-bottom-spacing top-spacing'>Waste Management</h3>
            <ul className="list-content">
              <li>We manage waste generated from our business operations and products according to the principles of reduce, re-use and recycle. </li>
              <li>We will promote environmental responsibility through our contracting and purchasing choices. When purchasing products and services, we will strive to obtain the best value by considering life cycle, environmental impacts along with cost and functional performance.</li>
              <li>We encourage staff to reduce consumption of materials as a first priority, we then aim to reuse materials wherever possible and when things must be thrown away, we recycle as much as possible.</li>
              <li>We are constantly looking to use more sustainable materials. We are hoping to reduce the impact on the environment and create a more sustainable future by using materials that are more sustainably sourced and are environmentally friendly. We are also using recyclable packaging.</li>
              <li>Our target is to reduce the waste which is sent to landfill and increase the recycling of paper as a proportion of paper purchased year on year.</li>
            </ul>
            <h3 className='centered-text heading-bottom-spacing top-spacing'>Procurement</h3>
            <ul className="list-content">
              <li>We undertake appropriate due diligence in evaluating contractors, suppliers and partners before formalising relationships with them.</li>
              <li>We ensure that the products we buy align with our values and are sustainable.</li>
              <li>Our target is to only work with suppliers that meet appropriate environmental standards.</li>
            </ul>
          </div>
          <div className="centerImg">
            {environmental.filter(img => img.id === "environmental_posing_ziggy").map(Img => (
              <div key={Img.id} id={Img.id}>
                <img src={Img.image} alt={Img.alt} className="img-size"/>
              </div>
              )
            )}
          </div>
          <div className="text-block blue-text top-spacing">
            <h2 className='centered-text heading-bottom-spacing'>Communication</h2>
            <p>To improve our environmental impact, this policy is made available to the public on our website. We will consider our staff's suggestions and implement them where possible to ensure we contribute to a greener future.</p>
            <p>We really value our users and any constructive feedback. If you have suggestions or ideas about protecting the environment through our line of work, please do not hesitate to contact us at <a href="mailto:feedback@humanitarianoperations.org">mailto:feedback@humanitarianoperations.org</a>.</p>
          </div>
          <div className="text-block blue-text top-spacing">
            <h2 className='centered-text heading-bottom-spacing'>Changes</h2>
            <p>We may make changes to this policy in the future to fit to our current environmental obligations and aims. You are encouraged to keep updated on any changes to this policy.</p>
          </div>
          <div className="centerImg">
            {environmental.filter(img => img.id === "environmental_thinking_ziggy").map(Img => (
              <div key={Img.id} id={Img.id}>
                <img src={Img.image} alt={Img.alt} className="img-size"/>
              </div>
              )
            )}
          </div> 
        </div>
      </div>
    </div>
  );
}
