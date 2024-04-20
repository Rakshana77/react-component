

import "./Explanation.css";


const data = [
  {
    heading: 'Fully Responsive Design',
    explain: 'When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it\'s a phone, tablet, or desktop. The page will behave responsively!',
    image: './images/phoneimg.jpg'
  },
  {
    heading:"Updated For Bootstrap 5",
explain:'Newly improved, and full of great utility classes, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!',
    image: './images/codingimg.jpg'
  },
  {
    heading: 'Easy to Use & Customize',
    explain: 'Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!',
    image: './images/laptopimg.jpg'
  }
];

const Explanation = () => {
  return (
    <div>
      {data.map((item, index) => (
        <div className="full" key={index}>
          <span>
            <b>{item.heading}</b> {item.explain}
          </span>
          <div>
            <img src={item.image} alt="responsive" />
          </div>
        </div>
      ))}
    </div>
  );
};
export default Explanation;
