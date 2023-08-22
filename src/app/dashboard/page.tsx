"use client";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import Modal from "react-modal"; // Import the react-modal library
import "./Dashboard.scss";
import { FaEdit, FaTrash } from "react-icons/fa";


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#Dashboard');
const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [isloading, setIsloading] = useState(true);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

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

  const handleDeleteUser = async () => {
    try {
      await axios.delete(`/api/users/${selectedUserId}`);
      getUsers();
      toast.success("Usuário deletado com sucesso.");
    } catch (error) {
      console.log(error);
      toast.error("Erro ao deletar o usuário.");
    }
    closeDeleteModal();
  };

  const openDeleteModal = (userId) => {
    setSelectedUserId(userId);
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setSelectedUserId(null);
    setIsDeleteModalOpen(false);
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
                        <FaEdit className="Dashboard__icon edit" />
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
        <div className="modal__container" style={{display: 'flex' , flexDirection: 'column', height: '250px', alignContent: 'center', justifyContent: 'center', gap: '1.5rem'}}>
          <h2 style={{color: 'red' , fontSize: '3rem', fontWeight: '600'}}>Confirmar apagar usuário</h2>
          <p style={{fontSize: '1.2rem', fontWeight: '400' , alignSelf: 'center'}}>Tem a certeza que quer apagar este usuário ?</p>
          <div style={{display: 'flex' , flexDirection: 'row', width: '100%', alignItems: 'center', justifyContent: 'center', gap: '4rem'}}>
          <button style={{padding: '0.7rem 2.5rem', borderRadius: '15px', fontSize: '1.2rem', fontWeight: '600' , color: 'white', backgroundColor: 'red'}} onClick={handleDeleteUser}>Apagar</button>
          <button style={{padding: '0.7rem 2.5rem', borderRadius: '15px', fontSize: '1.2rem', fontWeight: '600' , color: 'white', backgroundColor: 'black'}} onClick={closeDeleteModal}>Cancelar</button>

          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Dashboard;
