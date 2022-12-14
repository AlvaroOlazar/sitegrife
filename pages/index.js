import { Nav } from '../component/navbar'
import { Carousel } from '../component/carousel'
import { Card } from '../component/card'
import { Footer } from '../component/footer'

export default function Home() {
  return (
    <header>
        <Nav></Nav>
        <Carousel></Carousel>
        <Card></Card>
        <Footer></Footer>
    </header>
  )
}