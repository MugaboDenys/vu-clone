import Link from "next/link";

const CalendarCard = (props) => {
  return (
    <Link href={'/'} className="block md:min-w-[10rem]">
      <h4 className="font-light text-lg underline ">{props.title}</h4>
      <h4 className="font-bold text-lg text-blue2">{props.date}</h4>
      <h3 className="md:text-2xl text-lg">{props.desc}</h3>
    </Link>
  );
};

export default CalendarCard;
