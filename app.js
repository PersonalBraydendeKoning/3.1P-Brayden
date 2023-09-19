const Home = {
  template: `
      <div>
          <section id="Main Information">
              <h1>Brayden de Koning</h1>
              <p>Phone: 0411 111 111 | Email: brayden@test.com</p>
              <p>Address: Street Suburb, State, Postcode</p>
              <p>LinkedIn: <a href="www.linkedin.com/in/brayden de koning">Linkedin URL .com</a></p>
              </section>

          <section id="career-profile">
              <h2>Career Profile</h2>
              <p>Personable and astute IT student with a proven track record in planning, coordinating, and managing technological events. Strong leadership and communication skills developed through various roles, including team leader positions. Committed to delivering high-quality results in fast-paced environments.</p>
          </section>

          <section id="education">
              <h2>Education</h2>
              <p>Bachelor of Information Technologies, January 2022 - December 2024</p>
              <p>Deakin University, Burwood, VIC</p>
              <p>High School, January 2014 - December 2019</p>
              <p>Beacon hills College, Berwick</p>
              <ul>
                  <li>Major: [Major Name]</li>
                  <li>Achievements: [Insert achievements, if applicable]</li>
              </ul>
          </section>

          <section id="experience">
              <h2>Experience</h2>
              <p>Traffic Controller, August 2020 - July 2021</p>
              <p>Knox Private Hospital, Burwood, VIC</p>
              <ul>
                  <li>Managed traffic and people for Covid swabs, adhering to strict PPE requirements</li>
                  <li>Ensured the safety of all workers on construction sites through effective communication</li>
                  <li>Developed nurses in a Covid-specific ward, adhering to strict PPE requirements</li>
                  <li>Led in calming agitated patients and facilitated communication within the hospital</li>
                  <li>Achievements: Appointed Team Leader for School Technology Team for 2 years</li>
              </ul>
          </section>
      </div>
  `
};

const Projects = {
  template: `
      <div>
          <h2>My Projects</h2>
          <table>
              <tr>
                  <th>Name</th>
                  <th>Description</th>
              </tr>
              <tr v-for="project in projects">
                  <td>{{ project.name }}</td>
                  <td>{{ project.description }}</td>
              </tr>
          </table>
      </div>`,
  data() {
    return {
      projects: [
        {
          name: '1.1P - HTML, CSS, Git and GitHub',
          description: 'Built an HTML page featuring various HTML tags like image, table, and form. Styled the page using inline, internal, and external CSS. Initialized a Git repository and pushed the code to GitHub.'
        },
        {
          name: 'SIT1.2P - Responsive Web Design',
          description: 'Created a responsive web page compatible with various devices. Wrote an essay on the importance of responsive web design and its implementation using HTML and CSS.'
        },
        {
          name: '1.3P - Personal Portfolio Website',
          description: 'Developed a personal portfolio website using HTML, CSS, and Vue 3. The website is fully responsive and adheres to the concepts taught in the unit, including Vue Router and handling user inputs.'
        }
      ]
    };
  }
};


const Contact = {
  template: `
      <div>
          <h2>Contact</h2>
          <form class="contact-form" @submit.prevent="submitForm">
              <div>
                  <label for="firstName">First Name:</label>
                  <input type="text" id="firstName" name="firstName" v-model="firstName">
              </div>
              <div>
                  <label for="lastName">Last Name:</label>
                  <input type="text" id="lastName" name="lastName" v-model="lastName">
              </div>
              <div>
                  <label for="email">Email:</label>
                  <input type="email" id="email" name="email" v-model="email">
              </div>
              <div>
                  <label for="reason">Reason for Contact:</label>
                  <textarea id="reason" name="reason" v-model="reason"></textarea>
              </div>
              <button type="submit">Submit</button>
          </form>
      </div>`,
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      reason: ''
    };
  },
  methods: {
    submitForm() {
      alert('Form submitted. Thank you for contacting us!');
    }
  }
};

const routes = [
  { path: '/', component: Home },
  { path: '/projects', component: Projects },
  { path: '/contact', component: Contact }
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

const app = Vue.createApp({});
app.use(router);
app.mount('#app');