import React from 'react';

const QuickContact = () => {
    return (
                   <div className="QuickContact">
                       <h2 className="heading">Quick Contact</h2>
                       <div className="contactInfo">
                           <p>Phone: <a href={"#"}>(123) 456 7890</a></p>
                           <p>Email: <a href={"#"}>hello@bytebeardigital.com</a></p>
                           <p>Location: <a href={"#"}>Detroit, MI</a></p>
                       </div>
                   </div>
    );
};

QuickContact.propTypes = {};

export default QuickContact;