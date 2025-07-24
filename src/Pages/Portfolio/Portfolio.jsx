import Card from "../../Components/Portfolio/Card";
import Header from "./../../Components/Reusable/Header";
import house from "./../../assets/images/house.png";
import cake from "./../../assets/images/cake.png";
import camp from "./../../assets/images/camp.png";

export default function Portfolio() {
  let images = [
    { id: 0, path: house },
    { id: 1, path: cake },
    { id: 2, path: camp },
    { id: 3, path: house },
    { id: 4, path: cake },
    { id: 5, path: camp },
  ];

  return (
    <>
      <div className="container py-4">
        <Header title="PORTFOLIO COMPONENT" sentColor="var(--main-color)" />
        <div className="row ">
          {images.map((image) => {
            return <Card path={image.path} />;
          })}
        </div>
      </div>
    </>
  );
}
