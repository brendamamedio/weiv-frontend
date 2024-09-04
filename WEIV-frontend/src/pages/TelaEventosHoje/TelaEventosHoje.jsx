import "./style.css"
import { EventGrid } from "../../components/EventGrid/EventGrid";
import EventGridFooter from "../../components/EventGridFooter/EventGridFooter";
import { Header } from "../../components/Header/Header";
import { Section } from "../../components/Section/Section";

function TelaEventosHoje() {
    return (
        <>
            <Header></Header>

            <Section>
                <EventGrid></EventGrid>

                <EventGridFooter></EventGridFooter>
            </Section>
        </>
    )
}

export default TelaEventosHoje;