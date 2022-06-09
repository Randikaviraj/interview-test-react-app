import React, { Component } from "react";
import UserNavBar from "../NavBar/UserNavBar";
import Table from "../Table/Table";
import Pagination from "../Pagination/Pagination";

export default class User extends Component {
  state = {
    user_data: [],
    page_numbers: 0,
    current_page_no: 1,
  };

  fetchUserDate = async () => {
    fetch(this.props.user_page_url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
        this.setState({
          user_data: data.data,
          page_numbers: data.total_pages,
          current_page_no: data.page,
        });
      });
  };

  componentDidMount() {
    this.fetchUserDate();
  }

  pagingHandler = (page_no) => {
    if (!(page_no < 1 || page_no > this.state.page_numbers)) {
      this.setState({ current_page_no: page_no });
    }
  };

  render() {
    return (
      <>
        <UserNavBar />
        <Table
          row_data={this.state.user_data}
          headers={["Id", "Frist Name", "Last Name", "Email"]}
        />
        <div class="d-flex flex-row-reverse">
          <Pagination
            pagingHandler={this.pagingHandler}
            page_numbers={this.state.page_numbers}
            current_page_no={this.state.current_page_no}
          />
        </div>
      </>
    );
  }
}
