import { LuArmchair } from 'react-icons/lu';
import PropTypes from 'prop-types';

const SelectedSeats = ({ selectedSeats }) => {
  return (
    <div className=''>
      <div className='flex justify-between items-center'>
        <h1 className='text-base flex items-center gap-2'>
          <span>
            <LuArmchair />
          </span>{' '}
          Available Seat
        </h1>
        <h1 className='text-base flex items-center gap-2'>
          <span className='text-red-600'>
            <LuArmchair />
          </span>{' '}
          Booked Seat
        </h1>
        <h1 className='text-base flex items-center gap-2'>
          <span className='text-lime-600'>
            <LuArmchair />
          </span>{' '}
          Selected Seat
        </h1>
      </div>
      <hr className='mt-2 mb-3' />
      <table className='w-full border'>
        <tr className='bg-gray-200'>
          <th>Seats</th>
          <th>Fare</th>
          <th>Class</th>
        </tr>
        {selectedSeats.map((seat, index) => {
          return (
            <tr key={index} className='text-center'>
              <td>{seat.number}</td>
              <td>৳{seat.fare}</td>
              <td>{seat.class}</td>
            </tr>
          );
        })}
      </table>
      <div className='text-right'>
        <h1>
          Total: ৳{selectedSeats.reduce((price, next) => price + next.fare, 0)}
        </h1>
      </div>
    </div>
  );
};

SelectedSeats.propTypes = {
  selectedSeats: PropTypes.array.isRequired,
};

export default SelectedSeats;
