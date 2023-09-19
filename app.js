const Home = { 
  template: `
      <div>
          <h2>Home Page</h2>
          <p>Welcome to my Task.</p>
          
          <h3>1. Responsive Design features</h3>
          <p>Used media queries in CSS for different screen sizes.</p>

          <h3>2. HTML</h3>
          <p>Added a table, form, headers, and a favicon.</p>

          <h3>3. CSS</h3>
          <p>Styles are in an external CSS file. Used media queries for responsiveness.</p>

          <h3>4. Vue 3</h3>
          <p>Used Vue 3 for the project. Added Vue Router for page navigation.</p>

          <h3>5. Handling User Inputs</h3>
          <p>Used Vue directives like v-for and v-model.</p>

          <h3>6. Vue Components</h3>
          <p>Created Vue components for Home, Projects, and Contact pages.</p>
      </div>
  ` 
};



const Projects = {
  template: `
      <div>
          <h2>Project Page</h2>
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
        { name: 'Project 1.1P', description: 'Description 1' },
        { name: 'Project 1.2P', description: 'Description 2' }
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