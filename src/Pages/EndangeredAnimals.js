import endangered_animals from '../Data/endangered-animals';
import { Link } from 'react-router-dom';
import '../Styles/EndangeredAnimals.css';
import ReactPlayer from 'react-player';

export default function EndangeredAnimals () {
  return (
    <div className="endangered-outer-container">
      <div className="endangered-inner-container">
        <div className="content">
          <section id="intro">
            <div className="intro-container">
              <div className="intro-txt">
                <p>We all depend on wildlife to survive. It's crucial for a healthy and sustainable planet.</p>
                <p>The more species of plants and animals there are, the greater everyone's potential resistance is to diseases. Surely that's important for our own survival? Indeed, diseases would spread faster and more efficaciously if there were fewer organisms to battle against them.</p>
                <p>But that's just the start of it. So much vital medicine comes from wildlife - like plants, herbs and spices. Medicines like morphine, penicillin and aspirin are all derived from plants. Today, researchers still look to nature to find cures for cruel debilitating diseases like cancer and Alzheimer's.</p>
                <p>Wildlife is also a cultural lifeblood to so many. Some species are even considered sacred. Today, for example, pandas are an important national symbol of China; and roses are a traditional English emblem which the England rugby team proudly display on their shirts. So, how important do YOU think wildlife is and what are you doing to save it for your children and theirs to follow?</p>
              </div>
            </div>
          </section>
          <section id="rabbits" className="animals">
            <div className="animal-heading">
              <div className="title">
                <h1>Save the Rabbits</h1>
              </div>
              <div className="animal-media">
                {endangered_animals.filter(Img => Img.section === "rabbit").map(Img => (
                  <div key={Img.id} id={Img.id} className={Img.pos}>
                    {Img.href.includes("https") ? 
                    <a href={Img.href} target={Img.target} rel={Img.rel}><img src={Img.image} alt={Img.alt} className='img-size'/></a> :
                    <Link to={Img.href} target={Img.target} rel={Img.rel}><img src={Img.image} alt={Img.alt} className='img-size'/></Link>} 
                  </div>
                  )
                )}
                <div id="rabbit_video" className="absolute">
                  <ReactPlayer 
                  controls={true}
                  url="https://hohopevideoorg.s3.eu-west-2.amazonaws.com/Rabbit/Rabbit+Social_V1.mp4"  
                  width="100%"
                  height="36%"  
                  />
                </div>
              </div>
            </div>
            <div className="animal-description top-spacing">
              <div className="animals-txt">
                <p>For decades, drug and chemical safety assessments have been based on animal testing using live animals such as rabbits, rodents, and dogs. Although some procedures classify themselves as “mild,” all procedures can cause the animals physical, psychological suffering. The fate of these animals lies in being killed at the end of an experiment or re-used in subsequent experiments.</p>
                <p>Aside from the ethical issues of animal testing, most scientists agree that animal testing is time- and resource-intensive, that it is not adequately efficient and that the ends do not justify the means. Yet still no changes have been made in this sphere. Scientists still over rely on animals for testing and research because of a lack of knowledge and expertise in cutting-edge non-animal technologies.</p>
                <p>For humans and animals alike, a change must be made! With the Save the Rabbits campaign HOPE is committed to contributing to this serious cause. Proceeds from the sale of reka wear bunny beanies will help scientists and laboratories to start incorporating the latest animal-free research methods in their work; in turn sparing animals from a lifetime's worth of scientific subjugation.</p>
                <p>Together we can change tomorrow, but with HOPE we can start today! Thank you for being a part of our beautiful dream!</p>
              </div>
            </div>
          </section>
          <section id="amur_leopards" className="animals">
            <div className="animal-heading">
              <div className="title">
                <h1>Save the Amur Leopards</h1>
              </div>
              <div className="animal-media">
                {endangered_animals.filter(Img => Img.section === "amur_leopard").map(Img => (
                  <div key={Img.id} id={Img.id} className={Img.pos}>
                    {Img.href.includes("https") ? 
                    <a href={Img.href} target={Img.target} rel={Img.rel}><img src={Img.image} alt={Img.alt} className='img-size'/></a> :
                    <Link to={Img.href} target={Img.target} rel={Img.rel}><img src={Img.image} alt={Img.alt} className='img-size'/></Link>} 
                  </div>
                  )
                )}
                <div id="amur_leopard_video" className="absolute">
                  <ReactPlayer 
                  controls={true}
                  url="https://hohopevideoorg.s3.eu-west-2.amazonaws.com/Amur+Leopard/Amur+Leopard+Social_V1.mp4"  
                  width="100%"
                  height="36%"  
                  />
                </div>
              </div>
            </div>
            <div className="animal-description top-spacing">
              <div className="animals-txt">
                <p>The Amur Leopard is one the rarest and most endangered big cats in the world! Their greatest threats include poaching, habitat destruction and fragmentation, dwindling sources of prey, and poorly regulated trophy hunting.</p>
                <p>But that's not it. The perilously low population of Amur leopards could lead the species to extinction due to multiple generations of inbreeding. And the brevity of their Spring breeding window in which females are fertile means that opportunities for them to produce offspring are really scarce.</p>
                <p>The Amur leopard holds great significance ecologically. As the top predators in their territories, they're crucial for keeping the right balance of species in their area.</p>
                <p>Considering their potentially fatally low numbers, HOPE has launched the Save the Amur Leopards campaign via reka wear. HOPE donates proceeds from the sales of reka wear's Amur leopard themed products to the Phoenix Fund. We love our friends at Phoenix because their projects are working really hard to protect and save the Amur Leopard for children like us and future generations that follow.</p>
                <p>Together we can change tomorrow, but with HOPE we can start today! Thank you for being a part of our beautiful dream!</p>
              </div>
            </div>
          </section>
          <section id="hammerheads" className="animals">
            <div className="animal-heading">
              <div className="title">
                <h1>Save the Hammerheads</h1>
              </div>
              <div className="animal-media">
                {endangered_animals.filter(Img => Img.section === "hammerhead").map(Img => (
                  <div key={Img.id} id={Img.id} className={Img.pos}>
                    {Img.href.includes("https") ? 
                    <a href={Img.href} target={Img.target} rel={Img.rel}><img src={Img.image} alt={Img.alt} className='img-size'/></a> :
                    <Link to={Img.href} target={Img.target} rel={Img.rel}><img src={Img.image} alt={Img.alt} className='img-size'/></Link>} 
                  </div>
                  )
                )}
                <div id="hammerhead_video" className="absolute">
                  <ReactPlayer 
                  controls={true}
                  url="https://hohopevideoorg.s3.eu-west-2.amazonaws.com/shark/Shark+Social_V2.mp4"  
                  width="100%"
                  height="36%"  
                  />
                </div>
              </div>
            </div>
            <div className="animal-description top-spacing">
              <div className="animals-txt">
                <p>Accidental and commercially targeted entrapment both pose a significant threat to the survival of Hammerhead Sharks. They are easily caught up in giant fishing nets meant for tuna fisheries. Meanwhile, Hammerhead Sharks are similarly threatened by the global shark fin trade as their large fins, neat hides, and liver oil are highly prized.</p>
                <p>Sharks are apex predators in the marine environment, they play a crucial role in maintaining healthy and well-balanced marine ecosystems. They ensure the diversity of their prey species by preventing any one from becoming over populated. They also help keep a lid on apex predator numbers as they compete for prey instead of having free roam. And they even help prevent algae overgrowth that advances the decline of coral reefs.</p>
                <p>HOPE is taking action with reka wear to help save Hammerhead Sharks by donating money from the sale of each Hammerhead Shark Beanie to Sea Shepherd Conservation Society UK. They will use this donation to fund vital equipment and technology for their projects, such as Apex Harmony - Timor Leste 2017.</p>
                <p>Together we can change tomorrow, but with HOPE we can start today! Thank you for being a part of our beautiful dream!</p>
              </div>
            </div>
          </section>
          <section id="blue_whales" className="animals">
            <div className="animal-heading">
              <div className="title">
                <h1>Save the Blue Whales</h1>
              </div>
              <div className="animal-media">
                {endangered_animals.filter(Img => Img.section === "blue_whale").map(Img => (
                  <div key={Img.id} id={Img.id} className={Img.pos}>
                    {Img.href.includes("https") ? 
                    <a href={Img.href} target={Img.target} rel={Img.rel}><img src={Img.image} alt={Img.alt} className='img-size'/></a> :
                    <Link to={Img.href} target={Img.target} rel={Img.rel}><img src={Img.image} alt={Img.alt} className='img-size'/></Link>} 
                  </div>
                  )
                )}
                <div id="blue_whale_video" className="absolute">
                  <ReactPlayer 
                  controls={true}
                  url="https://hohopevideoorg.s3.eu-west-2.amazonaws.com/Blue+Whale/Blue+Whale+Social_V1.mp4"  
                  width="100%"
                  height="36%"  
                  />
                </div>
              </div>
            </div>
            <div className="animal-description top-spacing">
              <div className="animals-txt">
                <p>We may soon lose the largest animal ever known to have lived on Earth! Blue whales are endangered due to environmental changes, including habitat loss and toxic waste in the ocean. Ongoing state-sponsored whaling has also seriously affected their numbers - how irresponsible of those political leaders is that?! Meanwhile, collisions with ships and entanglement in fishing gear have caused direct harm and injuries to Blue Whales too. And, climate change is also threatening Krill, the Blue Whales' main source of food - and without food how can any mammal survive?</p>
                <p>As the mammal at the top of the marine food chain, whales play a huge role in maintaining the overall health of the marine environment. They stabilise the aquatic food chain and reproduction of other species. We can contribute to preserving the entire marine ecosystem by protecting Blue whales.</p>
                <p>HOPE is playing its part with the Save the Blue Whales campaign by reka wear. In collaboration with Sea Shepherd Conservation Society UK, HOPE will donate proceeds from sales of Blue whale products to provide the technology they needed for operations, such as Operation Bloody Fjords and Whale Defence Campaign.</p>
                <p>Together we can change tomorrow, but with HOPE we can start today! Thank you for being a part of our beautiful dream!</p>
              </div>
            </div>
          </section>
          <section id="black_footed_ferrets" className="animals">
            <div className="animal-heading">
              <div className="title">
                <h1>Save the Black-Footed Ferrets</h1>
              </div>
              <div className="animal-media">
                {endangered_animals.filter(Img => Img.section === "black_footed_ferret").map(Img => (
                  <div key={Img.id} id={Img.id} className={Img.pos}>
                    {Img.href.includes("https") ? 
                    <a href={Img.href} target={Img.target} rel={Img.rel}><img src={Img.image} alt={Img.alt} className='img-size'/></a> :
                    <Link to={Img.href} target={Img.target} rel={Img.rel}><img src={Img.image} alt={Img.alt} className='img-size'/></Link>} 
                  </div>
                  )
                )}
                <div id="black_footed_ferret_video" className="absolute">
                  <ReactPlayer 
                  controls={true}
                  url="https://hohopevideoorg.s3.eu-west-2.amazonaws.com/Black+footed+ferret/Black+Footed+Ferret+Social_V1.mp4"  
                  width="100%"
                  height="36%"  
                  />
                </div>
              </div>
            </div>
            <div className="animal-description top-spacing">
              <div className="animals-txt">
                <p>Imagine a world without Black-footed ferrets! On two whole separate occasions we humans have had to contemplate this. That's because this species was twice tragically believed to have gone extinct!!</p>
                <p>Teetering this close to becoming history has caused innumerous problems for the dissipating species. But the Black-footed ferret is desperately struggling to triumph over catastrophe - and your help could make their lives a little bit less of a struggle!</p>
                <p>This is not an easy battle at all. Habitat loss and non-native diseases continue to threaten their recovery, and considering they are entirely dependent on prairie dogs for food and shelter, appropriate reintroduction sites are not easy to find.</p>
                <p>HOPE wants to help ensure the Black-footed ferret's survival. Through the Save the Black-footed ferret campaign via reka wear, we are donating proceeds from campaign products to Prairie Wildlife Research. This donation will fund important equipment and technology for their projects, like Reintroduction, Monitoring, and Translocation which works to preserve the Black-footed Ferret and its natural habitat.</p>
                <p>Together we can change tomorrow, but with HOPE we can start today! Thank you for being a part of our beautiful dream!</p>
              </div>
            </div>
          </section>
          <section id="tigers" className="animals">
            <div className="animal-heading">
              <div className="title">
                <h1>Save the Tigers</h1>
              </div>
              <div className="animal-media">
                {endangered_animals.filter(Img => Img.section === "tiger").map(Img => (
                  <div key={Img.id} id={Img.id} className={Img.pos}>
                    {Img.href.includes("https") ? 
                    <a href={Img.href} target={Img.target} rel={Img.rel}><img src={Img.image} alt={Img.alt} className='img-size'/></a> :
                    <Link to={Img.href} target={Img.target} rel={Img.rel}><img src={Img.image} alt={Img.alt} className='img-size'/></Link>} 
                  </div>
                  )
                )}
                <div id="tiger_video" className="absolute">
                  <ReactPlayer 
                  controls={true}
                  url="https://hohopevideoorg.s3.eu-west-2.amazonaws.com/Tiger/TIger+Social_V1.mp4"  
                  width="100%"
                  height="36%"  
                  />
                </div>
              </div>
            </div>
            <div className="animal-description top-spacing">
              <div className="animals-txt">
                <p>We can't afford to lose any more tigers! The Bali, Javan, and Caspian Tigers are all extinct as a result of illegal poaching, habitat loss, shrinking food supply, human population growth, climate change, and a demand for products made from tigers that stimulate the illegal wildlife trade.</p>
                <p>Do we want the same fate to befall the remaining subspecies of tigers? They are an important part of ecosystems and indigenous cultures!</p>
                <p>Tragically, their destiny is bleak because they are threatened by the same dangers that killed off the Bali, Javan and Caspian Tigers. The only difference now is that these dangers present a greater risk to tigers as a whole.</p>
                <p>When you buy a tiger beanie from reka wear, HOPE makes a donation to Wildcats Conservation Alliance working to protect and conserve the remaining tiger subspecies, including Bengal Tigers and Amur Tigers.</p>
                <p>Tigers are endangered and we have to prevent their extinction, if we work together they have a chance and with HOPE we can start today.</p>
              </div>
            </div>
          </section>
          <section id="sea_turtles" className="animals">
            <div className="animal-heading">
              <div className="title">
                <h1>Save the Sea Turtles</h1>
              </div>
              <div className="animal-media">
                {endangered_animals.filter(Img => Img.section === "sea_turtle").map(Img => (
                  <div key={Img.id} id={Img.id} className={Img.pos}>
                    {Img.href.includes("https") ? 
                    <a href={Img.href} target={Img.target} rel={Img.rel}><img src={Img.image} alt={Img.alt} className='img-size'/></a> :
                    <Link to={Img.href} target={Img.target} rel={Img.rel}><img src={Img.image} alt={Img.alt} className='img-size'/></Link>} 
                  </div>
                  )
                )}
                <div id="sea_turtle_video" className="absolute">
                  <ReactPlayer 
                  controls={true}
                  url="https://hohopevideoorg.s3.eu-west-2.amazonaws.com/Sea+turtle/Sea+Turtle+Social_V1.mp4"  
                  width="100%"
                  height="36%"  
                  />
                </div>
              </div>
            </div>
            <div className="animal-description top-spacing">
              <div className="animals-txt">
                <p>Over the last two centuries, human activity has threatened the survival of Sea turtles - and they've been around since the dinosaurs so we must be doing something really wrong. Indeed, they continue to be slaughtered for their meat, skin, and shells. And, their eggs are stolen from beaches for their economic value by illegal traders and smugglers before they can hatch. Moreover, habitat destruction and accidental capture in fishing gear, climate change, and pollution are also posing serious threats to their survival.</p>
                <p>Sea turtles are a fundamental link in marine ecosystems, so protecting them is vital. For instance, they help maintain the health of seagrass beds and coral reefs which in turn benefit commercially valuable species, such as shrimp and tuna. Measures such as protecting Sea turtles' habitats, minimising climate change impacts, and addressing illegal trade can contribute to preserving them, and subsequently the wider web of marine ecosystems.</p>
                <p>HOPE is helping these beautiful creatures with our Save The Sea Turtles campaign by reka wear. Collaborating with Sea Shepherd Conservation Society UK, HOPE donates proceeds from each turtle beanie sold to fund our Sea turtle campaign. This will help them buy the gadgets and technology needed for operations such as Operation Nymba and the Turtle Defence Campaign. We love turtles and we love Sea Shepherd for saving them, so please join in because we're not too late yet.</p>
                <p>Together we can change tomorrow, but with HOPE we can start today! Thank you for being a part of our beautiful dream!</p>
              </div>
            </div>
          </section>
          <section id="mountain_gorillas" className="animals">
            <div className="animal-heading">
              <div className="title">
                <h1>Save the Mountain Gorillas</h1>
              </div>
              <div className="animal-media">
                {endangered_animals.filter(Img => Img.section === "mountain_gorilla").map(Img => (
                  <div key={Img.id} id={Img.id} className={Img.pos}>
                    {Img.href.includes("https") ? 
                    <a href={Img.href} target={Img.target} rel={Img.rel}><img src={Img.image} alt={Img.alt} className='img-size'/></a> :
                    <Link to={Img.href} target={Img.target} rel={Img.rel}><img src={Img.image} alt={Img.alt} className='img-size'/></Link>} 
                  </div>
                  )
                )}
                <div id="mountain_gorilla_video" className="absolute">
                  <ReactPlayer 
                  controls={true}
                  url="https://hohopevideoorg.s3.eu-west-2.amazonaws.com/Gorilla/Gorilla+Social_V1.mp4"  
                  width="100%"
                  height="36%"  
                  />
                </div>
              </div>
            </div>
            <div className="animal-description top-spacing">
              <div className="animals-txt">
                <p>Over the years, the Mountain gorilla has become more and more endangered due to uncontrolled hunting, disease, habitat loss, and human conflict including the war in the Democratic Republic of Congo. Today there are less than 1,000 Mountain gorillas in the wild. Humans are the ones responsible for pushing the Mountain gorilla out of the wild and into extinction. Coronavirus is also deeply worrying as they are at risk from human diseases, such as flu and pneumonia.</p>
                <p>They need the chance to recover in the wild and enjoy their own lives free from human influence. It is our fault they face extinction, so it's our responsibility to save them.</p>
                <p>To help save these relatives of ours, HOPE has launched the Save the Mountain Gorillas campaign with reka wear. When you buy a reka wear Mountain gorilla Beanie, money will be donated to projects and charitable organisations working to preserve and protect the Mountain gorilla.</p>
                <p>Together we can change tomorrow, but with HOPE we can start today! Thank you for being a part of our beautiful dream!</p>
              </div>
            </div>
          </section>
          <section id="pandas" className="animals">
            <div className="animal-heading">
              <div className="title">
                <h1>Save the Pandas</h1>
              </div>
              <div className="animal-media">
                {endangered_animals.filter(Img => Img.section === "panda").map(Img => (
                  <div key={Img.id} id={Img.id} className={Img.pos}>
                    {Img.href.includes("https") ? 
                    <a href={Img.href} target={Img.target} rel={Img.rel}><img src={Img.image} alt={Img.alt} className='img-size'/></a> :
                    <Link to={Img.href} target={Img.target} rel={Img.rel}><img src={Img.image} alt={Img.alt} className='img-size'/></Link>} 
                  </div>
                  )
                )}
                <div id="panda_video" className="absolute">
                  <ReactPlayer 
                  controls={true}
                  url="https://hohopevideoorg.s3.eu-west-2.amazonaws.com/Panda/Panda+International+Thank+you_new.mp4"  
                  width="100%"
                  height="36%"  
                  />
                </div>
              </div>
            </div>
            <div className="animal-description top-spacing">
              <div className="animals-txt">
                <p>Giant pandas first became endangered in 1990 due to excessive poaching in the 80s and deforestation. Since bamboo is their main food source, the greatest threat to Giant pandas is habitat loss due to human activities. Deforestation has depleted their bamboo food source, and farmland expansion causes fragmentation of panda habitats which isolates them from potential partners.</p>
                <p>Since humans are the ones that have driven pandas to the edge of extinction, shouldn't we be the ones who should take the responsibility of saving them?</p>
                <p>These gentle bears play a crucial role in maintaining China's bamboo forests by spreading seeds and helping the vegetation to grow. And their presence also helps protect the prosperity of other species that live in China's bamboo forests, such as Dwarf Blue Sheep.</p>
                <p>To play our part in helping the Giant Panda population recover, HOPE is collaborating with Pandas International. They are committed to ensuring the preservation and propagation of the Giant panda. When you buy a reka wear panda beanie, money will be donated to pandas International to support their conservation activities</p>
                <p>Together we can change tomorrow, but with HOPE we can start today! Thank you for being a part of our beautiful dream!</p>
              </div>
            </div>
          </section>
          <section id="sumatran_rhinos" className="animals">
            <div className="animal-heading">
              <div className="title">
                <h1>Save the Sumatran Rhinos</h1>
              </div>
              <div className="animal-media">
                {endangered_animals.filter(Img => Img.section === "sumatran_rhino").map(Img => (
                  <div key={Img.id} id={Img.id} className={Img.pos}>
                    {Img.href.includes("https") ? 
                    <a href={Img.href} target={Img.target} rel={Img.rel}><img src={Img.image} alt={Img.alt} className='img-size'/></a> :
                    <Link to={Img.href} target={Img.target} rel={Img.rel}><img src={Img.image} alt={Img.alt} className='img-size'/></Link>} 
                  </div>
                  )
                )}
                <div id="sumatran_rhino_video" className="absolute">
                  <ReactPlayer 
                  controls={true}
                  url="https://hohopevideoorg.s3.eu-west-2.amazonaws.com/Sumatran+Rhino+Social/Sumatran+Rhino+Social_V3.mp4"  
                  width="100%"
                  height="36%"  
                  />
                </div>
              </div>
            </div>
            <div className="animal-description top-spacing">
              <div className="animals-txt">
                <p>Of the three species of critically endangered rhinos (Black, Javan, and Sumatran), the Sumatran rhino is the closest to complete extinction. Since 2015 on mainland Malaysia and 2019 in Malaysian Borneo, they have already been wiped out as a result of criminals mercilessly poaching them for their horns.</p>
                <p>Today, fewer than 80 Sumatran rhinos survive in very small and fragmented populations only in protected areas in Indonesia, such as Indonesia's Bukit Barisan, Gunung Leuser, and Way Kambas National Parks. This means that their chances of finding a mate to reproduce with - and to save themselves from extinction - are desperately low. </p>
                <p>HOPE wants to help save the majestic and critically vulnerable Sumatran rhino from extinction. Each time you buy a reka wear beanie with a Sumatran rhino on it, HOPE donates money to projects protecting the Sumatran rhinos from evil poachers. With only 80 left, time is of the essence but with HOPE you could start helping them today!</p>
                <p>Together we can change tomorrow, but with HOPE we can start today! Thank you for being a part of our beautiful dream!</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}