import SingUpForm from "../../components/sing-up-form/sing-up-form.component";
import SingInForm from "../../components/sing-in-form/sing-in-form.component";

import { AuthenticationContainer } from "./authentication.styles";

const Authentication = () => {
  return (
    <AuthenticationContainer>
      <SingInForm />
      <SingUpForm />
    </AuthenticationContainer>
  );
};

export default Authentication;
