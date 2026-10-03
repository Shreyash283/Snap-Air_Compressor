import Button from './ui/Button'
import PlaceholderImage from './ui/PlaceholderImage'

export default function ProductCard({ product, index, reversed = false }) {
  return (
    <article
      className={`group grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
        reversed ? 'lg:[direction:rtl]' : ''
      }`}
      data-reveal
    >
      <div className={`${reversed ? 'lg:[direction:ltr]' : ''}`}>
        <div className="overflow-hidden">
          <PlaceholderImage
            src={product.image}
            alt={product.imageAlt}
            label={product.image}
            aspectClass="aspect-[4/3] lg:aspect-[5/4]"
            className="transition-transform duration-700 ease-[var(--ease-premium)] group-hover:scale-[1.03]"
            imgClassName="scale-105 transition-transform duration-700 group-hover:scale-100"
          />
        </div>
      </div>

      <div className={`${reversed ? 'lg:[direction:ltr]' : ''}`}>
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-snap-red">
          {String(index + 1).padStart(2, '0')}
        </span>
        <p className="mt-2 text-sm font-medium uppercase tracking-wider text-snap-gray-dark">
          {product.category}
        </p>
        <h3 className="mt-4 text-3xl font-bold tracking-tight text-snap-black sm:text-4xl">
          {product.name}
        </h3>
        <p className="mt-5 max-w-lg text-base leading-relaxed text-snap-gray-dark">
          {product.description}
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button
            href={`#product-${product.id}`}
            variant="primary"
            size="md"
          >
            View Details →
          </Button>
          <Button href="#contact" variant="secondary" size="md">
            Enquire Now
          </Button>
        </div>
      </div>
    </article>
  )
}
