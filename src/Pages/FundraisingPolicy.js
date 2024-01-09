import fundraising from '../Data/fundraising-policy';
import '../Styles/FundraisingPolicy.css';

export default function FundraisingPolicy() {
  return (
    <div className="outer-container">
      <div className="fundraising-inner-container">
        <div className="content">
          <h1 className='top-spacing'>Fundraising Policy</h1>
          <div className="policy-intro text-block white-text sideImg">
            {fundraising.filter(img => img.section === "intro").map(Img => (
              <div key={Img.id} id={Img.id} className={Img.pos}>
                <img src={Img.image} alt={Img.alt} className="img-size"/>
              </div>
              )
            )}
            <p>I'm Barnaby, the 14-year-old legal guru of Humanitarian Operations. My legal team have written a Fundraising Policy which makes sure that we don't damage our missions or values when receiving funds. There's nothing funny about fundraising from unethical sources - that would be very silly for a charity that's trying to change the world for the better, it could even cause... "fund-draining". Please read on below to see the full Fundraising Policy that my legal team wrote if you want to understand our policy better.</p>
          </div>
          <div className="slim-text-block white-text top-spacing">
            <h2 className='centered-text heading-bottom-spacing'>Introduction</h2>
            <p>This policy is provided solely for informational purposes and does not constitute a legally enforceable contract or grant any legal rights. It ensures that we do not compromise our missions and values when raising funds.</p>
          </div>
          <div className="slim-text-block white-text top-spacing sideImg">
            {fundraising.filter(img => img.section === "two").map(Img => (
              <div key={Img.id} id={Img.id} className={Img.pos}>
                <img src={Img.image} alt={Img.alt} className="img-size"/>
              </div>
              )
            )}
            <h2 className='centered-text heading-bottom-spacing'>Our Aims</h2>
            <ul className="list-spacing list-content">
              <li>Humanitarian Operations ("HOPE", "we") is a disaster relief organisation, founded in 2004 and dedicated to addressing the needs of victims of catastrophes. We are a registered charity under the number 1183873 and located at 1 Paris Garden, London, SE1 8ND. HOPE was initially founded for the public benefit and to assist victims of war, natural disaster, hardship or calamity. Since 2019, we sought approval to establish a charitable organisation that would be free to assist on a needs-assessed basis, in line with the principles established by the United Nations. It is now run for the public benefit of the provision of digital education under tools available to the end-user and educational establishments. Designed to help community groups and underprivileged people, who would normally be prevented from accessing such tools due to the associated cost incurred.</li>
              <li>Our aim can only be achieved if we have sufficient funds. We will share our mission, plan of action, overall impact on the community and will seek to engage as many supporters as possible from all around the world. We are committed to working alongside supporters and potential supporters to raise funds in a way which has the best interests of young people at heart.Humanitarian Operations' work is driven by our ability to fulfil our mission and to enrich the life of underprivileged communities by giving them access to education, not by our ability to raise fundings. Our supporters, by donating, contribute towards ensuring that children human rights are upheld regardless of where they live.</li>
            </ul>
          </div>
          <div className="slim-text-block white-text sideImg top-spacing">
            {fundraising.filter(img => img.section === "three").map(Img => (
              <div key={Img.id} id={Img.id} className={Img.pos}>
                <img src={Img.image} alt={Img.alt} className="img-size"/>
              </div>
              )
            )}
            <h2 className='centered-text heading-bottom-spacing'>Policy Statement</h2>
            <p>Fundraising refers to the engagement of both individual and organisational financial contributions to HOPE's work, as well as commercial and retail operations we engage in to generate revenue. HOPE seeks to provide the best fundraising experience possible to its supporters so that, together, we can do more to raise awareness and protect children human rights. It is vital that our fundraising is transparent, legal, respectful and ethical.</p>
            <p>This document forms our agreement with our supporters across the UK and worldwide in the way in which we will conduct our fundraising activities.</p>
          </div>
          <div className="slim-text-block white-text top-spacing sideImg">
            {fundraising.filter(img => img.section === "four").map(Img => (
              <div key={Img.id} id={Img.id} className={Img.pos}>
                <img src={Img.image} alt={Img.alt} className="img-size"/>
              </div>
              )
            )}
            <h2 className='centered-text heading-bottom-spacing'>Fundraising Compliance</h2>
            <p>We are committed to responsible fundraising practice, so we are registered with the Fundraising Regulator and have signed up to the fundraising promise. Fundraising is regulated in England and Wales by the Fundraising Regulator which holds the Code of Fundraising Practice for the UK and which makes sure all fundraising is legal, open, honest and accountable. The Code of Fundraising Practice gives the standards expected of all UK charitable fundraising organisations. It includes information about important principles and behaviours and explains the standards for each different area of fundraising - for example collections, events and trust fundraising.</p>
            <p>HOPE follows the Charity Governance Code for charities established in England and Wales, which consists of a good practice guide for charities, as a tool for continuous improvement towards the highest standards of fundraising policies carried out by charities.</p>
            <p>We comply with the HMRC guidance on Gift Aid. This suggests that, whenever we receive a donation through our Website from a UK taxpayer, we will reclaim a Gift Aid declaration. It is the taxpayer's responsibility to ascertain his/her qualification for Gift Aid entitlement. In case any doubts arise about the entitlement for Gift Aid we recommend taxpayers consult their advisors or HMRC about any accounting, taxation, or financial consequences of making a donation that may affect them.</p>
            <p>We abide by the General Data Protection Regulation (GDPR) and the Data Protection Act 2018 with regards to the protection of personal data, which means that we are committed to ensuring that any data collected by us will be:</p>
            <ul className="list-content">
              <li>Used fairly, lawfully and transparently;</li>
              <li>Used for specified, explicit purposes;</li>
              <li>Used in a way that is adequate, relevant and limited to only what is necessary;</li>
              <li>Accurate and, where necessary, kept up to date;</li>
              <li>Kept for no longer than is necessary;</li>
              <li>Handled in a way that ensures appropriate security, including protection against unlawful or unauthorised processing, access, loss, destruction or damage.</li>
            </ul>
            <p>All fundraising by means of lotteries, e.g. raffles, etc. must comply with the required licensing arrangements</p>
          </div>
          <div className="slim-text-block blue-text top-spacing sideImg">
            {fundraising.filter(img => img.section === "five").map(Img => (
              <div key={Img.id} id={Img.id} className={Img.pos}>
                <img src={Img.image} alt={Img.alt} className="img-size"/>
              </div>
              )
            )}
            <h2 className='centered-text heading-bottom-spacing'>Our Values</h2>
            <p>In accordance with the Fundraising Regulator's Code and the Fundraising Regulator's Promise, we apply and follow the values below in all our fundraising activities:</p>
            <ul className="list-content">
              <li>Commitment to high standards (Compliance with the law, Adherence to the Fundraising Code of Practice);</li>
              <li>Transparency, clarity and honesty with the public;</li>
              <li>Respect for the public's rights, privacy and freedom of choice;</li>
              <li>Fair and reasonable treatment toward the donor (showing empathy, not causing distress);</li>
              <li>Accountability and responsibility (managing the resources responsibly, having a complaints procedure);</li>
            </ul>
            <p>We will take responsibility for our actions, ensuring that our fundraising is carried out in line with the Code of Fundraising Practice.</p>
            <p>We will be transparent and honest about how donations are used to fulfil our mission, open about the methods we use to raise funds and who we work with, respectful to the wishes, preferences, personal information and circumstances of the people we interact with and we will take all steps necessary to comply with the law and sector fundraising practice standards.</p>
            <p>Nobody directly or indirectly employed by or volunteering for Humanitarian Operations shall accept commissions or bonuses for fundraising activities on behalf of Humanitarian Operations.</p>
            <p>No general solicitations shall be undertaken by telephone or door-to- door to the public.</p>
            <p>We will always be respectful. This means being mindful of and sensitive to any particular need that a donor may have. We will respond appropriately to the individual needs of our donors. We will consider all requests to adapt our approach (tone, language, communication technique) to suit the needs and requirements of the donor.</p>
            <p>We will treat donors fairly. We will not discriminate against any group or individual.</p>
            <p>When responding to a supporter or member of the public in vulnerable circumstances, staff must take all necessary steps to understand if the supporter is able to make an informed decision about donating to Humanitarian Operations and respond appropriately. If a supporter is deemed unable to make an informed decision, the member of staff must not accept the donation.</p>
          </div>
          <div className="centerImg">
            {fundraising.filter(img => img.id === "fundraising_posing_ziggy").map(Img => (
              <div key={Img.id} id={Img.id}>
                <img src={Img.image} alt={Img.alt} className="img-size"/>
              </div>
              )
            )}
          </div>
          <div className="slim-text-block blue-text top-spacing">
            <h2 className='centered-text heading-bottom-spacing'>Who this policy applies to</h2>
            <p>This policy describes the minimum standards for Humanitarian Operations' efforts to raise funds. All Humanitarian Operations staff, suppliers, and volunteers involved in fundraising are required to have a thorough understanding of this policy, and adhere to it and its associated procedures.</p>
            <p>It is the responsibility of managers in the Fundraising Department to ensure that staff, suppliers, and office and shop volunteers are aware of HOPE's fundraising policy, principles and associated procedures.</p>
            <p>Participation in fundraising activities by staff is voluntary and should not be imposed on individuals. The existing Trust insurance arrangement covers staff for certain 'low risk' fundraising activities. Any event not covered by this policy must obtain its own insurance cover and be approved by the fundraising office with appropriate fund managers.</p>
          </div>
          <div className="slim-text-block blue-text top-spacing sideImg">
            {fundraising.filter(img => img.section === "seven").map(Img => (
              <div key={Img.id} id={Img.id} className={Img.pos}>
                <img src={Img.image} alt={Img.alt} className="img-size"/>
              </div>
              )
            )}
            <h2 className='centered-text heading-bottom-spacing'>Our Fundraising Strategy</h2>
            <p>HOPE is impartial and independent of any government, political ideology, company or religious belief, and we ensure that our fundraising respects and protects our values.</p>
            <p>We actively seek funding in pursuit of our charitable and strategic objectives. We ensure that projects which we raise funds for reflect our mission, priorities, and that neither the funding opportunities we pursue, nor the requirements of funders, will divert us from our objectives.</p>
          </div>
          <div className="slim-text-block blue-text top-spacing sideImg">
            {fundraising.filter(img => img.section === "eight").map(Img => (
              <div key={Img.id} id={Img.id} className={Img.pos}>
                <img src={Img.image} alt={Img.alt} className="img-size"/>
              </div>
              )
            )}
            <h2 className='centered-text heading-bottom-spacing'>Ethical purchasing and use of services</h2>
            <p>When we purchase products and services in our efforts to raise funds, we will do so in accordance with our procurement policy and procedures. This means we will seek to ensure that we source materials, products and agencies' services for the best possible value while protecting our reputation, managing any risks, and ultimately aiming to work with organisations that reflect our own values and ethical standards.</p>
            <p>We may enter into commercial agreements with third party organisations for the purposes of raising funds, but in order to maintain our independence we do not endorse any third-party commercial products or services.</p>
          </div>
          <div className="slim-text-block blue-text top-spacing sideImg">
            {fundraising.filter(img => img.section === "nine").map(Img => (
              <div key={Img.id} id={Img.id} className={Img.pos}>
                <img src={Img.image} alt={Img.alt} className="img-size"/>
              </div>
              )
            )}
            <h2 className='centered-text heading-bottom-spacing'>Refusal of donations or gifts</h2>
            <p>The Fundraising Code specifies that we should not "refuse or return donations except in exceptional circumstances" (Code 2.3.1). This policy outlines the definitions of 'exceptional circumstances' in which we would refuse or return donations.</p>
            <p>We have entire discretion to refuse a donation if we believe that the donor is involved in activities that appear to be in direct conflict with our charitable goals and objectives or in violation of any current guidelines. We will always have the charity's overall best interests in mind when deciding whether or not to accept a donation. We will use your donation as we see fit, but only to further our stated charity goals.</p>
            <p>HOPE will not accept donations where the sources or naming of a gift falls short of the standards determined through the procedures for the ethical review of grants and:</p>
            <ul className="list-content">
              <li>Could cause detriment to the charity's reputation</li>
              <li>Will disproportionately decrease the amount of donations to further the work of the charity, undermine our vision and values;</li>
              <li>Are from individuals, groups or organisations which are known to take advantage of vulnerable people;</li>
              <li>Personal gifts to Humanitarian Operations' staff members, which should be discouraged at all times.</li>
              <li>Originate from unknown sources of funding and can potentially harm our relationships with other donors, service users, stakeholders or volunteers.</li>
              <li>May have been illegally or unethically obtained;</li>
              <li>Exceed the amount of £50.</li>
              <li>Cash donations will not be accepted under any conditions.</li>
              <li>Are from organisations that might use their funding relationship with HOPE to distract criticism from their own involvement in human rights abuses, or with whom association would significantly risk our reputation.</li>
              <li>A donation is found to have been solicited from a donor who does not have full capacity to make the donation (including being a minor) and/or where undue pressure has been exerted to solicit the donation (either directly or by a third party we are working with) and there is evidence to support this position.</li>
              <li>A genuine error has been made in monies arriving in our bank account which were not intended for us or where a double donation has been made in error.</li>
              <li>Where monies have been taken from a card during a period of fraud or identity theft and this is confirmed in writing by the card company and/or relevant authorities such as the police.</li>
            </ul>
            <p>We accept donations from a variety of organisations - trusts, foundations, companies, commercial organisations and unions - where there will be a benefit to our human rights work, without compromising our mission, independence and credibility.</p>
          </div>
          <div className="slim-text-block blue-text top-spacing sideImg">
            {fundraising.filter(img => img.section === "ten").map(Img => (
              <div key={Img.id} id={Img.id} className={Img.pos}>
                <img src={Img.image} alt={Img.alt} className="img-size"/>
              </div>
              )
            )}
            <h2 className='centered-text heading-bottom-spacing'>Data Collection and Protection</h2>
            <p>We will take all reasonable steps to determine the ultimate source of funding for each donation and ensure that the funds are in no way connected with any illegal activity. We operate theCharity Commission's 'Know your Donor' principle and will make reasonable and appropriate attempts to identify any individual or organisation that gives us financial support. Particularly where significant sums are being donated, or the circumstances of the donation give rise to notable risk.</p>
            <p>All gifts and offers of support from organisations and governments will be screened against a set of ethical and human rights guidelines in accordance with our fundraising procedures. If we reject a gift or offer of support, we will give you an explanation for our decision.</p>
            <p>Research on donors and prospects in line with our Privacy Policy is an acceptable and intrinsic part of fundraising. Data surrounding individuals and companies who wish to be associated with Humanitarian Operations will be stored in a confidential file. It must be emphasised that any approaches undertaken by Humanitarian Operations will be handled in a sensitive and appropriate manner and comply with current data protection legislation.</p>
            <p>We may only accept anonymous individuals, or trust donations where there has been a rigorous third-party due diligence process, to confirm that HOPE is not potentially compromised. If a supporter makes themselves known to Humanitarian Operations but wishes their gift to remain anonymous, we will honour these wishes, on the basis that the donation carries no significant reputational risk. All anonymous donations of £25,000 or more will be reported to The Charity Commission as a serious incident (in line with current Charity Commission guidelines) and will follow the Humanitarian Operations' guidance on the handling of such donations.</p>
            <p>If a donation is received which may not be acceptable under the terms of this policy, the Head of Finance will alert the Trustees at the earliest opportunity. This will be researched further and the matter will be referred to the board with the necessary information regarding the donation.</p>
          </div>
          <div className="slim-text-block blue-text top-spacing sideImg">
            {fundraising.filter(img => img.section === "eleven").map(Img => (
              <div key={Img.id} id={Img.id} className={Img.pos}>
                <img src={Img.image} alt={Img.alt} className="img-size"/>
              </div>
              )
            )}
            <h2 className='centered-text heading-bottom-spacing'>Donation or gift processing</h2>
            <p>When donations or gifts are received, they must be accompanied by a completed donation receipt form. We will request your full name, contact details, the details of the card you want to use for making the donation, your email address, the date on which the gift is received. It is your responsibility to ensure you have provided us with the correct information.</p>
            <p>Where the donation is made by an organisation (corporation, charitable trust), a contact name and job title should be reported in addition to that of the company.</p>
          </div>
          <div className="slim-text-block blue-text top-spacing sideImg">
            {fundraising.filter(img => img.section === "twelve").map(Img => (
              <div key={Img.id} id={Img.id} className={Img.pos}>
                <img src={Img.image} alt={Img.alt} className="img-size"/>
              </div>
              )
            )}
            <h2 className='centered-text heading-bottom-spacing'>Rules Applicable to Volunteers and Staff</h2>
            <p>In line with the Fundraisers' Regulator's Code on Fundraising Practice, all staff and volunteers working with Humanitarian Operations shall also abide by the rules and principles set forth in this Policy.</p>
            <p>Humanitarian Operations will make sure that any guidance, information and support it provides to its volunteers and staff, is adequate and relevant to the type of relationship between the Charity and the volunteer or staff member.</p>
            <p>Humanitarian Operations will take all reasonable steps to ensure that the volunteers and staff keep to standards applicable to fundraising, pursuant to the Code on Fundraising Practice, which include giving any training and support they may need to in order to carry out their role in a way that is legal, open, honest and respectful. </p>
            <p>HOPE will perform checks on volunteers and staff to ensure that they are suitable to act as responsible on behalf of the Charity. These checks can be performed through the following procedures, which are not an exhaustive list and do not exclude other checking procedures:</p>
            <ul className="list-content">
              <li>Disclosure and Barring Service (in England and Wales).</li>
              <li>Disclosure Scotland (in Scotland).</li>
              <li>Access NI (in Northern Ireland).</li>
            </ul>
            <p>Humanitarian Operations will store the volunteers and staff contact information and other personal data in accordance with the General Data Protection Regulation (GDPR) and the Data Protection Act 2018.</p>
            <p>Humanitarian Operations will give the children or young people taking part in Fundraising activities, and their parents or guardians, guidance on how to carry out fundraising safely and legally.</p>
          </div>
          <div className="slim-text-block blue-text top-spacing sideImg">
            {fundraising.filter(img => img.section === "thirteen").map(Img => (
              <div key={Img.id} id={Img.id} className={Img.pos}>
                <img src={Img.image} alt={Img.alt} className="img-size"/>
              </div>
              )
            )}
            <h2 className='centered-text heading-bottom-spacing'>Complaints</h2>
            <p>It's our aim that everyone who donates to HOPE has an extremely positive experience. We are aware that sometimes this may not happen and supporters may not be happy with their experience. If this happens you should report any complaints in line with the complaints policy.</p>
            <p>Pursuant to art. 2.4 of the Fundraising Regulator's Code, HOPE has a clear and publicly available Complaints Policy which can be found on its website and is applicable to both staff and volunteers who wish to report fundraising-related concerns.</p>
            <p>Humanitarian Operations will respond to all complaints from sponsors and members of the public in a timely, respectful, open and honest way in line with Humanitarian Operations' Complaints Policy.</p>
            <p>Humanitarian Operations will respond to all complaints from sponsors and members of the public in a timely, respectful, open and honest way in line with Humanitarian Operations' Complaints Policy.</p>
          </div>
          <div className="slim-text-block blue-text top-spacing sideImg">
            {fundraising.filter(img => img.section === "fourteen").map(Img => (
              <div key={Img.id} id={Img.id} className={Img.pos}>
                <img src={Img.image} alt={Img.alt} className="img-size"/>
              </div>
              )
            )}
            <h2 className='centered-text heading-bottom-spacing'>Contact Us</h2>
            <p>In case you have any queries about our Fundraising Policy, would like to give us feedback, or have a complaint about any aspect of our fundraising, please do not hesitate to contact us at <a href="feedback@humanitarianoperations.org">feedback@humanitarianoperations.org</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}
