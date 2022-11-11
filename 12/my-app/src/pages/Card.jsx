import React from "react";
import { useParams } from "react-router-dom";
import { CardsData } from "./CardsData";
import { Link } from "react-router-dom";
import "./Card.css";

function Card() {
  const { id } = useParams();
  const cardId = id - 1;
  const name = "card" + String(id);

  return (
    <>
      {window.scrollTo(0,0)}
      <div className="content">
        {CardsData.map((item, index) => {
          let imgId = "background-image: " + item.picture + ";";
          if (index === cardId) {
            return (
              <div key={index} className="card">
                <div className={item.cName}></div>
                <div className="card-content">
                  <div className="title">{item.title}</div>
                  <div className="date-tag">
                    <span className="card-date">{item.date}</span>
                    <span>|</span>
                    <Link to={item.path}>
                      <span className="tag">{item.tag}</span>
                    </Link>
                  </div>
                  <div className="grey-line"></div>
                  <div className="text2">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. Separated they live in Bookmarksgrove right at the
                    coast of the Semantics, a large language ocean. A small
                    river named Duden flows by their place and supplies it with
                    the necessary regelialia.
                  </div>
                  <div className="smaller-title">
                    On deer horse aboard tritely yikes and much
                  </div>
                  <div className="text2">
                    The Big Oxmox advised her not to do so, because there were
                    thousands of bad Commas, wild Question Marks and devious
                    Semikoli, but the Little Blind Text didn’t listen. She
                    packed her seven versalia, put her initial into the belt and
                    made herself on the way.
                  </div>
                  <ul className="list">
                    <li>This however showed weasel</li>
                    <li>Well uncritical so misled</li>
                    <li>Goodness much until that fluid owl</li>
                  </ul>
                  <div className="text2">
                    When she reached the first hills of the{" "}
                    <b className="bold">Italic Mountains</b>, she had a last
                    view back on the skyline of her hometown Bookmarksgrove, the
                    headline of{" "}
                    <Link className="blue-link">Alphabet Village</Link> and the
                    subline of her own road, the Line Lane. Pityful a rethoric
                    question ran over her cheek, then she continued her way. On
                    her way she met a copy.
                  </div>
                  <div className="smaller-title">
                    Overlaid the jeepers uselessly much excluding
                  </div>
                  <div className="text2">
                    But nothing the copy said could convince her and so it
                    didn't take long until a few insidious Copy Writers ambushed
                    her, made her drunk with{" "}
                    <Link className="blue-link">Longe and Parole</Link> and
                    dragged her into their agency, where they abused her for
                    their projects again and again. And if she hasn't been
                    rewritten, then they are still using her.
                  </div>
                  <div className="text-block">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. Separated they live in Bookmarksgrove right at the
                    coast of the Semantics, a large language ocean.
                  </div>
                  <div className="text2">
                    It is a paradisematic country, in which roasted parts of
                    sentences fly into your mouth. Even the all-powerful
                    Pointing has no control about the blind texts it is an
                    almost unorthographic life One day however a small line of
                    blind text by the name of Lorem Ipsum decided to leave for
                    the far World of Grammar.
                  </div>
                  <div className="smaller-title">
                    According a funnily until pre-set or arrogant well cheerful
                  </div>
                  <div className="text2">
                    The Big Oxmox advised her not to do so, because there were
                    thousands of bad Commas, wild Question Marks and devious
                    Semikoli, but the Little Blind Text didn't listen. She
                    packed her seven versalia, put her initial into the belt and
                    made herself on the way.
                  </div>
                  <ol className="numbered-list">
                    <li>So baboon this</li>
                    <li>
                      Mounted militant weasel gregariously admonishingly
                      straightly hey
                    </li>
                    <li>Dear foresaw hungry and much some overhung</li>
                    <li>
                      Rash opossum less because less some amid besides yikes
                      jeepers frenetic impassive fruitlessly shut
                    </li>
                  </ol>
                  <div className="text2">
                    When she reached the first hills of the Italic Mountains,
                    she had a last view back on the skyline of her hometown
                    Bookmarksgrove, the headline of Alphabet Village and the
                    subline of her own road, the Line Lane. Pityful a rethoric
                    question ran over her cheek, then she continued her way. On
                    her way she met a copy.
                  </div>
                  <div className="text-block">
                    The copy warned the Little Blind Text, that where it came
                    from it would have been rewritten a thousand times and
                    everything that was left from its origin would be the word
                    "and" and the Little Blind Text should turn around and
                    return to its own, safe country.
                  </div>
                  <div className="text2">
                    But nothing the copy said could convince her and so it
                    didn't take long until a few insidious Copy Writers ambushed
                    her, made her drunk with Longe and Parole and dragged her
                    into their agency, where they abused her for their projects
                    again and again. And if she hasn't been rewritten, then they
                    are still using her. Far far away, behind the word
                    mountains, far from the countries Vokalia and Consonantia,
                    there live the blind texts.
                  </div>
                  <div className="small-title">
                    Silent delightfully including because before one up barring
                    chameleon
                  </div>
                  <div className="text2">
                    Separated they live in Bookmarksgrove right at the coast of
                    the Semantics, a large language ocean. A small river named
                    Duden flows by their place and supplies it with the
                    necessary regelialia. It is a paradisematic country, in
                    which roasted parts of sentences fly into your mouth.
                  </div>
                  <div className="text2">
                    Even the all-powerful Pointing has no control about the
                    blind texts it is an almost unorthographic life One day
                    however a small line of blind text by the name of Lorem
                    Ipsum decided to leave for the far World of Grammar. The Big
                    Oxmox advised her not to do so, because there were thousands
                    of bad Commas, wild Question Marks and devious Semikoli, but
                    the Little Blind Text didn't listen.
                  </div>
                  <b>
                    <div className="small-title">
                      WHEREVER FAR WOW THUS A SQUIRREL RACCOON JEEZ JAGUAR THIS
                      FROM ALONG
                    </div>
                  </b>
                  <div className="text2">
                    She packed her seven versalia, put her initial into the belt
                    and made herself on the way. When she reached the first
                    hills of the Italic Mountains, she had a last view back on
                    the skyline of her hometown Bookmarksgrove, the headline of
                    Alphabet Village and the subline of her own road, the Line
                    Lane. Pityful a rethoric question ran over her cheek, then
                    she continued her way. On her way she met a copy.
                  </div>
                  <b>
                    <div className="small-title">
                      Slapped cozy a that lightheartedly and far
                    </div>
                  </b>
                  <div className="text2">
                    The copy warned the Little Blind Text, that where it came
                    from it would have been rewritten a thousand times and
                    everything that was left from its origin would be the word
                    "and" and the Little Blind Text should turn around and
                    return to its own, safe country. But nothing the copy said
                    could convince her and so it didn't take long until a few
                    insidious Copy Writers ambushed her, made her drunk with
                    Longe and Parole and dragged her into their agency, where
                    they abused her for their projects again and again.
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </>
  );
}

export default Card;
