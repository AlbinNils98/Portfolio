
type ChipListProps = {
  readonly items: readonly string[]
}

const ChipList = ({ items }: ChipListProps) =>
  <ul className='flex flex-row flex-wrap gap-2'>
    {items.map((item) =>
      <li className='text-secondary font-primary font-semibold bg-primary py-2 px-4 rounded-full shadow-sm shadow-black hover:animate-jump cursor-default'>{item}</li>
    )}
  </ul>

export default ChipList;