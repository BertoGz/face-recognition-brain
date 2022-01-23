import React, { useEffect, useState } from "react";
import { requestUserSignin, requestUserRegister } from "../../Requests";

// test log
const SigninRegisterForm = ({ props, navigate, setUser }) => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");

  const goodPassword = password?.length >= 8;
  const goodEmail = email?.length > 0;

  const onSubmitSignin = async () => {
    const response = await requestUserSignin({ email, password });
    if (response.status > 0) {
      setUser(response.data);
      navigate("home");
    }
  };
  const onSubmitRegister = async () => {
    setPasswordError("");
    setEmailError("");
    if (!goodPassword || !goodEmail) {
      if (password?.length === 0) {
        setPasswordError("Please enter a password");
      } else if (!goodPassword) {
        setPasswordError("Enter a password at least 8 characters long");
      }

      if (email?.length === 0) {
        setEmailError("Please enter a email");
      } else if (!goodEmail) {
        setEmailError("Enter a valid email");
      }
      return 0;
    }

    if (goodPassword && goodEmail) {
      const response = await requestUserRegister({
        email,
        password,
        name,
      });
      if (response.status > 0) {
        navigate("home");
        setUser(response.data);
      } else {
        console.log("error at onSubmitRegister", response);
      }
    }
  };

  return (
    <>
      <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m shadow-5 w-25-l mw6 center blur(10px)">
        <main className=" black-80">
          <h4
            style={{
              color: "white",
              fontSize: 28,
            }}
          >
            Face Recognition Brain
          </h4>
          <form className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              {isRegistering && (
                <div className="mt3">
                  <label
                    className="db fw6 lh-copy f6 white-80 "
                    htmlFor="fullname"
                  >
                    Full Name
                  </label>
                  <input
                    className="pa2 input-reset ba bg-transparent white hover-white w-100"
                    type="text"
                    name="fullname"
                    id="fullname"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              )}
              <div className="mt3">
                <label
                  className="db fw6 lh-copy f6 white-80 "
                  htmlFor="email-address"
                >
                  Email
                </label>
                <input
                  className="pa2 input-reset ba bg-transparent white hover-white w-100 "
                  type="email"
                  name="email-address"
                  id="email-address"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                {!!emailError && (
                  <label
                    className="db fw6 lh-copy f6 white-80 red "
                    htmlFor="email-address"
                  >
                    {emailError}
                  </label>
                )}
              </div>
              <div className="mv3">
                <label
                  className="db fw6 lh-copy f6 white-80"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="b pa2 input-reset ba bg-transparent white hover-white w-100"
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {!!passwordError && (
                  <label
                    className="db fw6 lh-copy f6 white-80 red"
                    htmlFor="password"
                  >
                    {passwordError}
                  </label>
                )}
              </div>

              {!isRegistering && (
                <div>
                  <div className="mt3">
                    <input
                      style={{ backgroundColor: "rgb(0,100,100,.5)" }}
                      className="b ph3 pv2 input-reset ba white-80 b--white grow pointer f6 dib"
                      value="Sign in"
                      onClick={onSubmitSignin}
                    />
                  </div>
                  <div className="lh-copy mt3">
                    <input
                      style={{ backgroundColor: "rgb(100,100,100,.5)" }}
                      onClick={() => setIsRegistering(true)}
                      className="b ph3 pv2 input-reset ba white-80 b--white  bg-green grow pointer f6 dib"
                      value="Sign-up"
                    />
                  </div>
                </div>
              )}
              {isRegistering && (
                <div>
                  <div className="lh-copy mt3">
                    <input
                      style={{ backgroundColor: "rgb(0,100,100,.5)" }}
                      onClick={onSubmitRegister}
                      className="b ph3 pv2 input-reset ba white-80 b--white  bg-green grow pointer f6 dib"
                      value="Sign-up"
                    />
                  </div>

                  <div className="lh-copy mt3">
                    <input
                      style={{ backgroundColor: "rgb(100,100,0,.5)" }}
                      onClick={() => setIsRegistering(false)}
                      className="b ph3 pv2 input-reset ba white-80 b--white  bg-green grow pointer f6 dib"
                      value="Already a user? Sign-in"
                    />
                  </div>
                </div>
              )}
            </fieldset>
          </form>
        </main>
      </article>
    </>
  );
};
export default SigninRegisterForm;
