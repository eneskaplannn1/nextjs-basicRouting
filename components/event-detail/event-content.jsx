import classes from "./event-logistics.module.css";

function EventContent(props) {
  return <section className={classes.content}>{props.children}</section>;
}

export default EventContent;
