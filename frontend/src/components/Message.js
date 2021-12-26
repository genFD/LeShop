import React from 'react';
import { Alert } from 'react-bootstrap';

const Message = ({ variant, children }) => {
  return <Alert variant={variant}>{children}</Alert>;
};

Error.defaultProps = {
  variant: 'info',
};

// const Message = () => {
//   return (
//     <div>
//       <h1>error..</h1>
//     </div>
//   );
// };
export default Message;
