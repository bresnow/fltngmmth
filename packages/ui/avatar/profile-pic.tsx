import React from "react";
import { Link } from "@remix-run/react";

interface Props {
  withBorder?: boolean;
  withInfo?: boolean;
  img?: string;
  size?: "small" | "normal" | "big" | "monster";
  type?: "square" | "rounded" | "full";
  to?: string;
}
const ProfilePic = ({ withBorder, size, withInfo, type, img, to }: Props) => {
  let sizeClasses = "h-16 w-16";
  if (size && size !== "normal") {
    sizeClasses = size === "small" ? "h-6 w-6" : "h-20 w-20";
    if (size === "monster") {
      sizeClasses = "h-40 w-40";
    }
  }

  let roundedClasses = "rounded-full";
  if (type && type !== "full") {
    roundedClasses = type === "square" ? "" : "rounded-lg";
  }
  return (
    <Link to={`${to}`} className="block relative">
      <img
        alt="profil"
        src={img || "/icons/icon-384x384.png"}
        className={`mx-auto object-cover ${roundedClasses} ${sizeClasses} ${
          withBorder ? " border-2 border-white dark:border-gray-800" : ""
        }`}
      />
      {withInfo && (
        <span className="absolute w-3 border-2 left-1/2 -bottom-2 transform -translate-x-1/2 border-white h-3 bg-green-500 rounded-full"></span>
      )}
    </Link>
  );
};
export { ProfilePic };
