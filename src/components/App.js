import React from 'react';

import Header from './Header';
import Movies from './Movie/Movies';

const title = 'React Movie Cards';

const App = () => (
  <div>
    <Header title={title} />
    <Movies />
  </div>
);

export default App;
