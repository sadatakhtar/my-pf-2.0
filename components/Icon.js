import Image from "next/image";

function Icon({ pic }) {
  return (
    <div className="p-2 ">
      <Image
        className="rounded-2xl "
        src={pic}
        width={100}
        height={100}
        alt="icon"
      />
    </div>
  );
}

export default Icon;
