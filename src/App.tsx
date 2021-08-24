import TodoContainer from 'components/TodoContainer';
import React, { FC } from 'react';

interface Props {}

const App: FC<Props> = (props) => {
  return (
    <div>
      <TodoContainer />
    </div>
  );
};

export default App;
