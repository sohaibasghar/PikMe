import {SignUp} from '../screens/SignUp';
import Name from '../screens/SignUp/Onboarding/Name';
import UserName from '../screens/SignUp/Onboarding/UserName';
import Password from '../screens/SignUp/Onboarding/Password';
import Interests from '../screens/SignUp/Onboarding/Interests';
import Login from '../screens/Login/Login';
import Welcome from '../screens/SignUp/Onboarding/Welcome';
import {SafeAreaView} from 'react-native';
import Confetti from '../components/Confetti';

const screens = [
  {
    name: 'signUp',
    component: SignUp,
  },
  {
    name: 'name',
    component: Name,
  },
  {
    name: 'userName',
    component: UserName,
  },
  {
    name: 'password',
    component: Password,
  },
  {
    name: 'interests',
    component: Interests,
  },
  {
    name: 'login',
    component: Login,
  },
  {
    name: 'welcome',
    component: Welcome,
  },
  {
    name: 'confetti',
    component: Confetti,
  },
];
export default screens;
