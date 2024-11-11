import { useState, useEffect } from "react";
import "./App.css";


function App() {
    const [showOptions, setShowOptions] = useState({});
    const [selecteduser, setselecteduser] = useState(null);
    const [users, setUsers] = useState([]);
  
    const toggleOptions = (employeeId) => {
      setShowOptions((prevState) => ({
        ...prevState,
        [employeeId]: !prevState[employeeId],
      }));
    };
  
    const toggleDetails = (employee) => {
      setselecteduser(employee);
      const modal = new window.bootstrap.Modal(
        document.getElementById("employeeModal")
      );
      modal.show();
    };
  
    const closeModal = () => {
      setselecteduser(null);
      const modal = new window.bootstrap.Modal(
        document.getElementById("employeeModal")
      );
      modal.hide();
    };
  
    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => setUsers(data))
        .catch((error) => console.error("Error fetching data:", error));
    }, []);
  
     
  
    return (
      <>
        
  
        <div className="container mt-3 px-3 px-md-0 box">
          {/* Employee Table Header (for Desktop view) */}
          <div className="grid-header">
            <div className="header-item">Name</div>
            <div className="header-item">Username</div>
            <div className="header-item">Phone</div>
            <div className="header-item">Email</div>
            <div className="header-item">Website</div>
            <div className="header-item">City</div>
            <div className="header-item">Street</div>
            <div className="header-item">Suite</div>
            <div className="header-item">Zipcode</div>
            <div className="header-item">Options</div>
          </div>
  
          {/* Employee Tile View */}
          {users.map((user) => (
            <div
              key={user.id}
              className="employee">
              <div className="employee-name"><span className="forMobile">Name</span>{user.name}</div>
              <div className="employee-position"><span className="forMobile">Username</span>{user.username}</div>
              <div className="employee-department"><span className="forMobile">Phone</span>{user.phone}</div>
              <div className="employee-email">{user.email}</div>
              <div className="employee-website">{user.website}</div>
              <div className="employee-city">{user.address.city}</div>
              <div className="employee-street">{user.address.street}</div>
              <div className="employee-suite">{user.address.suite}</div>
              <div className="employee-zipcode">{user.address.zipcode}</div>
  
              <div className="employee-actions">
                <button
                  className="action-btn"
                  onClick={() => toggleOptions(user.id)}>
                  Actions
                </button>
                <div
                  className={`employee-dropdown ${
                    showOptions[user.id] ? "show" : ""
                  }`}>
                  <button className="dropdown-item">Edit</button>
                  <button className="dropdown-item">Flag</button>
                  <button className="dropdown-item">Delete</button>
                </div>
                {/* View Details button visible only in mobile view */}
                <button
                  className="detail-btn"
                  onClick={() => toggleDetails(user)}>
                  View Details
                </button>
              </div>
            </div>
          ))}
  
          <div
            className="modal fade"
            id="employeeModal"
            tabIndex="-1"
            aria-labelledby="employeeModalLabel"
            aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5
                    className="modal-title"
                    id="employeeModalLabel">
                    User Details
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  {selecteduser && (
                    <>
                      <p><span className="strong">Name:</span> {selecteduser.name}</p>
              <p><span className="strong">Username:</span> {selecteduser.username}</p>
              <p><span className="strong">Phone</span> {selecteduser.phone}</p>
              <p><span className="strong">Email</span> {selecteduser.email}</p>
              <p><span className="strong">Website</span> {selecteduser.website}</p>
              <p><span className="strong">City</span> {selecteduser.address.city}</p>
              <p><span className="strong">Street</span> {selecteduser.address.street}</p>
              <p><span className="strong">Suite</span> {selecteduser.address.suite}</p>
              <p><span className="strong">Zipcode</span> {selecteduser.address.zipcode}</p>
                    </>
                  )}
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={closeModal}
                    data-bs-dismiss="modal">
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

export default App;