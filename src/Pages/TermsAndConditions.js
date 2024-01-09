import terms from '../Data/terms-and-conditions';
import '../Styles/TermsAndConditions.css';

export default function TermsAndConditions() {
  return (    
    <div className="outer-container"> 
      <div className="terms-inner-container">
        <div className="content">
          <h1 className="top-spacing">Terms and Conditions</h1>
          <div className="policy-intro text-block white-text">
            {terms.filter(img => img.section === "intro").map(Img => (
              <div key={Img.id} id={Img.id} className={Img.pos}>
                <img src={Img.image} alt={Img.alt} className="img-size"/>
              </div>
              )
            )}
            <p>I'm Barnaby, the 14-year-old legal guru of Humanitarian Operations. My legal team have made some Terms and Conditions for you to read. But for some reason it's about the rules for using our services - not to do with school term times or weather conditions like I first thought. Please don't be confused like I was! </p>
            <p>If you don't agree with at least some of the rules then you might not be able to use our website. That would be really sad ☹. Our website is made for children but it is important to have parents watching and helping too. Please click and learn more coz my legal team wrote something more professional and you should read it to understand the rules better. Learn more below</p>
          </div>
          <div className="centerImg">
            {terms.filter(img => img.id === "showing_ziggy").map(Img => (
              <div key={Img.id} id={Img.id}>
                <img src={Img.image} alt={Img.alt} className="img-size"/>
              </div>
              )
            )}
          </div>
          <div className="text-block white-text centered-text">
            <h2 className="top-spacing heading-bottom-spacing">1. INTRODUCTION AND OVERVIEW</h2>
            <p>It is important that you read these Terms and Conditions (the "Terms") carefully before using the Humanitarian Operations website ("our services", "our website") operated by Humanitarian Operation CIO ("HOPE", the "Charity", "we", "us", "our"). Our website offers free educational content and other services as may be defined by us in this document. Please note that our Terms are important as they set forth the conditions under which you may use our services. They also set out what is expected of both parties and gives you useful information about us and your rights.</p>
          </div>
          <div className="text-block white-text centered-text">
            <h2 className="top-spacing heading-bottom-spacing">2. DISCLAIMER</h2>
            <p>You acknowledge and agree that your use of our website is at your sole risk. We have made every effort to ensure that the content made available through our website is accurate, up-to-date, and correct at the time of publication. However, we do not guarantee the accuracy, timeliness, completeness, or fitness for purpose of the content provided on the website or the use of the website will be uninterrupted, virus-free or error-free. No responsibility is accepted by or on our behalf for any errors, omissions, or inaccurate information on the website of available through the website.</p>
          </div>
          <div className="centerImg">
            {terms.filter(img => img.id === "error_ziggy").map(Img => (
              <div key={Img.id} id={Img.id}>
                <img src={Img.image} alt={Img.alt} className="img-size"/>
              </div>
              )
            )}
          </div>
          <div className="text-block white-text centered-text">
            <p>By accessing or using our services you agree to have read, understood, and be bound by these Terms, including any policies referred to in this document. If you do not agree to these Terms, you may not access or use our services. In the event of any modification to the Terms, your continued use of the service means that you accept the modified Terms.</p> 
            <p>These Terms apply to all visitors, users and others who access or use the service. Please be aware that you may be required to accept additional Terms for some of our services. In case of any conflict or any ambiguity between this our current Terms and the new ones, note that the most recent version shall apply to you.</p>
          </div>
          <div className="centerImg">
            {terms.filter(img => img.id === "disclaimer_ziggy").map(Img => (
              <div key={Img.id} id={Img.id}>
                <img src={Img.image} alt={Img.alt} className="img-size"/>
              </div>
              )
            )}
          </div>
          <div className="text-block white-text centered-text sideImg">
            {terms.filter(img => img.section === "two").map(Img => (
              <div key={Img.id} id={Img.id} className={Img.pos}>
                <img src={Img.image} alt={Img.alt} className="img-size"/>
              </div>
              )
            )}
            <p>If any of these Terms are deemed invalid, void, or for any reason unenforceable, that condition will be deemed severable and will not affect the validity and enforceability of any remaining conditions.</p>
            <p>Our website is designed with children in mind. However, please note that  we require parental supervision for all children when using any HOPE platform.Children have the same rights as adults with regards to their personal data. This includes the right to access their personal data; request rectification; object to processing and have their personal data erased.</p>
            <p>We reserve the right to modify the Terms at any time, and in the event of any modification to the Terms, your continued use of the website represents your acceptance of the changes. It is your obligation to ensure that you have the latest version of our Terms.</p>
            <p>Please see our Privacy Policy to understand how we collect and process your personal information through us.</p>
          </div>
          <div className="centerImg">
            {terms.filter(img => img.id === "hope_logo_ziggy").map(Img => (
              <div key={Img.id} id={Img.id}>
                <img src={Img.image} alt={Img.alt} className="img-size"/>
              </div>
              )
            )}
          </div>
          <div className="text-block blue-text centered-text">
            <h2 className="top-spacing heading-bottom-spacing">3. ABOUT US</h2>
            <p>Humanitarian Operations CIO is a disaster relief organisation that was founded in 2004 and is dedicated to addressing the needs of victims of catastrophes. We are a registered charity under the number 1183873 and located at 1 Paris Garden, London, SE1 8ND. HOPE was initially founded for the public benefit and to assist victims of war, natural disaster, hardship or calamity. Since 2019, we sought approval to establish a charitable organisation that would be free to assist on a needs-assessed basis, in line with the principles established by the United Nations. It is now run for the public benefit of the provision of digital education under tools available to the end-user and educational establishments. It is designed to help community groups and underprivileged people who would normally be prevented from accessing such tools due to the associated cost incurred.</p>
          </div>
          <div className="slim-text-block blue-text sideImg">
            {terms.filter(img => img.section === "four").map(Img => (
              <div key={Img.id} id={Img.id} className={Img.pos}>
                <img src={Img.image} alt={Img.alt} className="img-size"/>
              </div>
              )
            )}
            <h2 className="top-spacing heading-bottom-spacing centered-text">4. SERVICES COMPRISED BY THESE TERMS AND CONDITIONS</h2>
            <p>Our Terms cover the following products and services that are accessed and/ or used in any way, which are operated by or otherwise made available by us:</p>
            <ul className="list-content">
              <li>Our website</li>
              <li>All email newsletters published or distributed by HOPE; and</li>
              <li>All other interactive features, services, and communications provided by HOPE.</li>
            </ul>
          </div>
          <div className="slim-text-block blue-text sideImg">
            {terms.filter(img => img.section === "five").map(Img => (
              <div key={Img.id} id={Img.id} className={Img.pos}>
                <img src={Img.image} alt={Img.alt} className="img-size"/>
              </div>
              )
            )}
            <h2 className="top-spacing heading-bottom-spacing centered-text">5. USING OUR WEBSITE</h2>
            <p>If you choose to use our website, you can:</p>
            <ul className="list-content">
              <li>Register an account with us (when you buy clothing items or use the app);</li>
              <li>Provide a donation;</li>
              <li>Become a child director;</li>
            </ul>
            <p>You must NOT use our services:</p>
            <ul className="list-content">
              <li>In any way that causes, or is likely to cause our services, or any access to it to be interrupted, damaged our impaired in any way; or</li>
              <li>For fraudulent purposes, or in connection with a criminal offence or other unlawful activity. (e.g., use viruses, trojans, worms or other technically harmful material).</li>
            </ul>
          </div>
          <div className="slim-text-block blue-text centered-text sideImg">
            {terms.filter(img => img.section === "six").map(Img => (
              <div key={Img.id} id={Img.id} className={Img.pos}>
                <img src={Img.image} alt={Img.alt} className="img-size"/>
              </div>
              )
            )}
            <h2 className="top-spacing heading-bottom-spacing">6. DEFINITIONS</h2>
            <ul className="list-content">
              <li>Content: means any and all content made available on or via HOPE services, products, videos, audio, games, graphics, branding (including trade names, trademarks, service marks, or logos), interactive features, software, metrics, virtual reality and augmented reality, and other materials.</li>
              <li>Humanitarian Operations website: mean the officialwebsite available at www.humanitarianoperations.org</li>
              <li>Intellectual Property Rights: means patents, registered and unregistered trademarks and service marks, domain names, registered and unregistered designs and design rights, copyright (including such rights in computer software and databases), database rights and moral rights (in each case for the full period, extensions, revivals and renewals), applications for the foregoing and the rights to apply for any of the foregoing anywhere in the world, and all similar rights anywhere in the world including those subsisting in inventions, designs, drawings and computer programs.</li>
              <li>Confidential Information: refers to any and all data, information, documents, software, or materials that are identifies as confidential or should reasonably be considered confidential in regard to our website and its users.</li>
              <li>Donation (gifts): is a philanthropic transfer of funds made by an individual or organisation for the benefit of a charity.</li>
            </ul>
          </div>
          <div className="text-block blue-text centered-text">
            <h2 className="top-spacing heading-bottom-spacing">7. PERSONAL INFORMATION</h2>
            <p>You can access our data and privacy policies by checking out our Privacy Policy below for clarification on what personal data we gather when you use our website. This includes children's data and privacy notice. By accessing our website, you agree to have read, understood, and be bound to our Terms, including any policies referred to in this document.</p>
          </div>
          <div className="text-block blue-text centered-text sideImg">
            {terms.filter(img => img.section === "eight").map(Img => (
              <div key={Img.id} id={Img.id} className={Img.pos}>
                <img src={Img.image} alt={Img.alt} className="img-size"/>
              </div>
              )
            )}
            <h2 className="top-spacing heading-bottom-spacing">8. YOUR ACCOUNT</h2>
            <p>You may be required to create an account to make a donation. It is important to understand that you are responsible for maintaining the confidentiality of your account and password, as well as restricting access to your device. You agree to accept liability for all activities that occur under your account or password, to the extent permitted by applicable law.</p>
            <p>You are under an obligation to ensure that the details you provide to us are correct and complete. You must also inform us of any change (your name, address, bank details, email address, etc.). You can access your information in the 'Your Account' section of the website.</p>
            <p>When using your account with us, you may not impersonate someone else, use a fraudulent e-mail address, or otherwise deceive us or any third parties. </p>
            <p>You agree that we may suspend or terminate your account, with or without notice, at our sole discretion and without liability to you or any third party if we believe that you are in breach of applicable laws, these Terms, guidelines, or policies. This is not our only remedy in the event of a breach of the Terms, and we may take any other action we reasonably believe appropriate.</p>
          </div>
          <div className="text-block centered-text blue-text">
            {terms.filter(img => img.section === "nine").map(Img => (
              <div key={Img.id} id={Img.id} className={Img.pos}>
                <img src={Img.image} alt={Img.alt} className="img-size"/>
              </div>
              )
            )}
            <h2 className="top-spacing heading-bottom-spacing">9. DONATIONS</h2>
            <p>HOPE actively seeks and can accept donations from the following sources in accordance with the conditions mentioned below:</p>
          </div>
          <div className="slim-text-block blue-text sideImg">
            <ul className="list-content">
              <li>Donations from individuals in the UK and overseas;</li>
              <li>Grants from charitable trusts and foundations in the UK and overseas;</li>
              <li>Donations from companies in the UK and overseas;</li>
              <li>Donations from legacy and bequests;</li>
              <li>Grants from the UK government or their agencies and foundations;</li>
            </ul>
            <h4>A. Acceptance Principles</h4>
            <p>We have the entire discretion to refuse a donation if we believe that the donor is involved in activities that appear to be in direct conflict with our charitable goals and objectives or in violation of any current guidelines. We will always have the charity's overall best interests in mind when deciding whether or not to accept a donation. We will use your donation as we see fit, but only to further our stated goals. </p>
            <ul className="list-content">
              <li>HOPE will not accept donations where the sources or naming of a gift falls short of the standards determined through the procedures for the ethical review of grants and:</li>
              <li>Could cause detriment to the charity's reputation;</li>
              <li>Will disproportionately decrease the amount of donations to further the work of the charity, undermine our vision and values;</li>
              <li>Are from individuals, groups or organisations which are known to take advantage of vulnerable people;</li>
              <li>Personal gifts to Humanitarian Operations' staff members, which should be discouraged at all times;</li>
              <li>Originate from unknown sources of funding and can potentially harm our relationships with other donors, service users, stakeholders or volunteers;</li>
              <li>May have been illegally or unethically obtained;</li>
              <li>Cash donations (i.e., physical cash) will not be accepted under any conditions.</li>
            </ul>
            <p>We will take all reasonable steps to determine the ultimate source of funding for each donation and ensure that the funds are in no way connected with any illegal activity.</p>
            <h4>B. Refusal of donation or gifts</h4>
            <p>If we receive donation which is unacceptable under the conditions mentioned above in clause 8.1, the Head of Finance will alert the Trustees at the earliest opportunity. This will be researched further and the matter will be referred to the board with the necessary information regarding the donation.</p>
            <p>All anonymous donations of £25,000 or more will be reported to The Charity Commission as a serious incident (in line with current Charity Commission guidelines) and will follow the Humanitarian Operations' guidance on the handling of such donations.</p>
            <h4>C. Donation Services</h4>
            <p>All payments made via our website are to be made by card payment. We also accept donations by cheque. Any cheques made payable to us should be sent to Humanitarian Operations CIO, 1 Paris Garden, SE1 8ND.</p>
            <p>Once you confirm your consent and proceed with your donation using our website, you can choose for your transaction to be processed:</p>
            <ol type="i" className="list-no-spacing list-content">
              <li>Through our payment services provider, Stripe; or</li>
              <li>Through our payment facilitator, PayPal.</li>
            </ol>
            <h4>D. Donation or gift processing</h4>
            <p>When donations or gifts are received, they must be accompanied by a completed donation receipt form. We will request your full name, contact details, the details of the card you want to use for making the donation, your email address, the date on which the gift is received. It is your responsibility to ensure you have provided us with the correct information.</p>
            <p>Where the donation is made by an organisation (e.g., corporation or a charitable trust), a contact name and job title should be reported in addition to that of the company.</p>
            <h4>E. Data Collection and Protection</h4>
            <p>Research on donors and prospects is an acceptable and intrinsic part of our donation policy. Data surrounding individuals and companies who wish to be associated with Humanitarian Operations will be stored in a confidential file. It must be emphasised that any approaches undertaken by Humanitarian Operations will be handled in a sensitive and appropriate manner and comply with current data protection legislation.</p>
            <p>Your payment will be processed by Stripe Payments Europe Ltd or PayPal Europe Ltd, who collects, uses and processes your information, including payment information, in accordance to their privacy policies. You can access their privacy policy via the following links: <a href="https://stripe.com/gb/privacy">https://stripe.com/gb/privacy</a> and <a href="https://www.paypal.com/us/webapps/mpp/ua/privacy-full">https://www.paypal.com/us/webapps/mpp/ua/privacy-full</a></p>
            <p>Under no circumstance will we share your personal details with any third party other than those mentioned above. For more information on how we protect your personal data, please read our Privacy Policy.</p>
            <h4>F. Donation Refunds</h4>
            <p>Humanitarian Operations is governed by charity laws of the United Kingdom and is required to follow certain guidelines, which means that we can only reimburse a donation in certain prescribed circumstances.</p>
            <p>If you believe that a donation you have made should be refunded, please contact us within 14 days.</p>
            <p>We truly appreciate your donations and support and recognise that there may be an occasion when you need to speak to one of our team to discuss your donation. Please email us at <a href="mailto:support@humanitarianoperations.org">support@humanitarianoperations.org</a>.</p>
            <h4>G. Regular donations</h4>
            <p>When you set up a regular donation you will be scheduling a series of donations to be made on the day of the month that you choose until further notice. You agree that the above terms and conditions will apply to each donation you make.</p>
            <p>By confirming that you wish to proceed with a regular donation, you authorise our payment service provider Stripe or our payment facilitator PayPal to request funds from your credit or debit card on the day of each month that you set.</p>
            <p>To cancel your regular donation, please contact us at <a href="mailto:support@humanitarianoperations.org">support@humanitarianoperations.org</a></p>
            <h4>H. Legal or financial advice</h4>
            <p>Humanitarian Operations does not provide legal advice or financial planning services for donors. Prospective donors should seek the assistance of their own legal and financial advisors in matters relating to donations and to tax and estate planning consequence.</p>
            <p>To avoid conflicts of interest or the appearance of improper influence, Humanitarian Operations will not pay legal or other fees for the preparation of a donor's will or other documents which name Humanitarian Operations as a beneficiary.</p>
          </div>
          <div className="text-block blue-text top-spacing sideImg">
            {terms.filter(img => img.section === "ten").map(Img => (
              <div key={Img.id} id={Img.id} className={Img.pos}>
                <img src={Img.image} alt={Img.alt} className="img-size"/>
              </div>
              )
            )}
            <h2 className="top-spacing heading-bottom-spacing centered-text">10. LINKS TO OTHER WEBSITES OR RESOURCES</h2>
            <p>We have no control and are not responsible for the availability of third-party links and resources made available on our website. We do not endorse or hold any liability for any content, advertising, products, or other materials available from such links.</p>
            <p>We hold no responsibility or liability for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any content, goods or services available on or through any links.</p>
          </div>
          <div className="centerImg">
            {terms.filter(img => img.id === "monopoly_ziggy").map(Img => (
              <div key={Img.id} id={Img.id}>
                <img src={Img.image} alt={Img.alt} className="img-size"/>
              </div>
              )
            )}
          </div>
          <div className="text-block blue-text">
            <h2 className="top-spacing heading-bottom-spacing centered-text">11. INTELLECTUAL PROPERTY RIGHTS AND CONTENT</h2>
            <p>All articles, information, content, and other materials presented on our website are property of or licensed to HOPE and are subject to copyright, trademarks, patents and/or other intellectual property rights.</p>
            <p>You are prohibited from reproducing, extracting, providing links to, or otherwise communicating or making available to third parties the whole or any part of the content on this website or any resources therein without our express written consent. You acknowledge that, by making use of this website, you are agreeing to comply with this prohibition and that any breach thereof is likely to result in legal proceedings being issued against you. You can only view the content on our website for your personal, non-commercial use.</p>
          </div>
          <div className="slim-text-block blue-text sideImg">
            {terms.filter(img => img.section === "eleven").map(Img => (
              <div key={Img.id} id={Img.id} className={Img.pos}>
                <img src={Img.image} alt={Img.alt} className="img-size"/>
              </div>
              )
            )}
            <h4>A. Trademarks</h4>
            <p>All product designs, graphics, logos, page headers, button icons, scripts, and service names included or made available through our services are trademarks or trade dress owned by us.</p>
            <p>Our trademarks and trade dress may not be used in connection with any product or service that is not provided by us, in any manner that is likely to cause confusion among customers or in any manner that disparages or discredits HOPE.</p>
            <p>All other trademarks and trade dress not owned by us that appear in our services are the property of their respective owners, who may or may not be affiliated with, connected to, or sponsored by us.</p>
            <h4>B. Patents</h4>
            <p>Portions of our services may operate under license of one or more patents.</p>
          </div>
          <div className="text-block blue-text">
            <h2 className="top-spacing heading-bottom-spacing centered-text">12. LIABILITY</h2>
            <p>You expressly acknowledge and agree that we shall not be liable for any indirect, incidental, special, consequential, or exemplary damages, nor for direct or indirect loss of profits revenue, business, anticipated savings, goodwill, opportunity, reputation, business interruption, use, data, or intangible losses even if we have been advised of the possibility of such damage.</p>
            <p>Nothing in these Terms shall affect the statutory rights of any individual or exclude or restrict any liability for fraud or for death or personal injury arising from our negligence.</p>
          </div>
          <div className="text-block blue-text sideImg">
            {terms.filter(img => img.section === "thirteen").map(Img => (
              <div key={Img.id} id={Img.id} className={Img.pos}>
                <img src={Img.image} alt={Img.alt} className="img-size"/>
              </div>
              )
            )}
            <h2 className="top-spacing heading-bottom-spacing centered-text">13. GENERAL TERMS</h2>
            <p>These general Terms (and any documents referred to, including the Privacy Policy) constitute the entire agreement between both parties in relation to your use of our website, superseding any existing prior agreements.</p>
            <p>These general Terms represent a contract between both parties, which is governed by and interpreted in accordance with the laws of England and Wales. Both parties irrevocably agree that any dispute or claim that arises shall be adjudicated exclusively by the Courts of England and Wales, although we may enforce any judgment of such Courts in any other jurisdiction in which you are located.</p>
            <p>Any term which may be deemed unenforceable or unlawful and fall to be struck out, or otherwise disregarded by a court shall be done so without prejudice to the rest of the agreement.</p>
            <p>Any failure by us to exercise or enforce any right or provision of these Terms shall not constitute a waiver of such right or provision.</p>
            <p>Without prior warning, we have the right to update, amend, or replace any portion of these Terms. It is your obligation to check for updates on a regular basis and ensure that you are reading the most recent version.</p>
          </div>
          <div className="text-block blue-text top-spacing sideImg">
            {terms.filter(img => img.section === "fourteen").map(Img => (
              <div key={Img.id} id={Img.id} className={Img.pos}>
                <img src={Img.image} alt={Img.alt} className="img-size"/>
              </div>
              )
            )}
            <h2 className="top-spacing heading-bottom-spacing centered-text">14. APPLICABLE LAW</h2>
            <p>These Terms and dealings with you are subjected to the laws of England and Wales and are dealt under the exclusive jurisdiction of the English Courts. If you would like to bring a matter to our attention, please contact us</p>
          </div>
          <div className="centerImg">
            {terms.filter(img => img.id === "flag_ball_ziggy").map(Img => (
              <div key={Img.id} id={Img.id}>
                <img src={Img.image} alt={Img.alt} className="img-size"/>
              </div>
              )
            )}
          </div>
          <div className="text-block blue-text">
            <h2 className="top-spacing heading-bottom-spacing centered-text">15. INTERNATIONAL ACCESS</h2>
            <p>Our services are provided from the United Kingdom and we make no representation regarding the legality of the services in any other country. It is prohibited to access our website from territories where the content is considered to be illegal. It is your responsibility to make sure that your use of our services is compliant with the applicable laws in your jurisdiction.</p>
          </div>
          <div className="text-block blue-text top-spacing sideImg">
            {terms.filter(img => img.section === "sixteen").map(Img => (
              <div key={Img.id} id={Img.id} className={Img.pos}>
                <img src={Img.image} alt={Img.alt} className="img-size"/>
              </div>
              )
            )}
            <h2 className="top-spacing heading-bottom-spacing centered-text">16. WAIVER</h2>
            <p>If you breach these Terms and we take no action, we will still be entitled to use our rights and remedies in any other situation where you breach these Terms.</p>
          </div>
          <div className="centerImg">
            {terms.filter(img => img.id === "here_to_help_ziggy").map(Img => (
              <div key={Img.id} id={Img.id} className={Img.pos}>
                <img src={Img.image} alt={Img.alt} className="img-size"/>
              </div>
              )
            )}
          </div>
          <div className="text-block blue-text">
            <h2 className="top-spacing heading-bottom-spacing centered-text">17. CONTACT DETAILS</h2>
            <p>This website is owned and maintained by: Humanitarian Operations</p>
            <p>We really want you to be happy. If you did not enjoy our services would like to raise a complaint in relation to our Service or Products, please contact us at <a href="mailto:recruitment@humanitarianoperations.org">recruitment@humanitarianoperations.org</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}