const CalendarCard = (props) => {
  return (
    <div>
      <h4 className="font-light text-lg underline">{props.title}</h4>
      <h4 className="font-semibold text-sm text-blue2">{props.date}</h4>
      <h3 className="text-2xl">{props.desc}</h3>
    </div>
  );
};

export default CalendarCard;
