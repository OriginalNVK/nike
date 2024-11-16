import { reviews } from '../constants/index.js'
import ReviewCard from '../components/ReviewCard'

const CustomerReviews = () => {
  return (
    <section className="flex justify-center items-center flex-col max-container">
      <h2 className="font-palanquin font-bold text-4xl">
        What Our <span className="text-coral-red"> Customers </span> Say?
      </h2>
      <p className="m-auto mt-4 max-w-lg  text-center info-text">
        Hear genuine stories from our satisfied customers about their exceptional experiences with us.
      </p>
      <div className="mt-24 flex flex-1 justify-evenly items-center gap-x-[200px] max-lg:flex-col gap-14">
        {reviews.map((review, index) => (
            < ReviewCard key={index} {...review} />
        ))}
      </div>
    </section>
  )
}

export default CustomerReviews