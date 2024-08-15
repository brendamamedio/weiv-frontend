import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/TelaHome/Home"
import TelaOutrosEventos from "./components/TelaOutrosEventos/TelaOutrosEventos";
import AlterarSenha from "./components/TelaAlterarSenha/AlterarSenha";

function AppRouter() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/outros-eventos" element={<TelaOutrosEventos />}></Route>
                    <Route path="/alterar-senha" element={<AlterarSenha/>}></Route>
                </Routes>
            </Router>
        </>
    )
}

export default AppRouter;