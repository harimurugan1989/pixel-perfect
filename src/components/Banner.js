import React, { useState } from 'react';
// import './Banner.css';

export const Banner = () => {
  const [showDetails, setShowDetails] = useState(false);

  const handleLoadMore = () => {
    setShowDetails(true);
  };

  return (
    <div className="banner">
      <div>
      <h1>ABOUT PIXEL PERFECT</h1>
      <p>
        Welcome to the exciting world of front-end development and the Design Hackathon! In this fast-paced and creative
        event, participants will have the opportunity to showcase their skills, unleash their imagination, and collaborate
        with like-minded individuals to create innovative and visually stunning user interfaces.
      </p>
      <p>
        Organized by Website Development and Management Club, this hackathon is specifically focused on front-end
        development using React.js, where participants will be challenged to design and build an interactive conference
        website. Whether you're a seasoned developer or a newcomer eager to learn and explore, this event promises to be a
        thrilling experience for all.
      </p>
      <div className={showDetails ? 'show-details' : 'hide-details'}>
        <p>
          One of the unique aspects of this hackathon is the provision of pre-defined routes. These routes serve as
          guidelines and inspire participants to think outside the box while working within a specific theme of developing
          a conference website. The organizing team has carefully curated a set of routes, ensuring all the requirements
          of the conference site.
        </p>
        <p>
          Throughout the hackathon, participants will have access to a wide range of resources, including mentorship
          sessions, feedback on design, and a help desk to clarify any doubts. This support system will empower
          participants to overcome challenges, refine their designs, and create remarkable front-end experiences.
        </p>
        <p>
          The Design Hackathon is not just a competition with prize money; it's an opportunity to network, learn, and grow
          in a collaborative environment. Participants will have the chance to connect with fellow designers and
          developers, opening doors to potential recruitment to the NITJ development cell (to be formed under WDM-club)
          where you will be paid for your work. This is a unique opportunity that a student will get at NITJ to contribute
          to the institute and also to earn while you learn!
        </p>
        <p>
          So, whether you're a visionary designer, a coding wizard, or an aspiring front-end developer, join us for this
          thrilling Design Hackathon. Let your creativity soar, embrace the challenges, and showcase your skills as you
          redefine the boundaries of front-end development. Get ready to embark on an unforgettable journey of design,
          innovation, and camaraderie!
        </p>
      </div>
      {!showDetails && (
        <div className="load-more">
          <button className="redback load-more-button" onClick={handleLoadMore}>
             Dive Deeper
          </button>
        </div>
      )}
    </div>
    </div>
  );
};
