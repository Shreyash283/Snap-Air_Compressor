import { products } from '../data/products'
import ProductCard from './ProductCard'
import SectionHeading from './ui/SectionHeading'

export default function ProductShowcase() {
  return (
    <section id="products" className="section-y bg-white" aria-labelledby="products-heading">
      <div className="section-padding mx-auto max-w-[1600px]">
        <div
          className="mb-16 md:mb-24 lg:mb-28"
          data-pin-intro
          data-reveal
        >
          <SectionHeading
            eyebrow="Our Products"
            title="Wide Range of Air Compressor Solutions"
            description="Explore SNAP’s compressor lineup—designed for industrial performance, efficiency, and dependable service support."
          />
        </div>

        <div className="flex flex-col gap-24 md:gap-32 lg:gap-40">
          {products.map((product, index) => (
            <div key={product.id} id={`product-${product.id}`}>
              <ProductCard
                product={product}
                index={index}
                reversed={index % 2 === 1}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
