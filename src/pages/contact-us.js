import React from 'react';
const MainPage = React.lazy(() => import('../components/main-page/main-page'));
const ContactForm = React.lazy(() => import('../components/contact-us/contact-form'));



const ContactUs = () => {
  return (
    <div>
      <MainPage>
        <ContactForm />
        
      </MainPage>
    </div>
  )
}

export default ContactUs