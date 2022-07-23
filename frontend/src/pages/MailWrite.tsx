import ContentEditor from "../components/mailWrite/ContentEditor";

const MailWrite = () => {
  

  return (
    <div className=" w-screen h-screen flex flex-col pt-16  px-16">
      <div className=" flex-auto flex">
        <div className="w-[50%] flex-auto flex flex-col space-y-10 justify-between pt-5 pr-6">
          <div>
            <div className=" text-sm font-semibold">step 3</div>
            <div className=" text-4xl font-semibold">Write the mail</div>
          </div>
          <div className=" flex-auto flex flex-col space-y-4">
            <div>
              <form>
                <label className=" text-sm font-medium" htmlFor="title">
                  Title
                </label>
                <br />
                <input
                  className=" p-1 border bg-[#F7F7F7] rounded shadow-[inset_0px_1px_10px_rgba(0,0,0,0.05)] w-full"
                  type="text"
                  id="title"
                  placeholder="some place holder..."
                />
              </form>
            </div>
            <div>
              <ContentEditor/>
            </div>
            <div>
              <form>
                <label className=" text-sm font-medium" htmlFor="extra">
                  Extra information e.g. contact, banner
                </label>
                <br />
                <textarea
                  id="extra"
                  rows={3}
                  className=" p-1 border bg-[#F7F7F7] rounded shadow-[inset_0px_1px_10px_rgba(0,0,0,0.05)] w-full"
                  placeholder="some place holder..."
                ></textarea>
              </form>
            </div>
          </div>
        </div>
        <div className="w-[50%] flex-auto flex flex-col justify-end pl-6">
          <div className=" w-full h-[90%] rounded-3xl shadow-[0px_4px_15px_rgba(0,0,0,0.1)]"></div>
        </div>
      </div>
      <div className=" flex-initial h-24 flex justify-between pt-4">
        <button className=" bg-bPurple text-bWhite rounded w-24 h-9">
          Back
        </button>
        <button className=" bg-bPurple text-bWhite rounded w-24 h-9">
          Send
        </button>
      </div>
    </div>
  );
};

export default MailWrite;
