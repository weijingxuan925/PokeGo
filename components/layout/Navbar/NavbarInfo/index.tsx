import React from 'react';

interface NavbarInfoProps {
  title: string;
  location: string;
  city: string;
  schedule: string;
  email: string;
  contact: string;
  phone: string;
}

const NavbarInfo: React.FC<NavbarInfoProps> = ({
  title,
  location,
  city,
  schedule,
  email,
  contact,
  phone
}) => {
  return (
    <div className="navbar-info">
      <div className="location">
        <h3 className="h3-title">{title}</h3>
        <address className="location-text">
          {location}<br/>{city}
        </address>
        <p className="schedule-text">{schedule}</p>
        <a href={`mailto:${email}`} className="contact-link">{email}</a>
      </div>

      <div className="contact">
        <h3 className="h3-title">{contact}</h3>
        <a href={`tel:${phone}`} className="contact-link">{phone}</a>
      </div>
    </div>
  );
};

export default NavbarInfo; 