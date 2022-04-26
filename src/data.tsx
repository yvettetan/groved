export interface PlantInfo {
  id: number;
  name: string;
  scientificName: string;
  description: string;
  price: number;
  img: string;
  care: { sun: string; water: string; other: string };
}

let plants: PlantInfo[] = [
  {
    id: 1,
    name: "calathea orbifolia",
    scientificName: "calathea orbifolia",
    description:
      "The Calathea Orbifolia’s broad, oval-shaped leaves with contrasting green stripes make it a popular plant for home decor and plant enthusiasts alike. Its lush foliage benefits from frequent waterings and high humidity. In ideal conditions (think tropical), its pet-friendly leaves can grow over a foot wide!",
    price: 360,
    img: "/assets/images/plants/calathea-orbifolia/calathea-orbifolia-cream.jpeg",
    care: {
      sun: "Thrives in medium to bright indirect light, but can tolerate low indirect light. Not suited for direct sun.",
      water:
        "Water every 1-2 weeks, allowing soil to dry out half way between waterings. Expect to water more often in brighter light and less often in lower light.",
      other: "Pet friendly",
    },
  },
  {
    id: 2,
    name: "swiss cheese plant",
    scientificName: "monstera adansonii",
    description:
      "Monstera Adansonii are known for their lacy green leaves, covered with natural leaf-holes called fenestrations. It also boasts soft yet resilient stems that can be trained to climb, hang, or trail.",
    price: 360,
    img: "/assets/images/plants/swiss-cheese-plant/swiss-cheese-plant-blush.jpeg",
    care: {
      sun: "Thrives in bright indirect to medium light.",
      water:
        "Water every 1-2 weeks, allowing soil to mostly dry out between waterings. Increase frequency with increased light Monsteras can benefit from filtered water or leaving water out overnight before using.",
      other:
        "As this plant matures, it might reach for something to climb. Provide it with a trellis or moss pole to encourage vertical growth.",
    },
  },
  {
    id: 3,
    name: "zz plant",
    scientificName: "zamioculcas zamiifolia",
    description:
      "The ZZ Plant is characterized by its waxy green leaves above the surface of its potting mix, and its large potato-like rhizomes underneath. These rhizomes store water, making the ZZ a hardy, drought-tolerant houseplant that only needs water every few weeks.",
    price: 360,
    img: "/assets/images/plants/zz-plant/zz-plant-mint.jpeg",
    care: {
      sun: "Thrives in medium to bright indirect light, but can tolerate low indirect light. Not suited for intense, direct sun.",
      water:
        "Water every 2-3 weeks, allowing soil to dry out between waterings. Expect to water more often in brighter light and less often in lower light.",
      other:
        "You might spot large potato-like rhizomes under the surface of the ZZ Plant's soil. These store water to help the plant survive drought in its native habitat.",
    },
  },
  {
    id: 4,
    name: "white wave",
    scientificName: "philodendron birkin",
    description:
      "The Philodendron Birkin (sometimes called the White Wave) is characterized by its lush green leaves with white or yellow pinstripes. A unique hybrid, you won't find this plant in the wild. It is a slow-growing plant that can reach up to 3 feet tall indoors if well cared for.",
    price: 360,
    img: "/assets/images/plants/white-wave/white-wave-black.jpeg",
    care: {
      sun: "Thrives in med-bright indirect light. Not suited for direct afternoon sun.",
      water:
        "Water every 1-2 weeks, allowing soil to dry out between waterings. Expect to water more often in brighter light conditions.",
      other: "Toxic to pets!",
    },
  },
  {
    id: 5,
    name: "baby rubber plant",
    scientificName: "peperomia obtusifolia",
    description:
      "The Peperomia obtusifolia, also known as the baby rubber plant, is an easy-going houseplant characterized by its thick, succulent-like green leaves. A popular variety of Peperomia, it does not need much to thrive and might even reward you with white flower spikes once a year.",
    price: 360,
    img: "/assets/images/plants/baby-rubber-plant/baby-rubber-plant-teracotta.jpeg",
    care: {
      sun: "Most prefer medium to bright indirect light, but can tolerate low, indirect light. Not suited for intense, direct sun.",
      water:
        "Water every 1-2 weeks, allowing the potting soil to dry out between waterings. Although some less-succulent varieties are native to the tropics and can benefit from higher humidity, be mindful not to over water them.",
      other:
        "Pet-friendly and non-toxic. Popular houseplants because they are petite and compact. Indoors, most Peperomia plants will stay fairly small, never surpassing two feet tall",
    },
  },
  {
    id: 6,
    name: "pink panther",
    scientificName: "callisia repens",
    description:
      "The Tradescantia Pink Panther is known for its tiny pink and green variegated leaves. Other names for this unique plant include Callisia repens 'Pink Lady' and 'Pink Turtle,' or the creeping inch plant, thanks to its colorful foliage, slow growth habit, and trailing stems as the plant matures.",
    price: 360,
    img: "/assets/images/plants/pink-panther/pink-panther-cream.jpeg",
    care: {
      sun: "Thrives in med-bright indirect light. Not suited for low light or direct sun.",
      water:
        "Water every 1-2 weeks allowing about half the soil to dry out between waterings. Expect to water more often in brighter light conditions and less often in lower light.",
      other:
        "Pet-friendly, but apparently can cause skin irritation despite not being poisonous.",
    },
  },
  {
    id: 7,
    name: "snake plant",
    scientificName: "dracaena trifasciata",
    description:
      "The Snake Plant, or Dracaena trifasciata 'Laurentii', is a succulent plant characterized by its upright sword-like leaves with vibrant yellow edges. It is popular for its incredibly easy-going nature (it can tolerate low light and drought) and its air-purifying capabilities. The easiest way to kill this plant is to overcare for it.",
    price: 360,
    img: "/assets/images/plants/snake-plant/snake-plant-teracotta.jpeg",
    care: {
      sun: "Thrives in medium to bright indirect light, but can tolerate low indirect light.",
      water:
        "Water every 2-3 weeks, allowing soil to dry out between waterings. Expect to water more often in brighter light and less often in lower light.",
      other:
        "You might be surprised to know the Snake Plant is a drought tolerant succulent.",
    },
  },
  {
    id: 8,
    name: "fiddle leaf fig",
    scientificName: "ficus lyrata",
    description:
      "The Fiddle Leaf Fig is famous for its broad, vibrant green leaves with prominent veining. It prefers a stable environment and can be fickle when temps fluctuate. Keep it in bright light, and water about once every 1–2 weeks.",
    price: 360,
    img: "/assets/images/plants/fiddle-leaf-fig/fiddle-leaf-fig-mint.jpeg",
    care: {
      sun: "Thrives in bright indirect light to full sun. Can benefit from a few hours of direct sun.",
      water:
        "Water every 1-2 weeks, allowing soil to dry out between waterings. Expect to water more often in brighter light and less often in lower light.",
      other:
        "In its native environment the Fiddle Leaf Fig, or Ficus lyrata, can grow over 40 feet tall.",
    },
  },
];

