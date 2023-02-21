const CalendarCard = (props) => {
  return (
    <div className="">
      <h4 className="font-light text-lg underline ">{props.title}</h4>
      <h4 className="font-bold text-lg text-blue2">{props.date}</h4>
      <h3 className="md:text-2xl text-lg">{props.desc}</h3>
    </div>
  );
};

export default CalendarCard;
