import {
  MaxBox,
  Burger,
  Donar,
  KlabSend,
  Lavash,
  Desert,
  Drink,
  Sous,
  Tamaddi,
  Shaurma,
  Panini,
  Gazak,
  HotDog,
} from "./category";

const CardContainer = () => {
  return (
    <section className="mb-10 mt-[70px]">
      <MaxBox />
      <KlabSend />
      <Lavash />
      <Shaurma />
      <Panini />
      <Burger />
      <Donar />
      <HotDog />
      <Gazak />
      <Tamaddi />
      <Desert />
      <Drink />
      <Sous />
    </section>
  );
};

export default CardContainer;
