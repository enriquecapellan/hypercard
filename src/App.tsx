import logo from "./assets/hyper-logo.png";
import google from "./assets/google.png";

import { Button } from "./components/button";
import { BackgroundVideo } from "./components/background-video";
import { Input } from "./components/input";

function App() {
  return (
    <>
      <BackgroundVideo />
      <div className="flex inset-0">
        <div className="absolute inset-0 sm:my-auto sm:inset-y-[5%] sm:max-h-[800px] sm:w-[500px] sm:left-[64px] p-8 overflow-auto flex flex-col items-center sm:rounded bg-black sm:bg-black/70 sm:backdrop-blur-2xl">
          <img
            className="text-center w-full h-[40px] object-contain"
            src={logo}
          />

          <div className="w-full flex grow-1 justify-center flex-col">
            <span className="text-white font-eiko text-[32px] leading-[1.25] text-center">
              Sign In
            </span>
            <div className="my-8">
              <label
                htmlFor="email"
                className="text-white/70 text-[14px] leading-[1.2]"
              >
                Email
              </label>
              <Input id="email" placeholder="Your email address" />
            </div>

            <Button>Continue</Button>

            <div className="my-6 flex items-center">
              <div className="grow border-t-1 border-t-white/20" />
              <span className="text-xs text-white/70 mx-2">OR</span>
              <div className="grow border-t-1 border-t-white/20" />
            </div>

            <Button>
              <img src={google} className="size-4" />
              <span>Continue with Google</span>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
