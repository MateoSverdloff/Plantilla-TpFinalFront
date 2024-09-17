"use client";

import Link from 'next/link';

export default function EventsPage() {

    const Card = ({ imageSrc, heading, description, linkHref }) => {
        return (
          <div className="card">
            <img src={imageSrc} alt="Card Image" />
            <div className="card-content">
              <h2>{heading}</h2>
              <p>{description}</p>
              <a href={linkHref} className="button">
                Find out more 
                <span className="material-symbols-outlined">
                  arrow_right_alt
                </span>
              </a>
            </div>
          </div>
        );
      };

  return (
    <main>
      <Card
        imageSrc=""
        heading="Card Heading"
        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste..."
        linkHref="#"
      />
    </main>
  );
}


