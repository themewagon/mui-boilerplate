import DefaultAuthLayout from 'layouts/auth-layout/DefaultAuthLayout';
import LoginForm from 'components/sections/authentications/default/LoginForm';

const Login = () => {
  return (
    <DefaultAuthLayout>
      <LoginForm />
    </DefaultAuthLayout>
  );
};

export default Login;
