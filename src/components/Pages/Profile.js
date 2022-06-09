import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Profile({ profile_url = "" }) {
  let { id } = useParams();
  const [profile_object, setProfile_object] = useState({});
  useEffect(() => {
    const fetchProfile = async () => {
      fetch(`${profile_url}/${id}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data.data);
          setProfile_object(data.data);
        });
    };
    fetchProfile();
  }, []);

  return (
    <>
      <div className="container p-5">
        <div className="row">
          <div className="col-md-4">
            <div>
              <img src={profile_object.avatar} alt="" />
            </div>
          </div>
          <div className="col-md-6">
            <div>
              <h5>{profile_object.first_name}</h5>
              <h6>{profile_object.email}</h6>
            </div>
          </div>
        </div>
        <div className="d-flex flex-row-reverse">
          <div className="col-md-8">
            <div>
              <div>
                <div className="row">
                  <div className="col-md-4">
                    <label>User Id</label>
                  </div>
                  <div class="col-md-4">
                    <p>{profile_object.id}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <label>Frist Name</label>
                  </div>
                  <div class="col-md-4">
                    <p>{profile_object.first_name}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <label>Last Name</label>
                  </div>
                  <div class="col-md-4">
                    <p>{profile_object.last_name}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <label>E-mail</label>
                  </div>
                  <div class="col-md-4">
                    <p>{profile_object.email}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
