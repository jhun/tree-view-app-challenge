import { useState } from "react";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import {
  TreeContainer,
  TreeInternList,
  TreeItemAccordion,
  TreeListContainer,
  TreeListSearch,
} from "./styled";
import { FaCodepen } from "react-icons/fa6";
import { MdOutlineLocationOn } from "react-icons/md";
import { TbCube } from "react-icons/tb";
import { FaCircle } from "react-icons/fa";
import { useFilters } from "../../contexts/filters";
import { IoSearch } from "react-icons/io5";
import { useAsset } from "../../contexts/asset";

const Tree = ({ treeData }) => {
  const { searchString, setSearchString } = useFilters();

  return (
    <TreeContainer>
      <TreeListSearch>
        <input
          type="text"
          placeholder="Search for an asset or location"
          onChange={(e) => setSearchString(e.target.value)}
        />
        <IoSearch size={30} />
      </TreeListSearch>
      <TreeList treeData={treeData} />
    </TreeContainer>
  );
};

const TreeList = ({ treeData }) => {
  return (
    <TreeListContainer>
      {treeData?.map((item) => (
        <TreeItem item={item} key={item.id} />
      ))}
    </TreeListContainer>
  );
};

const TreeItem = ({ item }) => {
  const { children, name, sensorId, isLocation, isAsset, status } = item;
  const { asset, setAsset } = useAsset();

  const [showChildren, setShowChildren] = useState(false);

  const handleClick = () => {
    if (children?.length > 0) {
      setShowChildren(!showChildren);
    } else {
      if (sensorId) {
        setAsset(item);
      }
    }
  };
  return (
    <>
      <TreeItemAccordion onClick={handleClick}>
        <span style={{ margin: "4px 5px 0px 0px" }}>
          {children?.length > 0 ? (
            showChildren ? (
              <IoIosArrowDown />
            ) : (
              <IoIosArrowForward />
            )
          ) : (
            <></>
          )}
        </span>
        <span style={{ margin: "4px 5px 0px 0px" }}>
          {sensorId ? (
            <FaCodepen size={22} color={"var(--tertiary-color)"} />
          ) : (
            <></>
          )}
          {isLocation ? (
            <MdOutlineLocationOn size={30} color={"var(--tertiary-color)"} />
          ) : (
            <></>
          )}
          {isAsset ? (
            <TbCube size={22} color={"var(--tertiary-color)"} />
          ) : (
            <></>
          )}
        </span>
        <span style={{ margin: "5px 0px" }}>{name}</span>
        <span style={{ margin: "-3px 0px 0px 8px" }}>
          {status ? (
            <FaCircle
              size={10}
              color={
                status === "operating"
                  ? "green"
                  : status === "alert"
                  ? "red"
                  : "#cccccc"
              }
            />
          ) : (
            <></>
          )}
        </span>
      </TreeItemAccordion>
      <TreeInternList>
        {showChildren && <TreeList treeData={children} />}
      </TreeInternList>
    </>
  );
};

export default Tree;
