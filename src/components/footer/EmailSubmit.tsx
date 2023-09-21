const EmailSubmit = () => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log(event);
      }}
      className="bg-p3-grey flex flex-row justify-between p-4 rounded-lg border-2 border-p3-border max-w-[400px] overflow-scroll"
    >
      <input
        className="bg-transparent text-p3-para font-sans text-base px-4 py-4 mr-2 rounded-lg border-transparent focus:outline-none focus:ring-2 focus:ring-p3-orange focus:border-transparent"
        type="text"
        placeholder="Join our Email List!"
      />
      <button
        type="submit"
        className="bg-p3-orange text-white font-sans text-base px-4 py-4 rounded-lg border-transparent hover:bg-white hover:text-p3-orange whitespace-nowrap"
      >
        Submit Email
      </button>
    </form>
  );
};

export default EmailSubmit;
