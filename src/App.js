import React from 'react';
import Container from './components/Container/Container'
import Profile from './components/Profile/profile'

import user from './user.json';

const App = () => {
  return (
    <div>
      <Container>
      <Profile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      followers={user.stats.followers}
      views={user.stats.views}
      likes={user.stats.likes}
        />
      </Container>
    </div>
  );
};

export default App;
