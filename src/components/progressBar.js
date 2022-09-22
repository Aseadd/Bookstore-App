/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { randomCompletion } from '../redux/books/books';

function CircularProgressWithLabel(props) {
  const { value } = props;
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress variant="determinate" {...props} size={100} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
          marginLeft: '140px',
          padding: '40px',
        }}
      >
        <div className="percentage">
          <span className="percentage-number">{`${Math.round(value)}%`}</span>
          <span className="completed">Completed</span>
        </div>
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
};

export default function CircularStatic() {
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    setProgress(() => randomCompletion());
  }, []);

  return <CircularProgressWithLabel value={progress} />;
}
