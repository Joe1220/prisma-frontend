import React, { useState } from "react";
import AuthPresenter from "./AuthPresenter"
import useInput from "../../Components/Hooks/useInput"
import { useMutation } from "react-apollo-hooks";
import { LOG_IN, CREATE_ACCOUNT } from "./AuthQueries";
import { toast } from "react-toastify";

export default () => {
  const [action, setAction] = useState("logIn");
  const username = useInput("");
  const firstName = useInput("");
  const lastName = useInput("");
  const email = useInput("");
  const [requestSecret] = useMutation(LOG_IN, {
    update: (_, { data }) => {
      const { requestSecret } = data
      if(!requestSecret) {
        toast.error("You dont have an account yet, create one")
        setTimeout(() => setAction("signUp"), 2000);
      }
    },
    variables: { email: email.value }
  });

  const [createAccount] = useMutation(CREATE_ACCOUNT, {
    variables: {       
      email: email.value,
      username: username.value,
      firstName: firstName.value,
      lastName: lastName.value}
  })

  const onSubmit = e => {
    e.preventDefault();
    if(action === "logIn") {
      if (email !== "") {
        requestSecret();
      } else {
        toast.error("Email is Required")
      }
    } else if(action === "signUp") {
      if(email.value !== "" && username.value !== "" && firstName.value !== "" && lastName.value !== "") {
        createAccount()
      } else {
        toast.error("All fields are Requried")
      }
    }

  };

  return (
    <AuthPresenter
      setAction={setAction}
      action={action}
      username={username}
      firstName={firstName}
      lastName={lastName}
      email={email}
      onSubmit={onSubmit}
    />
  );
};