import * as signalR from "@microsoft/signalr";

// Cria a conexão com o SignalR
const connection = new signalR.HubConnectionBuilder()
  .withUrl("http://192.168.0.109:5000/chatHub", {
    withCredentials: true
  })
  .withAutomaticReconnect({
    initialIntervalInMilliseconds: 1000, // tempo inicial de reconexão
    maxAttempts: 5, // tenta reconectar no máximo 5 vezes
    retryIntervalInMilliseconds: 2000 // intervalo entre tentativas de reconexão
  })
  .build();

connection.onclose((error) => {
  if (error) {
    console.error("❌ Erro ao conectar:", error);
  } else {
    console.log("Conexão encerrada.");
  }
});

export default connection;
