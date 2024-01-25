import { useRef } from "react";

function UserInput(props)
{

 const currentSavings = useRef(); 
 const yearlyContribution=useRef();
 const expectedReturn=useRef();
 const duration=useRef();

 function handleform(formSubmission)
 {
  formSubmission.preventDefault();
   props.handleData({
    'current-savings':currentSavings.current.value,
    'yearly-contribution':yearlyContribution.current.value,
    'expected-return':expectedReturn.current.value,
    'duration':duration.current.value,
   })
 }

return (
<>
<form className="form" onSubmit={handleform}>
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input ref={currentSavings} type="number" id="current-savings" />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input ref={yearlyContribution} type="number" id="yearly-contribution" />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input ref={expectedReturn} type="number" id="expected-return" />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input ref={duration} type="number" id="duration" />
          </p>
        </div>
        <p className="actions">
          <button  type="reset" className="buttonAlt">
            Reset
          </button>
          <button  type="submit" className="button">
            Calculate
          </button>
        </p>
      </form>
</>
);
}

export default UserInput;