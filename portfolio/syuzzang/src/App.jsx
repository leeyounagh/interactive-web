import ArrowImg from "./assets/arrow.svg";
import Nudake from "./containers/Nudake";
import RotateCanvas from "./containers/RotateCanvas";

function App() {
  return (
    <>
      <div className="app">
        <section className="section-1">
          <header>
            <h1>portFolio</h1>
            <ul>
              <li>instagram</li>
              <li>twitter</li>
              <li>codepen</li>
            </ul>
          </header>
          <main>
            <div>
              <Nudake></Nudake>
            </div>
          </main>
        </section>
        <section className="section-2">
          From its medieval origins to the digital era, learn everything there
          is to know about the ubiquitous lorem ipsum passage.
        </section>
        <section className="section-3">
          <aside>
            <div className="top">
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used in laying out print, graphic or web designs.
            </div>
            <div className="bottom">
              <img src={ArrowImg}></img>
              <img src={ArrowImg}></img>
            </div>
          </aside>
          <article>
            The purpose of lorem ipsum is to create a natural looking block of
            text (sentence, paragraph, page, etc.) that doesn't distract from
            the layout. A practice not without controversy, laying out pages
            with meaningless filler text can be very useful when the focus is
            meant to be on design, not content. The passage experienced a surge
            in popularity during the 1960s when Letraset used it on their
            dry-transfer sheets, and again during the 90s as desktop publishers
            bundled the text with their software. Today it's seen all around the
            web; on templates, websites, and stock designs. Use our generator to
            get your own, or read on for the authoritative history of lorem
            ipsum. Origins and Discovery
          </article>
        </section>
        <section className="section-4">
          <RotateCanvas></RotateCanvas>
        </section>
      </div>
      <footer className="email">test@gmail.com</footer>
    </>
  );
}

export default App;
