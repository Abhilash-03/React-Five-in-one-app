import AccordianList from './AccordianList'
const Accordian = () => {

    const array = [
        {
          id: 1,
        question: 'Is this a good product?',
        answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem.'
    },
        {
            id: 2,
        question: 'How much does it cost?',
        answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem.'
    },
        {
            id: 3,
        question: 'When can I get it?',
        answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem.'
    }

]


  return (
    <div className='accordian'>
        <h1>Frequently Asked Questions</h1>
        <ul>
      {
        array.map((val) => (
            <AccordianList key={val.id} className="accordList" val = {val} />
        ))
      }
      </ul>
    </div>
  )
}

export default Accordian
