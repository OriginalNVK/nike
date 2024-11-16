import Button from "../components/Button"

const Subscribes = () => {
  return (
    <section className="max-container flex justify-between items-center max-xl:flex-col gap-10" id="contact-us">
      <h1 className="font-palanquin leading-[68px] lg:max-w-md text-4xl font-bold">
        Sign Up for
        <span className="text-coral-red"> Updates </span>
        & Newsletter
      </h1>

      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
        <input type="email" placeholder="subcribe@nike.com" className="input" />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label="Sign Up" fullWidth />
        </div>
      </div>

    </section>
  )
}

export default Subscribes