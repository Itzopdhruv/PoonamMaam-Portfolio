import Image from 'next/image'

// Shows the whole photo — never cropped. Any space left by a different
// frame shape is filled with a soft, blurred copy of the same photo.
export default function FullPhoto({
  src,
  alt,
  sizes,
  className = '',
  priority,
}: {
  src: string
  alt: string
  sizes: string
  className?: string
  priority?: boolean
}) {
  return (
    <div className={`absolute inset-0 overflow-hidden bg-[#0b2545] ${className}`}>
      <Image src={src} alt="" aria-hidden="true" fill sizes="96px" className="scale-125 object-cover opacity-70 blur-2xl brightness-75" />
      <Image src={src} alt={alt} fill sizes={sizes} priority={priority} draggable={false} className="object-contain" />
    </div>
  )
}
