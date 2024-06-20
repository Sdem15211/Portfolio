const Project = ({ title, description, img, right }) => {
  return (
    <section>
      <div className="flex flex-col gap-9">
        <div className={`flex flex-col gap-3 ${right ? "items-end" : ""}`}>
          <h1 className="text-mobwork uppercase font-regular">{title}</h1>
          <p className="text-mobbody capitalize font-medium">{description}</p>
        </div>
        <div>
          <img src={img}></img>
        </div>
      </div>
    </section>
  );
};

export default Project;
