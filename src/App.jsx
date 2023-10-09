import { useState } from 'react';
import Seats from './components/Seats';
import SelectedSeats from './components/SelectedSeats';

const App = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatSelection = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };
  return (
    <div className='w-5/6 mx-auto my-5'>
      <h1 className='text-xl'>Choose your seat</h1>
      <div className='mt-5 grid grid-cols-2 gap-4'>
        <Seats
          handleSeatSelection={handleSeatSelection}
          selectedSeats={selectedSeats}
        />
        <SelectedSeats selectedSeats={selectedSeats} />
      </div>
    </div>
  );
};

export default App;
