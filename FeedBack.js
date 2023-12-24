import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Typography from '@mui/material/Typography';

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#ff6d75',
  },
  '& .MuiRating-iconHover': {
    color: '#ff3d47',
  },
});
const FeedbackForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(5); 
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Feedback Submitted:', { name, email, feedback, rating });
    setName('');
    setEmail('');
    setFeedback('');
    setRating(5); 
  };
  const handleFeedbackChange = (e) => {
    const inputWords = e.target.innerText.split(' ').filter(Boolean);
    const limitedWords = inputWords.slice(100,0);
    setFeedback(limitedWords.join(' '));
  };
  return (
    <div className="feedback-form">
      <h2>Hotel Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Your Name:</span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          <span>Your Email:</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <Box
          sx={{
            '& > legend': { mt: 2 },
          }}
        >
          <Typography component="legend">Review</Typography>
          <StyledRating
            name="customized-color"
            defaultValue={5}
            precision={1}
            icon={<FavoriteIcon fontSize="inherit" />}
            emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
            onChange={(event, newValue) => setRating(newValue)}
          />
        </Box>
    <Typography component="legend">Service Rating</Typography>
      <Rating name="customized-10" defaultValue={2} max={10} />
        <label>
          <span>Feedback:</span>
          <div
            contentEditable
            onInput={handleFeedbackChange}
            dangerouslySetInnerHTML={{ __html: feedback }}
            style={{ border: '1px solid #ddd', padding: '10px', borderRadius: '5px', minHeight: '40px' }}
          />
        </label>
        <br />
        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
};

export default FeedbackForm;
