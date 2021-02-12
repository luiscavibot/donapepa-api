import express from "express";
import morgan from "morgan";
import cors from "cors";

import taskRoutes from "./routes/tasks.routes";
import ventasRoutes from "./routes/ventas.routes";
import productosRoutes from "./routes/productos.routes";
import numeracionRoutes from "./routes/numeracion.routes";
import borradorRoutes from "./routes/borrador.routes";
import liquidacionesRoutes from "./routes/liquidaciones.routes";
import clientesRoutes from "./routes/clientes.routes";

const app = express();

// Settings
app.set("port", process.env.PORT || 3000);

// const corsOptions = {origin: "http://localhost:3000"};
const corsOptions = {};
app.use(cors(corsOptions));

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the application" });
});

app.use("/api/tasks", taskRoutes);
app.use("/api/ventas", ventasRoutes);
app.use("/api/productos", productosRoutes);
app.use("/api/numeracion", numeracionRoutes);
app.use("/api/borrador", borradorRoutes);
app.use("/api/borrador", borradorRoutes);
app.use("/api/liquidaciones", liquidacionesRoutes);
app.use("/api/clientes", clientesRoutes);

export default app;
