import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/GlobalStyles.css';
import { MainNavbar, HubNavbar, Footer } from './Components/ComponentIndex';
import { useState } from 'react';
import Cart from './Components/shoppingBasket/Cart';
import useWebAnalytics from './Components/Analytics';
import TermsAndConditions from './Pages/TermsAndConditions';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import FundraisingPolicy from './Pages/FundraisingPolicy';
import DonationsPolicy from './Pages/DonationsPolicy';
import EnvironmentalPolicy from './Pages/EnvironmentalPolicy';
import MediaCentre from './Pages/MediaCentre';
import EndangeredAnimals from './Pages/EndangeredAnimals';
import LearnMoreFeedback from './Pages/LearnMoreFeedBack';
import BuyNowFeedback from './Pages/BuyNowFeedBack';
import ScheduleADemoFeedBack from './Pages/ScheduleADemoFeedBack';

const Home = lazy(() => import('./Pages/Home'));
const BuyNow = lazy(() => import('./Pages/BuyNow'));
const ScheduleADemo = lazy(() => import('./Pages/ScheduleADemo'));
const LearnMore = lazy(() => import('./Pages/LearnMore'));
const AllAboutKids = lazy(() => import('./Pages/AllAboutKids'));
const ChildDirector = lazy(() => import('./Pages/ChildDirector'));
const NurseryHub = lazy(() => import('./Pages/NurseryHub'));
const NurseryHubLoggedIn = lazy(() => import('./Pages/NurseryHubLoggedIn'));
const NurseryHubGetPassword = lazy(() =>
  import('./Pages/NurseryHubGetPassword')
);
const NurseryHubEmailSent = lazy(() => import('./Pages/NurseryHubEmailSent'));
const NurseryHubNoAccount = lazy(() => import('./Pages/NurseryHubNoAccount'));
const NurserySettings = lazy(() => import('./Pages/NurserySettings'));
const ClassSettings = lazy(() => import('./Pages/ClassSettings'));
const ClassSetup = lazy(() => import('./Pages/ClassSetup'));
const Reports = lazy(() => import('./Pages/Reports'));
const EpisodeLog = lazy(() => import('./Pages/EpisodeLog'));
const EpisodeTaughtClass = lazy(() => import('./Pages/EpisodeTaughtClass'));
const EpisodeTaughtIndividual = lazy(() =>
  import('./Pages/EpisodeTaughtIndividual')
);
const BalanceHistory = lazy(() => import('./Pages/BalanceHistory'));
const DailyUsageSummary = lazy(() => import('./Pages/DailyUsageSummary'));
const Heros = lazy(() => import('./Pages/Heros'));
const AdditionalResources = lazy(() => import('./Pages/AdditionalResources'));
const Mailbox = lazy(() => import('./Pages/Mailbox'));
const BalanceTopUp = lazy(() => import('./Pages/BalanceTopUp'));
const AboutUs = lazy(() => import('./Pages/AboutUs'));
const Contact = lazy(() => import('./Pages/Contact'));
const Donate = lazy(() => import('./Pages/Donate'));
const Profile = lazy(() => import('./Pages/Profile'));
const Shop = lazy(() => import('./Pages/Shop'));
const UnderDevelopment = lazy(() => import('./Pages/UnderDevelopment'));

