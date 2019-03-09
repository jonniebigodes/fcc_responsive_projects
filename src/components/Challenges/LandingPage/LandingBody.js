import React from "react"

const LandingBody = () => (
  <main className="fl w-100 pa2" style={{ background: "#f1f1f2" }}>
    <div className="pa4-l">
      <div className="flex flex-column items-center flex-wrap">
        <section id="fcc_desc">
          <p className="f3 georgia tc mt4">
            This page works as a entry point to all the projects under the
            responsive category of FreeCodeCamp.
          </p>
          <p className="f4 tc georgia mt4">
            Implemented with React and tachyons for styling purposes.
          </p>
        </section>
        <section id="tach_videos">
          <p className="f4 tc georgia mt4">
            Here&apos;s a sneak peak of what tachyons are and how to use them
          </p>
          <iframe
            className="mt2"
            title="a good video on tachyons layout"
            id="video"
            width="727"
            height="409"
            src="https://www.youtube.com/embed/r56fRaWth58"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </section>
        <section id="why_tach">
          <div>
            <p className="f2 tc georgia mt4">
              {" "}
              Why use Tachyons for this challenge?
            </p>
            <div className="f3 tc fw9 georgia mt2">Simple</div>
            <div className="f3 tc fw9 georgia mt2">Responsive</div>
            <div className="f3 tc fw9 georgia mt2">Small footprint</div>
          </div>
          <p className="f3 georgia mt4 mb4 tc">
            Some testimonies why it should be used
          </p>
          <div className="flex justify-between">
            <article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
              <img
                src="https://cdn-images-1.medium.com/max/1600/1*emiGsBgJu2KHWyjluhKXQw.png"
                className="db w-60 br2 br--top center mt3"
                alt="kitten looking menacing."
              />
              <div className="pa2 ph3-ns pb3-ns">
                <div className="dt w-100 mt1">
                  <div className="dtc">
                    <h1 className="f4 mv0 athelas center black-90">
                      Perrera.com
                    </h1>
                  </div>
                </div>
                <blockquote
                  cite="https://perrera.com/2017/designing-with-tachyons/"
                  className="center"
                >
                  What is Tachyons? At its most basic, Tachyons is a bunch of
                  tiny utility classes that map to CSS properties that can be
                  chained together to create design. You might be tempted to
                  think of Tachyons as a CSS framework but it’s not really.
                </blockquote>
              </div>
            </article>
            <article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
              <img
                src="https://cdn-images-1.medium.com/max/1600/1*emiGsBgJu2KHWyjluhKXQw.png"
                className="db w-60 br2 br--top center mt3"
                alt="kitten looking menacing."
              />
              <div className="pa2 ph3-ns pb3-ns">
                <div className="dt w-100 mt1">
                  <div className="dtc">
                    <h1 className="f5 f4-ns mv0 athelas center black-90">
                      Simon Vrachliotis article series on Medium{" "}
                    </h1>
                  </div>
                </div>
                <blockquote
                  cite="https://hackernoon.com/full-re-write-with-tachyons-and-functional-css-a-case-study-part-1-635ccb5fb00b"
                  className="center"
                >
                  The more I thought about this functional CSS approach, the
                  more it made sense. My head started to buzz with excitement
                  and hope.
                </blockquote>
              </div>
            </article>
            <article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
              <img
                src="https://cdn-images-1.medium.com/max/1600/1*emiGsBgJu2KHWyjluhKXQw.png"
                className="db w-60 br2 br--top center mt3"
                alt="kitten looking menacing."
              />
              <div className="pa2 ph3-ns pb3-ns">
                <div className="dt w-100 mt1">
                  <div className="dtc">
                    <h1 className="f5 f4-ns mv0 athelas center black-90">
                      Adam Morse Blog Post
                    </h1>
                  </div>
                </div>
                <blockquote
                  cite="http://mrmrs.cc/writing/2016/03/24/scalable-css/"
                  className="center"
                >
                  If you create a system that is flexible and powerful, and pull
                  from that, you might find your designs to be more harmonious.
                  You might spend less time debugging the cascade. Your pages
                  will probably load faster. But who knows. Maybe that won’t
                  work for you at all. All I know is the current model is
                  definitely not going to work.
                </blockquote>
              </div>
            </article>
            <article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center ">
              <img
                src="https://cdn-images-1.medium.com/max/1600/1*emiGsBgJu2KHWyjluhKXQw.png"
                className="db w-60 br2 br--top center mt3"
                alt="kitten looking menacing."
              />
              <div className="pa2 ph3-ns pb3-ns">
                <div className="dt w-100 mt1">
                  <div className="dtc">
                    <h1 className="f5 f4-ns mv0 athelas center black-90">
                      Made by many
                    </h1>
                  </div>
                </div>
                <blockquote
                  cite="https://www.madebymany.com/stories/takeaways-from-trying-out-tachyons-css-after-ages-using-bem"
                  className="center"
                >
                  What I enjoyed most about Tachyons was its simplicity and how
                  productive I felt using it.
                </blockquote>
              </div>
            </article>
          </div>
          <div className="f4 tl fw9 georgia mt4">
            You can check the documentation{" "}
            <a href="http://tachyons.io/" rel="noopener">
              here
            </a>
            .
          </div>
          <div className="f4 tl fw9 georgia mt2">
            Check out the <a href="https://tachyons.io/gallery/">gallery</a> for
            some really nice and sleek designs.
          </div>
        </section>
        <section id="fcc_pens" className="bg-near-white">
          <p className="f2 tc georgia">
            FCC responsive challenges implemented with React and tachyons
          </p>
          <div className="flex justify-between">
            <article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
              <img
                src="http://blog.codepen.io/wp-content/uploads/2012/06/Button-Black-Large.png"
                className="db w-60 br2 br--top center mt3"
                alt="kitten looking menacing."
              />
              <div className="pa2 ph3-ns pb3-ns">
                <div className="dt w-100 mt1">
                  <div className="dtc">
                    <h1 className="f5 f4-ns mv0 athelas black-90">
                      Tribute Page
                    </h1>
                  </div>
                </div>
                <p className="f6 lh-copy measure mt2 athelas">
                  This is a placeholder for the tribute page.
                </p>
              </div>
            </article>
            <article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
              <img
                src="http://blog.codepen.io/wp-content/uploads/2012/06/Button-Black-Large.png"
                className="db w-60 br2 br--top center mt3"
                alt="kitten looking menacing."
              />
              <div className="pa2 ph3-ns pb3-ns">
                <div className="dt w-100 mt1">
                  <div className="dtc">
                    <h1 className="f5 f4-ns mv0 athelas black-90 ">
                      Survey Form
                    </h1>
                  </div>
                </div>
                <p className="f6 lh-copy measure mt2 athelas">
                  This is a placeholder for the survey form page.
                </p>
              </div>
            </article>
            <article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
              <img
                src="http://blog.codepen.io/wp-content/uploads/2012/06/Button-Black-Large.png"
                className="db w-60 br2 br--top center mt3"
                alt="kitten looking menacing."
              />
              <div className="pa2 ph3-ns pb3-ns">
                <div className="dt w-100 mt1">
                  <div className="dtc">
                    <h1 className="f5 f4-ns mv0 athelas black-90">Docs page</h1>
                  </div>
                </div>
                <p className="f6 lh-copy measure mt2 athelas">
                  This is a placeholder for the technical page.
                </p>
              </div>
            </article>
            <article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
              <img
                src="http://blog.codepen.io/wp-content/uploads/2012/06/Button-Black-Large.png"
                className="db w-60 br2 br--top center mt3"
                alt="kitten looking menacing."
              />
              <div className="pa2 ph3-ns pb3-ns">
                <div className="dt w-100 mt1">
                  <div className="dtc">
                    <h1 className="f5 f4-ns mv0 athelas black-90">Portfolio</h1>
                  </div>
                </div>
                <p className="f6 lh-copy measure mt2 athelas">
                  This is a placeholder for the portfolio page.
                </p>
              </div>
            </article>
          </div>
        </section>
      </div>
      <section id="contact">
        <div className="mt4">
          <form
            action="https://www.freecodecamp.com/email-submit"
            className="bg-dark-green mw7 center pa4 br2-ns ba b--black-10"
            id="form"
          >
            <fieldset className="cf bn ma0 pa0 ">
              <legend className="pa0 f5 f4-ns mb3 near-white georgia">
                Sign up to for updates on code changes.
              </legend>
              <div className="cf">
                <label className="clip georgia" htmlFor="email">
                  Email Address
                </label>
                <input
                  className="f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns georgia"
                  placeholder="Your Email Address"
                  type="email"
                  name="email"
                  value=""
                  id="email"
                />
                <input
                  id="submit"
                  className="f6 f5-l button-reset fl pv3 tc bn bg-animate bg-green hover-bg-light-green near-white pointer w-100 w-25-m w-20-l br2-ns br--right-ns georgia"
                  type="submit"
                  value="Subscribe"
                />
              </div>
            </fieldset>
          </form>
        </div>
      </section>
    </div>
  </main>
)

export default LandingBody
