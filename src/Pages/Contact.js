import contact from '../Data/contact-us';
import '../Styles/ContactUs.css';

export default function Contact() {
  return (
    <div className='contact-outer-container'>
      <div className='contact-inner-container'>
        <div className='content'>
          <h1>Contact Us</h1>
          <div className='contact-intro text-block white-text centered-text'>
            <p>
              At
              {contact
                .filter((img) => img.section === 'intro')
                .map((introImg) => (
                  <img
                    key={introImg.id}
                    id={introImg.id}
                    src={introImg.image}
                    alt={introImg.alt}
                    className='hope-text'
                  />
                ))}{' '}
              we believe that we should all participate and encourage a child's
              creativity and their belief in fantasy, dreams and a brighter
              tomorrow.
            </p>
          </div>
          <div className='contactIntro'>
            {contact
              .filter((img) => img.id === 'cloud_messages')
              .map((Img) => (
                <div key={Img.id} id={Img.id}>
                  <img src={Img.image} alt={Img.alt} className='img-size' />
                </div>
              ))}
          </div>
          <div className='slim-text-block white-text centered-text'>
            <p>
              As a children's organisation we believe that communication is a
              vital part of a child's development. We want children to learn to
              communicate but NOT with strangers online.
            </p>
          </div>
          <div className='centerImg'>
            {contact
              .filter((img) => img.id === 'dont_talk_to_strangers')
              .map((Img) => (
                <div key={Img.id} id={Img.id} className={Img.pos}>
                  <img src={Img.image} alt={Img.alt} className='img-size' />
                </div>
              ))}
          </div>
          <div className='slim-text-block white-text centered-text sideImg'>
            {contact
              .filter((img) => img.section === 'one')
              .map((Img) => (
                <div key={Img.id} id={Img.id} className={Img.pos}>
                  <img src={Img.image} alt={Img.alt} className='img-size' />
                </div>
              ))}
            <p>
              We also recognise that in a child's world, Ziggy, our digital
              character, is their friend and they may want to talk to him or
              feel connected with him. They may want to have him as a friend
              because they feel lonely, isolated or miss the ones they love.
              Children over <u>8 years old</u> can become Child Directors,
              helping HOPE grow, they can write to the Child Directors as a
              group and work together. Children can even write to Ziggy and tell
              him if they are happy or sad and want to share their feelings with
              Ziggy. All we ask is that communication is carried out under adult
              supervision; this may be their parent or family member, guardian,
              teacher or carer.
            </p>
          </div>
          <div className='slim-text-block white-text centered-text sideImg'>
            {contact
              .filter((img) => img.section === 'two')
              .map((Img) => (
                <div key={Img.id} id={Img.id} className={Img.pos}>
                  <img src={Img.image} alt={Img.alt} className='img-size' />
                </div>
              ))}
            <h2>
              <u>How To Contact Ziggy</u>
            </h2>
            <p>
              Ziggy loves to hear from all of his friends. You can send Ziggy,
              drawings or paintings or letters or even voice messages. You can
              also send him games to play and ideas for lessons. If you send him
              games or things to play with, he will play with them but he also
              likes to share them with children who need them, like children in
              hospital.
            </p>
          </div>
          <div className='centerImg'>
            {contact
              .filter((img) => img.id === 'send_to_ziggy')
              .map((Img) => (
                <div key={Img.id} id={Img.id} className={Img.pos}>
                  <img src={Img.image} alt={Img.alt} className='img-size' />
                </div>
              ))}
          </div>
          <div className='slimmer-text-block white-text centered-text'>
            <p>
              Ziggy doesn't talk but he is pretty good at writing messages or
              recording videos. If it's your birthday he will send you an ecard.
              Ziggy doesn't know when his birthday is so he will probably want
              to share your birthday with you, if that's okay, if you don't want
              him to, that's fine as well because he won't want to upset you.
              Ziggy isn't allowed to send out presents because he normally goes
              shopping in the bins or the garbage. If you want to hear back from
              Ziggy really quickly, please include a folded and flattened paper
              airplane that we can use it to send your message to him on his
              island.
            </p>
          </div>
          <div className='slim-text-block white-text centered-text sideImg'>
            {contact
              .filter((img) => img.section === 'three')
              .map((Img) => (
                <div key={Img.id} id={Img.id} className={Img.pos}>
                  <img src={Img.image} alt={Img.alt} className='img-size' />
                </div>
              ))}
            <p>To send Ziggy an email, please send it to:</p>
            <address>
              <u>ziggy@humanitarianoperations.org</u>
            </address>
            <p>To send Ziggy anything by mail, his address is:</p>
            <address>
              Ziggy
              <br />
              Ziggy's Island Home On His Island Somewhere
              <br />
              c/o HOPE
              <br />
              8th Floor, 140 London Wall, London
              <br />
              EC2Y 5DN
              <br />
              England
            </address>
            <p>
              *Please Note the Contact Us Guidelines For Parents, Adult Family
              Members and Guardians below prior to sending anything.
            </p>
          </div>
          <div className='slim-text-block white-text centered-text sideImg'>
            {contact
              .filter((img) => img.section === 'four')
              .map((Img) => (
                <div key={Img.id} id={Img.id} className={Img.pos}>
                  <img src={Img.image} alt={Img.alt} className='img-size' />
                </div>
              ))}
            <h2>
              <u>How To Contact The HOPE Board of Directors (Youth)</u>
            </h2>
            <p>
              We are a fully inclusive group who want to share our adventure
              with children everywhere. There are no exceptions! HOPE is your
              organisation so if you're a child, getting involved is easy:
            </p>
            <ul className='list-content'>
              <li>Do you have a skill or talent?</li>
              <li>Do you need experience?</li>
              <li>
                Are you setting up your own business in your bedroom and you
                want to work with us?
              </li>
              <li>
                Do you think that there is something that you can help us with?
              </li>
              <li>Do you want to work with us in your country?</li>
            </ul>
          </div>
          <div className='slim-text-block white-text centered-text'>
            <p>To send The Child Directors an email, please send it to: </p>
            <address>
              <u>directors@humanitarianoperations.org</u>
            </address>
            <p>
              To send The Child Directors anything by mail, their address is:
            </p>
            <address>
              The Board of Directors (Youth)
              <br />
              HOPE
              <br />
              8th Floor, 140 London Wall
              <br />
              London
              <br />
              EC2Y 5DN
              <br />
              England
            </address>
            <p>
              *Please Note the Contact Us Guidelines For Parents, Adult Family
              Members and Guardians below prior to sending anything.
            </p>
          </div>
          <div className='centerImg'>
            {contact
              .filter((img) => img.id === 'duck_riding_ziggy')
              .map((Img) => (
                <div key={Img.id} id={Img.id} className={Img.pos}>
                  <img src={Img.image} alt={Img.alt} className='img-size' />
                </div>
              ))}
          </div>
          <div className='slim-text-block white-text centered-text sideImg'>
            {contact
              .filter((img) => img.section === 'five')
              .map((Img) => (
                <div key={Img.id} id={Img.id} className={Img.pos}>
                  <img src={Img.image} alt={Img.alt} className='img-size' />
                </div>
              ))}
            <h2>
              <u>
                Contact Us Guidelines For Parents, Adult Family Members and
                Guardians
              </u>
            </h2>
            <p>
              Ziggy, the Child Directors and HOPE as a whole cannot communicate
              on an individual basis directly with children, but with your
              involvement we will communicate via you, their responsible adult.
              We observe very strict safeguarding guidelines and do not want to
              encourage children to communicate online or in any other way with
              strangers. If your child could benefit from or wants to
              communicates with Ziggy, the Child Directors or HOPE, we require
              the following from you, their responsible adult:
            </p>
            <ul className='list-content'>
              <li>
                Your name and email address (all communication from us will be
                directed to you, should be viewed by you prior to it being sent
                to us and any reply from us should be viewed by you prior to it
                being seen by your child).
              </li>
              <li>
                Details of the sort of response you would like your child to
                receive (your child may not be as clear as you can be), (please
                note; Ziggy, the Child Directors and HOPE will only reply in a
                positive manner).
              </li>
              <li>
                If you require an urgent response, for example, if your child is
                worried about being admitted to hospital for surgery, Ziggy will
                reassure them, but we may need to work more closely with you and
                therefore ask that you provide telephone contact details.
              </li>
              <li>
                Please do not send us anything that your child wishes to have
                returned because we don't want to find out that it got lost in
                transit or that Ziggy eat it by mistake.
              </li>
              <li>
                If your child has difficulty reading, please inform us and we
                will ask Ziggy's assistant or the Child Directors to record a
                message for them.
              </li>
              <li>
                Any data that we collect relating to you or your child will be
                deleted permanently when your request is completed to your
                satisfaction.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
