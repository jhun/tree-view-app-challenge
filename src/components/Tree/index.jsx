import { useState } from "react";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import {
  TreeContainer,
  TreeInternList,
  TreeItemAccordion,
  TreeListContainer,
  TreeListSearch,
} from "./styled";
import componentsIcon from "../../assets/images/components-icon.svg";

const Tree = ({ treeData }) => {
  return (
    <TreeContainer>
      <TreeListSearch />
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
  console.log(item);
  const { children, name, sensorId } = item;

  const [showChildren, setShowChildren] = useState(false);

  const handleClick = () => {
    if (children?.length > 0) {
      setShowChildren(!showChildren);
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
          {sensorId ? <img src={componentsIcon} width="40" /> : <></>}
        </span>
        <span style={{ margin: "5px 0px" }}>{name}</span>
      </TreeItemAccordion>
      <TreeInternList>
        {showChildren && <TreeList treeData={children} />}
      </TreeInternList>
    </>
  );
};

export default Tree;
