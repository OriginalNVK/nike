const SocialButton = ({src, alt}) => {
  return (
      <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
          <img src={src} alt={alt}  width={25} height={25} className=""/>
    </div>
  )
}

export default SocialButton