import React from "react";

function New() {
  return (
    <section className="py-20 bg-background">
      <div className="container  px-4">
        <div className="text-center ">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground ">
            What's new
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className=" ">
            <div className="">
              <img
                src="https://assets.logiscool.com/f/57188/1100x620/89cd03fefb/curriculum-image-eaf-benefit-550x310px.jpg"
                alt="Kids"
                className=""
              />
              {/* <img src="certificate.png" alt="Certificate" className="certificate"/> */}
            </div>

            <div className="">
              <h4>DIGITALIZATION COBOTKIDS</h4>
              <h2>
                AI and Creativity: How the Next Generation Will Work With
                Machines
              </h2>
              <p>November 18, 2025</p>
              <p>
                Parents often hear the prediction that artificial intelligence
                will take over jobs. It is an understandable concern: machines
                are becoming faster, more capable, and able to do things we once
                believed were reserved for humans. But the future of work is not
                about children competing with machines. It is about learning how
                to collaborate with them. And in this new landscape, creativity
                will be one of the most powerful skills a child can develop.
              </p>
              <a href="#" className="btn">
                READ MORE
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <h4> COBOTKIDS</h4>
        <h2>Give the Gift of Knowledge</h2>
        <p>November 18, 2025</p>
        <p>
          This holiday season, instead of choosing another toy that may soon be
          forgotten, surprise your child or grandchild with something truly
          lasting: the joy of learning and creating. With Logiscool’s Give the
          Gift of Knowledge holiday pack, families can offer children a unique
          experience that combines creativity, discovery, and fun. Each pack
          includes a VIP invitation to a Logiscool program along with a gift bag
          filled with Logiscool merchandise, making it both exciting to unwrap
          and meaningful to enjoy. By giving the Gift of Knowledge, you’re not
          only celebrating the season, but also nurturing curiosity and digital
          skills that will stay with your child for years to come.
        </p>
        <a href="#" className="">
          Get Your Gift Pack!
        </a>
      </div>
      <div className="">
        <h4>COBOTKIDS</h4>
        <h2>October is Cybersecurity Awareness Month</h2>
        <p>November 18, 2025</p>
        <p>
          Every October, Cybersecurity Awareness Month reminds us all to take a
          closer look at how we use and protect our digital tools. The
          initiative, launched globally more than 20 years ago, aims to raise
          awareness about online risks and provide practical steps everyone can
          take to stay safe. Interested in how you can help your child stay safe
          online? Read more about the topic in our blog:
          https://www.logiscool.com/en/blog/education/navigating-the-digital-playground
          From choosing strong passwords to recognizing phishing attempts, these
          habits help build a safer digital environment for families, schools,
          and communities. At Logiscool, we see cybersecurity not just as a
          technical skill, but as an essential part of digital literacy for
          children. This month is a great opportunity to talk with children
          about online safety and strengthen the habits that protect them every
          day.
        </p>
        <a href="#" className="">
          READ MORE
        </a>
      </div>
      <div className="">
       <button>Blog and News</button>
      </div>
    </section>
  );
}

export default New;
