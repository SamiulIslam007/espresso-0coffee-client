import React from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
  const loadedUsers = useLoaderData();
  return (
    <div>
      <h1 className="text-4xl text-center mb-6">Users: {loadedUsers.length}</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Creation Time</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {loadedUsers.map((user, index) => {
              return (
                <tr key={user._id}>
                  <th>{index + 1}</th>
                  <td>{user.userEmail}</td>
                  <td>{user.creationTime}</td>
                  <td className="space-x-3">
                    <button className="btn btn-info">Update</button>
                    <button className="btn btn-error">Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