export function getPlants() {
  return plants;
}

export function getPlant(name: string) {
  return plants.find((plant) => plant.name === name);
}

export function getMultiplePlants(plants: PlantInfo[], num: number) {
  const shuffled = [...plants].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
}
export interface GardenKitInfo {
  id: number;
  name: string;
  description: string;
  inclusions: string;
  price: number;
  img: string;
}

let gardenKits: GardenKitInfo[] = [
  {
    id: 1,
    name: "potting supplies duo",
    description:
      'Our Potting Supplies Duo is all you need to pot your plants at home. Our all-natural mix gives your plant roots the preferred air, moisture and nutrition balance they need; while our lava rocks create a place for excess water to pool, away from your plant\'s roots. Organic Potting Mix bag is enough to pot 2–3 small plants (5" diam planters) or 1-2 medium plants (7" diam planters).',
    inclusions:
      "Kit includes: one 4.5 quarts (unsettled) bag of Organic Potting Mix (compost, pine bark, coir, worm castings, perlite) and bag of Lava Rocks",
    price: 450,
    img: "/assets/images/kits/potting-supplies-duo.jpeg",
  },
  {
    id: 2,
    name: "soil care kit",
    description:
      "Try our new Soil Care Kit to take your plant care to the next level. We've paired our exclusive Sill Plant Fertilizer with our 3-in-1 Moisture Meter (helps prevent over watering!) and a bag of our signature potting soil.",
    inclusions:
      "Kit includes: 8 fl. oz Plant Fertilizer, 3-in-1 Moisture Meter, 32 oz Potting Mix",
    price: 600,
    img: "/assets/images/kits/soil-care-kit.jpeg",
  },
  {
    id: 3,
    name: "i dig you kit",
    description:
      "Our I Dig You Kit is the perfect birthday or “just because” gift for the fellow plant lovers in your life. The giftable bundle includes a heartleaf Philodendron, small Grant ceramic planter, bag of organic potting mix, bag of lava rocks, plant mister, and gardening gloves. It’s a fun way to let loved ones near and far know you’re thinking of them!",
    inclusions:
      "Kit includes: heartleaf Philodendron in ceramic planter, mister, gardening gloves, bag of organic potting mix, bag of lava rocks",
    price: 900,
    img: "/assets/images/kits/i-dig-you-kit.jpeg",
  },
];

export function getGardenKits() {
  return gardenKits;
}
