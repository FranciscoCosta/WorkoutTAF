"use client";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import Modal from "react-modal"; // Import the react-modal library
import "./Dashboard.scss";
import { FaEdit, FaTrash } from "react-icons/fa";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "1px solid rgba(0,0,0,0.5)",
  },
};

Modal.setAppElement("#Dashboard");
const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [isloading, setIsloading] = useState(true);
  const [selectedUserId, setSelectedUserId] = useState(null as any);
  const [selectedUserName, setSelectedUserName] = useState("");
  const [selectedUserEmail, setSelectedUserEmail] = useState("");
  const [selectedUserRole, setSelectedUserRole] = useState("");
  const [selectedUserRoleEdit, setSelectedUserRoleEdit] = useState("");
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  //Workout files
  const [workoutFile, setWorkoutFile] = useState(null);
  const [dietFile, setDietFile] = useState(null);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const response = await axios.get("/api/users/all");
      setUsers(response.data);
      setIsloading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const createWorkout = async (userdId: string) => {
    try {
      const response = await axios.post("/api/workouts/createworkout", {
        data: {
          userId: userdId,
        },
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const getWorkoutDietFiles = async (userId: string) => {
    console.log(userId);
    try {
      const response = await axios.post("/api/workouts/getworkout", {
        data: {
          userId: userId,
        },
      });

      if (response.status === 200) {
        setWorkoutFile(null);
        setDietFile(null);
        createWorkout(userId);
      }
      const { workoutPDF } = response.data;
      if (workoutPDF) {
        setWorkoutFile(workoutFile);
      }
      const { dietPDF } = response.data;
      if (dietPDF) {
        setDietFile(dietFile);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleDeleteUser = async () => {
    console.log(selectedUserId);
    try {
      await axios.delete("/api/users/deleteuser", {
        data: {
          userId: selectedUserId,
        },
      });
      getUsers();
      toast.success("Usuário deletado com sucesso.");
    } catch (error) {
      console.log(error);
      toast.error("Erro ao deletar o usuário.");
    }
    closeDeleteModal();
  };

  const openDeleteModal = (userId: string) => {
    setSelectedUserId(userId);
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setSelectedUserId(null);
    setIsDeleteModalOpen(false);
  };

  const openEditModal = async (
    userId: string,
    userName: string,
    userEmail: string,
    userRole: string
  ) => {
    const a = await getWorkoutDietFiles(userId);
    setSelectedUserId(userId);
    setSelectedUserName(userName);
    setSelectedUserEmail(userEmail);
    setSelectedUserRole(userRole);
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setSelectedUserId(null);
    setIsEditModalOpen(false);
  };

  const handleEditRoleUser = async () => {
    try {
      await axios.patch("/api/users/edituserrole", {
        userId: selectedUserId,
        role: selectedUserRoleEdit,
      });
      getUsers();
      toast.success("Role do usuário editado com sucesso.");
    } catch (error) {
      console.log(error);
      toast.error("Erro ao editar role do usuário.");
    }
    closeEditModal();
  };

  const handleEditWorkout = async () => {
    try {
      const formData = new FormData();
      formData.append('userId', selectedUserId);
      if (workoutFile) {
        formData.append('workoutFile', workoutFile);
      }
      if (dietFile) {
        formData.append('dietFile', dietFile);
      }
  
      await axios.patch("/api/workouts/editworkout", formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  
      getUsers();
      toast.success("Role do usuário editado com sucesso.");
    } catch (error) {
      console.log(error);
      toast.error("Erro ao editar role do usuário.");
    }
    closeEditModal();
  };
  

  return (
    <div className="Dashboard" id="Dashboard">
      <div className="Dashboard__container">
        <div className="Dashboard__title">
          <h1>Tabela de usuários</h1>
        </div>
        {!isloading && (
          <div className="Dashboard__content">
            <table className="Dashboard__table">
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Editar/Excluir</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user: any) => (
                  <tr key={user._id}>
                    <td>
                      {user.firstName} {user.lastName}
                    </td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    <td>
                      <div className="Dashboard__icons">
                        <FaEdit
                          className="Dashboard__icon edit"
                          onClick={() =>
                            openEditModal(
                              user._id,
                              `${user.firstName} ${user.lastName}`,
                              user.email,
                              user.role
                            )
                          }
                        />
                        <FaTrash
                          className="Dashboard__icon delete"
                          onClick={() => openDeleteModal(user._id)}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      {/* Delete User Modal */}
      <Modal
        isOpen={isDeleteModalOpen}
        onRequestClose={closeDeleteModal}
        contentLabel="Delete User Modal"
        style={customStyles}
      >
        <div
          className="modal__container"
          style={{
            display: "flex",
            flexDirection: "column",
            height: "250px",
            alignContent: "center",
            justifyContent: "center",
            gap: "1.5rem",
          }}
        >
          <h2 style={{ color: "red", fontSize: "3rem", fontWeight: "600" }}>
            Confirmar apagar usuário
          </h2>
          <p
            style={{
              fontSize: "1.2rem",
              fontWeight: "400",
              alignSelf: "center",
            }}
          >
            Tem a certeza que quer apagar este usuário ?
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              gap: "4rem",
            }}
          >
            <button
              style={{
                padding: "0.7rem 2.5rem",
                borderRadius: "10px",
                fontSize: "1.2rem",
                fontWeight: "600",
                color: "white",
                backgroundColor: "red",
              }}
              onClick={handleDeleteUser}
            >
              Apagar
            </button>
            <button
              style={{
                padding: "0.7rem 2.5rem",
                borderRadius: "10px",
                fontSize: "1.2rem",
                fontWeight: "600",
                color: "white",
                backgroundColor: "black",
              }}
              onClick={closeDeleteModal}
            >
              Cancelar
            </button>
          </div>
        </div>
      </Modal>
      {/* Edit User Modal */}
      <Modal
        isOpen={isEditModalOpen}
        onRequestClose={closeEditModal}
        contentLabel="Edit User Modal"
        style={customStyles}
      >
        <div
          className="modal__container"
          style={{
            display: "flex",
            flexDirection: "column",
            height: "90vh",
            width: "90vw",
            alignContent: "center",
            justifyContent: "start",
            gap: "1rem",
            marginTop: "10%",
          }}
        >
          <h2 style={{ color: "black", fontSize: "3rem", fontWeight: "600" }}>
            Informação usuário
          </h2>
          <div
            style={{
              display: "flex",
              width: "100%",
              flexDirection: "row",
              alignItems: "center",
              gap: "2rem",
            }}
          >
            <p style={{ fontSize: "1.6rem" }}>{selectedUserName}</p>
            <p style={{ fontSize: "1.6rem" }}>{selectedUserEmail}</p>
            <p style={{ fontSize: "1.6rem" }}>{selectedUserRole}</p>
          </div>
          <h2 style={{ color: "black", fontSize: "2.5rem", fontWeight: "500" }}>
            Editar role usuário
          </h2>
          <div
            className="edit-role-modal"
            style={{ display: "flex", flexDirection: "row", gap: "3rem" }}
          >
            <select
              name="editRole"
              id=""
              onChange={(event) => setSelectedUserRoleEdit(event.target.value)}
              style={{
                padding: "0.7rem 2.5rem",
                fontSize: "1.2rem",
                fontWeight: "400",
                color: "black",
                width: "100%",
                maxWidth: "200px",
              }}
            >
              <option value="user">user</option>
              <option value="client">client</option>
              <option value="admin">admin</option>
            </select>

            <button
              style={{
                padding: "0.7rem 2.5rem",
                borderRadius: "10px",
                fontSize: "1.2rem",
                fontWeight: "600",
                color: "white",
                backgroundColor: "#4ae54a",
              }}
              onClick={handleEditRoleUser}
            >
              Editar
            </button>
          </div>

          <div>
            <input
              type="file"
              accept=".pdf"
              onChange={(event) => setWorkoutFile(event.target.files[0])}
            />
            <input
              type="file"
              accept=".pdf"
              onChange={(event) => setDietFile(event.target.files[0])}
            />
          </div>
          <p
            style={{
              fontSize: "1.2rem",
              fontWeight: "400",
              alignSelf: "center",
            }}
          >
            Tem a certeza que quer editar dieta/workout usuário ?
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              gap: "4rem",
            }}
          >
            <button
              style={{
                padding: "0.7rem 2.5rem",
                borderRadius: "10px",
                fontSize: "1.2rem",
                fontWeight: "600",
                color: "white",
                backgroundColor: "#4ae54a",
              }}
              onClick={handleEditWorkout}
            >
              Editar
            </button>
            <button
              style={{
                padding: "0.7rem 2.5rem",
                borderRadius: "10px",
                fontSize: "1.2rem",
                fontWeight: "600",
                color: "white",
                backgroundColor: "black",
              }}
              onClick={closeEditModal}
            >
              Cancelar
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Dashboard;
