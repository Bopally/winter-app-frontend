import ImageCarousel from "../components/ImageCarousel";

import "../styles/AboutUs.css";

function AboutUs() {
  return (
    <div className="about-us-page">
      <h2>About Us</h2>
      <ImageCarousel />
      <section className="intro">
        <p>
          Welcome to Serenity Mountain, a <strong> heaven of peace </strong>
          and luxury nestled amidst the breathtaking landscapes of the
          mountains. Our mission is to offer an unparalleled experience that
          blends nature's tranquility with high-end comfort and adventure.
        </p>
      </section>

      <section className="our-story">
        <h3>Our Story</h3>
        <p>
          Serenity Mountain began as a simple retreat for those looking to
          escape the
          <strong> hustle and bustle of city life</strong>. Over the years, it
          has evolved into a <strong> premier destination</strong> for travelers
          seeking a unique blend of <strong> relaxation</strong>,
          <strong> gourmet dining</strong>, and
          <strong> outdoor exploration</strong>.
        </p>
        <p>
          Our journey started with a vision to create a sanctuary where guests
          could reconnect with nature and themselves. Today, Serenity Mountain
          stands as a testament to that vision, offering a harmonious blend of
          <strong> luxurious accommodations</strong> and
          <strong> natural beauty</strong>. Each visitor is invited to
          experience the tranquility and adventure that embody the spirit of our
          mountain retreat.
        </p>
        <p>
          With a commitment to <strong> excellence</strong> and a passion for
          creating unforgettable experiences, Serenity Mountain continues to
          grow and innovate, ensuring that every stay is as
          <strong> memorable as the last</strong>. Whether you are here to
          unwind or to explore, our story is woven into the very fabric of these
          majestic peaks, inviting you to become part of it.
        </p>
      </section>

      <section className="experience">
        <h3>The Serenity Experience</h3>
        <p>
          Whether you are seeking adventure in the great outdoors or a peaceful
          retreat, Serenity Mountain offers an array of activities and amenities
          tailored to your desires. From hiking trails and spa treatments to
          exquisite dining, every moment at Serenity Mountain is crafted to
          create lasting memories.
        </p>
      </section>
    </div>
  );
}

export default AboutUs;
