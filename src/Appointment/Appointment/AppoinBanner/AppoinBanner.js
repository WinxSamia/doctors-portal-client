
import chair from '../../../assets/images/chair.png'

import { DayPicker } from 'react-day-picker'

const AppoinBanner = ({ selectDate, setSelectDate }) => {

    return (
        <div className="hero w-2/3 my-10 mx-auto">
            <div className="hero-content flex-col lg:flex-row-reverse ">
                <img src={chair} alt='' className=" ml-56 w-1/2 rounded-lg shadow-2xl" />
                <div>
                    <DayPicker
                        mode='single'
                        selected={selectDate}
                        onSelect={setSelectDate}>

                    </DayPicker>

                </div>
            </div>
        </div>
    );
};

export default AppoinBanner;