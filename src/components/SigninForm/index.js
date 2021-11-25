import React from "react";

const SigninForm = () => {
  return (
    <main class="pa4 black-80">
      <form class="measure center">
        <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
          <legend class="f4 fw6 ph0 white-80 mh0">Sign In</legend>
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

          <div class="mt3">
            <input
              class="b ph3 pv2 input-reset ba white-80 b--white bg-transparent grow pointer f6 dib"
              type="submit"
              value="Sign in"
            />
          </div>
          <div class="lh-copy mt3">
            <input
              class="b ph3 pv2 input-reset ba white-80 b--white bg-transparent grow pointer f6 dib"
              type="submit"
              value="Sign-up"
            />
          </div>
        </fieldset>
      </form>
    </main>
  );
};
export default SigninForm;
