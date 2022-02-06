import express from "express";
import statusRoute from "./routes/status.route";
import usersRoute from "./routes/users.route";

const app = express();

//Configurações da aplicação
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configurações da Rota
app.use(statusRoute);
app.use(usersRoute);

// app.get("/status", (req: Request, resp: Response, next: NextFunction) => {
//     resp.status(200).send({ foo: "Sucesso!" });
// });

// Configuração de inicialização
app.listen(3000, () => {
    console.log("Aplicação escutando na porta 3000");
});
