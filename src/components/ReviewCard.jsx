import { star } from "../assets/icons"

const ReviewCard = ({imgURL, customerName, rating, feedback}) => {
  return (
      <div className='flex justify-center items-center flex-col'>
          <img src={imgURL} alt={customerName} width={ 120 } height={120} className='rounded-full object-cover' />
          <p className="mt-6 text-center max-w-sm info-text">{feedback}</p>
          <div className="mt-3 flex justify-center items-center gap-2.5">
              <img src={star} alt="rating" width={24} height={24} className='object-contain' />   
              <p className="font-montserrat text-slate-gray text-xl">({rating})</p>
          </div>
          <h3 className="font-palanquin font-bold text-3xl mt-2 text-center">{ customerName }</h3>
    </div>
  )
}

export default ReviewCard