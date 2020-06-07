import React, { Component } from 'react';
import { FaPlus } from 'react-icons/fa';

class AddAppointments extends Component {
  constructor() {
    super();
    this.state = {
      patName: '',
      patAdd: '',
      aptDate: '',
      aptTime: '',
      patConcern: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd (e) {
    e.preventDefault();
    let tempApt = {
      patName: this.state.patName,
      patAdd: this.state.patAdd,
      aptDate: this.state.aptDate + ' ' + this.state.aptTime,
      patConcern: this.state.patConcern
    }
    this.props.addAppointment(tempApt);
    this.setState({
      patName: '',
      patAdd: '',
      aptDate: '',
      aptTime: '',
      patConcern: ''
    });
    this.props.toggleForm();
  }

  handleChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  render() {
    return (
      <div className={
        "card textcenter mt-3 " +
        (this.props.formDisplay ? '': 'add-appointment')
      }>
        <div className="apt-addheading card-header bg-primary text-white"
        onClick={this.props.toggleForm}>
        <FaPlus /> New Appointment
      </div>

      <div className="card-body">
          <form id="aptForm" noValidate
            onSubmit={this.handleAdd}
          >
          <div className="form-group form-row">
            <label
              className="col-md-2 col-form-label text-md-right"
              htmlFor="patName"
              readOnly
            >
              Patient Name
            </label>
            <div className="col-md-10">
              <input
                type="text"
                className="form-control"
                name="patName"
                  placeholder="Patient's Name"
                  value={this.state.patName}
                  onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="form-group form-row">
            <label
              className="col-md-2 col-form-label text-md-right"
              htmlFor="patAdd"
            >
              Address
            </label>
            <div className="col-md-10">
              <input
                type="text"
                className="form-control"
                name="patAdd"
                  placeholder="Patient's Address"
                  value={this.state.patAdd}
                  onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="form-group form-row">
            <label
              className="col-md-2 col-form-label text-md-right"
              htmlFor="aptDate"
            >
              Appointment Date
            </label>
            <div className="col-md-4">
              <input
                type="date"
                className="form-control"
                name="aptDate"
                  id="aptDate"
                  value={this.state.aptDate}
                  onChange={this.handleChange}
              />
            </div>
            <label
              className="col-md-2 col-form-label text-md-right"
              htmlFor="aptTime"
            >
              Appointment Time
            </label>
            <div className="col-md-4">
              <input
                type="time"
                className="form-control"
                name="aptTime"
                  id="aptTime"
                  value={this.state.aptTime}
                  onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="form-group form-row">
            <label className="col-md-2 text-md-right" htmlFor="patConcern">
              Concern
            </label>
            <div className="col-md-10">
              <textarea
                className="form-control"
                rows="4"
                cols="50"
                name="patConcern"
                id="patConcern"
                  placeholder="Concern"
                  value={this.state.patConcern}
                  onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="form-group form-row mb-0">
            <div className="offset-md-2 col-md-10">
              <button
                type="submit"
                className="btn btn-primary d-block ml-auto"
              >
                Add Appointment
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
    )
  }
}

export default AddAppointments;