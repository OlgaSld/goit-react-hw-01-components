import { Profile } from './Profile/Profile';
import { GlobalStyle } from './GlobalStyle';
import user from '../user.json';


export const App = () => {
  return (
    <div>
      <Profile user={user} />
      <GlobalStyle />
    </div>
  );
};
