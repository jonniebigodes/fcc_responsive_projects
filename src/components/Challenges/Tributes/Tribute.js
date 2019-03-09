import React from "react"

import "../../../assets/css/Tribute.css"

const Tribute = () => (
  <article className="athelas" id="main" style={{ background: "#f1f1f2" }}>
    <div
      className="vh-100 dt w-100 tc bg-dark-gray white cover"
      style={{
        background:
          "url(http://mrmrs.github.io/photos/u/009.jpg) no-repeat center",
      }}
    >
      <div className="dtc v-mid" id="title">
        <header className="white-70">
          <h2 className="f6 fw1 ttu tracked mb2 lh-title">Tribute to</h2>
        </header>
        <h1 className="f1 f-headline-l fw1 i white-60">Michio Kaku</h1>
        <blockquote className="ph0 mh0 measure f4 lh-copy center">
          <p className="fw1 white-70">
            The man who brought physics to the mortal realm.
          </p>
          <cite className="f6 ttu tracked fs-normal">Jonniebigodes</cite>
        </blockquote>
      </div>
    </div>

    <div className="center measure-wide f5 pv5 lh-copy ph2" id="tribute-info">
      <div id="img-div" className="center">
        <figure>
          <img
            className="w-100 f5 measure imageResponsive"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Michio_Kaku_Presentation.jpg/800px-Michio_Kaku_Presentation.jpg"
            alt="a pic of Michio Kaku"
            id="image"
          />
          <figcaption id="img-caption">
            Dr. Michio Kaku giving a talk at Campus Party Brasil on February
            11th 2012
          </figcaption>
        </figure>
      </div>
      <p id="tribute-info">
        Physicist Michio Kaku was born on January 24, 1947, in San Jose,
        California. His parents were both of Tibetan descent, and his
        grandfather immigrated to the United States for work in the cleanup
        efforts following the devastating 1906 earthquake in San Francisco.Kaku
        first became attracted to science as a young child, and while a student
        at Cubberly High School in Palo Alto, he famously built an atom smasher
        in his parents&#39; garage. Kaku eventually landed at Harvard
        University, where he graduated first in his physics class in 1968. From
        there it was on to the University of California at Berkeley, where he
        worked at the Berkeley Radiation Lab and earned his Ph.D. in 1972.Since
        completing his own education, Kaku has spent the majority of his career
        teaching at the City College of New York, where he holds the Henry Semat
        Chair and Professorship in theoretical physics. Much of Kaku&#39;s work
        has been devoted to a search for a single unifying theory that can unite
        Albert Einstein&#39;s earlier findings with quantum physics. His most
        notable contribution has been as one of the co-founders of string field
        theory, a branch of string theory.
      </p>
      <p>Some of his publications:</p>
      <ul>
        <li>
          The Future of the Mind: The Scientific Quest to Understand, Enhance,
          and Empower the Mind
        </li>
        <li> Physics of the Impossible</li>
        <li> Physics of the Future</li>
        <li>
          Physics of the Future: How Science Will Shape Human Destiny and Our
          Daily Lives by the Year 2100
        </li>
        <li>
          Beyond Einstein: The Cosmic Quest for the Theory of the Universe
        </li>
      </ul>
      <a
        id="tribute-link"
        href="https://en.wikipedia.org/wiki/Michio_Kaku"
        target="_blank"
      >
        Link to outside world
      </a>
    </div>
  </article>
)

export default Tribute
