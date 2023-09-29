import dayjs from "dayjs";

export const findRelativeTime = date => dayjs(date).fromNow();

export const dayTimeFormatter = date => dayjs(date).format("dddd, h:m A");

export const dateFormatter = date => dayjs(date).format("MMM D YYYY");
