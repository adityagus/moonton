import propTypes from 'prop-types'

const InputError = function InputError({ message, className = '' }) {
  return(
    Object.keys(message).length != 0 && (
      <div className="my-4 px-4 py-2 border-red-600 border-2 rounded-md">
        <div className="font-medium text-red-400">Whoops! Something went wrong</div>
          <ul className='mt-3 list-disc list-inside text-sm text-red-600'>
            {Object.keys(message).map((key, index) => {
              return(
                <li key={index}>{message[key]}</li>
              )
            })}
          </ul>
      </div>
    )
  )
  
}

InputError.propTypes = {
    message: propTypes.object,
    className: propTypes.string
}

export default InputError;
