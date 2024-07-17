import { result } from "@/utils/actions";
// import { res } from "@/utils/db";

const page = () => {
  return (
    <div>
      <form action={result}>
        <button className="p-2 border-2 border-black rounded-md w-fit m-10">
          Click Here
        </button>
      </form>
    </div>
  );
};

export default page;
