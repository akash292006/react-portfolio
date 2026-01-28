import { useState } from "react";

export default function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! (Demo only)");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <section id="home">
      
  <h1>Hi, I'm Ayanshu Sarkar 👋</h1>
  <p>Front-End Developer | Web Development Student</p>
  <p>Building responsive and interactive web experiences</p>
</section>


      <section id="about">
  <h2>About Me</h2>

  <div className="about-container">
    <p className="about-text">
      I am <strong>Ayanshu Sarkar</strong>, a passionate Web Development student 
      currently pursuing a Diploma in Computer Science and Engineering. I enjoy 
      designing clean and responsive user interfaces and bringing ideas to life using code.
    </p>

    <p className="about-text">
      I am focused on Front-End Development and continuously improving my 
      skills in modern web technologies like React and JavaScript.
    </p>

    <div className="about-details">
      <p>📍 <strong>Location:</strong> India</p>
      <p>🎯 <strong>Goal:</strong> Professional Front-End Developer</p>
      <p>📧 <strong>Email:</strong> ayanshusarkar06@gmail.com</p>
    </div>
  </div>
</section>



      <section id="education">
  <h2>Education</h2>

  {/* 10th Marks */}
  <div className="card">
    <h3>10th Standard Subject Marks</h3>
    <table className="edu-table">
      <thead>
        <tr>
          <th>Subject</th>
          <th>Marks</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Mathematics</td><td>73</td></tr>
        <tr><td>English</td><td>86</td></tr>
        <tr><td>Science</td><td>95</td></tr>
        <tr><td>Social Studies</td><td>89</td></tr>
        <tr><td>Hindi</td><td>95</td></tr>
      </tbody>
    </table>
  </div>

  {/* 10th Overall */}
  <div className="card">
    <p><strong>School:</strong> Kendriya Vidyalaya No. 2, Ishapore, West Bengal</p>
<p><strong>Year of Passing:</strong> 2021</p>

    <h3>10th Overall Performance</h3>
    <table className="edu-table">
      <tbody>
        <tr>
          <th>Overall Percentage</th>
          <td>86.7%</td>
        </tr>
        <tr>
          <th>Total Score</th>
          <td>433 / 500</td>
        </tr>
      </tbody>
    </table>
  </div>

  {/* Diploma Semesters */}
  <div className="card">
    <p><strong>Course:</strong> Diploma in Computer Science and Engineering</p>
<p><strong>Status:</strong> Currently Pursuing</p>

    <h3>Diploma Semester CGPA</h3>
    <table className="edu-table">
      <thead>
        <tr>
          <th>Semester</th>
          <th>CGPA</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Semester 1</td><td>9.33</td></tr>
        <tr><td>Semester 2</td><td>8.64</td></tr>
        <tr><td>Semester 3</td><td>8.69</td></tr>
        <tr><td>Semester 4</td><td>9.38</td></tr>
        <tr><td>Semester 5</td><td>NA</td></tr>
      </tbody>
    </table>
  </div>
</section>


      <section id="skills">
        <h2>Skills</h2>
        <div className="skills">
          <div className="skill">HTML</div>
          <div className="skill">CSS</div>
          <div className="skill">JavaScript</div>
          <div className="skill">React</div>
        </div>
      </section>

      <section id="contact">
  <h2>Contact Me</h2>

  <div className="contact-container">

    {/* Contact Details */}
    <div className="contact-info">
      <h3>Get in Touch</h3>
      <p>📞 <strong>Phone:</strong> 7204381492</p>
      <p>📧 <strong>Email:</strong> apanshusarkar78@gmail.com</p>
      <p>📍 <strong>Location:</strong> India</p>
      <p>💼 <strong>Role:</strong> Front-End Developer (Student)</p>
      
    </div>

    {/* Contact Form */}
    <div className="contact-box">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          rows="4"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Send Message</button>
      </form>
    </div>

  </div>
</section>


      <footer>
        <p>© 2026 Student Portfolio | Built with React</p>
      </footer>
    </>
  );
}
