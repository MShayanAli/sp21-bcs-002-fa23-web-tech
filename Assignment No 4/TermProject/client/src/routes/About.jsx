import React from 'react';

const About = () => {
  const styles = {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    fontFamily: 'Spartan, sans-serif',
    h1: {
      fontSize: '50px',
      lineHeight: '64px',
      color: '#222',
    },
    h2: {
      fontSize: '46px',
      lineHeight: '54px',
      color: '#222',
    },
    h4: {
      fontSize: '20px',
      color: '#222',
    },
    h6: {
      fontWeight: 700,
      fontSize: '12px',
    },
    p: {
      fontSize: '1px',
      color: '#465b52',
      margin: '15px 0 20px 0',
    },
    /* ... (add the rest of your CSS rules here) ... */
  };

  return (
    <div style={styles} className="about-container">
      <div className="about-content">
        <h1>About Us</h1>
        <p>Welcome to Makeup Paradise, your one-stop destination for high-quality makeup products. Our mission is to provide beauty enthusiasts with the finest selection of cosmetics, ranging from luxurious skincare to dazzling makeup collections.</p>
        <p>With a commitment to excellence and customer satisfaction, we strive to curate makeup products that inspire confidence and empower individuals to express their unique beauty. Our team of experts meticulously selects each product, ensuring premium quality and trendsetting styles.</p>
        <p>Whether you're a makeup novice or a beauty expert, we aim to cater to your needs by offering a diverse range of brands, shades, and formulations. At Makeup Paradise, we believe that beauty knows no boundaries, and we're here to help you unleash your inner glam.</p>
        <p>Explore our collection today and embark on a journey to discover the perfect makeup essentials that complement your style and personality.</p>
      </div>
      <footer>
        <p>&copy; 2023 Makeup Paradise. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default About;
