import DefaultAuthLayout from 'layouts/auth-layout/DefaultAuthLayout';
import SignupForm from 'components/sections/authentications/default/SignupForm';

const Signup = () => {
  return (
    <DefaultAuthLayout>
      <SignupForm />
    </DefaultAuthLayout>
  );
};

export default Signup;
