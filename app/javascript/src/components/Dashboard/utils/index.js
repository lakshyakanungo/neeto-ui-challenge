import dayjs from "dayjs";

export const getRelativeTime = date => dayjs(date).fromNow();

export const getDayAndTime = date => dayjs(date).format("dddd, h:m A");

export const getMonthAndDate = date => dayjs(date).format("MMM D YYYY");
