import babyRubber from "./assets/images/plants/baby-rubber.png";
import rattleSnake from "./assets/images/plants/rattlesnake.png";
import zz from "./assets/images/plants/zz.png";
import aloeVera from "./assets/images/plants/aloe-vera.png";
import birdsNestFern from "./assets/images/plants/birds-nest-fern.png";

interface PlantInfo {
  id: string;
  name: string;
  scientificName: string;
  price: string;
  img: string;
}

let plants: PlantInfo[] = [
  {
    id: "1",
    name: "baby rubber plant",
    scientificName: "peperomia obtusifolia",
    price: "360.00",
    img: babyRubber,
  },
  {
    id: "2",
    name: "rattlesnake plant",
    scientificName: "calathea lancifolia",
    price: "360.00",
    img: rattleSnake,
  },
  {
    id: "3",
    name: "zz plant",
    scientificName: "zamioculcas zamiifolia",
    price: "360.00",
    img: zz,
  },
  {
    id: "4",
    name: "aloe vera",
    scientificName: "aloe barbadensis miller",
    price: "360.00",
    img: aloeVera,
  },
  {
    id: "4",
    name: "bird's nest fern",
    scientificName: "asplenium nidus",
    price: "360.00",
    img: birdsNestFern,
  },
];

export function getPlants() {
  return plants;
}

export function getPlant(id: string) {
  return plants.find((plant) => plant.id === id);
}

export function getMultiplePlants(plants: PlantInfo[], num: number) {
  const shuffled = [...plants].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
}
