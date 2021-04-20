import React from 'react';
import './ContactSection.css';
import ContactContent from './ContactContent';

function ContactSection() {
  return (
    <div className='contactsection'>
      <h1>See Resume Below</h1>
      <div className='contactsection__container'>
        <div className='contactsection__wrapper'>
          <div className='contact__section'>
            <ContactContent
              h1 ='ABOUT ME'
              text='As a detail-oriented and outside-the-box thinker,
              I am very confident in my personal and professional abilities.
              I see education as a way of life rather tahn a means to and end.
              Developing the ability to teach myself has proven valuable in
              all areas of life and gives me the confidence that I can accomplish
              any task given to me.'
              h1_1 ='EXPERIENCE'
              h2 = 'System Administration Officer'
              h3 = 'Bank OZK / Little Rock / 2018-Present'
              text_1='Responsible for the majority of all Treasury Systems
              and their ability to run and comply with audit standards.'
              text_2 ='Developed and implamented systems such as Remote Official Check, SWIFT, company Intranet, Dovetail, Escrow and Commercial
              Center through Quality Assurance testing and required assessment
              of weaknesses/issues.'
              text_3 ='Development of raw-data SQL queries for automation of reports
              and processes'
              text_4 ='Analysis of current processes and procedures for improvements.'
              text_5 ='Served as part of the Technical Change Committee and consulted
              for the Enterprise Risk Management Group'
              text_6 ='Developed new Power Platform applications to improve the Onboarding/
              Offboarding of customers as well as applications to manage the wire
              transfer process.'
              h2_1 ='Treasury Management Specialist'
              h3_1 ='Bank OZK / Little Rock / 2017 - 2018'
              text_7 ='Managed time between wire transactions and new projects
              that lead into the role created above.'
              text_8 ='Manged roles in three projects simultaneously while 
              performing the managment of the flow and process of outgoing
              wires by all commercial customers.'
              text_9 ='Conducted training and development of procedures for the
              Trerasury Management Department.'
              h1_2 ='EDUCATION'
              h2_2 ='BA / Finance'
              h3_2 ='University of Central Arkansas'
              text_10 ='2016-2018'
              h2_3 ='Honors College of Finance'
              h3_3 ='University of Arkansas'
              text_11 ='2015-2016'
              h2_4 ='Machine Learning Course'
              h3_4 ='Harvard University'
              text_12 ='2020'
              h2_5 ='Cert / Python 101 for Data Science'
              h3_5 ='IBM Developer Skills'
              text_13 ='2020'
              h1_3 ='SKILLS'
              text_14 ='Pandas, Sklearn, Tensorflow, Keras'
              text_15 ='Machine Learning'
              text_16 ='Prediction/Forcasting and Classification'
              text_17 ='SQL, DAX'
              text_18 ='JavaScript, Python, CSS, HTML'
            />
          </div>
          <button><a href="/Files/Resume.pdf" download>Download</a></button>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;