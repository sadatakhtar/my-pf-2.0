import Icon from "./Icon";
import gitImg from "../assets/git.jpeg";
import htmlImg from "../assets/html.png";
import jsImg from "../assets/js.png";
import reactImg from "../assets/react.png";
import sqlImg from "../assets/postgres.png";

function ShowIcons() {
  return (
    <div className="flex space-x-4 p-2 sm:space-x-7 md:space-x-10 justify-around items-center ">
      <Icon pic={gitImg} />
      <Icon pic={htmlImg} />
      <Icon pic={jsImg} />
      <Icon pic={reactImg} />
      <Icon pic={sqlImg} />
    </div>
  );
}

export default ShowIcons;
