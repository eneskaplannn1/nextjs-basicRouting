import EventItem from "./event-item";
import classes from "./event-list.module.css";

function EventList(props) {
  return (
    <ul className={classes.list}>
      {props.items.map((item) => {
        return <EventItem key={item.id} data={item} />;
      })}
    </ul>
  );
}

export default EventList;