function App() {
  const [buyNowFormIsValid, setbuyNowFormIsValid] = useState(false);
  useWebAnalytics();

  return (
    <Router>
      <Suspense fallback=''>
        <Switch>
          <Route exact path='/'>
            <MainNavbar />
            <Home />
            <Footer className='homepage-footer-bg' />
          </Route>
          <Route exact path='/buy-now'>
            <MainNavbar />
            <BuyNow
              setbuyNowFormIsValid={setbuyNowFormIsValid}
              buyNowFormIsValid={buyNowFormIsValid}
            />
            <Footer className='alternate-footer-bg' />
          </Route>
          <Route exact path='/buy-now-feedback'>
            <MainNavbar />
            <BuyNowFeedback />
            <Footer className='alternate-footer-bg' />
          </Route>
          <Route exact path='/schedule-a-demo'>
            <MainNavbar />
            <ScheduleADemo />
            <Footer className='alternate-footer-bg' />
          </Route>
          <Route exact path='/schedule-a-demo-feedback'>
            <MainNavbar />
            <ScheduleADemoFeedBack />
            <Footer className='alternate-footer-bg' />
          </Route>
          <Route exact path='/learn-more'>
            <MainNavbar />
            <LearnMore />
            <Footer className='alternate-footer-bg' />
          </Route>
          <Route exact path='/learn-more-feedback'>
            <MainNavbar />
            <LearnMoreFeedback />
            <Footer className='alternate-footer-bg' />
          </Route>
          <Route exact path="/it's-all-about-kids">
            <MainNavbar />
            <AllAboutKids />
            <Footer className='alternate-footer-bg' />
          </Route>
          <Route exact path='/become-a-child-director'>
            <MainNavbar />
            <ChildDirector />
            <Footer className='alternate-footer-bg' />
          </Route>
          <Route exact path='/nursery-hub'>
            <MainNavbar />
            <NurseryHub />
            <Footer className='alternate-footer-bg' />
          </Route>
          <Route exact path='/nursery-hub-logged-in'>
            <HubNavbar />
            <NurseryHubLoggedIn />
            <Footer className='alternate-footer-bg' />
          </Route>
          <Route exact path='/nursery-hub-get-password'>
            <MainNavbar />
            <NurseryHubGetPassword />
            <Footer className='alternate-footer-bg' />
          </Route>
          <Route exact path='/nursery-hub-email-sent'>
            <MainNavbar />
            <NurseryHubEmailSent />
            <Footer className='alternate-footer-bg' />
          </Route>
          <Route exact path='/nursery-hub-no-account'>
            <MainNavbar />
            <NurseryHubNoAccount />
            <Footer className='alternate-footer-bg' />
          </Route>
          <Route exact path='/nursery-settings'>
            <HubNavbar />
            <NurserySettings />
            <Footer className='no-bg-footer' />
          </Route>
          <Route exact path='/class-settings'>
            <HubNavbar />
            <ClassSettings />
            <Footer className='no-bg-footer' />
          </Route>
          <Route exact path='/class-setup'>
            <HubNavbar />
            <ClassSetup />
            <Footer className='no-bg-footer' />
          </Route>
          <Route exact path='/reports'>
            <HubNavbar />
            <Reports />
            <Footer className='no-bg-footer' />
          </Route>
          <Route exact path='/lessons-log'>
            <HubNavbar />
            <EpisodeLog />
            <Footer className='no-bg-footer' />
          </Route>
          <Route exact path='/lessons-taught-class'>
            <HubNavbar />
            <EpisodeTaughtClass />
            <Footer className='no-bg-footer' />
          </Route>
          <Route exact path='/lessons-taught-individual'>
            <HubNavbar />
            <EpisodeTaughtIndividual />
            <Footer className='no-bg-footer' />
          </Route>
          <Route exact path='/balance-history'>
            <HubNavbar />
            <BalanceHistory />
            <Footer className='no-bg-footer' />
          </Route>
          <Route exact path='/daily-usage-summary'>
            <HubNavbar />
            <DailyUsageSummary />
            <Footer className='no-bg-footer' />
          </Route>
          <Route exact path='/heros'>
            <HubNavbar />
            <Heros />
            <Footer className='no-bg-footer' />
          </Route>
          <Route exact path='/additional-resources'>
            <HubNavbar />
            <AdditionalResources />
            <Footer className='no-bg-footer' />
          </Route>
          <Route exact path='/mailbox'>
            <HubNavbar />
            <Mailbox />
            <Footer className='no-bg-footer' />
          </Route>
          <Route exact path='/balance-top-up'>
            <HubNavbar />
            <BalanceTopUp />
            <Footer className='no-bg-footer' />
          </Route>
          <Route exact path='/page-under-development'>
            <MainNavbar />
            <UnderDevelopment />
            <Footer className='alternate-footer-bg' />
          </Route>
          <Route exact path='/about-us'>
            <MainNavbar />
            <AboutUs />
            <Footer className='alternate-footer-bg' />
          </Route>
          <Route exact path='/terms-and-conditions'>
            <MainNavbar />
            <TermsAndConditions />
            <Footer className='alternate-footer-bg' />
          </Route>
          <Route exact path='/privacy-policy'>
            <MainNavbar />
            <PrivacyPolicy />
            <Footer className='alternate-footer-bg' />
          </Route>
          <Route exact path='/fundraising-policy'>
            <MainNavbar />
            <FundraisingPolicy />
            <Footer className='alternate-footer-bg' />
          </Route>
          <Route exact path='/donations-policy'>
            <MainNavbar />
            <DonationsPolicy />
            <Footer className='alternate-footer-bg' />
          </Route>
          <Route exact path='/environmental-policy'>
            <MainNavbar />
            <EnvironmentalPolicy />
            <Footer className='alternate-footer-bg' />
          </Route>
          <Route exact path='/media-centre'>
            <MainNavbar />
            <MediaCentre />
            <Footer className='alternate-footer-bg' />
          </Route>
          <Route exact path='/endangered-animals'>
            <MainNavbar />
            <EndangeredAnimals />
            <Footer className='alternate-footer-bg' />
          </Route>

          <Route exact path='/contact'>
            <MainNavbar />
            <Contact />
            <Footer className='alternate-footer-bg' />
          </Route>

          <Route exact path='/donate'>
            <MainNavbar />
            <Donate />
            <Footer className='alternate-footer-bg' />
          </Route>

          <Route exact path='/profile' component={Profile} />

          <Route exact path='/shop'>
            {/* <HubNavbar /> */}
            <MainNavbar />
            <Shop />
            {/* {buyNowFormIsValid ?
              <Shop /> :
              <Home />} */}
            <Footer className='alternate-footer-bg' />
          </Route>
          <Route exact path='/cart' component={Cart} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
