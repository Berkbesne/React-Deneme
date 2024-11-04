import React from "react";
import Dingo from "./image/dingo.jpg";
import İbex from "./image/ibex.jpg";
import Kitten from "./image/kitten.jpg";
import Orangutan from "./image/orangutan.jpg";
import Hedgehog from "./image/hedgehog.jpg";
import Zebra from "./image/zebra.jpg";
const courseMap = {
  İbex,
  Dingo,
  Hedgehog,
  Orangutan,
  Zebra,
  Kitten,
};
function Course({ courseName, width = 300, height = 300 }) {
  return (
    <div>
      <img src={courseMap[courseName]} width={width} height={height} alt="" />
    </div>
  );
}
export default Course;
