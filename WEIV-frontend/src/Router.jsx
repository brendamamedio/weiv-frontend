import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/TelaHome/Home"
import TelaOutrosEventos from "./pages/TelaOutrosEventos/TelaOutrosEventos";
import AlterarSenha from "./pages/TelaAlterarSenha/AlterarSenha";
import TelaEventosHoje from "./pages/TelaEventosHoje/TelaEventosHoje";

function AppRouter() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/outros-eventos" element={<TelaOutrosEventos />}></Route>
                    <Route path="/eventos-hoje" element={<TelaEventosHoje />}></Route>
                    <Route path="/alterar-senha" element={<AlterarSenha/>}></Route>
                </Routes>
            </Router>
        </>
    )
}

export default AppRouter;