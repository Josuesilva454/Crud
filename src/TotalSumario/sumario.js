import React, { useState, useEffect } from "react";
import axios from "axios";

function Sumario() {
  const [totalImportacao, setTotalImportacao] = useState(0);
  const [totalExportacao, setTotalExportacao] = useState(0);

  useEffect(() => {
    // Faça uma chamada à API para buscar o sumário
    axios
      .get("http://localhost:8080/movimentacoes/sumario")
      .then((response) => {
        setTotalImportacao(response.data.totalImportacao);
        setTotalExportacao(response.data.totalExportacao);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="sumario-nav">
      <h2>Sumário</h2>
      <p>Total de Importação: {totalImportacao}</p>
      <p>Total de Exportação: {totalExportacao}</p>
    </div>
  );
}

export default Sumario;
