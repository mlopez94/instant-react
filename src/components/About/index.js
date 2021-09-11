import React from "react";
import coverImage from "../../assets/cover/cover-image.jpeg";
import iconImage from "../../assets/cover/happy-coder.png";

function About() {
  return (
    <section className="my-5">
      <h1 id="about" className="whoAmi">
        Hi. My name is Matt Lopez. I am a full stack web developer.
      </h1>
      <div className="flex-row">
        <img
          src={coverImage}
          className="my-2"
          style={{ width: "25%" }}
          alt="cover"
        />
        <img
          src={iconImage}
          className="my-2"
          style={{ width: "25%" }}
          alt="cover"
        />
      </div>
      <div className="my-2 whoAmi">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          bibendum turpis sed ex condimentum molestie. Mauris condimentum lectus
          ut ornare dignissim. Mauris faucibus urna mi, ac feugiat metus aliquam
          maximus. Proin aliquam justo nec diam vulputate vestibulum. Aenean
          sollicitudin nulla at nisi ornare, nec suscipit massa eleifend. Morbi
          tristique justo vel turpis sollicitudin, et tristique velit convallis.
          In hac habitasse platea dictumst. Phasellus mattis nunc sed orci
          consequat laoreet. Praesent id nisl nibh. Curabitur imperdiet
          ultricies mollis. In hac habitasse platea dictumst.
        </p>
      </div>
    </section>
  );
}

export default About;
