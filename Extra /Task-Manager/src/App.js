import logo from './logo.svg';
import './App.css';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useEffect, useRef, useState } from 'react';
import { ExportToExcel } from './components/ExportToExcel';
import axios from 'axios';
import swal from 'sweetalert';

function App() {
  const title = useRef("");
  const date = useRef
  ("");
  // const Navigate=useNavigate("");

  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  
  const addtask = () => {
    var insert = {
      title: title.current.value,
      date: date.current.value
    }

    axios.post("http://localhost:400/task", insert)
      .then(() => {
        swal("Add Success");
        // Navigate("/")
      });

  }

  // dectructure for table 

  const [task, settask] = useState([]);
  const fileName = "myfile"; 

  useEffect(() => {

    axios.get("http://localhost:400/task")
      .then((res) => {
        settask(res.data)

      });

  }, []);
  return (
    <>
      <Container className='alll'>
        <div className='TaskManager'>
          <div className='pops w-50 mx-auto mt-5 p-2'>
            <div className='row m-0 p-0'>
              <div className='col-sm-10'>
                <h2 className='text-white'>Task Manager App</h2>
                <h3 className='mt-4 text-white'>Number of Task : 0</h3>
              </div>
              <div className='col-sm-2'>
                <button className='btn btn-success add' onClick={handleShow}>Add</button>
              </div>
            </div>
          </div>
        </div>

        <Modal className='' show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Task Manager App</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form className='form-control'>
              <label>Task</label><br />
              <input type='text' ref={title} placeholder='Task Title**' className='form-control' /><br />

              <label>Date & Time</label><br />
              <input type='date' ref={date} placeholder='Date & Time **' className='form-control' /><br />
              <button type='button' onClick={addtask} className='form-control bg-dark text-white'>Submit Task</button>

            </form>

            <h5 className='mt-4'>Number of Task : 0</h5>
            <p>No Task Passed</p>
          </Modal.Body>
        </Modal>

        <div className='mt-5 mx-auto w-50'>
          <h1 className='text-white'>Manage Task : </h1>
          <table className="table-data">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Date (yy/mm/dd)</th>
              </tr>
            </thead>
            <tbody>
              {task && task.map((item) => {
                return (


                  <tr>
                    <th scope="row" key={item.id}>{item.id}</th>
                    <td>{item.title}</td>
                    <td>{item.date}</td>
                  </tr>

                )
              })}
            </tbody>
          </table>
          
        </div>
        <ExportToExcel apiData={task} fileName={fileName} />
      </Container>


    </>
  );
}

export default App;