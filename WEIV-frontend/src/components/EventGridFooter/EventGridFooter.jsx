import "./style/event-grid-footer-style.css"
import { IconButton } from '../IconButton/IconButton';

const EventGridFooter = () => {
    return (
        <>
            <div className="event-grid-footer">
                <p className="results-count">XX resultados encontrados</p>

                <div className="event-grid-footer-pages">
                    <span className="footer-pages">Página XX de XX</span>
                    
                    <div className="flex gap-1.5">
                        <IconButton>
                            <span className="material-symbols-outlined">keyboard_double_arrow_left</span>
                        </IconButton>
                        <IconButton>
                            <span className="material-symbols-outlined">chevron_left</span>
                        </IconButton>
                        <IconButton>
                            <span className="material-symbols-outlined">chevron_right</span>
                        </IconButton>
                        <IconButton>
                            <span className="material-symbols-outlined">keyboard_double_arrow_right</span>
                        </IconButton>
                    </div>
                </div>
            </div>
        </>
    );
}

export default EventGridFooter;