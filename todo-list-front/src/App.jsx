import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";

import {
  Container,
  ToDoList,
  Input,
  Button,
  ListItem,
  Trash,
  Checked,
} from "./styles.js";
import api from "./api/index.js";

function App() {
  const [list, setList] = useState([]);
  /* padrao do estado do react*/
  const [inputTask, setInputTask] = useState("");

  async function pegarTodasTarefas() {
    const { data } = await api.get("/todos");
    setList(data);
  }

  function inputMudou(event) {
    setInputTask(event.target.value);
  }

  async function incluirTarefa() {
    if (inputTask) {
      await api.post("/todos", { task: inputTask });
      setList([...list, { id: uuid(), task: inputTask, finished: false }]);
    }
  }
  async function finalizarTarefa(id, finished) {
    await api.patch(`/todos/${id}`, {
      finished: !finished,
    });
    pegarTodasTarefas();
  }
  async function deletarItem(id) {
    await api.delete(`/todos/${id}`);
    pegarTodasTarefas();
  }

  useEffect(() => {
    pegarTodasTarefas();
  }, []);

  return (
    <Container>
      <ToDoList>
        <Input onChange={inputMudou} placeholder="Incluir Tarefa..." />
        <Button onClick={incluirTarefa}>Adicionar</Button>
        <ul>
          {list.length > 0 ? (
            list.map((item) => (
              <ListItem isFinished={item.finished} key={item._id}>
                <Checked
                  onClick={() => finalizarTarefa(item._id, item.finished)}
                />
                <li>{item.task}</li>
                <Trash onClick={() => deletarItem(item._id)} />
              </ListItem>
            ))
          ) : (
            <h3>Não Há Itens na lista</h3>
          )}
        </ul>
      </ToDoList>
    </Container>
  );
}
export default App;
