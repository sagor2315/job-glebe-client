import { Button } from "@material-tailwind/react";
import { useState } from "react";
import ScrollToTopButton from "../HomePage/ScrollToTopButton/ScrollToTopButton";
import { Helmet } from "react-helmet-async";

const Blogs = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [showDetails2, setShowDetails2] = useState(false);

  const handleReadMore = () => {
    setShowDetails(!showDetails);
  };
  const handleReadMore2 = () => {
    setShowDetails2(!showDetails2);
  };

  const PostIntroduction = `Access tokens and refresh tokens are like special keys that let you into a secure online clubhouse. When you log in to a website or app, they give you an access token—a key that proves you are who you say you are. But, this key has an expiration date. That's
  where the refresh token comes in—it's like a magical key-making
  machine that gets you a new key without logging in again. Now,
  where do you keep these keys? Think of it like finding a secret
  pocket on your device to store them safely. Let's dive deeper into
  this tech secret and understand how access and refresh tokens work
  and where to hide them securely on your computer or phone.`;

  const sndQuestionIntro = `
  In the world of server-side JavaScript, Express.js and Nest.js emerge as pivotal frameworks. Express.js, the foundational engine, streamlines web app and API development atop Node.js with its simplicity. Enter Nest.js, a progressive framework building on Express.js's strengths, enhancing scalability and maintainability. Nest.js introduces modularity, aiding organized code through modules, and features like dependency injection and decorators. Together, Express.js offers flexibility for quick solutions, while Nest.js brings structure and scalability. This dynamic duo equips developers with a versatile toolkit, ideal for crafting robust server-side applications, from nimble projects to large-scale endeavors in the ever-evolving web development landscape.`;

  return (
    <div className="mx-6">
      <Helmet>
        <title>JobGlebe | Blog</title>
      </Helmet>
      <div className=" grid-cols-1 mt-5  border border-orange-100 p-3">
        <div className="flex lg:flex-row flex-col gap-10">
          <div className="lg:w-1/4">
            <img
              className="w-full"
              src="https://i.imgur.com/sVQ5vRb.jpg"
              alt=""
            />
          </div>

          <div className="lg:w-9/12">
            <div className="flex justify-between items-center">
              <h1 className="text-textPrimary">
                <span className="font-semibold">Posted By:</span> Junayed Khan
              </h1>
              <h1>{Date().slice(0, 16)}</h1>
            </div>

            <div>
              <h1 className="text-2xl font-semibold text-textPrimary py-2">
                {
                  "What is an access token and refresh token? How do they work and where should we store them on the client-side?"
                }
              </h1>
            </div>

            <div>
              <p>{PostIntroduction /* .slice(0, 250) */}</p>
            </div>

            <div className="pt-3">
              <Button
                onClick={handleReadMore}
                className="bg-transparent hover:shadow-none shadow-none capitalize p-0 m-0 text-blue-600 text-lg font-medium"
              >
                {showDetails ? "" : "Read More"}
              </Button>
            </div>
          </div>
        </div>
        <div className={`${showDetails ? "block" : "hidden"}`}>
          <div className="pt-3">
            <h1 className="text-xl font-semibold text-textPrimary">
              Access Token:
            </h1>

            <div>
              <ul className="pt-2">
                <li className="list-disc ml-5 ">
                  Think of an access token like a special key that lets you into
                  a secure place, like a secret clubhouse.
                </li>

                <li className="list-disc ml-5 ">
                  When you log in to a website or app, it gives you this special
                  key (access token).
                </li>

                <li className="list-disc ml-5 ">
                  This key proves that you are who you say you are, so you can
                  do things like see your messages or pictures.
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-3">
            <h1 className="text-xl font-semibold text-textPrimary">
              Refresh Token:
            </h1>

            <div>
              <ul className="pt-2">
                <li className="list-disc ml-5 ">
                  Now, imagine this special key (access token) has an expiry
                  date. After a while, it won't work anymore.
                </li>

                <li className="list-disc ml-5 ">
                  But don't worry! That's where the refresh token comes in. It's
                  like a magical key-making machine.
                </li>

                <li className="list-disc ml-5 ">
                  When your special key is about to expire, you use the refresh
                  token to get a brand new special key without having to log in
                  again.
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-3">
            <h1 className="text-xl font-semibold text-textPrimary">
              How They Work:
            </h1>

            <div>
              <ul className="pt-2">
                <li className="list-disc ml-5 ">
                  You log in, and the website gives you an access token and a
                  refresh token.
                </li>

                <li className="list-disc ml-5 ">
                  With the access token, you can do cool stuff like checking
                  your messages.
                </li>

                <li className="list-disc ml-5 ">
                  After a while, the access token gets tired and needs a break.
                  So, you use the refresh token to get a new access token.
                </li>

                <li className="list-disc ml-5 ">
                  This way, you stay logged in without needing to give your
                  username and password every time.
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-3">
            <h1 className="text-xl font-semibold text-textPrimary">
              Where to Store Them:
            </h1>

            <div>
              <ul className="pt-2">
                <li className="list-disc ml-5 ">
                  Okay, imagine your special keys are like treasures. You want
                  to keep them safe!
                </li>

                <li className="list-disc ml-5 ">
                  But, you don't want to put them on a sticky note for anyone to
                  see, right?
                </li>

                <li className="list-disc ml-5 ">
                  So, you store them in a secret pocket (or a secure place) on
                  your device and the secrets places will be local storage, HTTP
                  Cookies and SessionStorage.
                </li>

                <li className="list-disc ml-5 ">
                  Int he three places we should need to set in the HTTP Cookies
                  because it is more safe than others.
                </li>
              </ul>
            </div>
          </div>

          <div className={`${showDetails ? "block" : "hidden"} mt-3 `}>
            <Button
              className="bg-transparent shadow-none hover:shadow-none p-0 m-0 text-secondaryColor capitalize text-lg"
              onClick={() => handleReadMore(setShowDetails(!showDetails))}
            >
              See Less
            </Button>
          </div>
        </div>
      </div>

      <div className=" grid-cols-1 mt-5  border border-orange-100 p-3">
        <div className="flex lg:flex-row flex-col gap-10">
          <div className="lg:w-1/4">
            <img
              className="w-full"
              src="https://i.imgur.com/Z5kEnfJ.png"
              alt=""
            />
          </div>

          <div className="lg:w-9/12">
            <div className="flex justify-between items-center">
              <h1 className="text-textPrimary">
                <span className="font-semibold">Posted By:</span> Junayed Khan
              </h1>
              <h1>{Date().slice(0, 16)}</h1>
            </div>

            <div>
              <h1 className="text-2xl font-semibold text-textPrimary py-2">
                {"What is Express JS? What is Nest JS?"}
              </h1>
            </div>

            <div>
              <p>{sndQuestionIntro /* .slice(0, 250) */}</p>
            </div>

            <div className="pt-3">
              <Button
                onClick={handleReadMore2}
                className="bg-transparent hover:shadow-none shadow-none capitalize p-0 m-0 text-blue-600 text-lg font-medium"
              >
                {showDetails2 ? "" : "Read More"}
              </Button>
            </div>
          </div>
        </div>
        <div className={`${showDetails2 ? "block" : "hidden"}`}>
          <div className="pt-3">
            <h1 className="text-xl font-semibold text-textPrimary">
              Here are some key points about Express.js:
            </h1>

            <div>
              <ul className="pt-2 flex flex-col gap-2">
                <div>
                  <h1 className="text-lg font-semibold">
                    1. Web Application Framework:
                  </h1>
                  <li className="list-disc ml-5 ">
                    Express simplifies the process of building web applications
                    by providing a structure and a set of features. It handles
                    things like routing, handling HTTP requests and responses,
                    and middleware management.
                  </li>
                </div>

                <div>
                  <h1 className="text-lg font-semibold">2. Middleware:</h1>
                  <li className="list-disc ml-5 ">
                    Middleware functions are a key concept in Express. These
                    functions have access to the request and response objects,
                    and they can perform tasks like authentication, logging, or
                    modifying the request or response.
                  </li>
                </div>

                <div>
                  <h1 className="text-lg font-semibold">3. Routing:</h1>
                  <li className="list-disc ml-5 ">
                    Express helps in defining routes for different parts of your
                    application. For example, you can have a route for handling
                    requests to the homepage ("/") and another for processing
                    form submissions ("/submit").
                  </li>
                </div>

                <div>
                  <h1 className="text-lg font-semibold">4. Extensibility:</h1>
                  <li className="list-disc ml-5 ">
                    It's minimalistic and unopinionated, meaning it provides a
                    basic structure but allows developers the flexibility to
                    choose other tools and libraries to add features they need.
                  </li>
                </div>

                <div>
                  <h1 className="text-lg font-semibold">5. Widely Used:</h1>
                  <li className="list-disc ml-5 ">
                    Express is one of the most popular frameworks for Node.js
                    and is widely used in building both small-scale projects and
                    large-scale applications.
                  </li>
                </div>
              </ul>
            </div>
          </div>

          <div className="pt-5">
            <h1 className="text-[22px] font-semibold text-textPrimary">
              Key features of Nest.js:
            </h1>

            <div className="">
              <ul className="pt-2 flex flex-col gap-2">
                <div>
                  <h1 className="text-lg font-semibold">1. Modularity:</h1>
                  <li className="list-disc ml-5 ">
                    Nest.js encourages the use of modules to organize code. Each
                    module encapsulates a closely related set of
                    functionalities.
                  </li>
                </div>

                <div>
                  <h1 className="text-lg font-semibold">
                    2. Dependency Injection:
                  </h1>
                  <li className="list-disc ml-5 ">
                    Nest.js utilizes dependency injection, making it easier to
                    manage and test components by injecting their dependencies
                    rather than hard-coding them.
                  </li>
                </div>

                <div>
                  <h1 className="text-lg font-semibold">3. Decorators:</h1>
                  <li className="list-disc ml-5 ">
                    Decorators are used to annotate classes and their members,
                    providing metadata that Nest.js uses to configure the
                    application.
                  </li>
                </div>

                <div>
                  <h1 className="text-lg font-semibold">4. GraphQL Support:</h1>
                  <li className="list-disc ml-5 ">
                    Nest.js has built-in support for GraphQL, a query language
                    for APIs. It allows you to build APIs in a more flexible and
                    efficient way.
                  </li>
                </div>

                <div>
                  <h1 className="text-lg font-semibold">
                    5. Built-in Testing:
                  </h1>
                  <li className="list-disc ml-5 ">
                    Nest.js provides tools for testing your application, making
                    it easier to ensure that your code works as expected.
                  </li>
                </div>

                <div>
                  <h1 className="text-lg font-semibold">
                    6. Compatibility with TypeScript:
                  </h1>
                  <li className="list-disc ml-5 ">
                    Nest.js is built with TypeScript in mind, allowing
                    developers to use strong typing and other features of
                    TypeScript.
                  </li>
                </div>
              </ul>
              <div className="pt-2">
                <p>
                  In summary, while Express.js is a minimalistic and flexible
                  web application framework for Node.js, Nest.js builds on top
                  of Express.js, adding features like modularity, dependency
                  injection, and decorators to make it more suitable for
                  building scalable and maintainable server-side applications.
                </p>
              </div>
            </div>
          </div>

          <div className={`${showDetails2 ? "block" : "hidden"} mt-3 `}>
            <Button
              className="bg-transparent shadow-none hover:shadow-none p-0 m-0 text-secondaryColor capitalize text-lg"
              onClick={() => handleReadMore2(setShowDetails(!showDetails2))}
            >
              See Less
            </Button>
          </div>
        </div>
      </div>
      <ScrollToTopButton />
    </div>
  );
};

export default Blogs;
