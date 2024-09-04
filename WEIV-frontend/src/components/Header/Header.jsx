import "./style/header-style.css"

export function Header() {
    return (
        <>
            <header className="header-container">
                <h1 className="header-title">Eventos hoje</h1>

                <div className="form-div">
                    <p className="form-label">Filtrar por:</p>

                    <form className="filter-form">
                        <div className="form-group">
                            <label htmlFor="idate">Data:</label>
                            <input type="date" name="date" id="idate" className="input-date" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="iprice">Preço:</label>
                            <select name="price" id="iprice" className="input-select">
                                <option value="gratis">Grátis</option>
                                <option value="pago">Pago</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="iorder">Ordem:</label>
                            <select name="order" id="iorder" className="input-select">
                                <option value="relevancia">Relevância</option>
                            </select>
                        </div>
                    </form>
                </div>
            </header>
        </>
    )
}