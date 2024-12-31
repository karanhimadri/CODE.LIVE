import React, { useContext } from "react";
import "./Homepage.css";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="home-container ">
      <div className="home-inner-container ">
        <div className="home-heading">
          <h6>Share Code in Real-time with Developers</h6>
          <p>
            An online code editor for interviews, troubleshooting, teaching &
            more…
          </p>
        </div>
        <div className="home-buttond">
          <Link to={"/code-editor"}>
            <button>Share Code now</button>
          </Link>
          <p>Share code for free.</p>
        </div>
        <div className="home-video">
          <div className="big-video">
            <video className="video-bg" autoPlay muted loop>
              <source src="/big-coding.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="sub-video">
            <video className="video-bg" autoPlay muted loop>
              <source src="/sub-coding.mp4" type="video/mp4" />
            </video>
            <video className="video-bg" autoPlay muted loop>
              <source src="/sub-coding.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="para">
          <p>
            Used by software engineers at companies and universities we respect
            and admire.
          </p>
        </div>
        <div className="testimonials">
          <div>
            <h6>Code with your team</h6>
            <p>
              Open a Codeshare editor, write or copy code, then share it with
              friends and colleagues. Pair program and troubleshoot together.
            </p>
            <Link to={"/code-editor"}>
              {" "}
              <button>Hack Together</button>
            </Link>
          </div>
          <div>
            <h6>Interview developers</h6>
            <p>
              Set coding tasks and observe in real-time when interviewing
              remotely or in person. Nobody likes writing code on a whiteboard.
            </p>
            <Link to={"/code-editor"}>
              <button>Start An Interview</button>
            </Link>
          </div>
          <div>
            <h6>Teach people to program</h6>
            <p>
              Share your code with students and peers then educate them.
              Universities and colleges around the world use Codeshare.
            </p>
            <Link to={"/code-editor"}>
              <button>Teach Code</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
