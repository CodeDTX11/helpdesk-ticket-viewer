export default function About() {
  return (
    <div className="container my-5">
      <h1 className="mb-4">About This App</h1>
      <p>
        The Help Desk Ticket Viewer is a frontend React application designed to
        display and filter help desk tickets using a REST API. The backend is a Spring Boot 
        application that provides the necessary endpoints for ticket management and uses an H2 database for data storage.
      </p>
      <h4>Technologies Used:</h4>
      <ul>
        <li>React (with React Router)</li>
        <li>Vite</li>
        <li>Bootstrap</li>
        <li>Axios</li>
        <li>Spring Boot</li>
        <li>H2 Database</li>
      </ul>
      <p>
        Created by Dylan Messerly as part of a full-stack practice project.
      </p>
    </div>
  );
}
