
import './styles.css'; // Import the CSS file

const commentsData = [
  { author: 'Margaret E.', comment: 'This is fantastic! Thanks so much guys!' },
  { author: 'Fred S.', comment: 'Bootstrap is amazing. I\'ve been using it to create lots of super nice landing pages.' },
  { author: 'Sarah W.', comment: 'Thanks so much for making these free resources available to us!' }
];

const Feedback = () => {
  return (
    <div className="comments-container">
      {commentsData.map((comment, index) => (
        <div className="comment" key={index}>
          <span className="author">{comment.author}</span>
          <p className="comment-text">{comment.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default Feedback;
