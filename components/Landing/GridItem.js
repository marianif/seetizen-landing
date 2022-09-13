import styles from "@/styles/home/FeaturesGrid.module.css"
import {
  BsSearch,
  BsFillCalendar2RangeFill,
  BsCardChecklist,
  BsBook,
} from "react-icons/bs"
import { HiUserGroup } from "react-icons/hi"
import { RiRoadMapLine } from "react-icons/ri"

const SIZE = 36
const COLOR = "#000"

const GridItem = ({ item }) => {
  const { icon, heading, paragraph } = item
  return (
    <div className={styles.gridItem}>
      <span className={styles.iconContainer}>
        {icon === "search" ? (
          <BsSearch size={SIZE} color={COLOR} />
        ) : icon === "group" ? (
          <HiUserGroup size={SIZE} color={COLOR} />
        ) : icon === "invitations" ? (
          <BsCardChecklist size={SIZE} color={COLOR} />
        ) : icon === "events" ? (
          <BsFillCalendar2RangeFill size={SIZE} color={COLOR} />
        ) : icon === "news" ? (
          <BsBook size={SIZE} color={COLOR} />
        ) : (
          icon === "map" && <RiRoadMapLine size={SIZE} color={COLOR} />
        )}
      </span>
      <h3>{heading}</h3>
      <p className="p-sm">{paragraph}</p>
    </div>
  )
}

export default GridItem
