import React, { useRef } from "react";
import * as signalR from "@microsoft/signalr";
import connection from "../signalr/connection";

const Join = (props) => {
  const usernameRef = useRef();

  const handleSubmit = async () => {
    const username = usernameRef.current.value;
    if (!username.trim() || username.length < 3) {
      alert("Por favor, digite um nome de usuário válido.");
      return;
    }

    try {
      // Verifica se a conexão já está estabelecida
      if (connection.state === signalR.HubConnectionState.Disconnected) {
        await connection.start();
        console.log("✅ Conectado ao servidor SignalR");
      }

      // Verifica se a conexão foi estabelecida corretamente
      if (connection.state === signalR.HubConnectionState.Connected) {
        // Definindo o usuário no backend
        await connection.invoke("DefinirUsuario", username);
        console.log("Usuário definido:", username);

        // Atualizando o estado no componente pai
        props.setUsername(username);  // <-- Aqui está a alteração
        props.setSocket(connection);
        props.visibility(true);
      } else {
        console.log("❌ Não foi possível estabelecer a conexão com o SignalR.");
      }
    } catch (err) {
      console.error("❌ Erro ao conectar com o SignalR:", err);
    }
  };

  return (
    <div className="join-container min-vh-100 d-flex flex-column justify-content-center align-items-center px-3">
      <h1 className="display-4 fw-bold mb-4 text-title">devChat</h1>

      <div className="join-card rounded-4 shadow-lg p-4 w-100">
        <h4 className="mb-4 text-center fw-semibold text-subtitle custom-subtitle">
          Conecte-se com seus amigos!
        </h4>

        <div className="form-floating mb-4">
          <input
            ref={usernameRef}
            type="text"
            className="form-control border-0 text-bg-dark join-input"
            id="nomeUsuario"
            placeholder="Nome de usuário"
            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          />
          <label htmlFor="nomeUsuario" className="text-light">
            Nome de usuário
          </label>
        </div>

        <button className="w-100 py-2 fw-semibold join-button" onClick={handleSubmit}>
          Entrar
        </button>
      </div>
    </div>
  );
};

export default Join;
