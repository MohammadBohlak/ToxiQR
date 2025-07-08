import { useTranslation } from "react-i18next";
import app_store from "../../../assets/images/app-store.png";
import goolge_play from "../../../assets/images/google-play.png";
import d1 from "../../../assets/images/mockup/black/1.png";
import d3 from "../../../assets/images/mockup/black/3.png";
import d4 from "../../../assets/images/mockup/black/4.png";
import { SubTitle, Text } from "../../common/texts";
import { LeftDevices, RightDevices, StyledDevices } from "./devices.styles";

const Devices = () => {
  const { t } = useTranslation();
  return (
    <>
      <StyledDevices className="m-0">
        <LeftDevices md={6} className="bg-white d-flex flex-column gap-4">
          <SubTitle $align="initial" $bold={false}>
            {t("devices.subTitle")}
          </SubTitle>
          <Text>{t("devices.text")}</Text>
          <div className="buttons d-flex gap-4 flex-wrap align-items-center mt-2">
            <a href="https://play.google.com/store/apps/details?id=your.app.id">
              <img src={goolge_play} alt={t("devices.buttons.googlePlay")} />
            </a>

            <a href="https://apps.apple.com/app/idYOUR_APP_ID">
              <img src={app_store} alt={t("devices.buttons.appStore")} />
            </a>
          </div>
        </LeftDevices>
        <RightDevices md={6}>
          <img className="d d4" src={d4} alt="" />
          <img className="d d1" src={d1} alt="" />
          <img className="d d3" src={d3} alt="" />
        </RightDevices>
      </StyledDevices>
    </>
  );
};

export default Devices;
