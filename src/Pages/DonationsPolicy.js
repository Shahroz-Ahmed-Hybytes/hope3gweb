import donation from '../Data/donation-policy';
import '../Styles/DonationsPolicy.css';

export default function DonationsPolicy() {
  return (
    <div className="outer-container">
      <div className="donation-inner-container">
        <div className="content">
          <h1 className='top-spacing'>Donation Policy</h1>
          <div className="policy-intro text-block white-text sideImg">
            {donation.filter(img => img.section === "intro").map(Img => (
              <div key={Img.id} id={Img.id} className={Img.pos}>
                <img src={Img.image} alt={Img.alt} className="img-size"/>
              </div>
              )
            )}
            <p>I'm Barnaby, the 14-year-old legal guru of Humanitarian Operations. My legal team have written a Donations Policy. But be careful because it has nothing to do with a Dough Nation which is a shame coz I was really excited by the sound of that coz I love eating cookie dough ice cream - maybe I will make my own country called Dough Nation.</p> 
            <p>Please read on below to see the entire Donations Policy which my legal team wrote - it's really important to understand.</p>
          </div>
          <div className="slim-text-block white-text top-spacing sideImg">
            {donation.filter(img => img.section === "one").map(Img => (
              <div key={Img.id} id={Img.id} className={Img.pos}>
                <img src={Img.image} alt={Img.alt} className="img-size"/>
              </div>
              )
            )}
            <h2 className='heading-bottom-spacing centered-text'>Introduction</h2>
            <p>This Policy governs the individual one-off and regular donations made by payment services provided through our website humanitarianoperations.org or bank transfers. This policy applies separately to each single donation that you make.</p>
            <p>Except as provided for in Regular Donations (see below) and unless specified, they do not form a contract allowing for future or successive transactions to be set up.</p>
          </div>
          <div className="slim-text-block white-text top-spacing sideImg">
            {donation.filter(img => img.section === "two").map(Img => (
              <div key={Img.id} id={Img.id} className={Img.pos}>
                <img src={Img.image} alt={Img.alt} className="img-size"/>
              </div>
              )
            )}
            <h2 className='heading-bottom-spacing centered-text'>Definitions and Scope</h2>
            <ul className="list-content">
              <li>A donation, often known as a gift, is a philanthropic transfer of funds made by an individual or organisation for the benefit of a charity.</li>
              <li>HOPE actively seeks and can accept donations from the following sources in accordance with the conditions mentioned below:</li>
              <li>Donations from individuals in the UK and overseas;</li>
              <li>Grants from charitable trusts and foundations in the UK and overseas;</li>
              <li>Donations from companies in the UK and overseas;</li>
              <li>Donations from legacy bequests;</li>
              <li>Grants from the UK government or their agencies and foundations;</li>
            </ul>
          </div>
          <div className="slim-text-block blue-text top-spacing sideImg">
            {donation.filter(img => img.section === "three").map(Img => (
              <div key={Img.id} id={Img.id} className={Img.pos}>
                <img src={Img.image} alt={Img.alt} className="img-size"/>
              </div>
              )
            )}
            <h2 className='heading-bottom-spacing centered-text'>Refusal of donations or gifts</h2>
            <p>We will accept most donations and will only refuse and return donations in exceptional circumstances.</p>
            <p>We have entire discretion to refuse a donation if we believe that the donor is involved in activities that appear to be in direct conflict with our charitable goals and objectives or in violation of any current guidelines. We will always have the charity's overall best interests in mind when deciding whether or not to accept a donation. We will use your donation as we see fit, but only to further our stated charity goals.</p>
            <p>HOPE will not accept donations where the sources or naming of a gift falls short of the standards determined through the procedures for the ethical review of grants and:</p>
            <ul className="list-content">
              <li>Could cause detriment to the charity's reputation;</li>
              <li>Will disproportionately decrease the amount of donations to further the work of the charity, undermine our vision and values;</li>
              <li>Are from individuals, groups or organisations which are known to take advantage of vulnerable people;</li>
              <li>Personal gifts to Humanitarian Operations' staff members, which should be discouraged at all times;</li>
              <li>Originate from unknown sources of funding and can potentially harm our relationships with other donors, service users, stakeholders or volunteers;</li>
              <li>May have been illegally or unethically obtained;</li>
              <li>Cash donations will not be accepted under any conditions; </li>
              <li>Are from organisations that might use their funding relationship with HOPE to distract criticism from their own involvement in human rights abuses, or with whom association would significantly risk our reputation.</li>
              <li>A donation is found to have been solicited from a donor who does not have full capacity to make the donation (including being a minor) and/or where undue pressure has been exerted to solicit the donation (either directly or by a third party we are working with) and there is evidence to support this position. </li>
              <li>A genuine error has been made in monies arriving in our bank account which were not intended for us or where a double donation has been made in error.</li>
              <li>Where monies have been taken from a card during a period of fraud or identity theft and this is confirmed in writing by the card company and/or relevant authorities such as the police.</li>
            </ul>
            <p>Note, that we accept donations from a variety of organisations - trusts, foundations, companies, commercial organisations and unions - where there will be a benefit to our human rights work, without compromising our mission, independence and credibility.</p>
          </div>
          <div className="slim-text-block blue-text top-spacing sideImg">
            {donation.filter(img => img.section === "four").map(Img => (
              <div key={Img.id} id={Img.id} className={Img.pos}>
                <img src={Img.image} alt={Img.alt} className="img-size"/>
              </div>
              )
            )}
            <h2 className='heading-bottom-spacing centered-text'>Safeguarding against illegal donations</h2>
            <p>We will take all reasonable steps to determine the ultimate source of funding for each donation and ensure that the funds are in no way connected with any illegal activity. We operate the Charity Commission's 'Know your Donor' principle and will make reasonable and appropriate attempts to identify any individual or organisation that gives us financial support. Particularly where significant sums are being donated, or the circumstances of the donation give rise to notable risk.</p>
            <p>All gifts and offers of support from organisations and governments will be screened against a set of ethical and human rights guidelines in accordance with our fundraising procedures. If we reject a gift or offer of support, we will give you an explanation for our decision.</p>
            <p>Research on donors and prospects in line with our Privacy Policy is an acceptable and intrinsic part of fundraising. Data surrounding individuals and companies who wish to be associated with Humanitarian Operations will be stored in a confidential file. It must be emphasised that any approaches undertaken by Humanitarian Operations will be handled in a sensitive and appropriate manner and comply with current data protection legislation.</p>
            <p>We may only accept anonymous individuals, or trust donations where there has been a rigorous third-party due diligence process, to confirm that HOPE is not potentially compromised. If a supporter makes themselves known to Humanitarian Operations but wishes their gift to remain anonymous, we will honour these wishes, on the basis that the donation carries no significant reputational risk. All anonymous donations of £25,000 or more will be reported to The Charity Commission as a serious incident (in line with current Charity Commission guidelines) and will follow the Humanitarian Operations' guidance on the handling of such donations.</p>
            <p>If a donation is received which may not be acceptable under the terms of this policy, the Head of Finance will alert the Trustees at the earliest opportunity. This will be researched further and the matter will be referred to the board with the necessary information regarding the donation.</p>
          </div>
          <div className="slim-text-block blue-text top-spacing sideImg">
            {donation.filter(img => img.section === "five").map(Img => (
              <div key={Img.id} id={Img.id} className={Img.pos}>
                <img src={Img.image} alt={Img.alt} className="img-size"/>
              </div>
              )
            )}
            <h2 className='heading-bottom-spacing centered-text'>The Donation Services</h2>
            <p>All payments made via our website are to be made by card payment. We also accept donations by cheque. Cheques can be made payable to Humanitarian Operations and sent to Humanitarian Operations, 1 Paris Garden, SE1 8ND.</p>
            <p>Once you confirm your consent and proceed with your donation using our website, you can choose for your transaction to be processed:</p>
            <ul className="list-content">
              <li>Through our payment services provider, Stripe; or </li>
              <li>Through our payment facilitator, PayPal;</li>
            </ul>
          </div>
          <div className="slim-text-block blue-text top-spacing sideImg">
            {donation.filter(img => img.section === "six").map(Img => (
              <div key={Img.id} id={Img.id} className={Img.pos}>
                <img src={Img.image} alt={Img.alt} className="img-size"/>
              </div>
              )
            )}
            <h2 className='heading-bottom-spacing centered-text'>Donation or gift processing</h2>
            <p>When donations or gifts are received, they must be accompanied by a completed donation receipt form. We will request your full name, contact details, the details of the card you want to use for making the donation, your email address, the date on which the gift is received. It is your responsibility to ensure you have provided us with the correct information.</p>
            <p>Where the donation is made by an organisation (corporation, charitable trust), a contact name and job title should be reported in addition to that of the company.</p>
          </div>
          <div className="slim-text-block blue-text top-spacing sideImg">
            {donation.filter(img => img.section === "seven").map(Img => (
              <div key={Img.id} id={Img.id} className={Img.pos}>
                <img src={Img.image} alt={Img.alt} className="img-size"/>
              </div>
              )
            )}
            <h2 className='heading-bottom-spacing centered-text'>Data Collection and Protection</h2>
            <p>Research on donors and prospects is an acceptable and intrinsic part of our donation policy. Data surrounding individuals and companies who wish to be associated with Humanitarian Operations will be stored in a confidential file. It must be emphasised that any approaches undertaken by Humanitarian Operations will be handled in a sensitive and appropriate manner and comply with current data protection legislation.</p>
            <p>Your payment will be processed by Stripe Payments Europe Ltd or PayPal Europe Ltd, who collects, use, and process your information, including payment information, in accordance with their privacy policies. You can access their privacy policy via the following links: <a href="https://stripe.com/gb/privacy" target="_blank" rel="noreferrer">https://stripe.com/gb/privacy</a> and <a href="https://www.paypal.com/us/webapps/mpp/ua/privacy-full" target="_blank" rel="noreferrer">https://www.paypal.com/us/webapps/mpp/ua/privacy-full</a></p>
            <p>We will under no circumstances share your personal details with any third party other than those mentioned above. For more information on how we protect your personal data, please read our Privacy Policy.</p>
          </div>
          <div className="slim-text-block blue-text top-spacing sideImg">
            {donation.filter(img => img.section === "eight").map(Img => (
              <div key={Img.id} id={Img.id} className={Img.pos}>
                <img src={Img.image} alt={Img.alt} className="img-size"/>
              </div>
              )
            )}
            <h2 className='heading-bottom-spacing centered-text'>Donation Refunds</h2>
            <p>Humanitarian Operations is governed by charity laws and is required to follow certain guidelines, which means that we can only reimburse a donation in certain prescribed circumstances.</p>
            <p>If you believe that a donation you have made should be refunded, please contact us within 14 days.</p>
            <p>We truly appreciate your donations and support and recognise that there may be an occasion when you need to speak to one of our team to discuss your donation. Please email us at <a href="mailto:customerservice@humanitarianoperations.org">customerservice@humanitarianoperations.org</a>.</p>
          </div>
          <div className="slim-text-block blue-text top-spacing sideImg">
            {donation.filter(img => img.section === "nine").map(Img => (
              <div key={Img.id} id={Img.id} className={Img.pos}>
                <img src={Img.image} alt={Img.alt} className="img-size"/>
              </div>
              )
            )}
            <h2 className='heading-bottom-spacing centered-text'>Regular donations</h2>
            <p>When you set up a regular donation you will be scheduling a series of donations to be made on the day of the month that you choose until further notice. You agree that the above terms and conditions will apply to each donation you make. By confirming that you wish to proceed with a regular donation, you authorise our payment service provider Stripe or our payment facilitator PayPal to request funds from your credit or debit card on the day of each month that you set. To cancel your regular donation, please contact us at <a href="mailto:customerservice@humanitarianoperations.org">customerservice@humanitarianoperations.org</a>.</p>
          </div>
          <div className="slim-text-block blue-text top-spacing sideImg">
            {donation.filter(img => img.section === "ten").map(Img => (
              <div key={Img.id} id={Img.id} className={Img.pos}>
                <img src={Img.image} alt={Img.alt} className="img-size"/>
              </div>
              )
            )}
            <h2 className='heading-bottom-spacing centered-text'>Legal or financial advice</h2>
            <p>Humanitarian Operations does not provide legal advice or financial planning services for donors. Prospective donors should seek the assistance of their own legal and financial advisors in matters relating to donations and to tax and estate planning consequence. To avoid conflicts of interest or the appearance of improper influence, Humanitarian Operations will not pay legal or other fees for the preparation of a donor's will or other documents which name Humanitarian Operations as a beneficiary.</p>
          </div>
          <div className="slim-text-block blue-text top-spacing">
            <h2 className='heading-bottom-spacing centered-text'>General Provisions</h2>
            <p>We reserve the right to amend this Policy at any time and it is your duty to read the latest version.</p>
            <p>These Donation Payment Policies are governed by English law and are subject to the exclusive jurisdiction of the English courts.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
