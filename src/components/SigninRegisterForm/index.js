import React, { useState } from "react";
import { requestUserSignin } from "../../Requests";

const SigninRegisterForm = ({ navigate }) => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  console.log("hi", email, password);
  const onSubmitSignin = async () => {
    const response = await requestUserSignin({ email, password });
    if (response.status > 0) {
      navigate("home");
    }
  };
  return (
    <>
      <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m shadow-5 w-25-l mw6 center blur">
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
                  onChange={(e) => setEmail(e.target.value)}
                />
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
                      onClick={() => navigate("home")}
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
