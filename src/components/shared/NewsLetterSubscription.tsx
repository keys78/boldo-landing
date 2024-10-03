const NewsLetterSubscription = () => {
  return (
    <div className="bg-customNavy rounded-[12px] pt-[100px] pb-[40px] flex items-center flex-col justify-center">
      <h3 className="manrope text-[48px] text-white max-w-[750px] text-center mx-auto">
        An enterprise template to ramp up your company website
      </h3>
      <form className="flex items-center space-x-6 max-w-[700px] py-[48px] text-[20px]">
        <input
          type="text"
          className="rounded-full py-4 bg-white w-full px-24"
          placeholder="Your email address"
          required
        />
        <button
          type="submit"
          className="text-customNavy bg-customGreen py-4 px-12 rounded-full whitespace-nowrap font-semibold"
        >
          Start Now
        </button>
      </form>
    </div>
    
  );
};

export default NewsLetterSubscription;
