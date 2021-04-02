import "./About.css";

//Components;
export default function About() {
  return (
    <div className="AboutPage">
      <div className="H1">
        <h1>About STONKS</h1>
      </div>
      <div className="tagLine">
        <p>We are on a mission to change the way you trade</p>
      </div>
      <div className="ProjectInformation">
        <p>
          There are many Investment firms and also many indivisuals that try to
          predict the market behavior in order to get a good return by
          statistical methods and analaysing the data. For the same STONKS
          Application can be used which will have the capability to predict
          stock movement based on Logistic Regression(LR) Model. This project is
          the frontend part of the STONKS Application. In the application, the
          users will be able to see the current as well as the prevoius stock
          parameters and all other data they need. In future Crypto may also be
          included and emphasis will be given on improving the quality of the
          service.
        </p>
      </div>
      <div className="Mod">
        <div className="Moderators">
          <h3 style={{ paddingBottom: 30 }}>Moderators of project</h3>
          <ul className="ModName">
            <li>Mayank Talwar</li>
            <li>Akash Mondal</li>
            <li>Om Gupta</li>
            <li>Souhardya Malakar</li>
            <li>Arush Kurundodi</li>
            <li>Sriraj Behera</li>
            <li>Utkarsh Choubey</li>
            <li>Ananjan</li>
            <li>Shivral</li>
            <li>Siddhant Singhania</li>
            <li>Sourabh</li>
          </ul>
        </div>
      </div>
      <div className="Members">
        <div className="Member">
          <h3 style={{ paddingBottom: 30 }}>Members of project</h3>
          <ul className="MemberName">
            <li>Om Gupta</li>
            <li>Akash Mondal</li>
            <li>Ananjan</li>
            <li>Ansh Pant</li>
            <li>Arush Kurundodi</li>
            <li>Astha Singh</li>
            <li>Ayush Shukla</li>
            <li>Mayank Talwar</li>
            <li>MaySi11</li>
            <li>Pranav Mehta</li>
            <li>N-Coder-Bot</li>
            <li>Shivral</li>
            <li>Siddhant Singhania</li>
            <li>Souhardya Malakar</li>
            <li>Sourabh</li>
            <li>Sriraj Behera</li>
            <li>Utkarsh Choubey</li>
          </ul>
        </div>
      </div>
      <h2 style={{ paddingTop: 20, paddingLeft: 600, fontSize: 50 }}>
        Want to contribute? Visit{" "}
        <a href="https://github.com/LNMIIT-CODING/stonks-frontend">here</a>
      </h2>
    </div>
  );
}
