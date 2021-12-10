import React, { useState } from "react";

const SigninRegisterForm = ({ navigate }) => {
  const [isRegistering, setIsRegistering] = useState(false);
  return (
    <>
      <article class="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m shadow-5 w-25-l mw6 center blur">
        <main class=" black-80">
          <h4
            style={{
              color: "white",
              fontSize: 28,
            }}
          >
            Face Recognition Brain
          </h4>
          <form class="measure">
            <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
              {isRegistering && (
                <div class="mt3">
                  <label class="db fw6 lh-copy f6 white-80 " for="fullname">
                    Full Name
                  </label>
                  <input
                    class="pa2 input-reset ba bg-transparent hover-white w-100"
                    type="text"
                    name="fullname"
                    id="fullname"
                  />
                </div>
              )}
              <div class="mt3">
                <label class="db fw6 lh-copy f6 white-80 " for="email-address">
                  Email
                </label>
                <input
                  class="pa2 input-reset ba bg-transparent hover-white w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                />
              </div>
              <div class="mv3">
                <label class="db fw6 lh-copy f6 white-80" for="password">
                  Password
                </label>
                <input
                  class="b pa2 input-reset ba bg-transparent  hover-white w-100"
                  type="password"
                  name="password"
                  id="password"
                />
              </div>

              {!isRegistering && (
                <div>
                  <div class="mt3">
                    <input
                      style={{ backgroundColor: "rgb(0,100,100,.5)" }}
                      class="b ph3 pv2 input-reset ba white-80 b--white grow pointer f6 dib"
                      value="Sign in"
                      onClick={() => navigate("home")}
                    />
                  </div>
                  <div class="lh-copy mt3">
                    <input
                      style={{ backgroundColor: "rgb(100,100,100,.5)" }}
                      onClick={() => setIsRegistering(true)}
                      class="b ph3 pv2 input-reset ba white-80 b--white  bg-green grow pointer f6 dib"
                      value="Sign-up"
                    />
                  </div>
                </div>
              )}
              {isRegistering && (
                <div>
                  <div class="lh-copy mt3">
                    <input
                      style={{ backgroundColor: "rgb(0,100,100,.5)" }}
                      onClick={() => navigate("home")}
                      class="b ph3 pv2 input-reset ba white-80 b--white  bg-green grow pointer f6 dib"
                      value="Sign-up"
                    />
                  </div>

                  <div class="lh-copy mt3">
                    <input
                      style={{ backgroundColor: "rgb(100,100,0,.5)" }}
                      onClick={() => setIsRegistering(false)}
                      class="b ph3 pv2 input-reset ba white-80 b--white  bg-green grow pointer f6 dib"
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
