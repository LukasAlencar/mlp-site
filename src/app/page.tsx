import CarouselMlp from "./components/Carousel-mlp"
import { OffersAndPrays } from "./components/offers-and-prays"
import { fetchHygraphQuery } from "./utils/fetch-hygraph-query"

const getPageData = async () => {
  const query = `
    query MyQuery {
      page(where: {slug: "home"}) {
        slug
        carouselImages {
          url
          id
        }
      }
    }
  `

  return fetchHygraphQuery(query);
}

export default async function Home() {

  const response = await getPageData();

  return (
    <main className="w-full h-full">
      <CarouselMlp imgs={response.data.page.carouselImages} />
      <OffersAndPrays />
    </main>
  )
}