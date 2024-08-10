import './index.css';
import './App.css';
import { Section } from "./components/Section/Section";
import icon from './assets/icons/Schedule.svg'
import { EventCategoryCard } from "./components/EventCategoryCard/EventCategoryCard";
import { EventGrid } from './components/EventGrid/EventGrid';
import { Button } from './components/Button/Button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card"

function App() {
  return (
    <>
      <Section title="Outros eventos" height={120}>
        <EventCategoryCard icon={icon} title="Eventos hoje"></EventCategoryCard>
        <EventCategoryCard icon={icon} title="Eventos da próxima semana"></EventCategoryCard>
        <EventCategoryCard icon={icon} title="Eventos desta semana"></EventCategoryCard>
        <EventCategoryCard icon={icon} title="Eventos amanhã"></EventCategoryCard>
        <EventCategoryCard icon={icon} title="Eventos do próximo mês"></EventCategoryCard>
        <EventCategoryCard icon={icon} title="Eventos deste mês"></EventCategoryCard>
      </Section>

      <Section title="Sugestões rápidas para você">
        <EventGrid></EventGrid>

        <Button textContent="Visualizar mais"></Button>
      </Section>

      <Section title="Eventos populares nas últimas 24 horas">
        <Carousel opts={{align: "start",}} className="w-full">
          <CarouselContent className="space-x-4"> 
            {Array.from({ length: 9 }).map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4"> 
                <div className="p-2"> 
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-8"> 
                      <span className="text-4xl font-semibold">{index + 1}</span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </Section>
    </>
  );
}

export default App;