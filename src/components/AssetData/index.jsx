import { useAsset } from "../../contexts/asset";
import { AssetDataContainer } from "./styled";

const AssetData = () => {
  const { asset, setAsset } = useAsset();

  return (
    <AssetDataContainer>
      {Object.keys(asset).map(function (key, index) {
        return (
          <div key={index}>
            <span style={{ fontWeight: "bold" }}>{key}</span>: {asset[key]}
          </div>
        );
      })}
    </AssetDataContainer>
  );
};

export default AssetData;
