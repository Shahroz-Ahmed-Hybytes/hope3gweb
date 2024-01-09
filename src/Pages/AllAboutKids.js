import kids from '../Data/all-about-kids';
import '../Styles/AllAboutKids.css';

export default function AllAboutKids() {
  return (
    <div className='all-kids-container'>
      <div className='content'>
        <div className='title-kids'>
          {kids
            .filter((img) => img.id === 'teaching_safety_safely')
            .map((Img) => (
              <div key={Img.id} id={Img.id} className={Img.pos}>
                <img src={Img.image} alt={Img.alt} className='img-size' />
              </div>
            ))}
        </div>
        <div className='slim-text-block white-text sideImg'>
          {kids
            .filter((img) => img.section === 'one')
            .map((Img) => (
              <div key={Img.id} id={Img.id} className={Img.pos}>
                <img src={Img.image} alt={Img.alt} className='img-size' />
              </div>
            ))}
          <ul className='list-content indented-list'>
            <li>Introduce augmented reality lessons into your classrooms </li>
            <li>Teach safety without interacting with real-life dangers</li>
            <li>Children learn skills faster</li>
          </ul>
        </div>
        <div className='slim-text-block white-text top-spacing'>
          <h2 className='centered-text'>Our Mission</h2>
          <p>
            At HOPE, we use Augmented Reality (AR) technology to teach
            household, fire, and road safety to children ages 2-8. Every
            parent's priority is the safety of their child - however, most
            children are taught about the surrounding dangers when they come
            close to experiencing them. How can we teach children to avoid
            danger in a safer way? Our app delivers immersive experiences, so
            children can learn how to avoid everyday dangers at school, without
            being in the vicinity of real hazards.
          </p>
        </div>
        <div className='centerImg'>
          {kids
            .filter((img) => img.id === 'school_house_baby_ziggy')
            .map((Img) => (
              <div key={Img.id} id={Img.id} className={Img.pos}>
                <img src={Img.image} alt={Img.alt} className='img-size' />
              </div>
            ))}
        </div>
        <div className='slim-text-block white-text top-spacing sideImg'>
          {kids
            .filter((img) => img.section === 'two')
            .map((Img) => (
              <div key={Img.id} id={Img.id} className={Img.pos}>
                <img src={Img.image} alt={Img.alt} className='img-size' />
              </div>
            ))}
          <h2 className='centered-text'>What is AR?</h2>
          <p>
            'AR' stands for augmented reality. With our app, you can look
            through your tablet screen and see Ziggy - our animated character -
            in front of you, interacting with your real-life surroundings. Ziggy
            makes noises and moves, whilst you can walk around, look at him from
            any angle and even interact with him!
          </p>
        </div>
        <div className='slim-text-block white-text top-spacing sideImg'>
          {kids
            .filter((img) => img.section === 'three')
            .map((Img) => (
              <div key={Img.id} id={Img.id} className={Img.pos}>
                <img src={Img.image} alt={Img.alt} className='img-size' />
              </div>
            ))}
          <h2 className='centered-text'>How does it work?</h2>
          <p>
            The principles of teaching have been broken down and rebuilt from
            scratch with our HOPE 3G project. Under the direction of our Dean of
            Education Dr Jakar, we have developed and tested our AR character,
            Ziggy. Children adopt and look after Ziggy, teaching him to avoid
            everyday hazards and dangers whilst guided by parents or teachers.
            This allows children to learn essential lessons about safety in a
            positive, gentle, and effective way.
          </p>
          <ol className='list-content slim-list indented-list'>
            <li>
              Children use the app under the guidance of teachers, who choose a
              relevant lesson from the library on the loan tablet.
            </li>
            <li>
              The lesson is a tool that helps children to understand and retain
              what they have learnt (they can even do refresher lessons for
              free).{' '}
            </li>
            <li>
              Children befriend HOPE's digital buddy, Ziggy. To keep playing
              with him, the child must teach Ziggy how to avoid the dangers he
              encounters. These are real-life dangers that children encounter
              daily (chosen by you, their teacher).
            </li>
            <li>
              Ziggy gets excited when the child teaches him a new lesson! This
              encourages the child to continue their learning journey,
              reinforcing that learning is fun.
            </li>
            <li>
              By guiding and caring for Ziggy, the child gains awareness and
              confidence, instead of being fearful of the world around them.
            </li>
          </ol>
        </div>
        <div className='centerImg'>
          {kids
            .filter((img) => img.id === 'here_to_help_ziggy')
            .map((Img) => (
              <div key={Img.id} id={Img.id} className={Img.pos}>
                <img src={Img.image} alt={Img.alt} className='img-size' />
              </div>
            ))}
        </div>
        <div className='slim-text-block white-text centered-text'>
          <p>
            If for any reason a child in your care cannot fully enjoy the
            benefits of the HOPE app, please email us in your nursery or
            pre-school hub - we will work with you to adapt or rework the lesson
            at no cost!
          </p>
        </div>
        <div className='centerImg'>
          {kids
            .filter((img) => img.id === 'ziggys_services')
            .map((Img) => (
              <div key={Img.id} id={Img.id} className={Img.pos}>
                <img src={Img.image} alt={Img.alt} className='img-size' />
              </div>
            ))}
        </div>
        <div className='slim-text-block white-text sideImg'>
          {kids
            .filter((img) => img.section === 'four')
            .map((Img) => (
              <div key={Img.id} id={Img.id} className={Img.pos}>
                <img src={Img.image} alt={Img.alt} className='img-size' />
              </div>
            ))}
          <h2 className='centered-text'>What You Get</h2>
          <ul className='list-content'>
            <li>
              We will lend you a tablet with Ziggy's software pre-installed -
              all we ask is that you pay a £500 deposit
            </li>
            <li>
              After completing a lesson, you will have access to printable
              stickers! Children can collect them for their HOPE booklet to
              track progress and take home to show their parents what they have
              learnt!
            </li>
          </ul>
        </div>
        <div className='centerImg top-spacing'>
          {kids
            .filter((img) => img.id === 'origami')
            .map((Img) => (
              <div key={Img.id} id={Img.id} className={Img.pos}>
                <img src={Img.image} alt={Img.alt} className='img-size' />
              </div>
            ))}
        </div>
        <div className='slim-text-block white-text sideImg'>
          {kids
            .filter((img) => img.section === 'five')
            .map((Img) => (
              <div key={Img.id} id={Img.id} className={Img.pos}>
                <img src={Img.image} alt={Img.alt} className='img-size' />
              </div>
            ))}
          <h2 className='centered-text'>How You Pay for Lessons</h2>
          <ul className='list-content'>
            <li>
              Your deposit is used to pay for lessons - for example, a{' '}
              <span className='emphasized-text'>£500</span> deposit pays for 100
              lessons for 20 children (at a cost of 25p/per child/per lesson -
              that's <span className='emphasized-text'>2000</span> individual
              lessons!)
            </li>
            <li>
              Each lesson chosen will be deducted from your initial deposit at{' '}
              <span className='emphasized-text'>25p</span>/per lesson/per child
              (but if you find you can't choose 100 lessons prior to receiving
              the tablet, no need to worry - we will unlock lessons later for
              you at no additional cost!)
            </li>
            <li>
              Once you have spent your initial deposit, just top it up with a
              minimum of <span className='emphasized-text'>£100</span> to unlock
              more lessons!
            </li>
          </ul>
        </div>
        <div className='slim-text-block white-text top-spacing sideImg'>
          {kids
            .filter((img) => img.section === 'six')
            .map((Img) => (
              <div key={Img.id} id={Img.id} className={Img.pos}>
                <img src={Img.image} alt={Img.alt} className='img-size' />
              </div>
            ))}
          <h2 className='centered-text'>
            The <span className='benefits-text'>Benefits</span> for Your Nursery{' '}
          </h2>
          <ul className='list-content'>
            <li>
              Good news - if you recharge parents for the lessons at £1/per
              child/per lesson, your £500 deposit will generate £2,000 from
              parents earning your nursery up to{' '}
              <span className='emphasized-text'>£1,500</span> in profit!
            </li>
            <li>
              Increase new parent referrals and admissions - you will be amongst
              the first to offer AR lessons, giving your nursery a demonstrable
              competitive edge
            </li>
            <li>
              Become part of our charitable programme - HOPE is an organisation
              created by children, for the benefit of children worldwide! By
              paying HOPE 25p a lesson, a disadvantaged child will also receive
              a lesson that has been paid forward by you as part of the price
            </li>
          </ul>
        </div>
        <div className='slim-text-block white-text top-spacing sideImg'>
          {kids
            .filter((img) => img.section === 'seven')
            .map((Img) => (
              <div key={Img.id} id={Img.id} className={Img.pos}>
                <img src={Img.image} alt={Img.alt} className='img-size' />
              </div>
            ))}
          <h2 className='centered-text'>What's The Catch?</h2>
          <p>
            There's no catch - we know you will love Ziggy! That's why we are
            happy to offer:
          </p>
          <ul className='list-content'>
            <li>All necessary upgrades to your tablet free of cost</li>
            <li>
              No minimum or fixed term contract - opt in and out as you wish!
            </li>
            <li>
              If you are not totally satisfied, we offer a full refund of your
              deposit against any unused lessons
            </li>
          </ul>
        </div>
        <div className='centerImg top-spacing'>
          {kids
            .filter((img) => img.id === 'how_to_access_lessons')
            .map((Img) => (
              <div key={Img.id} id={Img.id} className={Img.pos}>
                <img src={Img.image} alt={Img.alt} className='img-size' />
              </div>
            ))}
        </div>
        <div className='slim-text-block white-text sideImg'>
          {kids
            .filter((img) => img.section === 'eight')
            .map((Img) => (
              <div key={Img.id} id={Img.id} className={Img.pos}>
                <img src={Img.image} alt={Img.alt} className='img-size' />
              </div>
            ))}
          <ol className='list-content'>
            <li>
              Set up your organisation as a 'Nursery' or 'Pre-School Club
              Member' at HOPE3G.com
            </li>
            <li>
              Go to HOPE3G.com
              <ul className='nested-list' type='disc'>
                <li>Set up each class you require lessons for</li>
                <li>
                  Add each teacher/assistant teacher to the class they teach
                </li>
                <li>Add each child to their respective class</li>
              </ul>
            </li>
          </ol>
          <p className='top-spacing'>
            Once a lesson is unlocked for a child, it remains free for them to
            access and revise with their teacher! Once completed, each child
            receives a printable certificate to colour or fold into origami and
            take home and show family members proof of what they have learnt!
          </p>
        </div>
        <div id='mailboxZiggy'>
          {kids
            .filter((img) => img.id === 'mailbox_ziggy_with_plane')
            .map((Img) => (
              <div key={Img.id} id={Img.id} className={Img.pos}>
                <img src={Img.image} alt={Img.alt} className='img-size' />
              </div>
            ))}
        </div>
        <div className='slim-text-block white-text sideImg'>
          {kids
            .filter((img) => img.section === 'nine')
            .map((Img) => (
              <div key={Img.id} id={Img.id} className={Img.pos}>
                <img src={Img.image} alt={Img.alt} className='img-size' />
              </div>
            ))}
          <h2 className='centered-text'>Contact Ziggy!</h2>
          <p>
            If children want to send messages to their new buddy Ziggy, they
            can! They don't need a stamp or his address - you can send the
            letters or messages to us, and Ziggy will always reply. Ziggy's
            reply will be sent to you at the nursery, so that we can work
            together to ensure his reply is helpful and motivating! Ziggy will
            always write lovely messages, providing positive reinforcement. When
            a child does something wonderful, let us know so Ziggy can thank and
            congratulate them! If they are suffering for any reason, please ask
            Ziggy to help. When it comes to the happiness of a child, our Board
            of Directors (Youth) are very clear: we will do anything we can to
            help.
          </p>
        </div>
        <div id='messageZiggy'>
          {kids
            .filter((img) => img.id === 'messages_ziggy')
            .map((Img) => (
              <div key={Img.id} id={Img.id} className={Img.pos}>
                <img src={Img.image} alt={Img.alt} className='img-size' />
              </div>
            ))}
        </div>
        <div className='slim-text-block white-text bottom-spacing sideImg'>
          {kids
            .filter((img) => img.section === 'ten')
            .map((Img) => (
              <div key={Img.id} id={Img.id} className={Img.pos}>
                <img src={Img.image} alt={Img.alt} className='img-size' />
              </div>
            ))}
          <h2 className='centered-text'>Marketing Assistance</h2>
          <p>
            In your club account, there is a library of free marketing material
            for you to use - all we ask is that you do not amend any of the
            material. If you would like us to make something specially for you,
            we will make the changes. This is just to protect Ziggy from being
            abused or becoming inappropriate! Though you will be charged for
            anything additional that we create specially for you, the amount is
            given to you as credit for more lessons.
          </p>
          <p>
            Our Board of Directors (Youth) have moved mountains to make what you
            see a reality. They have had to beg, borrow…but not steal! When you
            use or display our marketing material, please take a quick photo or
            video for us. This support means so much to HOPE and the children
            who are working to change the world for everyone!{' '}
          </p>
        </div>
        <div className='slim-text-block white-text top-spacing sideImg'>
          {kids
            .filter((img) => img.section === 'eleven')
            .map((Img) => (
              <div key={Img.id} id={Img.id} className={Img.pos}>
                <img src={Img.image} alt={Img.alt} className='img-size' />
              </div>
            ))}
          <h2 className='yellow-heading centered-text'>
            That's Not All Folks!
          </h2>
          <p>
            Once children have taught Ziggy his basic safety lessons, they get
            to go to his island - but the learning hasn't stopped! Children must
            help to build Ziggy a house by completing more lessons. Children can
            use their imagination and create a unique home for Ziggy - but
            because he lives on an island, he has a lot more survival and social
            skills to learn that the children must teach him! Some of these
            skills include:
          </p>
          <ul className='list-content slim-list indented-list'>
            <li>
              Social tolerance - Ziggy encounters other animals who look
              different but share his habitat, so he learns to be racially
              tolerant and appreciative of every religion!
            </li>
            <li>
              Sign language - typically, the education system focuses on
              teaching foreign languages - why not teach a language that so many
              people have to use because other forms of communication do not
              work for them?
            </li>
            <li>
              Learning to count, read and type - numbers and letters come to
              life!
            </li>
            <li>Being kind to new siblings</li>
            <li>How to care for your real-life pet</li>
            <li>How to collect drinkable water from rain and wastewater</li>
          </ul>
        </div>
        <div id='aboutHopeZiggy'>
          {kids
            .filter((img) => img.id === 'about_hope_ziggy')
            .map((Img) => (
              <div key={Img.id} id={Img.id} className={Img.pos}>
                <img src={Img.image} alt={Img.alt} className='img-size' />
              </div>
            ))}
        </div>
        <div className='text-block blue-text centered-text'>
          <h2>More About Hope</h2>
          <p>
            Humanitarian Operations (HOPE) is a UK-based charity, with its own
            specialist child safety and education division. Run by 12 child
            directors aged 8-18, our mission is to safeguard the freedom,
            well-being, and lives of children all over the world - especially in
            countries facing conflicts or natural disasters. Every child -
            wherever they live in the world and whatever their circumstances -
            deserves an education. That is why the HOPE app is free to download
            and will be available in every possible language! Currently, we have
            multiple embassies across London working on translating our app into
            their languages, as they see the value our lessons will have for
            children worldwide. Ziggy will be an essential for every nursery,
            pre-school, and parent with children between the ages of 2-8.
          </p>
        </div>
        <div className='text-block white-text'>
          <h2 className='centered-text'>
            Ziggy looks forward to joining you and meeting all his new friends!
          </h2>
        </div>
        {kids
          .filter((img) => img.section === 'twelve')
          .map((img) => (
            <div key={img.id} id={img.id} className='hugging_ziggys_images'>
              <img
                src={img.image}
                alt={img.alt}
                className={`img-size ${img.class}`}
              />
            </div>
          ))}
      </div>
    </div>
  );
}
