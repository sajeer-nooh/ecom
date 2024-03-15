import React from "react";

export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
export function randomId (length = 10) {
  return Math.random().toString(36).substring(2, length+2);
};
