import express, { Request, Response, NextFunction } from "express";

const app = express();

app.get("/status", (req: Request, resp: Response, next: NextFunction) => {
    resp.status(200).send({ foo: "bar" });
});

app.listen(3000, () => {
    console.log("Aplicação escutando na porta 3000");
});
